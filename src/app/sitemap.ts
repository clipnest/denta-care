import type { MetadataRoute } from "next";
import { treatments } from "@/data/treatments";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dentacare.co.uk";

  const staticRoutes = [
    "",
    "/about",
    "/treatments",
    "/clinics",
    "/contact",
    "/book",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const treatmentRoutes = treatments.map((t) => ({
    url: `${baseUrl}/treatments/${t.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...treatmentRoutes];
}
