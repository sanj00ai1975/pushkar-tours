import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

interface Testimonial {
  id: number;
  name: string;
  city: string;
  tourType: string;
  quote: string;
  initials: string;
  date: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Gauri Morajkar",
    city: "London, UK",
    tourType: "Golden Triangle Trip",
    quote:
      "Sharing fantastic experience we had on our trip of the Golden Triangle, with Pushkar Tours. They created a customised itinerary to meet our wishes and we simply enjoyed the travel. We had a very friendly driver who helped us make the most of our trip. The hotels were great, felt luxurious and the food buffets were varied and delicious. Highlight of the trip was Taj Mahal at Sunrise, although all places we visited were beautiful! Would definitely go again with Pushkar Tours, thank you!",
    initials: "GM",
    date: "November 2023",
  },
  {
    id: 2,
    name: "Cindy Cronin",
    city: "Ohio, USA",
    tourType: "Kerala Trip",
    quote:
      "Looks like a great trip. Several of our friends were impressed with our Kerala Trip. I added your contact info on our Facebook post.",
    initials: "CC",
    date: "February 2024",
  },
  {
    id: 3,
    name: "Leisa Isenberg",
    city: "Ohio, USA",
    tourType: "Kerala Trip",
    quote:
      "Dear Riya, Wonderful Trip. I will share pictures once we get them. Thank you again for all your help with gluten free and you made the trip so exciting!!!",
    initials: "LI",
    date: "February 2024",
  },
  {
    id: 4,
    name: "Dr Manohar Motwani",
    city: "Mumbai",
    tourType: "Gir Somnath",
    quote:
      "Great Short break, No problems anywhere, Bus Journey all around fine. Hotel very good, food great, Safaris fine, No obstruction anywhere. Everyone from group has conveyed their thanks! All are looking forward to more journeys ahead!",
    initials: "MM",
    date: "February 2024",
  },
  {
    id: 5,
    name: "Shefali Vijaykar",
    city: "Mumbai",
    tourType: "Manikaran, Jibhi, Himachal",
    quote:
      "Dear Riya, your planning skills are unmatched! Thank you for creating such a fun and memorable trip - I will cherish those moments forever!!",
    initials: "SV",
    date: "March 2025",
  },
  {
    id: 6,
    name: "Milind Pendharkar",
    city: "Mumbai",
    tourType: "Leh Ladakh",
    quote:
      "We had a fantastic experience with Pushkar Tours! The entire trip was perfectly planned, with well-located hotels that were both comfortable and convenient. The local experiences they arranged were authentic, and the food throughout the journey was absolutely delicious. Thanks to Pushkar Tours, our trip was smooth, enjoyable, and truly memorable. Highly recommended for anyone seeking a stress-free and culturally rich travel experience!",
    initials: "MP",
    date: "September 2025",
  },
  {
    id: 7,
    name: "Shekhar Pendharkar",
    city: "Mumbai",
    tourType: "Leh Ladakh",
    quote:
      "Nice itinerary, beautiful hotels, superb travel arrangements. Hats off to Riya and Pushkar Tours and Travels for everything. Looking forward to the next trip!",
    initials: "SP",
    date: "September 2025",
  },
  {
    id: 8,
    name: "Gopinath Gawas",
    city: "Goa",
    tourType: "Mahabaleshwar Hill Station",
    quote:
      "Great stay arranged — clean rooms, friendly staff, comfortable beds, and an excellent location. Highly recommended!",
    initials: "GG",
    date: "January 2026",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 star rating">
      {(["s1", "s2", "s3", "s4", "s5"] as const).map((id) => (
        <Star
          key={id}
          size={13}
          fill="#2F363F"
          stroke="none"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className="p-7 flex flex-col gap-5 h-full rounded-2xl transition-smooth"
      style={{
        background: "rgba(255,255,255,0.92)",
        border: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      {/* Quote icon + stars */}
      <div className="flex items-start justify-between">
        <Quote
          size={26}
          style={{ color: "rgba(47,54,63,0.18)" }}
          aria-hidden="true"
        />
        <StarRating />
      </div>

      {/* Quote text */}
      <p
        className="text-sm leading-relaxed flex-1 font-light italic"
        style={{ color: "#4B5563" }}
      >
        "{testimonial.quote}"
      </p>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }} />

      {/* Footer: avatar + name + badge */}
      <div className="flex items-center gap-4">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-sm font-bold font-display"
          style={{
            background: "linear-gradient(135deg, #2F363F, #4B5563)",
            color: "#EADDCD",
            border: "1px solid rgba(47,54,63,0.2)",
          }}
          aria-hidden="true"
        >
          {testimonial.initials}
        </div>

        <div className="flex-1 min-w-0">
          <p
            className="text-sm font-semibold truncate font-display"
            style={{ color: "#2F363F" }}
          >
            {testimonial.name}
          </p>
          <p className="text-xs mt-0.5 font-light" style={{ color: "#9CA3AF" }}>
            {testimonial.city}
          </p>
          <p
            className="text-[11px] mt-0.5 font-light"
            style={{ color: "#B8B8B8" }}
          >
            {testimonial.date}
          </p>
        </div>

        {/* Badge */}
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full shrink-0 tracking-wide"
          style={{
            background: "rgba(47,54,63,0.07)",
            color: "#6B7280",
            border: "1px solid rgba(47,54,63,0.12)",
          }}
        >
          {testimonial.tourType}
        </span>
      </div>
    </motion.article>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{ background: "transparent" }}
      aria-label="Traveler testimonials"
    >
      <div className="container-wide section-padding py-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-label" style={{ color: "#6B7280" }}>
            Traveler Stories
          </p>
          <h2
            className="text-heading-lg font-display font-bold"
            style={{ color: "#2F363F" }}
          >
            What Our{" "}
            <span className="italic" style={{ color: "#4B5563" }}>
              Travelers Say
            </span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-base leading-relaxed font-light"
            style={{ color: "#6B7280" }}
          >
            Every journey we craft becomes a cherished memory. Here's what our
            travellers share after returning home from their dream destinations.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-14"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <div className="flex -space-x-2">
              {["GM", "CC", "MP"].map((init) => (
                <div
                  key={init}
                  className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "linear-gradient(135deg, #2F363F, #4B5563)",
                    color: "#EADDCD",
                    borderColor: "#EADDCD",
                  }}
                >
                  {init}
                </div>
              ))}
            </div>
            <p className="text-sm font-light" style={{ color: "#6B7280" }}>
              Trusted by{" "}
              <span className="font-semibold" style={{ color: "#2F363F" }}>
                500+ happy families
              </span>{" "}
              across India and abroad
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
