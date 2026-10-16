"use client";

import React, { useState, useEffect, useRef } from "react";
import { siteData } from "@/app/siteData";

export default function TestimonialSection() {
  const { testimonials } = siteData;
  const items = testimonials?.items || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  // Responsive cards per view calculation
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          setCardsPerView(1);
        } else if (window.innerWidth < 1024) {
          setCardsPerView(2);
        } else {
          setCardsPerView(3);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, items.length - cardsPerView);

  // Auto-rotate from right to left every 3.8 seconds
  useEffect(() => {
    if (isPaused || items.length <= cardsPerView) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex, items.length, cardsPerView]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left -> slide right to left
        handleNext();
      } else {
        // Swiped right -> slide left to right
        handlePrev();
      }
    }
  };

  if (!testimonials || items.length === 0) return null;

  const { badge, headingHighlight, headingRest, lead, stats } = testimonials;

  return (
    <section
      className="grid-p pt-88 pb-88 border-t border-[#BDDFEC] overflow-hidden"
      id="testimonials"
      style={{ backgroundColor: "#f8fafc" }}
    >
      <div className="m-auto w-100" style={{ maxWidth: "1280px" }}>
        {/* Top Header & Slider Controls Split */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            {/* Top Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="font-headings type-18 uppercase px-3 py-1 font-bold inline-block"
                style={{
                  backgroundColor: "var(--c-light-blue, #BDDFEC)",
                  color: "var(--c-darkest-blue, #1D1A55)",
                  letterSpacing: "0.05em"
                }}
              >
                {badge}
              </span>
              {/* <span className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold px-2 py-0.5 bg-white border border-gray-200 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#00AF9C] animate-pulse"></span>
                Auto-Rotating Slider
              </span> */}
            </div>

            {/* Broadsheet Heading */}
            <h2
              className="font-headings type-72 uppercase highlight-bolds overflow m-0 leading-none"
              style={{
                "--bg": "var(--c-yellow, #FEE003)",
                lineHeight: "0.98em"
              }}
            >
              <b>{headingHighlight}</b> <br />
              {/* {headingRest} */}
            </h2>
          </div>

          {/* Navigation Buttons (Left & Right Arrows) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonials"
              className="w-12 h-12 rounded-full bg-white border-2 border-[#1D1A55] text-[#1D1A55] hover:bg-[#1D1A55] hover:text-white transition-colors flex items-center justify-center shadow-sm cursor-pointer"
            >
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonials"
              className="w-12 h-12 rounded-full bg-[#1D1A55] text-white hover:bg-[#E9511C] hover:border-[#E9511C] transition-colors flex items-center justify-center shadow-sm cursor-pointer"
            >
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Lead Narrative */}
        <p
          className="type-18 text-gray-700 mb-8 leading-relaxed"
          style={{ maxWidth: "48em" }}
        >
          {lead}
        </p>

        {/* =================================================================
            RIGHT-TO-LEFT AUTOMATIC SLIDER VIEWPORT
        ================================================================= */}
        <div
          className="relative w-100 overflow-hidden py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Horizontal Track sliding right to left */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)"
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  flex: `0 0 ${100 / cardsPerView}%`,
                  padding: "0 10px",
                  boxSizing: "border-box"
                }}
              >
                <div
                  className="bg-white border border-[#BDDFEC] p-6 sm:p-7 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full relative"
                  style={{
                    minHeight: "420px"
                  }}
                >
                  <div>
                    {/* Card Top: Category Badge & Verified Stamp */}
                    <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-gray-100">
                      <span
                        className="text-[10px] font-headings uppercase px-2.5 py-1 rounded font-bold tracking-wider"
                        style={{
                          backgroundColor:
                            item.category === "neuro"
                              ? "#E9511C18"
                              : item.category === "genomic"
                                ? "#00AF9C18"
                                : item.category === "eye"
                                  ? "#BDDFEC50"
                                  : "#1D1A5515",
                          color:
                            item.category === "neuro"
                              ? "#E9511C"
                              : item.category === "genomic"
                                ? "#00AF9C"
                                : item.category === "eye"
                                  ? "#0065BD"
                                  : "#1D1A55"
                        }}
                      >
                        {item.categoryLabel}
                      </span>

                      <span className="flex items-center gap-1 text-[11px] font-semibold text-[#00AF9C]">
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Verified
                      </span>
                    </div>

                    {/* Star Rating Widget (SVG) */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-[#FEE003] text-[#E9511C]"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-[11px] font-bold text-gray-500 ml-1.5">5.0 / 5.0</span>
                    </div>

                    {/* Quote Text */}
                    <p className="text-sm text-gray-800 leading-relaxed italic mb-5 line-clamp-5">
                      &ldquo;{item.quote}&rdquo;
                    </p>

                    {/* Clinical Milestone Ribbon */}
                    <div className="mb-4 p-3 bg-[#f5f8fc] border-l-4 border-[#00AF9C] rounded-r text-xs text-[#1D1A55] font-semibold">
                      <span className="font-bold text-[#00AF9C] block text-[10px] uppercase tracking-wider mb-0.5">
                        Clinical Milestone
                      </span>
                      {item.outcomeHighlight}
                    </div>
                  </div>

                  {/* Author & Director Attribution */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <div>
                      <div className="font-headings type-18 text-[#1D1A55] uppercase leading-tight">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500">{item.ageLocation}</div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-gray-400 uppercase block">Under Care of</span>
                      <span className="text-xs font-bold text-[#E9511C]">
                        {item.doctorName.replace("Dr. ", "").replace("Coach ", "")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Progress Indicators (Pills) */}
        <div className="flex items-center justify-center gap-2 mt-8 mb-14">
          {[...Array(maxIndex + 1)].map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer ${currentIndex === idx
                ? "w-8 bg-[#1D1A55]"
                : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>

        {/* Metrics Summary Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="bg-white p-4 border-t-4 border-[#00AF9C] border-r border-b border-l border-gray-200 text-center shadow-sm"
            >
              <div className="font-headings type-28 color-orange leading-none mb-1">
                {s.value}
              </div>
              <div className="text-[11px] font-bold uppercase text-gray-600 leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="bg-[#1D1A55] text-white p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#E9511C]">
          <div>
            <span className="text-xs uppercase font-headings text-[#FEE003] tracking-widest block mb-1">
              CONSULT OUR CLINICAL SPECIALISTS
            </span>
            <h3 className="font-headings type-24 text-white uppercase leading-tight">
              Begin Your Journey to Recovery &amp; Personalized Wellness
            </h3>
            <p className="text-xs text-[#BDDFEC] mt-1 max-w-xl">
              Connect with our clinical team at Shree Namoh Wellness for paralysis rehabilitation, genetic counseling,
              and advanced eye consultations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact-form-card"
              className="font-headings text-xs uppercase px-5 py-3 bg-[#E9511C] hover:bg-[#d44312] text-white rounded font-bold transition-colors"
            >
              Fill Contact Form ↑
            </a>
            <a
              href="tel:9827079888"
              className="font-headings text-xs uppercase px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded font-bold transition-colors"
            >
              Call: +91 9827079888
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
