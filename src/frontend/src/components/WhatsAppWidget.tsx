import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const QUICK_REPLIES = [
  {
    label: "Book a Tour",
    message: "Hi Pushkar Tours! I'd like to book a tour. Please guide me.",
  },
  {
    label: "Get Pricing",
    message: "Hi! Could you share pricing details for your tour packages?",
  },
  {
    label: "Speak to Agent",
    message:
      "Hi! I'd like to speak with a travel agent regarding a custom trip.",
  },
];

const WA_NUMBER = "919930998580";

function openWhatsApp(message: string) {
  window.open(
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );
}

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      role="complementary"
      aria-label="WhatsApp Chat"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.92 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="rounded-2xl p-4 w-60 shadow-amber-lg"
            style={{
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <p
                  className="text-sm font-semibold font-display"
                  style={{ color: "#F5F5F5" }}
                >
                  Pushkar Tours
                </p>
                <p
                  className="text-xs font-light"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Typically replies in minutes
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full transition-smooth"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.45)",
                }}
                aria-label="Close WhatsApp menu"
              >
                <X size={14} />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {QUICK_REPLIES.map((reply) => (
                <button
                  type="button"
                  key={reply.label}
                  onClick={() => {
                    openWhatsApp(reply.message);
                    setIsOpen(false);
                  }}
                  data-ocid={`whatsapp-quick-${reply.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-left text-sm px-3 py-2 rounded-xl transition-all duration-500 font-light"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(255,255,255,0.14)";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "rgba(255,255,255,0.7)";
                  }}
                >
                  {reply.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative group">
        {/* Tooltip */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none"
            >
              <div
                className="text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-card"
                style={{
                  background: "#111111",
                  color: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                Chat with us on WhatsApp
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Chat with Pushkar Tours on WhatsApp"
          data-ocid="whatsapp-widget-trigger"
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            scale: {
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-white shadow-amber-lg animate-pulse-amber"
          style={{ backgroundColor: "#25D366" }}
        >
          {isOpen ? <X size={26} /> : <FaWhatsapp size={32} />}
        </motion.button>
      </div>
    </div>
  );
}
