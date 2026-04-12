import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "Growth Services | Zeebrag",
  description:
    "Explore Zeebrag services for SEO, Meta Ads, Google Ads, website development, and founder branding.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Growth services designed for premium brands that want measurable momentum."
        description="Zeebrag combines strategy, creative execution, technology, and optimization to build stronger demand systems."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                  {service.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  {service.name}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-[var(--color-primary)]"
                >
                  View service page
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
