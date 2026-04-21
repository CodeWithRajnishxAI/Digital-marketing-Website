import { AuditForm } from "@/components/forms/audit-form";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact Zeebrag | Book a Growth Audit",
  description:
    "Contact Zeebrag to request a free growth audit, discuss your brand goals, or book a strategy call.",
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
              <p>Location: India</p>
              <p>Book your free 30-min growth audit choose a time slot that works for you.</p>
            </div>
          </div>
          <AuditForm />
        </Container>
      </section>
    </>
  );
}
