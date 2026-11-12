import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, ShieldCheck, Phone } from "lucide-react";
import { BookingForm } from "@/components/forms/BookingForm";
import { PillTag } from "@/components/ui/PillTag";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Request a dental appointment at any of Denta Care's 20+ UK clinics. Open daily 10:00 AM - 07:00 PM.",
};

export default function BookPage() {
  return (
    <div className="mx-auto max-w-[1240px] px-6 py-12 lg:px-12 lg:py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-4 space-y-6">
          <PillTag tone="sky">Online Booking</PillTag>
          <h1 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground sm:text-[42px]">
            Book your dental visit
          </h1>
          <p className="text-[15px] leading-[1.65] text-muted">
            Select your preferred UK clinic, treatment, and time window. Our
            reception team will confirm your exact appointment slot promptly.
          </p>

          <div className="space-y-4 rounded-2xl bg-surface/70 p-6 border border-sky-strip/40 text-[14px]">
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 text-accent-blue shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Opening Hours</p>
                <p className="text-muted">10:00 AM - 07:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-accent-blue shrink-0" />
              <div>
                <p className="font-semibold text-foreground">
                  No Upfront Payment
                </p>
                <p className="text-muted">
                  Clear treatment plans &amp; fees shared before any care.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-accent-blue shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Urgent Care?</p>
                <a
                  href="tel:+442079460192"
                  className="text-primary-accessible font-medium hover:underline"
                >
                  Call +44 20 7946 0192
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <Suspense
            fallback={
              <div className="h-[520px] rounded-3xl border border-border-subtle bg-surface/30 animate-pulse" />
            }
          >
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
