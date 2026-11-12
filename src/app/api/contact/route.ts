import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";

const rateLimitMap = new Map<string, number>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const lastRequest = rateLimitMap.get(ip);
  if (lastRequest && now - lastRequest < 10_000) {
    return true;
  }
  rateLimitMap.set(ip, now);
  return false;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Please wait a few seconds before sending another message." },
        { status: 429 }
      );
    }

    const body: unknown = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Please check your enquiry details.",
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    if (data.website && data.website.length > 0) {
      return NextResponse.json(
        { message: "Enquiry received." },
        { status: 200 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const clinicEmail = process.env.CLINIC_BOOKING_EMAIL;

    if (resendKey && clinicEmail) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "Denta Care Support <support@dentacare.co.uk>",
        to: [clinicEmail],
        replyTo: data.email,
        subject: `Patient Enquiry: ${data.subject}`,
        text: [
          `From: ${data.fullName} (${data.email})`,
          `Phone: ${data.phone || "Not provided"}`,
          `Subject: ${data.subject}`,
          "",
          data.message,
        ].join("\n"),
      });
    }

    return NextResponse.json(
      { message: "Thank you — our UK patient support team will reply shortly." },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to send your enquiry right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
