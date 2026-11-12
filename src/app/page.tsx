import { HeroSection } from "@/components/home/HeroSection";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { AboutBento } from "@/components/home/AboutBento";
import { TreatmentsPreview } from "@/components/home/TreatmentsPreview";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone } from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Denta Care",
  description:
    "150+ expert dentists across 20+ UK clinics offering routine dental care, braces, dentures, implants, and cosmetic dentistry.",
  areaServed: "United Kingdom",
  openingHours: "Mo-Su 10:00-19:00",
  telephone: "+44 20 7946 0192",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <MarqueeStrip />
      <AboutBento />
      <TreatmentsPreview />

      {/* UK Clinics & Appointment Banner */}
      <section className="mx-auto max-w-[1240px] px-6 pb-16 lg:px-12 lg:pb-24">
        <div className="flex flex-col justify-between gap-8 rounded-3xl bg-gradient-to-r from-surface via-[#EEF8FD] to-peach-pill/40 dark:via-[#111E33] p-8 sm:p-12 lg:flex-row lg:items-center border border-sky-strip/40">
          <div className="max-w-xl space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-[#111A2B] px-3.5 py-1 text-[12px] font-semibold text-foreground shadow-xs">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              20+ UK Dental Clinics
            </span>
            <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.02em] text-foreground sm:text-[36px]">
              Ready for a calmer, brighter dental visit?
            </h2>
            <p className="text-[15px] leading-relaxed text-muted">
              Choose your nearest UK clinic and request a morning, afternoon, or
              evening appointment in under 60 seconds.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="/book" size="lg">
              Book Appointment
            </Button>
            <Button href="/clinics" variant="outline" size="lg">
              Find a UK Clinic
            </Button>
            <a
              href="tel:+442079460192"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-foreground hover:text-primary transition-colors px-2"
            >
              <Phone className="h-4 w-4 text-accent-blue" />
              +44 20 7946 0192
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
