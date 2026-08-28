import { Check, X } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow, Section } from "./ui";

const without = [
  "Interrupted staff",
  "Missed calls",
  "Slow replies",
  "Manual qualification",
  "Repetitive questions",
];

const withAi = [
  "AI handles routine enquiries",
  "Customers get instant answers",
  "Serious opportunities are identified",
  "Your team joins when they are actually needed",
];

const stages = [
  { stage: "Stage 1", title: "AI Front Desk", text: "Start with the enquiries you miss most." },
  { stage: "Stage 2", title: "AI Sales Consultant", text: "Qualify and progress serious buyers." },
  { stage: "Stage 3", title: "AI Customer Experience Team", text: "Consistent answers across every channel." },
  { stage: "Stage 4", title: "Your AI Department", text: "A complete always-on customer layer." },
];

export function HumanAI() {
  return (
    <>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Human + AI, not human vs AI</Eyebrow>
            <h2 className="mt-4 text-[2rem] leading-[1.1] font-bold text-navy sm:text-[2.75rem]">
              Your Team Stays Focused on What Humans Do Best.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              When a customer needs a real person, your team is alerted with the conversation context already
              available.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal delay={70}>
              <div className="h-full rounded-3xl border border-hairline bg-surface p-6">
                <p className="text-sm font-semibold text-muted-foreground">Without AI</p>
                <ul className="mt-5 space-y-3.5">
                  {without.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.95rem] text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="h-full rounded-3xl border border-blue/20 bg-card p-6 shadow-soft">
                <p className="text-sm font-semibold text-blue">With AI Employees</p>
                <ul className="mt-5 space-y-3.5">
                  {withAi.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.95rem] text-navy">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Grow at your pace</Eyebrow>
            <h2 className="mt-4 text-[2rem] leading-[1.08] font-bold text-navy sm:text-5xl">
              Start With One. Grow Into a Team.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              You don&apos;t need to transform everything at once. Begin with one business problem, then build your AI
              Department.
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-4 md:grid-cols-4">
          {stages.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 80}>
              <div className="relative h-full rounded-2xl border border-hairline bg-card p-6 shadow-soft">
                <span className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-amber">
                  {item.stage}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                <span
                  aria-hidden
                  className="absolute top-1/2 -right-4 hidden h-px w-4 bg-hairline md:block"
                  style={{ display: i === stages.length - 1 ? "none" : undefined }}
                />
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  );
}
