import Hero from "@/components/page/home/Hero";
import Features from "@/components/page/home/Features";
import CompetitionFields from "@/components/page/home/CompetitionFields";
import Faq from "@/components/page/home/Faq";
import CTA from "@/components/page/home/CTA";
import { Seo } from '@/components/common/Seo';

const HomePage = () => {
  return (
    <>
      <Seo 
        title="Beranda"
        description="Selamat datang di IMCESFA 2025. Kompetisi pemrograman dan desain tingkat nasional untuk mahasiswa. Daftar sekarang dan tunjukkan keahlianmu!"
        keywords="Kompetisi pemrograman, lomba desain, IMCESFA, Gemastik, Olivia, UI/UX, web development, C++"
      />
      <div className="flex flex-col gap-24 sm:gap-32 md:gap-48">
      <Hero />
      <Features />
      <CompetitionFields />
      <Faq />
      <CTA />
    </div>
    </>
  );
};

export default HomePage;
