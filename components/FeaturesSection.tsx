import { CheckCircle2, Clock, TrendingUp, Star, ChevronRight } from "lucide-react";

// ─── Booking & Scheduling ─────────────────────────────────────────────
const weekCols = [
  { d: "M", n: 9,  dots: ["#0EA5E9"] },
  { d: "T", n: 10, dots: [] as string[] },
  { d: "W", n: 11, dots: ["#8B5CF6", "#0EA5E9"] },
  { d: "T", n: 12, dots: ["#10B981"] },
  { d: "F", n: 13, dots: ["#0EA5E9", "#8B5CF6"], active: true },
  { d: "S", n: 14, dots: ["#10B981", "#0EA5E9", "#F59E0B"] },
  { d: "S", n: 15, dots: ["#0EA5E9"] },
];

const todaySessions = [
  { time: "09:00", label: "Beginner Surf Lesson", instructor: "Carlos M.", ok: true },
  { time: "11:30", label: "Advanced Session",     instructor: "Sofia L.",  ok: true },
  { time: "14:00", label: "Kids Camp",            instructor: "Tom R.",    ok: false },
  { time: "16:30", label: "SUP Sunset Tour",      instructor: "Ana C.",    ok: true },
];

function BookingMockup() {
  return (
    <div className="flex flex-col gap-3 h-full">
      {/* Mini week view */}
      <div>
        <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-2">
          Week · Jun 9–15
        </p>
        <div className="grid grid-cols-7 gap-1">
          {weekCols.map(({ d, n, dots, active }, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className={`text-[9px] font-semibold ${active ? "text-sky-500" : "text-slate-400"}`}>{d}</span>
              <div
                className={`w-[22px] h-[22px] rounded-full flex items-center justify-center text-[8px] font-bold ${
                  active ? "bg-sky-500 text-white" : "bg-slate-100 text-slate-400"
                }`}
              >
                {n}
              </div>
              <div className="flex flex-col gap-0.5 w-full mt-0.5">
                {dots.length === 0 ? (
                  <div className="h-1 w-full" />
                ) : (
                  dots.map((c, j) => (
                    <div key={j} className="h-1.5 w-full rounded-full" style={{ backgroundColor: c + "55" }} />
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Session list */}
      <div>
        <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-2">
          Today&apos;s sessions
        </p>
        <div className="flex flex-col gap-1.5">
          {todaySessions.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white rounded-lg border border-slate-100 px-2.5 py-1.5"
            >
              <span className="text-[9px] font-bold text-slate-400 w-8 shrink-0">{s.time}</span>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold text-slate-700 truncate leading-none">{s.label}</p>
                <p className="text-[8px] text-slate-400 mt-0.5">{s.instructor}</p>
              </div>
              {s.ok
                ? <CheckCircle2 size={11} className="text-emerald-500 shrink-0" />
                : <Clock size={11} className="text-amber-400 shrink-0" />
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Instructor Management ────────────────────────────────────────────
const instructors = [
  { initials: "CM", name: "Carlos Mendes", role: "Senior",  sessions: 3, available: true,  c: "#0EA5E9" },
  { initials: "SL", name: "Sofia Lima",    role: "Coach",   sessions: 2, available: false, c: "#8B5CF6" },
  { initials: "TR", name: "Tom Ramos",     role: "Beginner", sessions: 1, available: true,  c: "#10B981" },
];

function InstructorMockup() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">
        Active Instructors
      </p>
      {instructors.map((inst) => (
        <div key={inst.name} className="flex items-center gap-2.5 bg-white rounded-xl border border-slate-100 px-3 py-2.5">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
            style={{ background: `linear-gradient(135deg, ${inst.c}cc, ${inst.c})` }}
          >
            {inst.initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-semibold text-slate-700 leading-none">{inst.name}</p>
            <p className="text-[9px] text-slate-400 mt-0.5">{inst.role} instructor</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-[10px] font-bold text-slate-700">{inst.sessions}</p>
            <p className="text-[8px] text-slate-400">sessions</p>
          </div>
          <div
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: inst.available ? "#10B981" : "#F59E0B" }}
          />
        </div>
      ))}
      <div className="flex items-center justify-between mt-1 px-1">
        <span className="text-[9px] text-slate-400">3 of 5 active today</span>
        <div className="flex gap-0.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`w-4 h-1.5 rounded-full ${i < 3 ? "bg-sky-400" : "bg-slate-200"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Equipment Tracking ───────────────────────────────────────────────
const equipment = [
  { label: "Shortboards", avail: 8,  total: 10, c: "#0EA5E9" },
  { label: "Longboards",  avail: 5,  total: 8,  c: "#06B6D4" },
  { label: "Wetsuits",    avail: 11, total: 14, c: "#8B5CF6" },
  { label: "Bodyboards",  avail: 3,  total: 8,  c: "#F59E0B" },
];

function EquipmentMockup() {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Inventory Status</p>
        <span className="text-[9px] text-emerald-500 font-semibold">Auto-reserved</span>
      </div>
      {equipment.map((eq) => {
        const pct = Math.round((eq.avail / eq.total) * 100);
        return (
          <div key={eq.label} className="bg-white rounded-xl border border-slate-100 px-3 py-2.5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-semibold text-slate-700">{eq.label}</span>
              <span className="text-[10px] font-bold" style={{ color: eq.c }}>
                {eq.avail}/{eq.total}
              </span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${pct}%`, backgroundColor: eq.c }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Accommodation Management ─────────────────────────────────────────
const rooms = [
  { id: "201", status: "occupied"  },
  { id: "202", status: "available" },
  { id: "203", status: "available" },
  { id: "204", status: "occupied"  },
  { id: "205", status: "checkout"  },
  { id: "206", status: "occupied"  },
  { id: "207", status: "available" },
  { id: "208", status: "occupied"  },
  { id: "209", status: "available" },
];

type RoomStatus = "occupied" | "available" | "checkout";

const roomStyles: Record<RoomStatus, { bg: string; text: string; dot: string; border: string }> = {
  occupied:  { bg: "#EFF6FF", text: "#0EA5E9", dot: "#0EA5E9", border: "#BAE6FD" },
  available: { bg: "#F0FDF4", text: "#10B981", dot: "#10B981", border: "#BBF7D0" },
  checkout:  { bg: "#FFFBEB", text: "#F59E0B", dot: "#F59E0B", border: "#FDE68A" },
};

function AccommodationMockup() {
  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex items-center justify-between">
        <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Floor 2 · 9 Rooms</p>
        <span className="text-[9px] text-slate-400">Jun 13</span>
      </div>

      <div className="grid grid-cols-3 gap-2 flex-1">
        {rooms.map((r) => {
          const s = roomStyles[r.status as RoomStatus];
          return (
            <div
              key={r.id}
              className="rounded-xl flex flex-col items-center justify-center py-3 gap-1 border"
              style={{ backgroundColor: s.bg, borderColor: s.border }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: s.dot }} />
              <span className="text-[10px] font-bold text-slate-600">{r.id}</span>
              <span className="text-[7px] font-semibold capitalize" style={{ color: s.text }}>
                {r.status}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-3 pt-1">
        {[
          { label: "Occupied",  dot: "#0EA5E9" },
          { label: "Available", dot: "#10B981" },
          { label: "Checkout",  dot: "#F59E0B" },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: l.dot }} />
            <span className="text-[8px] text-slate-400">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Demand Forecasting ───────────────────────────────────────────────
const chartBars = [
  { d: "M", h: 42 },
  { d: "T", h: 58 },
  { d: "W", h: 50 },
  { d: "T", h: 70 },
  { d: "F", h: 88 },
  { d: "S", h: 100, peak: true },
  { d: "S", h: 80 },
];

function ForecastingMockup() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">Weekly Revenue</p>
          <p className="text-xl font-bold text-slate-800 leading-none">€5,575</p>
        </div>
        <div className="flex items-center gap-1 bg-emerald-50 border border-emerald-100 rounded-lg px-2 py-1">
          <TrendingUp size={10} className="text-emerald-500" />
          <span className="text-[10px] font-bold text-emerald-600">+18%</span>
        </div>
      </div>

      <div className="flex items-end gap-1.5 h-20 pt-2">
        {chartBars.map(({ d, h, peak }, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-md"
              style={{
                height: `${h}%`,
                background: peak
                  ? "linear-gradient(180deg, #0EA5E9, #06B6D4)"
                  : "#E2E8F0",
              }}
            />
            <span className={`text-[8px] font-semibold ${peak ? "text-sky-500" : "text-slate-400"}`}>
              {d}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 pt-1">
        {[
          { label: "Sessions",    val: "31" },
          { label: "Customers",   val: "87" },
          { label: "Avg booking", val: "€64" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-lg border border-slate-100 px-2 py-2 text-center">
            <p className="text-[11px] font-bold text-slate-800">{s.val}</p>
            <p className="text-[8px] text-slate-400">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Online Marketplace ───────────────────────────────────────────────
function MarketplaceMockup() {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
        Your Listings
      </p>

      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
        <div
          className="h-20 w-full flex items-center justify-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 60%, #0284C7 100%)" }}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />
          <div className="text-white text-center relative z-10">
            <p className="text-[10px] font-bold opacity-90">Beginner Surf Lesson</p>
            <p className="text-[8px] opacity-60">Faro Beach · 2 hours</p>
          </div>
          <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-md px-1.5 py-0.5">
            <span className="text-[9px] font-bold text-white">€55</span>
          </div>
        </div>
        <div className="px-3 py-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={9} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-[8px] text-slate-400 ml-1">4.9 (128)</span>
            </div>
            <span className="text-[9px] text-emerald-500 font-semibold">● Available</span>
          </div>
          <div
            className="w-full py-1.5 rounded-lg text-white text-[10px] font-semibold text-center cursor-pointer"
            style={{ background: "linear-gradient(135deg, #0EA5E9, #06B6D4)" }}
          >
            Book Now
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 bg-white rounded-xl border border-slate-100 px-3 py-2">
        <div
          className="w-9 h-9 rounded-lg shrink-0"
          style={{ background: "linear-gradient(135deg, #8B5CF6, #7C3AED)" }}
        />
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-semibold text-slate-700 truncate leading-none">Advanced SUP Tour</p>
          <div className="flex gap-0.5 mt-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={7} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        <span className="text-[10px] font-bold text-slate-800 shrink-0">€75</span>
        <ChevronRight size={12} className="text-slate-300 shrink-0" />
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────
type BentoCard = {
  title: string;
  description: string;
  Mockup: () => React.JSX.Element;
  img: string;
  scrim: number;
  span: string;
  illustrationH: string;
};

// bg-1: soft blue/green  bg-2: pink/purple  bg-3: deep teal
const cards: BentoCard[] = [
  {
    title: "Booking & Scheduling",
    description:
      "Visual week calendar with session management, attendance tracking, and automatic confirmations — keeping your whole team in sync.",
    Mockup: BookingMockup,
    img: "/images/apple-bg-1.jpg",
    scrim: 0.70,
    span: "lg:col-span-7",
    illustrationH: "min-h-[280px]",
  },
  {
    title: "Instructor Management",
    description:
      "Assign instructors to sessions, track availability in real time, and make sure the right person is on the water when it counts.",
    Mockup: InstructorMockup,
    img: "/images/apple-bg-2.jpg",
    scrim: 0.76,
    span: "lg:col-span-5",
    illustrationH: "min-h-[280px]",
  },
  {
    title: "Equipment Tracking",
    description:
      "Boards, wetsuits, and bodyboards are auto-reserved the moment a customer books. No double-allocation, no frantic inventory checks.",
    Mockup: EquipmentMockup,
    img: "/images/apple-bg-3.jpg",
    scrim: 0.82,
    span: "lg:col-span-5",
    illustrationH: "min-h-[260px]",
  },
  {
    title: "Accommodation Management",
    description:
      "For surf camps: manage rooms, occupancy, and checkout from the same dashboard. No more spreadsheet gymnastics.",
    Mockup: AccommodationMockup,
    img: "/images/apple-bg-1.jpg",
    scrim: 0.70,
    span: "lg:col-span-7",
    illustrationH: "min-h-[260px]",
  },
  {
    title: "Demand Forecasting",
    description:
      "Revenue trends, session fill rates, and instructor utilisation at a glance. Know what's working before the season ends.",
    Mockup: ForecastingMockup,
    img: "/images/apple-bg-2.jpg",
    scrim: 0.76,
    span: "lg:col-span-6",
    illustrationH: "min-h-[240px]",
  },
  {
    title: "Online Marketplace",
    description:
      "List your experiences online and accept bookings 24/7 — turning your beach business into a revenue engine that never sleeps.",
    Mockup: MarketplaceMockup,
    img: "/images/apple-bg-3.jpg",
    scrim: 0.82,
    span: "lg:col-span-6",
    illustrationH: "min-h-[240px]",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-[#F8FAFC] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold text-wave-blue uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-4">
            Everything your surf business
            <br />
            needs to run smoothly
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Purpose-built for surf schools and camps. Not a generic tool
            awkwardly adapted.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {cards.map(({ title, description, Mockup, img, scrim, span, illustrationH }) => (
            <div
              key={title}
              className={`${span} rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-0.5 cursor-default`}
            >
              {/* Illustration — apple bg image + white scrim + mockup */}
              <div
                className={`${illustrationH} relative border-b border-slate-100 overflow-hidden flex flex-col justify-center`}
                style={{
                  backgroundImage: `url('${img}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{ backgroundColor: `rgba(255,255,255,${scrim})` }}
                />
                <div className="relative z-10 p-5">
                  <Mockup />
                </div>
              </div>

              {/* Text */}
              <div className="px-6 py-5">
                <h3 className="font-display text-base font-bold text-slate-900 mb-1.5">
                  {title}
                </h3>
                <p className="text-sm text-slate-500 leading-[1.65]">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
