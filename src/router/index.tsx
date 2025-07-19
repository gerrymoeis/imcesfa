import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";

// Lazy load pages for code splitting
const HomePage = lazy(() => import("@/pages/Home"));
const AboutPage = lazy(() => import("@/pages/About"));
const TimelinePage = lazy(() => import("@/pages/Timeline"));
const SponsorPage = lazy(() => import("@/pages/Sponsor"));
const FaqPage = lazy(() => import("@/pages/Faq"));

const suspenseFallback = <div className="w-full h-screen flex items-center justify-center bg-background text-primary animate-pulse">Loading...</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Suspense fallback={suspenseFallback}><HomePage /></Suspense>,
      },
      {
        path: "about",
        element: <Suspense fallback={suspenseFallback}><AboutPage /></Suspense>,
      },
      {
        path: "timeline",
        element: <Suspense fallback={suspenseFallback}><TimelinePage /></Suspense>,
      },
      {
        path: "sponsor",
        element: <Suspense fallback={suspenseFallback}><SponsorPage /></Suspense>,
      },
      {
        path: "faq",
        element: <Suspense fallback={suspenseFallback}><FaqPage /></Suspense>,
      },
    ],
  },
]);

export default router;
