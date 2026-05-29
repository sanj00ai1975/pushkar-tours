import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useSubmitInquiry } from "../hooks/useBackend";
import type { ExpertAdviceForm } from "../types";

interface Props {
  open: boolean;
  onClose: () => void;
}

const INITIAL_FORM: ExpertAdviceForm = {
  name: "",
  email: "",
  phone: "",
  destination: "",
  travel_dates: "",
  message: "",
};

export function ExpertAdviceModal({ open, onClose }: Props) {
  const [form, setForm] = useState<ExpertAdviceForm>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<ExpertAdviceForm>>({});
  const { submitInquiry, loading, success, reset } = useSubmitInquiry();

  function validate(): boolean {
    const next: Partial<ExpertAdviceForm> = {};
    if (!form.name.trim()) next.name = "Your name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      next.email = "A valid email is required";
    if (!form.phone.trim()) next.phone = "Phone number is required";
    if (!form.destination.trim())
      next.destination = "Please mention your dream destination";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    await submitInquiry(form);
    setForm(INITIAL_FORM);
    setErrors({});
  }

  function handleClose() {
    reset();
    setForm(INITIAL_FORM);
    setErrors({});
    onClose();
  }

  const inputClass = "transition-smooth rounded-xl font-light text-sm";
  const labelStyle = {
    color: "#6B7280",
    letterSpacing: "0.12em",
  };
  const inputStyle = {
    background: "#F9FAFB",
    border: "1px solid rgba(0,0,0,0.14)",
    color: "#2F363F",
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent
        className="max-w-lg p-0 overflow-hidden rounded-2xl shadow-xl"
        style={{
          background: "#FFFFFF",
          border: "1px solid rgba(0,0,0,0.10)",
        }}
      >
        {/* Header — clean white */}
        <div
          className="px-6 pt-6 pb-5 relative"
          style={{
            background: "#FFFFFF",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 p-1.5 rounded-full transition-smooth hover:bg-gray-100"
            style={{
              background: "rgba(0,0,0,0.05)",
              color: "#6B7280",
            }}
            aria-label="Close dialog"
          >
            <X size={16} />
          </button>
          <DialogTitle
            className="font-display font-bold text-2xl leading-tight"
            style={{ color: "#2F363F" }}
          >
            Get Expert Travel Advice
          </DialogTitle>
          <p className="text-sm mt-1 font-light" style={{ color: "#9CA3AF" }}>
            Tell us your dream — we'll craft the perfect journey for you.
          </p>
        </div>

        {/* Body */}
        <div className="px-6 py-5" style={{ background: "#FFFFFF" }}>
          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center py-8 gap-4"
            >
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
                  Inquiry Received!
                </p>
                <p
                  className="text-sm mt-1 max-w-xs font-light"
                  style={{ color: "#6B7280" }}
                >
                  Thank you! Our travel specialist will reach out within 24
                  hours to start designing your journey.
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="btn-outline-gold rounded-xl px-6 py-2.5 text-sm mt-2"
              >
                Close
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="ea-name"
                    className="text-xs font-semibold uppercase"
                    style={labelStyle}
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="ea-name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    className={inputClass}
                    style={inputStyle}
                    data-ocid="expert-form-name"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="ea-phone"
                    className="text-xs font-semibold uppercase"
                    style={labelStyle}
                  >
                    Phone / WhatsApp *
                  </Label>
                  <Input
                    id="ea-phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    className={inputClass}
                    style={inputStyle}
                    data-ocid="expert-form-phone"
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="ea-email"
                  className="text-xs font-semibold uppercase"
                  style={labelStyle}
                >
                  Email Address *
                </Label>
                <Input
                  id="ea-email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  className={inputClass}
                  style={inputStyle}
                  data-ocid="expert-form-email"
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="ea-destination"
                  className="text-xs font-semibold uppercase"
                  style={labelStyle}
                >
                  Dream Destination *
                </Label>
                <Input
                  id="ea-destination"
                  placeholder="e.g. Leh Ladakh, Kerala, Bali..."
                  value={form.destination}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, destination: e.target.value }))
                  }
                  className={inputClass}
                  style={inputStyle}
                  data-ocid="expert-form-destination"
                  aria-invalid={!!errors.destination}
                />
                {errors.destination && (
                  <p className="text-xs text-destructive">
                    {errors.destination}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="ea-dates"
                  className="text-xs font-semibold uppercase"
                  style={labelStyle}
                >
                  Preferred Travel Dates
                </Label>
                <Input
                  id="ea-dates"
                  placeholder="e.g. July 2026, Diwali week..."
                  value={form.travel_dates}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, travel_dates: e.target.value }))
                  }
                  className={inputClass}
                  style={inputStyle}
                  data-ocid="expert-form-dates"
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="ea-message"
                  className="text-xs font-semibold uppercase"
                  style={labelStyle}
                >
                  Tell Us More
                </Label>
                <Textarea
                  id="ea-message"
                  placeholder="Group size, budget, special needs, interests..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                  rows={3}
                  data-ocid="expert-form-message"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                data-ocid="expert-form-submit"
                className="btn-outline-gold w-full rounded-xl py-4 text-sm shadow-amber hover:shadow-amber-lg"
                style={{ letterSpacing: "0.08em" }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    Submitting your inquiry...
                  </span>
                ) : (
                  "Send My Inquiry →"
                )}
              </button>

              <p
                className="text-center text-xs font-light"
                style={{ color: "#9CA3AF" }}
              >
                We respond within 24 hours • No spam, ever
              </p>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
