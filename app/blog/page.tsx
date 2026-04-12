import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { blogs } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "Zeebrag Blog | Growth, SEO, Branding, and Conversion Insights",
  description:
    "Read Zeebrag blog posts on startup growth, founder branding, SEO, landing pages, and digital performance.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="A scalable SEO-ready content hub for long-term keyword growth."
        description="Use the Zeebrag blog to attract organic traffic, build authority, and educate future buyers."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {blogs.map((post) => (
              <article
                key={post.slug}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                  {post.category}
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
                  {post.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{post.description}</p>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                  <span>{post.readTime}</span>
                  <span>{post.publishedAt}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-[var(--color-primary)]"
                >
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
