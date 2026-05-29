import { motion } from "motion/react";
import { useState } from "react";
import { ExpertAdviceModal } from "../../components/ExpertAdviceModal";

const HERO_STATS = [
  { value: "500+", label: "Happy Families" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Destinations" },
  { value: "100%", label: "Personalised" },
];

export function HeroSection() {
  const [expertModalOpen, setExpertModalOpen] = useState(false);

  function scrollTo(id: string) {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <section
        id="home"
        className="relative w-full min-h-screen flex flex-col"
        aria-label="Hero"
      >
        {/* Background image — bright sea beach with clear blue sky */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Beautiful bright sea beach with crystal clear blue sky and turquoise waters"
            className="w-full h-full object-cover object-center animate-ken-burns"
            loading="eager"
            fetchPriority="high"
          />
          {/* Light overlay — subtle dark vignette so text stays readable */}
          <div
            className="absolute inset-0"
            style={{
              background: "rgba(0, 0, 0, 0.30)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center section-padding container-wide pt-32 pb-24">
          <div className="max-w-3xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span
                className="text-[10px] font-light px-4 py-1.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                ✦ Personalized Travel Design
              </span>
            </motion.div>

            {/* Headline — large elegant serif */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="font-display font-bold leading-[1.05] mb-6"
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                color: "#FFFFFF",
                textShadow: "0 2px 20px rgba(0,0,0,0.3)",
              }}
            >
              Your Journey,
              <br />
              <span className="italic" style={{ color: "#F0F8FF" }}>
                Our Passion
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.52 }}
              className="text-base md:text-lg leading-relaxed mb-10 font-light max-w-xl"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              Curated family travel experiences across India's most breathtaking
              landscapes. Handcrafted itineraries. Zero stress. Pure memories.
            </motion.p>

            {/* CTAs — outline-white style */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.68 }}
              className="flex flex-wrap gap-4"
            >
              <button
                type="button"
                onClick={() => setExpertModalOpen(true)}
                data-ocid="hero-cta-expert"
                className="btn-outline-gold rounded-full px-8 py-3.5 text-sm shadow-amber-lg"
                style={{ letterSpacing: "0.08em" }}
              >
                Get Expert Advice
              </button>
              <button
                type="button"
                onClick={() => scrollTo("destinations")}
                data-ocid="hero-cta-explore"
                className="btn-outline-gold rounded-full px-8 py-3.5 text-sm shadow-amber-lg"
                style={{ letterSpacing: "0.08em" }}
              >
                Explore Destinations
              </button>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.88 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px max-w-2xl overflow-hidden rounded-2xl"
            style={{ background: "rgba(255,255,255,0.15)" }}
          >
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center py-5 px-2 text-center"
                style={{
                  background: "rgba(0, 0, 0, 0.35)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span
                  className="font-display font-bold text-2xl md:text-3xl"
                  style={{ color: "#FFFFFF" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[11px] mt-1 font-light tracking-wider uppercase"
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    letterSpacing: "0.12em",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="relative z-10 flex justify-center pb-10"
        >
          <button
            type="button"
            onClick={() => scrollTo("about")}
            aria-label="Scroll to next section"
            className="flex flex-col items-center gap-2 transition-smooth"
            style={{ color: "rgba(255,255,255,0.5)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color =
                "rgba(255,255,255,0.85)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color =
                "rgba(255,255,255,0.5)";
            }}
          >
            <span
              className="text-[9px] font-light"
              style={{ letterSpacing: "0.25em", textTransform: "uppercase" }}
            >
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }}
              className="w-px h-8 rounded-full"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)",
              }}
            />
          </button>
        </motion.div>
      </section>

      <ExpertAdviceModal
        open={expertModalOpen}
        onClose={() => setExpertModalOpen(false)}
      />
    </>
  );
}
