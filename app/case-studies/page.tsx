import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { caseStudies } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "Case Studies | Zeebrag",
  description:
    "Review data-driven Zeebrag case studies covering demand generation, website conversion, and performance marketing.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Results-first stories built to demonstrate authority, trust, and business impact."
        description="Use these executive-style case studies to show how strategy and execution turn into measurable growth."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <article
                key={study.slug}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                  {study.industry}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  {study.client}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{study.problem}</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {study.outcomes.map((outcome) => (
                    <div key={outcome.label} className="rounded-[1.5rem] bg-slate-50 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                        {outcome.label}
                      </p>
                      <p className="mt-3 text-2xl font-bold text-slate-950">{outcome.value}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-[var(--color-primary)]"
                >
                  Read full case study
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
