import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: "https://example.com",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1
        }
        // other pages
    ];
}