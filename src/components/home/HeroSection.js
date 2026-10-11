"use client";

import React, { useState, useEffect } from "react";
import { siteData } from "@/app/siteData";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = siteData.heroSlides;

  // Auto-advance every 8 seconds as in reference data-autoplaytime="8"
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = (e) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-100 overflow">
      {/* Top marquee running above the hero */}
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

      {/* Main hero carousel */}
      <section
        id="slider-main"
        className="slider over overflow init-slider w-100 relative bg-[#f5f7fd]"
        style={{
          aspectRatio: "2.1",
          maxHeight: "calc(100dvh - var(--header-height) - 40px)",
          minHeight: "440px",
        }}
      >
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <article
              key={slide.id}
              className={`slider__item fill-dimensions flex flex-vab overflow transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Slide image */}
              <div className="fill-dimensions z-1 pe-none">
                <picture className="fill-dimensions z-1 pe-none">
                  <img
                    src={slide.image}
                    srcSet={slide.srcset}
                    alt={slide.title}
                    className="abs-tl z-1 pe-none fit"
                    style={{ objectPosition: "center center" }}
                  />
                </picture>
              </div>

              {/* Slide overlay titles */}
              <header className="slider-titles over w-100 box-sizing grid-p mb-64 font-headings type-32 uppercase z-20">
                <div className="relative width-fit" style={{ maxWidth: "28em" }}>
                  <div className="highlight-holder mb-2">
                    <span
                      className="bg-highlight color-blue font-headings"
                      style={{ "--bg": "#fff", backgroundColor: "#fff", color: "var(--c-blue)" }}
                    >
                      {slide.tag}
                    </span>
                  </div>
                  <div className="mb-2">
                    <span
                      className="bg-highlight color-white font-headings"
                      style={{
                        "--bg": "var(--c-blue)",
                        backgroundColor: "var(--c-blue)",
                        color: "#fff",
                      }}
                    >
                      {slide.title}
                    </span>
                  </div>
                  {slide.subtitle && (
                    <div>
                      <span
                        className="bg-highlight font-headings uppercase text-xs sm:text-sm tracking-wider"
                        style={{
                          "--bg": "var(--c-orange)",
                          backgroundColor: "var(--c-orange)",
                          color: "#fff",
                          padding: "2px 8px",
                          display: "inline-block"
                        }}
                      >
                        {slide.subtitle}
                      </span>
                    </div>
                  )}
                </div>
              </header>

              {/* Clickable full link */}
              <a
                href={slide.href}
                className="fill-dimensions z-10"
                aria-label={`${slide.tag} ${slide.title}`}
              />
            </article>
          );
        })}

        {/* Previous arrow navigation */}
        <button
          onClick={handlePrev}
          type="button"
          aria-label="Previous Slide"
          className="slider-nav slider-prev clickable trans abs-lc flex flex-vac color-white hover-orange border-0 bg-transparent cursor-pointer z-30"
          style={{
            position: "absolute",
            left: "var(--side-gap)",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#fff",
          }}
        >
          <svg
            className="arrow-prev-next drop-shadow"
            preserveAspectRatio="xMinYMin meet"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 82 24"
            style={{ width: "clamp(52px, 8vw, 80px)" }}
          >
            <path
              fill="currentColor"
              d="M.884 10.94a1.5 1.5 0 0 0 0 2.12l9.546 9.547a1.5 1.5 0 1 0 2.12-2.122L4.067 12l8.485-8.485a1.5 1.5 0 1 0-2.121-2.122L.884 10.94Zm80.338-.44H1.944v3h79.278v-3Z"
            />
          </svg>
        </button>

        {/* Next arrow navigation */}
        <button
          onClick={handleNext}
          type="button"
          aria-label="Next Slide"
          className="slider-nav slider-next clickable trans abs-rc flex flex-end flex-vac color-white hover-orange border-0 bg-transparent cursor-pointer z-30"
          style={{
            position: "absolute",
            right: "var(--side-gap)",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#fff",
          }}
        >
          <svg
            className="arrow-prev-next drop-shadow"
            preserveAspectRatio="xMinYMin meet"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 82 24"
            style={{ width: "clamp(52px, 8vw, 80px)" }}
          >
            <path
              fill="currentColor"
              d="M81.121 13.06a1.5 1.5 0 0 0 0-2.12l-9.546-9.547a1.5 1.5 0 1 0-2.121 2.122L77.939 12l-8.485 8.485a1.5 1.5 0 1 0 2.121 2.122l9.546-9.546ZM.782 13.5H80.06v-3H.782v3Z"
            />
          </svg>
        </button>
      </section>
    </div>
  );
}
