export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  headline: string;
  outcomes: string[];
  deliverables: string[];
  process: string[];
  seoTitle: string;
  seoDescription: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedAt: string;
  seoTitle: string;
  seoDescription: string;
  sections: Array<{ heading: string; content: string }>;
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  problem: string;
  strategy: string;
  execution: string[];
  outcomes: Array<{ label: string; value: string }>;
  seoTitle: string;
  seoDescription: string;
};

export const navItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact#audit-form" },
];

export const trustLogos = [
  "Sprintly Ventures",
  "NovaSkale",
  "UrbanMint",
  "Clario Health",
  "Founders Loop",
  "Nexa Commerce",
];

export const metrics = [
  { label: "Brands served", value: "50+" },
  { label: "Leads generated in 30 days", value: "120+" },
  { label: "Average paid media ROAS", value: "3x" },
  { label: "Organic traffic growth", value: "200%" },
];

export const painPoints = [
  "Inconsistent lead flow makes revenue planning unpredictable.",
  "Your online presence does not reflect the quality of your business.",
  "Content is getting published, but it is not creating real demand.",
  "Your website looks dated and underperforms in conversions.",
  "Marketing channels feel disconnected, reactive, and hard to measure.",
  "Founder visibility is low, which weakens trust and market authority.",
];

export const solutionPillars = [
  {
    title: "Strategy before spend",
    description:
      "We audit demand, messaging, and channel economics so every campaign starts with a clear growth model.",
  },
  {
    title: "Creative systems that scale",
    description:
      "From founder-led content to ad creatives and landing pages, we build assets designed to compound performance.",
  },
  {
    title: "Technology-backed execution",
    description:
      "Automation, dashboards, websites, and analytics keep your growth engine measurable, fast, and conversion-focused.",
  },
];

export const services: Service[] = [
  {
    slug: "seo-services",
    name: "SEO Services",
    eyebrow: "Search visibility",
    summary: "Capture high-intent traffic and turn search demand into qualified pipeline.",
    description:
      "Zeebrag builds India-focused SEO systems that improve rankings, strengthen authority, and convert organic traffic into revenue.",
    headline: "SEO systems engineered for compounding search growth",
    outcomes: [
      "Higher rankings for commercial keywords",
      "Landing pages aligned to revenue intent",
      "Content hubs built for long-term authority",
      "Technical SEO improvements for stronger Core Web Vitals",
    ],
    deliverables: [
      "Keyword strategy with India-focused buying intent",
      "Technical SEO audit and fixes",
      "Conversion-focused service and location pages",
      "Editorial content roadmap and blog growth engine",
    ],
    process: ["Audit current visibility", "Prioritize revenue pages", "Publish and optimize content", "Measure rankings, leads, and conversions"],
    seoTitle: "SEO Services in India | Zeebrag",
    seoDescription:
      "India-focused SEO services for startups and growth-stage brands. Improve rankings, traffic, and inbound leads with Zeebrag.",
  },
  {
    slug: "meta-ads",
    name: "Meta Ads",
    eyebrow: "Paid social growth",
    summary: "Launch high-converting Meta campaigns with better creatives, sharper targeting, and measurable ROAS.",
    description:
      "We turn Meta Ads into a reliable acquisition engine using creative testing, funnel strategy, and rigorous performance tracking.",
    headline: "Meta Ads campaigns built to lower CAC and accelerate scale",
    outcomes: [
      "Faster testing cycles and better winning creatives",
      "Clear attribution and funnel visibility",
      "Stronger lead quality from paid social",
      "Campaign structures aligned to scaling stages",
    ],
    deliverables: [
      "Offer and funnel audit",
      "Creative direction and ad hooks",
      "Campaign build, tracking, and reporting",
      "Weekly optimization for ROAS and CPL improvement",
    ],
    process: ["Audit offer-market fit", "Build audience and creative matrix", "Launch and optimize", "Scale what converts"],
    seoTitle: "Meta Ads Agency for Startups | Zeebrag",
    seoDescription:
      "Performance-focused Meta Ads management for startups and modern brands. Scale leads and revenue with Zeebrag.",
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    eyebrow: "Intent-driven acquisition",
    summary: "Own high-intent search demand with Google Ads campaigns designed for efficient customer acquisition.",
    description:
      "Zeebrag manages Google Ads with a conversion-first framework spanning search, remarketing, landing pages, and tracking.",
    headline: "Google Ads strategies tuned for intent, quality leads, and profitability",
    outcomes: [
      "Better quality score and lower wasted spend",
      "High-intent keyword targeting",
      "Landing page and ad message alignment",
      "Executive reporting tied to business outcomes",
    ],
    deliverables: [
      "Search term and competitor analysis",
      "Campaign and conversion tracking setup",
      "Landing page recommendations",
      "Bid, copy, and audience optimization",
    ],
    process: ["Map search intent", "Launch precision campaigns", "Optimize budget allocation", "Scale profitable keywords"],
    seoTitle: "Google Ads Management Services | Zeebrag",
    seoDescription:
      "Google Ads management for startups and service businesses that need better-qualified leads and smarter spend efficiency.",
  },
  {
    slug: "website-development",
    name: "Website Development",
    eyebrow: "Digital foundation",
    summary: "Build premium, conversion-ready websites that look credible and perform like a growth asset.",
    description:
      "We design and build modern websites for founders and businesses who need speed, trust, and lead generation built in.",
    headline: "High-performance websites that turn attention into qualified inquiries",
    outcomes: [
      "Premium first impression for investors and buyers",
      "Stronger conversion rates from landing pages and CTAs",
      "Fast, SEO-ready architecture with scalable code",
      "Better analytics and lead capture foundations",
    ],
    deliverables: [
      "UX strategy and premium UI direction",
      "Development in Next.js with SEO fundamentals",
      "Lead forms, analytics, and CTA systems",
      "Performance optimization for Core Web Vitals",
    ],
    process: ["Define positioning and goals", "Design conversion journey", "Develop and optimize", "Launch and iterate"],
    seoTitle: "Website Development Company for Growth Brands | Zeebrag",
    seoDescription:
      "Premium website development for startups and modern service brands. Fast, elegant, SEO-ready websites built by Zeebrag.",
  },
  {
    slug: "personal-branding",
    name: "Personal Branding",
    eyebrow: "Founder authority",
    summary: "Position founders as category leaders with content systems that build trust and attract opportunities.",
    description:
      "Zeebrag helps founders shape a strong public presence through clear positioning, narrative strategy, and content execution.",
    headline: "Founder branding that turns expertise into trust, demand, and market pull",
    outcomes: [
      "Clear personal positioning and message consistency",
      "Higher trust with prospects, talent, and partners",
      "Content systems built around founder insight",
      "Stronger visibility across LinkedIn and owned channels",
    ],
    deliverables: [
      "Founder narrative and positioning workshop",
      "LinkedIn and personal brand content framework",
      "Content repurposing and brand visuals",
      "Performance reviews and authority-building roadmap",
    ],
    process: ["Clarify founder angle", "Build messaging system", "Create content engine", "Compound authority over time"],
    seoTitle: "Personal Branding Services for Founders | Zeebrag",
    seoDescription:
      "Personal branding services for founders and executives who want stronger authority, trust, and inbound opportunities.",
  },
];

export const blogs: BlogPost[] = [
  {
    slug: "startup-growth-marketing-india",
    title: "Startup Growth Marketing in India: What Actually Moves Revenue",
    description:
      "A practical framework for startups in India to align brand, paid acquisition, content, and conversion systems.",
    category: "Growth Strategy",
    readTime: "6 min read",
    publishedAt: "2026-03-18",
    seoTitle: "Startup Growth Marketing in India | Zeebrag Blog",
    seoDescription:
      "Learn how Indian startups can combine branding, paid media, SEO, and website optimization to create reliable growth.",
    sections: [
      {
        heading: "Growth gets expensive without positioning",
        content:
          "If your message is not clear, every channel becomes harder to scale. Teams often blame ads or content when the real issue is weak market positioning.",
      },
      {
        heading: "Demand capture and demand creation must work together",
        content:
          "Search, social, founder content, landing pages, and retargeting should reinforce the same offer. That alignment is what improves conversion efficiency.",
      },
      {
        heading: "Your website is part of your acquisition engine",
        content:
          "A high-performing site improves trust, reduces friction, and converts traffic faster. It is not just a brochure. It is a core growth asset.",
      },
    ],
  },
  {
    slug: "founder-branding-b2b-trust",
    title: "Why Founder Branding Speeds Up B2B Trust and Inbound Leads",
    description:
      "Founders who show up consistently create trust faster, shorten sales cycles, and make their companies easier to remember.",
    category: "Personal Branding",
    readTime: "5 min read",
    publishedAt: "2026-02-26",
    seoTitle: "Founder Branding for B2B Growth | Zeebrag Blog",
    seoDescription:
      "Explore how founder branding improves trust, authority, and inbound opportunities for B2B businesses and startups.",
    sections: [
      {
        heading: "People trust people before they trust brands",
        content:
          "Founder visibility adds context, conviction, and credibility. It gives prospects a human reason to believe your company can deliver.",
      },
      {
        heading: "Consistency matters more than volume",
        content:
          "One focused narrative expressed consistently across LinkedIn, podcasts, video clips, and websites outperforms random bursts of content.",
      },
      {
        heading: "Authority compounds when content is systematic",
        content:
          "The strongest founder brands use repeatable systems for ideation, capture, distribution, and measurement.",
      },
    ],
  },
  {
    slug: "landing-page-conversion-playbook",
    title: "A Landing Page Conversion Playbook for Service Businesses",
    description:
      "Use this framework to improve trust, message clarity, and conversion rates on service landing pages.",
    category: "Website Development",
    readTime: "7 min read",
    publishedAt: "2026-01-15",
    seoTitle: "Landing Page Conversion Playbook | Zeebrag Blog",
    seoDescription:
      "A conversion-focused landing page framework for agencies, startups, and service businesses looking to improve lead generation.",
    sections: [
      {
        heading: "Above-the-fold clarity wins attention",
        content:
          "Your headline should combine who you help, what result you create, and why your approach is different. Visitors decide quickly whether to stay.",
      },
      {
        heading: "Social proof reduces friction",
        content:
          "Specific outcomes, recognizable logos, and founder testimonials reduce skepticism and help buyers move forward faster.",
      },
      {
        heading: "Every section should answer one conversion question",
        content:
          "What do you do, why trust you, what results can buyers expect, how does it work, and what should they do next? Great pages answer these in sequence.",
      },
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "saas-demand-generation",
    client: "NovaSkale",
    industry: "B2B SaaS",
    problem:
      "The company had strong product-market fit but low inbound volume, inconsistent paid results, and a weak founder-led content presence.",
    strategy:
      "Zeebrag combined a new website narrative, founder branding, content repurposing, and paid demand capture across Meta and Google.",
    execution: [
      "Rebuilt the homepage and core service pages around clear ICP messaging",
      "Launched founder-led LinkedIn content and short-form insight clips",
      "Created paid search campaigns for high-intent demo keywords",
      "Installed reporting dashboards to track lead quality and source mix",
    ],
    outcomes: [
      { label: "Qualified leads in 30 days", value: "126" },
      { label: "Paid ROAS", value: "3.2x" },
      { label: "Organic traffic growth", value: "184%" },
    ],
    seoTitle: "B2B SaaS Demand Generation Case Study | Zeebrag",
    seoDescription:
      "See how Zeebrag helped a B2B SaaS brand grow leads, ROAS, and organic traffic with a full-funnel growth system.",
  },
  {
    slug: "d2c-brand-performance",
    client: "UrbanMint",
    industry: "D2C Ecommerce",
    problem:
      "UrbanMint faced rising acquisition costs, underperforming creatives, and a website that did not support premium product positioning.",
    strategy:
      "We refreshed the conversion journey, upgraded ad creative strategy, and layered performance reporting on top of the funnel.",
    execution: [
      "Built new landing pages for hero collections",
      "Created a creative testing roadmap with UGC and founder angles",
      "Optimized retargeting across Meta and Google Display",
      "Improved checkout and product detail page trust elements",
    ],
    outcomes: [
      { label: "Revenue lift", value: "41%" },
      { label: "Cost per acquisition reduction", value: "27%" },
      { label: "Conversion rate increase", value: "2.4x" },
    ],
    seoTitle: "D2C Brand Performance Marketing Case Study | Zeebrag",
    seoDescription:
      "Explore how Zeebrag improved acquisition efficiency and conversion performance for a D2C ecommerce brand.",
  },
];
