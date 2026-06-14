import Link from "next/link";
import {
  CheckCircle2,
  MessageCircle,
  Camera,
  ToggleRight,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

// ─── Step 1 Mockup: School Setup Wizard ──────────────────────────────
function SetupMockup() {
  const fields = [
    { label: "School name",         val: "Costa Surf Academy" },
    { label: "Location",            val: "Faro Beach, Portugal" },
    { label: "Capacity / session",  val: "8 students" },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
      {/* Fake browser bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 bg-slate-50">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="text-[10px] text-slate-400 ml-2 font-medium">
          School Setup · Step 1 of 3
        </span>
      </div>

      <div className="p-4 flex flex-col gap-3">
        {/* Progress bar */}
        <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full w-1/3 rounded-full"
            style={{ background: "linear-gradient(90deg, #0EA5E9, #06B6D4)" }}
          />
        </div>

        {/* Fields */}
        {fields.map((f) => (
          <div key={f.label}>
            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">
              {f.label}
            </p>
            <div className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
              <span className="text-[11px] text-slate-700 flex-1 font-medium">{f.val}</span>
              <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
            </div>
          </div>
        ))}

        {/* Continue button */}
        <div
          className="w-full py-2 rounded-lg text-white text-[11px] font-semibold text-center mt-1"
          style={{ background: "linear-gradient(135deg, #0EA5E9, #06B6D4)" }}
        >
          Continue →
        </div>
      </div>
    </div>
  );
}

// ─── Step 2 Mockup: Channel Connections ──────────────────────────────
const channels = [
  {
    Icon: MessageCircle,
    label: "WhatsApp Business",
    handle: "+351 912 345 678",
    c: "#25D366",
    bg: "#F0FDF4",
    border: "#BBF7D0",
  },
  {
    Icon: Camera,
    label: "Instagram DMs",
    handle: "@costasurfacademy",
    c: "#E1306C",
    bg: "#FFF1F2",
    border: "#FECDD3",
  },
];

function ChannelsMockup() {
  return (
    <div className="flex flex-col gap-2.5">
      {channels.map(({ Icon, label, handle, c, bg, border }) => (
        <div
          key={label}
          className="bg-white rounded-xl px-3.5 py-3 flex items-center gap-3 border"
          style={{ borderColor: border }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
            style={{ backgroundColor: bg }}
          >
            <Icon size={15} style={{ color: c }} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-semibold text-slate-700 leading-none">{label}</p>
            <p className="text-[9px] text-slate-400 mt-0.5">{handle}</p>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[9px] font-semibold text-emerald-600">Connected</span>
          </div>
        </div>
      ))}

      {/* AI toggle card */}
      <div className="bg-white rounded-xl border border-sky-100 px-3.5 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
          <ToggleRight size={15} className="text-sky-500" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-semibold text-slate-700 leading-none">AI Auto-reply</p>
          <p className="text-[9px] text-slate-400 mt-0.5">Answers 24/7 on all channels</p>
        </div>
        {/* Toggle pill */}
        <div
          className="relative w-8 h-4 rounded-full shrink-0"
          style={{ background: "linear-gradient(90deg, #0EA5E9, #06B6D4)" }}
        >
          <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-white shadow-sm" />
        </div>
      </div>
    </div>
  );
}

// ─── Step 3 Mockup: Growth Dashboard ─────────────────────────────────
const statCards = [
  { label: "Bookings", val: "24",   delta: "+4 today",  c: "#0EA5E9", bg: "#EFF6FF", border: "#BAE6FD" },
  { label: "Revenue",  val: "€1.8k", delta: "↑ 18%",   c: "#10B981", bg: "#F0FDF4", border: "#BBF7D0" },
  { label: "Messages", val: "47",   delta: "AI handled", c: "#8B5CF6", bg: "#F5F3FF", border: "#DDD6FE" },
];

const bars = [
  { d: "M", h: 42 }, { d: "T", h: 58 }, { d: "W", h: 50 },
  { d: "T", h: 70 }, { d: "F", h: 88 }, { d: "S", h: 100, peak: true }, { d: "S", h: 75 },
];

function GrowthMockup() {
  return (
    <div className="flex flex-col gap-2.5">
      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-2">
        {statCards.map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-2.5 border"
            style={{ backgroundColor: s.bg, borderColor: s.border }}
          >
            <p className="text-[15px] font-bold text-slate-800 leading-none">{s.val}</p>
            <p className="text-[8px] text-slate-400 mt-0.5">{s.label}</p>
            <p className="text-[8px] font-bold mt-1" style={{ color: s.c }}>{s.delta}</p>
          </div>
        ))}
      </div>

      {/* Mini bar chart */}
      <div className="bg-white rounded-xl border border-slate-100 p-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
            Weekly bookings
          </p>
          <div className="flex items-center gap-1 text-emerald-500">
            <TrendingUp size={10} />
            <span className="text-[9px] font-bold">+18%</span>
          </div>
        </div>
        <div className="flex items-end gap-1 h-12">
          {bars.map(({ d, h, peak }, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
              <div
                className="w-full rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: peak
                    ? "linear-gradient(180deg, #0EA5E9, #06B6D4)"
                    : "#E2E8F0",
                }}
              />
              <span className={`text-[7px] font-medium ${peak ? "text-sky-500" : "text-slate-400"}`}>
                {d}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Steps data ───────────────────────────────────────────────────────
const steps = [
  {
    n: "1.",
    title: "Set up your business",
    description:
      "Add your surf school or camp, configure your sessions, instructors, and equipment. Takes about 5 minutes.",
    cta: true,
    Mockup: SetupMockup,
  },
  {
    n: "2.",
    title: "Connect your channels",
    description:
      "Link your Instagram and WhatsApp. Toggle AI assistance on. Your unified inbox is ready immediately.",
    cta: false,
    Mockup: ChannelsMockup,
  },
  {
    n: "3.",
    title: "Watch your business grow",
    description:
      "Accept online bookings, automate customer support, and track revenue and occupancy from one dashboard.",
    cta: false,
    Mockup: GrowthMockup,
  },
];

// ─── Section ──────────────────────────────────────────────────────────
export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#F8FAFC] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-bold text-wave-blue uppercase tracking-widest mb-4">
            How It Works
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            <span className="text-slate-900">Easy to set up.</span>
            <br />
            <span className="text-slate-300">Ready from day one.</span>
          </h2>
        </div>

        {/* 3-column container */}
        <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {steps.map(({ n, title, description, cta, Mockup }) => (
              <div key={n} className="p-8 lg:p-10 flex flex-col">

                {/* Step number + title + desc */}
                <div>
                  <p className="text-sm font-bold text-wave-blue mb-1">{n}</p>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-[1.7]">{description}</p>

                  {cta && (
                    <Link
                      href="https://dashboard.waveclubs.com/signup"
                      className="btn-primary inline-flex items-center gap-2 mt-5 text-sm font-semibold text-white px-5 py-2.5 rounded-xl cursor-pointer"
                    >
                      Get started free
                      <ArrowRight size={15} />
                    </Link>
                  )}
                </div>

                {/* Illustration pushed to bottom */}
                <div className="mt-auto pt-10">
                  <Mockup />
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
