import Hero from "@/components/page/home/Hero";
import Features from "@/components/page/home/Features";
import CompetitionFields from "@/components/page/home/CompetitionFields";
import Faq from "@/components/page/home/Faq";
import CTA from "@/components/page/home/CTA";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Features />
      <CompetitionFields />
      <Faq />
      <CTA />
    </div>
  );
};

export default HomePage;
