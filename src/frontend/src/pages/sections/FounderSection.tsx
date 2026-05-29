import { Award, Database, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const RIYA_HIGHLIGHTS = [
  { label: "10+ Years", desc: "Industry Experience" },
  { label: "Raj Travels", desc: "Bangalore" },
  { label: "Viva Tourism", desc: "Mumbai" },
  { label: "Founded 2021", desc: "Pushkar Tours" },
];

const SANJAY_HIGHLIGHTS = [
  { icon: TrendingUp, text: "Digital Marketing & Brand Growth" },
  { icon: Database, text: "Technology & Systems" },
  { icon: Award, text: "Financial & Backend Operations" },
];

export function FounderSection() {
  return (
    <section
      id="about-founders"
      className="py-20 md:py-28"
      style={{ background: "rgba(255,255,255,0.6)" }}
      aria-label="Our Founders"
    >
      <div className="container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <p className="text-label mb-3" style={{ color: "#6B7280" }}>
            The People Behind the Journeys
          </p>
          <h2
            className="font-display font-bold text-heading-lg mb-3"
            style={{ color: "#2F363F" }}
          >
            Our{" "}
            <span className="italic" style={{ color: "#4B5563" }}>
              Founder's Story
            </span>
          </h2>
          <p
            className="font-light leading-relaxed"
            style={{ color: "#6B7280" }}
          >
            Built on passion, driven by care — meet the team that turns your
            travel dreams into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Riya — Founder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-2xl overflow-hidden shadow-card-hover"
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <div className="relative">
              <img
                src="/assets/generated/founder-riya.dim_600x700.jpg"
                alt="Riya Mamghadi — Founder of Pushkar Tours, passionate travel expert"
                className="w-full h-72 object-cover object-top"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(255,255,255,0.95) 0%, transparent 60%)",
                }}
              />
              <div className="absolute bottom-4 left-4">
                <span
                  className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(47,54,63,0.85)",
                    color: "#EADDCD",
                    border: "1px solid rgba(47,54,63,0.3)",
                    letterSpacing: "0.15em",
                  }}
                >
                  Founder & Travel Director
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3
                className="font-display font-bold text-xl mb-1"
                style={{ color: "#2F363F" }}
              >
                Mrs. Riya Mamghadi
              </h3>
              <p
                className="text-sm mb-4 leading-relaxed font-light"
                style={{ color: "#6B7280" }}
              >
                A passionate traveler with over 10 years of hands-on experience
                in the travel industry. Her journey began with reputed companies
                like Raj Travels (Bangalore) and Viva Tourism (Mumbai), where
                she gained deep practical knowledge of destinations, operations,
                and customer expectations.
              </p>
              <blockquote
                className="rounded-xl p-4 text-sm italic leading-relaxed mb-5 border-l-4"
                style={{
                  background: "rgba(47,54,63,0.04)",
                  borderColor: "rgba(47,54,63,0.35)",
                }}
              >
                <span style={{ color: "#4B5563" }}>
                  "Travel planning should feel personal, honest, and
                  stress-free. That belief shapes every journey we create."
                </span>
              </blockquote>
              <div className="grid grid-cols-2 gap-3">
                {RIYA_HIGHLIGHTS.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-xl p-3 text-center"
                    style={{
                      background: "rgba(47,54,63,0.04)",
                      border: "1px solid rgba(47,54,63,0.08)",
                    }}
                  >
                    <p
                      className="font-display font-bold text-sm"
                      style={{ color: "#2F363F" }}
                    >
                      {h.label}
                    </p>
                    <p
                      className="text-xs mt-0.5 font-light"
                      style={{ color: "#9CA3AF" }}
                    >
                      {h.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sanjay — Co-Founder */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-2xl overflow-hidden shadow-card-hover"
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <div className="relative">
              <img
                src="/assets/generated/founder-sanjay.dim_600x700.jpg"
                alt="Sanjay Mamghadi — Co-Founder of Pushkar Tours, technology and strategy expert"
                className="w-full h-72 object-cover object-top"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(255,255,255,0.95) 0%, transparent 60%)",
                }}
              />
              <div className="absolute bottom-4 left-4">
                <span
                  className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(47,54,63,0.85)",
                    border: "1px solid rgba(47,54,63,0.3)",
                    color: "#EADDCD",
                    letterSpacing: "0.15em",
                  }}
                >
                  Co-Founder & Technology Director
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3
                className="font-display font-bold text-xl mb-1"
                style={{ color: "#2F363F" }}
              >
                Mr. Sanjay Mamghadi
              </h3>
              <p
                className="text-sm mb-4 leading-relaxed font-light"
                style={{ color: "#6B7280" }}
              >
                Brings over 25 years of experience in the IT industry — adding a
                strong foundation of technology, analytics, and structured
                growth to Pushkar Tours. With expertise in Business
                Intelligence, Analytics, and AI-driven marketing, he ensures
                efficient operations and strategic scaling.
              </p>

              <div className="space-y-2 mb-5">
                {SANJAY_HIGHLIGHTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 rounded-xl p-3"
                      style={{
                        background: "rgba(47,54,63,0.04)",
                        border: "1px solid rgba(47,54,63,0.07)",
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: "rgba(47,54,63,0.08)" }}
                      >
                        <Icon size={16} style={{ color: "#2F363F" }} />
                      </div>
                      <span
                        className="text-sm font-light"
                        style={{ color: "#4B5563" }}
                      >
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <blockquote
                className="rounded-xl p-4 text-sm italic leading-relaxed border-l-4"
                style={{
                  background: "rgba(47,54,63,0.04)",
                  borderColor: "rgba(47,54,63,0.35)",
                }}
              >
                <span style={{ color: "#4B5563" }}>
                  "Build a sustainable travel brand that creates value,
                  generates employment, and contributes to community growth."
                </span>
              </blockquote>
            </div>
          </motion.div>
        </div>

        {/* Company blurb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 rounded-2xl p-8 text-center"
          style={{
            background: "rgba(47,54,63,0.06)",
            border: "1px solid rgba(47,54,63,0.12)",
          }}
        >
          <p
            className="font-display font-bold text-xl md:text-2xl mb-2"
            style={{ color: "#2F363F" }}
          >
            We combine the warmth of a personal travel advisor
          </p>
          <p className="text-lg font-light" style={{ color: "#6B7280" }}>
            with the professionalism of a structured travel company.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
