import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — WaveClubs",
  description:
    "Read the terms that govern your use of the WaveClubs platform.",
};

const sections = [
  { id: "acceptance",     label: "Acceptance of Terms" },
  { id: "description",    label: "Description of Service" },
  { id: "accounts",       label: "Accounts & Access" },
  { id: "acceptable-use", label: "Acceptable Use" },
  { id: "payments",       label: "Payments & Billing" },
  { id: "data",           label: "Your Data" },
  { id: "ip",             label: "Intellectual Property" },
  { id: "third-party",    label: "Third-Party Services" },
  { id: "disclaimers",    label: "Disclaimers" },
  { id: "liability",      label: "Limitation of Liability" },
  { id: "termination",    label: "Termination" },
  { id: "governing-law",  label: "Governing Law" },
  { id: "changes",        label: "Changes to Terms" },
  { id: "contact",        label: "Contact Us" },
];

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-white/45 text-base leading-relaxed max-w-xl">
            Please read these terms carefully before using WaveClubs. By
            accessing or using our platform, you agree to be bound by them.
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

              <Section id="acceptance" title="Acceptance of Terms">
                <P>
                  These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding
                  agreement between you (&ldquo;you&rdquo; or &ldquo;User&rdquo;) and WaveClubs
                  (&ldquo;WaveClubs&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) governing your
                  access to and use of the WaveClubs platform, website
                  (waveclubs.com), and related services (collectively, the
                  &ldquo;Service&rdquo;).
                </P>
                <P className="mt-4">
                  By creating an account, clicking &ldquo;Get Started&rdquo;, or otherwise
                  accessing or using the Service, you confirm that you have read,
                  understood, and agree to be bound by these Terms and our{" "}
                  <InlineLink href="/privacy">Privacy Policy</InlineLink>. If you
                  do not agree, you must not use the Service.
                </P>
                <P className="mt-4">
                  If you are using the Service on behalf of a business or
                  organisation, you represent that you have the authority to bind
                  that entity to these Terms.
                </P>
              </Section>

              <Section id="description" title="Description of Service">
                <P>
                  WaveClubs is a software-as-a-service (SaaS) platform designed
                  for surf schools, surf camps, and experience businesses. The
                  Service includes tools for:
                </P>
                <ul className="list-none flex flex-col gap-2 mt-4">
                  {[
                    "Booking and reservation management",
                    "Instructor scheduling and staff management",
                    "Equipment tracking and inventory",
                    "Customer communication and messaging",
                    "Payment processing and invoicing",
                    "Analytics and business reporting",
                  ].map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>
                <P className="mt-6">
                  We reserve the right to modify, suspend, or discontinue any
                  part of the Service at any time with reasonable notice where
                  practicable.
                </P>
              </Section>

              <Section id="accounts" title="Accounts & Access">
                <SubHeading>Registration</SubHeading>
                <P>
                  To use the Service you must create an account with a valid email
                  address and a secure password. You must be at least 18 years old
                  and have the legal capacity to enter into a binding contract.
                </P>
                <SubHeading>Account security</SubHeading>
                <P>
                  You are responsible for maintaining the confidentiality of your
                  login credentials and for all activities that occur under your
                  account. Notify us immediately at{" "}
                  <MailLink email="security@waveclubs.com" /> if you suspect
                  unauthorised access.
                </P>
                <SubHeading>Team members</SubHeading>
                <P>
                  You may invite team members (instructors, staff) to your
                  account. You are responsible for their compliance with these
                  Terms and for any actions they take within the platform.
                </P>
              </Section>

              <Section id="acceptable-use" title="Acceptable Use">
                <P>You agree not to use the Service to:</P>
                <ul className="list-none flex flex-col gap-2 mt-4">
                  {[
                    "Violate any applicable local, national, or international law or regulation.",
                    "Upload or transmit malicious code, viruses, or harmful content.",
                    "Attempt to gain unauthorised access to any part of the Service or its infrastructure.",
                    "Reverse engineer, decompile, or extract source code from the platform.",
                    "Resell or sublicense access to the Service without written permission.",
                    "Use the Service to send unsolicited bulk messages or spam.",
                    "Impersonate any person or entity or misrepresent your affiliation.",
                    "Scrape, crawl, or systematically extract data from the platform.",
                  ].map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>
                <P className="mt-6">
                  We reserve the right to suspend or terminate your account
                  immediately if we determine, in our sole discretion, that you
                  have violated any of these restrictions.
                </P>
              </Section>

              <Section id="payments" title="Payments & Billing">
                <SubHeading>Subscription plans</SubHeading>
                <P>
                  WaveClubs is offered on a subscription basis. Fees are charged
                  monthly or annually in advance depending on the plan you select.
                  All prices are displayed on our pricing page and are exclusive
                  of any applicable taxes.
                </P>
                <SubHeading>Free trial</SubHeading>
                <P>
                  We offer a 15-day free trial with no credit card required. At
                  the end of the trial period, you must subscribe to a paid plan
                  to continue using the Service. If you do not subscribe, your
                  account will be downgraded and data may be inaccessible until
                  you activate a plan.
                </P>
                <SubHeading>Payment processing</SubHeading>
                <P>
                  Payments are processed securely by Stripe. By providing payment
                  details you authorise WaveClubs to charge the applicable fees to
                  your chosen payment method on a recurring basis until you cancel.
                </P>
                <SubHeading>Cancellations & refunds</SubHeading>
                <P>
                  You may cancel your subscription at any time from your account
                  settings. Cancellation takes effect at the end of the current
                  billing period — you retain access until then. We do not provide
                  pro-rated refunds for partial billing periods, except where
                  required by applicable law.
                </P>
                <SubHeading>Price changes</SubHeading>
                <P>
                  We may change our pricing with at least 30 days&rsquo; notice via
                  email. Continued use of the Service after a price change takes
                  effect constitutes acceptance of the new price.
                </P>
              </Section>

              <Section id="data" title="Your Data">
                <P>
                  You retain full ownership of all data you enter into the
                  platform, including your customers&rsquo; booking records, staff
                  information, and business data (&ldquo;Customer Data&rdquo;).
                </P>
                <P className="mt-4">
                  You grant WaveClubs a limited licence to store, process, and
                  display your Customer Data solely for the purpose of providing
                  the Service. We will not access your Customer Data except to
                  provide the Service or as required by law.
                </P>
                <P className="mt-4">
                  Upon termination of your account, you may export your data for
                  up to 30 days before it is permanently deleted. See our{" "}
                  <InlineLink href="/privacy">Privacy Policy</InlineLink> for
                  full details on data handling and retention.
                </P>
              </Section>

              <Section id="ip" title="Intellectual Property">
                <SubHeading>WaveClubs IP</SubHeading>
                <P>
                  The Service, including all software, design, text, graphics,
                  logos, and the WaveClubs name and brand, is the exclusive
                  intellectual property of WaveClubs and is protected by copyright,
                  trademark, and other laws. These Terms do not grant you any
                  rights to use our branding or intellectual property.
                </P>
                <SubHeading>Feedback</SubHeading>
                <P>
                  If you submit ideas, suggestions, or feedback about the Service,
                  you grant us a perpetual, irrevocable, royalty-free licence to
                  use that feedback in any way we see fit, without any obligation
                  to compensate you.
                </P>
              </Section>

              <Section id="third-party" title="Third-Party Services">
                <P>
                  The Service integrates with third-party providers including
                  Stripe (payments), Resend (email), and Vercel (hosting). Your
                  use of these integrations is subject to those providers&rsquo; own
                  terms and privacy policies.
                </P>
                <P className="mt-4">
                  WaveClubs is not responsible for the content, policies, or
                  practices of any third-party service. We do not endorse or make
                  any warranty about third-party services.
                </P>
              </Section>

              <Section id="disclaimers" title="Disclaimers">
                <P>
                  The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis
                  without warranties of any kind, express or implied, including but
                  not limited to warranties of merchantability, fitness for a
                  particular purpose, and non-infringement.
                </P>
                <P className="mt-4">
                  We do not warrant that the Service will be uninterrupted,
                  error-free, or completely secure. We will make commercially
                  reasonable efforts to maintain uptime and resolve issues promptly,
                  but we cannot guarantee 100% availability.
                </P>
              </Section>

              <Section id="liability" title="Limitation of Liability">
                <P>
                  To the fullest extent permitted by applicable law, WaveClubs
                  and its officers, directors, employees, and agents will not be
                  liable for any indirect, incidental, special, consequential, or
                  punitive damages — including lost profits, lost data, or business
                  interruption — arising from your use of or inability to use the
                  Service, even if we have been advised of the possibility of such
                  damages.
                </P>
                <P className="mt-4">
                  In no event will our total liability to you exceed the greater
                  of (a) the amount you paid to WaveClubs in the 12 months
                  preceding the claim or (b) €100 EUR.
                </P>
              </Section>

              <Section id="termination" title="Termination">
                <SubHeading>By you</SubHeading>
                <P>
                  You may cancel your account at any time from your account
                  settings. Upon cancellation, your right to access the Service
                  ends at the conclusion of the current billing period.
                </P>
                <SubHeading>By us</SubHeading>
                <P>
                  We may suspend or terminate your account immediately if you
                  breach these Terms, fail to pay applicable fees, or if we are
                  required to do so by law. Where feasible, we will provide
                  advance notice.
                </P>
                <P className="mt-4">
                  Upon termination, all licences granted to you under these Terms
                  cease immediately. Sections that by their nature should survive
                  termination — including Intellectual Property, Disclaimers,
                  Limitation of Liability, and Governing Law — will survive.
                </P>
              </Section>

              <Section id="governing-law" title="Governing Law">
                <P>
                  These Terms are governed by and construed in accordance with the
                  laws of Portugal, without regard to its conflict of law
                  provisions. Any disputes arising under or in connection with
                  these Terms shall be subject to the exclusive jurisdiction of the
                  courts of Portugal.
                </P>
                <P className="mt-4">
                  If you are a consumer located in the EU, you may also have the
                  right to bring a claim before the courts of your country of
                  residence.
                </P>
              </Section>

              <Section id="changes" title="Changes to Terms">
                <P>
                  We may update these Terms from time to time. When we make
                  material changes, we will notify you by email and post a notice
                  on the platform at least 14 days before the changes take effect.
                  Your continued use of the Service after the effective date
                  constitutes acceptance of the revised Terms.
                </P>
                <P className="mt-4">
                  If you do not agree to the updated Terms, you must stop using
                  the Service and cancel your account before the changes take
                  effect.
                </P>
              </Section>

              <Section id="contact" title="Contact Us">
                <P>
                  If you have any questions about these Terms, please contact us:
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
                    href="mailto:legal@waveclubs.com"
                    className="text-sm text-[#38BDF8] hover:text-[#7DD3FC] transition-colors duration-200 cursor-pointer"
                  >
                    legal@waveclubs.com
                  </a>
                  <span className="text-sm text-white/40">
                    We aim to respond to all legal enquiries within 5 business days.
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

function InlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-[#38BDF8] hover:text-[#7DD3FC] transition-colors duration-200 cursor-pointer"
    >
      {children}
    </Link>
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
