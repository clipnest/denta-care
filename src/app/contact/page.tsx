import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { PillTag } from "@/components/ui/PillTag";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Denta Care UK patient support, view clinic hours (10:00 AM - 07:00 PM), and read common patient FAQs.",
};

const faqs = [
  {
    q: "Do I need a referral to book an appointment?",
    a: "No referral is needed. You can book routine check-ups, hygiene visits, braces consultations, dentures, or emergency care directly online or by calling your nearest UK clinic.",
  },
  {
    q: "What are your UK clinic opening hours?",
    a: "Our clinics are open from 10:00 AM to 07:00 PM, with morning, afternoon, and evening appointment windows available.",
  },
  {
    q: "How do you support anxious patients?",
    a: "Our suites are designed to feel calm and bright rather than clinical, and our dentists take extra time to explain each step before starting any treatment.",
  },
  {
    q: "Can I transfer my care between Denta Care UK clinics?",
    a: "Yes. Your digital 3D scans and treatment notes can be accessed securely across our 20+ UK clinics if you move or travel.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1240px] px-6 py-12 lg:px-12 lg:py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5 space-y-6">
          <PillTag tone="sky">Contact Us</PillTag>
          <h1 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground sm:text-[42px]">
            We&apos;re here to help
          </h1>
          <p className="text-[15px] leading-[1.65] text-muted">
            Have a question about a treatment, pricing, or your nearest UK
            clinic? Send us a message or reach our patient support team directly.
          </p>

          <div className="space-y-4 rounded-2xl bg-surface/70 p-6 border border-sky-strip/40 text-[14px]">
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 text-accent-blue shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Support Hours</p>
                <p className="text-muted">10:00 AM - 07:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-accent-blue shrink-0" />
              <div>
                <p className="font-semibold text-foreground">UK Reception</p>
                <a
                  href="tel:+442079460192"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  +44 20 7946 0192
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-accent-blue shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <a
                  href="mailto:care@dentacare.co.uk"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  care@dentacare.co.uk
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-accent-blue shrink-0" />
              <div>
                <p className="font-semibold text-foreground">UK Head Office</p>
                <p className="text-muted">
                  42 Harley Street, Marylebone, London W1G 9PR
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>

      {/* FAQs */}
      <section className="mt-16 border-t border-border-subtle pt-14">
        <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-foreground sm:text-[32px]">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-border-subtle bg-white dark:bg-[#111A2B] p-6 open:border-accent-blue/60"
            >
              <summary className="cursor-pointer list-none font-semibold text-[16px] text-foreground flex items-center justify-between gap-4">
                <span>{faq.q}</span>
                <span className="text-primary text-[18px] leading-none group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[14px] leading-[1.65] text-muted">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
