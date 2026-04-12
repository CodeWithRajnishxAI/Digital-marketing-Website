import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#f2f2f2_100%)] py-20">
      <Container>
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-[var(--color-secondary)]/15 bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
            {eyebrow}
          </span>
          <h1 className="mt-6 text-balance text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">Get Free Growth Audit</Button>
            <Button href="/case-studies" variant="ghost">
              View results
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
