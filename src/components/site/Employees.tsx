import { Reveal } from "./Reveal";
import { Eyebrow, Section } from "./ui";

const employees = [
  {
    initials: "FD",
    role: "AI Front Desk",
    text: "Handles incoming calls and customer enquiries.",
  },
  {
    initials: "BA",
    role: "AI Brand Ambassador",
    text: "Answers questions and represents your business consistently.",
  },
  {
    initials: "SC",
    role: "AI Sales Consultant",
    text: "Qualifies prospects and helps move serious buyers forward.",
  },
  {
    initials: "AC",
    role: "AI Appointment Coordinator",
    text: "Finds available times and books meetings directly into your calendar.",
  },
];

export function Employees() {
  return (
    <Section id="ai-employees">
      <div className="max-w-2xl">
        <Reveal>
          <Eyebrow>The AI Employee</Eyebrow>
          <h2 className="mt-4 text-[2rem] leading-[1.08] font-bold text-navy sm:text-5xl">Meet Your AI Employee.</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Not another chatbot. A specialised AI team member designed to perform a specific role in your customer
            journey.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {employees.map((employee, i) => (
          <Reveal key={employee.role} delay={i * 70}>
            <article className="group h-full rounded-3xl border border-hairline bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-blue/30 hover:shadow-lift">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-surface-2 font-display text-base font-bold text-navy ring-1 ring-hairline transition-colors group-hover:bg-blue-soft group-hover:text-blue">
                  {employee.initials}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy">{employee.role}</h3>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue dot-pulse" />
                    Always available
                  </span>
                </div>
              </div>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">{employee.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
