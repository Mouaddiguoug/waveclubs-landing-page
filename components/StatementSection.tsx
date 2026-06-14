import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const avatars = [
  { initials: "JR", style: { background: "linear-gradient(135deg,#0EA5E9,#06B6D4)" } },
  { initials: "ML", style: { background: "linear-gradient(135deg,#0284C7,#0EA5E9)" } },
  { initials: "AP", style: { background: "linear-gradient(135deg,#06B6D4,#0891B2)" } },
  { initials: "SK", style: { background: "linear-gradient(135deg,#0369A1,#06B6D4)" } },
];

export default function StatementSection() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Main headline */}
        <h2 className="font-display text-5xl sm:text-6xl md:text-[72px] font-semibold text-slate-900 tracking-tight leading-[1.05] mb-8">
          The platform{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #7DD3FC, #38BDF8, #0EA5E9, #06B6D4, #0284C7, #38BDF8, #7DD3FC)",
              backgroundSize: "250% auto",
              animation: "gradient-flow 5s ease infinite",
            }}
          >
            200+ surf schools
          </span>
          <br />
          trust to run their business.
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-slate-400 leading-[1.7] max-w-2xl mx-auto mb-10">
          From one-instructor beach shacks to multi-location academies — replace the chaos of seven apps with one platform built for the water.
        </p>

        {/* CTA */}
        <Link
          href="https://dashboard.waveclubs.com/signup"
          className="btn-primary inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-base cursor-pointer"
        >
          Get started free
          <ArrowRight size={18} />
        </Link>

      </div>
    </section>
  );
}
