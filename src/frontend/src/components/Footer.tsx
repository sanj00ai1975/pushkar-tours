import {
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  Phone,
  Shield,
  XCircle,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const QUICK_LINKS = [
  { label: "Home", href: "#home", isHash: true },
  { label: "About Us", href: "#about", isHash: true },
  { label: "Tour Compass", href: "#tour-compass", isHash: true },
  { label: "Destinations", href: "#destinations", isHash: true },
  { label: "Why Choose Us", href: "#why-choose-us", isHash: true },
  { label: "Testimonials", href: "#testimonials", isHash: true },
  { label: "Contact", href: "#contact", isHash: true },
  { label: "Travel Clarity Hub", href: "/travel-clarity-hub", isHash: false },
  { label: "Journey Atlas", href: "/journey-atlas", isHash: false },
];

const POLICY_LINKS = [
  {
    label: "Terms & Conditions",
    href: "/assets/terms-and-conditions.html",
    icon: FileText,
    "data-ocid": "footer-terms",
    target: "_blank" as const,
    rel: "noopener noreferrer",
  },
  {
    label: "Privacy Policy",
    href: "/assets/privacy-policy.html",
    icon: Shield,
    "data-ocid": "footer-privacy",
    target: "_blank" as const,
    rel: "noopener noreferrer",
  },
  {
    label: "Cancellation Policy",
    href: "#cancellation",
    icon: XCircle,
    "data-ocid": "footer-cancellation",
  },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/pushkartours/",
    icon: FaInstagram,
    handle: "@pushkartours",
    color: "#E1306C",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Pushkar-Tours/100090417972681/",
    icon: FaFacebook,
    handle: "Pushkar-Tours",
    color: "#1877F2",
  },
  {
    label: "Google Business",
    href: "https://share.google/0oqx9pxgEpnlB8u2G",
    icon: FaGoogle,
    handle: "Pushkar Tours",
    color: "#EA4335",
  },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const mutedText = "rgba(255,255,255,0.5)";
const mutedTextLight = "rgba(255,255,255,0.25)";

function FooterLink({
  href,
  onClick,
  "data-ocid": ocid,
  children,
}: {
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  "data-ocid"?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      data-ocid={ocid}
      className="text-sm transition-smooth hover:translate-x-1 inline-block font-light"
      style={{ color: mutedText, letterSpacing: "0.01em" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = mutedText;
      }}
    >
      {children}
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? window.location.hostname
      : "pushkartours.co.in";

  return (
    <footer
      id="contact"
      style={{
        background: "#2F363F",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
      aria-label="Site footer"
    >
      {/* Main grid */}
      <div className="container-wide section-padding py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1 — Brand (spans 2 on large) */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-5">
            <div>
              <h2
                className="font-display font-bold text-2xl"
                style={{ color: "#FFFFFF" }}
              >
                Pushkar Tours
              </h2>
              <p
                className="text-[9px] font-light mt-1"
                style={{
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                Your Journey, Our Passion
              </p>
            </div>
            <p
              className="text-sm leading-relaxed font-light"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Personalized travel design from Mumbai. We craft deeply
              customized, emotionally enriching journeys for families, pilgrims,
              and explorers.
            </p>
            <a
              href={`https://wa.me/919930998580?text=${encodeURIComponent("Hi Pushkar Tours! I'd like to know more about your travel packages.")}`}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer-whatsapp-cta"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-smooth shadow-amber"
              style={{ background: "#25D366" }}
            >
              <FaWhatsapp size={16} />
              WhatsApp Us
            </a>

            {/* Contact info inline */}
            <ul className="space-y-2.5 pt-1">
              <li>
                <a
                  href="tel:+919930998580"
                  data-ocid="footer-phone"
                  className="flex items-center gap-2 text-sm transition-smooth font-light"
                  style={{ color: mutedText }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      mutedText;
                  }}
                >
                  <Phone size={13} style={{ color: "rgba(255,255,255,0.5)" }} />
                  +91-99309 98580
                </a>
              </li>
              <li>
                <a
                  href="mailto:travelwithpushkartours@gmail.com"
                  data-ocid="footer-email-primary"
                  className="flex items-center gap-2 text-sm transition-smooth font-light"
                  style={{ color: mutedText }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      mutedText;
                  }}
                >
                  <Mail size={13} style={{ color: "rgba(255,255,255,0.5)" }} />
                  travelwithpushkartours@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@pushkartours.co.in"
                  data-ocid="footer-email-secondary"
                  className="flex items-center gap-2 text-sm transition-smooth font-light"
                  style={{ color: mutedText }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      mutedText;
                  }}
                >
                  <Mail size={13} style={{ color: "rgba(255,255,255,0.5)" }} />
                  info@pushkartours.co.in
                </a>
              </li>
              <li>
                <div
                  className="flex items-center gap-2 text-sm font-light"
                  style={{ color: mutedText }}
                >
                  <MapPin
                    size={13}
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="space-y-4">
            <h3
              className="text-label"
              style={{ color: "#FFFFFF", letterSpacing: "0.18em" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  {link.isHash ? (
                    <FooterLink
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      data-ocid={`footer-link-${link.label
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </FooterLink>
                  ) : (
                    <FooterLink
                      href={link.href}
                      data-ocid={`footer-link-${link.label
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </FooterLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Follow Us */}
          <div className="space-y-4">
            <h3
              className="text-label"
              style={{ color: "#FFFFFF", letterSpacing: "0.18em" }}
            >
              Follow Us
            </h3>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid={`footer-social-${social.label
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="flex items-center gap-3 text-sm group transition-smooth font-light"
                      style={{ color: mutedText }}
                    >
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-smooth group-hover:scale-110"
                        style={{
                          backgroundColor: `${social.color}18`,
                          color: social.color,
                        }}
                      >
                        <Icon size={16} />
                      </span>
                      <span
                        className="transition-smooth flex items-center gap-1"
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLSpanElement).style.color =
                            "#FFFFFF";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLSpanElement).style.color =
                            mutedText;
                        }}
                      >
                        {social.handle}
                        <ExternalLink
                          size={11}
                          className="opacity-0 group-hover:opacity-50 transition-smooth"
                        />
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 4 — Legal & Policies */}
          <div className="space-y-4">
            <h3
              className="text-label"
              style={{ color: "#FFFFFF", letterSpacing: "0.18em" }}
            >
              Legal &amp; Policies
            </h3>
            <ul className="space-y-3">
              {POLICY_LINKS.map((policy) => {
                const Icon = policy.icon;
                return (
                  <li key={policy.label}>
                    <a
                      href={policy.href}
                      data-ocid={policy["data-ocid"]}
                      target={(policy as { target?: string }).target}
                      rel={(policy as { rel?: string }).rel}
                      className="flex items-center gap-2.5 text-sm transition-smooth group font-light"
                      style={{ color: mutedText }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "#FFFFFF";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          mutedText;
                      }}
                    >
                      <span
                        className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-smooth group-hover:scale-105"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          color: "rgba(255,255,255,0.45)",
                        }}
                      >
                        <Icon size={13} aria-hidden="true" />
                      </span>
                      <span className="hover:translate-x-1 transition-smooth inline-block">
                        {policy.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="container-wide section-padding">
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />
      </div>

      {/* Bottom bar */}
      <div className="container-wide section-padding py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p
          className="text-xs text-center md:text-left font-light"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          © {year} Pushkar Tours. All rights reserved. | Powered by trust, care
          &amp; passion.
        </p>
        {/* Policy links inline — bottom bar */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          {POLICY_LINKS.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target={(p as { target?: string }).target}
              rel={(p as { rel?: string }).rel}
              data-ocid={`bottom-${p["data-ocid"]}`}
              className="text-xs transition-smooth font-light"
              style={{ color: mutedTextLight }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  mutedTextLight;
              }}
            >
              {p.label}
            </a>
          ))}
        </div>
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs transition-smooth font-light"
          style={{ color: mutedTextLight }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = mutedTextLight;
          }}
        >
          Built with love using caffeine.ai
        </a>
      </div>
    </footer>
  );
}
