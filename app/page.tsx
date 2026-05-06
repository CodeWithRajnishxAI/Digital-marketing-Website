import { HomePage } from "@/sections/home-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Digital Marketing Agency in Bhopal, India | Zeebrag",
  description:
    "Zeebrag is a Bhopal-based digital marketing and growth agency helping brands in India scale with SEO, ads, branding, and websites.",
  path: "/",
  keywords: [
    "digital marketing agency in bhopal",
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
