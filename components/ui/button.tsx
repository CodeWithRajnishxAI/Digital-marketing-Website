import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        variant === "primary" &&
          "bg-[var(--color-accent)] text-white shadow-[0_18px_40px_rgba(242,106,27,0.28)] hover:-translate-y-0.5 hover:bg-[var(--color-accent-hover)]",
        variant === "secondary" &&
          "border border-white/25 bg-white/10 text-slate-900 backdrop-blur hover:border-[var(--color-secondary)] hover:bg-white/80",
        variant === "ghost" &&
          "border border-slate-200 bg-white text-slate-900 hover:border-[var(--color-secondary)] hover:text-[var(--color-primary)]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
