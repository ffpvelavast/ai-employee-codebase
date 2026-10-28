import { useState, useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { Reveal } from "./Reveal";

interface Message {
  sender: "user" | "bot";
  text: string;
}

interface Scenario {
  business: string;
  channel: string;
  status: string;
  messages: Message[];
}

const scenarios: Scenario[] = [
  {
    business: "Lumen Skin Clinic",
    channel: "WhatsApp · 11:42 pm",
    status: "Booked · replied in 2.8 s",
    messages: [
      { sender: "user", text: "Hi, first time here. Do you have a facial consultation this Saturday?" },
      { sender: "bot", text: "Welcome! Saturday has 11:30 am or 3:00 pm. A first consultation takes about 45 minutes. Which suits you?" },
      { sender: "user", text: "3pm please" },
      { sender: "bot", text: "All booked for Saturday at 3:00 pm with Dr. Claire! A confirmation has been sent to your WhatsApp." }
    ]
  },
  {
    business: "Apex Dental Studio",
    channel: "WhatsApp · 8:15 pm",
    status: "CHAS Qualified & Booked · replied in 1.9 s",
    messages: [
      { sender: "user", text: "Hey! Do you accept CHAS subsidy for wisdom tooth extraction?" },
      { sender: "bot", text: "Yes, we are full CHAS & Medisave accredited. Can we reserve a slot for you with Dr. Tan this Thursday?" },
      { sender: "user", text: "Thursday 4pm works best" },
      { sender: "bot", text: "Confirmed for Thursday 4:00 pm! We've prepared your file and sent your clinic pass." }
    ]
  },
  {
    business: "Prime Realty SG",
    channel: "WhatsApp · 10:28 pm",
    status: "Lead Qualified & Scheduled · replied in 2.1 s",
    messages: [
      { sender: "user", text: "Hi, is the 3-bed unit at Marina One still open for private viewing tomorrow?" },
      { sender: "bot", text: "Yes! Two exclusive slots remain: 2:00 pm and 5:30 pm. Would you like our senior specialist to meet you there?" },
      { sender: "user", text: "5:30 pm please" },
      { sender: "bot", text: "Confirmed! Viewing pass and Marcus's direct line have been dispatched to your WhatsApp." }
    ]
  },
  {
    business: "AutoPro Detailing",
    channel: "WhatsApp · 9:05 pm",
    status: "Inquiry Converted & Reserved · replied in 2.4 s",
    messages: [
      { sender: "user", text: "Hi, how much is full ceramic coating for a Mercedes C200?" },
      { sender: "bot", text: "Our 9H ceramic package is $488, including 3-stage paint correction and 3-year warranty. Can we book your car this Friday?" },
      { sender: "user", text: "Can I drop off Friday 9:00 am?" },
      { sender: "bot", text: "All set for Friday 9:00 am! Service Bay #2 is reserved for your vehicle." }
    ]
  },
  {
    business: "Nexus Legal Chambers",
    channel: "WhatsApp · 11:10 pm",
    status: "Urgent Briefing Secured · replied in 1.8 s",
    messages: [
      { sender: "user", text: "Urgent: I need legal advice regarding an employment contract dispute." },
      { sender: "bot", text: "Understood. Our commercial partner can hold a confidential 20-min briefing tomorrow at 9:00 am or 2:30 pm. Which fits?" },
      { sender: "user", text: "Tomorrow 9am please" },
      { sender: "bot", text: "Secured for 9:00 am. Confidential video link and NDA have been sent to your email." }
    ]
  }
];

export function Hero() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [progressPct, setProgressPct] = useState(0);
  const [statusText, setStatusText] = useState("AI Employee active · standby");
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const clearTimers = () => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  };

  const currentScenario = scenarios[currentScenarioIndex];

  useEffect(() => {
    clearTimers();
    setVisibleMessages([]);
    setIsTyping(false);
    setProgressPct(0);
    setStatusText("AI Employee active · standby");

    let accumulatedDelay = 350;
    const totalSteps = currentScenario.messages.length;

    currentScenario.messages.forEach((msg, mIndex) => {
      if (msg.sender === "bot") {
        const typingTimer = setTimeout(() => {
          setIsTyping(true);
        }, accumulatedDelay);
        timeoutsRef.current.push(typingTimer);
        accumulatedDelay += 900;
      }

      const msgTimer = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages((prev) => [...prev, msg]);
        const pct = Math.round(((mIndex + 1) / totalSteps) * 100);
        setProgressPct(pct);

        if (mIndex === totalSteps - 1) {
          setStatusText(currentScenario.status);
        }
      }, accumulatedDelay);
      timeoutsRef.current.push(msgTimer);

      accumulatedDelay += msg.sender === "user" ? 1100 : 1600;
    });

    const nextScenarioTimer = setTimeout(() => {
      setCurrentScenarioIndex((prev) => (prev + 1) % scenarios.length);
    }, accumulatedDelay + 3200);
    timeoutsRef.current.push(nextScenarioTimer);

    return () => clearTimers();
  }, [currentScenarioIndex]);

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#faf9f6]">
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        
        {/* LEFT COLUMN */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#e52e2e] uppercase tracking-wider mb-5">
              <span>—</span> AI EMPLOYEES FOR SINGAPORE BUSINESSES
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-[3.2rem] leading-[1.04] font-extrabold tracking-tight text-neutral-900 sm:text-[4.2rem]">
              Put AI<br />
              to work<br />
              for your<br />
              business.<br />
              <span className="text-[#e52e2e]">As soon as<br />possible.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              Your AI Employee answers WhatsApp, calls and website enquiries day and night, qualifies every customer and
              books the appointment. Your team steps in when a person should.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white shadow-sm">
                a
              </div>
              <div className="text-xs leading-snug text-neutral-700">
                <span className="font-bold text-neutral-900 block">
                  Designed, trained and managed by ASAP AI.
                </span>
                <span className="text-neutral-500">You don&apos;t need to learn AI.</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full bg-[#e52e2e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_20px_-4px_rgba(229,46,46,0.35)] transition-all hover:bg-[#d12222] hover:-translate-y-0.5"
              >
                Meet My AI Employee
              </a>
              <a
                href="#video"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-800 transition-all hover:bg-neutral-50 hover:-translate-y-0.5"
              >
                <Play className="h-3.5 w-3.5 fill-neutral-800 text-neutral-800" />
                Watch the 60-sec film
              </a>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-4 text-xs text-neutral-400">
              Free. Built from your own website in about a minute.
            </p>
          </Reveal>
        </div>

        {/* RIGHT COLUMN (TWO LAYERS) */}
        <Reveal delay={160}>
          <div className="relative mx-auto w-full max-w-[500px] pb-6">
            
            {/* LAYER 1: BOTTOM ART CARD */}
            <div className="relative aspect-square w-full min-h-[420px] rounded-[32px] overflow-hidden bg-gradient-to-br from-[#ffffff] via-[#f6f2ec] to-[#ece6dc] p-8 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.08)] border border-white/80 flex flex-col justify-between">
              
              {/* Glossy Sheen Overlay */}
              <div 
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.7)_0%,transparent_65%)]" 
              />

              {/* Typography Top-Left */}
              <div className="relative z-10 text-[11px] font-bold uppercase tracking-[0.12em] text-[#8b8175] leading-relaxed">
                <div>PEOPLE</div>
                <div>+ AI</div>
                <div>= A BRIGHTER</div>
                <div>TOMORROW</div>
              </div>

              {/* 3D Architectural Vector Graphic */}
              <div className="absolute right-0 bottom-0 w-[84%] h-[84%] pointer-events-none z-0">
                <svg className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(185,28,28,0.15)]" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="reactRedArch" x1="50%" y1="0%" x2="50%" y2="100%">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="60%" stopColor="#dc2626" />
                      <stop offset="100%" stopColor="#991b1b" />
                    </linearGradient>
                    <linearGradient id="reactRedInner" x1="50%" y1="0%" x2="50%" y2="100%">
                      <stop offset="0%" stopColor="#b91c1c" />
                      <stop offset="100%" stopColor="#580e0e" />
                    </linearGradient>
                    <radialGradient id="reactSphereGrad" cx="35%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#ff7b7b" />
                      <stop offset="35%" stopColor="#ef4444" />
                      <stop offset="75%" stopColor="#b91c1c" />
                      <stop offset="100%" stopColor="#670d0d" />
                    </radialGradient>
                    <linearGradient id="reactPedestalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f5f1eb" />
                      <stop offset="50%" stopColor="#e6dfd5" />
                      <stop offset="100%" stopColor="#d4cbbe" />
                    </linearGradient>
                    <linearGradient id="reactPillarGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="#d6cebf" />
                      <stop offset="40%" stopColor="#fdfbf9" />
                      <stop offset="85%" stopColor="#bfb5a3" />
                      <stop offset="100%" stopColor="#a49987" />
                    </linearGradient>
                    <filter id="reactSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#991b1b" floodOpacity="0.3" />
                    </filter>
                    <filter id="reactSphereShadow" x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="4" dy="16" stdDeviation="10" floodColor="#000000" floodOpacity="0.35" />
                    </filter>
                  </defs>

                  <path d="M120 330 L380 330 L380 390 L120 390 Z" fill="url(#reactPedestalGrad)" opacity="0.95" />
                  <path d="M140 310 L360 310 L360 330 L140 330 Z" fill="#ded5c6" />
                  <path d="M165 295 L335 295 L335 310 L165 310 Z" fill="#ece4d6" />
                  <rect x="225" y="195" width="50" height="100" rx="3" fill="url(#reactPillarGrad)" />
                  <path d="M140 300 V180 A110 110 0 0 1 360 180 V300 H320 V180 A70 70 0 0 0 180 180 V300 Z" fill="url(#reactRedArch)" filter="url(#reactSoftGlow)" />
                  <path d="M180 300 V180 A70 70 0 0 1 320 180 V300 Z" fill="url(#reactRedInner)" />
                  <rect x="235" y="270" width="70" height="30" rx="2" fill="#ece5d8" />
                  <circle cx="242" cy="188" r="26" fill="url(#reactSphereGrad)" filter="url(#reactSphereShadow)" />
                  <ellipse cx="234" cy="178" rx="7" ry="4" transform="rotate(-30 234 178)" fill="#ffffff" opacity="0.65" />
                </svg>
              </div>
            </div>

            {/* LAYER 2: UPPER FLOATING CONVERSATION CARD */}
            <div className="absolute -bottom-4 -left-6 w-[370px] max-w-[95%] rounded-3xl bg-white p-5 shadow-[0_25px_60px_-12px_rgba(17,24,39,0.22)] ring-1 ring-black/[0.04] z-10 transition-transform duration-300 hover:-translate-y-1">
              
              {/* Progress bars (Video/Story timeline) */}
              <div className="flex gap-1 mb-3.5 w-full">
                {scenarios.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentScenarioIndex(idx)}
                    className="flex-1 h-[3px] rounded-full bg-neutral-100 overflow-hidden relative cursor-pointer"
                  >
                    <div
                      className="absolute inset-y-0 left-0 bg-[#e52e2e] transition-all duration-150"
                      style={{
                        width:
                          idx < currentScenarioIndex
                            ? "100%"
                            : idx === currentScenarioIndex
                            ? `${progressPct}%`
                            : "0%"
                      }}
                    />
                  </button>
                ))}
              </div>

              {/* Chat Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-xs font-bold text-white">
                    a
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900 leading-tight">
                      {currentScenario.business}
                    </h4>
                    <p className="text-[11px] text-neutral-500">
                      {currentScenario.channel}
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold text-[#e52e2e] tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e52e2e] animate-pulse" />
                  LIVE
                </div>
              </div>

              {/* Message Feed */}
              <div className="flex flex-col gap-2.5 min-h-[160px] justify-start">
                {visibleMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`text-[13px] leading-snug px-3.5 py-2.5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 ${
                      msg.sender === "user"
                        ? "self-end bg-neutral-900 text-white rounded-[18px_18px_4px_18px] max-w-[82%]"
                        : "self-start bg-[#f4efe9] text-neutral-800 rounded-[18px_18px_18px_4px] max-w-[86%]"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="self-start inline-flex items-center gap-1 bg-[#f4efe9] px-3 py-2 rounded-2xl">
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 animate-bounce" />
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                )}
              </div>

              {/* Footer Status & Scenario Selector */}
              <div className="flex items-center justify-between pt-2.5 border-t border-neutral-100 mt-3 text-xs">
                <div className="flex items-center gap-1.5 text-neutral-600 font-medium text-[11.5px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e52e2e]" />
                  <span>{statusText}</span>
                </div>
                <div className="flex gap-1">
                  {scenarios.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentScenarioIndex(idx)}
                      className={`px-1.5 py-0.5 rounded text-[10px] font-semibold transition-colors ${
                        idx === currentScenarioIndex
                          ? "bg-red-50 text-[#e52e2e]"
                          : "text-neutral-400 hover:text-neutral-700"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
