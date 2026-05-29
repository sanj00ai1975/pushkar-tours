import { r as reactExports, j as jsxRuntimeExports, m as motion, E as ExpertAdviceModal } from "./index-DI1rXC5t.js";
const HERO_STATS = [
  { value: "500+", label: "Happy Families" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Destinations" },
  { value: "100%", label: "Personalised" }
];
function HeroSection() {
  const [expertModalOpen, setExpertModalOpen] = reactExports.useState(false);
  function scrollTo(id) {
    var _a;
    (_a = document.getElementById(id)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "home",
        className: "relative w-full min-h-screen flex flex-col",
        "aria-label": "Hero",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
                alt: "Beautiful bright sea beach with crystal clear blue sky and turquoise waters",
                className: "w-full h-full object-cover object-center animate-ken-burns",
                loading: "eager",
                fetchPriority: "high"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0",
                style: {
                  background: "rgba(0, 0, 0, 0.30)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0",
                style: {
                  background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)"
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex-1 flex flex-col justify-center section-padding container-wide pt-32 pb-24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7, delay: 0.2 },
                  className: "inline-flex items-center gap-2 mb-6",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-[10px] font-light px-4 py-1.5 rounded-full",
                      style: {
                        background: "rgba(255,255,255,0.15)",
                        color: "rgba(255,255,255,0.9)",
                        border: "1px solid rgba(255,255,255,0.35)",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase"
                      },
                      children: "✦ Personalized Travel Design"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.h1,
                {
                  initial: { opacity: 0, y: 28 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.35 },
                  className: "font-display font-bold leading-[1.05] mb-6",
                  style: {
                    fontSize: "clamp(3rem, 8vw, 6rem)",
                    color: "#FFFFFF",
                    textShadow: "0 2px 20px rgba(0,0,0,0.3)"
                  },
                  children: [
                    "Your Journey,",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", style: { color: "#F0F8FF" }, children: "Our Passion" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7, delay: 0.52 },
                  className: "text-base md:text-lg leading-relaxed mb-10 font-light max-w-xl",
                  style: { color: "rgba(255,255,255,0.88)" },
                  children: "Curated family travel experiences across India's most breathtaking landscapes. Handcrafted itineraries. Zero stress. Pure memories."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7, delay: 0.68 },
                  className: "flex flex-wrap gap-4",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setExpertModalOpen(true),
                        "data-ocid": "hero-cta-expert",
                        className: "btn-outline-gold rounded-full px-8 py-3.5 text-sm shadow-amber-lg",
                        style: { letterSpacing: "0.08em" },
                        children: "Get Expert Advice"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => scrollTo("destinations"),
                        "data-ocid": "hero-cta-explore",
                        className: "btn-outline-gold rounded-full px-8 py-3.5 text-sm shadow-amber-lg",
                        style: { letterSpacing: "0.08em" },
                        children: "Explore Destinations"
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay: 0.88 },
                className: "mt-20 grid grid-cols-2 md:grid-cols-4 gap-px max-w-2xl overflow-hidden rounded-2xl",
                style: { background: "rgba(255,255,255,0.15)" },
                children: HERO_STATS.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex flex-col items-center py-5 px-2 text-center",
                    style: {
                      background: "rgba(0, 0, 0, 0.35)",
                      backdropFilter: "blur(12px)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-display font-bold text-2xl md:text-3xl",
                          style: { color: "#FFFFFF" },
                          children: stat.value
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-[11px] mt-1 font-light tracking-wider uppercase",
                          style: {
                            color: "rgba(255,255,255,0.75)",
                            letterSpacing: "0.12em"
                          },
                          children: stat.label
                        }
                      )
                    ]
                  },
                  stat.label
                ))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1.6 },
              className: "relative z-10 flex justify-center pb-10",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => scrollTo("about"),
                  "aria-label": "Scroll to next section",
                  className: "flex flex-col items-center gap-2 transition-smooth",
                  style: { color: "rgba(255,255,255,0.5)" },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-[9px] font-light",
                        style: { letterSpacing: "0.25em", textTransform: "uppercase" },
                        children: "Scroll"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        animate: { y: [0, 6, 0] },
                        transition: { duration: 1.6, repeat: Number.POSITIVE_INFINITY },
                        className: "w-px h-8 rounded-full",
                        style: {
                          background: "linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)"
                        }
                      }
                    )
                  ]
                }
              )
            }
          )
        ]
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
  HeroSection
};
