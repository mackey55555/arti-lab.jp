import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://arti-lab.jp/sitemap.xml",
    host: "https://arti-lab.jp",
  };
}
