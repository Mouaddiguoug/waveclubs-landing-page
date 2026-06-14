import { Building2, Star } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────
type ImageCard = {
  kind: "image";
  img: string;
  company: string;
  quote: string;
};

type TextCard = {
  kind: "text";
  quote: string;
  name: string;
  company: string;
  initials: string;
  color: string;
  avatar?: boolean;
};

type Card = ImageCard | TextCard;

// ─── Data ─────────────────────────────────────────────────────────────
const col1: Card[] = [
  {
    kind: "image",
    img: "/images/apple-bg-1.jpg",
    company: "Costa Surf Academy · Faro",
    quote:
      "WaveClubs automated a large part of our booking process. It saves us hours every week, eliminates double-bookings, and gives us full control over capacity and sessions.",
  },
  {
    kind: "text",
    quote:
      "We've received incredible feedback from students about the online booking experience since we switched. It's smooth, professional, and works on any device.",
    name: "Jake Thompson",
    company: "Blue Horizon Surf, Nazaré",
    initials: "JT",
    color: "#0EA5E9",
    avatar: true,
  },
];

const col2: Card[] = [
  {
    kind: "text",
    quote:
      "The platform offers everything we need and keeps getting better. Support is attentive, helpful, and always quick to respond — even during peak season.",
    name: "Carlos Rivera",
    company: "WaveRiders Escola, Lagos",
    initials: "CR",
    color: "#06B6D4",
    avatar: true,
  },
  {
    kind: "text",
    quote:
      "In a busy surf camp environment, WaveClubs makes our work significantly easier with a clean, simple, and professional system.",
    name: "Plums Surf Camp",
    company: "",
    initials: "PS",
    color: "#8B5CF6",
    avatar: false,
  },
  {
    kind: "text",
    quote:
      "WaveClubs lets us continuously develop our offerings and tailor experiences for each guest group. The flexibility is exactly what we needed.",
    name: "Ana Costa",
    company: "Surf Escola Porto",
    initials: "AC",
    color: "#10B981",
    avatar: true,
  },
];

const col3: Card[] = [
  {
    kind: "text",
    quote:
      "Easy to learn, simple to use, and backed by fast and reliable support. Our instructors adopted it in one day — no training needed.",
    name: "Sophie Müller",
    company: "Atlantic Surf Camp, Sagres",
    initials: "SM",
    color: "#F59E0B",
    avatar: true,
  },
  {
    kind: "image",
    img: "/images/apple-bg-3.jpg",
    company: "Ocean Riders · Ericeira",
    quote:
      "WaveClubs saves us hours of admin every week. Instructors, students, and equipment are all managed from one dashboard — and guests can book 24/7.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────
function ImageCardEl({ card }: { card: ImageCard }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden min-h-[280px]"
      style={{
        backgroundImage: `url('${card.img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient scrim — dark bottom for text, subtle top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

      {/* Top: company badge */}
      <div className="absolute top-4 left-4 right-4 z-10">
        <div className="inline-flex items-center gap-1.5 bg-white/14 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
          <Building2 size={11} className="text-white/70" />
          <span className="text-[11px] font-medium text-white/85">{card.company}</span>
        </div>
      </div>

      {/* Bottom: stars + quote */}
      <div className="absolute bottom-5 left-5 right-5 z-10">
        <div className="flex gap-0.5 mb-2.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={11} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-sm text-white leading-[1.65] font-medium">
          &ldquo;{card.quote}&rdquo;
        </p>
      </div>
    </div>
  );
}

function TextCardEl({ card }: { card: TextCard }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} size={13} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-sm text-slate-600 leading-[1.75]">
        &ldquo;{card.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-slate-50">
        {card.avatar ? (
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
            style={{ background: `linear-gradient(135deg, ${card.color}cc, ${card.color})` }}
          >
            {card.initials}
          </div>
        ) : (
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
            style={{ backgroundColor: card.color + "18" }}
          >
            <Building2 size={13} style={{ color: card.color }} />
          </div>
        )}
        <div className="min-w-0">
          <p className="text-[12px] font-semibold text-slate-800 leading-none truncate">{card.name}</p>
          {card.company && (
            <p className="text-[11px] text-slate-400 mt-0.5 truncate">{card.company}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function CardEl({ card }: { card: Card }) {
  if (card.kind === "image") return <ImageCardEl card={card} />;
  return <TextCardEl card={card} />;
}

// ─── Section ──────────────────────────────────────────────────────────
export default function TestimonialsSection() {
  return (
    <section className="bg-[#F8FAFC] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between gap-6 mb-12 flex-wrap">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
            What our
            <br />
            customers say
          </h2>
          <div className="flex items-center gap-2 shrink-0 mt-1">
            <a
              href="#"
              className="text-sm font-semibold text-white bg-slate-900 px-4 py-2 rounded-full cursor-pointer hover:bg-slate-700 transition-colors duration-200"
            >
              Customer story
            </a>
            <a
              href="https://calendly.com/digougmouad/30min"
              className="text-sm font-medium text-slate-600 border border-slate-200 bg-white px-4 py-2 rounded-full cursor-pointer hover:bg-slate-50 transition-colors duration-200"
            >
              Book a demo
            </a>
          </div>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            {col1.map((card, i) => <CardEl key={i} card={card} />)}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            {col2.map((card, i) => <CardEl key={i} card={card} />)}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            {col3.map((card, i) => <CardEl key={i} card={card} />)}
          </div>

        </div>
      </div>
    </section>
  );
}
