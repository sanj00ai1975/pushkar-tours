// ─── Backend-aligned types ────────────────────────────────────────────────────

export interface TourPackage {
  id: number;
  title: string;
  description: string;
  destination: string;
  category?: string;
  price_inr_min: number;
  price_inr_max: number;
  duration_days: number;
  highlights: string[];
  best_season: string;
  image?: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  order: number;
  category: string; // "Domestic" | "International" | "Spiritual"
}

export interface Inquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  destination: string;
  travel_dates: string;
  message: string;
  timestamp: number;
}

// ─── Form types ───────────────────────────────────────────────────────────────

export interface ExpertAdviceForm {
  name: string;
  email: string;
  phone: string;
  destination: string;
  travel_dates: string;
  message: string;
}

export type ExpertAdviceFormErrors = Partial<
  Record<keyof ExpertAdviceForm, string>
>;

// ─── Quiz types ───────────────────────────────────────────────────────────────

export interface QuizAnswer {
  travelType: string;
  budget: string;
  duration: string;
}

export interface QuizResult {
  travelStyle: string;
  description: string;
  suggestedDestinations: string[];
}

// ─── Journey Atlas types ──────────────────────────────────────────────────────

export interface HowToReachDetail {
  byRoad: string;
  byTrain: string;
  byFlight: string;
}

export interface TravelerFAQ {
  question: string;
  answer: string;
}

export interface StateGuide {
  state: string;
  region: string;
  description: string;
  howToReach: HowToReachDetail;
  bestSeason: string;
  bestSeasonDetail: string;
  localCuisine: string[];
  cuisineNote: string;
  travelTips: string[];
  travelerFAQs: TravelerFAQ[];
  imageUrl: string;
}

// ─── UI types ─────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
