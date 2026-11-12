"use client";

import Image from "next/image";
import { useState } from "react";
import { visionSlides } from "@/data/vision";
import { PillTag } from "@/components/ui/PillTag";

export function AboutBento() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = visionSlides[activeIndex];

  return (
    <section
      aria-labelledby="about-heading"
      className="mx-auto max-w-[1240px] px-6 py-14 lg:px-12 lg:py-20"
    >
      {/* Header + Vision Switcher */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-6">
          <h2 id="about-heading" className="leading-[1.12] tracking-[-0.02em]">
            <span className="block text-[28px] font-normal text-muted sm:text-[36px]">
              About
            </span>
            <span className="block text-[32px] font-semibold text-foreground sm:text-[42px]">
              Denta Care
            </span>
          </h2>
        </div>

        <div className="lg:col-span-6 lg:max-w-[480px] lg:justify-self-end space-y-3">
          <p className="text-[13px] font-semibold text-primary-accessible">
            {activeSlide.label}
          </p>
          <p
            key={activeSlide.id}
            className="min-h-[84px] text-[15px] leading-[1.65] text-foreground/85 transition-opacity duration-200"
          >
            {activeSlide.text}
          </p>
          <div
            role="tablist"
            aria-label="Our Vision statements"
            className="flex items-center gap-2 pt-1"
          >
            {visionSlides.map((slide, index) => {
              const selected = index === activeIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-label={`View ${slide.label}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue ${
                    selected ? "w-5 bg-primary" : "w-1.5 bg-primary/30 hover:bg-primary/60"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* 4-Card Bento Gallery */}
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12 lg:mt-14">
        {/* Top Left: Wide Clinic Interior 1 + Dental Care pill */}
        <div className="md:col-span-6 flex flex-col gap-3">
          <div className="relative h-[220px] sm:h-[250px] w-full overflow-hidden rounded-2xl border border-border-subtle/60">
            <Image
              src="/images/about-clinic-1.jpg"
              alt="Bright modern Denta Care dental clinic interior with floor-to-ceiling windows and digital monitors"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex justify-end">
            <PillTag tone="sky">Dental Care</PillTag>
          </div>
        </div>

        {/* Top Right: Patient 1 + Vertical Dentures pill */}
        <div className="md:col-span-6 flex items-center gap-3">
          <div className="relative h-[240px] sm:h-[270px] flex-1 overflow-hidden rounded-2xl border border-border-subtle/60">
            <Image
              src="/images/about-patient-1.jpg"
              alt="Smiling young woman seated comfortably in a modern Denta Care treatment chair"
              fill
              sizes="(max-width: 768px) 85vw, 42vw"
              className="object-cover object-top"
            />
          </div>
          <PillTag tone="peach" orientation="vertical" className="shrink-0 self-start mt-4">
            Dentures
          </PillTag>
        </div>

        {/* Bottom Left: Vertical Dental Treatments pill + Patient 2 */}
        <div className="md:col-span-5 flex items-center gap-3">
          <PillTag tone="peach" orientation="vertical" className="shrink-0 self-end mb-4">
            Dental Treatments
          </PillTag>
          <div className="relative h-[240px] sm:h-[260px] flex-1 overflow-hidden rounded-2xl border border-border-subtle/60">
            <Image
              src="/images/about-patient-2.jpg"
              alt="Confident mature patient smiling warmly in a bright Denta Care dental suite"
              fill
              sizes="(max-width: 768px) 85vw, 38vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Bottom Right: Teeth Alignment pill + Wide Clinic Interior 2 */}
        <div className="md:col-span-7 flex flex-col gap-3">
          <div className="flex justify-start">
            <PillTag tone="sky">Teeth Alignment</PillTag>
          </div>
          <div className="relative h-[220px] sm:h-[250px] w-full overflow-hidden rounded-2xl border border-border-subtle/60">
            <Image
              src="/images/about-clinic-2.jpg"
              alt="Calm, natural-lit Denta Care treatment room with ergonomic white dental chair"
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
