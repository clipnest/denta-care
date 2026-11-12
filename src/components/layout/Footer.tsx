import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background">
      <div className="mx-auto max-w-[1240px] px-6 py-14 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[20px] font-bold tracking-[0.04em]"
            >
              <span className="text-accent-blue">DENTA</span>
              <span className="text-foreground">CARE</span>
            </Link>
            <p className="max-w-sm text-[15px] leading-relaxed text-muted">
              150+ expert dentists across 20+ UK clinics delivering compassionate,
              technology-led dental care in a calm and welcoming environment.
            </p>
            <div className="pt-2">
              <Button href="/book" size="md">
                Book Appointment
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-foreground">
              Explore
            </h3>
            <ul className="space-y-2.5 text-[14px] text-muted">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Denta Care
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="hover:text-primary transition-colors">
                  Our Treatments
                </Link>
              </li>
              <li>
                <Link href="/clinics" className="hover:text-primary transition-colors">
                  Our Clinics
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-foreground">
              Treatments
            </h3>
            <ul className="space-y-2.5 text-[14px] text-muted">
              <li>
                <Link
                  href="/treatments/routine-dental-care"
                  className="hover:text-primary transition-colors"
                >
                  Routine Check-ups &amp; Hygiene
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/braces-and-teeth-alignment"
                  className="hover:text-primary transition-colors"
                >
                  Braces &amp; Clear Aligners
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/modern-dentures"
                  className="hover:text-primary transition-colors"
                >
                  Custom Comfort Dentures
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/dental-implants"
                  className="hover:text-primary transition-colors"
                >
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/cosmetic-dentistry"
                  className="hover:text-primary transition-colors"
                >
                  Teeth Whitening &amp; Veneers
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-foreground">
              UK Clinics &amp; Hours
            </h3>
            <ul className="space-y-3 text-[14px] text-muted">
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue" />
                <div>
                  <p className="font-medium text-foreground">We&apos;re Open</p>
                  <p>10:00 AM - 07:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue" />
                <span>20+ Dental Clinics across the UK</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue" />
                <a
                  href="tel:+442079460192"
                  className="hover:text-primary transition-colors"
                >
                  +44 20 7946 0192
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border-subtle pt-6 text-[13px] text-muted sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} Denta Care UK. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy &amp; UK GDPR
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Patient Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
