import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { TrendingDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section, Eyebrow, Cta } from "./ui";

export default function MissedRevenueCalculator() {
  const [callsPerWeek, setCallsPerWeek] = useState(20);
  const [closeRate, setCloseRate] = useState(30);
  const [avgSaleValue, setAvgSaleValue] = useState(300);

  // Math
  const callsPerYear = callsPerWeek * 52;
  const missedDealsPerYear = callsPerYear * (closeRate / 100);
  const missedRevenuePerYear = missedDealsPerYear * avgSaleValue;
  
  const weeklyMissed = missedRevenuePerYear / 52;
  const monthlyMissed = missedRevenuePerYear / 12;

  // Formatting
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <Section id="calculator" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16 items-center">
        
        {/* Left: Text & CTA */}
        <div>
          <Reveal>
            <Eyebrow>Revenue leak</Eyebrow>
            <h2 className="mt-4 text-[2rem] leading-[1.08] font-bold text-navy sm:text-5xl">
              Calculate Your <span className="text-blue">Missed Revenue.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg max-w-xl">
              Every missed call could be a missed customer. See how much money is slipping through the cracks, and how an AI Employee can capture it.
            </p>
          </Reveal>
          
          <Reveal delay={100}>
            <div className="mt-10">
              <Cta href="#demo" size="lg">
                Stop Losing Money
              </Cta>
            </div>
          </Reveal>
        </div>

        {/* Right: Calculator Card */}
        <Reveal delay={150}>
          <div className="rounded-3xl border border-hairline bg-card p-6 shadow-soft sm:p-8">
            <div className="grid gap-10 md:grid-cols-2 md:gap-8">
              
              {/* Inputs */}
              <div className="space-y-8">
                {/* Calls Per Week */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold text-navy">Missed Calls / Week</label>
                    <div className="rounded-full bg-blue-soft px-3 py-1 text-xs font-semibold text-blue">
                      {callsPerWeek}
                    </div>
                  </div>
                  <Slider 
                    value={[callsPerWeek]} 
                    onValueChange={(val) => setCallsPerWeek(val[0])} 
                    max={300} 
                    step={1} 
                    className="py-2"
                  />
                  <div className="flex justify-between text-[0.7rem] font-medium text-muted-foreground">
                    <span>0</span>
                    <span>300</span>
                  </div>
                </div>

                {/* Average Sale Value */}
                <div className="space-y-4">
                  <label className="text-sm font-semibold text-navy">Average Sale Value</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-medium text-muted-foreground">$</span>
                    <Input 
                      type="number" 
                      value={avgSaleValue} 
                      onChange={(e) => setAvgSaleValue(Number(e.target.value) || 0)} 
                      className="h-11 rounded-xl pl-8 text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Close Rate */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold text-navy">Close Rate</label>
                    <div className="rounded-full bg-blue-soft px-3 py-1 text-xs font-semibold text-blue">
                      {closeRate}%
                    </div>
                  </div>
                  <Slider 
                    value={[closeRate]} 
                    onValueChange={(val) => setCloseRate(val[0])} 
                    max={100} 
                    min={1}
                    step={1} 
                    className="py-2"
                  />
                  <div className="flex justify-between text-[0.7rem] font-medium text-muted-foreground">
                    <span>1%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="flex flex-col items-center justify-center rounded-2xl bg-surface-2 p-6 text-center border border-hairline relative overflow-hidden">
                <div className="absolute left-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-red-50 text-red-500">
                  <TrendingDown className="h-4 w-4" />
                </div>
                
                <p className="mt-6 text-sm font-semibold text-navy">Lost to Competitors</p>
                <p className="mt-3 font-display text-4xl font-bold text-amber sm:text-5xl">
                  {formatCurrency(missedRevenuePerYear)}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">Per Year</p>

                <div className="mt-8 grid w-full grid-cols-2 gap-3">
                  <div className="rounded-xl border border-hairline bg-card p-3 shadow-sm">
                    <p className="mb-1 text-[0.65rem] font-semibold tracking-wider text-muted-foreground uppercase">Weekly</p>
                    <p className="text-lg font-bold text-navy">{formatCurrency(weeklyMissed)}</p>
                  </div>
                  <div className="rounded-xl border border-hairline bg-card p-3 shadow-sm">
                    <p className="mb-1 text-[0.65rem] font-semibold tracking-wider text-muted-foreground uppercase">Monthly</p>
                    <p className="text-lg font-bold text-navy">{formatCurrency(monthlyMissed)}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </Section>
  );
}
