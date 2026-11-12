"use client";

import { useState } from "react";
import { Clock, MapPin, Phone, Search } from "lucide-react";
import { clinics, clinicRegions } from "@/data/clinics";
import { Button } from "@/components/ui/Button";
import { PillTag } from "@/components/ui/PillTag";

export function ClinicsDirectory() {
  const [region, setRegion] = useState<string>("All");
  const [query, setQuery] = useState<string>("");

  const filtered = clinics.filter((clinic) => {
    const matchesRegion = region === "All" || clinic.region === region;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      clinic.name.toLowerCase().includes(q) ||
      clinic.city.toLowerCase().includes(q) ||
      clinic.postcode.toLowerCase().includes(q);
    return matchesRegion && matchesQuery;
  });

  return (
    <div className="space-y-8">
      {/* Search & Region Filter */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by city or postcode (e.g. London, W1G)"
            aria-label="Search UK clinics by city or postcode"
            className="h-12 w-full rounded-xl border border-border-subtle bg-white dark:bg-[#111A2B] pl-10 pr-4 text-[14px] text-foreground placeholder:text-muted focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
          />
        </div>

        <div
          role="group"
          aria-label="Filter clinics by UK region"
          className="flex flex-wrap gap-2"
        >
          <button
            type="button"
            onClick={() => setRegion("All")}
            className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors cursor-pointer ${
              region === "All"
                ? "bg-primary text-white"
                : "bg-surface text-foreground hover:bg-sky-strip"
            }`}
          >
            All Regions
          </button>
          {clinicRegions.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRegion(r)}
              className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors cursor-pointer ${
                region === r
                  ? "bg-primary text-white"
                  : "bg-surface text-foreground hover:bg-sky-strip"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Clinics Grid */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-border-subtle bg-surface/40 p-10 text-center">
          <p className="text-[16px] font-medium text-foreground">
            No clinics matched &ldquo;{query}&rdquo;.
          </p>
          <p className="mt-1 text-[14px] text-muted">
            Try clearing your search or selecting All Regions.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filtered.map((clinic) => (
            <article
              key={clinic.id}
              className="flex flex-col justify-between rounded-2xl border border-border-subtle bg-white dark:bg-[#111A2B] p-6 transition-all duration-200 hover:border-accent-blue/60 hover:shadow-[0_8px_30px_rgba(17,24,39,0.06)]"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <PillTag tone="sky">{clinic.region}</PillTag>
                  <span className="text-[12px] font-medium text-muted">
                    {clinic.wheelchairAccessible
                      ? "Step-free access"
                      : "First-floor suite"}
                  </span>
                </div>

                <div>
                  <h2 className="text-[20px] font-semibold text-foreground">
                    {clinic.name}
                  </h2>
                  <p className="mt-1 flex items-start gap-2 text-[14px] text-muted">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue" />
                    <span>
                      {clinic.address}, {clinic.postcode}
                    </span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {clinic.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-peach-pill/70 px-3 py-1 text-[12px] font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 border-t border-border-subtle/70 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1 text-[13px]">
                  <p className="flex items-center gap-1.5 text-muted">
                    <Clock className="h-3.5 w-3.5 text-accent-blue" />
                    {clinic.hours}
                  </p>
                  <a
                    href={`tel:${clinic.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-accent-blue" />
                    {clinic.phone}
                  </a>
                </div>

                <Button href={`/book?clinic=${clinic.id}`} size="md">
                  Book at this Clinic
                </Button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
