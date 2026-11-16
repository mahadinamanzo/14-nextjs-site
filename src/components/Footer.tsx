import Link from "next/link";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-white">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Mahadi Na Manzo<span className="text-lime">.</span>
          </Link>
          <p className="mt-2 text-sm text-white/55">
            Independent by nature. Digital by design.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-white/65 sm:items-end">
          <a className="transition-colors hover:text-lime" href="mailto:mahadinamanzo@gmail.com">
            mahadinamanzo@gmail.com
          </a>
          <p>© {new Date().getFullYear()} Mahadi Na Manzo. Made with intention.</p>
        </div>
      </Container>
    </footer>
  );
}
