"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Treatments", href: "/treatments" },
  { label: "Our Clinics", href: "/clinics" },
  { label: "Contact Us", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-md border-b border-border-subtle/60">
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-6 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-[18px] font-bold tracking-[0.04em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-blue rounded-md"
        >
          <span className="text-accent-blue">DENTA</span>
          <span className="text-foreground">CARE</span>
        </Link>

        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[12px] font-medium uppercase tracking-[0.06em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-blue rounded-sm ${
                  active
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Button href="/book" size="md">
            Book Appointment
          </Button>
        </div>

        <div className="flex items-center gap-2.5 lg:hidden">
          <ThemeToggle />
          <Button href="/book" size="md" className="!h-9 !px-3.5 !text-[11px]">
            Book
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-foreground hover:bg-surface transition-colors focus-visible:outline-2 focus-visible:outline-accent-blue"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-t border-border-subtle bg-background px-6 py-6 shadow-lg"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-4">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[14px] font-medium uppercase tracking-[0.05em] py-1.5 transition-colors ${
                    active ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-border-subtle">
              <Button href="/book" size="lg" className="w-full">
                Book Appointment
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
