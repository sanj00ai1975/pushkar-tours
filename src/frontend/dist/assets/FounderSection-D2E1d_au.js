import { c as createLucideIcon, j as jsxRuntimeExports, m as motion } from "./index-BFFnuUgj.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
];
const Database = createLucideIcon("database", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
const RIYA_HIGHLIGHTS = [
  { label: "10+ Years", desc: "Industry Experience" },
  { label: "Raj Travels", desc: "Bangalore" },
  { label: "Viva Tourism", desc: "Mumbai" },
  { label: "Founded 2021", desc: "Pushkar Tours" }
];
const SANJAY_HIGHLIGHTS = [
  { icon: TrendingUp, text: "Digital Marketing & Brand Growth" },
  { icon: Database, text: "Technology & Systems" },
  { icon: Award, text: "Financial & Backend Operations" }
];
function FounderSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "about-founders",
      className: "py-20 md:py-28",
      style: { background: "rgba(255,255,255,0.6)" },
      "aria-label": "Our Founders",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-wide section-padding", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "text-center max-w-xl mx-auto mb-14",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-label mb-3", style: { color: "#6B7280" }, children: "The People Behind the Journeys" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h2",
                {
                  className: "font-display font-bold text-heading-lg mb-3",
                  style: { color: "#2F363F" },
                  children: [
                    "Our",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", style: { color: "#4B5563" }, children: "Founder's Story" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-light leading-relaxed",
                  style: { color: "#6B7280" },
                  children: "Built on passion, driven by care — meet the team that turns your travel dreams into reality."
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -24 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.65 },
              className: "rounded-2xl overflow-hidden shadow-card-hover",
              style: {
                background: "#FFFFFF",
                border: "1px solid rgba(0,0,0,0.08)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: "/assets/generated/founder-riya.dim_600x700.jpg",
                      alt: "Riya Mamghadi — Founder of Pushkar Tours, passionate travel expert",
                      className: "w-full h-72 object-cover object-top",
                      loading: "lazy"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0",
                      style: {
                        background: "linear-gradient(to top, rgba(255,255,255,0.95) 0%, transparent 60%)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full",
                      style: {
                        background: "rgba(47,54,63,0.85)",
                        color: "#EADDCD",
                        border: "1px solid rgba(47,54,63,0.3)",
                        letterSpacing: "0.15em"
                      },
                      children: "Founder & Travel Director"
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display font-bold text-xl mb-1",
                      style: { color: "#2F363F" },
                      children: "Mrs. Riya Mamghadi"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm mb-4 leading-relaxed font-light",
                      style: { color: "#6B7280" },
                      children: "A passionate traveler with over 10 years of hands-on experience in the travel industry. Her journey began with reputed companies like Raj Travels (Bangalore) and Viva Tourism (Mumbai), where she gained deep practical knowledge of destinations, operations, and customer expectations."
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "blockquote",
                    {
                      className: "rounded-xl p-4 text-sm italic leading-relaxed mb-5 border-l-4",
                      style: {
                        background: "rgba(47,54,63,0.04)",
                        borderColor: "rgba(47,54,63,0.35)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#4B5563" }, children: '"Travel planning should feel personal, honest, and stress-free. That belief shapes every journey we create."' })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: RIYA_HIGHLIGHTS.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "rounded-xl p-3 text-center",
                      style: {
                        background: "rgba(47,54,63,0.04)",
                        border: "1px solid rgba(47,54,63,0.08)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-display font-bold text-sm",
                            style: { color: "#2F363F" },
                            children: h.label
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-xs mt-0.5 font-light",
                            style: { color: "#9CA3AF" },
                            children: h.desc
                          }
                        )
                      ]
                    },
                    h.label
                  )) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 24 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.65 },
              className: "rounded-2xl overflow-hidden shadow-card-hover",
              style: {
                background: "#FFFFFF",
                border: "1px solid rgba(0,0,0,0.08)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: "/assets/generated/founder-sanjay.dim_600x700.jpg",
                      alt: "Sanjay Mamghadi — Co-Founder of Pushkar Tours, technology and strategy expert",
                      className: "w-full h-72 object-cover object-top",
                      loading: "lazy"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0",
                      style: {
                        background: "linear-gradient(to top, rgba(255,255,255,0.95) 0%, transparent 60%)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full",
                      style: {
                        background: "rgba(47,54,63,0.85)",
                        border: "1px solid rgba(47,54,63,0.3)",
                        color: "#EADDCD",
                        letterSpacing: "0.15em"
                      },
                      children: "Co-Founder & Technology Director"
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display font-bold text-xl mb-1",
                      style: { color: "#2F363F" },
                      children: "Mr. Sanjay Mamghadi"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm mb-4 leading-relaxed font-light",
                      style: { color: "#6B7280" },
                      children: "Brings over 25 years of experience in the IT industry — adding a strong foundation of technology, analytics, and structured growth to Pushkar Tours. With expertise in Business Intelligence, Analytics, and AI-driven marketing, he ensures efficient operations and strategic scaling."
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-5", children: SANJAY_HIGHLIGHTS.map((item) => {
                    const Icon = item.icon;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center gap-3 rounded-xl p-3",
                        style: {
                          background: "rgba(47,54,63,0.04)",
                          border: "1px solid rgba(47,54,63,0.07)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                              style: { background: "rgba(47,54,63,0.08)" },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16, style: { color: "#2F363F" } })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "text-sm font-light",
                              style: { color: "#4B5563" },
                              children: item.text
                            }
                          )
                        ]
                      },
                      item.text
                    );
                  }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "blockquote",
                    {
                      className: "rounded-xl p-4 text-sm italic leading-relaxed border-l-4",
                      style: {
                        background: "rgba(47,54,63,0.04)",
                        borderColor: "rgba(47,54,63,0.35)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#4B5563" }, children: '"Build a sustainable travel brand that creates value, generates employment, and contributes to community growth."' })
                    }
                  )
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.2 },
            className: "mt-10 rounded-2xl p-8 text-center",
            style: {
              background: "rgba(47,54,63,0.06)",
              border: "1px solid rgba(47,54,63,0.12)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display font-bold text-xl md:text-2xl mb-2",
                  style: { color: "#2F363F" },
                  children: "We combine the warmth of a personal travel advisor"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-light", style: { color: "#6B7280" }, children: "with the professionalism of a structured travel company." })
            ]
          }
        )
      ] })
    }
  );
}
export {
  FounderSection
};
