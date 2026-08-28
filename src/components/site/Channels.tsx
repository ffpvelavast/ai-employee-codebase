import { ArrowRight, CalendarCheck, Globe, MessageCircle, PhoneCall, RefreshCcw, UserCheck, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow, Section } from "./ui";

const channels = [
  { icon: PhoneCall, name: "Phone", text: "AI answers and handles calls." },
  { icon: MessageCircle, name: "WhatsApp", text: "AI responds naturally and continues conversations." },
  { icon: Globe, name: "Website", text: "AI engages visitors and answers questions instantly." },
];

const outcomes = [
  { icon: UserCheck, label: "Qualified Lead" },
  { icon: CalendarCheck, label: "Appointment Booked" },
  { icon: Users, label: "Human Handoff" },
  { icon: RefreshCcw, label: "Follow-Up Triggered" },
];

export function Channels() {
  return (
    <Section tone="navy">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <Eyebrow tone="light">One AI. Every customer channel.</Eyebrow>
          <h2 className="mt-4 text-[2rem] leading-[1.08] font-bold sm:text-5xl">Wherever Your Customer Reaches You.</h2>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-3">
        {channels.map((channel, i) => (
          <Reveal key={channel.name} delay={i * 80}>
            <div className="h-full rounded-2xl border border-navy-foreground/12 bg-navy-foreground/6 p-6 backdrop-blur-sm">
              <channel.icon className="h-5 w-5 text-amber" />
              <h3 className="mt-4 font-display text-lg font-semibold">{channel.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{channel.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mx-auto mt-10 flex max-w-md flex-col items-center">
          <span aria-hidden className="h-10 w-px bg-navy-foreground/20" />
          <div className="w-full rounded-2xl border border-navy-foreground/20 bg-navy-foreground/10 px-6 py-5 text-center">
            <p className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-navy-foreground/55">
              One intelligence
            </p>
            <p className="mt-1.5 font-display text-xl font-semibold">Your AI Employee</p>
          </div>
          <span aria-hidden className="h-10 w-px bg-navy-foreground/20" />
        </div>
      </Reveal>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {outcomes.map((outcome, i) => (
          <Reveal key={outcome.label} delay={i * 70}>
            <div className="flex items-center gap-3 rounded-xl border border-navy-foreground/12 px-4 py-3.5">
              <outcome.icon className="h-4 w-4 text-amber" />
              <span className="text-sm font-medium">{outcome.label}</span>
              <ArrowRight className="ml-auto h-3.5 w-3.5 text-navy-foreground/35" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
