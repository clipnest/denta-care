"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Calendar, MapPin } from "lucide-react";
import {
  bookingSchema,
  TIME_SLOTS,
  type BookingFormValues,
} from "@/lib/validations";
import { clinics } from "@/data/clinics";
import { treatments } from "@/data/treatments";
import { Button } from "@/components/ui/Button";

interface BookingConfirmation {
  reference: string;
  clinicName: string;
  treatmentTitle: string;
  preferredDate: string;
  preferredTimeSlot: string;
}

export function BookingForm() {
  const searchParams = useSearchParams();
  const initialTreatment = searchParams.get("treatment") ?? "";
  const initialClinic = searchParams.get("clinic") ?? "";

  const [serverError, setServerError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(
    null
  );

  const today = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      clinicId: initialClinic,
      treatmentSlug: initialTreatment,
      preferredDate: "",
      preferredTimeSlot: "Morning",
      notes: "",
      gdprConsent: false,
      website: "",
    },
  });

  useEffect(() => {
    if (initialTreatment) setValue("treatmentSlug", initialTreatment);
    if (initialClinic) setValue("clinicId", initialClinic);
  }, [initialTreatment, initialClinic, setValue]);

  const onSubmit = async (values: BookingFormValues) => {
    setServerError(null);
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.status === 404 || response.status === 405) {
        const clinic = clinics.find((c) => c.id === values.clinicId);
        const treatment = treatments.find(
          (t) => t.slug === values.treatmentSlug
        );
        setConfirmation({
          reference: `DC-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
          clinicName: clinic?.name ?? values.clinicId,
          treatmentTitle: treatment?.title ?? values.treatmentSlug,
          preferredDate: values.preferredDate,
          preferredTimeSlot: values.preferredTimeSlot,
        });
        return;
      }

      const result = await response.json();
      if (!response.ok) {
        setServerError(
          result.error ?? "Something went wrong. Please try again."
        );
        return;
      }

      setConfirmation(result);
    } catch {
      setServerError(
        "Network error while submitting your booking. Please try again."
      );
    }
  };

  if (confirmation) {
    return (
      <div className="rounded-3xl border border-success/30 bg-white dark:bg-[#111A2B] p-8 sm:p-10 shadow-xs space-y-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <div className="space-y-2">
          <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-success">
            Booking Request Confirmed
          </p>
          <h2 className="text-[28px] font-semibold text-foreground">
            Reference: {confirmation.reference}
          </h2>
          <p className="text-[15px] leading-relaxed text-muted">
            Thank you. Our reception team at{" "}
            <strong className="text-foreground">
              {confirmation.clinicName}
            </strong>{" "}
            will confirm your exact appointment slot by email or phone shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 rounded-2xl bg-surface/60 p-5 sm:grid-cols-2 text-[14px]">
          <div className="flex items-start gap-2.5">
            <MapPin className="mt-0.5 h-4 w-4 text-accent-blue shrink-0" />
            <div>
              <p className="text-muted">Clinic</p>
              <p className="font-semibold text-foreground">
                {confirmation.clinicName}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Calendar className="mt-0.5 h-4 w-4 text-accent-blue shrink-0" />
            <div>
              <p className="text-muted">Preferred Slot</p>
              <p className="font-semibold text-foreground">
                {confirmation.preferredDate} ({confirmation.preferredTimeSlot})
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <Button href="/" size="md">
            Return Home
          </Button>
          <Button
            type="button"
            variant="outline"
            size="md"
            showArrow={false}
            onClick={() => setConfirmation(null)}
          >
            Book Another Visit
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-border-subtle bg-white dark:bg-[#111A2B] p-6 sm:p-10 space-y-6 shadow-xs"
    >
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="booking-website">Website</label>
        <input
          id="booking-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {serverError && (
        <div
          role="alert"
          className="rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-[14px] text-error"
        >
          {serverError}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor="clinicId"
            className="block text-[13px] font-semibold text-foreground"
          >
            Preferred UK Clinic *
          </label>
          <select
            id="clinicId"
            {...register("clinicId")}
            className="h-12 w-full rounded-xl border border-border-subtle bg-white dark:bg-[#0F172A] px-3.5 text-[14px] text-foreground focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
          >
            <option value="">Select a clinic...</option>
            {clinics.map((clinic) => (
              <option key={clinic.id} value={clinic.id}>
                {clinic.name} ({clinic.city})
              </option>
            ))}
          </select>
          {errors.clinicId && (
            <p className="text-[12px] text-error">{errors.clinicId.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="treatmentSlug"
            className="block text-[13px] font-semibold text-foreground"
          >
            Treatment Type *
          </label>
          <select
            id="treatmentSlug"
            {...register("treatmentSlug")}
            className="h-12 w-full rounded-xl border border-border-subtle bg-white dark:bg-[#0F172A] px-3.5 text-[14px] text-foreground focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
          >
            <option value="">Select a treatment...</option>
            {treatments.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.title}
              </option>
            ))}
          </select>
          {errors.treatmentSlug && (
            <p className="text-[12px] text-error">
              {errors.treatmentSlug.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor="preferredDate"
            className="block text-[13px] font-semibold text-foreground"
          >
            Preferred Date *
          </label>
          <input
            id="preferredDate"
            type="date"
            min={today}
            {...register("preferredDate")}
            className="h-12 w-full rounded-xl border border-border-subtle bg-white dark:bg-[#0F172A] px-3.5 text-[14px] text-foreground focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
          />
          {errors.preferredDate && (
            <p className="text-[12px] text-error">
              {errors.preferredDate.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="preferredTimeSlot"
            className="block text-[13px] font-semibold text-foreground"
          >
            Preferred Time Window *
          </label>
          <select
            id="preferredTimeSlot"
            {...register("preferredTimeSlot")}
            className="h-12 w-full rounded-xl border border-border-subtle bg-white dark:bg-[#0F172A] px-3.5 text-[14px] text-foreground focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
          >
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot} (10:00 AM - 07:00 PM)
              </option>
            ))}
          </select>
          {errors.preferredTimeSlot && (
            <p className="text-[12px] text-error">
              {errors.preferredTimeSlot.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="space-y-1.5">
          <label
            htmlFor="fullName"
            className="block text-[13px] font-semibold text-foreground"
          >
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Oliver Bennett"
            {...register("fullName")}
            className="h-12 w-full rounded-xl border border-border-subtle bg-white dark:bg-[#0F172A] px-3.5 text-[14px] text-foreground placeholder:text-muted focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
          />
          {errors.fullName && (
            <p className="text-[12px] text-error">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="block text-[13px] font-semibold text-foreground"
          >
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            placeholder="oliver@example.co.uk"
            {...register("email")}
            className="h-12 w-full rounded-xl border border-border-subtle bg-white dark:bg-[#0F172A] px-3.5 text-[14px] text-foreground placeholder:text-muted focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
          />
          {errors.email && (
            <p className="text-[12px] text-error">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="phone"
            className="block text-[13px] font-semibold text-foreground"
          >
            UK Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+44 7700 900123"
            {...register("phone")}
            className="h-12 w-full rounded-xl border border-border-subtle bg-white dark:bg-[#0F172A] px-3.5 text-[14px] text-foreground placeholder:text-muted focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
          />
          {errors.phone && (
            <p className="text-[12px] text-error">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="notes"
          className="block text-[13px] font-semibold text-foreground"
        >
          Additional Notes (Optional)
        </label>
        <textarea
          id="notes"
          rows={3}
          placeholder="Let us know if you have dental anxiety, specific symptoms, or accessibility needs."
          {...register("notes")}
          className="w-full rounded-xl border border-border-subtle bg-white dark:bg-[#0F172A] p-3.5 text-[14px] text-foreground placeholder:text-muted focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
        />
        {errors.notes && (
          <p className="text-[12px] text-error">{errors.notes.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("gdprConsent")}
            className="mt-1 h-4 w-4 rounded border-border-subtle text-primary focus:ring-accent-blue"
          />
          <span className="text-[13px] leading-relaxed text-muted">
            I consent to Denta Care processing my details to arrange this
            appointment in accordance with the UK GDPR{" "}
            <a
              href="/privacy"
              className="font-medium text-foreground underline hover:text-primary"
            >
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.gdprConsent && (
          <p className="text-[12px] text-error">{errors.gdprConsent.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Submitting Request..." : "Request Appointment"}
      </Button>
    </form>
  );
}
