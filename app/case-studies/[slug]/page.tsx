import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { caseStudies } from "@/lib/site-data";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return createPageMetadata({
      title: "Case Study Not Found | Zeebrag",
      description: "The requested case study could not be found.",
      path: "/case-studies",
    });
  }

  return createPageMetadata({
    title: study.seoTitle,
    description: study.seoDescription,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={study.industry}
        title={`${study.client}: measurable growth with a full-funnel Zeebrag system`}
        description={study.strategy}
      />
      <section className="py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-[2rem] bg-[#02253f] p-8 text-white shadow-[0_30px_80px_rgba(2,37,63,0.2)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Outcomes
            </p>
            <div className="mt-6 grid gap-4">
              {study.outcomes.map((outcome) => (
                <div
                  key={outcome.label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-white/60">
                    {outcome.label}
                  </p>
                  <p className="mt-3 text-3xl font-bold">{outcome.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/contact#audit-form">Start a similar project</Button>
            </div>
          </aside>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <section>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Client problem
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">{study.problem}</p>
            </section>
            <section className="mt-10">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Zeebrag strategy
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">{study.strategy}</p>
            </section>
            <section className="mt-10">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Execution
              </h2>
              <ul className="mt-4 grid gap-4">
                {study.execution.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.5rem] bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
