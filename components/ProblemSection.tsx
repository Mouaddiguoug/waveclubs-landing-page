"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const logos = [
  { src: "/images/whatsapp-logo.png",    alt: "WhatsApp",    ix: 4,  iy: 20, size: 76, rot: -6, badge: 47 },
  { src: "/images/instagram-logo.png",   alt: "Instagram",   ix: 73, iy: 17, size: 72, rot:  5, badge: 12 },
  { src: "/images/tripadvisor-logo.png", alt: "Tripadvisor", ix: 4,  iy: 54, size: 74, rot: -3, badge:  3 },
  { src: "/images/viator-logo.png",      alt: "Viator",      ix: 75, iy: 56, size: 78, rot:  7, badge:  8 },
];

const notifCards = [
  { dot: "#25D366", app: "WhatsApp",        name: "Maria Santos",   msg: "Hi! Can we book 4 spots for Saturday morning?",      time: "2m ago",  unread: 3, ix: 13, iy: 44, rot: -2 },
  { dot: "#E1306C", app: "Instagram DM",    name: "surfer_jake_pt", msg: "What time does the beginner lesson start?",           time: "8m ago",  unread: 1, ix: 62, iy: 40, rot:  3 },
  { dot: "#FF6B35", app: "Booking conflict",name: "Schedule alert", msg: "Double booking at 14:00 — 2 groups, same slot",      time: "15m ago", unread: 0, ix: 15, iy: 65, rot: -3 },
];

const pills = [
  { label: "Google Calendar", dot: "#4285F4", ix: 36, iy: 12, rot:  2 },
  { label: "Spreadsheets",    dot: "#0F9D58", ix: 10, iy: 78, rot: -4 },
  { label: "Manual Payments", dot: "#6772E5", ix: 63, iy: 79, rot:  3 },
];

function easeOut(t: number) { return 1 - Math.pow(1 - t, 3); }
function clamp(v: number, lo = 0, hi = 1) { return Math.max(lo, Math.min(hi, v)); }
function phase(p: number, s: number, e: number) { return easeOut(clamp((p - s) / (e - s))); }

const dotGrid = {
  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
  backgroundSize: "36px 36px",
  opacity: 0.03,
} as const;

const glassCard = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
} as const;

export default function ProblemSection() {
  const wrapperRef   = useRef<HTMLDivElement>(null);
  const logoRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const notifRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const pillRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const heroTextRef  = useRef<HTMLDivElement>(null);
  const bgRef        = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const captionRef   = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const totalScrollable = wrapperRef.current.offsetHeight - window.innerHeight;
      // Guard: exits on mobile (display:none → offsetHeight 0) and when not in view
      if (totalScrollable <= 0) return;

      const progress = clamp(-rect.top / totalScrollable);

      if (prefersReduced) {
        if (dashboardRef.current) dashboardRef.current.style.opacity = "1";
        if (heroTextRef.current)  heroTextRef.current.style.opacity  = "0";
        return;
      }

      const W = wrapperRef.current.offsetWidth;
      const H = window.innerHeight;

      if (heroTextRef.current) {
        const t = phase(progress, 0.15, 0.32);
        heroTextRef.current.style.opacity   = String(1 - t);
        heroTextRef.current.style.transform = `translateY(${-t * 24}px)`;
      }

      const allElems: { ref: HTMLDivElement | null; ix: number; iy: number; size: number; rot: number }[] = [
        ...logos.map((l, i)      => ({ ref: logoRefs.current[i],  ix: l.ix, iy: l.iy, size: l.size, rot: l.rot })),
        ...notifCards.map((n, i) => ({ ref: notifRefs.current[i], ix: n.ix, iy: n.iy, size: 220,    rot: n.rot })),
        ...pills.map((p, i)      => ({ ref: pillRefs.current[i],  ix: p.ix, iy: p.iy, size: 44,     rot: p.rot })),
      ];

      allElems.forEach(({ ref, ix, iy, size, rot }) => {
        if (!ref) return;
        const t        = phase(progress, 0.30, 0.68);
        const dx       = (W / 2 - (ix / 100) * W - size / 2) * t;
        const dy       = (H / 2 - (iy / 100) * H - size / 2) * t;
        const scale    = 1 - 0.55 * t;
        const opacity  = t > 0.65 ? clamp(1 - (t - 0.65) / 0.35) : 1;
        ref.style.transform = `translate(${dx}px, ${dy}px) scale(${scale}) rotate(${rot * (1 - t)}deg)`;
        ref.style.opacity   = String(opacity);
      });

      if (bgRef.current)
        bgRef.current.style.opacity = String(phase(progress, 0.55, 0.82));

      if (dashboardRef.current) {
        const t = phase(progress, 0.62, 0.88);
        dashboardRef.current.style.opacity   = String(t);
        dashboardRef.current.style.transform = `translateY(${(1 - t) * 36}px) scale(${0.90 + 0.20 * t})`;
      }

      if (captionRef.current)
        captionRef.current.style.opacity = String(phase(progress, 0.88, 1.0));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── DESKTOP: sticky scroll animation ──────────────────────────── */}
      <div className="hidden md:block">
        <div ref={wrapperRef} style={{ height: "280vh" }}>
          <div className="sticky top-0 h-screen overflow-hidden bg-black">

            <div aria-hidden className="absolute inset-0 pointer-events-none" style={dotGrid} />
            <div aria-hidden className="absolute inset-0 pointer-events-none" style={{
              background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(14,165,233,0.08) 0%, transparent 70%)",
            }} />

            {/* Apple BG */}
            <div ref={bgRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0, willChange: "opacity", zIndex: 5 }}>
              <div className="absolute inset-0" style={{ backgroundImage: "url('/images/apple-bg-2.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
              <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.58)" }} />
            </div>

            {/* Hero text */}
            <div ref={heroTextRef} className="absolute inset-x-0 top-[18%] text-center z-10 px-6" style={{ willChange: "opacity, transform" }}>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/35 mb-5">The Problem</p>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.06]">
                Too many apps.<br /><span className="text-white/35">Not enough time.</span>
              </h2>
              <p className="mt-5 text-white/30 text-lg max-w-md mx-auto leading-relaxed">
                Running a surf school shouldn&apos;t require 7 different tools.
              </p>
            </div>

            {/* Logo cards */}
            {logos.map((logo, i) => (
              <div key={logo.alt} ref={(el) => { logoRefs.current[i] = el; }} className="absolute"
                style={{ left: `${logo.ix}%`, top: `${logo.iy}%`, width: logo.size, height: logo.size, transform: `rotate(${logo.rot}deg)`, willChange: "transform, opacity" }}>
                <div className="absolute -top-2 -right-2 min-w-5 h-5 rounded-full bg-red-500 flex items-center justify-center z-20 px-1.5" style={{ boxShadow: "0 0 0 2px #000" }}>
                  <span className="text-[9px] font-bold text-white leading-none">{logo.badge}</span>
                </div>
                <div className="w-full h-full rounded-2xl flex items-center justify-center p-3 backdrop-blur-sm" style={glassCard}>
                  <Image src={logo.src} alt={logo.alt} width={logo.size} height={logo.size} className="w-full h-full object-contain" />
                </div>
              </div>
            ))}

            {/* Notification cards */}
            {notifCards.map((card, i) => (
              <div key={card.app} ref={(el) => { notifRefs.current[i] = el; }} className="absolute w-56 rounded-2xl p-3.5 backdrop-blur-sm"
                style={{ left: `${card.ix}%`, top: `${card.iy}%`, transform: `rotate(${card.rot}deg)`, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", boxShadow: "0 8px 32px rgba(0,0,0,0.35)", zIndex: 2, willChange: "transform, opacity" }}>
                <div className="flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full mt-1 shrink-0" style={{ backgroundColor: card.dot }} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[11px] font-semibold text-white/75 truncate">{card.name}</span>
                      <span className="text-[10px] text-white/28 shrink-0">{card.time}</span>
                    </div>
                    <p className="text-[11px] text-white/42 leading-snug line-clamp-2">{card.msg}</p>
                  </div>
                  {card.unread > 0 && (
                    <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[8px] font-bold text-white">{card.unread}</span>
                    </div>
                  )}
                </div>
                <p className="mt-2 text-[10px] text-white/22 font-medium">{card.app}</p>
              </div>
            ))}

            {/* Pills */}
            {pills.map((pill, i) => (
              <div key={pill.label} ref={(el) => { pillRefs.current[i] = el; }} className="absolute flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-sm"
                style={{ left: `${pill.ix}%`, top: `${pill.iy}%`, transform: `rotate(${pill.rot}deg)`, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", boxShadow: "0 4px 16px rgba(0,0,0,0.3)", willChange: "transform, opacity" }}>
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: pill.dot }} />
                <span className="text-sm font-medium text-white/55 whitespace-nowrap">{pill.label}</span>
              </div>
            ))}

            {/* Dashboard */}
            <div ref={dashboardRef} className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8 z-20" style={{ opacity: 0, willChange: "transform, opacity" }}>
              <div className="w-full max-w-5xl rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 0 0 1px rgba(14,165,233,0.08), 0 40px 100px rgba(0,0,0,0.7), 0 0 80px rgba(14,165,233,0.14)" }}>
                <Image src="/images/dashboard-light.png" alt="WaveClubs dashboard" width={1400} height={860} className="w-full h-auto block" />
              </div>
              <p ref={captionRef} className="mt-5 text-sm text-white/35 font-medium" style={{ opacity: 0 }}>Everything in one platform.</p>
            </div>

          </div>
        </div>
      </div>

      {/* ── MOBILE: static layout ─────────────────────────────────────── */}
      <div className="md:hidden relative bg-black overflow-hidden py-20 px-5">

        <div aria-hidden className="absolute inset-0 pointer-events-none" style={dotGrid} />
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 90% 40% at 50% 100%, rgba(14,165,233,0.10) 0%, transparent 70%)",
        }} />

        <div className="relative z-10">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/35 mb-5 text-center">The Problem</p>
          <h2 className="font-display text-4xl font-bold text-white tracking-tight leading-[1.06] text-center mb-3">
            Too many apps.<br /><span className="text-white/35">Not enough time.</span>
          </h2>
          <p className="text-white/30 text-base text-center leading-relaxed mb-10">
            Running a surf school shouldn&apos;t require 7 different tools.
          </p>

          {/* Logo grid */}
          <div className="grid grid-cols-4 gap-3 mb-5">
            {logos.map((logo) => (
              <div key={logo.alt} className="relative aspect-square">
                <div className="absolute -top-2 -right-2 min-w-5 h-5 rounded-full bg-red-500 flex items-center justify-center z-10 px-1.5" style={{ boxShadow: "0 0 0 2px #000" }}>
                  <span className="text-[9px] font-bold text-white leading-none">{logo.badge}</span>
                </div>
                <div className="w-full h-full rounded-2xl flex items-center justify-center p-2.5" style={glassCard}>
                  <Image src={logo.src} alt={logo.alt} width={56} height={56} className="w-full h-full object-contain" />
                </div>
              </div>
            ))}
          </div>

          {/* Pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {pills.map((pill) => (
              <div key={pill.label} className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: pill.dot }} />
                <span className="text-xs font-medium text-white/50">{pill.label}</span>
              </div>
            ))}
          </div>

          {/* Sample notification card */}
          <div className="rounded-2xl p-4 mb-8" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", boxShadow: "0 8px 32px rgba(0,0,0,0.35)" }}>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: "#25D366" }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-semibold text-white/75">Maria Santos</span>
                  <span className="text-[10px] text-white/30">2m ago</span>
                </div>
                <p className="text-xs text-white/45 leading-snug">Hi! Can we book 4 spots for Saturday morning?</p>
              </div>
              <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                <span className="text-[8px] font-bold text-white">3</span>
              </div>
            </div>
            <p className="mt-2 text-[10px] text-white/22 font-medium">WhatsApp</p>
          </div>

          {/* Arrow divider */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex-1 h-px bg-white/8" />
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #0EA5E9, #06B6D4)" }}>
              <ArrowDown size={14} className="text-white" />
            </div>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          {/* Dashboard */}
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 0 0 1px rgba(14,165,233,0.08), 0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(14,165,233,0.12)" }}>
            <Image src="/images/dashboard-light.png" alt="WaveClubs dashboard" width={1400} height={860} className="w-full h-auto block" />
          </div>

          <p className="mt-5 text-sm text-white/35 font-medium text-center">Everything in one platform.</p>
        </div>
      </div>
    </>
  );
}
