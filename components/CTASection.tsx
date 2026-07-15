import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const perks = [
  "15-day money-back guarantee",
  "Free setup & onboarding",
  "Cancel anytime",
];

export default function CTASection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-black">
      {/* Dot grid texture — matches hero / footer */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.032] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Subtle blue radial glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-90 opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #0EA5E9 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-5">
          Ready to ride the wave?
        </h2>
        <p className="text-lg text-white/60 leading-[1.7] mb-10">
          Join surf schools and camps that have replaced the chaos with one
          platform. Start your free trial today — cancel within 15 days for a full refund.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/download"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-8 py-4 rounded-xl cursor-pointer hover:bg-white/90 transition-colors duration-200 text-base"
          >
            Download now
            <ArrowRight size={18} />
          </Link>
          <Link
            href="https://calendly.com/digougmouad/30min"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 cursor-pointer backdrop-blur-sm text-base"
          >
            Book a demo
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {perks.map((perk) => (
            <div key={perk} className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-wave-blue" />
              <span className="text-sm text-white/50">{perk}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
