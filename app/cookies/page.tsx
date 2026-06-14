import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy — WaveClubs",
  description:
    "Learn how WaveClubs uses cookies and similar technologies on our platform.",
};

const sections = [
  { id: "what-are-cookies", label: "What Are Cookies" },
  { id: "how-we-use",       label: "How We Use Cookies" },
  { id: "types",            label: "Types of Cookies We Use" },
  { id: "third-party",      label: "Third-Party Cookies" },
  { id: "managing",         label: "Managing Cookies" },
  { id: "do-not-track",     label: "Do Not Track" },
  { id: "changes",          label: "Changes to This Policy" },
  { id: "contact",          label: "Contact Us" },
];

const cookieTable = [
  {
    name: "session",
    type: "Essential",
    purpose: "Keeps you logged in while using the platform.",
    duration: "Session",
    provider: "WaveClubs",
  },
  {
    name: "csrf_token",
    type: "Essential",
    purpose: "Protects against cross-site request forgery attacks.",
    duration: "Session",
    provider: "WaveClubs",
  },
  {
    name: "remember_me",
    type: "Essential",
    purpose: "Remembers your login across browser restarts if you opt in.",
    duration: "30 days",
    provider: "WaveClubs",
  },
  {
    name: "__stripe_mid",
    type: "Essential",
    purpose: "Fraud detection and payment security.",
    duration: "1 year",
    provider: "Stripe",
  },
  {
    name: "__stripe_sid",
    type: "Essential",
    purpose: "Maintains your Stripe checkout session.",
    duration: "30 minutes",
    provider: "Stripe",
  },
  {
    name: "_wc_prefs",
    type: "Preferences",
    purpose: "Stores your dashboard layout and display preferences.",
    duration: "1 year",
    provider: "WaveClubs",
  },
  {
    name: "_wc_analytics",
    type: "Analytics",
    purpose: "Helps us understand which features are used most.",
    duration: "90 days",
    provider: "WaveClubs",
  },
];

export default function CookiesPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero header ── */}
      <div className="relative bg-black overflow-hidden pt-32 pb-16 px-6">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(14,165,233,0.22) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-4">
            Legal
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Cookie Policy
          </h1>
          <p className="text-white/45 text-base leading-relaxed max-w-xl">
            This policy explains what cookies are, which ones we use, and how
            you can control them.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <span className="text-xs text-white/25">Last updated</span>
            <span
              className="text-xs font-medium text-white/50 px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              June 13, 2026
            </span>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="bg-black min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex gap-16">

            {/* ── Sticky TOC — desktop ── */}
            <aside className="hidden lg:block w-52 shrink-0">
              <div className="sticky top-28">
                <p className="text-[10px] font-bold text-white/25 uppercase tracking-widest mb-4">
                  Contents
                </p>
                <nav className="flex flex-col gap-0.5">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="text-sm text-white/38 hover:text-white/75 py-1.5 px-2 rounded-lg transition-colors duration-200 cursor-pointer"
                    >
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* ── Content ── */}
            <article className="flex-1 min-w-0">

              <Section id="what-are-cookies" title="What Are Cookies">
                <P>
                  Cookies are small text files placed on your device by websites
                  and applications you visit. They are widely used to make
                  websites work efficiently, remember your preferences, and provide
                  information to site owners.
                </P>
                <P className="mt-4">
                  Similar technologies — such as local storage, session storage,
                  and pixel tags — work in comparable ways. When we refer to
                  &ldquo;cookies&rdquo; in this policy, we include all of these technologies.
                </P>
              </Section>

              <Section id="how-we-use" title="How We Use Cookies">
                <P>WaveClubs uses cookies to:</P>
                <ul className="list-none flex flex-col gap-2 mt-4">
                  {[
                    "Keep you securely authenticated while using the platform.",
                    "Protect against security threats such as cross-site request forgery (CSRF).",
                    "Remember your preferences and dashboard settings between sessions.",
                    "Understand how the platform is being used so we can improve it.",
                    "Ensure payment flows work correctly via Stripe.",
                  ].map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>
                <P className="mt-6">
                  We do not use cookies to serve advertising, track you across
                  unrelated third-party websites, or sell your data to any party.
                </P>
              </Section>

              <Section id="types" title="Types of Cookies We Use">
                <div className="flex flex-col gap-5 mb-8">
                  {[
                    {
                      type: "Essential",
                      color: "#0EA5E9",
                      desc: "Required for the platform to function. They enable core features like login, security, and payment processing. These cannot be disabled — without them the Service will not work.",
                    },
                    {
                      type: "Preferences",
                      color: "#06B6D4",
                      desc: "Remember choices you make, such as your dashboard layout or display language, so you don't have to set them every time you visit.",
                    },
                    {
                      type: "Analytics",
                      color: "#38BDF8",
                      desc: "Help us understand aggregate usage patterns — which features are popular, where users encounter friction, and how performance can be improved. No personally identifiable information is shared with analytics providers.",
                    },
                  ].map((c) => (
                    <div
                      key={c.type}
                      className="p-5 rounded-2xl"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ background: c.color }}
                        />
                        <span className="text-sm font-semibold text-white/80">
                          {c.type}
                        </span>
                      </div>
                      <p className="text-[14px] text-white/42 leading-[1.75]">
                        {c.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Cookie table */}
                <SubHeading>Cookie reference table</SubHeading>
                <div className="overflow-x-auto -mx-1">
                  <table className="w-full text-[13px] border-collapse min-w-[560px]">
                    <thead>
                      <tr
                        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                      >
                        {["Name", "Type", "Purpose", "Duration", "Provider"].map(
                          (h) => (
                            <th
                              key={h}
                              className="text-left text-[10px] font-bold text-white/28 uppercase tracking-widest pb-3 pr-5"
                            >
                              {h}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {cookieTable.map((row, i) => (
                        <tr
                          key={row.name}
                          style={{
                            borderBottom:
                              i < cookieTable.length - 1
                                ? "1px solid rgba(255,255,255,0.05)"
                                : "none",
                          }}
                        >
                          <td className="py-3 pr-5 font-mono text-[12px] text-[#38BDF8] whitespace-nowrap">
                            {row.name}
                          </td>
                          <td className="py-3 pr-5">
                            <TypeBadge type={row.type} />
                          </td>
                          <td className="py-3 pr-5 text-white/40 leading-relaxed">
                            {row.purpose}
                          </td>
                          <td className="py-3 pr-5 text-white/38 whitespace-nowrap">
                            {row.duration}
                          </td>
                          <td className="py-3 text-white/38 whitespace-nowrap">
                            {row.provider}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section id="third-party" title="Third-Party Cookies">
                <P>
                  Some cookies on the WaveClubs platform are set by third-party
                  services we use to operate the Service:
                </P>
                <div className="mt-5 flex flex-col gap-4">
                  {[
                    {
                      name: "Stripe",
                      url: "https://stripe.com/privacy",
                      desc: "Sets cookies for fraud detection and secure payment session management. These are essential and cannot be disabled if you wish to use payment features.",
                    },
                    {
                      name: "Vercel",
                      url: "https://vercel.com/legal/privacy-policy",
                      desc: "Our hosting provider may set performance cookies to deliver the platform efficiently via its edge network.",
                    },
                  ].map((p) => (
                    <div
                      key={p.name}
                      className="p-4 rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-sm font-semibold text-white/80">
                          {p.name}
                        </span>
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-[#38BDF8] hover:text-[#7DD3FC] transition-colors duration-200 cursor-pointer"
                        >
                          Privacy Policy ↗
                        </a>
                      </div>
                      <p className="text-[14px] text-white/40 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="managing" title="Managing Cookies">
                <P>
                  You can control and manage cookies in several ways:
                </P>

                <SubHeading>Browser settings</SubHeading>
                <P>
                  Most browsers allow you to refuse, delete, or be notified about
                  cookies through their settings. The steps vary by browser:
                </P>
                <ul className="list-none flex flex-col gap-2 mt-4">
                  {[
                    "Chrome — Settings → Privacy and security → Cookies and other site data",
                    "Safari — Settings → Privacy → Manage Website Data",
                    "Firefox — Settings → Privacy & Security → Cookies and Site Data",
                    "Edge — Settings → Cookies and site permissions → Cookies and site data",
                  ].map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>

                <SubHeading>Impact of disabling cookies</SubHeading>
                <P>
                  Disabling essential cookies will prevent you from logging in and
                  using the platform. Preference and analytics cookies can be
                  disabled without affecting core functionality, though some
                  settings may not be saved between sessions.
                </P>

                <div
                  className="mt-6 p-4 rounded-xl flex gap-3"
                  style={{
                    background: "rgba(14,165,233,0.07)",
                    border: "1px solid rgba(14,165,233,0.15)",
                  }}
                >
                  <div
                    className="w-1 rounded-full shrink-0 self-stretch"
                    style={{
                      background: "linear-gradient(180deg, #0EA5E9, #06B6D4)",
                    }}
                  />
                  <p className="text-[14px] text-white/45 leading-relaxed">
                    Essential cookies are strictly necessary and cannot be opted
                    out of while using the platform. They do not store any
                    personally identifiable information beyond what is required
                    for security and authentication.
                  </p>
                </div>
              </Section>

              <Section id="do-not-track" title="Do Not Track">
                <P>
                  Some browsers include a &ldquo;Do Not Track&rdquo; (DNT) signal that
                  requests that websites not track your browsing activity. Because
                  there is no agreed-upon standard for how to respond to DNT
                  signals, WaveClubs does not currently alter its data practices
                  in response to DNT signals.
                </P>
                <P className="mt-4">
                  You can manage our analytics cookies directly through your
                  browser settings as described above.
                </P>
              </Section>

              <Section id="changes" title="Changes to This Policy">
                <P>
                  We may update this Cookie Policy as we add new features or as
                  laws and regulations change. When we make material updates, we
                  will revise the &ldquo;Last updated&rdquo; date at the top of this page and,
                  where appropriate, notify you via email or an in-platform notice.
                </P>
                <P className="mt-4">
                  We encourage you to review this page periodically to stay
                  informed about how we use cookies.
                </P>
              </Section>

              <Section id="contact" title="Contact Us">
                <P>
                  Questions about our use of cookies? Get in touch:
                </P>
                <div
                  className="mt-5 p-5 rounded-2xl flex flex-col gap-2"
                  style={{
                    background: "rgba(14,165,233,0.07)",
                    border: "1px solid rgba(14,165,233,0.15)",
                  }}
                >
                  <span className="font-display font-semibold text-white text-base">
                    WaveClubs
                  </span>
                  <a
                    href="mailto:privacy@waveclubs.com"
                    className="text-sm text-[#38BDF8] hover:text-[#7DD3FC] transition-colors duration-200 cursor-pointer"
                  >
                    privacy@waveclubs.com
                  </a>
                  <span className="text-sm text-white/40">
                    We aim to respond to all enquiries within 2 business days.
                  </span>
                </div>
              </Section>

              {/* Bottom nav */}
              <div
                className="mt-16 pt-8 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center border-t"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <Link
                  href="/"
                  className="text-sm text-white/38 hover:text-white/70 transition-colors duration-200 cursor-pointer"
                >
                  ← Back to WaveClubs
                </Link>
                <div className="flex gap-5">
                  <Link
                    href="/privacy"
                    className="text-sm text-white/38 hover:text-white/70 transition-colors duration-200 cursor-pointer"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="text-sm text-white/38 hover:text-white/70 transition-colors duration-200 cursor-pointer"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>

            </article>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

/* ── Reusable sub-components ── */

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-14 scroll-mt-28">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-0.5 h-6 rounded-full shrink-0"
          style={{ background: "linear-gradient(180deg, #0EA5E9, #06B6D4)" }}
        />
        <h2 className="font-display text-xl md:text-2xl font-bold text-white">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-semibold text-white/65 uppercase tracking-wider mb-3 mt-6">
      {children}
    </h3>
  );
}

function P({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-[15px] text-white/45 leading-[1.8] ${className}`}>
      {children}
    </p>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[15px] text-white/45 leading-[1.75]">
      <span
        className="mt-[9px] w-1.5 h-1.5 rounded-full shrink-0"
        style={{ background: "#0EA5E9" }}
      />
      {children}
    </li>
  );
}

function TypeBadge({ type }: { type: string }) {
  const colors: Record<string, { bg: string; text: string }> = {
    Essential:   { bg: "rgba(14,165,233,0.15)",  text: "#38BDF8" },
    Preferences: { bg: "rgba(6,182,212,0.15)",   text: "#22D3EE" },
    Analytics:   { bg: "rgba(56,189,248,0.12)",  text: "#7DD3FC" },
  };
  const c = colors[type] ?? { bg: "rgba(255,255,255,0.08)", text: "rgba(255,255,255,0.5)" };
  return (
    <span
      className="text-[11px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
      style={{ background: c.bg, color: c.text }}
    >
      {type}
    </span>
  );
}
