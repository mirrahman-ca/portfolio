import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://mirrahman.ca", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
