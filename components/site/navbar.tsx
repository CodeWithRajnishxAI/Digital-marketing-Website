"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-lg shadow-sky-900/10">
            <Image
              src="/Zeebrag_logo.jpg-removebg-preview.png"
              alt="Zeebrag logo"
              width={112}
              height={112}
              priority
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <div className="text-lg font-extrabold tracking-tight text-slate-950">Zeebrag</div>
            <div className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Growth-Tech Partner
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[var(--color-primary)]",
                  active ? "text-[var(--color-primary)]" : "text-slate-600",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Button href="/contact" className="hidden lg:inline-flex">
          Get Free Growth Audit
        </Button>
      </Container>
    </header>
  );
}
