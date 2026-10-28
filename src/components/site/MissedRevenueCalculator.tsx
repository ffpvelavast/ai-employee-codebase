import { useState } from "react";
import { Reveal } from "./Reveal";

export default function MissedRevenueCalculator() {
  const [missedPerWeek, setMissedPerWeek] = useState(20);
  const [avgSaleValue, setAvgSaleValue] = useState(300);
  const [closeRate, setCloseRate] = useState(30);

  // Core Math
  const annualDeals = (missedPerWeek * 52) * (closeRate / 100);
  const annualLoss = annualDeals * avgSaleValue;
  const weeklyLoss = annualLoss / 52;
  const monthlyLoss = annualLoss / 12;

  // Currency Formatter
  const formatSGD = (val: number) => {
    return "S$" + Math.round(val).toLocaleString("en-US");
  };

  // Helper for slider track gradient fill
  const getSliderTrack = (val: number, min: number, max: number) => {
    const pct = ((val - min) / (max - min)) * 100;
    return `linear-gradient(to right, #e52e2e 0%, #e52e2e ${pct}%, #e7e5e4 ${pct}%, #e7e5e4 100%)`;
  };

  return (
    <section id="calculator" className="relative bg-[#111113] py-24 sm:py-32 text-white overflow-hidden">
      <div className="container-page relative grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 items-center">
        
        {/* LEFT COLUMN */}
        <div>
          <Reveal>
            <span className="text-xs font-extrabold tracking-[0.14em] uppercase text-[#e52e2e] block mb-5">
              REVENUE AT RISK
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
              Calculate your
              <span className="block font-serif font-normal italic text-neutral-100 mt-1">
                missed revenue.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-neutral-400 max-w-xl">
              Every missed call or unanswered message could be a customer who went elsewhere. Move the sliders to
              see what that costs you.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 font-serif italic text-2xl sm:text-3xl text-neutral-200 leading-snug">
              What if your business never missed that first moment?
            </p>
          </Reveal>
        </div>

        {/* RIGHT COLUMN (DUAL STACKED CARDS) */}
        <Reveal delay={160}>
          <div className="mx-auto w-full max-w-[500px] flex flex-col gap-4">
            
            {/* CARD 1: INPUT CONTROLS (LIGHT/WHITE) */}
            <div className="rounded-[24px] bg-white p-7 sm:p-8 text-neutral-900 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] flex flex-col gap-6">
              
              {/* Control 1: Missed enquiries */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-sm sm:text-base font-bold text-neutral-900">
                  <label htmlFor="react-missed-slider">Missed enquiries a week</label>
                  <span className="text-base font-bold text-neutral-900">{missedPerWeek}</span>
                </div>
                <div className="relative flex items-center h-5 w-full">
                  <input
                    id="react-missed-slider"
                    type="range"
                    min={1}
                    max={150}
                    step={1}
                    value={missedPerWeek}
                    onChange={(e) => setMissedPerWeek(Number(e.target.value))}
                    style={{ background: getSliderTrack(missedPerWeek, 1, 150) }}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer outline-none transition-all [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[3.5px] [&::-webkit-slider-thumb]:border-[#e52e2e] [&::-webkit-slider-thumb]:shadow-[0_2px_6px_rgba(229,46,46,0.35)]"
                  />
                </div>
              </div>

              {/* Control 2: Average sale value */}
              <div className="flex flex-col gap-2.5">
                <label htmlFor="react-avg-sale" className="text-sm sm:text-base font-bold text-neutral-900">
                  Average sale value
                </label>
                <div className="flex items-center h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 transition-all focus-within:border-[#e52e2e] focus-within:ring-2 focus-within:ring-[#e52e2e]/20">
                  <span className="font-bold text-neutral-500 mr-2 select-none">S$</span>
                  <input
                    id="react-avg-sale"
                    type="number"
                    min={1}
                    step={10}
                    value={avgSaleValue}
                    onChange={(e) => setAvgSaleValue(Math.max(1, Number(e.target.value)))}
                    className="w-full border-none bg-transparent font-bold text-base text-neutral-900 outline-none"
                  />
                </div>
              </div>

              {/* Control 3: Close rate */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-sm sm:text-base font-bold text-neutral-900">
                  <label htmlFor="react-close-slider">Close rate</label>
                  <span className="text-base font-bold text-neutral-900">{closeRate}%</span>
                </div>
                <div className="relative flex items-center h-5 w-full">
                  <input
                    id="react-close-slider"
                    type="range"
                    min={1}
                    max={100}
                    step={1}
                    value={closeRate}
                    onChange={(e) => setCloseRate(Number(e.target.value))}
                    style={{ background: getSliderTrack(closeRate, 1, 100) }}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer outline-none transition-all [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[3.5px] [&::-webkit-slider-thumb]:border-[#e52e2e] [&::-webkit-slider-thumb]:shadow-[0_2px_6px_rgba(229,46,46,0.35)]"
                  />
                </div>
              </div>

            </div>

            {/* CARD 2: RESULTS (DARK OBSIDIAN) */}
            <div className="rounded-[24px] bg-[#1a1a1d] border border-white/[0.07] p-7 sm:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
              <span className="text-[11px] font-extrabold tracking-[0.12em] uppercase text-[#e52e2e] block mb-2">
                AT RISK EACH YEAR
              </span>
              
              <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
                {formatSGD(annualLoss)}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#242429] border border-white/[0.05] p-3.5 sm:p-4">
                  <span className="text-xs text-neutral-400 block font-medium">A week</span>
                  <span className="text-lg sm:text-xl font-bold text-white block mt-1">
                    {formatSGD(weeklyLoss)}
                  </span>
                </div>
                <div className="rounded-xl bg-[#242429] border border-white/[0.05] p-3.5 sm:p-4">
                  <span className="text-xs text-neutral-400 block font-medium">A month</span>
                  <span className="text-lg sm:text-xl font-bold text-white block mt-1">
                    {formatSGD(monthlyLoss)}
                  </span>
                </div>
              </div>

              <p className="mt-5 text-[11.5px] leading-relaxed text-neutral-500">
                Estimate: missed enquiries × average sale × close rate, over 52 weeks.
              </p>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
