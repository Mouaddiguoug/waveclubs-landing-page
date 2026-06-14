import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — WaveClubs",
  description:
    "Insights, guides, and operator stories for surf schools and surf camps running on WaveClubs.",
};

const categoryColor: Record<string, { bg: string; text: string; border: string }> = {
  Operations: {
    bg: "rgba(14,165,233,0.08)",
    text: "#0284C7",
    border: "rgba(14,165,233,0.18)",
  },
  AI: {
    bg: "rgba(6,182,212,0.08)",
    text: "#0891B2",
    border: "rgba(6,182,212,0.18)",
  },
  Management: {
    bg: "rgba(2,132,199,0.08)",
    text: "#0369A1",
    border: "rgba(2,132,199,0.18)",
  },
  Growth: {
    bg: "rgba(56,189,248,0.10)",
    text: "#0284C7",
    border: "rgba(56,189,248,0.20)",
  },
};

const featured = {
  category: "Operations",
  title: "How to Stop Losing Bookings to WhatsApp",
  excerpt:
    "Most surf schools start with WhatsApp as their booking channel. Here's why that's holding you back — and what the transition to a proper system actually looks like in practice.",
  author: "Mouad Diguoug",
  date: "Jun 10, 2026",
  readTime: "6 min read",
  accent: "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 55%, #0284C7 100%)",
};

const articles = [
  {
    category: "AI",
    title: "5 Ways AI Can Save Your Surf School 10 Hours a Week",
    excerpt:
      "From guest enquiries to session reminders, AI handles the routine so your team can focus on what matters.",
    author: "Mouad Diguoug",
    date: "Jun 5, 2026",
    readTime: "5 min read",
    accent: "linear-gradient(135deg, #0284C7 0%, #0EA5E9 100%)",
  },
  {
    category: "Management",
    title: "Equipment Tracking: Why Spreadsheets Are Costing You Money",
    excerpt:
      "Missing boards, double-booked wetsuits, lost deposits. Spreadsheets feel free until you calculate what errors actually cost.",
    author: "Achraf Lazraque",
    date: "May 28, 2026",
    readTime: "4 min read",
    accent: "linear-gradient(135deg, #06B6D4 0%, #38BDF8 100%)",
  },
  {
    category: "Growth",
    title: "How to Scale from 2 to 20 Instructors Without the Chaos",
    excerpt:
      "The systems that work for a two-person team collapse fast when you grow. Build the operational foundation before you need it.",
    author: "Inasse Boulguid",
    date: "May 20, 2026",
    readTime: "7 min read",
    accent: "linear-gradient(135deg, #0EA5E9 0%, #7DD3FC 100%)",
  },
  {
    category: "Operations",
    title: "The Complete Guide to Instructor Scheduling for Surf Schools",
    excerpt:
      "Certifications, availability, skill matching, and session conflicts — managing instructors is its own full-time job. It doesn't have to be.",
    author: "Mouad Diguoug",
    date: "May 12, 2026",
    readTime: "8 min read",
    accent: "linear-gradient(135deg, #0284C7 0%, #06B6D4 100%)",
  },
  {
    category: "AI",
    title: "Why Unified Communication Changes Everything for Surf Camps",
    excerpt:
      "WhatsApp, Instagram, email — your guests are everywhere. A unified inbox isn't a luxury anymore, it's the baseline.",
    author: "Achraf Lazraque",
    date: "May 5, 2026",
    readTime: "5 min read",
    accent: "linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%)",
  },
  {
    category: "Management",
    title: "Seasonal Revenue Planning for Surf Schools",
    excerpt:
      "Surf is a seasonal business. The schools that survive slow months are the ones that planned for them in the busy ones.",
    author: "Inasse Boulguid",
    date: "Apr 28, 2026",
    readTime: "6 min read",
    accent: "linear-gradient(135deg, #06B6D4 0%, #0284C7 100%)",
  },
];

function CategoryChip({ category }: { category: string }) {
  const c = categoryColor[category] ?? categoryColor.Operations;
  return (
    <span
      className="inline-block text-[11px] font-bold uppercase tracking-[0.10em] px-2.5 py-1 rounded-full"
      style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
    >
      {category}
    </span>
  );
}

function AuthorMeta({ author, date, readTime }: { author: string; date: string; readTime: string }) {
  return (
    <div className="flex items-center gap-3 text-[13px] text-slate-400">
      <span className="font-medium text-slate-500">{author}</span>
      <span className="w-px h-3 bg-slate-200" />
      <span>{date}</span>
      <span className="w-px h-3 bg-slate-200" />
      <span className="flex items-center gap-1">
        <Clock size={11} />
        {readTime}
      </span>
    </div>
  );
}

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* ════════════════════════════════
            HERO — editorial header
        ════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{ height: "clamp(320px, 45svh, 520px)", minHeight: "320px" }}
        >
          <Image
            src="/images/apple-bg-1.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.60) 30%, rgba(0,0,0,0.18) 60%, transparent 100%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to right, rgba(0,0,0,0.28) 0%, transparent 55%)" }}
          />

          <div className="absolute bottom-0 left-0 z-10 px-6 md:px-14 pb-10 md:pb-14">
            <span
              className="inline-block text-[11px] font-bold uppercase tracking-[0.16em] px-3 py-1.5 rounded-full mb-4"
              style={{
                background: "rgba(14,165,233,0.22)",
                color: "#7DD3FC",
                border: "1px solid rgba(56,189,248,0.30)",
              }}
            >
              Blog
            </span>
            <h1 className="font-display text-[34px] leading-[1.06] md:text-5xl lg:text-[62px] font-bold text-white tracking-tight max-w-65 md:max-w-none">
              Insights for surf school operators.
            </h1>
          </div>
        </section>

        {/* ════════════════════════════════
            FEATURED ARTICLE
        ════════════════════════════════ */}
        <section className="px-6 pt-16 pb-4 md:pt-20">
          <div className="max-w-6xl mx-auto">
            <p
              className="text-[11px] font-bold uppercase tracking-widest mb-8"
              style={{ color: "#0EA5E9" }}
            >
              Featured
            </p>

            <Link
              href="#"
              className="group grid md:grid-cols-[1fr_1.1fr] gap-8 rounded-3xl overflow-hidden cursor-pointer"
              style={{ border: "1px solid #E8EDF2" }}
            >
              {/* Visual */}
              <div
                className="relative min-h-[220px] md:min-h-[320px] flex items-end p-8 overflow-hidden"
                style={{ background: featured.accent }}
              >
                {/* Decorative wave lines */}
                <svg
                  aria-hidden
                  viewBox="0 0 400 320"
                  className="absolute inset-0 w-full h-full opacity-[0.18]"
                  preserveAspectRatio="xMidYMid slice"
                >
                  {[0, 40, 80, 120, 160].map((offset) => (
                    <path
                      key={offset}
                      d={`M-50 ${160 + offset} Q100 ${100 + offset} 200 ${160 + offset} T450 ${160 + offset}`}
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  ))}
                </svg>
                <span
                  className="relative font-display text-[80px] md:text-[110px] font-extrabold leading-none select-none"
                  style={{ color: "rgba(255,255,255,0.22)" }}
                >
                  01
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 md:p-10">
                <div className="mb-4">
                  <CategoryChip category={featured.category} />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 leading-[1.2] mb-4 group-hover:text-[#0EA5E9] transition-colors duration-200">
                  {featured.title}
                </h2>
                <p className="text-[15px] text-slate-500 leading-[1.75] mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <AuthorMeta author={featured.author} date={featured.date} readTime={featured.readTime} />
                  <ArrowUpRight
                    size={18}
                    className="text-slate-300 group-hover:text-[#0EA5E9] transition-colors duration-200 shrink-0"
                  />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ════════════════════════════════
            ARTICLE GRID
        ════════════════════════════════ */}
        <section className="px-6 py-14 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <p
                className="text-[11px] font-bold uppercase tracking-widest"
                style={{ color: "#0EA5E9" }}
              >
                Latest Articles
              </p>

              {/* Category chips */}
              <div className="hidden sm:flex items-center gap-2">
                {["Operations", "AI", "Management", "Growth"].map((cat) => {
                  const c = categoryColor[cat];
                  return (
                    <span
                      key={cat}
                      className="text-[11px] font-semibold px-3 py-1.5 rounded-full cursor-pointer transition-colors duration-200"
                      style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
                    >
                      {cat}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.map((article, i) => (
                <Link
                  key={article.title}
                  href="#"
                  className="group rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-shadow duration-200 hover:shadow-[0_8px_32px_rgba(14,165,233,0.10)]"
                  style={{ border: "1px solid #E8EDF2" }}
                >
                  {/* Thumbnail */}
                  <div
                    className="relative h-44 flex items-end p-6 overflow-hidden shrink-0"
                    style={{ background: article.accent }}
                  >
                    <svg
                      aria-hidden
                      viewBox="0 0 320 176"
                      className="absolute inset-0 w-full h-full opacity-[0.15]"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      {[0, 30, 60].map((offset) => (
                        <path
                          key={offset}
                          d={`M-20 ${88 + offset} Q80 ${58 + offset} 160 ${88 + offset} T340 ${88 + offset}`}
                          fill="none"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                      ))}
                    </svg>
                    <span
                      className="relative font-display text-6xl font-extrabold leading-none select-none"
                      style={{ color: "rgba(255,255,255,0.20)" }}
                    >
                      {String(i + 2).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <div className="mb-3">
                      <CategoryChip category={article.category} />
                    </div>
                    <h3 className="font-display text-base font-bold text-slate-900 leading-[1.35] mb-2.5 group-hover:text-[#0EA5E9] transition-colors duration-200 flex-1">
                      {article.title}
                    </h3>
                    <p className="text-[14px] text-slate-500 leading-[1.7] mb-5 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <AuthorMeta author={article.author} date={article.date} readTime={article.readTime} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            NEWSLETTER CTA — dark
        ════════════════════════════════ */}
        <section className="bg-[#040D18] px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-widest mb-5"
              style={{ color: "#38BDF8" }}
            >
              Stay in the loop
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-[1.12] mb-5">
              Operator insights,{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg, #38BDF8, #06B6D4)" }}
              >
                straight to your inbox.
              </span>
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.8] mb-10 max-w-lg mx-auto">
              One email every two weeks. No fluff — just practical guides and
              product updates for surf school operators.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="mailto:contact@waveclubs.com"
                className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold text-sm px-7 py-3.5 rounded-xl cursor-pointer hover:bg-white/90 transition-colors duration-200"
              >
                Subscribe via email
                <ArrowRight size={15} />
              </Link>
              <Link
                href="https://www.instagram.com/waveclubs/"
                className="inline-flex items-center gap-2 font-medium text-sm text-white/60 hover:text-white px-6 py-3.5 rounded-xl cursor-pointer transition-colors duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}
              >
                Follow on Instagram
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
