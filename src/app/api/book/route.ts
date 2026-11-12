import { NextResponse } from "next/server";
import { Resend } from "resend";
import { bookingSchema } from "@/lib/validations";
import { clinics } from "@/data/clinics";
import { getTreatmentBySlug } from "@/data/treatments";

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
        { error: "Too many requests. Please wait a few seconds and try again." },
        { status: 429 }
      );
    }

    const body: unknown = await request.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Please check your booking details.",
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    if (data.website && data.website.length > 0) {
      return NextResponse.json(
        { reference: "DC-IGNORED", message: "Booking received." },
        { status: 200 }
      );
    }

    const clinic = clinics.find((c) => c.id === data.clinicId);
    const treatment = getTreatmentBySlug(data.treatmentSlug);
    const reference = `DC-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    const resendKey = process.env.RESEND_API_KEY;
    const clinicEmail = process.env.CLINIC_BOOKING_EMAIL;

    if (resendKey && clinicEmail) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "Denta Care Bookings <bookings@dentacare.co.uk>",
        to: [clinicEmail],
        replyTo: data.email,
        subject: `New Appointment Request (${reference}) — ${clinic?.name ?? data.clinicId}`,
        text: [
          `Reference: ${reference}`,
          `Patient: ${data.fullName}`,
          `Email: ${data.email}`,
          `Phone: ${data.phone}`,
          `Clinic: ${clinic?.name ?? data.clinicId}`,
          `Treatment: ${treatment?.title ?? data.treatmentSlug}`,
          `Preferred Date: ${data.preferredDate}`,
          `Preferred Time: ${data.preferredTimeSlot}`,
          `Notes: ${data.notes || "None"}`,
        ].join("\n"),
      });
    }

    return NextResponse.json(
      {
        reference,
        clinicName: clinic?.name ?? data.clinicId,
        treatmentTitle: treatment?.title ?? data.treatmentSlug,
        preferredDate: data.preferredDate,
        preferredTimeSlot: data.preferredTimeSlot,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to process your booking right now. Please call our reception team." },
      { status: 500 }
    );
  }
}
