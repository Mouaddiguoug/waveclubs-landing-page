import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  Calendar,
  Users,
  MessageSquare,
  BarChart3,
  Package,
} from "lucide-react";

const floatingCards = [
  {
    icon: Calendar,
    color: "#0EA5E9",
    bg: "rgba(14,165,233,0.13)",
    border: "rgba(14,165,233,0.25)",
    label: "Bookings",
    cls: "top-[26%] left-[5%]",
    // enters from right (center) → left position, then floats
    anim: "card-in-from-right 0.85s ease-out 0.30s both, float-a 6s ease-in-out infinite 1.15s",
  },
  {
    icon: Users,
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.13)",
    border: "rgba(6,182,212,0.25)",
    label: "Instructors",
    cls: "top-[54%] left-[3.5%]",
    anim: "card-in-from-right 0.85s ease-out 0.50s both, float-b 7.5s ease-in-out infinite 1.35s",
  },
  {
    icon: MessageSquare,
    color: "#38BDF8",
    bg: "rgba(56,189,248,0.12)",
    border: "rgba(56,189,248,0.22)",
    label: "Messaging",
    cls: "top-[20%] right-[6%]",
    // enters from left (center) → right position, then floats
    anim: "card-in-from-left 0.85s ease-out 0.38s both, float-c 6.5s ease-in-out infinite 1.23s",
  },
  {
    icon: BarChart3,
    color: "#0EA5E9",
    bg: "rgba(14,165,233,0.13)",
    border: "rgba(14,165,233,0.22)",
    label: "Analytics",
    cls: "top-[53%] right-[4%]",
    anim: "card-in-from-left 0.85s ease-out 0.55s both, float-d 8s ease-in-out infinite 1.40s",
  },
  {
    icon: Package,
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.2)",
    label: "Equipment",
    cls: "top-[37%] right-[1.5%]",
    anim: "card-in-from-left 0.85s ease-out 0.45s both, float-e 7s ease-in-out infinite 1.30s",
  },
];

const avatars = [
  { initials: "JR", style: { background: "linear-gradient(135deg,#0EA5E9,#06B6D4)" } },
  { initials: "ML", style: { background: "linear-gradient(135deg,#0284C7,#0EA5E9)" } },
  { initials: "AP", style: { background: "linear-gradient(135deg,#06B6D4,#0891B2)" } },
  { initials: "SK", style: { background: "linear-gradient(135deg,#0369A1,#06B6D4)" } },
];

export default function Hero() {
  return (
    <section className="relative bg-black overflow-hidden">

      {/* ── Bottom radial glow — Nexio-inspired ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 82% at 50% 105%, rgba(14,165,233,0.90) 0%, rgba(6,182,212,0.58) 16%, rgba(14,165,233,0.28) 36%, rgba(14,165,233,0.10) 56%, rgba(14,165,233,0.03) 74%, transparent 90%)",
        }}
      />

      {/* ── Concentric ring decorations ── */}
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 top-[8%] pointer-events-none"
      >
        <svg
          width="1100"
          height="1100"
          viewBox="0 0 1100 1100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-[0.065]"
        >
          <circle cx="550" cy="550" r="200" stroke="#0EA5E9" strokeWidth="1" />
          <circle cx="550" cy="550" r="320" stroke="#06B6D4" strokeWidth="0.8" />
          <circle cx="550" cy="550" r="440" stroke="#0EA5E9" strokeWidth="0.65" />
          <circle cx="550" cy="550" r="560" stroke="#06B6D4" strokeWidth="0.5" />
        </svg>
      </div>

      {/* ── Floating icon cards (desktop only) ── */}
      {floatingCards.map(({ icon: Icon, color, bg, border, label, cls, anim }) => (
        <div
          key={label}
          aria-hidden
          className={`absolute hidden xl:flex ${cls} w-14 h-14 rounded-2xl items-center justify-center backdrop-blur-md pointer-events-none z-10`}
          style={{
            background: bg,
            border: `1px solid ${border}`,
            animation: anim,
          }}
        >
          <Icon size={22} color={color} />
        </div>
      ))}

      {/* ── Main content ── */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 pt-32 pb-0">

        {/* Social proof */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
          style={{ animation: "hero-text-in 0.7s ease-out 0.10s both" }}
        >
          <div className="flex">
            {avatars.map((a, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full border-2 border-black ${i > 0 ? "-ml-2.5" : ""} flex items-center justify-center text-[10px] font-bold text-white`}
                style={a.style}
              >
                {a.initials}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={12} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm text-white/45 font-medium">
            200+ surf schools
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-[80px] font-bold text-white leading-[1.04] tracking-tight mb-6 max-w-4xl"
          style={{ animation: "hero-text-in 0.75s ease-out 0.22s both" }}
        >
          Run your surf school
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #7DD3FC, #38BDF8, #0EA5E9, #06B6D4, #0284C7, #38BDF8, #7DD3FC)",
              backgroundSize: "250% auto",
              animation: "gradient-flow 5s ease infinite",
            }}
          >
            smarter, not harder.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-white/48 leading-[1.7] max-w-2xl mb-10"
          style={{ animation: "hero-text-in 0.70s ease-out 0.38s both" }}
        >
          Replace WhatsApp threads, spreadsheets, and scattered booking systems
          with one platform that handles bookings, instructors, equipment, and
          guest communication.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6"
          style={{ animation: "hero-text-in 0.65s ease-out 0.52s both" }}
        >
          <Link
            href="/download"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-7 py-3.5 rounded-xl cursor-pointer hover:bg-white/90 transition-colors duration-200"
          >
            Download now
            <ArrowRight size={18} />
          </Link>
          <Link
            href="https://calendly.com/digougmouad/30min"
            className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-xl text-white/70 hover:text-white transition-all duration-200 cursor-pointer backdrop-blur-sm hover:bg-white/8"
            style={{
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            Book a demo
          </Link>
        </div>

        {/* Micro trust */}
        <div
          className="flex flex-wrap justify-center items-center gap-x-5 gap-y-1 mb-14 text-xs text-white/28"
          style={{ animation: "hero-text-in 0.60s ease-out 0.62s both" }}
        >
          <span>15 days free trial</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Setup in 5 minutes</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Cancel anytime</span>
        </div>

        {/* Dashboard screenshot */}
        <div
          className="relative w-full max-w-5xl mx-auto"
          style={{ animation: "hero-img-in 1s ease-out 0.65s both" }}
        >
          {/* Full-border frame — matches Nexio reference */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.16)",
              background: "rgba(8,12,28,0.9)",
              boxShadow:
                "0 0 0 1px rgba(14,165,233,0.08), 0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(14,165,233,0.12)",
            }}
          >
            <Image
              src="/images/dashboard-organizations.png"
              alt="WaveClubs organizations dashboard"
              width={1400}
              height={860}
              className="w-full h-auto block"
              priority
            />
          </div>

          {/* Bottom fade to blend into next section */}
          <div
            aria-hidden
            className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #000000 0%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
