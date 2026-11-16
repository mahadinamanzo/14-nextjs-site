import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Mahadi Na Manzo, an independent digital agency built around thoughtful collaboration.",
};

const values = [
  {
    number: "01",
    title: "Curiosity first",
    description:
      "We ask better questions, stay open to possibility, and never assume we already know the answer.",
  },
  {
    number: "02",
    title: "Make it matter",
    description:
      "Good-looking is good. Good-looking with a real purpose and a lasting impact is better.",
  },
  {
    number: "03",
    title: "Better together",
    description:
      "The best ideas come from trust, generous collaboration, and bringing everyone into the process.",
  },
];

const team = [
  { name: "Mahadi Manzo", role: "Founder & Creative Director", initials: "MM", color: "bg-[#d5e0cb]" },
  { name: "Amina Yusuf", role: "Strategy Lead", initials: "AY", color: "bg-[#f0d7c1]" },
  { name: "Daniel Okafor", role: "Digital Designer", initials: "DO", color: "bg-[#d8d3e7]" },
  { name: "Nia Mensah", role: "Project Partner", initials: "NM", color: "bg-[#e6d9c7]" },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
              A little about us
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-7xl">
              Small enough to care.{" "}
              <span className="text-emerald-800">Big on what&apos;s possible.</span>
            </h1>
          </div>
          <p className="max-w-lg text-lg leading-8 text-ink/65 lg:pb-2">
            Mahadi Na Manzo is an independent digital agency for people with a
            point of view. We bring the right mix of thinking and making to
            help ambitious businesses find their next.
          </p>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid overflow-hidden rounded-[2rem] bg-[#dfe8de] md:grid-cols-2">
            <div className="flex min-h-[330px] items-end bg-[#344d3e] p-8 text-white sm:min-h-[440px] sm:p-12">
              <p className="max-w-sm text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
                Good ideas deserve a little room to grow.
              </p>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
                Our story
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                Independent by nature. Connected by design.
              </h2>
              <p className="mt-5 leading-7 text-ink/65">
                We started with a simple belief: the most useful creative work
                starts by listening. Today, we bring strategy, design, and
                technology together in one close-knit team—working with good
                people to solve the right problems and make things that last.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white/55 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What guides us"
            title="A few things we’ll never compromise."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.number} className="border-t border-ink/15 pt-5">
                <span className="text-xs font-semibold tracking-[0.15em] text-emerald-800">
                  {value.number}
                </span>
                <h3 className="mt-8 text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/60">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The people behind it"
            title="Good humans. Different perspectives."
            description="A small, senior team that cares about the details and the bigger picture in equal measure."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {team.map((person) => (
              <article key={person.name}>
                <div className={`grid aspect-[0.85] place-items-center rounded-3xl ${person.color}`}>
                  <span className="grid size-24 place-items-center rounded-full border border-ink/20 text-2xl font-semibold tracking-tight text-ink/80 sm:size-32 sm:text-3xl">
                    {person.initials}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-semibold sm:text-base">{person.name}</h3>
                <p className="mt-1 text-xs text-ink/55 sm:text-sm">{person.role}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container className="flex flex-col gap-6 rounded-[2rem] bg-lime p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink/60">Come say hello</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              Have a good one in mind?
            </h2>
          </div>
          <Button href="/contact" variant="secondary">Let&apos;s talk</Button>
        </Container>
      </section>
    </>
  );
}
