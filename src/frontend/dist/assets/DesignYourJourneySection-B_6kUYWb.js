import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence, P as Phone, b as Mail, M as MapPin, F as FaInstagram, d as FaFacebook, e as FaGoogle, f as ExternalLink, g as useQuizLeadSubmit, L as Label, I as Input } from "./index-BFFnuUgj.js";
import { C as CircleCheck } from "./circle-check-C4vwqf-9.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
const STEPS = [
  {
    id: 1,
    question: "What type of traveller are you?",
    options: [
      { value: "Family", label: "Family & Kids", emoji: "👨‍👩‍👧‍👦" },
      { value: "Spiritual", label: "Spiritual & Pilgrim", emoji: "🙏" },
      { value: "Adventure", label: "Adventure & Outdoors", emoji: "🏔️" },
      { value: "Luxury", label: "Leisure & Luxury", emoji: "✨" },
      { value: "Corporate", label: "Corporate & Group", emoji: "💼" }
    ]
  },
  {
    id: 2,
    question: "What is your travel budget per person?",
    options: [
      { value: "Budget", label: "Under ₹20,000", emoji: "💰" },
      { value: "Mid-range", label: "₹20,000 – ₹50,000", emoji: "💳" },
      { value: "Premium", label: "₹50,000 – ₹1,00,000", emoji: "🎫" },
      { value: "Luxury", label: "Above ₹1,00,000", emoji: "👑" }
    ]
  },
  {
    id: 3,
    question: "How long is your ideal trip?",
    options: [
      { value: "Weekend", label: "2–3 days", emoji: "📅" },
      { value: "Short Break", label: "4–5 days", emoji: "🗓️" },
      { value: "Week", label: "6–8 days", emoji: "🌍" },
      { value: "Extended", label: "9+ days", emoji: "✈️" }
    ]
  }
];
function getQuizResult(answers) {
  const { travelType, budget, duration } = answers;
  if (travelType === "Spiritual") {
    return {
      travelStyle: "The Sacred Seeker",
      description: "Your soul calls for the divine. From the ghats of Varanasi to the mountain shrines of Kedarnath, your ideal journey is one of inner discovery and spiritual renewal.",
      suggestedDestinations: [
        "Varanasi",
        "Char Dham Yatra",
        "Tirupati",
        "Shirdi",
        "Amritsar"
      ]
    };
  }
  if (travelType === "Adventure") {
    return {
      travelStyle: "The Mountain Wanderer",
      description: "You live for the thrill of high passes and open trails. Whether trekking Spiti or navigating Ladakh's remote valleys, you seek the untamed and the extraordinary.",
      suggestedDestinations: [
        "Leh Ladakh",
        "Spiti Valley",
        "Chopta",
        "Zanskar",
        "Uttarakhand Treks"
      ]
    };
  }
  if (budget === "Luxury" || budget === "Premium") {
    return {
      travelStyle: "The Refined Explorer",
      description: "You appreciate the finer things — private guides, heritage properties, and curated experiences that go beyond the obvious tourist circuit.",
      suggestedDestinations: [
        "Rajasthan Palaces",
        "Maldives",
        "Bali",
        "Switzerland",
        "Dubai"
      ]
    };
  }
  if (travelType === "Family") {
    return {
      travelStyle: "The Family Storyteller",
      description: "Every trip is a chapter in your family's story. You seek destinations that blend adventure for the young and comfort for the experienced — all wrapped in warmth and care.",
      suggestedDestinations: [
        "Kerala Backwaters",
        "Goa",
        "Andaman Islands",
        "Manali",
        "Golden Triangle"
      ]
    };
  }
  if (duration === "Extended" || duration === "Week") {
    return {
      travelStyle: "The Deep Diver",
      description: "You don't just visit — you immerse. Long journeys, slow travel, and authentic local experiences are your signature. Time is your luxury.",
      suggestedDestinations: [
        "Northeast India Circuit",
        "Rajasthan & Gujarat",
        "South India Temple Trail",
        "Himalayan Circuit"
      ]
    };
  }
  return {
    travelStyle: "The Curious Voyager",
    description: "Curious, open, and ever-ready to discover something new. Your ideal journey is a perfect balance of culture, comfort, and spontaneity.",
    suggestedDestinations: [
      "Golden Triangle",
      "Kerala",
      "Goa",
      "Coorg",
      "Darjeeling"
    ]
  };
}
const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+91-99309 98580",
    href: "tel:+919930998580"
  },
  {
    icon: Mail,
    label: "Email",
    value: "travelwithpushkartours@gmail.com",
    href: "mailto:travelwithpushkartours@gmail.com"
  },
  {
    icon: Mail,
    label: "Email (Alt)",
    value: "info@pushkartours.co.in",
    href: "mailto:info@pushkartours.co.in"
  },
  {
    icon: MapPin,
    label: "Based In",
    value: "Mumbai, Maharashtra, India",
    href: void 0
  }
];
const SOCIAL_ITEMS = [
  {
    icon: FaInstagram,
    label: "Instagram",
    handle: "@pushkartours",
    href: "https://www.instagram.com/pushkartours/",
    color: "#E1306C"
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    handle: "Pushkar-Tours",
    href: "https://www.facebook.com/people/Pushkar-Tours/100090417972681/",
    color: "#1877F2"
  },
  {
    icon: FaGoogle,
    label: "Google Business",
    handle: "Pushkar Tours",
    href: "https://share.google/0oqx9pxgEpnlB8u2G",
    color: "#EA4335"
  }
];
function ContactColumn() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: -24 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
      className: "flex flex-col gap-8",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs font-semibold uppercase tracking-widest mb-2",
              style: { color: "#9CA3AF", letterSpacing: "0.18em" },
              children: "Get In Touch"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "h3",
            {
              className: "font-display font-bold text-2xl leading-snug",
              style: { color: "#2F363F" },
              children: [
                "We'd Love to",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", style: { color: "#4B5563" }, children: "Hear from You" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "mt-2 text-sm font-light leading-relaxed",
              style: { color: "#6B7280" },
              children: "Reach us anytime — we respond within 24 hours."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: CONTACT_ITEMS.map((item) => {
          const Icon = item.icon;
          const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                style: { background: "rgba(47,54,63,0.07)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 17, style: { color: "#2F363F" } })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-[10px] font-semibold uppercase tracking-wide",
                  style: { color: "#9CA3AF", letterSpacing: "0.14em" },
                  children: item.label
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-sm font-light mt-0.5 break-all",
                  style: { color: "#2F363F" },
                  children: item.value
                }
              )
            ] })
          ] }, item.label);
          return item.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: item.href,
              className: "block hover:opacity-75 transition-smooth",
              "data-ocid": `dyj-contact-${item.label.toLowerCase().replace(/\s+/g, "-")}`,
              children: inner
            }
          ) }, item.label) : /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: inner }, item.label);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { borderTop: "1px solid rgba(0,0,0,0.08)" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs font-semibold uppercase tracking-widest mb-4",
              style: { color: "#9CA3AF", letterSpacing: "0.18em" },
              children: "Connect With Us"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: SOCIAL_ITEMS.map((s) => {
            const Icon = s.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: s.href,
                target: "_blank",
                rel: "noopener noreferrer",
                "data-ocid": `dyj-social-${s.label.toLowerCase().replace(/\s+/g, "-")}`,
                className: "flex items-center gap-3 group transition-smooth",
                style: { color: "#4B5563" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-smooth group-hover:scale-110",
                      style: {
                        background: `${s.color}15`,
                        color: s.color,
                        border: `1px solid ${s.color}28`
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-light flex items-center gap-1.5 group-hover:opacity-80 transition-smooth", children: [
                    s.handle,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 11, className: "opacity-40" })
                  ] })
                ]
              }
            ) }, s.label);
          }) })
        ] })
      ]
    }
  );
}
function QuizStep({ step, selected, onSelect }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -40 },
      transition: { duration: 0.35 },
      className: "w-full",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg md:text-xl text-foreground mb-5 text-center", children: step.question }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2.5", children: step.options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => onSelect(option.value),
            "data-ocid": `quiz-option-${option.value.toLowerCase().replace(/\s+/g, "-")}`,
            className: `flex flex-col items-center gap-2 p-3.5 rounded-2xl border transition-smooth text-center ${selected === option.value ? "border-foreground bg-foreground text-background shadow-card" : "border-border bg-card text-foreground hover:border-foreground/40 hover:shadow-card"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: option.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium leading-tight", children: option.label })
            ]
          },
          option.value
        )) })
      ]
    },
    step.id
  );
}
function LeadCaptureForm({ result, answers, onSuccess }) {
  const { submitQuizLead, loading, success } = useQuizLeadSubmit();
  const [form, setForm] = reactExports.useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = reactExports.useState({});
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email required";
    if (!form.phone.trim() || form.phone.length < 10)
      e.phone = "Valid phone required";
    return e;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    await submitQuizLead(
      form.name,
      form.email,
      form.phone,
      answers,
      result.travelStyle
    );
    onSuccess();
  };
  if (success) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        className: "text-center py-6",
        "data-ocid": "quiz-success-state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 36, className: "mx-auto mb-3 text-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg text-foreground mb-1", children: "Your journey begins soon." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Our travel specialist will reach out within 24 hours." })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-center mb-4", children: [
          "Share details — we'll craft your personalised",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: result.travelStyle }),
          " ",
          "itinerary."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "quiz-name",
                className: "text-xs text-muted-foreground mb-1 block",
                children: "Your Name"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "quiz-name",
                type: "text",
                value: form.name,
                onChange: (e) => setForm((f) => ({ ...f, name: e.target.value })),
                placeholder: "Riya Sharma",
                "data-ocid": "quiz-lead-name",
                className: "bg-background border-border"
              }
            ),
            errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-1", children: errors.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "quiz-email",
                className: "text-xs text-muted-foreground mb-1 block",
                children: "Email Address"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "quiz-email",
                type: "email",
                value: form.email,
                onChange: (e) => setForm((f) => ({ ...f, email: e.target.value })),
                placeholder: "riya@example.com",
                "data-ocid": "quiz-lead-email",
                className: "bg-background border-border"
              }
            ),
            errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-1", children: errors.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "quiz-phone",
                className: "text-xs text-muted-foreground mb-1 block",
                children: "Phone / WhatsApp"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "quiz-phone",
                type: "tel",
                value: form.phone,
                onChange: (e) => setForm((f) => ({ ...f, phone: e.target.value })),
                placeholder: "+91 99999 00000",
                "data-ocid": "quiz-lead-phone",
                className: "bg-background border-border"
              }
            ),
            errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-1", children: errors.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              disabled: loading,
              "data-ocid": "quiz-lead-submit",
              className: "w-full btn-outline-gold rounded-xl py-3 text-sm mt-1 disabled:opacity-50",
              style: { letterSpacing: "0.08em" },
              children: loading ? "Sending…" : "Send My Journey Plan"
            }
          )
        ] })
      ]
    }
  );
}
function DesignYourJourneySection() {
  const [currentStep, setCurrentStep] = reactExports.useState(0);
  const [answers, setAnswers] = reactExports.useState({});
  const [result, setResult] = reactExports.useState(null);
  const [leadCaptured, setLeadCaptured] = reactExports.useState(false);
  const answerKeys = ["travelType", "budget", "duration"];
  const handleSelect = (value) => {
    const key = answerKeys[currentStep];
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);
    if (currentStep < STEPS.length - 1) {
      setTimeout(() => setCurrentStep((s) => s + 1), 250);
    } else {
      const quizResult = getQuizResult(newAnswers);
      setResult(quizResult);
    }
  };
  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
    setLeadCaptured(false);
  };
  const progressPct = result ? 100 : currentStep / STEPS.length * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "design-your-journey",
      className: "py-20 md:py-28 border-t border-border",
      style: { background: "#EADDCD" },
      "data-ocid": "design-journey-section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-padding container-wide", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "text-center mb-14",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-label mb-3",
                  style: { color: "#9CA3AF", letterSpacing: "0.18em" },
                  children: "Personalised for you"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h2",
                {
                  className: "font-display font-bold text-heading-lg mb-4",
                  style: { color: "#2F363F" },
                  children: [
                    "Design Your",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", style: { color: "#4B5563" }, children: "Journey" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "max-w-md mx-auto text-sm md:text-base font-light",
                  style: { color: "#6B7280" },
                  children: "Answer three questions and we'll reveal your travel style — then connect you with the perfect itinerary."
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactColumn, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 24 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.1 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-3xl shadow-card p-6 md:p-8",
                  style: {
                    background: "#FFFFFF",
                    border: "1px solid rgba(0,0,0,0.07)"
                  },
                  children: [
                    !result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "flex justify-between text-xs mb-2",
                          style: { color: "#9CA3AF" },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                              "Step ",
                              currentStep + 1,
                              " of ",
                              STEPS.length
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                              Math.round(progressPct),
                              "% complete"
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "h-1 rounded-full overflow-hidden",
                          style: { background: "rgba(0,0,0,0.08)" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              className: "h-full rounded-full",
                              style: { background: "#2F363F" },
                              initial: { width: 0 },
                              animate: { width: `${progressPct}%` },
                              transition: { duration: 0.4 }
                            }
                          )
                        }
                      )
                    ] }),
                    !result && /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      QuizStep,
                      {
                        step: STEPS[currentStep],
                        selected: answers[answerKeys[currentStep]] ?? "",
                        onSelect: handleSelect
                      },
                      currentStep
                    ) }),
                    result && !leadCaptured && /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.5 },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "text-center mb-6 pb-6",
                              style: { borderBottom: "1px solid rgba(0,0,0,0.08)" },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "p",
                                  {
                                    className: "text-[10px] font-semibold uppercase tracking-widest mb-2",
                                    style: { color: "#9CA3AF" },
                                    children: "Your Travel Style"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "h3",
                                  {
                                    className: "font-display text-xl md:text-2xl mb-3",
                                    style: { color: "#2F363F" },
                                    children: result.travelStyle
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "p",
                                  {
                                    className: "text-sm leading-relaxed max-w-xs mx-auto mb-4 font-light",
                                    style: { color: "#6B7280" },
                                    children: result.description
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-1.5", children: result.suggestedDestinations.map((dest) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "span",
                                  {
                                    className: "text-xs px-2.5 py-1 rounded-full",
                                    style: {
                                      background: "rgba(47,54,63,0.07)",
                                      color: "#4B5563",
                                      border: "1px solid rgba(47,54,63,0.12)"
                                    },
                                    children: dest
                                  },
                                  dest
                                )) })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            LeadCaptureForm,
                            {
                              result,
                              answers,
                              onSuccess: () => setLeadCaptured(true)
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: handleReset,
                              "data-ocid": "quiz-reset",
                              className: "mt-4 w-full text-xs transition-smooth text-center",
                              style: { color: "#9CA3AF" },
                              onMouseEnter: (e) => {
                                e.currentTarget.style.color = "#2F363F";
                              },
                              onMouseLeave: (e) => {
                                e.currentTarget.style.color = "#9CA3AF";
                              },
                              children: "Retake quiz"
                            }
                          )
                        ]
                      }
                    ) }),
                    result && leadCaptured && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, scale: 0.95 },
                        animate: { opacity: 1, scale: 1 },
                        className: "text-center py-8",
                        "data-ocid": "quiz-final-success",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            CircleCheck,
                            {
                              size: 44,
                              className: "mx-auto mb-5",
                              style: { color: "#2F363F" }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-display text-2xl mb-3",
                              style: { color: "#2F363F" },
                              children: "Your journey begins soon."
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "p",
                            {
                              className: "text-sm mb-8 max-w-xs mx-auto font-light",
                              style: { color: "#6B7280" },
                              children: [
                                "Our travel specialist will reach out within 24 hours to craft your personalised",
                                " ",
                                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "#2F363F" }, children: result.travelStyle }),
                                " ",
                                "itinerary."
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "button",
                            {
                              type: "button",
                              onClick: handleReset,
                              "data-ocid": "quiz-retake",
                              className: "btn-outline-gold rounded-full px-6 py-2.5 text-xs inline-flex items-center gap-2",
                              style: {
                                letterSpacing: "0.08em",
                                textTransform: "uppercase"
                              },
                              children: [
                                "Retake Quiz ",
                                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 13 })
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            }
          )
        ] })
      ] })
    }
  );
}
export {
  DesignYourJourneySection
};
