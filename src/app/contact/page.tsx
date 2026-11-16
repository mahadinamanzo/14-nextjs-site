import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mahadi Na Manzo to start your next project.",
};

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-10">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
              Start something good
            </p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-7xl">
              Tell us what you&apos;re thinking.
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-ink/65">
              A new idea, a knotty challenge, or just a feeling it&apos;s time
              for something different. We&apos;d love to hear about it.
            </p>
          </div>

          <aside className="rounded-[2rem] bg-[#e8eee5] p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
              We&apos;re easy to reach
            </p>
            <div className="mt-7 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
                  Email
                </p>
                <a
                  className="mt-2 inline-block text-base font-semibold tracking-tight hover:text-emerald-900 sm:text-lg"
                  href="mailto:mahadinamanzo@gmail.com"
                >
                  mahadinamanzo@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
                  Phone
                </p>
                <a
                  className="mt-2 inline-block text-lg font-semibold tracking-tight hover:text-emerald-900"
                  href="tel:08131923393"
                >
                  08131923393
                </a>
              </div>
            </div>
          </aside>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
