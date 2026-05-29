import { c as createLucideIcon, u as useTourPackages, r as reactExports, j as jsxRuntimeExports, m as motion, E as ExpertAdviceModal, M as MapPin } from "./index-DI1rXC5t.js";
import { B as Badge } from "./badge-GecIKixs.js";
import { C as Clock } from "./clock-jpGWling.js";
import { S as Star } from "./star-COH3ZxP_.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 3h12", key: "ggurg9" }],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  ["path", { d: "m6 13 8.5 8", key: "u1kupk" }],
  ["path", { d: "M6 13h3", key: "wdp6ag" }],
  ["path", { d: "M9 13c6.667 0 6.667-10 0-10", key: "1nkvk2" }]
];
const IndianRupee = createLucideIcon("indian-rupee", __iconNode);
const CATEGORIES = ["All", "Himalayan", "Heritage", "Coastal", "Spiritual"];
function formatPrice(min, max) {
  const fmt = (n) => n >= 1e5 ? `₹${(n / 1e5).toFixed(1)}L` : `₹${(n / 1e3).toFixed(0)}K`;
  return `${fmt(min)} – ${fmt(max)}`;
}
function TourCard({
  tour,
  onEnquire
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5 },
      className: "group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth flex flex-col",
      style: {
        background: "#FFFFFF",
        border: "1px solid rgba(0,0,0,0.08)"
      },
      "aria-label": `Tour package: ${tour.title}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 overflow-hidden shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: tour.image ?? "/assets/images/placeholder.svg",
              alt: `${tour.destination} travel destination`,
              className: "w-full h-full object-cover transition-all duration-700 group-hover:scale-105",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 right-3 flex items-end justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                className: "border-0 font-semibold text-xs",
                style: {
                  background: "rgba(255,255,255,0.2)",
                  color: "#FFFFFF",
                  backdropFilter: "blur(4px)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11, className: "mr-1" }),
                  tour.duration_days,
                  " Days"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                className: "border-0 font-semibold text-xs",
                style: {
                  background: "rgba(0,0,0,0.5)",
                  color: "#FFFFFF",
                  backdropFilter: "blur(4px)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Star,
                    {
                      size: 11,
                      className: "mr-1 fill-current",
                      style: { color: "rgba(255,255,255,0.85)" }
                    }
                  ),
                  tour.best_season
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-2 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "font-display font-semibold text-base leading-snug line-clamp-2 min-w-0",
              style: { color: "#2F363F" },
              children: tour.title
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-1 text-xs mb-3 font-light",
              style: { color: "#9CA3AF" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 12, style: { color: "#6B7280" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: tour.destination })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sm leading-relaxed line-clamp-2 mb-4 flex-1 font-light",
              style: { color: "#6B7280" },
              children: tour.description
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 mb-4", children: [
            tour.highlights.slice(0, 3).map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs px-2 py-0.5 rounded-full",
                style: {
                  background: "rgba(47,54,63,0.07)",
                  color: "#4B5563",
                  border: "1px solid rgba(47,54,63,0.12)"
                },
                children: h
              },
              h
            )),
            tour.highlights.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "text-xs px-2 py-0.5 rounded-full",
                style: {
                  background: "rgba(47,54,63,0.04)",
                  color: "#9CA3AF"
                },
                children: [
                  "+",
                  tour.highlights.length - 3,
                  " more"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between pt-3",
              style: { borderTop: "1px solid rgba(0,0,0,0.07)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5 text-lg font-bold font-display", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { size: 16, style: { color: "#2F363F" } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#2F363F" }, children: formatPrice(tour.price_inr_min, tour.price_inr_max) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-light", style: { color: "#9CA3AF" }, children: "per person onwards" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: onEnquire,
                    "data-ocid": `tour-card-enquire-${tour.id}`,
                    className: "btn-outline-gold rounded-xl px-4 py-2 text-xs shadow-amber",
                    children: "Enquire Now"
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}
function DestinationsSection() {
  const { packages } = useTourPackages();
  const [expertModalOpen, setExpertModalOpen] = reactExports.useState(false);
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "destinations",
        className: "py-20 md:py-28",
        style: { background: "transparent" },
        "aria-label": "Destinations & Tour Packages",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-wide section-padding", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              className: "text-center max-w-2xl mx-auto mb-12",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-label mb-3", style: { color: "#6B7280" }, children: "Handpicked Destinations" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    className: "font-display font-bold text-heading-lg mb-4",
                    style: { color: "#2F363F" },
                    children: [
                      "Featured",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", style: { color: "#4B5563" }, children: "Journeys" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-light leading-relaxed",
                    style: { color: "#6B7280" },
                    children: "Every package is handcrafted, not auto-generated — ensuring a seamless blend of comfort, exploration, and unforgettable memories."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 justify-center mb-10", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setActiveCategory(cat),
              "data-ocid": `destinations-filter-${cat.toLowerCase()}`,
              className: "px-5 py-1.5 rounded-full text-xs font-medium transition-all duration-500",
              style: activeCategory === cat ? {
                background: "#2F363F",
                color: "#EADDCD",
                border: "1px solid #2F363F",
                letterSpacing: "0.08em",
                textTransform: "uppercase"
              } : {
                background: "transparent",
                color: "#6B7280",
                border: "1px solid rgba(47,54,63,0.25)",
                letterSpacing: "0.08em",
                textTransform: "uppercase"
              },
              onMouseEnter: (e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = "rgba(47,54,63,0.55)";
                  e.currentTarget.style.color = "#2F363F";
                }
              },
              onMouseLeave: (e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = "rgba(47,54,63,0.25)";
                  e.currentTarget.style.color = "#6B7280";
                }
              },
              children: cat
            },
            cat
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: (activeCategory === "All" ? packages : packages.filter((t) => t.category === activeCategory)).map((tour) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            TourCard,
            {
              tour,
              onEnquire: () => setExpertModalOpen(true)
            },
            tour.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.2 },
              className: "text-center mt-14",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setExpertModalOpen(true),
                  "data-ocid": "destinations-custom-trip-cta",
                  className: "btn-outline-gold rounded-full px-10 py-3.5 text-sm shadow-amber",
                  style: { letterSpacing: "0.08em" },
                  children: "Request a Custom Itinerary"
                }
              )
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ExpertAdviceModal,
      {
        open: expertModalOpen,
        onClose: () => setExpertModalOpen(false)
      }
    )
  ] });
}
export {
  DestinationsSection
};
