import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { Cta, Eyebrow, Logo, Section } from "./ui";


const faqs = [
  {
    q: "What exactly is an AI Employee?",
    a: "A specialised AI team member trained on your business to perform one role — answering calls, handling enquiries, qualifying leads or booking appointments.",
  },
  {
    q: "Can the AI answer calls?",
    a: "Yes. Your AI Front Desk picks up incoming calls, understands the enquiry, answers it and takes the next step.",
  },
  {
    q: "Can it work with WhatsApp?",
    a: "Yes. It replies naturally on WhatsApp and continues the conversation until the customer has what they need.",
  },
  {
    q: "Can it book appointments?",
    a: "It checks real availability and books straight into your calendar, then confirms with the customer.",
  },
  {
    q: "Will the AI replace my staff?",
    a: "No. It handles routine enquiries so your team spends time on the conversations that need a person — with full context when they step in.",
  },
  {
    q: "How does the AI learn about my business?",
    a: "It's trained on your website, services, tone of voice and the answers you already give customers every day.",
  },
  {
    q: "Can customers speak in different languages?",
    a: "Yes. Customers can interact in the language they're most comfortable using, including English, Mandarin, Bahasa, Thai, Korean and Japanese.",
  },
];

export function FaqCta() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 text-[2rem] leading-[1.1] font-bold text-navy sm:text-[2.5rem]">
              Questions Business Owners Ask Us.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="w-full">
              {faqs.map((faq, i) => (
                <div key={faq.q} className="border-b border-hairline">
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-navy sm:text-lg"
                  >
                    {faq.q}
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>


      <Section tone="navy">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-[2.25rem] leading-[1.05] font-bold sm:text-6xl">
            Start With Your First AI Employee.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/70 sm:text-lg">
            See how AI could answer, qualify and support your customers around the clock.
          </p>
          <div className="mt-9 flex justify-center">
            <Cta href="#demo" size="lg">
              Put AI To Work
            </Cta>
          </div>
          <p className="mt-7 text-sm text-navy-foreground/55">
            Phone. WhatsApp. Website. One intelligent customer experience.
          </p>
        </Reveal>
      </Section>
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-background py-12">
      <div className="container-page flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            AI Employees that answer, qualify and book — across phone, WhatsApp and your website.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm sm:items-end">
          <a href="mailto:hello@asapai.com" className="font-medium text-navy hover:text-blue">
            hello@asapai.com
          </a>
          <div className="flex gap-6 text-muted-foreground">
            <a href="#top" className="hover:text-navy">
              Privacy Policy
            </a>
            <a href="#top" className="hover:text-navy">
              Terms
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ASAP AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
