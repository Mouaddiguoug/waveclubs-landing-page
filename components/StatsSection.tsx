import { Zap, TrendingUp, Layers, Timer } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="bg-[#F2F2F2] py-20 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-3">
            Built for results
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.08]">
            Numbers that speak{" "}
            <span className="hidden md:contents"><br /></span>
            for themselves.
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:grid-rows-2 md:h-[520px]">

          {/* ── Tall dark card ── */}
          <div className="md:row-span-2 bg-[#111111] rounded-3xl p-5 md:p-8 flex flex-col min-h-[200px] md:min-h-0">
            <Zap
              className="w-8 h-8 md:w-16 md:h-16 text-white/25 shrink-0"
              strokeWidth={1}
            />
            <div className="mt-auto">
              <div className="flex items-baseline gap-1 mb-2 md:mb-3">
                <span className="font-display text-6xl md:text-[88px] font-extrabold text-white leading-none tracking-tight">
                  85
                </span>
                <span className="font-display text-2xl md:text-4xl font-bold text-white/30 leading-none">
                  %
                </span>
              </div>
              <p className="text-xs md:text-sm font-semibold text-white/65 mb-1">
                Less admin time
              </p>
              <p className="text-[11px] md:text-xs text-white/28 leading-relaxed">
                Reported by surf schools in their first month
              </p>
            </div>
          </div>

          {/* ── Tall white card ── */}
          <div className="md:row-span-2 bg-white rounded-3xl p-5 md:p-8 flex flex-col border border-slate-100 shadow-sm min-h-[200px] md:min-h-0">
            <TrendingUp
              className="w-8 h-8 md:w-16 md:h-16 text-slate-200 shrink-0"
              strokeWidth={1}
            />
            <div className="mt-auto">
              <div className="flex items-baseline gap-1 mb-2 md:mb-3">
                <span className="font-display text-6xl md:text-[88px] font-extrabold text-slate-900 leading-none tracking-tight">
                  3
                </span>
                <span className="font-display text-2xl md:text-4xl font-bold text-slate-300 leading-none">
                  ×
                </span>
              </div>
              <p className="text-xs md:text-sm font-semibold text-slate-700 mb-1">
                More bookings
              </p>
              <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed">
                With 24/7 automated customer support enabled
              </p>
            </div>
          </div>

          {/* ── Short card — 1 platform ── */}
          <div className="bg-white rounded-3xl p-5 md:p-6 flex flex-col border border-slate-100 shadow-sm min-h-[150px] md:min-h-0">
            <Layers
              className="w-6 h-6 md:w-10 md:h-10 text-slate-200 shrink-0"
              strokeWidth={1}
            />
            <div className="mt-auto">
              <div className="flex items-baseline gap-1 mb-1.5">
                <span className="font-display text-4xl md:text-6xl font-extrabold text-slate-900 leading-none tracking-tight">
                  1
                </span>
              </div>
              <p className="text-xs md:text-sm font-semibold text-slate-700 mb-0.5">
                Platform
              </p>
              <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed">
                Replaces WhatsApp, sheets & calendars
              </p>
            </div>
          </div>

          {/* ── Short card — 5 min ── */}
          <div className="bg-white rounded-3xl p-5 md:p-6 flex flex-col border border-slate-100 shadow-sm min-h-[150px] md:min-h-0">
            <Timer
              className="w-6 h-6 md:w-10 md:h-10 text-slate-200 shrink-0"
              strokeWidth={1}
            />
            <div className="mt-auto">
              <div className="flex items-baseline gap-1 mb-1.5">
                <span className="font-display text-4xl md:text-6xl font-extrabold text-slate-900 leading-none tracking-tight">
                  5
                </span>
                <span className="font-display text-xl md:text-2xl font-bold text-slate-300 leading-none">
                  min
                </span>
              </div>
              <p className="text-xs md:text-sm font-semibold text-slate-700 mb-0.5">
                To go live
              </p>
              <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed">
                From sign-up to accepting your first booking
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
