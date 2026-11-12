import type { Metadata } from "next";
import { PillTag } from "@/components/ui/PillTag";

export const metadata: Metadata = {
  title: "Privacy Policy & UK GDPR",
  description:
    "How Denta Care UK collects, stores, and protects your personal and appointment enquiry data under UK GDPR.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-[860px] px-6 py-12 lg:px-12 lg:py-16 space-y-6">
      <PillTag tone="sky">UK GDPR Notice</PillTag>
      <h1 className="text-[32px] font-semibold tracking-[-0.02em] text-foreground sm:text-[40px]">
        Privacy Policy
      </h1>
      <p className="text-[15px] leading-[1.7] text-muted">
        Denta Care UK is committed to protecting the privacy and security of
        your personal information in accordance with the UK General Data
        Protection Regulation (UK GDPR) and the Data Protection Act 2018.
      </p>

      <section className="space-y-3 pt-2">
        <h2 className="text-[20px] font-semibold text-foreground">
          1. Information We Collect
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted">
          When you submit an appointment request or general enquiry, we collect
          your name, email address, UK telephone number, preferred clinic,
          treatment interest, and any optional notes you choose to provide.
        </p>
      </section>

      <section className="space-y-3 pt-2">
        <h2 className="text-[20px] font-semibold text-foreground">
          2. How We Use Your Details
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted">
          We use your information solely to coordinate your requested dental
          appointment, respond to your enquiry, and provide patient support. We
          never sell or share your personal details with third-party marketers.
        </p>
      </section>

      <section className="space-y-3 pt-2">
        <h2 className="text-[20px] font-semibold text-foreground">
          3. Your Rights
        </h2>
        <p className="text-[15px] leading-[1.7] text-muted">
          You have the right to request access to, correction of, or deletion of
          your personal data at any time by contacting{" "}
          <a
            href="mailto:care@dentacare.co.uk"
            className="font-medium text-foreground underline hover:text-primary"
          >
            care@dentacare.co.uk
          </a>
          .
        </p>
      </section>
    </div>
  );
}
