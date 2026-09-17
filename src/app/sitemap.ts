import type { MetadataRoute } from "next";
import { battles } from "@/data/battles";
import { articles } from "@/data/wiki";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://world-war-ii-encyclopedia.vercel.app";
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/explore`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/battles`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/timeline`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    ...articles.map((article) => ({ url: `${baseUrl}/article/${article.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...battles.map((battle) => ({ url: `${baseUrl}/battle/${battle.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.85 })),
  ];
}
