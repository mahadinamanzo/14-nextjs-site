import type { MetadataRoute } from "next";
import { getServices } from "@/lib/services";
import { siteUrl } from "@/lib/site";

const staticPages = ["/", "/about", "/services", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticPages.map((path) => ({
      url: new URL(path, siteUrl).toString(),
      lastModified,
      changeFrequency: path === "/" ? "weekly" as const : "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...getServices().map((service) => ({
      url: new URL(`/services/${service.slug}`, siteUrl).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
