import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navItems, services } from "@/lib/site-data";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75a4 4 0 0 0-4 4v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm8.88 1.31a1.06 1.06 0 1 1 0 2.12 1.06 1.06 0 0 1 0-2.12ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.75A3.25 3.25 0 1 0 12 15.25 3.25 3.25 0 0 0 12 8.75Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
      <path d="M5.37 3.5A1.87 1.87 0 1 1 5.3 7.24 1.87 1.87 0 0 1 5.37 3.5ZM3.75 8.75h3.25v11.5H3.75V8.75ZM9.03 8.75h3.12v1.57h.05c.43-.82 1.5-1.7 3.09-1.7 3.3 0 3.91 2.17 3.91 5v6.63H15.95v-5.88c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1v5.98H8.5V8.75h.53Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#02253f] pb-28 pt-16 text-slate-200 md:pb-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-xl">
            <Link href="/" className="inline-flex rounded-2xl bg-white px-4 py-3 shadow-sm">
              <Image
                src="/Zeebrag_logo.jpg-removebg-preview.png"
                alt="Zeebrag logo"
                width={180}
                height={72}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-white">
              Zeebrag is the premium growth partner for brands that want strategy,
              execution, and measurable momentum.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Technology, creativity, and data-backed execution working together to
              create stronger visibility, better conversions, and scalable growth.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/zeebrag_com?igsh=Nmo4b2JrZnVzaHJ2"
                target="_blank"
                rel="noreferrer"
                aria-label="Zeebrag on Instagram"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[var(--color-primary)] shadow-sm transition hover:-translate-y-0.5 hover:text-[var(--color-secondary)]"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/zeebrag/"
                target="_blank"
                rel="noreferrer"
                aria-label="Zeebrag on LinkedIn"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[var(--color-primary)] shadow-sm transition hover:-translate-y-0.5 hover:text-[var(--color-secondary)]"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Core services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Zeebrag. Built for premium, measurable growth.</p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/thank-you" className="hover:text-white">
              Thank You
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
