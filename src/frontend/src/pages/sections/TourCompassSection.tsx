import { Building2, Compass, Leaf, Mountain, Plane, Users } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ExpertAdviceModal } from "../../components/ExpertAdviceModal";

const SERVICES = [
  {
    icon: Mountain,
    title: "Himalayan Adventures",
    desc: "Leh Ladakh, Spiti Valley, Uttarakhand — awe-inspiring high-altitude escapes for the bold explorer.",
    tag: "Most Popular",
    image:
      "https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Leaf,
    title: "Spiritual Journeys",
    desc: "Varanasi, Tirupati, Char Dham, Amarnath — transformative pilgrimages with expert local knowledge.",
    tag: "Signature",
    image:
      "https://images.pexels.com/photos/5534726/pexels-photo-5534726.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Building2,
    title: "Heritage & Culture",
    desc: "Rajasthan forts, Kerala backwaters, Golden Triangle — immerse in India's timeless grandeur.",
    tag: "Bestseller",
    image:
      "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Users,
    title: "Family Vacations",
    desc: "Thoughtfully crafted itineraries designed for families — safety, comfort, and fun for every age.",
    tag: "Family First",
    image:
      "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Plane,
    title: "International Tours",
    desc: "Bali, Dubai, Europe, Southeast Asia — curated international experiences with full support.",
    tag: "International",
    image:
      "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Compass,
    title: "Corporate Travel",
    desc: "Seamless business travel, incentive trips, and team outings — professionally managed end-to-end.",
    tag: "Corporate",
    image:
      "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export function TourCompassSection() {
  const [expertModalOpen, setExpertModalOpen] = useState(false);

  return (
    <>
      <section
        id="tour-compass"
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "rgba(255,255,255,0.6)" }}
        aria-label="Tour Compass — Our Services"
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
              Navigate Your Next Adventure
            </p>
            <h2
              className="font-display font-bold text-heading-lg mb-4"
              style={{ color: "#2F363F" }}
            >
              <span className="italic" style={{ color: "#4B5563" }}>
                Tour Compass
              </span>
            </h2>
            <p
              className="font-light leading-relaxed"
              style={{ color: "#6B7280" }}
            >
              Six distinct travel experiences, each handcrafted with the same
              level of care, expertise, and personal attention.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth"
                  style={{
                    border: "1px solid rgba(0,0,0,0.08)",
                    background: "#FFFFFF",
                  }}
                  data-ocid={`tour-compass-card-${i}`}
                >
                  {/* Full-bleed image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} travel experience`}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-105 duration-700"
                      loading="lazy"
                    />
                    {/* Subtle fade to white at bottom */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent 35%, rgba(255,255,255,0.85) 100%)",
                      }}
                    />
                    {/* Tag badge */}
                    <div className="absolute inset-x-4 bottom-3">
                      <span
                        className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full"
                        style={{
                          background: "rgba(47,54,63,0.75)",
                          color: "#EADDCD",
                          border: "1px solid rgba(47,54,63,0.3)",
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-5" style={{ background: "#FFFFFF" }}>
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "rgba(47,54,63,0.08)" }}
                      >
                        <Icon size={18} style={{ color: "#2F363F" }} />
                      </div>
                      <h3
                        className="font-display font-semibold text-base leading-snug pt-1"
                        style={{ color: "#2F363F" }}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <p
                      className="text-sm leading-relaxed mb-4 font-light"
                      style={{ color: "#6B7280" }}
                    >
                      {service.desc}
                    </p>
                    <button
                      type="button"
                      onClick={() => setExpertModalOpen(true)}
                      className="text-xs font-medium flex items-center gap-1.5 transition-all duration-500 group-hover:gap-2.5"
                      style={{
                        color: "#2F363F",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontSize: "0.7rem",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.color =
                          "#4B5563";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.color =
                          "#2F363F";
                      }}
                      aria-label={`Enquire about ${service.title}`}
                    >
                      Enquire Now →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <button
              type="button"
              onClick={() => setExpertModalOpen(true)}
              data-ocid="tour-compass-cta"
              className="btn-outline-gold rounded-full px-10 py-3.5 text-sm shadow-amber"
              style={{ letterSpacing: "0.08em" }}
            >
              Design My Perfect Trip
            </button>
          </motion.div>
        </div>
      </section>
      <ExpertAdviceModal
        open={expertModalOpen}
        onClose={() => setExpertModalOpen(false)}
      />
    </>
  );
}
