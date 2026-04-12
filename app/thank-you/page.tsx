import Link from "next/link";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Thank You | Zeebrag",
  description: "Thanks for contacting Zeebrag. We will review your request and get back to you soon.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-[linear-gradient(135deg,#02253f,#034C8C_50%,#0477BF)] p-10 text-white shadow-[0_30px_80px_rgba(3,76,140,0.24)]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
            Thank you
          </p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight">
            Your request has been received.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-100">
            A Zeebrag strategist will review your details and come back with the
            next best steps for your brand.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
          >
            Return to homepage
          </Link>
        </div>
      </Container>
    </section>
  );
}
