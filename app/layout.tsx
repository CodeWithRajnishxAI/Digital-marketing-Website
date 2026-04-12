import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/site/footer";
import { MobileStickyCta } from "@/components/site/mobile-sticky-cta";
import { Navbar } from "@/components/site/navbar";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { siteConfig } from "@/lib/metadata";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: siteConfig.url,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="min-h-screen bg-[var(--color-background)] text-slate-950 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileStickyCta />
      </body>
    </html>
  );
}
