import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { blogs } from "@/lib/site-data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    return createPageMetadata({
      title: "Post Not Found | Zeebrag",
      description: "The requested blog article could not be found.",
      path: "/blog",
    });
  }

  return createPageMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.description}
      />
      <article className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Article info
            </p>
            <div className="mt-5 grid gap-4 text-sm text-slate-600">
              <p>Published: {post.publishedAt}</p>
              <p>Read time: {post.readTime}</p>
              <p>Internal link target: service and case study pages</p>
            </div>
            <div className="mt-8">
              <Button href="/services/seo-services">Explore SEO services</Button>
            </div>
          </aside>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            {post.sections.map((section, index) => (
              <section
                key={section.heading}
                className={index < post.sections.length - 1 ? "mb-10" : undefined}
              >
                <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                  {section.heading}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </Container>
      </article>
    </>
  );
}
