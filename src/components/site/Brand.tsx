import { CalendarCheck, Clock, Languages, MessagesSquare, UserCheck, Users, Zap } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow, Section } from "./ui";

const highlights = [
  { icon: Clock, label: "24/7 availability" },
  { icon: MessagesSquare, label: "Consistent brand communication" },
  { icon: Zap, label: "Faster customer response" },
  { icon: UserCheck, label: "Lead qualification" },
  { icon: Users, label: "Human escalation" },
  { icon: CalendarCheck, label: "Calendar booking" },
];

const languages = ["English", "Mandarin", "Bahasa", "Thai", "Korean", "Japanese"];

const pillars = [
  {
    title: "Enterprise Thinking",
    text: "Experience designing solutions for complex organisations.",
  },
  {
    title: "Customer Experience",
    text: "Technology designed around how real customers behave.",
  },
  {
    title: "Practical AI Implementation",
    text: "AI systems designed to create measurable business outcomes.",
  },
];

export function Brand() {
  return (
    <>
      <Section tone="navy">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-[2.25rem] leading-[1.05] font-bold sm:text-6xl">
            Always On.
            <span className="block text-amber">Never Off-Brand.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy-foreground/70 sm:text-lg">
            Your AI Employees are trained to understand your business, communicate in your preferred tone and respond
            consistently across customer channels.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <Reveal key={item.label} delay={i * 60}>
              <div className="flex items-center gap-3 border-t border-navy-foreground/12 pt-5">
                <item.icon className="h-4.5 w-4.5 text-amber" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <Reveal>
            <Eyebrow>Multilingual</Eyebrow>
            <h2 className="mt-4 text-[2rem] leading-[1.1] font-bold text-navy sm:text-[2.75rem]">
              Speak Your Customer&apos;s Language.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Your customers can interact naturally in the languages they are most comfortable using.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <div className="flex flex-wrap gap-2.5">
              {languages.map((language) => (
                <span
                  key={language}
                  className="rounded-full border border-hairline bg-card px-4 py-2.5 text-sm font-medium text-navy shadow-soft transition-colors hover:border-blue/40 hover:text-blue"
                >
                  {language}
                </span>
              ))}
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-soft px-4 py-2.5 text-sm font-semibold text-blue">
                <Languages className="h-4 w-4" />
                More
              </span>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="about" tone="surface">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Why ASAP AI</Eyebrow>
            <h2 className="mt-4 text-[2rem] leading-[1.08] font-bold text-navy sm:text-5xl">
              AI That Understands Business Before Technology.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Built by a team with over twenty years of experience across enterprise strategy, customer experience
              design, innovation and software development.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 80}>
              <div className="border-t-2 border-navy pt-6">
                <h3 className="font-display text-lg font-semibold text-navy">{pillar.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mt-14 max-w-3xl font-display text-xl leading-snug font-semibold text-navy sm:text-2xl">
            We&apos;ve worked with global brands. Now we&apos;re bringing the same thinking to businesses ready to put
            AI to work.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
