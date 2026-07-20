"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Monitor, Wifi, Bell, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const APP_VERSION = "0.1.0";

const WINDOWS_URL =
  "https://pub-1485b486529f4beb86121037e6e0a0a6.r2.dev/windows/WaveClubs%20Setup%200.1.0.exe";
const MACOS_URL =
  "https://pub-1485b486529f4beb86121037e6e0a0a6.r2.dev/macos/WaveClubs-0.1.0-arm64.dmg";

// ── Brand icons (Simple Icons paths) ──
function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

type Platform = "windows" | "mac";

const platforms: {
  id: Platform;
  name: string;
  requirement: string;
  fileInfo: string;
  url: string;
  Icon: typeof WindowsIcon;
}[] = [
  {
    id: "windows",
    name: "Windows",
    requirement: "Windows 10 or later · 64-bit",
    fileInfo: `WaveClubs Setup ${APP_VERSION}.exe`,
    url: WINDOWS_URL,
    Icon: WindowsIcon,
  },
  {
    id: "mac",
    name: "macOS",
    requirement: "macOS 12 or later · Apple Silicon",
    fileInfo: `WaveClubs-${APP_VERSION}-arm64.dmg`,
    url: MACOS_URL,
    Icon: AppleIcon,
  },
];

const perks = [
  {
    icon: Monitor,
    title: "Built for your desk",
    body: "A dedicated app for the front desk — no browser tabs, no lost windows. Your whole operation in one place.",
  },
  {
    icon: Bell,
    title: "Never miss a booking",
    body: "Native notifications for new bookings, messages, and schedule changes — even when the app is in the background.",
  },
  {
    icon: Wifi,
    title: "Fast and responsive",
    body: "Launches straight into your dashboard and stays snappy through the busiest check-in rushes.",
  },
  {
    icon: ShieldCheck,
    title: "Always up to date",
    body: "The app keeps itself current with automatic updates, so you always have the latest features and fixes.",
  },
];

export default function DownloadPage() {
  const [detected, setDetected] = useState<Platform | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("mac")) setDetected("mac");
    else if (ua.includes("win")) setDetected("windows");
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-black min-h-screen">

        {/* ── Hero ── */}
        <div className="relative overflow-hidden pt-32 pb-14 px-6 text-center">
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
              Download
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              WaveClubs,{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #7DD3FC, #38BDF8, #0EA5E9, #06B6D4)",
                }}
              >
                on your desktop.
              </span>
            </h1>
            <p className="text-white/45 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Run your surf school from a dedicated desktop app. Bookings,
              instructors, equipment, and guest messaging — one click away.
            </p>
          </div>
        </div>

        {/* ── Platform cards ── */}
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <div className="grid sm:grid-cols-2 gap-6 items-stretch">
            {platforms.map(({ id, name, requirement, fileInfo, url, Icon }) => {
              const primary = detected === null || detected === id;
              return (
                <div
                  key={id}
                  className="rounded-[26px] p-8 flex flex-col text-left relative overflow-hidden transition-all duration-300"
                  style={{
                    background: "linear-gradient(160deg, #060E1E 0%, #030A14 100%)",
                    border: primary
                      ? "1px solid rgba(14,165,233,0.45)"
                      : "1px solid rgba(255,255,255,0.10)",
                    boxShadow: primary
                      ? "0 0 40px rgba(14,165,233,0.16), 0 20px 60px rgba(0,0,0,0.5)"
                      : "0 20px 60px rgba(0,0,0,0.4)",
                  }}
                >
                  {/* Aurora top glow */}
                  <div
                    aria-hidden
                    className="absolute top-0 left-0 right-0 pointer-events-none"
                    style={{
                      height: "150px",
                      background: primary
                        ? "radial-gradient(ellipse 110% 100% at 50% -10%, rgba(14,165,233,0.26) 0%, transparent 75%)"
                        : "radial-gradient(ellipse 110% 100% at 50% -10%, rgba(14,165,233,0.10) 0%, transparent 75%)",
                    }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{
                          background: "rgba(14,165,233,0.14)",
                          border: "1px solid rgba(14,165,233,0.26)",
                        }}
                      >
                        <Icon className="w-5 h-5 text-[#7DD3FC]" />
                      </div>
                      <div>
                        <p className="font-display text-lg font-bold text-white leading-none">
                          {name}
                        </p>
                        <p className="text-[12px] text-white/38 mt-1">{requirement}</p>
                      </div>
                      {detected === id && (
                        <span
                          className="ml-auto text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                          style={{
                            background: "rgba(14,165,233,0.18)",
                            color: "#38BDF8",
                            border: "1px solid rgba(14,165,233,0.28)",
                          }}
                        >
                          Your device
                        </span>
                      )}
                    </div>

                    <a
                      href={url}
                      download
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 cursor-pointer hover:brightness-110 mt-auto"
                      style={
                        primary
                          ? {
                              background: "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)",
                              boxShadow:
                                "0 4px 24px rgba(14,165,233,0.40), 0 1px 0 rgba(255,255,255,0.15) inset",
                            }
                          : {
                              background: "rgba(255,255,255,0.08)",
                              border: "1px solid rgba(255,255,255,0.14)",
                            }
                      }
                    >
                      Download for {name}
                      <ArrowRight size={15} />
                    </a>
                    <p className="text-[11px] text-white/28 text-center mt-3">
                      {fileInfo} · v{APP_VERSION}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 mt-10 text-sm text-white/28">
            {["Free to download", "15-day free trial", "Automatic updates", "Setup in 5 minutes"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <Check size={13} className="text-white/30" strokeWidth={2} />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── App screenshot ── */}
        <div className="max-w-5xl mx-auto px-6 pb-20">
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
              alt="WaveClubs desktop app dashboard"
              width={1400}
              height={860}
              className="w-full h-auto block"
              priority
            />
          </div>
        </div>

        {/* ── Why desktop ── */}
        <div className="max-w-5xl mx-auto px-6 pb-24">
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-white/28 mb-3">
              Why the desktop app
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Made for the front desk
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {perks.map(({ icon: PerkIcon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-7"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(14,165,233,0.14)",
                    border: "1px solid rgba(14,165,233,0.24)",
                  }}
                >
                  <PerkIcon size={18} className="text-[#38BDF8]" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-base font-semibold text-white mb-2">
                  {title}
                </h3>
                <p className="text-[14px] text-white/42 leading-[1.8]">{body}</p>
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
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(14,165,233,0.18) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Questions before you install?
            </h2>
            <p className="text-white/42 text-base leading-relaxed mb-8">
              Talk to the team — we&apos;re happy to walk you through the app and
              help you get your school set up.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="https://calendly.com/digougmouad/30min"
                className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-7 py-3.5 rounded-xl cursor-pointer hover:bg-white/90 transition-colors duration-200"
              >
                Book a demo
                <ArrowRight size={17} />
              </Link>
              <Link
                href="mailto:contact@waveclubs.com"
                className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-xl text-white/65 hover:text-white transition-all duration-200 cursor-pointer"
                style={{
                  border: "1px solid rgba(255,255,255,0.13)",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}
