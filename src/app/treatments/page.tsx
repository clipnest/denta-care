import type { Metadata } from "next";
import { TreatmentsCatalog } from "@/components/treatments/TreatmentsCatalog";
import { PillTag } from "@/components/ui/PillTag";

export const metadata: Metadata = {
  title: "Our Treatments",
  description:
    "Explore Denta Care UK dental treatments: routine check-ups, braces, clear aligners, custom dentures, dental implants, and cosmetic dentistry.",
};

export default function TreatmentsPage() {
  return (
    <div className="mx-auto max-w-[1240px] px-6 py-12 lg:px-12 lg:py-16">
      <div className="max-w-2xl space-y-4">
        <PillTag tone="sky">Our Treatments</PillTag>
        <h1 className="text-[34px] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground sm:text-[44px]">
          Personalised care for every smile
        </h1>
        <p className="text-[16px] leading-[1.65] text-muted">
          From preventive hygiene and discreet teeth alignment to bespoke
          dentures and permanent implants, explore our full range of UK
          treatments.
        </p>
      </div>

      <div className="mt-10">
        <TreatmentsCatalog />
      </div>
    </div>
  );
}
