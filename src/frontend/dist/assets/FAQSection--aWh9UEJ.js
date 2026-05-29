import { a as useFAQs, j as jsxRuntimeExports, m as motion, r as reactExports, A as AnimatePresence } from "./index-DI1rXC5t.js";
import { C as ChevronDown } from "./chevron-down-CoHu63O1.js";
function FAQItem({
  question,
  answer,
  index
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 14 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.45, delay: index * 0.07 },
      className: "rounded-2xl overflow-hidden",
      style: {
        background: open ? "#FFFFFF" : "rgba(255,255,255,0.85)",
        border: `1px solid ${open ? "rgba(47,54,63,0.2)" : "rgba(0,0,0,0.07)"}`,
        transition: "all 0.3s ease"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setOpen(!open),
            "data-ocid": `faq-toggle-${index}`,
            className: "w-full flex items-center justify-between gap-4 p-5 text-left transition-smooth",
            "aria-expanded": open,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-display font-medium text-sm md:text-base leading-snug pr-2",
                  style: { color: "#2F363F" },
                  children: question
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  animate: { rotate: open ? 180 : 0 },
                  transition: { duration: 0.25 },
                  className: "shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                  style: {
                    background: open ? "rgba(47,54,63,0.12)" : "rgba(47,54,63,0.06)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ChevronDown,
                    {
                      size: 16,
                      style: { color: open ? "#2F363F" : "#9CA3AF" }
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "px-5 pb-5 text-sm md:text-base leading-relaxed pt-4 font-light",
                style: {
                  color: "#6B7280",
                  borderTop: "1px solid rgba(0,0,0,0.06)"
                },
                children: answer
              }
            )
          }
        ) })
      ]
    }
  );
}
function FAQSection() {
  const { faqs } = useFAQs();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "faq",
      className: "py-20 md:py-28",
      style: { background: "transparent" },
      "aria-label": "Frequently Asked Questions",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-wide section-padding", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "sticky top-28",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-label mb-3", style: { color: "#6B7280" }, children: "Got Questions?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h2",
                {
                  className: "font-display font-bold text-heading-lg mb-4",
                  style: { color: "#2F363F" },
                  children: [
                    "Frequently",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", style: { color: "#4B5563" }, children: "Asked" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "leading-relaxed mb-6 font-light",
                  style: { color: "#6B7280" },
                  children: "Everything you need to know about planning your perfect journey with Pushkar Tours. Can't find the answer you're looking for? We're just a WhatsApp away."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://wa.me/919930998580?text=Hi%20Pushkar%20Tours!%20I%20have%20a%20question.",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "data-ocid": "faq-whatsapp-cta",
                  className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-smooth shadow-amber",
                  style: { background: "#25D366" },
                  children: "Ask on WhatsApp →"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3 space-y-3", children: faqs.sort((a, b) => a.order - b.order).map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          FAQItem,
          {
            question: faq.question,
            answer: faq.answer,
            index: i
          },
          faq.id
        )) })
      ] }) })
    }
  );
}
export {
  FAQSection
};
