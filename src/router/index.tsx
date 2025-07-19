import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import TimelinePage from "@/pages/Timeline";
import SponsorPage from "@/pages/Sponsor";
import FaqPage from "@/pages/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "timeline",
        element: <TimelinePage />,
      },
      {
        path: "sponsor",
        element: <SponsorPage />,
      },
      {
        path: "faq",
        element: <FaqPage />,
      },
    ],
  },
]);

export default router;
