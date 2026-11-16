import type { Metadata } from "next";
import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Services",
  description: "Brand strategy, digital design, and growth services from Mahadi Na Manzo.",
};

const services = [
  {
    number: "01",
    title: "Brand strategy & identity",
    intro: "Find your voice. Make it unmistakable.",
    description:
      "We uncover what makes your business matter, then turn that clarity into a brand people can recognise, remember, and believe in.",
    deliverables: ["Positioning & messaging", "Visual identity systems", "Brand guidelines"],
    glyph: "✳",
  },
  {
    number: "02",
    title: "Websites & digital products",
    intro: "Useful by design. Memorable by nature.",
    description:
      "From first sketch to final pixel, we create digital experiences that feel effortless for your audience and work hard for your business.",
    deliverables: ["Website design & development", "Digital product experiences", "Content & UX"],
    glyph: "↗",
  },
  {
    number: "03",
    title: "Growth & creative direction",
    intro: "Turn a good idea into forward motion.",
    description:
      "We help ambitious teams make the right next move with clear direction, sharp creative, and a plan that makes progress visible.",
    deliverables: ["Campaign concepts", "Creative direction", "Ongoing design partnership"],
    glyph: "⌁",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <Container className="grid gap-10 md:grid-cols-[1fr_0.65fr] md:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
              What we can do together
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-7xl">
              Good thinking.{" "}
              <span className="text-emerald-800">Made real.</span>
            </h1>
          </div>
          <p className="max-w-md text-lg leading-8 text-ink/65">
            The right mix of people, perspective, and craft to take you from
            &ldquo;what if?&rdquo; to what&apos;s next.
          </p>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container className="space-y-4">
          {services.map((service) => (
            <article
              key={service.number}
              className="grid gap-8 rounded-[2rem] border border-ink/10 bg-white/50 p-7 sm:p-10 lg:grid-cols-[0.1fr_0.9fr_1fr] lg:gap-12"
            >
              <span className="text-xs font-bold tracking-[0.16em] text-emerald-800">
                {service.number}
              </span>
              <div>
                <span className="grid size-12 place-items-center rounded-full bg-[#e8eee5] text-2xl text-emerald-900">
                  {service.glyph}
                </span>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-emerald-900">
                  {service.intro}
                </p>
              </div>
              <div>
                <p className="max-w-lg text-sm leading-7 text-ink/65 sm:text-base">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-ink/75">
                      <span className="size-1.5 rounded-full bg-emerald-800" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="A good place to start"
            title="Every project begins with a conversation."
            description="Tell us what you’re working towards. We’ll bring an open mind and a few good questions."
            light
          />
          <Button href="/contact">Let&apos;s talk</Button>
        </Container>
      </section>
    </>
  );
}
