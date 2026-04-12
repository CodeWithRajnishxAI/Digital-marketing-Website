import Link from "next/link";
import { AuditForm } from "@/components/forms/audit-form";
import { FaqList } from "@/components/forms/faq-list";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { RoiCalculator } from "@/components/forms/roi-calculator";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  caseStudies,
  metrics,
  painPoints,
  services,
  solutionPillars,
  trustLogos,
} from "@/lib/site-data";

function DashboardMock() {
  return (
    <div className="relative isolate mx-auto w-full max-w-2xl">
      <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(4,119,191,0.35),transparent_55%)] blur-2xl" />
      <div className="rounded-[2rem] border border-white/50 bg-white/75 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-500">Growth dashboard</p>
            <h3 className="text-xl font-bold text-slate-950">Performance overview</h3>
          </div>
          <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            +28.4%
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ["Qualified leads", "126"],
            ["CAC efficiency", "31% better"],
            ["Avg. ROAS", "3.2x"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-[1.5rem] border border-slate-100 bg-white p-4">
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-2 text-2xl font-bold text-slate-950">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-[1.5rem] border border-slate-100 bg-white p-4">
            <div className="flex items-end gap-3">
              {[48, 62, 54, 75, 89, 104, 126].map((height) => (
                <div key={height} className="flex-1">
                  <div
                    className="w-full rounded-t-2xl bg-[linear-gradient(180deg,rgba(4,119,191,0.9),rgba(3,76,140,0.9))]"
                    style={{ height: `${height}px` }}
                  />
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">
              90-day lead momentum from aligned branding, paid media, and website optimization.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.5rem] bg-[#02253f] p-4 text-white">
              <p className="text-sm text-white/70">Conversion rate</p>
              <p className="mt-2 text-3xl font-bold">4.8%</p>
            </div>
            <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#F26A1B,#F2541B)] p-4 text-white">
              <p className="text-sm text-white/80">Booked calls</p>
              <p className="mt-2 text-3xl font-bold">38</p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -left-6 top-10 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Traffic</p>
          <p className="mt-2 text-2xl font-bold text-slate-950">200%</p>
          <p className="text-sm text-slate-500">Organic growth</p>
        </div>

        <div className="pointer-events-none absolute -bottom-8 right-4 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Pipeline</p>
          <p className="mt-2 text-2xl font-bold text-slate-950">Rs 18L</p>
          <p className="text-sm text-slate-500">Influenced revenue</p>
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Zeebrag",
          url: "https://www.zeebrag.com",
          description:
            "Zeebrag is a tech-driven growth and digital solutions company helping startups and businesses scale faster.",
          areaServed: "India",
          sameAs: ["https://www.linkedin.com", "https://www.instagram.com"],
        }}
      />

      <section className="relative overflow-hidden border-b border-slate-200/70 bg-[linear-gradient(180deg,#f8fbff_0%,#eef5fb_45%,#f2f2f2_100%)] py-20 lg:py-28">
        <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top_left,rgba(4,119,191,0.22),transparent_42%),radial-gradient(circle_at_top_right,rgba(3,76,140,0.18),transparent_38%)]" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex rounded-full border border-[var(--color-secondary)]/15 bg-white/70 px-4 py-2 text-sm font-semibold text-[var(--color-primary)] shadow-sm backdrop-blur">
                Trusted by 50+ growing brands
              </span>
              <h1 className="mt-8 max-w-3xl text-balance text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
                Scale Your Brand with Technology-Driven Growth That Actually Converts
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Zeebrag helps startups and modern businesses grow through branding,
                content, digital strategy, and technology-backed execution.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact">Get Free Growth Audit</Button>
                <Button href="#book-call" variant="ghost">
                  Book Free Strategy Call
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
                  Premium strategy-led execution
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
                  India-focused growth systems
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
                  Measurable outcomes, not vanity metrics
                </span>
              </div>
            </div>
            <DashboardMock />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-4xl font-extrabold tracking-tight text-slate-950">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Pain points"
            title="Most brands do not need more activity. They need a clearer growth system."
            description="When branding, content, performance, and website experience are disconnected, growth gets expensive and hard to trust."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((point) => (
              <article
                key={point}
                className="rounded-[1.75rem] border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur"
              >
                <p className="text-base leading-7 text-slate-700">{point}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="The Zeebrag model"
            title="We connect strategy, content, technology, execution, and optimization into one growth engine."
            description="That means stronger positioning, faster creative learning loops, better conversion paths, and reliable reporting."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {solutionPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-primary),var(--color-secondary))] text-lg font-bold text-white">
                  +
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-950">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Specialized growth services built to improve trust, visibility, and conversion."
            description="Each engagement is designed around business outcomes, not random tactics."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[var(--color-secondary)]/30 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(3,76,140,0.12),rgba(4,119,191,0.16))] text-xl font-bold text-[var(--color-primary)]">
                  0{index + 1}
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                  {service.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.summary}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
                >
                  Explore service
                  <span className="transition-transform group-hover:translate-x-1">Learn more</span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Social proof"
            title="Premium growth work earns trust through visible outcomes."
            description="The right proof lowers buyer skepticism and makes your next step feel safer."
          />
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {trustLogos.map((logo) => (
              <div
                key={logo}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-500"
              >
                {logo}
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {[
              "120+ leads in 30 days",
              "3x ROAS campaigns",
              "200% traffic growth",
              "50+ brands served",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 text-lg font-semibold text-slate-900 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Case studies"
              title="Results presented with the clarity investors and decision-makers expect."
              description="Each case study highlights the business problem, growth strategy, execution plan, and measurable impact."
            />
            <Button href="/case-studies" variant="ghost">
              View all case studies
            </Button>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <article
                key={study.slug}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                      {study.industry}
                    </p>
                    <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      {study.client}
                    </h3>
                  </div>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
                  >
                    Read results
                  </Link>
                </div>
                <p className="mt-6 text-sm leading-7 text-slate-600">{study.problem}</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {study.outcomes.map((outcome) => (
                    <div
                      key={outcome.label}
                      className="rounded-[1.5rem] bg-[linear-gradient(160deg,#03345f,#0477BF)] p-5 text-white"
                    >
                      <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                        {outcome.label}
                      </p>
                      <p className="mt-3 text-3xl font-bold">{outcome.value}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="What founders say when strategy, creative, and execution finally start working together."
            description="These are sample testimonials structured for a premium slider-ready layout."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                quote:
                  "Zeebrag gave us strategic clarity, a better website story, and campaigns that actually translated into qualified conversations.",
                name: "Anaya Mehta",
                role: "Founder, Sprintly Ventures",
              },
              {
                quote:
                  "Their team thinks like growth operators, not just service providers. We saw stronger conversion quality within weeks.",
                name: "Rohan Kapoor",
                role: "CEO, Clario Health",
              },
              {
                quote:
                  "The founder branding system made our category authority much stronger, and the website finally felt enterprise-ready.",
                name: "Ishita Rao",
                role: "Co-founder, NovaSkale",
              },
            ].map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)] p-8 shadow-sm"
              >
                <div className="text-[var(--color-accent)]">★★★★★</div>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  “{testimonial.quote}”
                </p>
                <div className="mt-8">
                  <p className="font-semibold text-slate-950">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.28em] text-slate-400">
                    Video testimonial placeholder
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="A premium, simple process designed to move from confusion to momentum."
            description="Clear strategy first, then execution, then scale. That sequencing is what protects ROI."
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              "Audit your business",
              "Create custom growth strategy",
              "Execute and scale campaigns",
            ].map((step, index) => (
              <article
                key={step}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-primary),var(--color-secondary))] text-lg font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-950">
                  {step}
                </h3>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Outcomes"
            title="The transformation we build is practical, visible, and easier to scale."
            description="Every deliverable should create more trust, more clarity, and a better path to revenue."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Stronger online authority that matches your real capability",
              "More predictable lead generation from integrated channels",
              "Premium founder presence that improves trust and recall",
              "Higher conversion rates from sharper messaging and UX",
              "Content systems that create momentum instead of random output",
              "Scalable digital assets that keep supporting sales over time",
            ].map((benefit) => (
              <div
                key={benefit}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 text-sm leading-7 text-slate-700"
              >
                {benefit}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="book-call" className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <RoiCalculator />
            <div className="grid gap-8">
              <AuditForm />
              <div className="rounded-[2rem] bg-[#02253f] p-8 text-white shadow-[0_30px_80px_rgba(2,37,63,0.22)]">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                  Bookings
                </p>
                <h3 className="mt-4 text-3xl font-bold tracking-tight">
                  Calendly strategy call placeholder
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Replace this panel with your live Calendly embed or booking widget
                  when scheduling is ready.
                </p>
                <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 text-sm text-white/80">
                  AI chatbot placeholder available for future lead qualification and
                  support flows.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions before founders commit to a growth partner."
              description="These answers reduce friction, clarify scope, and help buyers move forward with confidence."
            />
            <FaqList />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#02253f,#034C8C_50%,#0477BF)] p-8 text-white shadow-[0_30px_80px_rgba(3,76,140,0.24)] sm:p-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                Final CTA
              </p>
              <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
                Ready to Build a Brand That Scales Faster?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-100">
                Limited strategy slots available this month. Let’s identify the
                fastest path to stronger authority, better conversions, and measurable growth.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact">Get Free Growth Audit</Button>
                <Button href="#book-call" variant="secondary">
                  Book Free Strategy Call
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#02253f] py-16">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Newsletter
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white">
              Growth ideas, content systems, and conversion insights for modern brands.
            </h2>
          </div>
          <NewsletterForm />
        </Container>
      </section>
    </>
  );
}
