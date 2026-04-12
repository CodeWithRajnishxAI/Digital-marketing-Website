"use client";

const faqs = [
  {
    question: "How fast can we see growth?",
    answer:
      "Early improvements often show within the first few weeks through positioning, landing page, and campaign refinements. Compounding channels like SEO and authority content take longer but create stronger long-term momentum.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. Zeebrag is built for startups and modern businesses that need a premium growth partner without building a large in-house team too early.",
  },
  {
    question: "Do you provide websites too?",
    answer:
      "Yes. We handle conversion-focused websites, landing pages, messaging structure, and supporting analytics foundations.",
  },
  {
    question: "Is branding included?",
    answer:
      "Brand clarity is embedded into our work. Depending on scope, we cover founder branding, positioning, visual polish, and message architecture.",
  },
  {
    question: "How is ROI measured?",
    answer:
      "We track growth using business-relevant KPIs such as qualified leads, CAC efficiency, ROAS, conversion rate improvements, and traffic quality.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We primarily support startups, B2B services, SaaS, D2C, and founder-led brands that need stronger digital authority and scalable acquisition.",
  },
];

export function FaqList() {
  return (
    <div className="grid gap-4">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition open:border-[var(--color-secondary)]/40 open:shadow-lg"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-slate-950">
            {faq.question}
            <span className="text-2xl text-[var(--color-primary)] transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 pr-8 text-sm leading-7 text-slate-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
