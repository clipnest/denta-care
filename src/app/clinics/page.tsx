import type { Metadata } from "next";
import { ClinicsDirectory } from "@/components/clinics/ClinicsDirectory";
import { PillTag } from "@/components/ui/PillTag";

export const metadata: Metadata = {
  title: "Our Clinics",
  description:
    "Find your nearest Denta Care clinic across the UK — London, Manchester, Birmingham, Leeds, Bristol, Edinburgh, and Glasgow. Open 10:00 AM - 07:00 PM.",
};

export default function ClinicsPage() {
  return (
    <div className="mx-auto max-w-[1240px] px-6 py-12 lg:px-12 lg:py-16">
      <div className="max-w-2xl space-y-4">
        <PillTag tone="sky">20+ Dental Clinics across UK</PillTag>
        <h1 className="text-[34px] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground sm:text-[44px]">
          Find a Denta Care clinic near you
        </h1>
        <p className="text-[16px] leading-[1.65] text-muted">
          All our UK clinics welcome new routine, orthodontic, and emergency
          patients from 10:00 AM to 07:00 PM.
        </p>
      </div>

      <div className="mt-10">
        <ClinicsDirectory />
      </div>
    </div>
  );
}
