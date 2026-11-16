"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "@/components/Container";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20 border-b border-ink/10 bg-paper">
      <Container className="flex h-[76px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Mahadi Na Manzo home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="grid size-9 place-items-center rounded-full bg-ink text-sm font-bold text-lime">
            M
          </span>
          <span className="text-sm font-bold tracking-tight sm:text-base">
            Mahadi Na Manzo
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors hover:text-emerald-800 ${active ? "font-semibold text-emerald-900" : "text-ink/65"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-lime px-6 text-sm font-semibold text-ink transition-colors hover:bg-[#c5eb52]"
          >
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-ink/15 text-ink md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
            <span className={`h-0.5 w-full bg-current transition-transform ${menuOpen ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-current transition-transform ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>
      </Container>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-b border-ink/10 bg-paper px-5 pb-6 pt-2 shadow-lg md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-ink/10 py-4 text-base ${active ? "font-semibold text-emerald-900" : "text-ink/70"}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-5 inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-full bg-lime px-6 text-sm font-semibold text-ink transition-colors hover:bg-[#c5eb52]"
            >
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
