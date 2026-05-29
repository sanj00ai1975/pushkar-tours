import { Globe, Heart, Shield, Users } from "lucide-react";
import { motion } from "motion/react";

const NICHE_ITEMS = [
  {
    icon: Users,
    title: "Family-Centric Planning",
    desc: "Specially designed for Indian families who value comfort, safety, and well-planned itineraries.",
  },
  {
    icon: Heart,
    title: "Spiritual & Soulful Travel",
    desc: "Carefully curated pilgrimages and peaceful journeys that go beyond tourism.",
  },
  {
    icon: Shield,
    title: "Hassle-Free Execution",
    desc: "From planning to return, everything is handled with precision and care.",
  },
  {
    icon: Globe,
    title: "Relationship-Driven Service",
    desc: "We build long-term travel relationships — not just bookings.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28"
      style={{ background: "transparent" }}
      aria-label="About Pushkar Tours"
    >
      <div className="container-wide section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-label mb-3" style={{ color: "#6B7280" }}>
            Who We Are
          </p>
          <h2
            className="font-display font-bold text-heading-lg mb-5"
            style={{ color: "#2F363F" }}
          >
            Personalized Travel Design{" "}
            <span className="italic" style={{ color: "#4B5563" }}>
              from Mumbai
            </span>
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed font-light"
            style={{ color: "#4B5563" }}
          >
            Pushkar Tours is not just a travel agency — it is a personalized
            travel design company built for travelers who seek more than
            standard packages. We specialize in crafting deeply customized,
            thoughtfully planned, and emotionally enriching travel experiences
            across India and the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left — Mission & Vision */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-6 shadow-card"
              style={{
                background: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <p className="text-label mb-3" style={{ color: "#6B7280" }}>
                Our Vision
              </p>
              <p
                className="font-display font-medium text-lg leading-relaxed"
                style={{ color: "#2F363F" }}
              >
                "To become a trusted travel partner for Indian families and
                global explorers, known for personalized journeys and meaningful
                travel experiences."
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl p-6 shadow-card"
              style={{
                background: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <p className="text-label mb-3" style={{ color: "#6B7280" }}>
                Our Mission
              </p>
              <p
                className="font-display font-medium text-lg leading-relaxed"
                style={{ color: "#2F363F" }}
              >
                "To design customized, reliable, and emotionally fulfilling
                travel experiences while building long-term relationships based
                on trust, care, and consistency."
              </p>
            </motion.div>
            <motion.blockquote
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(47,54,63,0.06)",
                border: "1px solid rgba(47,54,63,0.15)",
              }}
            >
              <p
                className="font-display font-semibold text-lg italic leading-relaxed"
                style={{ color: "#2F363F" }}
              >
                "In a world of mass tourism, we stand for care, customization,
                and connection."
              </p>
              <p
                className="text-sm mt-3 font-medium"
                style={{ color: "rgba(47,54,63,0.55)" }}
              >
                — Riya Mamghadi, Founder
              </p>
            </motion.blockquote>
          </div>

          {/* Right — Niche grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {NICHE_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-smooth group"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(0,0,0,0.07)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-smooth group-hover:scale-110"
                    style={{ background: "rgba(47,54,63,0.08)" }}
                  >
                    <Icon size={20} style={{ color: "#2F363F" }} />
                  </div>
                  <h3
                    className="font-display font-semibold text-sm mb-1.5"
                    style={{ color: "#2F363F" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed font-light"
                    style={{ color: "#6B7280" }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
