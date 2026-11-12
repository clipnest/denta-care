import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Clock, PoundSterling } from "lucide-react";
import { getTreatmentBySlug, treatments } from "@/data/treatments";
import { PillTag } from "@/components/ui/PillTag";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return { title: "Treatment Not Found" };

  return {
    title: treatment.title,
    description: treatment.shortDescription,
  };
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-[1240px] px-6 py-10 lg:px-12 lg:py-16">
      <Link
        href="/treatments"
        className="inline-flex items-center gap-2 text-[14px] font-medium text-muted hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Our Treatments
      </Link>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7 space-y-6">
          <PillTag tone={treatment.pillTone}>{treatment.category}</PillTag>
          <h1 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground sm:text-[44px]">
            {treatment.title}
          </h1>
          <p className="text-[16px] leading-[1.7] text-foreground/85">
            {treatment.overview}
          </p>

          <div className="flex flex-wrap gap-6 rounded-2xl bg-surface/70 p-5 border border-sky-strip/40">
            <div className="flex items-center gap-2.5">
              <Clock className="h-5 w-5 text-accent-blue" />
              <div>
                <p className="text-[12px] text-muted">Typical Duration</p>
                <p className="text-[14px] font-semibold text-foreground">
                  {treatment.duration}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <PoundSterling className="h-5 w-5 text-primary" />
              <div>
                <p className="text-[12px] text-muted">Guide Fee</p>
                <p className="text-[14px] font-semibold text-foreground">
                  {treatment.priceGuide}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <h2 className="text-[20px] font-semibold text-foreground">
              Key Benefits
            </h2>
            <ul className="space-y-3">
              {treatment.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                  <span className="text-[15px] text-foreground/85">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 pt-2">
            <h2 className="text-[20px] font-semibold text-foreground">
              What to Expect
            </h2>
            <ol className="space-y-3">
              {treatment.steps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-start gap-3.5 rounded-xl border border-border-subtle bg-white dark:bg-[#111A2B] p-4"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-strip text-[12px] font-bold text-foreground">
                    {index + 1}
                  </span>
                  <span className="text-[15px] text-foreground/85">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <div className="relative h-[280px] sm:h-[340px] w-full overflow-hidden rounded-3xl border border-border-subtle">
            <Image
              src={treatment.image}
              alt={treatment.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>

          <div className="rounded-3xl border border-border-subtle bg-white dark:bg-[#111A2B] p-6 space-y-4 shadow-xs">
            <h3 className="text-[20px] font-semibold text-foreground">
              Book {treatment.title}
            </h3>
            <p className="text-[14px] leading-relaxed text-muted">
              Available across our 20+ UK clinics between 10:00 AM and 07:00 PM.
            </p>
            <Button
              href={`/book?treatment=${treatment.slug}`}
              size="lg"
              className="w-full"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
