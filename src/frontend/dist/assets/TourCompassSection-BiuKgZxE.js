import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as motion, E as ExpertAdviceModal } from "./index-DI1rXC5t.js";
import { U as Users } from "./users-C8RkUFpz.js";
import { P as Plane, C as Compass } from "./plane-RpuMQOyL.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
];
const Leaf = createLucideIcon("leaf", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }]];
const Mountain = createLucideIcon("mountain", __iconNode);
const SERVICES = [
  {
    icon: Mountain,
    title: "Himalayan Adventures",
    desc: "Leh Ladakh, Spiti Valley, Uttarakhand — awe-inspiring high-altitude escapes for the bold explorer.",
    tag: "Most Popular",
    image: "https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Leaf,
    title: "Spiritual Journeys",
    desc: "Varanasi, Tirupati, Char Dham, Amarnath — transformative pilgrimages with expert local knowledge.",
    tag: "Signature",
    image: "https://images.pexels.com/photos/5534726/pexels-photo-5534726.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Building2,
    title: "Heritage & Culture",
    desc: "Rajasthan forts, Kerala backwaters, Golden Triangle — immerse in India's timeless grandeur.",
    tag: "Bestseller",
    image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Users,
    title: "Family Vacations",
    desc: "Thoughtfully crafted itineraries designed for families — safety, comfort, and fun for every age.",
    tag: "Family First",
    image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Plane,
    title: "International Tours",
    desc: "Bali, Dubai, Europe, Southeast Asia — curated international experiences with full support.",
    tag: "International",
    image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    icon: Compass,
    title: "Corporate Travel",
    desc: "Seamless business travel, incentive trips, and team outings — professionally managed end-to-end.",
    tag: "Corporate",
    image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];
function TourCompassSection() {
  const [expertModalOpen, setExpertModalOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "tour-compass",
        className: "py-20 md:py-28 relative overflow-hidden",
        style: { background: "rgba(255,255,255,0.6)" },
        "aria-label": "Tour Compass — Our Services",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-wide section-padding relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              className: "text-center max-w-2xl mx-auto mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-label mb-3", style: { color: "#6B7280" }, children: "Navigate Your Next Adventure" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "font-display font-bold text-heading-lg mb-4",
                    style: { color: "#2F363F" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", style: { color: "#4B5563" }, children: "Tour Compass" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-light leading-relaxed",
                    style: { color: "#6B7280" },
                    children: "Six distinct travel experiences, each handcrafted with the same level of care, expertise, and personal attention."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: SERVICES.map((service, i) => {
            const Icon = service.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: i * 0.08 },
                className: "group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth",
                style: {
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: "#FFFFFF"
                },
                "data-ocid": `tour-compass-card-${i}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 overflow-hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: service.image,
                        alt: `${service.title} travel experience`,
                        className: "w-full h-full object-cover transition-smooth group-hover:scale-105 duration-700",
                        loading: "lazy"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute inset-0",
                        style: {
                          background: "linear-gradient(to bottom, transparent 35%, rgba(255,255,255,0.85) 100%)"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-4 bottom-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full",
                        style: {
                          background: "rgba(47,54,63,0.75)",
                          color: "#EADDCD",
                          border: "1px solid rgba(47,54,63,0.3)",
                          backdropFilter: "blur(4px)"
                        },
                        children: service.tag
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", style: { background: "#FFFFFF" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-9 h-9 rounded-xl flex items-center justify-center shrink-0",
                          style: { background: "rgba(47,54,63,0.08)" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, style: { color: "#2F363F" } })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h3",
                        {
                          className: "font-display font-semibold text-base leading-snug pt-1",
                          style: { color: "#2F363F" },
                          children: service.title
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm leading-relaxed mb-4 font-light",
                        style: { color: "#6B7280" },
                        children: service.desc
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setExpertModalOpen(true),
                        className: "text-xs font-medium flex items-center gap-1.5 transition-all duration-500 group-hover:gap-2.5",
                        style: {
                          color: "#2F363F",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          fontSize: "0.7rem"
                        },
                        onMouseEnter: (e) => {
                          e.currentTarget.style.color = "#4B5563";
                        },
                        onMouseLeave: (e) => {
                          e.currentTarget.style.color = "#2F363F";
                        },
                        "aria-label": `Enquire about ${service.title}`,
                        children: "Enquire Now →"
                      }
                    )
                  ] })
                ]
              },
              service.title
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              className: "text-center mt-14",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setExpertModalOpen(true),
                  "data-ocid": "tour-compass-cta",
                  className: "btn-outline-gold rounded-full px-10 py-3.5 text-sm shadow-amber",
                  style: { letterSpacing: "0.08em" },
                  children: "Design My Perfect Trip"
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
  TourCompassSection
};
