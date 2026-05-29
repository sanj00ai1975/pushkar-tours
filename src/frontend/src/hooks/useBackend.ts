import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import type { ExpertAdviceForm, FAQ, QuizAnswer, TourPackage } from "../types";

// ─── Static seed data (used until backend returns real data) ──────────────────

const SEED_TOURS: TourPackage[] = [
  {
    id: 1,
    title: "Mighty Himalayas: Leh Ladakh Adventure",
    description:
      "Experience the raw, breathtaking beauty of the world's highest motorable roads, ancient monasteries, and crystal-clear Pangong Lake in an unforgettable Himalayan escape.",
    destination: "Leh Ladakh",
    category: "Himalayan",
    price_inr_min: 55000,
    price_inr_max: 85000,
    duration_days: 8,
    highlights: [
      "Pangong Tso Lake",
      "Nubra Valley & Sand Dunes",
      "Magnetic Hill",
      "Hemis Monastery",
      "Khardung La Pass",
    ],
    best_season: "June – September",
    image:
      "https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "Rajasthan Royal Heritage",
    description:
      "Journey through the majestic forts and palaces of Rajasthan — Jaipur, Jodhpur, Udaipur — and immerse yourself in royal Rajput culture, vibrant bazaars, and desert sunsets.",
    destination: "Rajasthan",
    category: "Heritage",
    price_inr_min: 35000,
    price_inr_max: 65000,
    duration_days: 7,
    highlights: [
      "Amber Fort, Jaipur",
      "Mehrangarh Fort, Jodhpur",
      "City Palace, Udaipur",
      "Thar Desert Safari",
      "Havelis & Cultural Shows",
    ],
    best_season: "October – March",
    image:
      "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "Kerala Backwaters Serenity",
    description:
      "Float through Kerala's emerald backwaters on a traditional houseboat, explore spice plantations in Munnar, and unwind on pristine Kovalam beach.",
    destination: "Kerala",
    category: "Coastal",
    price_inr_min: 30000,
    price_inr_max: 55000,
    duration_days: 6,
    highlights: [
      "Alleppey Houseboat Stay",
      "Munnar Tea Gardens",
      "Periyar Wildlife Sanctuary",
      "Kovalam Beach",
      "Kathakali Cultural Show",
    ],
    best_season: "September – March",
    image:
      "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    title: "Golden Triangle Classic",
    description:
      "India's iconic trio — Delhi's monuments, Agra's eternal Taj Mahal, and Jaipur's pink city — in a seamless 5-day experience perfect for first-time India visitors.",
    destination: "Delhi – Agra – Jaipur",
    category: "Heritage",
    price_inr_min: 25000,
    price_inr_max: 45000,
    duration_days: 5,
    highlights: [
      "Taj Mahal at Sunrise",
      "Qutub Minar",
      "Agra Fort",
      "Jaipur City Palace",
      "Fatehpur Sikri",
    ],
    best_season: "October – April",
    image:
      "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    title: "Spiritual Varanasi Pilgrimage",
    description:
      "Witness the eternal city where life and death meet the sacred Ganges. Experience the mesmerizing Ganga Aarti, ancient ghats, and the spiritual heart of India.",
    destination: "Varanasi, Uttar Pradesh",
    category: "Spiritual",
    price_inr_min: 18000,
    price_inr_max: 32000,
    duration_days: 4,
    highlights: [
      "Ganga Aarti at Dashashwamedh Ghat",
      "Sunrise Boat Ride",
      "Kashi Vishwanath Temple",
      "Sarnath Buddhist Ruins",
      "Old City Heritage Walk",
    ],
    best_season: "October – March",
    image:
      "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 6,
    title: "Andaman Island Escape",
    description:
      "Pristine white-sand beaches, crystal-clear turquoise waters, and vibrant coral reefs await in India's tropical paradise — perfect for families and honeymooners alike.",
    destination: "Andaman & Nicobar Islands",
    category: "Coastal",
    price_inr_min: 40000,
    price_inr_max: 70000,
    duration_days: 6,
    highlights: [
      "Radhanagar Beach",
      "Havelock Island",
      "Cellular Jail Light & Sound Show",
      "Scuba Diving & Snorkeling",
      "Neil Island",
    ],
    best_season: "October – May",
    image:
      "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const SEED_FAQS: FAQ[] = [
  {
    id: 1,
    question: "Do you offer customized tour packages?",
    answer:
      "Absolutely! Customization is at the heart of what we do. Every Pushkar Tours itinerary is handcrafted around your specific preferences, travel style, budget, and dates. We don't sell pre-made packages — we design journeys around people.",
    order: 1,
    category: "Domestic",
  },
  {
    id: 2,
    question: "What types of trips do you specialize in?",
    answer:
      "We specialize in family-centric travel, spiritual & pilgrimage journeys, bespoke domestic and international tours, group tours, and corporate travel solutions. Our true strength lies in family-first travel with a focus on comfort, safety, and thoughtful itineraries.",
    order: 2,
    category: "Domestic",
  },
  {
    id: 3,
    question: "How do I start planning my trip with Pushkar Tours?",
    answer:
      "Simply click 'Get Expert Advice' and fill in your travel interests, budget, and preferred dates. Our founder Riya Mamghadi or a travel specialist will personally reach out within 24 hours to begin crafting your ideal journey. You can also WhatsApp us directly at +91-99309 98580.",
    order: 3,
    category: "Domestic",
  },
  {
    id: 4,
    question: "What is included in your tour packages?",
    answer:
      "Every package is tailored, but typically includes: hotel accommodations (as per your preference), intercity transport, sightseeing with expert guides, airport/station transfers, and 24/7 travel support throughout your journey. Meals and flights can be added as needed.",
    order: 4,
    category: "Domestic",
  },
  {
    id: 5,
    question:
      "Do you handle visa and documentation assistance for international tours?",
    answer:
      "Yes! For international tours, we provide comprehensive visa guidance, documentation checklists, and support for travel insurance. Our experienced team ensures all paperwork is in order well before your departure date.",
    order: 5,
    category: "International",
  },
  {
    id: 6,
    question: "What is your cancellation and refund policy?",
    answer:
      "We believe in transparent, fair policies. Cancellation terms vary by tour type, season, and advance notice given. All policies are clearly communicated in writing before you confirm your booking. We work with you to reschedule or adjust plans when life happens.",
    order: 6,
    category: "Domestic",
  },
  {
    id: 7,
    question: "Which international destinations do you cover?",
    answer:
      "We curate experiences across Southeast Asia (Thailand, Bali, Vietnam), Europe (Switzerland, France, Italy), Middle East (Dubai, Abu Dhabi), and more. Each itinerary is handcrafted with local expertise, premium stays, and seamless logistics for a truly immersive experience.",
    order: 7,
    category: "International",
  },
  {
    id: 8,
    question: "Do you need travel insurance for international trips?",
    answer:
      "We strongly recommend comprehensive travel insurance for all international journeys. It covers medical emergencies, trip cancellations, lost baggage, and more. We can assist you in selecting the right policy from trusted providers.",
    order: 8,
    category: "International",
  },
  {
    id: 9,
    question: "What spiritual destinations do you specialize in?",
    answer:
      "We craft soulful journeys to the Char Dham (Kedarnath, Badrinath, Gangotri, Yamunotri), Varanasi, Tirupati, Shirdi, Amritsar, and Bodh Gaya. Each pilgrimage is planned with reverence — comfortable stays, guided aarti experiences, and minimal hassle so you can focus on the sacred.",
    order: 9,
    category: "Spiritual",
  },
  {
    id: 10,
    question: "Can elderly pilgrims and families undertake spiritual tours?",
    answer:
      "Absolutely. We design pilgrimages with senior travelers and families in mind — helicopter options for Kedarnath, specially-abled-friendly accommodations, pony/doli arrangements, and dedicated support staff throughout the journey. Your comfort and safety are our priority.",
    order: 10,
    category: "Spiritual",
  },
  {
    id: 11,
    question: "Is the Char Dham Yatra safe during monsoon?",
    answer:
      "Monsoon (July–August) can bring landslides and road closures in the Char Dham region. We monitor real-time advisories and always reroute or reschedule when safety is at risk. We recommend May–June or September–October for the safest, most serene Char Dham experience.",
    order: 11,
    category: "Spiritual",
  },
];

// ─── Hooks ────────────────────────────────────────────────────────────────────

export function useTourPackages() {
  const {
    data: packages = SEED_TOURS,
    isLoading: loading,
    error,
  } = useQuery<TourPackage[]>({
    queryKey: ["tourPackages"],
    queryFn: async () => {
      // When backend is ready: return await actor.listTours()
      return SEED_TOURS;
    },
    staleTime: 5 * 60 * 1000,
  });

  return { packages, loading, error: error as Error | null };
}

export function useFAQs() {
  const {
    data: faqs = SEED_FAQS,
    isLoading: loading,
    error,
  } = useQuery<FAQ[]>({
    queryKey: ["faqs"],
    queryFn: async () => {
      // When backend is ready: return await actor.getFAQs()
      return SEED_FAQS;
    },
    staleTime: 10 * 60 * 1000,
  });

  return { faqs, loading, error: error as Error | null };
}

export function useSubmitInquiry() {
  const queryClient = useQueryClient();
  const [success, setSuccess] = useState(false);

  const mutation = useMutation({
    mutationFn: async (form: ExpertAdviceForm) => {
      // When backend is ready: return await actor.submitInquiry(...)
      await new Promise<void>((resolve) => setTimeout(resolve, 1200));
      return { id: Date.now(), ...form, timestamp: Date.now() };
    },
    onSuccess: () => {
      setSuccess(true);
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
      setTimeout(() => setSuccess(false), 5000);
    },
  });

  return {
    submitInquiry: mutation.mutateAsync,
    loading: mutation.isPending,
    success,
    error: mutation.error as Error | null,
    reset: () => {
      mutation.reset();
      setSuccess(false);
    },
  };
}

export function useQuizLeadSubmit() {
  const { submitInquiry, loading, success, error, reset } = useSubmitInquiry();

  const submitQuizLead = async (
    name: string,
    email: string,
    phone: string,
    quizAnswers: QuizAnswer,
    travelStyle: string,
  ) => {
    const destination = `Quiz: ${travelStyle} — ${quizAnswers.travelType} travel`;
    const message = `Travel Quiz Result — Style: ${travelStyle}\nTravel Type: ${quizAnswers.travelType}\nBudget: ${quizAnswers.budget}\nDuration: ${quizAnswers.duration}`;

    return submitInquiry({
      name,
      email,
      phone,
      destination,
      travel_dates: "",
      message,
    });
  };

  return { submitQuizLead, loading, success, error, reset };
}
