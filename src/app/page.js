import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/home/HeroSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import MissionSection from "@/components/home/MissionSection";
import NewsSection from "@/components/home/NewsSection";
import TransparencySection from "@/components/home/TransparencySection";
import DonationSection from "@/components/home/DonationSection";
import ActionsSection from "@/components/home/ActionsSection";
import SupportSection from "@/components/home/SupportSection";

export default function Home() {
  return (
    <div className="w-100 bg-white" style={{ minHeight: "100vh" }}>
      {/* 1. Header & Navigation */}
      <Header />

      {/* 2. Main Page Content */}
      <main className="main-content pt-header w-100" id="content">
        {/* A. Hero Carousel & Marquee */}
        <HeroSection />

        {/* B. Organization Introduction */}
        <IntroductionSection />

        {/* C. Mission Statement */}
        <MissionSection />

        {/* D. News & Events Area */}
        <NewsSection />

        {/* E. Financial Transparency Banner */}
        <TransparencySection />

        {/* F. Donation Section */}
        <DonationSection />

        {/* G. Actions of MDM & Network Maps */}
        <ActionsSection />

        {/* H. Support Call To Action & Partner Logos Carousel */}
        <SupportSection />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
