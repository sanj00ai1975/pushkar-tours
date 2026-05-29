// Travel Clarity Hub — Searchable FAQ page
// Organized by Domestic, International, and Spiritual travel categories

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useFAQs } from "../hooks/useBackend";
import type { FAQ } from "../types";

const CATEGORIES = ["All", "Domestic", "International", "Spiritual"] as const;
type Category = (typeof CATEGORIES)[number];

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  Domestic:
    "Everything you need to know about travelling within India — from Himalayan escapes to coastal retreats.",
  International:
    "Visa guidance, documentation, currency, and expert tips for your international adventures.",
  Spiritual:
    "Pilgrimage planning, sacred itineraries, and spiritual travel guidance across India's holy sites.",
};

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="border-b border-border last:border-0"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        data-ocid={`faq-item-${faq.id}`}
        className="w-full flex items-start justify-between gap-4 py-5 text-left transition-smooth"
        aria-expanded={open}
      >
        <span className="font-display text-base md:text-lg text-foreground leading-snug pr-2">
          {faq.question}
        </span>
        <span
          className="text-muted-foreground text-xl mt-0.5 flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="pb-5"
        >
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            {faq.answer}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

export function TravelClarityHub() {
  const { faqs, loading } = useFAQs();
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [query, setQuery] = useState("");

  const filtered = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    const matchesQuery =
      query.trim() === "" ||
      faq.question.toLowerCase().includes(query.toLowerCase()) ||
      faq.answer.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const grouped = (["Domestic", "International", "Spiritual"] as const).reduce<
    Record<string, FAQ[]>
  >((acc, cat) => {
    const items = filtered.filter((f) => f.category === cat);
    if (items.length > 0) acc[cat] = items;
    return acc;
  }, {});

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      {/* Page sub-navigation bar with HOME tab */}
      <div
        className="sticky top-[60px] z-40 border-b"
        style={{
          background: "rgba(234,221,205,0.97)",
          borderColor: "rgba(47,54,63,0.1)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="section-padding container-wide">
          <div className="flex items-center gap-1 py-2 overflow-x-auto">
            <Link
              to="/"
              data-ocid="clarity-hub-home-tab"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 whitespace-nowrap shrink-0"
              style={{
                background: "#2F363F",
                color: "#EADDCD",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              <ArrowLeft size={11} />
              Home
            </Link>
            <span
              className="text-[10px] font-light px-2"
              style={{ color: "rgba(47,54,63,0.3)" }}
            >
              /
            </span>
            <span
              className="text-[11px] font-medium whitespace-nowrap"
              style={{
                color: "#2F363F",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Travel Clarity Hub
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="section-padding container-narrow text-center py-16 md:py-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-label text-muted-foreground mb-4"
        >
          Knowledge Centre
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-heading-lg text-foreground mb-5"
        >
          Travel Clarity Hub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10"
        >
          Every question answered. Every journey demystified. Browse our curated
          FAQ library by travel category.
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative max-w-md mx-auto mb-8"
        >
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type="search"
            placeholder="Search questions…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            data-ocid="faq-search-input"
            className="pl-10 bg-muted border-border rounded-full text-sm"
          />
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2" role="tablist">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              data-ocid={`faq-filter-${cat.toLowerCase()}`}
              className={`px-5 py-2 rounded-full text-xs transition-smooth border ${
                activeCategory === cat
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
              }`}
              style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding container-narrow">
        {loading && (
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-muted rounded-lg animate-pulse" />
            ))}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-16" data-ocid="faq-empty-state">
            <p className="text-muted-foreground text-base">
              No questions found for your search. Try a different keyword or
              category.
            </p>
          </div>
        )}

        {!loading && activeCategory === "All"
          ? Object.entries(grouped).map(([category, items]) => (
              <div key={category} className="mb-12">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="font-display text-heading-md text-foreground">
                    {category}
                  </h2>
                  <Badge variant="outline" className="text-xs">
                    {items.length}
                  </Badge>
                </div>
                {CATEGORY_DESCRIPTIONS[category] && (
                  <p className="text-muted-foreground text-sm mb-6">
                    {CATEGORY_DESCRIPTIONS[category]}
                  </p>
                )}
                <div className="border-t border-border">
                  {items.map((faq, i) => (
                    <FAQItem key={faq.id} faq={faq} index={i} />
                  ))}
                </div>
              </div>
            ))
          : !loading && (
              <div>
                {activeCategory !== "All" &&
                  CATEGORY_DESCRIPTIONS[activeCategory] && (
                    <p className="text-muted-foreground text-sm mb-8 pb-6 border-b border-border">
                      {CATEGORY_DESCRIPTIONS[activeCategory]}
                    </p>
                  )}
                <div className="border-t border-border">
                  {filtered.map((faq, i) => (
                    <FAQItem key={faq.id} faq={faq} index={i} />
                  ))}
                </div>
              </div>
            )}
      </section>

      {/* CTA */}
      <section className="section-padding container-narrow text-center py-16 border-t border-border mt-8">
        <p className="font-display text-heading-md text-foreground mb-3">
          Still have questions?
        </p>
        <p className="text-muted-foreground mb-8 text-sm">
          Our travel specialists are available 7 days a week to answer your
          questions personally.
        </p>
        <a
          href="https://wa.me/919930998580"
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="faq-whatsapp-cta"
          className="btn-outline-gold rounded-full px-8 py-3 text-sm inline-flex"
          style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          WhatsApp Us
        </a>
      </section>
    </div>
  );
}
