import { Badge } from "@/components/ui/badge";
import { Clock, IndianRupee, MapPin, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ExpertAdviceModal } from "../../components/ExpertAdviceModal";
import { useTourPackages } from "../../hooks/useBackend";
import type { TourPackage } from "../../types";

const CATEGORIES = ["All", "Himalayan", "Heritage", "Coastal", "Spiritual"];

function formatPrice(min: number, max: number): string {
  const fmt = (n: number) =>
    n >= 100000 ? `₹${(n / 100000).toFixed(1)}L` : `₹${(n / 1000).toFixed(0)}K`;
  return `${fmt(min)} – ${fmt(max)}`;
}

function TourCard({
  tour,
  onEnquire,
}: { tour: TourPackage; onEnquire: () => void }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth flex flex-col"
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(0,0,0,0.08)",
      }}
      aria-label={`Tour package: ${tour.title}`}
    >
      {/* Full-bleed image */}
      <div className="relative h-52 overflow-hidden shrink-0">
        <img
          src={tour.image ?? "/assets/images/placeholder.svg"}
          alt={`${tour.destination} travel destination`}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle gradient overlay at bottom for badge readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)",
          }}
        />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <Badge
            className="border-0 font-semibold text-xs"
            style={{
              background: "rgba(255,255,255,0.2)",
              color: "#FFFFFF",
              backdropFilter: "blur(4px)",
            }}
          >
            <Clock size={11} className="mr-1" />
            {tour.duration_days} Days
          </Badge>
          <Badge
            className="border-0 font-semibold text-xs"
            style={{
              background: "rgba(0,0,0,0.5)",
              color: "#FFFFFF",
              backdropFilter: "blur(4px)",
            }}
          >
            <Star
              size={11}
              className="mr-1 fill-current"
              style={{ color: "rgba(255,255,255,0.85)" }}
            />
            {tour.best_season}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="font-display font-semibold text-base leading-snug line-clamp-2 min-w-0"
            style={{ color: "#2F363F" }}
          >
            {tour.title}
          </h3>
        </div>
        <div
          className="flex items-center gap-1 text-xs mb-3 font-light"
          style={{ color: "#9CA3AF" }}
        >
          <MapPin size={12} style={{ color: "#6B7280" }} />
          <span className="truncate">{tour.destination}</span>
        </div>
        <p
          className="text-sm leading-relaxed line-clamp-2 mb-4 flex-1 font-light"
          style={{ color: "#6B7280" }}
        >
          {tour.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1 mb-4">
          {tour.highlights.slice(0, 3).map((h) => (
            <span
              key={h}
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(47,54,63,0.07)",
                color: "#4B5563",
                border: "1px solid rgba(47,54,63,0.12)",
              }}
            >
              {h}
            </span>
          ))}
          {tour.highlights.length > 3 && (
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(47,54,63,0.04)",
                color: "#9CA3AF",
              }}
            >
              +{tour.highlights.length - 3} more
            </span>
          )}
        </div>

        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
        >
          <div>
            <div className="flex items-center gap-0.5 text-lg font-bold font-display">
              <IndianRupee size={16} style={{ color: "#2F363F" }} />
              <span style={{ color: "#2F363F" }}>
                {formatPrice(tour.price_inr_min, tour.price_inr_max)}
              </span>
            </div>
            <p className="text-[10px] font-light" style={{ color: "#9CA3AF" }}>
              per person onwards
            </p>
          </div>
          <button
            type="button"
            onClick={onEnquire}
            data-ocid={`tour-card-enquire-${tour.id}`}
            className="btn-outline-gold rounded-xl px-4 py-2 text-xs shadow-amber"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export function DestinationsSection() {
  const { packages } = useTourPackages();
  const [expertModalOpen, setExpertModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <section
        id="destinations"
        className="py-20 md:py-28"
        style={{ background: "transparent" }}
        aria-label="Destinations & Tour Packages"
      >
        <div className="container-wide section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="text-label mb-3" style={{ color: "#6B7280" }}>
              Handpicked Destinations
            </p>
            <h2
              className="font-display font-bold text-heading-lg mb-4"
              style={{ color: "#2F363F" }}
            >
              Featured{" "}
              <span className="italic" style={{ color: "#4B5563" }}>
                Journeys
              </span>
            </h2>
            <p
              className="font-light leading-relaxed"
              style={{ color: "#6B7280" }}
            >
              Every package is handcrafted, not auto-generated — ensuring a
              seamless blend of comfort, exploration, and unforgettable
              memories.
            </p>
          </motion.div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                data-ocid={`destinations-filter-${cat.toLowerCase()}`}
                className="px-5 py-1.5 rounded-full text-xs font-medium transition-all duration-500"
                style={
                  activeCategory === cat
                    ? {
                        background: "#2F363F",
                        color: "#EADDCD",
                        border: "1px solid #2F363F",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }
                    : {
                        background: "transparent",
                        color: "#6B7280",
                        border: "1px solid rgba(47,54,63,0.25)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }
                }
                onMouseEnter={(e) => {
                  if (activeCategory !== cat) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(47,54,63,0.55)";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#2F363F";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== cat) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(47,54,63,0.25)";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#6B7280";
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === "All"
              ? packages
              : packages.filter((t) => t.category === activeCategory)
            ).map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                onEnquire={() => setExpertModalOpen(true)}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-14"
          >
            <button
              type="button"
              onClick={() => setExpertModalOpen(true)}
              data-ocid="destinations-custom-trip-cta"
              className="btn-outline-gold rounded-full px-10 py-3.5 text-sm shadow-amber"
              style={{ letterSpacing: "0.08em" }}
            >
              Request a Custom Itinerary
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
