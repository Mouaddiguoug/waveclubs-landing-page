"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Plus, Minus, MapPin,
  Calendar, Users, Package, MessageSquare, BarChart3, Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ecosystem = [
  {
    icon: Calendar,
    title: "Booking Management",
    body: "Real-time booking engine with availability sync, conflict detection, and automated confirmations.",
  },
  {
    icon: Users,
    title: "Instructor Scheduling",
    body: "Assign instructors to sessions based on certifications, availability, and skill level.",
  },
  {
    icon: Package,
    title: "Equipment Tracking",
    body: "Full inventory management — boards, wetsuits, and accessories tracked per session.",
  },
  {
    icon: MessageSquare,
    title: "Guest Communication",
    body: "Unified inbox for WhatsApp, Instagram, and email. No more switching between apps.",
  },
  {
    icon: Zap,
    title: "AI Automation",
    body: "AI handles routine guest questions, sends reminders, and flags issues before they escalate.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    body: "Revenue dashboards, instructor performance, occupancy rates, and booking trends in one view.",
  },
];

const team = [
  {
    name: "Mouad Diguoug",
    role: "Co-founder & Engineer",
    location: "Agadir, Morocco",
    bg: "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)",
    initials: "MD",
    bio: "Built WaveClubs from the ground up. Engineers the platform and makes sure every feature ships fast and works reliably in the hands of real operators.",
    tags: ["Engineering", "Product Strategy"],
  },
  {
    name: "Achraf Lazraque",
    role: "Co-founder & Co-CEO",
    location: "Agadir, Morocco",
    bg: "linear-gradient(135deg, #0284C7 0%, #0EA5E9 100%)",
    initials: "AL",
    bio: "Former surf club manager who lived through the chaos of managing bookings on WhatsApp and paper. Co-founded WaveClubs to replace the tools he wished existed.",
    tags: ["Surf Operations", "Business Development"],
  },
  {
    name: "Inasse Boulguid",
    role: "Head of Product",
    location: "Morocco",
    bg: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)",
    initials: "IB",
    bio: "Shapes every product decision around the real needs of surf school operators. Keeps the team honest about what matters and what's just noise.",
    tags: ["Product Design", "Operator Research"],
  },
];

const origins = [
  { label: "Surf Operations", color: "#0EA5E9" },
  { label: "Software Engineering", color: "#06B6D4" },
  { label: "Product Design", color: "#38BDF8" },
  { label: "Hospitality & Tourism", color: "#0284C7" },
  { label: "Agadir, Morocco", color: "#0EA5E9" },
  { label: "Lagos, Portugal", color: "#06B6D4" },
  { label: "Ericeira, Portugal", color: "#38BDF8" },
];

const approach = [
  {
    step: "01",
    title: "Talk to operators first",
    body: "Every feature starts with a conversation — not a roadmap meeting. We spend more time in surf schools than we do in offices.",
  },
  {
    step: "02",
    title: "Identify the core problem",
    body: "We don't build features, we solve problems. If we can't name the exact friction a feature removes, we don't ship it.",
  },
  {
    step: "03",
    title: "Ship fast and iterate",
    body: "We'd rather put something real in your hands and improve it than spend months perfecting something you haven't seen.",
  },
];

const faqs = [
  {
    q: "Is WaveClubs built specifically for surf schools?",
    a: "Yes — entirely. We don't adapt generic software for the surf industry. WaveClubs was designed from day one around the workflows, terminology, and seasonal patterns of surf schools and surf camps.",
  },
  {
    q: "Who do you typically work with?",
    a: "Independent surf schools, multi-location surf camps, surf resorts, and experience businesses. Our customers range from a 2-instructor operation on the Algarve to a 50-staff camp in Morocco.",
  },
  {
    q: "Can I migrate my existing bookings into WaveClubs?",
    a: "Yes. Our team handles data migration for you at no extra cost. We'll import your booking history, customer records, and instructor profiles during onboarding.",
  },
  {
    q: "Do you offer support beyond the docs?",
    a: "Premium plan customers get a dedicated onboarding session and priority support. All customers can reach us via in-app chat and email — we respond within one business day.",
  },
  {
    q: "What makes WaveClubs different from a generic booking platform?",
    a: "Generic platforms handle bookings. WaveClubs handles your entire operation — instructor assignment, equipment allocation, tidal awareness, multi-channel communication, and AI automation. It's the difference between a booking form and a full operating system.",
  },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* ════════════════════════════════
            HERO — apple-bg-4 full bleed, text bottom-left, dashboard right half
        ════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{ height: "clamp(520px, 85svh, 860px)", minHeight: "520px" }}
        >
          {/* Background image */}
          <Image
            src="/images/apple-bg-4.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />

          {/* Bottom-up dark gradient — makes bottom text legible */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.60) 28%, rgba(0,0,0,0.22) 55%, rgba(0,0,0,0.06) 80%, transparent 100%)",
            }}
          />
          {/* Left-side vignette — keeps text area darker */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.28) 0%, transparent 50%)",
            }}
          />

          {/* Dashboard — right side, bleeds off-screen */}
          <div
            className="absolute bottom-0 hidden md:block"
            style={{
              right: "-5%",
              width: "54%",
              height: "86%",
              borderTopLeftRadius: "14px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRight: "none",
              borderBottom: "none",
              boxShadow: "-20px -12px 60px rgba(0,0,0,0.35)",
            }}
          >
            <Image
              src="/images/dashboard-light.png"
              alt="WaveClubs dashboard"
              fill
              className="object-cover object-top-left"
            />
            {/* Right edge fade — blends dashboard into nothing */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, transparent 40%, rgba(0,0,0,0.35) 75%, rgba(0,0,0,0.70) 100%)",
              }}
            />
            {/* Bottom edge fade — ties into page */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 35%)",
              }}
            />
          </div>

          {/* Text — pinned to bottom-left, flush to screen edge */}
          <div className="absolute bottom-0 left-0 z-10 px-6 md:px-14 pb-10 md:pb-16">
            <span
              className="inline-block text-[11px] font-bold uppercase tracking-[0.16em] px-3 py-1.5 rounded-full mb-5"
              style={{
                background: "rgba(14,165,233,0.22)",
                color: "#7DD3FC",
                border: "1px solid rgba(56,189,248,0.30)",
              }}
            >
              Our Story
            </span>
            <h1 className="font-display text-[36px] leading-[1.08] md:text-6xl lg:text-[70px] font-bold text-white tracking-tight max-w-65 md:max-w-none">
              The future of surf business{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #7DD3FC, #38BDF8, #06B6D4)",
                }}
              >
                management.
              </span>
            </h1>
          </div>
        </section>

        {/* ════════════════════════════════
            FROM CHAOS TO CLARITY
        ════════════════════════════════ */}
        <section className="border-t border-slate-100 px-6 py-20 md:py-28">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-center">

            {/* Left */}
            <div>
              <p
                className="text-[11px] font-bold uppercase tracking-widest mb-4"
                style={{ color: "#0EA5E9" }}
              >
                Our Story
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 leading-[1.15] mb-6">
                From WhatsApp threads{" "}
                <br className="hidden md:block" />
                to{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(90deg, #0EA5E9, #06B6D4)" }}
                >
                  unified operations.
                </span>
              </h2>
              <div className="flex flex-col gap-4 text-[15px] text-slate-500 leading-[1.85]">
                <p>
                  In 2019, Mouad was managing a surf school in Agadir with twelve
                  instructors, three equipment sheds, and a WhatsApp group that had
                  become the backbone of the entire operation.
                </p>
                <p>
                  Booking requests came in at midnight. Double bookings happened on
                  busy weekends. Instructors showed up to the wrong beach because
                  the spreadsheet hadn&apos;t been updated.
                </p>
                <p>
                  So in 2022, he teamed up with Achraf — the surf club manager
                  who had lived through the same chaos — and together they sat
                  down with fifteen surf school owners before writing a single
                  line of code.
                </p>
              </div>

              {/* Pull stat */}
              <div className="flex gap-8 mt-10 pt-10 border-t border-slate-100">
                {[
                  { n: "200+", label: "Surf schools" },
                  { n: "12", label: "Countries" },
                  { n: "2022", label: "Founded" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-3xl font-extrabold text-slate-900 leading-none mb-1">
                      {s.n}
                    </p>
                    <p className="text-xs text-slate-400 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — platform ecosystem mockup */}
            <div className="relative">
                <img src="images/our-story.png" alt="" />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            PLATFORM ECOSYSTEM
        ════════════════════════════════ */}
        <section className="px-6 py-20 md:py-28" style={{ background: "#FAFAFA" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                WaveClubs{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(90deg, #0EA5E9, #06B6D4)" }}
                >
                  Ecosystem
                </span>
              </h2>
              <p className="text-base text-slate-500 max-w-lg mx-auto leading-relaxed">
                Six integrated capabilities. One platform. Zero switching.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ecosystem.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-6 flex flex-col gap-4"
                  style={{ border: "1px solid #E8EDF2" }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.15)" }}
                  >
                    <Icon size={16} style={{ color: "#0EA5E9" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900 mb-1.5">{title}</h3>
                    <p className="text-[15px] text-slate-500 leading-[1.75]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            TEAM
        ════════════════════════════════ */}
        <section className="px-6 py-20 md:py-28 border-t border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
                The Minds Behind WaveClubs
              </h2>
              <p className="text-base text-slate-500 mt-3 max-w-md mx-auto leading-relaxed">
                A small team with deep roots in surf culture and technology.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl overflow-hidden"
                  style={{ border: "1px solid #E8EDF2" }}
                >
                  {/* Card header with gradient */}
                  <div
                    className="h-40 flex items-end p-6"
                    style={{ background: member.bg }}
                  >
                    <span className="font-display text-5xl font-extrabold text-white/25 leading-none select-none">
                      {member.initials}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-6 bg-white">
                    <p className="font-display text-[16px] font-bold text-slate-900 leading-none mb-0.5">
                      {member.name}
                    </p>
                    <p className="text-[13px] font-semibold text-slate-400 mb-3">{member.role}</p>
                    <p className="text-[15px] text-slate-500 leading-[1.75] mb-5">{member.bio}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                          style={{
                            background: "rgba(14,165,233,0.08)",
                            color: "#0284C7",
                            border: "1px solid rgba(14,165,233,0.15)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <MapPin size={11} className="text-slate-300" />
                      <span className="text-[11px] text-slate-400">{member.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            MULTIDISCIPLINARY ORIGINS
        ════════════════════════════════ */}
        <section className="px-6 py-20 md:py-28" style={{ background: "#FAFAFA" }}>
          <div className="max-w-2xl mx-auto text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-widest mb-4"
              style={{ color: "#0EA5E9" }}
            >
              Multidisciplinary Origins
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 leading-[1.12] mb-6">
              Built at the intersection of surf culture and technology.
            </h2>
            <p className="text-[15px] text-slate-500 leading-[1.85] mb-10">
              Our team combines years in the water with years in software
              engineering. That combination is what makes WaveClubs work — we
              don&apos;t need operators to explain what they need, because we&apos;ve
              lived it ourselves.
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {origins.map((o) => (
                <span
                  key={o.label}
                  className="text-[12px] font-semibold px-3.5 py-2 rounded-full"
                  style={{
                    background: "white",
                    border: `1px solid ${o.color}30`,
                    color: o.color,
                  }}
                >
                  {o.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            HOW WE BUILD — dark section
        ════════════════════════════════ */}
        <section className="bg-[#040D18] px-6 py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
              <div className="md:sticky md:top-28">
                <p
                  className="text-[11px] font-bold uppercase tracking-widest mb-4"
                  style={{ color: "#38BDF8" }}
                >
                  How We Build
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-[1.12]">
                  How We{" "}
                  <span
                    className="text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(90deg, #38BDF8, #06B6D4)" }}
                  >
                    Engineer
                  </span>{" "}
                  the Platform
                </h2>
              </div>

              <div className="flex flex-col gap-0 divide-y" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                {approach.map((item) => (
                  <div key={item.step} className="py-8 first:pt-0 last:pb-0">
                    <div className="flex gap-6 items-start">
                      <span
                        className="font-display text-xs font-bold shrink-0 mt-1"
                        style={{ color: "#38BDF8" }}
                      >
                        {item.step}
                      </span>
                      <div>
                        <h3 className="font-display text-[17px] font-bold text-white mb-2.5">
                          {item.title}
                        </h3>
                        <p className="text-[15px] text-white/55 leading-[1.8]">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            FAQ
        ════════════════════════════════ */}
        <section className="px-6 py-20 md:py-28 border-t border-slate-100">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-14 items-start">
            <div className="md:sticky md:top-28">
              <p
                className="text-[11px] font-bold uppercase tracking-widest mb-3"
                style={{ color: "#0EA5E9" }}
              >
                FAQ
              </p>
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-4 leading-tight">
                Answers to Your Top Questions
              </h2>
              <Link
                href="mailto:contact@waveclubs.com"
                className="inline-flex items-center gap-2 text-sm font-semibold mt-2 cursor-pointer transition-colors duration-200"
                style={{ color: "#0EA5E9" }}
              >
                Contact us
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="flex flex-col divide-y border-t border-slate-100">
              {faqs.map((faq, i) => (
                <div key={faq.q} className="border-slate-100">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-display text-base font-semibold text-slate-900 leading-snug group-hover:text-wave-blue transition-colors duration-200">
                      {faq.q}
                    </span>
                    <span className="shrink-0 mt-0.5" style={{ color: openFaq === i ? "#0EA5E9" : "#94A3B8" }}>
                      {openFaq === i
                        ? <Minus size={16} strokeWidth={2} />
                        : <Plus size={16} strokeWidth={2} />
                      }
                    </span>
                  </button>
                  {openFaq === i && (
                    <p className="text-[15px] text-slate-500 leading-[1.8] pb-5">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            START YOUR JOURNEY CTA
        ════════════════════════════════ */}
        <section className="px-6 pb-16 border-t border-slate-100">
          <div className="max-w-6xl mx-auto pt-20 grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] mb-5">
                Start Your Journey{" "}
                <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(90deg, #0EA5E9, #06B6D4)" }}
                >
                  with WaveClubs
                </span>
              </h2>
              <p className="text-[15px] text-slate-500 leading-relaxed max-w-md mb-8">
                Join 200+ surf schools already running their operations on WaveClubs.
                15 days free, no card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/download"
                  className="btn-primary inline-flex items-center justify-center gap-2 font-semibold text-sm text-white px-6 py-3.5 rounded-xl cursor-pointer"
                >
                  Download now
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="https://calendly.com/digougmouad/30min"
                  className="inline-flex items-center justify-center gap-2 font-medium text-sm text-slate-600 hover:text-slate-900 px-6 py-3.5 rounded-xl cursor-pointer transition-colors duration-200 border border-slate-200 hover:border-slate-300"
                >
                  Book a demo
                </Link>
              </div>
            </div>

            {/* Decorative accent visual */}
            <div className="relative h-64 md:h-72 hidden md:block">
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(14,165,233,0.18) 0%, rgba(6,182,212,0.10) 40%, transparent 70%)",
                  filter: "blur(32px)",
                }}
              />
              <div
                aria-hidden
                className="absolute pointer-events-none"
                style={{
                  width: "200px", height: "200px",
                  top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "radial-gradient(circle, rgba(56,189,248,0.22) 0%, transparent 65%)",
                  filter: "blur(24px)",
                }}
              />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
