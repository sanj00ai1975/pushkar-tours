import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ExpertAdviceModal } from "./ExpertAdviceModal";

// Warm Slate header bg
const HEADER_BG = "#2F363F";
const HEADER_BG_SCROLL = "#2F363F";

// Hash-scroll links for home page sections
const HOME_HASH_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tour Compass", href: "#tour-compass" },
  { label: "Destinations", href: "#destinations" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact", href: "#design-your-journey" },
];

// Route-based page links
const PAGE_LINKS = [
  { label: "Travel Clarity Hub", href: "/travel-clarity-hub" },
  { label: "Journey Atlas", href: "/journey-atlas" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expertModalOpen, setExpertModalOpen] = useState(false);

  const routerState = useRouterState();
  const isHome = routerState.location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On home page before scroll: slightly transparent over hero; after scroll: solid Warm Slate
  // On all other pages: always solid Warm Slate
  const headerBg =
    isHome && !scrolled ? "rgba(47,54,63,0.85)" : HEADER_BG_SCROLL;

  // Text is always light (white/cream) against Warm Slate
  const navTextColor = "rgba(234,221,205,0.75)";
  const navHoverColor = "#EADDCD";
  const logoColor = "#EADDCD";
  const logoSubColor = "rgba(234,221,205,0.45)";
  const mobileIconColor = "rgba(234,221,205,0.85)";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: headerBg,
          borderBottom: "1px solid rgba(234,221,205,0.12)",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.25)" : "none",
          backdropFilter: isHome && !scrolled ? "blur(8px)" : "none",
        }}
        role="banner"
      >
        <div className="container-wide section-padding flex items-center justify-between py-3 md:py-4 gap-2">
          {/* Logo — always a link so clicking returns to home */}
          {isHome ? (
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="flex flex-col leading-none group shrink-0"
              aria-label="Pushkar Tours - Home"
            >
              <span
                className="font-display font-bold text-lg md:text-xl tracking-tight transition-colors duration-300 whitespace-nowrap"
                style={{ color: logoColor }}
              >
                Pushkar Tours
              </span>
              <span
                className="text-[8px] font-body font-light transition-colors duration-300 whitespace-nowrap"
                style={{
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: logoSubColor,
                }}
              >
                Your Journey, Our Passion
              </span>
            </button>
          ) : (
            <Link
              to="/"
              className="flex flex-col leading-none group shrink-0"
              aria-label="Pushkar Tours - Home"
              data-ocid="nav-logo-home"
            >
              <span
                className="font-display font-bold text-lg md:text-xl tracking-tight transition-colors duration-300 group-hover:opacity-80 whitespace-nowrap"
                style={{ color: logoColor }}
              >
                Pushkar Tours
              </span>
              <span
                className="text-[8px] font-body font-light transition-colors duration-300 whitespace-nowrap"
                style={{
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: logoSubColor,
                }}
              >
                Your Journey, Our Passion
              </span>
            </Link>
          )}

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-0.5 flex-nowrap overflow-hidden"
            aria-label="Main navigation"
          >
            {/* Home page hash links — only shown on home */}
            {isHome &&
              HOME_HASH_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href.replace("#", ""));
                  }}
                  data-ocid={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-2.5 py-1.5 text-[11px] font-light transition-all duration-300 whitespace-nowrap"
                  style={{
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: navTextColor,
                    fontWeight: 300,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      navHoverColor;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      navTextColor;
                  }}
                >
                  {link.label}
                </a>
              ))}

            {/* Page route links — always shown */}
            {PAGE_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                data-ocid={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-2.5 py-1.5 text-[11px] font-light transition-all duration-300 whitespace-nowrap"
                style={{
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: navTextColor,
                  fontWeight: 300,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = navHoverColor;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = navTextColor;
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile trigger */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setExpertModalOpen(true)}
              data-ocid="header-cta-expert-advice"
              className="hidden md:flex rounded-full px-4 py-1.5 text-[11px] btn-outline-white whitespace-nowrap"
              style={{ letterSpacing: "0.06em", textTransform: "uppercase" }}
            >
              Get Expert Advice
            </button>

            {/* Mobile hamburger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden rounded-full"
                  style={{ color: mobileIconColor }}
                  aria-label="Open navigation menu"
                  data-ocid="mobile-nav-trigger"
                >
                  {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-72 pt-12"
                style={{
                  background: HEADER_BG,
                  borderLeft: "1px solid rgba(234,221,205,0.12)",
                }}
              >
                <div className="flex flex-col gap-1">
                  <div
                    className="mb-5 pb-5"
                    style={{ borderBottom: "1px solid rgba(234,221,205,0.1)" }}
                  >
                    <p
                      className="font-display font-bold text-lg"
                      style={{ color: "#EADDCD" }}
                    >
                      Pushkar Tours
                    </p>
                    <p
                      className="text-[9px] font-light mt-1"
                      style={{
                        letterSpacing: "0.2em",
                        color: "rgba(234,221,205,0.35)",
                        textTransform: "uppercase",
                      }}
                    >
                      Your Journey, Our Passion
                    </p>
                  </div>

                  {/* Hash links — only on home */}
                  {isHome &&
                    HOME_HASH_LINKS.map((link, i) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href.replace("#", ""));
                          setMobileOpen(false);
                        }}
                        data-ocid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center px-3 py-3 rounded-xl transition-smooth text-sm"
                        style={{
                          color: "rgba(234,221,205,0.55)",
                          letterSpacing: "0.12em",
                          fontWeight: 300,
                          textTransform: "uppercase",
                          fontSize: "0.72rem",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color =
                            "#EADDCD";
                          (
                            e.currentTarget as HTMLAnchorElement
                          ).style.background = "rgba(234,221,205,0.07)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color =
                            "rgba(234,221,205,0.55)";
                          (
                            e.currentTarget as HTMLAnchorElement
                          ).style.background = "transparent";
                        }}
                      >
                        {link.label}
                      </motion.a>
                    ))}

                  {/* Page route links */}
                  {PAGE_LINKS.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: (HOME_HASH_LINKS.length + i) * 0.06,
                      }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setMobileOpen(false)}
                        data-ocid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center px-3 py-3 rounded-xl transition-smooth w-full"
                        style={{
                          color: "rgba(234,221,205,0.75)",
                          letterSpacing: "0.12em",
                          fontWeight: 400,
                          textTransform: "uppercase",
                          fontSize: "0.72rem",
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}

                  <div
                    className="mt-5 pt-5"
                    style={{ borderTop: "1px solid rgba(234,221,205,0.1)" }}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setMobileOpen(false);
                        setExpertModalOpen(true);
                      }}
                      data-ocid="mobile-cta-expert-advice"
                      className="w-full btn-outline-white rounded-xl py-3 text-sm"
                    >
                      Get Expert Advice
                    </button>
                  </div>
                  <div
                    className="mt-4 pt-3 space-y-2"
                    style={{ borderTop: "1px solid rgba(234,221,205,0.06)" }}
                  >
                    <a
                      href="tel:+919930998580"
                      className="flex items-center gap-2 text-sm transition-smooth"
                      style={{ color: "rgba(234,221,205,0.4)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "#EADDCD";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "rgba(234,221,205,0.4)";
                      }}
                    >
                      <Phone size={13} />
                      +91-99309 98580
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      <ExpertAdviceModal
        open={expertModalOpen}
        onClose={() => setExpertModalOpen(false)}
      />
    </>
  );
}
