import { Reveal } from "./Reveal";

export function Speed() {
  return (
    <section id="cost-of-slow-response" className="relative bg-[#111113] py-24 sm:py-32 text-white overflow-hidden">
      <div className="container-page relative grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16 items-center">
        
        {/* LEFT COLUMN */}
        <div>
          <Reveal>
            <span className="text-xs font-extrabold tracking-[0.14em] uppercase text-[#e52e2e] block mb-5">
              THE COST OF A SLOW RESPONSE
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
              Your next<br />
              customer<br />
              won&apos;t wait.
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-neutral-400 max-w-xl">
              Leads contacted within five minutes convert at eight times the rate of leads contacted later that day.
              <sup className="text-xs text-neutral-500">1</sup> Most businesses can&apos;t reply that fast, especially after hours.
            </p>
          </Reveal>
        </div>

        {/* RIGHT COLUMN (TWO STAT CARDS) */}
        <Reveal delay={160}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 w-full">
            
            {/* Card 1: 8x (Red) */}
            <div className="rounded-[24px] bg-[#1a1a1d] border border-white/[0.06] p-7 sm:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col justify-start transition-all hover:-translate-y-1 hover:border-white/[0.12]">
              <div className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#e52e2e] mb-4 sm:mb-5 leading-none">
                8x
              </div>
              <p className="text-sm leading-relaxed text-neutral-400">
                higher conversion when first contact happens within five minutes.
                <sup className="text-xs text-neutral-500">1</sup>
              </p>
            </div>

            {/* Card 2: 86% (White) */}
            <div className="rounded-[24px] bg-[#1a1a1d] border border-white/[0.06] p-7 sm:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col justify-start transition-all hover:-translate-y-1 hover:border-white/[0.12]">
              <div className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-5 leading-none">
                86%
              </div>
              <p className="text-sm leading-relaxed text-neutral-400">
                of Singapore marketers say they struggle to respond to customers promptly. Asia-Pacific: 71%.
                <sup className="text-xs text-neutral-500">2</sup>
              </p>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
