import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/app/siteData";
import { directorsData, directorsList } from "@/app/directorsData";

export function generateStaticParams() {
  return [
    { slug: "dr-neha-arora-verma" },
    { slug: "dr-s-s-verma" },
    { slug: "coach-richha-arrora" }
  ];
}

function resolveDirector(slug) {
  if (!slug) return null;
  const s = slug.toLowerCase();
  if (directorsData[s]) return directorsData[s];
  if (s.includes("neha")) return directorsData["dr-neha-arora-verma"];
  if (s.includes("verma") && (s.includes("s-s") || s.includes("ss") || s.includes("s_s"))) {
    return directorsData["dr-s-s-verma"];
  }
  if (s.includes("richha") || s.includes("richa") || s.includes("coach")) {
    return directorsData["coach-richha-arrora"];
  }
  return null;
}

export async function generateMetadata({ params }) {
  const director = resolveDirector(params.slug);
  if (!director) {
    return {
      title: "Director Profile | Advanced Neuromodulation",
      description: "Meet our directors and clinical leaders."
    };
  }

  return {
    title: `${director.name} | ${director.badge} | Advanced Neuromodulation`,
    description: `${director.name} - ${director.designation}. ${director.intro.slice(0, 160)}...`,
    openGraph: {
      title: `${director.name} - Director`,
      description: director.tagline,
      images: [{ url: director.image }]
    }
  };
}

export default function DirectorSinglePage({ params }) {
  const director = resolveDirector(params.slug);

  if (!director) {
    return (
      <div className="w-100 bg-white" style={{ minHeight: "100vh" }}>
        <Header />
        <main className="main-content pt-header w-100 py-24 text-center">
          <div className="grid-p py-16">
            <h1 className="font-headings type-48 uppercase text-[#1D1A55] mb-4">
              Director Not Found
            </h1>
            <p className="type-18 text-gray-600 mb-8">
              The requested director profile could not be located.
            </p>
            <a
              href="/directors"
              className="button-link di relative font-headings type-24 color-orange uppercase"
            >
              <span className="over di color-white">View All Directors</span>
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const isDrNeha = director.slug === "dr-neha-arora-verma";
  const otherDirectors = directorsList.filter((d) => d.slug !== director.slug);

  return (
    <div className="w-100 bg-white" style={{ minHeight: "100vh" }}>
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="main-content pt-header w-100" id="director-profile">
        {/* Top Continuous Marquee */}
        <header
          className="marquee flex no-wrap font-headings type-108 uppercase color-white bg-dark overflow-hidden py-1"
          style={{ letterSpacing: "0.02em" }}
        >
          <div className="marquee-track flex">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex no-wrap px-4">
                {siteData.marqueeText}
              </div>
            ))}
          </div>
        </header>

        {/* =================================================================
            SECTION 1: HERO & EXECUTIVE OVERVIEW
        ================================================================= */}
        <section className="grid-p pt-6 sm:pt-8 pb-16 bg-white border-b border-[#BDDFEC]">
          <div className="m-auto" style={{ maxWidth: "1280px" }}>
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6"
            >
              <a href="/" className="hover:text-[#E9511C] transition-colors">
                Home
              </a>
              <span>/</span>
              <a href="/directors" className="hover:text-[#E9511C] transition-colors">
                Meet Our Directors
              </a>
              <span>/</span>
              <span className="text-[#1D1A55] font-bold">{director.name}</span>
            </nav>

            {/* Split Hero: Content (Left) & Portrait (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Title, Credentials & Intro */}
              <div className="lg:col-span-7">
                {/* Eyebrow Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span
                    className="font-headings type-18 uppercase px-3 py-1 font-bold"
                    style={{
                      backgroundColor: "var(--c-light-blue, #BDDFEC)",
                      color: "var(--c-darkest-blue, #1D1A55)",
                      letterSpacing: "0.05em"
                    }}
                  >
                    {director.badge}
                  </span>
                  {director.subBadge && (
                    <span
                      className="font-headings type-18 uppercase px-3 py-1 font-bold text-white bg-[#E9511C]"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      {director.subBadge}
                    </span>
                  )}
                  <span className="font-headings type-18 uppercase color-orange">
                    {director.roleCategory}
                  </span>
                </div>

                {/* Massive Broadsheet Director Name */}
                <h1
                  className="font-headings type-80 uppercase mb-3 text-[#1D1A55]"
                  style={{
                    lineHeight: "0.95em",
                    letterSpacing: "-0.01em"
                  }}
                >
                  {director.name}
                </h1>

                {/* Main Headline from official document */}
                {director.mainHeadline && (
                  <div
                    className="font-headings type-28 uppercase mb-4 text-[#E9511C] highlight-bolds leading-tight"
                    style={{ maxWidth: "26em" }}
                  >
                    <b>{director.mainHeadline}</b>
                  </div>
                )}

                {/* Designation & Tagline */}
                <div className="mb-5">
                  <p className="font-headings type-20 text-[#1D1A55] uppercase mb-1">
                    {director.designation}
                  </p>
                  <p className="type-16 text-gray-600 font-medium italic">
                    {director.tagline}
                  </p>
                </div>

                {/* Credentials & Roles Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {director.rolesList ? (
                    director.rolesList.map((role, rIdx) => (
                      <span
                        key={rIdx}
                        className="inline-flex items-center text-xs font-bold uppercase tracking-wider bg-[#f0f4f9] text-[#1D1A55] px-3 py-1.5 border-l-2 border-[#E9511C]"
                      >
                        {role}
                      </span>
                    ))
                  ) : (
                    <>
                      <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider bg-[#f0f4f9] text-[#1D1A55] px-3 py-1.5 border-l-2 border-[#E9511C]">
                        {director.credentials}
                      </span>
                      <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider bg-[#00AF9C]/10 text-[#0065BD] px-3 py-1.5 border-l-2 border-[#00AF9C]">
                        {director.experience}
                      </span>
                    </>
                  )}
                </div>

                {/* Intro Summary Paragraph */}
                <p className="type-18 leading-relaxed text-[#1D1A55] font-normal mb-8">
                  {director.intro}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 items-center mb-10">
                  <a
                    href={director.contactInfo.phoneHref}
                    className="button-link di relative font-headings type-24 ls lh-1 color-orange uppercase"
                    id="director-call-btn"
                  >
                    <span className="over di color-white">
                      Call: {director.contactInfo.phone}
                    </span>
                  </a>
                  <a
                    href={director.contactInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-link di relative font-headings type-24 ls lh-1 uppercase"
                    style={{
                      backgroundColor: "var(--c-darkest-blue, #1D1A55)",
                      color: "#ffffff"
                    }}
                    id="director-whatsapp-btn"
                  >
                    <span className="over di color-white">WhatsApp Inquiry</span>
                  </a>
                </div>

                {/* 4 Stats Grid in Crisp Broadsheet Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#BDDFEC]">
                  {director.stats.map((st, sIdx) => (
                    <div key={sIdx} className="bg-[#f8fafc] p-3 border-t-2 border-[#E9511C]">
                      <div className="font-headings type-36 color-orange leading-none mb-1">
                        {st.value}
                      </div>
                      <div className="text-[11px] font-bold uppercase text-gray-600 leading-tight">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Portrait & Directorial Placard */}
              <div className="lg:col-span-5">
                <div className="relative lg:sticky lg:top-28 bg-[#f5f8fc] p-3 border-2 border-[#BDDFEC] shadow-xl">
                  {/* Photo Frame */}
                  <div
                    className="relative overflow-hidden w-full"
                    style={{
                      aspectRatio: "1/1.05",
                      backgroundColor: "#1D1A55"
                    }}
                  >
                    <img
                      src={director.image}
                      alt={`${director.name} - ${director.designation}`}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: director.objectPosition || "center top" }}
                      loading="eager"
                    />
                    <div
                      className="absolute bottom-0 inset-x-0 p-5 text-white"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(29, 26, 85, 0.96) 0%, rgba(29, 26, 85, 0.65) 60%, transparent 100%)"
                      }}
                    >
                      <div className="font-headings type-28 uppercase leading-none mb-1 text-white">
                        {director.name}
                      </div>
                      <div className="text-xs font-semibold text-[#FEE003] uppercase tracking-wider">
                        {director.experience}
                      </div>
                    </div>
                  </div>

                  {/* Placard / Clinical Office Info */}
                  <div className="p-4 bg-white border-t border-[#BDDFEC] mt-3">
                    <div className="mb-3">
                      <div className="font-headings type-18 uppercase text-[#1D1A55]">
                        {director.credentials}
                      </div>
                      <div className="text-xs text-gray-500 font-medium mt-1">
                        {director.tagline}
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-4 pt-3 border-t border-gray-100">
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                          Direct Helpline
                        </div>
                        <a
                          href={director.contactInfo.phoneHref}
                          className="font-headings type-20 text-[#1D1A55] hover:text-[#E9511C] transition-colors"
                        >
                          {director.contactInfo.phone}
                        </a>
                      </div>
                      <div className="text-right">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                          Location
                        </div>
                        <div className="text-xs font-semibold text-[#1D1A55]">
                          Indore, MP
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SPECIAL HIGHLIGHT: MISSION & VISION SECTION
        ================================================================= */}
        {director.mission && (
          <section className="bg-[#1D1A55] text-white py-16 grid-p border-b-4 border-[#E9511C]">
            <div className="m-auto" style={{ maxWidth: "1200px" }}>
              <div className="flex flex-wrap items-center gap-3 mb-6 justify-center">
                <span className="font-headings type-18 uppercase px-3 py-1 bg-[#E9511C] text-white font-bold">
                  {director.subBadge || "EXECUTIVE LEADERSHIP"}
                </span>
                <span className="font-headings type-18 uppercase text-[#FEE003] tracking-wider">
                  MISSION &amp; VISION STATEMENT
                </span>
              </div>

              {/* If single mission with slogan (Dr. Neha) */}
              {isDrNeha ? (
                <div>
                  <div className="text-center mb-8">
                    <h2 className="font-headings type-48 uppercase text-[#FEE003] mb-4 leading-tight">
                      MISSION
                    </h2>
                    <blockquote className="type-24 font-headings uppercase leading-relaxed text-white max-w-4xl mx-auto m-0">
                      &ldquo;{director.mission}&rdquo;
                    </blockquote>
                  </div>

                  <div className="text-center pt-6 border-t border-white/20">
                    <p className="font-headings type-20 text-[#BDDFEC] uppercase tracking-wide m-0">
                      {director.missionSlogan}
                    </p>
                  </div>
                </div>
              ) : (
                /* Dual Mission & Vision Grid (Dr. S.S. Verma & Coach Richha) */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  {/* Mission Box */}
                  <div className="bg-white/10 p-8 border-t-4 border-[#FEE003] flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-headings uppercase text-[#FEE003] tracking-widest block mb-2">
                        OUR CORE PURPOSE
                      </span>
                      <h2 className="font-headings type-36 uppercase text-white mb-4 leading-tight">
                        MISSION
                      </h2>
                      <p className="type-16 leading-relaxed text-white/90 m-0">
                        &ldquo;{director.mission}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Vision Box */}
                  <div className="bg-white/10 p-8 border-t-4 border-[#00AF9C] flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-headings uppercase text-[#00AF9C] tracking-widest block mb-2">
                        LOOKING FORWARD
                      </span>
                      <h2 className="font-headings type-36 uppercase text-white mb-4 leading-tight">
                        VISION
                      </h2>
                      <p className="type-16 leading-relaxed text-white/90 m-0">
                        &ldquo;{director.vision}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* =================================================================
            SECTION 2: IN-DEPTH CLINICAL / EXECUTIVE BIOGRAPHY & VISION
        ================================================================= */}
        <section className="grid-p pt-88 pb-88 bg-[#f8fafc] border-b border-[#BDDFEC]">
          <div className="m-auto" style={{ maxWidth: "1280px" }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column (7 cols): Full Narrative Journey */}
              <div className="lg:col-span-7">
                <span className="font-headings type-18 color-orange uppercase mb-2 block">
                  LEADERSHIP PROFILE & BACKGROUND
                </span>
                <h2 className="font-headings type-48 uppercase text-[#1D1A55] mb-8 leading-tight">
                  ABOUT {director.name}
                </h2>

                <div className="space-y-6 text-[#1D1A55] type-16 leading-relaxed">
                  {director.overview.map((para, pIdx) => (
                    <p key={pIdx} className="text-gray-800 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Key Responsibilities Block */}
                <div className="mt-10 p-6 bg-white border-l-4 border-[#00AF9C] shadow-sm">
                  <h3 className="font-headings type-20 uppercase text-[#1D1A55] mb-4">
                    Key Directorial Responsibilities
                  </h3>
                  <ul className="space-y-3">
                    {director.keyResponsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="inline-block w-2 h-2 rounded-full bg-[#E9511C] mt-1.5 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column (5 cols): Pull Quote & Key Credentials */}
              <div className="lg:col-span-5 space-y-6">
                {/* Director's Signature Quote Block */}
                <div
                  className="p-8 text-white relative shadow-lg"
                  style={{ backgroundColor: "var(--c-darkest-blue, #1D1A55)" }}
                >
                  <div
                    className="font-headings text-6xl text-[#E9511C] leading-none mb-2"
                    aria-hidden="true"
                  >
                    “
                  </div>
                  <blockquote className="m-0 mb-6 font-headings type-22 uppercase leading-snug text-[#FEE003]">
                    {director.quote}
                  </blockquote>
                  <div className="border-t border-white/20 pt-4 text-xs font-headings uppercase text-white/80">
                    — {director.name}, <span className="text-[#BDDFEC]">{director.badge}</span>
                  </div>
                </div>

                {/* Direct Action Card */}
                <div className="p-6 bg-white border border-[#BDDFEC] shadow-sm">
                  <div className="font-headings type-20 uppercase text-[#1D1A55] mb-2">
                    Schedule a Consultation
                  </div>
                  <p className="text-xs text-gray-600 mb-4 leading-normal">
                    Connect directly with the clinical and administrative team to schedule
                    inquiries, workshop seat bookings, or patient appointments.
                  </p>
                  <div className="space-y-2">
                    <a
                      href={director.contactInfo.phoneHref}
                      className="block text-center py-2.5 px-4 font-headings type-18 uppercase bg-[#E9511C] text-white hover:bg-[#d44312] transition-colors"
                    >
                      Call Helpline: {director.contactInfo.phone}
                    </a>
                    <a
                      href={director.contactInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center py-2.5 px-4 font-headings type-18 uppercase bg-[#25D366] text-white hover:bg-[#1ebc59] transition-colors"
                    >
                      WhatsApp Direct Desk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SPECIAL SECTION: SHREE NAMOH WELLNESS' BROADER HEALTHCARE VISION
        ================================================================= */}
        {isDrNeha && director.shreeNamohVision && (
          <section className="grid-p pt-88 pb-88 bg-white border-b border-[#BDDFEC]">
            <div className="m-auto" style={{ maxWidth: "1280px" }}>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="font-headings type-18 color-orange uppercase mb-2 block">
                  INTEGRATED HEALTHCARE EXCELLENCE
                </span>
                <h2 className="font-headings type-48 uppercase text-[#1D1A55] leading-tight">
                  SHREE NAMOH WELLNESS VISION
                </h2>
                <p className="type-16 text-gray-600 mt-2">
                  Uniting advanced neurological rehabilitation, genetic counseling, and specialized eye care
                  under one visionary institution in Central India.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {director.shreeNamohVision.map((v, vIdx) => (
                  <div
                    key={vIdx}
                    className="p-6 bg-[#f8fafc] border-t-4 border-[#1D1A55] hover:border-[#E9511C] transition-colors shadow-sm"
                  >
                    <div className="text-xs font-headings uppercase text-[#E9511C] mb-2 tracking-wider">
                      {v.lead}
                    </div>
                    <h3 className="font-headings type-22 uppercase text-[#1D1A55] mb-3">
                      {v.title}
                    </h3>
                    <p className="type-15 text-gray-700 leading-relaxed m-0">
                      {v.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =================================================================
            SECTION 3: AREAS OF SPECIALIZATION / EXPERTISE
        ================================================================= */}
        <section className="grid-p pt-88 pb-88 bg-[#f8fafc] border-b border-[#BDDFEC]">
          <div className="m-auto" style={{ maxWidth: "1280px" }}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-headings type-18 color-orange uppercase mb-2 block">
                CORE CAPABILITIES & EXPERTISE
              </span>
              <h2 className="font-headings type-48 uppercase text-[#1D1A55] leading-tight">
                AREAS OF SPECIALIZATION
              </h2>
              <p className="type-16 text-gray-600 mt-2">
                Advancing clinical excellence and patient-centered protocols across diverse domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {director.specializations.map((spec, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white border-t-4 border-[#00AF9C] hover:shadow-md transition-shadow"
                >
                  <div className="text-xs font-headings uppercase text-[#E9511C] mb-2 tracking-wider">
                    {spec.category}
                  </div>
                  <h3 className="font-headings type-24 uppercase text-[#1D1A55] mb-3">
                    {spec.title}
                  </h3>
                  <p className="type-15 text-gray-700 leading-relaxed m-0">
                    {spec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 4: CAREER JOURNEY & LEADERSHIP TIMELINE
        ================================================================= */}
        <section className="grid-p pt-88 pb-88 bg-white border-b border-[#BDDFEC]">
          <div className="m-auto" style={{ maxWidth: "1100px" }}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-headings type-18 color-orange uppercase mb-2 block">
                CAREER MILESTONES
              </span>
              <h2 className="font-headings type-48 uppercase text-[#1D1A55] leading-tight">
                LEADERSHIP JOURNEY
              </h2>
            </div>

            <div className="space-y-6">
              {director.timeline.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#f8fafc] p-6 border-l-4 border-[#1D1A55] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="md:w-1/4">
                    <span className="font-headings type-20 color-orange uppercase">
                      {item.year}
                    </span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="font-headings type-20 uppercase text-[#1D1A55] mb-1">
                      {item.title}
                    </h3>
                    <p className="type-15 text-gray-700 m-0 leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 5: SIGNATURE PHILOSOPHY BANNER
        ================================================================= */}
        <section className="bg-green py-20 grid-p text-center text-white">
          <div className="m-auto" style={{ maxWidth: "1000px" }}>
            <span
              className="font-headings type-18 uppercase px-4 py-1 inline-block mb-6"
              style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
            >
              DIRECTOR&apos;S CLINICAL &amp; WELLNESS PHILOSOPHY
            </span>
            <h2
              className="font-headings type-36 uppercase leading-snug mx-auto mb-8"
              style={{ maxWidth: "20em" }}
            >
              &ldquo;{director.quote}&rdquo;
            </h2>
            <div className="font-headings type-20 uppercase text-[#FEE003]">
              {director.name} — {director.badge}
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 6: MEET OTHER DIRECTORS (Seamless Navigation)
        ================================================================= */}
        <section className="grid-p pt-88 pb-88 bg-white border-b border-[#BDDFEC]">
          <div className="m-auto" style={{ maxWidth: "1280px" }}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="font-headings type-18 color-orange uppercase mb-2 block">
                  LEADERSHIP TEAM
                </span>
                <h2 className="font-headings type-48 uppercase text-[#1D1A55] leading-tight">
                  MEET OUR OTHER DIRECTORS
                </h2>
              </div>
              <a
                href="/directors"
                className="font-headings type-20 uppercase text-[#E9511C] hover:underline mt-4 md:mt-0"
              >
                View All Directors →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherDirectors.map((other, oIdx) => (
                <a
                  key={oIdx}
                  href={`/directors/${other.slug}`}
                  className="group bg-[#f8fafc] border border-[#BDDFEC] hover:border-[#E9511C] transition-all p-6 flex flex-col sm:flex-row gap-6 items-center shadow-sm hover:shadow-lg"
                >
                  <div
                    className="w-32 h-32 flex-shrink-0 overflow-hidden bg-[#1D1A55] border-2 border-[#E9511C]"
                    style={{ aspectRatio: "1" }}
                  >
                    <img
                      src={other.image}
                      alt={other.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ objectPosition: other.objectPosition || "center top" }}
                    />
                  </div>
                  <div className="flex-auto text-left">
                    <span className="text-[11px] font-headings uppercase text-[#E9511C] tracking-wider block mb-1">
                      {other.badge}
                    </span>
                    <h3 className="font-headings type-24 uppercase text-[#1D1A55] group-hover:text-[#E9511C] transition-colors mb-1">
                      {other.name}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 mb-3">
                      {other.tagline}
                    </p>
                    <span className="inline-flex items-center text-xs font-headings uppercase font-bold text-[#0065BD] group-hover:translate-x-1 transition-transform">
                      Read Full Profile →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 7. Global Footer */}
      <Footer />
    </div>
  );
}
