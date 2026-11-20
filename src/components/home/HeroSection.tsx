import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { getAssetPath } from "@/lib/assets";

const heroStats = [
  { value: "150+", label: "Expert Dentists" },
  { value: "20+", label: "Dental Clinics across UK" },
  { value: "03+", label: "Countries presence" },
];

export function HeroSection() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 pt-4 pb-8 sm:px-6 lg:px-12 lg:pt-6 lg:pb-12">
      <div className="relative overflow-visible rounded-3xl bg-gradient-to-r from-surface via-[#EEF8FD] to-white dark:via-[#101C30] dark:to-background px-6 pt-8 pb-10 sm:px-10 sm:pt-10 lg:px-14 lg:pt-12 lg:pb-14 border border-sky-strip/40">
        {/* Display Headline */}
        <h1 className="font-display text-center text-[48px] font-extrabold uppercase leading-[0.93] tracking-[-0.02em] sm:text-[72px] md:text-[88px] lg:text-[108px] select-none bg-gradient-to-r from-[#9BDDFB] via-[#3AC2FA] to-[#1BB3F5] bg-clip-text text-transparent">
          EVERY SMILE MATTERS
        </h1>

        {/* 3-Column Hero Content */}
        <div className="mt-6 grid grid-cols-1 items-center gap-8 lg:mt-4 lg:grid-cols-12 lg:gap-6">
          {/* Left Column: Intro Card, Hours, CTA */}
          <div className="order-2 flex flex-col items-start gap-6 lg:order-1 lg:col-span-4">
            <div className="w-full max-w-[310px] rounded-2xl bg-white/85 dark:bg-[#111C2E]/90 p-5 shadow-[0_8px_30px_rgba(17,24,39,0.06)] backdrop-blur-sm border border-white dark:border-border-subtle">
              <p className="text-[14px] leading-[1.6] text-foreground/85">
                Our skilled dentists use advanced technology to offer complete
                care in a comfortable and friendly environment.
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-[13px] font-medium text-muted">We&apos;re Open</p>
              <p className="text-[14px] font-semibold text-foreground">
                10:00 AM - 07:00 PM
              </p>
            </div>

            <Button href="/book" size="lg">
              Book Appointment
            </Button>
          </div>

          {/* Center Column: 3D Tooth + Water Splash */}
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5">
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] lg:-mb-16 dark:rounded-full dark:bg-white/95 dark:p-4 dark:shadow-[0_0_50px_rgba(56,189,248,0.18)]">
              <Image
                src={getAssetPath("/images/hero-tooth.jpg")}
                alt="Glossy 3D tooth with dynamic electric blue water splash representing fresh dental care"
                fill
                priority
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 380px"
                className="object-contain mix-blend-multiply drop-shadow-sm dark:rounded-full"
              />
            </div>
          </div>

          {/* Right Column: Trust Metrics */}
          <div className="order-3 grid grid-cols-3 gap-4 border-t border-border-subtle/70 pt-6 lg:col-span-3 lg:grid-cols-1 lg:gap-7 lg:border-t-0 lg:pt-0 lg:pl-8">
            {heroStats.map((stat) => (
              <div key={stat.label} className="space-y-0.5">
                <p className="text-[26px] font-bold leading-tight tracking-[-0.01em] text-primary sm:text-[32px]">
                  {stat.value}
                </p>
                <p className="text-[12px] font-medium text-foreground/80 sm:text-[13px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
