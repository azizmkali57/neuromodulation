import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/home/HeroSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import NewsSection from "@/components/home/NewsSection";
import TransparencySection from "@/components/home/TransparencySection";
import ClinicalGallerySection from "@/components/home/ClinicalGallerySection";
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

        {/* C. Clinical Disciplines & Healthcare Specialties */}
        <NewsSection />

        {/* D. Our Mission & Vision & Clinical Commitments */}
        <TransparencySection />

        {/* E. Clinical Groundwork & Real Documentation Gallery */}
        <ClinicalGallerySection />

        {/* F. Healthcare Commitments & Contact Desk */}
        <SupportSection />

        {/* G. Verified Patient & Clinician Testimonials */}
        <TestimonialSection />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
