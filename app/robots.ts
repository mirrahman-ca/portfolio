import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://mirrahman.ca/sitemap.xml", host: "https://mirrahman.ca" };
}
