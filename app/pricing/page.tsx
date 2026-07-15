"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Zap, Star, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const starterFeatures = [
  "Booking management",
  "Resource management",
  "Payment links, gift cards & point of sale",
  "Manual bookings",
];

const premiumExtras = [
  "Manage availability automatically across channels",
  "Extra onboarding support",
  "AI automation across communication channels",
  "Unified communication across multiple channels",
];

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes — every plan starts with a 15-day free trial, no credit card required. You get full access to all features so you can see WaveClubs working for your school before committing.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade from Starter to Premium at any time and the difference will be prorated. Downgrades take effect at the start of your next billing cycle.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards (Visa, Mastercard, American Express) through Stripe. Annual plans can also be paid by bank transfer — contact us to arrange.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from your account settings at any time. You keep access until the end of the period you paid for — no questions asked.",
  },
  {
    q: "Do you offer refunds?",
    a: "We don't offer prorated refunds for partial periods, but if you run into a problem in your first 30 days we'll work with you to make it right. Reach out to contact@waveclubs.com.",
  },
  {
    q: "Is onboarding included?",
    a: "Starter includes self-serve onboarding with full documentation and in-app guidance. Premium adds a dedicated onboarding session with a WaveClubs specialist to get your school fully set up.",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  const starterWhole = annual ? "63" : "79";
  const starterCents = ".99";
  const premiumWhole = annual ? "103" : "129";
  const premiumCents = ".99";
  const starterAnnual = annual ? (63.99 * 12).toFixed(2) : null;
  const premiumAnnual = annual ? (103.99 * 12).toFixed(2) : null;

  return (
    <>
      <Navbar />

      <div className="bg-black min-h-screen">

        {/* ── Hero ── */}
        <div className="relative overflow-hidden pt-32 pb-16 px-6 text-center">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(14,165,233,0.28) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-4">
              Pricing
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Simple pricing,{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #7DD3FC, #38BDF8, #0EA5E9, #06B6D4)",
                }}
              >
                no surprises.
              </span>
            </h1>
            <p className="text-white/45 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Start free for 15 days. Pick the plan that fits your school — upgrade or cancel anytime.
            </p>

            {/* Billing toggle */}
            <div className="inline-flex items-center gap-3">
              <span className={`text-sm font-medium transition-colors duration-200 ${!annual ? "text-white" : "text-white/38"}`}>
                Monthly
              </span>
              <button
                onClick={() => setAnnual(!annual)}
                aria-label="Toggle annual billing"
                className="relative w-12 h-6 rounded-full transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9]"
                style={{ background: annual ? "linear-gradient(90deg,#0EA5E9,#06B6D4)" : "rgba(255,255,255,0.14)" }}
              >
                <span
                  className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-300"
                  style={{ transform: annual ? "translateX(24px)" : "translateX(0)" }}
                />
              </button>
              <span className={`text-sm font-medium transition-colors duration-200 ${annual ? "text-white" : "text-white/38"}`}>
                Annual
              </span>
              {annual && (
                <span
                  className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(14,165,233,0.18)", color: "#38BDF8", border: "1px solid rgba(14,165,233,0.28)" }}
                >
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="max-w-5xl mx-auto px-6 pb-16">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">

            {/* ════════════════════════════════
                STARTER — white card
            ════════════════════════════════ */}
            <div
              className="rounded-[26px] p-8 flex flex-col"
              style={{
                background: "linear-gradient(160deg, #F0F8FF 0%, #FFFFFF 35%)",
                border: "1px solid #DDE8F0",
                boxShadow: "0 4px 32px rgba(14,165,233,0.07), 0 1px 3px rgba(0,0,0,0.06)",
              }}
            >
              {/* Plan header */}
              <div className="flex items-center justify-between mb-7">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "#F1F5F9", border: "1px solid #E2E8F0" }}
                  >
                    <Zap size={16} className="text-slate-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-display text-[15px] font-bold text-slate-900 leading-none">Starter</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">For growing schools</p>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mb-2">
                <div className="flex items-start">
                  <span className="font-display text-xl font-bold text-slate-400 mt-3.5 mr-0.5">$</span>
                  <span className="font-display text-[80px] font-extrabold text-slate-900 leading-none tracking-tight">
                    {starterWhole}
                  </span>
                  <div className="ml-1 mt-3.5">
                    <div className="font-display text-xl font-bold text-slate-400 leading-none">{starterCents}</div>
                    <div className="text-[11px] text-slate-400 font-medium mt-1">/ month</div>
                  </div>
                </div>
                {starterAnnual ? (
                  <p className="text-xs text-slate-400 mt-2">
                    Billed annually · <span className="font-semibold">${starterAnnual}/yr</span>
                  </p>
                ) : (
                  <p className="text-xs text-slate-400 mt-2">Billed monthly</p>
                )}
              </div>

              <p className="text-[13.5px] text-slate-500 leading-relaxed mb-7 mt-4">
                Everything you need to run your surf school — bookings, resources, and payments in one place.
              </p>

              {/* CTA */}
              <Link
                href="/download"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 cursor-pointer mb-8 hover:opacity-90"
                style={{ background: "#0F172A" }}
              >
                Download now
                <ArrowRight size={15} />
              </Link>

              {/* Features */}
              <div className="border-t border-slate-100 pt-7 flex-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.12em] mb-5">
                  What&apos;s included
                </p>
                <ul className="flex flex-col gap-3.5">
                  {starterFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: "#EFF6FF", border: "1px solid #DBEAFE" }}
                      >
                        <Check size={10} className="text-blue-500" strokeWidth={3} />
                      </span>
                      <span className="text-[13.5px] text-slate-600 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ════════════════════════════════
                PREMIUM — gradient border card
            ════════════════════════════════ */}
            <div
              className="rounded-[27px] p-[1.5px] flex"
              style={{
                background: "linear-gradient(145deg, rgba(56,189,248,0.9) 0%, rgba(14,165,233,0.7) 30%, rgba(6,182,212,0.8) 60%, rgba(56,189,248,0.6) 100%)",
                boxShadow: "0 0 50px rgba(14,165,233,0.22), 0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              <div
                className="rounded-[26px] p-8 flex flex-col w-full relative overflow-hidden"
                style={{ background: "linear-gradient(160deg, #060E1E 0%, #030A14 100%)" }}
              >
                {/* Aurora top glow */}
                <div
                  aria-hidden
                  className="absolute top-0 left-0 right-0 pointer-events-none"
                  style={{
                    height: "180px",
                    background: "radial-gradient(ellipse 110% 100% at 50% -10%, rgba(14,165,233,0.30) 0%, rgba(6,182,212,0.10) 50%, transparent 75%)",
                  }}
                />

                {/* Decorative orb bottom-right */}
                <div
                  aria-hidden
                  className="absolute bottom-0 right-0 pointer-events-none"
                  style={{
                    width: "280px",
                    height: "280px",
                    background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 65%)",
                    transform: "translate(30%, 30%)",
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">

                  {/* Plan header */}
                  <div className="flex items-center justify-between mb-7">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{ background: "rgba(14,165,233,0.18)", border: "1px solid rgba(14,165,233,0.30)" }}
                      >
                        <Sparkles size={16} style={{ color: "#38BDF8" }} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-display text-[15px] font-bold text-white leading-none">Premium</p>
                        <p className="text-[11px] text-white/38 mt-0.5">For scaling schools</p>
                      </div>
                    </div>
                    <span
                      className="flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1.5 rounded-full"
                      style={{ background: "rgba(14,165,233,0.18)", border: "1px solid rgba(56,189,248,0.35)", color: "#7DD3FC" }}
                    >
                      <Star size={9} className="fill-[#7DD3FC]" strokeWidth={0} />
                      Most popular
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-2">
                    <div className="flex items-start">
                      <span className="font-display text-xl font-bold text-white/40 mt-3.5 mr-0.5">$</span>
                      <span className="font-display text-[80px] font-extrabold text-white leading-none tracking-tight">
                        {premiumWhole}
                      </span>
                      <div className="ml-1 mt-3.5">
                        <div className="font-display text-xl font-bold text-white/40 leading-none">{premiumCents}</div>
                        <div className="text-[11px] text-white/38 font-medium mt-1">/ month</div>
                      </div>
                    </div>
                    {premiumAnnual ? (
                      <p className="text-xs text-white/30 mt-2">
                        Billed annually · <span className="font-semibold text-white/45">${premiumAnnual}/yr</span>
                      </p>
                    ) : (
                      <p className="text-xs text-white/30 mt-2">Billed monthly</p>
                    )}
                  </div>

                  <p className="text-[13.5px] text-white/45 leading-relaxed mb-7 mt-4">
                    Unlock AI automation, multi-channel communication, and dedicated support to scale your school.
                  </p>

                  {/* CTA */}
                  <Link
                    href="/download"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 cursor-pointer mb-8 hover:brightness-110"
                    style={{
                      background: "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)",
                      boxShadow: "0 4px 24px rgba(14,165,233,0.40), 0 1px 0 rgba(255,255,255,0.15) inset",
                    }}
                  >
                    Download now
                    <ArrowRight size={15} />
                  </Link>

                  {/* Features */}
                  <div className="flex-1" style={{ borderTop: "1px solid rgba(14,165,233,0.18)", paddingTop: "1.75rem" }}>
                    {/* Inherited starter features */}
                    <p className="text-[10px] font-bold text-white/25 uppercase tracking-[0.12em] mb-4">
                      Everything in Starter
                    </p>
                    <ul className="flex flex-col gap-3 mb-5">
                      {starterFeatures.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                          >
                            <Check size={10} className="text-white/40" strokeWidth={3} />
                          </span>
                          <span className="text-[13.5px] text-white/40 leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Premium divider */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(14,165,233,0.4), rgba(14,165,233,0.08))" }} />
                      <span className="text-[10px] font-bold text-[#38BDF8]/60 uppercase tracking-[0.12em] whitespace-nowrap">
                        Plus
                      </span>
                      <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(14,165,233,0.08), rgba(14,165,233,0.4))" }} />
                    </div>

                    {/* Premium-only features */}
                    <ul className="flex flex-col gap-3.5">
                      {premiumExtras.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{ background: "rgba(14,165,233,0.20)", border: "1px solid rgba(14,165,233,0.35)" }}
                          >
                            <Check size={10} style={{ color: "#38BDF8" }} strokeWidth={3} />
                          </span>
                          <span className="text-[13.5px] text-white/80 leading-snug font-medium">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 mt-10 text-sm text-white/28">
            {["15-day free trial", "No credit card required", "Cancel anytime", "Setup in 5 minutes"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <Check size={13} className="text-white/30" strokeWidth={2} />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="max-w-3xl mx-auto px-6 pb-24">
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-white/28 mb-3">FAQ</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Common questions</h2>
          </div>
          <div className="flex flex-col" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {faqs.map((faq) => (
              <div key={faq.q} className="py-7" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <h3 className="font-display text-base font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-[14px] text-white/42 leading-[1.8]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div
          className="relative overflow-hidden mx-6 mb-6 rounded-3xl px-8 py-16 text-center"
          style={{
            background: "linear-gradient(160deg, #0B1828 0%, #060D18 100%)",
            border: "1px solid rgba(14,165,233,0.18)",
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(14,165,233,0.18) 0%, transparent 70%)" }}
          />
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-white/42 text-base leading-relaxed mb-8">
              Talk to the team — we&apos;re happy to walk you through the platform and help you pick the right plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/download"
                className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-7 py-3.5 rounded-xl cursor-pointer hover:bg-white/90 transition-colors duration-200"
              >
                Download now
                <ArrowRight size={17} />
              </Link>
              <Link
                href="https://calendly.com/digougmouad/30min"
                className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-xl text-white/65 hover:text-white transition-all duration-200 cursor-pointer"
                style={{ border: "1px solid rgba(255,255,255,0.13)", background: "rgba(255,255,255,0.05)" }}
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}
