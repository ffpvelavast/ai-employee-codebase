import { PlayCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { Cta, Section } from "./ui";

export function Video() {
  return (
    <Section id="how-it-works" tone="surface">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-[2rem] leading-[1.08] font-bold text-navy sm:text-5xl">
            What AI Employees <span className="text-blue">Can Do for You?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Watch how AI Employees answer calls, respond on WhatsApp and turn enquiries into booked
            appointments — around the clock.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="mx-auto mt-12 max-w-4xl">
          {/* Replace the placeholder below with your YouTube embed:
              <iframe className="aspect-video w-full rounded-3xl" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" ... /> */}
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-hairline gradient-navy shadow-lift">
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-navy-foreground/10 ring-1 ring-navy-foreground/25 transition-transform hover:scale-105">
                  <PlayCircle className="h-10 w-10 text-navy-foreground" />
                </span>
                <p className="mt-5 font-display text-lg font-semibold text-navy-foreground">
                  Your video goes here
                </p>
                <p className="mt-1 text-sm text-navy-foreground/60">
                  Embed your YouTube link in this space
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="mt-10 text-center">
          <Cta href="#demo" size="lg">
            Create My AI Demo
          </Cta>
        </div>
      </Reveal>
    </Section>
  );
}
