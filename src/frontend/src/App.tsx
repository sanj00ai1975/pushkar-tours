import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Link,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";

// ─── Lazy-loaded home sections ─────────────────────────────────────────────────
const HeroSection = lazy(() =>
  import("./pages/sections/HeroSection").then((m) => ({
    default: m.HeroSection,
  })),
);
const AboutSection = lazy(() =>
  import("./pages/sections/AboutSection").then((m) => ({
    default: m.AboutSection,
  })),
);
const TourCompassSection = lazy(() =>
  import("./pages/sections/TourCompassSection").then((m) => ({
    default: m.TourCompassSection,
  })),
);
const DestinationsSection = lazy(() =>
  import("./pages/sections/DestinationsSection").then((m) => ({
    default: m.DestinationsSection,
  })),
);
const WhyChooseUsSection = lazy(() =>
  import("./pages/sections/WhyChooseUsSection").then((m) => ({
    default: m.WhyChooseUsSection,
  })),
);
const TestimonialsSection = lazy(() =>
  import("./pages/sections/TestimonialsSection").then((m) => ({
    default: m.TestimonialsSection,
  })),
);
const FounderSection = lazy(() =>
  import("./pages/sections/FounderSection").then((m) => ({
    default: m.FounderSection,
  })),
);
const FAQSection = lazy(() =>
  import("./pages/sections/FAQSection").then((m) => ({
    default: m.FAQSection,
  })),
);
// ─── Lazy-loaded full pages ────────────────────────────────────────────────────
const DesignYourJourneySection = lazy(() =>
  import("./pages/sections/DesignYourJourneySection").then((m) => ({
    default: m.DesignYourJourneySection,
  })),
);

const TravelClarityHub = lazy(() =>
  import("./pages/TravelClarityHub").then((m) => ({
    default: m.TravelClarityHub,
  })),
);

const JourneyAtlas = lazy(() =>
  import("./pages/JourneyAtlas").then((m) => ({
    default: m.JourneyAtlas,
  })),
);

// ─── Loading fallback ─────────────────────────────────────────────────────────

function SectionFallback() {
  return (
    <div className="w-full py-24 flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-foreground border-t-transparent animate-spin" />
    </div>
  );
}

// ─── Pages ────────────────────────────────────────────────────────────────────

function HomePage() {
  return (
    <Layout>
      <Suspense fallback={<SectionFallback />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TourCompassSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <DestinationsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <WhyChooseUsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FounderSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <DesignYourJourneySection />
      </Suspense>
    </Layout>
  );
}

function TravelClarityHubPage() {
  return (
    <Layout>
      <Suspense fallback={<SectionFallback />}>
        <TravelClarityHub />
      </Suspense>
    </Layout>
  );
}

function JourneyAtlasPage() {
  return (
    <Layout>
      <Suspense fallback={<SectionFallback />}>
        <JourneyAtlas />
      </Suspense>
    </Layout>
  );
}

// ─── 404 ──────────────────────────────────────────────────────────────────────

function NotFoundPage() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center section-padding text-center">
        <p className="text-label text-muted-foreground mb-4">404</p>
        <h1 className="font-display text-heading-lg text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8 max-w-sm">
          The page you are looking for does not exist. Let us guide you back.
        </p>
        <Link
          to="/"
          className="btn-outline-gold rounded-full px-6 py-3 text-sm"
          style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          Return Home
        </Link>
      </div>
    </Layout>
  );
}

// ─── Router ───────────────────────────────────────────────────────────────────

const rootRoute = createRootRoute();

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const travelClarityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/travel-clarity-hub",
  component: TravelClarityHubPage,
});

const journeyAtlasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/journey-atlas",
  component: JourneyAtlasPage,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: NotFoundPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  travelClarityRoute,
  journeyAtlasRoute,
  notFoundRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// ─── Query client ─────────────────────────────────────────────────────────────

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

// ─── App root ─────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </QueryClientProvider>
  );
}
