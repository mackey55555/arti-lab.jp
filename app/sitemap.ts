import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://arti-lab.jp",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://arti-lab.jp/products/benchbook",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://arti-lab.jp/products/benchbook/support",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://arti-lab.jp/products/benchbook/privacy",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
