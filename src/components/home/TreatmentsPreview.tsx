import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { treatments } from "@/data/treatments";
import { PillTag } from "@/components/ui/PillTag";
import { Button } from "@/components/ui/Button";

export function TreatmentsPreview() {
  return (
    <section
      aria-labelledby="treatments-heading"
      className="mx-auto max-w-[1240px] px-6 py-14 lg:px-12 lg:py-20 border-t border-border-subtle/60"
    >
      {/* Header Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-6">
          <h2
            id="treatments-heading"
            className="leading-[1.12] tracking-[-0.02em]"
          >
            <span className="block text-[28px] font-normal text-muted sm:text-[36px]">
              Available
            </span>
            <span className="block text-[32px] font-semibold text-foreground sm:text-[42px]">
              Treatments
            </span>
          </h2>
        </div>

        <div className="lg:col-span-6 lg:max-w-[480px] lg:justify-self-end">
          <p className="text-[15px] leading-[1.65] text-foreground/80">
            At Denta Care, we offer a wide range of treatments, from routine
            cleanings and fillings to advanced procedures like implants and
            cosmetic dentistry. Our goal is to provide personalised care for all
            your dental needs.
          </p>
        </div>
      </div>

      {/* Treatment Cards Grid */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {treatments.map((treatment) => (
          <article
            key={treatment.slug}
            className="group flex flex-col justify-between rounded-2xl border border-border-subtle bg-white dark:bg-[#111A2B] p-6 transition-all duration-200 hover:border-accent-blue/60 hover:shadow-[0_8px_30px_rgba(17,24,39,0.06)]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <PillTag tone={treatment.pillTone}>{treatment.category}</PillTag>
                <span className="text-[13px] font-semibold text-foreground">
                  {treatment.priceGuide}
                </span>
              </div>

              <h3 className="text-[20px] font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                <Link href={`/treatments/${treatment.slug}`}>
                  {treatment.title}
                </Link>
              </h3>

              <p className="text-[14px] leading-[1.6] text-muted">
                {treatment.shortDescription}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-border-subtle/70 pt-4">
              <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-muted">
                <Clock className="h-3.5 w-3.5 text-accent-blue" />
                {treatment.duration}
              </span>

              <div className="flex items-center gap-3">
                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="text-[13px] font-semibold text-foreground hover:text-primary transition-colors"
                >
                  Details
                </Link>
                <Link
                  href={`/book?treatment=${treatment.slug}`}
                  className="inline-flex items-center gap-1 rounded-full bg-surface px-3.5 py-1.5 text-[12px] font-semibold text-foreground hover:bg-sky-strip transition-colors"
                >
                  Book
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button href="/treatments" variant="outline" size="lg">
          Explore All Treatments
        </Button>
      </div>
    </section>
  );
}
