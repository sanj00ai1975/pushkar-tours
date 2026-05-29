import { a as useFAQs, r as reactExports, j as jsxRuntimeExports, h as Link, m as motion, I as Input } from "./index-BFFnuUgj.js";
import { B as Badge } from "./badge-VXcKOVgV.js";
import { A as ArrowLeft, S as Search } from "./search-BK33jNK-.js";
const CATEGORIES = ["All", "Domestic", "International", "Spiritual"];
const CATEGORY_DESCRIPTIONS = {
  Domestic: "Everything you need to know about travelling within India — from Himalayan escapes to coastal retreats.",
  International: "Visa guidance, documentation, currency, and expert tips for your international adventures.",
  Spiritual: "Pilgrimage planning, sacred itineraries, and spiritual travel guidance across India's holy sites."
};
function FAQItem({ faq, index }) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: index * 0.05, duration: 0.4 },
      className: "border-b border-border last:border-0",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setOpen((o) => !o),
            "data-ocid": `faq-item-${faq.id}`,
            className: "w-full flex items-start justify-between gap-4 py-5 text-left transition-smooth",
            "aria-expanded": open,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base md:text-lg text-foreground leading-snug pr-2", children: faq.question }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-muted-foreground text-xl mt-0.5 flex-shrink-0 transition-transform duration-300",
                  style: { transform: open ? "rotate(45deg)" : "rotate(0deg)" },
                  "aria-hidden": "true",
                  children: "+"
                }
              )
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.3 },
            className: "pb-5",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm md:text-base", children: faq.answer })
          }
        )
      ]
    }
  );
}
function TravelClarityHub() {
  const { faqs, loading } = useFAQs();
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [query, setQuery] = reactExports.useState("");
  const filtered = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesQuery = query.trim() === "" || faq.question.toLowerCase().includes(query.toLowerCase()) || faq.answer.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });
  const grouped = ["Domestic", "International", "Spiritual"].reduce((acc, cat) => {
    const items = filtered.filter((f) => f.category === cat);
    if (items.length > 0) acc[cat] = items;
    return acc;
  }, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-24 pb-20 bg-background min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "sticky top-[60px] z-40 border-b",
        style: {
          background: "rgba(234,221,205,0.97)",
          borderColor: "rgba(47,54,63,0.1)",
          backdropFilter: "blur(8px)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-padding container-wide", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 py-2 overflow-x-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              "data-ocid": "clarity-hub-home-tab",
              className: "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 whitespace-nowrap shrink-0",
              style: {
                background: "#2F363F",
                color: "#EADDCD",
                letterSpacing: "0.1em",
                textTransform: "uppercase"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 11 }),
                "Home"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-[10px] font-light px-2",
              style: { color: "rgba(47,54,63,0.3)" },
              children: "/"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-[11px] font-medium whitespace-nowrap",
              style: {
                color: "#2F363F",
                letterSpacing: "0.06em",
                textTransform: "uppercase"
              },
              children: "Travel Clarity Hub"
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-padding container-narrow text-center py-16 md:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "text-label text-muted-foreground mb-4",
          children: "Knowledge Centre"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.1 },
          className: "font-display text-heading-lg text-foreground mb-5",
          children: "Travel Clarity Hub"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          className: "text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10",
          children: "Every question answered. Every journey demystified. Browse our curated FAQ library by travel category."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.3 },
          className: "relative max-w-md mx-auto mb-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Search,
              {
                size: 16,
                className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "search",
                placeholder: "Search questions…",
                value: query,
                onChange: (e) => setQuery(e.target.value),
                "data-ocid": "faq-search-input",
                className: "pl-10 bg-muted border-border rounded-full text-sm"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2", role: "tablist", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": activeCategory === cat,
          onClick: () => setActiveCategory(cat),
          "data-ocid": `faq-filter-${cat.toLowerCase()}`,
          className: `px-5 py-2 rounded-full text-xs transition-smooth border ${activeCategory === cat ? "bg-foreground text-background border-foreground" : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"}`,
          style: { letterSpacing: "0.1em", textTransform: "uppercase" },
          children: cat
        },
        cat
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-padding container-narrow", children: [
      loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 bg-muted rounded-lg animate-pulse" }, i)) }),
      !loading && filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-16", "data-ocid": "faq-empty-state", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base", children: "No questions found for your search. Try a different keyword or category." }) }),
      !loading && activeCategory === "All" ? Object.entries(grouped).map(([category, items]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-heading-md text-foreground", children: category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: items.length })
        ] }),
        CATEGORY_DESCRIPTIONS[category] && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: CATEGORY_DESCRIPTIONS[category] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border", children: items.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FAQItem, { faq, index: i }, faq.id)) })
      ] }, category)) : !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        activeCategory !== "All" && CATEGORY_DESCRIPTIONS[activeCategory] && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-8 pb-6 border-b border-border", children: CATEGORY_DESCRIPTIONS[activeCategory] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border", children: filtered.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FAQItem, { faq, index: i }, faq.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-padding container-narrow text-center py-16 border-t border-border mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-heading-md text-foreground mb-3", children: "Still have questions?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 text-sm", children: "Our travel specialists are available 7 days a week to answer your questions personally." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://wa.me/919930998580",
          target: "_blank",
          rel: "noopener noreferrer",
          "data-ocid": "faq-whatsapp-cta",
          className: "btn-outline-gold rounded-full px-8 py-3 text-sm inline-flex",
          style: { letterSpacing: "0.1em", textTransform: "uppercase" },
          children: "WhatsApp Us"
        }
      )
    ] })
  ] });
}
export {
  TravelClarityHub
};
