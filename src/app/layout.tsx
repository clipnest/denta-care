import type { Metadata } from "next";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Denta Care | Every Smile Matters — 20+ UK Dental Clinics",
    template: "%s | Denta Care",
  },
  description:
    "Denta Care brings 150+ expert dentists across 20+ UK clinics together for routine dental care, braces, dentures, implants, and cosmetic dentistry.",
  openGraph: {
    title: "Denta Care | Every Smile Matters",
    description:
      "150+ expert dentists across 20+ UK clinics offering compassionate, technology-led dental care.",
    type: "website",
    locale: "en_GB",
    siteName: "Denta Care",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${barlowCondensed.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem("denta-care-theme")==="dark"){document.documentElement.classList.add("dark");}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
