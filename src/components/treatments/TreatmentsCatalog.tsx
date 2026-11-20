"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import {
  treatments,
  treatmentCategories,
  type TreatmentCategory,
} from "@/data/treatments";
import { PillTag } from "@/components/ui/PillTag";
import { getAssetPath } from "@/lib/assets";

export function TreatmentsCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<
    TreatmentCategory | "All"
  >("All");

  const filtered =
    selectedCategory === "All"
      ? treatments
      : treatments.filter((t) => t.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div
        role="group"
        aria-label="Filter treatments by category"
        className="flex flex-wrap gap-2.5"
      >
        <button
          type="button"
          onClick={() => setSelectedCategory("All")}
          className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors cursor-pointer ${
            selectedCategory === "All"
              ? "bg-primary text-white"
              : "bg-surface text-foreground hover:bg-sky-strip"
          }`}
        >
          All Treatments
        </button>
        {treatmentCategories.map((category) => {
          const active = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors cursor-pointer ${
                active
                  ? "bg-primary text-white"
                  : "bg-surface text-foreground hover:bg-sky-strip"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((treatment) => (
          <article
            key={treatment.slug}
            className="flex flex-col justify-between overflow-hidden rounded-2xl border border-border-subtle bg-white dark:bg-[#111A2B] transition-all duration-200 hover:border-accent-blue/60 hover:shadow-[0_8px_30px_rgba(17,24,39,0.06)]"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-surface">
                <Image
                  src={getAssetPath(treatment.image)}
                  alt={treatment.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <PillTag tone={treatment.pillTone}>
                    {treatment.category}
                  </PillTag>
                  <span className="text-[13px] font-semibold text-foreground">
                    {treatment.priceGuide}
                  </span>
                </div>

                <h2 className="text-[20px] font-semibold text-foreground">
                  <Link
                    href={`/treatments/${treatment.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {treatment.title}
                  </Link>
                </h2>

                <p className="text-[14px] leading-[1.6] text-muted">
                  {treatment.shortDescription}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-border-subtle/70 px-6 py-4">
              <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-muted">
                <Clock className="h-3.5 w-3.5 text-accent-blue" />
                {treatment.duration}
              </span>

              <div className="flex items-center gap-3">
                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="text-[13px] font-semibold text-foreground hover:text-primary transition-colors"
                >
                  Read More
                </Link>
                <Link
                  href={`/book?treatment=${treatment.slug}`}
                  className="inline-flex items-center gap-1 rounded-full bg-primary px-3.5 py-1.5 text-[12px] font-semibold text-white hover:bg-primary-hover transition-colors"
                >
                  Book
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
