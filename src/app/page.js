import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/home/HeroSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import MissionSection from "@/components/home/MissionSection";
import NewsSection from "@/components/home/NewsSection";
import TransparencySection from "@/components/home/TransparencySection";
import DonationSection from "@/components/home/DonationSection";
import SupportSection from "@/components/home/SupportSection";
import TestimonialSection from "@/components/home/TestimonialSection";

export default function Home() {
  return (
    <div className="w-100 bg-white" style={{ minHeight: "100vh" }}>
      {/* 1. Header & Navigation */}
      <Header />

      {/* 2. Main Page Content */}
      <main className="main-content pt-header w-100" id="content">
        {/* A. Hero Carousel & Marquee - Full Width Desktop */}
        <HeroSection />

        {/* B. Organization Introduction */}
        <IntroductionSection />

        {/* C. Mission Statement */}
        <MissionSection />

        {/* D. Clinical Disciplines & Healthcare Specialties */}
        <NewsSection />

        {/* E. Vision & Clinical Standards */}
        <TransparencySection />

        {/* F. Consultation & Appointment Desk */}
        <DonationSection />

        {/* G. Healthcare Commitments & Contact Desk */}
        <SupportSection />

        {/* H. Verified Patient & Clinician Testimonials */}
        <TestimonialSection />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
