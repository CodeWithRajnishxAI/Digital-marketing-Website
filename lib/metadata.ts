import type { Metadata } from "next";

const siteUrl = "https://www.zeebrag.com";
const siteName = "Zeebrag";
const defaultTitle = "Zeebrag | Tech-Driven Growth Partner for Modern Brands";
const defaultDescription =
  "Zeebrag helps startups and growing businesses scale with digital strategy, performance marketing, personal branding, content systems, and website development.";

export const siteConfig = {
  name: siteName,
  url: siteUrl,
  title: defaultTitle,
  description: defaultDescription,
  locale: "en_IN",
};

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: MetadataInput): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
