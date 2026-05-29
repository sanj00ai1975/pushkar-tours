import {
  CheckCircle2,
  Clock,
  Cpu,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

const REASONS = [
  {
    icon: Sparkles,
    title: "True Personalization",
    desc: "Every trip is designed after understanding your needs, not just your destination. No pre-made packages — only journeys crafted for you.",
    stat: "100%",
    statLabel: "Custom",
  },
  {
    icon: HeartHandshake,
    title: "Trust & Transparency",
    desc: "Clear communication, honest guidance, and no hidden surprises — ever. We operate with complete openness on pricing and policies.",
    stat: "0",
    statLabel: "Hidden Costs",
  },
  {
    icon: Cpu,
    title: "Technology + Human Touch",
    desc: "Smart planning powered by IT expertise from our Co-Founder Sanjay, delivered with the warmth and care of a personal travel advisor.",
    stat: "25+",
    statLabel: "Years IT Expertise",
  },
  {
    icon: ShieldCheck,
    title: "Experience-Driven Planning",
    desc: "Backed by 10+ years of real industry experience by Founder Riya — not just online listings. Every detail comes from on-ground knowledge.",
    stat: "10+",
    statLabel: "Years Experience",
  },
  {
    icon: Clock,
    title: "End-to-End Peace of Mind",
    desc: "We handle everything from planning to return — flights, hotels, guides, transfers — so you simply enjoy your journey.",
    stat: "24/7",
    statLabel: "Travel Support",
  },
  {
    icon: CheckCircle2,
    title: "Long-Term Relationships",
    desc: "We don't treat you as a booking. We build lasting travel partnerships, and our repeat client rate speaks for itself.",
    stat: "80%",
    statLabel: "Repeat Clients",
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="py-20 md:py-28 relative overflow-hidden"
      aria-label="Why Choose Pushkar Tours"
      style={{ background: "rgba(255,255,255,0.6)" }}
    >
      <div className="container-wide section-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-label mb-3" style={{ color: "#6B7280" }}>
            The Pushkar Tours Difference
          </p>
          <h2
            className="font-display font-bold text-heading-lg mb-4"
            style={{ color: "#2F363F" }}
          >
            Why Choose{" "}
            <span className="italic" style={{ color: "#4B5563" }}>
              Us?
            </span>
          </h2>
          <p
            className="font-light leading-relaxed"
            style={{ color: "#6B7280" }}
          >
            Because your journey deserves more than a standard package. With
            Pushkar Tours, you don't just travel — you travel stress-free and
            confidently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl p-6 transition-smooth hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  border: "1px solid rgba(0,0,0,0.07)",
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-smooth group-hover:scale-110"
                    style={{ background: "rgba(47,54,63,0.08)" }}
                  >
                    <Icon size={22} style={{ color: "#2F363F" }} />
                  </div>
                  <div className="text-right">
                    <p
                      className="font-display font-bold text-xl"
                      style={{ color: "#2F363F" }}
                    >
                      {reason.stat}
                    </p>
                    <p
                      className="text-[10px] font-light tracking-wider uppercase"
                      style={{
                        color: "#9CA3AF",
                        letterSpacing: "0.12em",
                      }}
                    >
                      {reason.statLabel}
                    </p>
                  </div>
                </div>
                <h3
                  className="font-display font-semibold mb-2"
                  style={{ color: "#2F363F" }}
                >
                  {reason.title}
                </h3>
                <p
                  className="text-sm leading-relaxed font-light"
                  style={{ color: "#6B7280" }}
                >
                  {reason.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
