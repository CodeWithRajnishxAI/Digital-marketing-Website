import Link from "next/link";
import { AuditForm } from "@/components/forms/audit-form";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact Digital Marketing Agency in Bhopal | Zeebrag",
  description:
    "Contact Zeebrag in Bhopal, India to book a growth audit, discuss SEO, ads, branding, or website development goals.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Zeebrag about building your next stage of digital growth."
        description="Share your goals, your current bottlenecks, and where you need the strongest execution support."
      />
      <section id="audit-form" className="scroll-mt-24 py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-[#02253f] p-8 text-white shadow-[0_30px_80px_rgba(2,37,63,0.2)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Reach us
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Strategy conversations built around clarity and outcomes.
            </h2>
            <div className="mt-8 grid gap-4 text-sm leading-7 text-slate-200">
              <p>Email: contact.zeebrag@gmail.com</p>
              <p>Phone: +91 95225 55670</p>
              <p>Location: Bhopal, India</p>
              <p>Book your free 30-min growth audit and choose a time slot that works for you.</p>
            </div>
          </div>
          <AuditForm />
        </Container>
      </section>
      <section className="bg-white py-20">
        <Container className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Contact Zeebrag for growth support in Bhopal and across India
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              If your business needs stronger demand generation, sharper positioning, or a better
              website experience, the best next step is a focused conversation. Zeebrag works with
              startups, service brands, and founder-led companies that want a clearer path to
              measurable growth. That usually starts with understanding what is blocking momentum
              right now, whether the issue is weak search visibility, underperforming Meta Ads,
              inconsistent lead quality, or a website that does not convert.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Our contact page is designed for buyers who want to move quickly. Share your details,
              tell us where growth feels stuck, and we will review the context before the call so
              the conversation is practical from the start. For local businesses in Bhopal, India,
              this can mean discussing local SEO and lead generation. For national brands, it can
              mean refining acquisition strategy, website messaging, or founder branding systems.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              We also recommend exploring our <Link href="/" className="font-semibold text-[var(--color-primary)]">homepage</Link>, detailed
              <Link href="/services" className="font-semibold text-[var(--color-primary)]"> growth services</Link>, and recent
              <Link href="/case-studies" className="font-semibold text-[var(--color-primary)]"> case studies</Link> before the call.
              That context helps you see how Zeebrag approaches growth strategy, content systems,
              paid media, and website development in an integrated way.
            </p>
          </article>
          <aside className="rounded-[2rem] bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              What to expect next
            </h2>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
              <li>We review your form submission before responding so the conversation starts with context.</li>
              <li>We identify the biggest growth bottlenecks affecting traffic, conversion, or lead quality.</li>
              <li>We recommend the most relevant next step, whether that is SEO, ads, website work, or founder branding.</li>
              <li>We keep the process practical, especially for businesses in Bhopal and India that need faster execution.</li>
            </ul>
          </aside>
        </Container>
      </section>
    </>
  );
}
