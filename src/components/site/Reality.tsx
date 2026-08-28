import { CalendarClock, CalendarCheck, Clock, MessageSquare, Moon, PhoneMissed, ShieldCheck, UserCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow, Section } from "./ui";

const moments = [
  { icon: PhoneMissed, text: "The phone rings while you're helping a customer." },
  { icon: Moon, text: "A WhatsApp message arrives late at night." },
  { icon: MessageSquare, text: "Someone asks for a quote on Sunday." },
  { icon: CalendarClock, text: "By Monday, they've already spoken to your competitor." },
];

const capabilities = [
  { icon: PhoneMissed, title: "Every call picked up", text: "No ringing out, no voicemail dead ends." },
  { icon: MessageSquare, title: "Every WhatsApp answered", text: "Natural replies, at any hour." },
  { icon: Clock, title: "Every website question handled", text: "Visitors get answers while intent is high." },
  { icon: UserCheck, title: "Serious buyers identified", text: "Qualified before they reach your team." },
  { icon: CalendarCheck, title: "Appointments added to your calendar", text: "Booked directly into real availability." },
  { icon: ShieldCheck, title: "No enquiry forgotten", text: "Nothing slips. No unnecessary delay." },
];

export function Reality() {
  return (
    <>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>The reality</Eyebrow>
            <h2 className="mt-4 text-[2rem] leading-[1.1] font-bold text-navy sm:text-[2.75rem]">
              Good Businesses Miss Enquiries Every Day.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Not because they don&apos;t care. Because good businesses have a lot happening at once.
            </p>
          </Reveal>

          <ul className="relative">
            <span aria-hidden className="absolute top-2 bottom-2 left-[19px] w-px bg-hairline" />
            {moments.map((moment, i) => (
              <Reveal as="li" key={moment.text} delay={i * 80} className="relative flex gap-5 pb-9 last:pb-0">
                <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-hairline bg-card text-navy shadow-soft">
                  <moment.icon className="h-4.5 w-4.5" />
                </span>
                <p className="pt-2 text-lg leading-snug font-medium text-navy sm:text-xl">{moment.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="surface">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>The alternative</Eyebrow>
          <h2 className="mt-4 text-[2rem] leading-[1.08] font-bold text-navy sm:text-5xl">
            What If Every Customer Got an Answer?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">Day or night. Phone, WhatsApp or website.</p>
        </Reveal>

        <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, i) => (
            <Reveal key={capability.title} delay={i * 60}>
              <div className="border-t border-hairline pt-6">
                <capability.icon className="h-5 w-5 text-blue" />
                <h3 className="mt-4 text-lg font-semibold text-navy">{capability.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{capability.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
