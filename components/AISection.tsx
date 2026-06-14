import { Bot, UserCheck, ToggleRight, Sparkles } from "lucide-react";

const aiCapabilities = [
  "Answer frequently asked questions",
  "Share pricing and availability",
  "Recommend packages and experiences",
  "Send booking links automatically",
  "Handle common customer requests",
];

const conversation = [
  {
    role: "customer" as const,
    text: "Hi! What's the price for a beginner surf lesson?",
    time: "14:23",
  },
  {
    role: "ai" as const,
    text: "Hey! Our beginner lessons are €55/person and include board + wetsuit rental. We have slots available this Saturday at 9am and 2pm. Want me to send you a booking link?",
    time: "14:23",
  },
  {
    role: "customer" as const,
    text: "Perfect! Yes please send it for Saturday 9am",
    time: "14:24",
  },
  {
    role: "ai" as const,
    text: "Done! Here's your booking link 🔗 waveclubs.com/book/costa-surf/sat-9am — it expires in 24h. See you on the beach! 🏄",
    time: "14:24",
  },
];

export default function AISection() {
  return (
    <section
      id="ai"
      className="py-24 px-6 relative overflow-hidden bg-black"
    >
      {/* Subtle dot grid — matches hero texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.032] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Chat mockup */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/6 border border-white/12 rounded-2xl overflow-hidden backdrop-blur-sm">
              {/* Chat header */}
              <div className="px-5 py-4 border-b border-white/8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-wave-blue/20 flex items-center justify-center">
                    <Bot size={16} className="text-wave-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      WaveClubs AI
                    </p>
                    <p className="text-xs text-white/40">Active • Costa Surf Academy</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full">
                  <ToggleRight size={14} className="text-green-400" />
                  <span className="text-xs font-medium text-green-400">AI On</span>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 flex flex-col gap-3">
                {conversation.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "ai" ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-white ${
                        msg.role === "ai"
                          ? "bg-white/8 rounded-tl-sm"
                          : "rounded-tr-sm"
                      }`}
                      style={
                        msg.role === "customer"
                          ? { background: "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)" }
                          : undefined
                      }
                    >
                      {msg.role === "ai" && (
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <Sparkles size={10} className="text-wave-blue" />
                          <span className="text-[10px] font-medium text-wave-blue">
                            AI
                          </span>
                        </div>
                      )}
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <p
                        className={`text-[10px] mt-1 ${
                          msg.role === "ai" ? "text-white/30" : "text-white/60"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Take over button */}
              <div className="px-5 pb-5">
                <button className="w-full flex items-center justify-center gap-2 bg-white/6 hover:bg-white/10 border border-white/12 text-white/75 text-sm font-medium py-2.5 rounded-xl transition-colors duration-200 cursor-pointer">
                  <UserCheck size={16} />
                  Take over conversation
                </button>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2">
            <p className="text-xs font-bold text-wave-blue uppercase tracking-[0.12em] mb-3">
              AI Automation
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5">
              Human when needed.
              <br />
              AI when possible.
            </h2>
            <p className="text-lg text-white/60 leading-[1.7] mb-8">
              Toggle AI on and let WaveClubs handle routine inquiries 24/7.
              When a customer needs a human touch, jump in with one click.
              You&apos;re always in control.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {aiCapabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-wave-blue/20 flex items-center justify-center shrink-0">
                    <Sparkles size={10} className="text-wave-blue" />
                  </div>
                  <span className="text-sm text-white/70">{cap}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/6 border border-white/12 rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-wave-blue/20 flex items-center justify-center shrink-0">
                <UserCheck size={20} className="text-wave-blue" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-1">
                  Always in control
                </p>
                <p className="text-sm text-white/50 leading-relaxed">
                  The business can jump into any conversation at any time. AI
                  assistance disappears — human support takes over seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
