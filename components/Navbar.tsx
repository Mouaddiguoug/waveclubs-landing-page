"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const dark = !scrolled;

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-5xl">

        {/* ── Pill bar ── */}
        <nav
          className="flex items-center justify-between h-14 px-5 rounded-2xl backdrop-blur-xl transition-all duration-300"
          style={{
            background: dark
              ? "rgba(255,255,255,0.07)"
              : "rgba(255,255,255,0.92)",
            border: dark
              ? "1px solid rgba(255,255,255,0.12)"
              : "1px solid rgba(0,0,0,0.08)",
            boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer shrink-0">
            <img
              src={dark ? "/images/logo.png" : "/images/logo-light.png"}
              alt="WaveClubs"
              width={130}
              height={32}
              className="h-7 w-auto object-contain transition-all duration-300"
              
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                  dark
                    ? "text-white/60 hover:text-white hover:bg-white/8"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <Link
              href="/download"
              className={`text-sm font-semibold px-4 py-2 rounded-xl cursor-pointer transition-colors duration-200 ${
                dark
                  ? "bg-white text-slate-900 hover:bg-white/90"
                  : "btn-primary text-white"
              }`}
            >
              Download Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-200 cursor-pointer ${
              dark
                ? "text-white/60 hover:text-white hover:bg-white/8"
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* ── Mobile dropdown ── */}
        {mobileOpen && (
          <div
            className="md:hidden mt-2 rounded-2xl backdrop-blur-xl px-4 py-3 flex flex-col gap-1"
            style={{
              background: dark ? "rgba(8,8,16,0.94)" : "rgba(255,255,255,0.96)",
              border: dark
                ? "1px solid rgba(255,255,255,0.1)"
                : "1px solid rgba(0,0,0,0.08)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium px-3 py-2.5 rounded-lg transition-all duration-200 cursor-pointer ${
                  dark
                    ? "text-white/65 hover:text-white hover:bg-white/8"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div
              className="flex flex-col gap-2 pt-3 mt-1 border-t"
              style={{
                borderColor: dark
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(0,0,0,0.06)",
              }}
            >
              <Link
                href="/download"
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-semibold px-4 py-2.5 rounded-xl text-center cursor-pointer transition-colors duration-200 ${
                  dark
                    ? "bg-white text-slate-900 hover:bg-white/90"
                    : "btn-primary text-white"
                }`}
              >
                Download Now
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
