import { c as createLucideIcon, j as jsxRuntimeExports, m as motion, S as Shield } from "./index-DI1rXC5t.js";
import { U as Users } from "./users-C8RkUFpz.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode);
const NICHE_ITEMS = [
  {
    icon: Users,
    title: "Family-Centric Planning",
    desc: "Specially designed for Indian families who value comfort, safety, and well-planned itineraries."
  },
  {
    icon: Heart,
    title: "Spiritual & Soulful Travel",
    desc: "Carefully curated pilgrimages and peaceful journeys that go beyond tourism."
  },
  {
    icon: Shield,
    title: "Hassle-Free Execution",
    desc: "From planning to return, everything is handled with precision and care."
  },
  {
    icon: Globe,
    title: "Relationship-Driven Service",
    desc: "We build long-term travel relationships — not just bookings."
  }
];
function AboutSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "about",
      className: "py-20 md:py-28",
      style: { background: "transparent" },
      "aria-label": "About Pushkar Tours",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-wide section-padding", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "max-w-2xl mb-14",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-label mb-3", style: { color: "#6B7280" }, children: "Who We Are" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h2",
                {
                  className: "font-display font-bold text-heading-lg mb-5",
                  style: { color: "#2F363F" },
                  children: [
                    "Personalized Travel Design",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", style: { color: "#4B5563" }, children: "from Mumbai" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-base md:text-lg leading-relaxed font-light",
                  style: { color: "#4B5563" },
                  children: "Pushkar Tours is not just a travel agency — it is a personalized travel design company built for travelers who seek more than standard packages. We specialize in crafting deeply customized, thoughtfully planned, and emotionally enriching travel experiences across India and the world."
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -24 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.6 },
                className: "rounded-2xl p-6 shadow-card",
                style: {
                  background: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(0,0,0,0.08)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-label mb-3", style: { color: "#6B7280" }, children: "Our Vision" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display font-medium text-lg leading-relaxed",
                      style: { color: "#2F363F" },
                      children: '"To become a trusted travel partner for Indian families and global explorers, known for personalized journeys and meaningful travel experiences."'
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -24 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: 0.1 },
                className: "rounded-2xl p-6 shadow-card",
                style: {
                  background: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(0,0,0,0.08)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-label mb-3", style: { color: "#6B7280" }, children: "Our Mission" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display font-medium text-lg leading-relaxed",
                      style: { color: "#2F363F" },
                      children: '"To design customized, reliable, and emotionally fulfilling travel experiences while building long-term relationships based on trust, care, and consistency."'
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.blockquote,
              {
                initial: { opacity: 0, x: -24 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: 0.2 },
                className: "rounded-2xl p-6",
                style: {
                  background: "rgba(47,54,63,0.06)",
                  border: "1px solid rgba(47,54,63,0.15)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display font-semibold text-lg italic leading-relaxed",
                      style: { color: "#2F363F" },
                      children: '"In a world of mass tourism, we stand for care, customization, and connection."'
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm mt-3 font-medium",
                      style: { color: "rgba(47,54,63,0.55)" },
                      children: "— Riya Mamghadi, Founder"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: NICHE_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: i * 0.1 },
                className: "rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-smooth group",
                style: {
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(0,0,0,0.07)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-smooth group-hover:scale-110",
                      style: { background: "rgba(47,54,63,0.08)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, style: { color: "#2F363F" } })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display font-semibold text-sm mb-1.5",
                      style: { color: "#2F363F" },
                      children: item.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs leading-relaxed font-light",
                      style: { color: "#6B7280" },
                      children: item.desc
                    }
                  )
                ]
              },
              item.title
            );
          }) })
        ] })
      ] })
    }
  );
}
export {
  AboutSection
};
