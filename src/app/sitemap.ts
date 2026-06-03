import type { MetadataRoute } from "next";

const SITE_URL = "https://doodlton.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ["en", "ru"].map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: "weekly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages: {
        en: `${SITE_URL}/en`,
        ru: `${SITE_URL}/ru`,
      },
    },
  }));
}
