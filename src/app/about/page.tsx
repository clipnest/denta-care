import type { Metadata } from "next";
import Image from "next/image";
import { Award, HeartHandshake, Microscope, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PillTag } from "@/components/ui/PillTag";
import { visionSlides } from "@/data/vision";

export const metadata: Metadata = {
  title: "About Denta Care",
  description:
    "Discover Denta Care's vision, clinical standards, and 150+ expert dentists serving patients across 20+ UK dental clinics.",
};

const clinicalPillars = [
  {
    icon: Microscope,
    title: "3D Digital Precision",
    description:
      "Every clinic is equipped with intraoral 3D scanners and low-dose digital imaging for faster, more comfortable diagnostics.",
  },
  {
    icon: HeartHandshake,
    title: "Anxiety-Free Care",
    description:
      "Unhurried appointments, calm pastel-lit suites, and gentle pain-free numbing techniques designed around nervous patients.",
  },
  {
    icon: Award,
    title: "150+ GDC-Registered Specialists",
    description:
      "General dentists, orthodontists, implantologists, and prosthodontists collaborating under one clinical standard.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent UK Pricing",
    description:
      "Written treatment plans and clear fee guides before any procedure begins — zero hidden surprises.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1240px] px-6 py-12 lg:px-12 lg:py-16">
      {/* Intro */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6 space-y-5">
          <PillTag tone="sky">About Denta Care</PillTag>
          <h1 className="text-[34px] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground sm:text-[46px]">
            Modern UK dentistry built around comfort and trust.
          </h1>
          <p className="text-[16px] leading-[1.65] text-muted">
            With 20+ clinics across the United Kingdom and a presence in 3+
            countries, Denta Care brings together 150+ specialist dentists who
            believe every smile deserves unhurried, personalised care.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href="/book" size="lg">
              Book Appointment
            </Button>
            <Button href="/clinics" variant="outline" size="lg">
              View UK Clinics
            </Button>
          </div>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="relative h-[220px] sm:h-[260px] overflow-hidden rounded-2xl border border-border-subtle">
            <Image
              src="/images/about-clinic-1.jpg"
              alt="Bright modern Denta Care clinic suite with natural light"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-[220px] sm:h-[260px] overflow-hidden rounded-2xl border border-border-subtle mt-6">
            <Image
              src="/images/about-patient-1.jpg"
              alt="Smiling patient relaxing in a Denta Care chair"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Vision Statements */}
      <section className="mt-16 rounded-3xl bg-surface/70 p-8 sm:p-12 border border-sky-strip/40">
        <h2 className="text-[24px] font-semibold text-foreground sm:text-[30px]">
          Our Vision &amp; Values
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {visionSlides.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white dark:bg-[#111A2B] p-6 border border-border-subtle/70 space-y-2.5"
            >
              <p className="text-[13px] font-semibold text-primary-accessible">
                {item.label}
              </p>
              <p className="text-[15px] leading-[1.6] text-foreground/85">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Clinical Pillars */}
      <section className="mt-16">
        <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-foreground sm:text-[34px]">
          Why Patients Choose Denta Care
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {clinicalPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex gap-4 rounded-2xl border border-border-subtle bg-white dark:bg-[#111A2B] p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-accent-blue">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-[18px] font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-muted">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
