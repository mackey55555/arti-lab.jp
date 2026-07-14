import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://arti-lab.jp",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
