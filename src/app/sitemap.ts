import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://safejson.vercel.app", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://safejson.vercel.app/diff", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://safejson.vercel.app/jwt", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://safejson.vercel.app/jsonpath", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://safejson.vercel.app/schema", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://safejson.vercel.app/pricing", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://safejson.vercel.app/privacy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
