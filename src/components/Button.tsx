import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-lime text-ink hover:bg-[#c5eb52]"
      : "border border-ink/15 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-white";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-semibold transition-colors ${styles} ${className}`}
    >
      {children}
      <span aria-hidden="true" className="text-base">
        ↗
      </span>
    </Link>
  );
}
