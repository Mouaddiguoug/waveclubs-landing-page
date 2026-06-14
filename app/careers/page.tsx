import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, MapPin, Clock, Globe, Heart, Zap,
  Users, TrendingUp, Coffee, Laptop,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — WaveClubs",
  description:
    "Join the team building the operating system for surf schools and surf camps worldwide.",
};

const values = [
  {
    icon: Heart,
    title: "Built from lived experience",
    body: "Every person on this team has spent real time in or around surf schools. We build for operators we understand — not operators we imagine.",
  },
  {
    icon: Zap,
    title: "Ship fast, learn faster",
    body: "We move quickly and put things in the hands of real users as soon as they're ready. Iteration beats perfection every time.",
  },
  {
    icon: Users,
    title: "Small team, real ownership",
    body: "You won't be a cog in a machine. Everyone owns a domain and makes decisions that ship. Your work is visible from day one.",
  },
];

const benefits = [
  { icon: Globe,     label: "Fully remote",          body: "Work from anywhere. We care about the output, not the office." },
  { icon: Laptop,    label: "Equipment budget",       body: "€1,000 to set up the workspace you need to do your best work." },
  { icon: TrendingUp, label: "Early equity",          body: "Meaningful equity in a company that's growing fast in a global market." },
  { icon: Coffee,    label: "Flexible hours",         body: "No fixed schedule beyond overlap hours. Own your time, deliver your work." },
  { icon: Heart,     label: "Health coverage",        body: "Full health insurance for you and your family, wherever you're based." },
  { icon: Zap,       label: "Learning budget",        body: "€500/year for courses, books, and conferences that make you better at what you do." },
];

const roles = [
  {
    title: "Full-Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Own the core platform — booking engine, availability sync, communication infrastructure. We use Next.js, Node.js, and PostgreSQL. You'll ship features used by surf schools across 12 countries.",
  },
  {
    title: "Growth & Marketing Lead",
    department: "Growth",
    location: "Remote",
    type: "Full-time",
    description:
      "Build the playbook for acquiring and retaining surf school operators at scale. You'll own the full funnel — content, paid, partnerships, and community — and report directly to the founders.",
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
    description:
      "Help surf school operators get the most out of WaveClubs from day one. You'll own onboarding, handle escalations, and feed operator insights directly into the product roadmap.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* ════════════════════════════════
            HERO
        ════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{ height: "clamp(520px, 85svh, 860px)", minHeight: "520px" }}
        >
          <Image
            src="/images/apple-bg-3.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />

          {/* Bottom-up gradient — text legibility */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.62) 28%, rgba(0,0,0,0.22) 55%, rgba(0,0,0,0.06) 80%, transparent 100%)",
            }}
          />
          {/* Left vignette */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to right, rgba(0,0,0,0.32) 0%, transparent 55%)",
            }}
          />

          {/* Text — pinned bottom-left */}
          <div className="absolute bottom-0 left-0 z-10 px-6 md:px-14 pb-10 md:pb-16">
            <span
              className="inline-block text-[11px] font-bold uppercase tracking-[0.16em] px-3 py-1.5 rounded-full mb-5"
              style={{
                background: "rgba(14,165,233,0.22)",
                color: "#7DD3FC",
                border: "1px solid rgba(56,189,248,0.30)",
              }}
            >
              Careers
            </span>
            <h1 className="font-display text-[36px] leading-[1.06] md:text-6xl lg:text-[70px] font-bold text-white tracking-tight max-w-65 md:max-w-none">
              Help us build the future<br className="hidden md:block" /> of surf operations.
            </h1>

            {/* Stats strip */}
            <div className="flex items-center gap-8 mt-8">
              {[
                { n: "3", label: "Team members" },
                { n: "12", label: "Countries" },
                { n: "200+", label: "Customers" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-extrabold text-white leading-none mb-0.5">
                    {s.n}
                  </p>
                  <p className="text-[11px] text-white/45 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            WHY WAVECLUBS
        ════════════════════════════════ */}
        <section className="px-6 py-20 md:py-28 border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p
                className="text-[11px] font-bold uppercase tracking-widest mb-4"
                style={{ color: "#0EA5E9" }}
              >
                Why WaveClubs
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 leading-[1.12] mb-4">
                A different kind of company.
              </h2>
              <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
                We&apos;re a small, focused team solving a real problem in an industry
                most software companies ignore. That&apos;s the opportunity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {values.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl p-7 flex flex-col gap-4"
                  style={{ border: "1px solid #E8EDF2" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.15)" }}
                  >
                    <Icon size={18} style={{ color: "#0EA5E9" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900 mb-2">{title}</h3>
                    <p className="text-[15px] text-slate-500 leading-[1.75]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            BENEFITS
        ════════════════════════════════ */}
        <section className="px-6 py-20 md:py-28" style={{ background: "#FAFAFA" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p
                className="text-[11px] font-bold uppercase tracking-widest mb-4"
                style={{ color: "#0EA5E9" }}
              >
                Benefits
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 leading-[1.12]">
                What we offer.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map(({ icon: Icon, label, body }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-6 flex gap-4"
                  style={{ border: "1px solid #E8EDF2" }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.15)" }}
                  >
                    <Icon size={16} style={{ color: "#0EA5E9" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900 mb-1.5">{label}</h3>
                    <p className="text-[14px] text-slate-500 leading-[1.7]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            OPEN ROLES
        ════════════════════════════════ */}
        <section className="px-6 py-20 md:py-28 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <p
                className="text-[11px] font-bold uppercase tracking-widest mb-4"
                style={{ color: "#0EA5E9" }}
              >
                Open Roles
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 leading-[1.12]">
                Join the team.
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {roles.map((role) => (
                <div
                  key={role.title}
                  className="rounded-2xl p-7 flex flex-col md:flex-row md:items-start gap-5"
                  style={{ border: "1px solid #E8EDF2" }}
                >
                  {/* Left */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          background: "rgba(14,165,233,0.08)",
                          color: "#0284C7",
                          border: "1px solid rgba(14,165,233,0.15)",
                        }}
                      >
                        {role.department}
                      </span>
                      <span className="flex items-center gap-1 text-[12px] text-slate-400">
                        <MapPin size={10} />
                        {role.location}
                      </span>
                      <span className="flex items-center gap-1 text-[12px] text-slate-400">
                        <Clock size={10} />
                        {role.type}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                      {role.title}
                    </h3>
                    <p className="text-[15px] text-slate-500 leading-[1.75]">
                      {role.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="shrink-0 md:pt-1">
                    <Link
                      href="mailto:contact@waveclubs.com"
                      className="btn-primary inline-flex items-center gap-2 font-semibold text-sm text-white px-5 py-3 rounded-xl cursor-pointer whitespace-nowrap"
                    >
                      Apply now
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            OPEN APPLICATION CTA
        ════════════════════════════════ */}
        <section className="bg-[#040D18] px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-widest mb-5"
              style={{ color: "#38BDF8" }}
            >
              Don&apos;t see your role?
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-[1.12] mb-5">
              We always want to meet{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg, #38BDF8, #06B6D4)" }}
              >
                exceptional people.
              </span>
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.8] mb-10 max-w-xl mx-auto">
              If you think you&apos;d make WaveClubs better and you don&apos;t see a role
              that fits, send us a note anyway. We read every message.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="mailto:contact@waveclubs.com"
                className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold text-sm px-7 py-3.5 rounded-xl cursor-pointer hover:bg-white/90 transition-colors duration-200"
              >
                Send an open application
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-medium text-sm text-white/60 hover:text-white px-6 py-3.5 rounded-xl cursor-pointer transition-colors duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}
              >
                Learn about the team
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
