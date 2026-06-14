import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — WaveClubs",
  description:
    "Learn how WaveClubs collects, uses, and protects your personal data.",
};

const sections = [
  { id: "overview",       label: "Overview" },
  { id: "information",    label: "Information We Collect" },
  { id: "usage",          label: "How We Use Your Data" },
  { id: "sharing",        label: "Data Sharing" },
  { id: "retention",      label: "Data Retention" },
  { id: "security",       label: "Security" },
  { id: "cookies",        label: "Cookies" },
  { id: "rights",         label: "Your Rights" },
  { id: "children",       label: "Children's Privacy" },
  { id: "changes",        label: "Policy Changes" },
  { id: "contact",        label: "Contact Us" },
];

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-white/45 text-base leading-relaxed max-w-xl">
            We care about your data. This policy explains what we collect, why,
            and how we protect it.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <span className="text-xs text-white/25">Last updated</span>
            <span
              className="text-xs font-medium text-white/50 px-2.5 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}
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
            <article className="flex-1 min-w-0 prose-custom">

              <Section id="overview" title="Overview">
                <P>
                  WaveClubs (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the WaveClubs platform — an
                  all-in-one management solution for surf schools and experience businesses.
                  This Privacy Policy describes how we collect, use, and share information
                  about you when you use our website (waveclubs.com) and platform
                  (dashboard.waveclubs.com).
                </P>
                <P>
                  By using our services, you agree to the collection and use of information
                  in accordance with this policy.
                </P>
              </Section>

              <Section id="information" title="Information We Collect">
                <SubHeading>Information you provide</SubHeading>
                <ul className="list-none flex flex-col gap-2 mb-6">
                  {[
                    "Account details — name, email address, and password when you register.",
                    "Business details — surf school name, location, contact number, and other business information you enter.",
                    "Payment information — processed securely by Stripe. We never store full card numbers.",
                    "Instructor and staff profiles — names, contact details, and availability schedules.",
                    "Customer records — booking names, contact details, and session preferences you enter on behalf of your customers.",
                    "Support communications — messages you send to our team.",
                  ].map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>

                <SubHeading>Information collected automatically</SubHeading>
                <ul className="list-none flex flex-col gap-2">
                  {[
                    "Usage data — pages visited, features used, and time spent on the platform.",
                    "Device and browser data — IP address, browser type, and operating system.",
                    "Cookies and similar tracking technologies (see Cookies section).",
                  ].map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>
              </Section>

              <Section id="usage" title="How We Use Your Data">
                <P>We use the information we collect to:</P>
                <ul className="list-none flex flex-col gap-2 mt-4">
                  {[
                    "Provide, operate, and improve the WaveClubs platform.",
                    "Process payments and send billing notifications.",
                    "Send transactional emails (booking confirmations, password resets, invoices).",
                    "Send product updates and feature announcements — you can opt out at any time.",
                    "Respond to support requests and troubleshoot issues.",
                    "Monitor and analyse platform performance and security.",
                    "Comply with legal obligations.",
                  ].map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>
                <P className="mt-6">
                  We will never sell your personal data to third parties or use it
                  to serve you third-party advertising.
                </P>
              </Section>

              <Section id="sharing" title="Data Sharing">
                <P>
                  We do not sell, trade, or rent your personal data. We only share
                  it in the following limited circumstances:
                </P>
                <div className="mt-5 flex flex-col gap-4">
                  {[
                    {
                      name: "Stripe",
                      desc: "Payment processing. Subject to Stripe's Privacy Policy.",
                    },
                    {
                      name: "Resend",
                      desc: "Transactional email delivery (booking confirmations, account notifications).",
                    },
                    {
                      name: "Vercel",
                      desc: "Cloud hosting and edge delivery of the platform.",
                    },
                    {
                      name: "Legal authorities",
                      desc: "When required by law, court order, or to protect our rights and the safety of others.",
                    },
                  ].map((p) => (
                    <div
                      key={p.name}
                      className="flex gap-4 p-4 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      <span className="text-sm font-semibold text-white/80 w-28 shrink-0 pt-0.5">
                        {p.name}
                      </span>
                      <span className="text-sm text-white/45 leading-relaxed">
                        {p.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="retention" title="Data Retention">
                <P>
                  We retain your data for as long as your account is active. If you
                  close your account, we delete or anonymise your personal data within
                  90 days, unless we are legally required to retain it longer (for
                  example, payment records for tax purposes, which we keep for 7 years).
                </P>
                <P>
                  Backups are purged on a rolling 30-day cycle, so residual copies
                  may persist for up to 30 days after deletion.
                </P>
              </Section>

              <Section id="security" title="Security">
                <P>
                  We take security seriously and implement appropriate technical and
                  organisational measures to protect your data:
                </P>
                <ul className="list-none flex flex-col gap-2 mt-4">
                  {[
                    "All data is transmitted over TLS (HTTPS).",
                    "Passwords are hashed using bcrypt — we never store plaintext passwords.",
                    "Payment data is handled entirely by Stripe (PCI-DSS Level 1 certified).",
                    "Access to production systems is restricted to authorised team members only.",
                    "We conduct regular security reviews and dependency audits.",
                  ].map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>
                <P className="mt-6">
                  No method of transmission over the internet is 100% secure. If you
                  discover a security vulnerability, please contact us immediately at{" "}
                  <MailLink email="security@waveclubs.com" />.
                </P>
              </Section>

              <Section id="cookies" title="Cookies">
                <P>
                  We use cookies and similar technologies to keep you logged in,
                  remember your preferences, and understand how the platform is used.
                </P>
                <div className="mt-5 flex flex-col gap-3">
                  {[
                    {
                      type: "Essential",
                      desc: "Required for authentication and core platform functionality. Cannot be disabled.",
                    },
                    {
                      type: "Analytics",
                      desc: "Help us understand aggregate usage patterns. No personally identifiable data is shared with analytics providers.",
                    },
                    {
                      type: "Preferences",
                      desc: "Remember your language, theme, and display settings.",
                    },
                  ].map((c) => (
                    <div
                      key={c.type}
                      className="flex gap-4 p-4 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      <span className="text-sm font-semibold text-white/80 w-24 shrink-0 pt-0.5">
                        {c.type}
                      </span>
                      <span className="text-sm text-white/45 leading-relaxed">
                        {c.desc}
                      </span>
                    </div>
                  ))}
                </div>
                <P className="mt-6">
                  You can control cookies through your browser settings. Disabling
                  essential cookies will prevent you from using the platform.
                </P>
              </Section>

              <Section id="rights" title="Your Rights">
                <P>
                  Depending on your location, you may have the following rights
                  regarding your personal data:
                </P>
                <ul className="list-none flex flex-col gap-2 mt-4">
                  {[
                    "Access — request a copy of the data we hold about you.",
                    "Correction — ask us to correct inaccurate or incomplete data.",
                    "Deletion — request that we delete your personal data.",
                    "Portability — receive your data in a structured, machine-readable format.",
                    "Objection — object to certain types of processing, including marketing.",
                    "Restriction — ask us to restrict processing in certain circumstances.",
                  ].map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>
                <P className="mt-6">
                  To exercise any of these rights, email us at{" "}
                  <MailLink email="privacy@waveclubs.com" />. We will respond
                  within 30 days. EU/EEA residents may also lodge a complaint with
                  their local data protection authority.
                </P>
              </Section>

              <Section id="children" title="Children's Privacy">
                <P>
                  WaveClubs is not directed at children under 16. We do not
                  knowingly collect personal data from anyone under 16. If you
                  believe we have inadvertently collected such data, please contact
                  us and we will delete it promptly.
                </P>
              </Section>

              <Section id="changes" title="Policy Changes">
                <P>
                  We may update this policy from time to time. When we make material
                  changes, we will notify you by email and update the &ldquo;Last updated&rdquo;
                  date at the top of this page. Continued use of the platform after
                  changes take effect constitutes acceptance of the revised policy.
                </P>
              </Section>

              <Section id="contact" title="Contact Us">
                <P>
                  If you have any questions, concerns, or requests regarding this
                  Privacy Policy or your personal data, please reach out:
                </P>
                <div
                  className="mt-5 p-5 rounded-2xl flex flex-col gap-2"
                  style={{ background: "rgba(14,165,233,0.07)", border: "1px solid rgba(14,165,233,0.15)" }}
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
                    href="/terms"
                    className="text-sm text-white/38 hover:text-white/70 transition-colors duration-200 cursor-pointer"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/cookies"
                    className="text-sm text-white/38 hover:text-white/70 transition-colors duration-200 cursor-pointer"
                  >
                    Cookie Policy
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

function MailLink({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className="text-[#38BDF8] hover:text-[#7DD3FC] transition-colors duration-200 cursor-pointer"
    >
      {email}
    </a>
  );
}
