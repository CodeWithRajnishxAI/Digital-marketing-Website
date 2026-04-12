import { HomePage } from "@/sections/home-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Zeebrag | Premium Growth-Tech Agency for Startups and Modern Brands",
  description:
    "Scale faster with Zeebrag through branding, content, digital strategy, paid growth, and high-performance websites.",
  path: "/",
  keywords: [
    "growth agency india",
    "digital growth partner",
    "startup marketing agency india",
    "website development company",
    "personal branding agency",
  ],
});

export default function Page() {
  return <HomePage />;
}
