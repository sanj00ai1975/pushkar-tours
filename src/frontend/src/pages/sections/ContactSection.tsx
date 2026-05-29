import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useSubmitInquiry } from "../../hooks/useBackend";
import type { ExpertAdviceForm } from "../../types";

const CONTACT_INFO: Array<{
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}> = [
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+91-99309 98580",
    href: "tel:+919930998580",
  },
  {
    icon: Mail,
    label: "Email",
    value: "travelwithpushkartours@gmail.com",
    href: "mailto:travelwithpushkartours@gmail.com",
  },
  { icon: MapPin, label: "Based In", value: "Mumbai, Maharashtra, India" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
];

const SOCIALS = [
  {
    icon: FaWhatsapp,
    href: "https://wa.me/919930998580",
    label: "WhatsApp",
    color: "#25D366",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/pushkartours/",
    label: "Instagram",
    color: "#E1306C",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/people/Pushkar-Tours/100090417972681/",
    label: "Facebook",
    color: "#1877F2",
  },
];

const INITIAL: ExpertAdviceForm = {
  name: "",
  email: "",
  phone: "",
  destination: "",
  travel_dates: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<ExpertAdviceForm>(INITIAL);
  const [errors, setErrors] = useState<Partial<ExpertAdviceForm>>({});
  const { submitInquiry, loading, success, reset } = useSubmitInquiry();

  function validate(): boolean {
    const next: Partial<ExpertAdviceForm> = {};
    if (!form.name.trim()) next.name = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      next.email = "Valid email required";
    if (!form.phone.trim()) next.phone = "Required";
    if (!form.destination.trim()) next.destination = "Required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    await submitInquiry(form);
    setForm(INITIAL);
    setErrors({});
  }

  const inputClass = "rounded-xl font-light transition-smooth";

  return (
    <section
      id="contact-form"
      className="py-20 md:py-28"
      style={{ background: "rgba(255,255,255,0.6)" }}
      aria-label="Contact Pushkar Tours"
    >
      <div className="container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <p className="text-label mb-3" style={{ color: "#6B7280" }}>
            Let's Start Planning
          </p>
          <h2
            className="font-display font-bold text-heading-lg mb-3"
            style={{ color: "#2F363F" }}
          >
            Begin Your{" "}
            <span className="italic" style={{ color: "#4B5563" }}>
              Journey
            </span>
          </h2>
          <p
            className="font-light leading-relaxed"
            style={{ color: "#6B7280" }}
          >
            Share your travel dreams with us and our expert travel advisor will
            personally reach out within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — contact info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-5 mb-8">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon;
                const body = (
                  <div key={item.label} className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(47,54,63,0.07)" }}
                    >
                      <Icon size={18} style={{ color: "#2F363F" }} />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-wide"
                        style={{
                          color: "#9CA3AF",
                          letterSpacing: "0.12em",
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-sm font-light mt-0.5 break-words"
                        style={{ color: "#2F363F" }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block hover:opacity-75 transition-smooth"
                  >
                    {body}
                  </a>
                ) : (
                  <div key={item.label}>{body}</div>
                );
              })}
            </div>

            <div
              className="pt-6"
              style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-wide mb-4"
                style={{
                  color: "#9CA3AF",
                  letterSpacing: "0.14em",
                }}
              >
                Connect With Us
              </p>
              <div className="flex gap-3">
                {SOCIALS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      data-ocid={`contact-social-${s.label.toLowerCase()}`}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-smooth hover:scale-110"
                      style={{
                        background: `${s.color}15`,
                        color: s.color,
                        border: `1px solid ${s.color}28`,
                      }}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: "rgba(255,255,255,0.95)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              {success ? (
                <div className="flex flex-col items-center text-center py-12 gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-card"
                    style={{ background: "#2F363F" }}
                  >
                    <CheckCircle size={32} style={{ color: "#EADDCD" }} />
                  </div>
                  <div>
                    <p
                      className="font-display font-semibold text-xl"
                      style={{ color: "#2F363F" }}
                    >
                      Thank You!
                    </p>
                    <p
                      className="text-sm mt-1 max-w-xs font-light"
                      style={{ color: "#6B7280" }}
                    >
                      Your inquiry has been received. We'll reach out within 24
                      hours to start designing your journey.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={reset}
                    className="btn-outline-gold rounded-xl px-5 py-2.5 text-sm mt-2"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="ct-name"
                        className="text-xs font-semibold uppercase tracking-wide"
                        style={{
                          color: "#6B7280",
                          letterSpacing: "0.12em",
                        }}
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="ct-name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                        className={inputClass}
                        data-ocid="contact-form-name"
                        aria-invalid={!!errors.name}
                        style={{
                          background: "#F9FAFB",
                          border: "1px solid rgba(0,0,0,0.12)",
                          color: "#2F363F",
                        }}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="ct-phone"
                        className="text-xs font-semibold uppercase tracking-wide"
                        style={{
                          color: "#6B7280",
                          letterSpacing: "0.12em",
                        }}
                      >
                        Phone *
                      </Label>
                      <Input
                        id="ct-phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, phone: e.target.value }))
                        }
                        className={inputClass}
                        data-ocid="contact-form-phone"
                        aria-invalid={!!errors.phone}
                        style={{
                          background: "#F9FAFB",
                          border: "1px solid rgba(0,0,0,0.12)",
                          color: "#2F363F",
                        }}
                      />
                      {errors.phone && (
                        <p className="text-xs text-destructive">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="ct-email"
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{
                        color: "#6B7280",
                        letterSpacing: "0.12em",
                      }}
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="ct-email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      className={inputClass}
                      data-ocid="contact-form-email"
                      aria-invalid={!!errors.email}
                      style={{
                        background: "#F9FAFB",
                        border: "1px solid rgba(0,0,0,0.12)",
                        color: "#2F363F",
                      }}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="ct-dest"
                        className="text-xs font-semibold uppercase tracking-wide"
                        style={{
                          color: "#6B7280",
                          letterSpacing: "0.12em",
                        }}
                      >
                        Destination *
                      </Label>
                      <Input
                        id="ct-dest"
                        placeholder="Where do you want to go?"
                        value={form.destination}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            destination: e.target.value,
                          }))
                        }
                        className={inputClass}
                        data-ocid="contact-form-destination"
                        aria-invalid={!!errors.destination}
                        style={{
                          background: "#F9FAFB",
                          border: "1px solid rgba(0,0,0,0.12)",
                          color: "#2F363F",
                        }}
                      />
                      {errors.destination && (
                        <p className="text-xs text-destructive">
                          {errors.destination}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="ct-dates"
                        className="text-xs font-semibold uppercase tracking-wide"
                        style={{
                          color: "#6B7280",
                          letterSpacing: "0.12em",
                        }}
                      >
                        Travel Dates
                      </Label>
                      <Input
                        id="ct-dates"
                        placeholder="e.g. July 2026"
                        value={form.travel_dates}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            travel_dates: e.target.value,
                          }))
                        }
                        className={inputClass}
                        data-ocid="contact-form-dates"
                        style={{
                          background: "#F9FAFB",
                          border: "1px solid rgba(0,0,0,0.12)",
                          color: "#2F363F",
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="ct-msg"
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{
                        color: "#6B7280",
                        letterSpacing: "0.12em",
                      }}
                    >
                      Message / Requirements
                    </Label>
                    <Textarea
                      id="ct-msg"
                      placeholder="Group size, budget, special requests..."
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      className={`${inputClass} resize-none`}
                      rows={3}
                      data-ocid="contact-form-message"
                      style={{
                        background: "#F9FAFB",
                        border: "1px solid rgba(0,0,0,0.12)",
                        color: "#2F363F",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    data-ocid="contact-form-submit"
                    className="btn-outline-gold w-full rounded-xl py-4 text-sm shadow-amber hover:shadow-amber-lg"
                    style={{ letterSpacing: "0.08em" }}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Send My Travel Inquiry →"
                    )}
                  </button>
                  <p
                    className="text-center text-xs font-light"
                    style={{ color: "#9CA3AF" }}
                  >
                    We respond within 24 hours • Your privacy is protected
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
