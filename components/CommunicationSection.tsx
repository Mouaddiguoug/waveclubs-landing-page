import Image from "next/image";
import { MessageCircle, Camera, Inbox, Zap } from "lucide-react";

const messages = [
  {
    platform: "Instagram",
    icon: Camera,
    color: "#E1306C",
    bg: "#FDF2F8",
    sender: "surf_lover_maria",
    text: "Hi! Do you have beginner lessons this weekend?",
    time: "2m ago",
  },
  {
    platform: "WhatsApp",
    icon: MessageCircle,
    color: "#25D366",
    bg: "#F0FDF4",
    sender: "+351 912 345 678",
    text: "Can I book 3 spots for Saturday morning?",
    time: "5m ago",
  },
  {
    platform: "Instagram",
    icon: Camera,
    color: "#E1306C",
    bg: "#FDF2F8",
    sender: "ocean_rider_jo",
    text: "What's included in the surf camp package?",
    time: "12m ago",
  },
];

export default function CommunicationSection() {
  return (
    <section id="communication" className="bg-[#F8FAFC] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-sm font-semibold text-wave-blue uppercase tracking-widest mb-3">
              Communication Hub
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-5">
              One inbox.
              <br />
              Every channel.
            </h2>
            <p className="text-lg text-slate-500 leading-[1.7] mb-8">
              Stop switching between Instagram, WhatsApp, and everything else.
              WaveClubs centralizes all your customer messages into a single
              inbox — so you can respond faster and never miss a booking
              inquiry.
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: Camera,
                  label: "Instagram DMs",
                  desc: "Connected directly to your business account",
                  color: "#E1306C",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  desc: "All conversations in one thread view",
                  color: "#25D366",
                },
                {
                  icon: Inbox,
                  label: "Unified Inbox",
                  desc: "One place to read, reply, and convert to bookings",
                  color: "#0EA5E9",
                },
              ].map(({ icon: Icon, label, desc, color }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: color + "18" }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {label}
                    </p>
                    <p className="text-sm text-slate-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mockup */}
          <div className="relative md:block hidden">
            {/* Inbox mockup */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
              {/* Header */}
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Inbox size={18} className="text-slate-400" />
                  <span className="text-sm font-semibold text-slate-700">
                    Unified Inbox
                  </span>
                </div>
                <span className="bg-wave-blue text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                  {messages.length} new
                </span>
              </div>

              {/* Messages list */}
              <div className="divide-y divide-slate-50">
                {messages.map((msg, i) => {
                  const Icon = msg.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-3 px-5 py-4 hover:bg-slate-50 transition-colors duration-150 cursor-pointer"
                    >
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: msg.bg }}
                      >
                        <Icon size={16} style={{ color: msg.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-sm font-semibold text-slate-800 truncate">
                            {msg.sender}
                          </span>
                          <span className="text-xs text-slate-400 shrink-0 ml-2">
                            {msg.time}
                          </span>
                        </div>
                        <p className="text-sm text-slate-500 truncate">
                          {msg.text}
                        </p>
                        <span
                          className="inline-block text-xs font-medium mt-1 px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: msg.color + "15",
                            color: msg.color,
                          }}
                        >
                          {msg.platform}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom bar */}
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center gap-2">
                <div className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-400">
                  Type a reply or let AI handle it...
                </div>
                <button className="bg-wave-blue text-white text-xs font-semibold px-3 py-2 rounded-lg cursor-pointer hover:bg-[#0284C7] transition-colors duration-200 flex items-center gap-1.5">
                  <Zap size={12} />
                  AI Reply
                </button>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 right-0 md:-right-4 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-2.5 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-semibold text-slate-700">
                AI is handling replies
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
