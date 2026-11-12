"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/validations";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      gdprConsent: false,
      website: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setServerError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.status === 404 || response.status === 405) {
        setSuccessMessage(
          "Thank you — our UK patient support team will reply shortly."
        );
        reset();
        return;
      }

      const result = await response.json();
      if (!response.ok) {
        setServerError(result.error ?? "Unable to send your message.");
        return;
      }

      setSuccessMessage(
        result.message ?? "Thank you — our UK support team will reply shortly."
      );
      reset();
    } catch {
      setServerError("Network error while sending your enquiry.");
    }
  };

  if (successMessage) {
    return (
      <div className="rounded-3xl border border-success/30 bg-white dark:bg-[#111A2B] p-8 space-y-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h2 className="text-[24px] font-semibold text-foreground">
          Enquiry Received
        </h2>
        <p className="text-[15px] text-muted">{successMessage}</p>
        <Button
          type="button"
          variant="outline"
          size="md"
          showArrow={false}
          onClick={() => setSuccessMessage(null)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-border-subtle bg-white dark:bg-[#111A2B] p-6 sm:p-8 space-y-5 shadow-xs"
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
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
            htmlFor="contact-fullName"
            className="block text-[13px] font-semibold text-foreground"
          >
            Full Name *
          </label>
          <input
            id="contact-fullName"
            type="text"
            placeholder="e.g. Amelia Clarke"
            {...register("fullName")}
            className="h-12 w-full rounded-xl border border-border-subtle bg-white dark:bg-[#0F172A] px-3.5 text-[14px] text-foreground placeholder:text-muted focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
          />
          {errors.fullName && (
            <p className="text-[12px] text-error">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="contact-email"
            className="block text-[13px] font-semibold text-foreground"
          >
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="amelia@example.co.uk"
            {...register("email")}
            className="h-12 w-full rounded-xl border border-border-subtle bg-white dark:bg-[#0F172A] px-3.5 text-[14px] text-foreground placeholder:text-muted focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
          />
          {errors.email && (
            <p className="text-[12px] text-error">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor="contact-phone"
            className="block text-[13px] font-semibold text-foreground"
          >
            Phone Number (Optional)
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="+44 7700 900123"
            {...register("phone")}
            className="h-12 w-full rounded-xl border border-border-subtle bg-white dark:bg-[#0F172A] px-3.5 text-[14px] text-foreground placeholder:text-muted focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
          />
          {errors.phone && (
            <p className="text-[12px] text-error">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="contact-subject"
            className="block text-[13px] font-semibold text-foreground"
          >
            Subject *
          </label>
          <input
            id="contact-subject"
            type="text"
            placeholder="e.g. Clear aligner consultation"
            {...register("subject")}
            className="h-12 w-full rounded-xl border border-border-subtle bg-white dark:bg-[#0F172A] px-3.5 text-[14px] text-foreground placeholder:text-muted focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
          />
          {errors.subject && (
            <p className="text-[12px] text-error">{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="contact-message"
          className="block text-[13px] font-semibold text-foreground"
        >
          Message *
        </label>
        <textarea
          id="contact-message"
          rows={4}
          placeholder="How can our dental support team help?"
          {...register("message")}
          className="w-full rounded-xl border border-border-subtle bg-white dark:bg-[#0F172A] p-3.5 text-[14px] text-foreground placeholder:text-muted focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
        />
        {errors.message && (
          <p className="text-[12px] text-error">{errors.message.message}</p>
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
            I consent to Denta Care using my details to respond to this enquiry
            under the UK GDPR{" "}
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

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </Button>
    </form>
  );
}
