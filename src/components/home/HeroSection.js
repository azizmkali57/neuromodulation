"use client";

import React, { useState, useEffect, useRef } from "react";
import { siteData } from "@/app/siteData";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = siteData.heroSlides;
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length]);

  const handlePrev = (e) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
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

      {/* Main hero carousel - Full Width Desktop */}
      <section
        id="slider-main"
        className="slider over overflow init-slider w-100 relative bg-[#0b1021]"
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          minHeight: "clamp(220px, 35vw, 440px)",
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
              {/* Full Width Slide image */}
              <div className="fill-dimensions z-1 pe-none">
                <picture className="fill-dimensions z-1 pe-none">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="abs-tl z-1 pe-none fit"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center center",
                    }}
                  />
                </picture>
              </div>

              {/* Accessible Hidden SEO Header */}
              <header className="sr-only">
                <span>{slide.tag}</span>
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
                <p>{slide.supportingText}</p>
              </header>

              {/* Clickable full slide link */}
              <a
                href={slide.href}
                className="fill-dimensions z-10 block"
                aria-label={`${slide.tag}: ${slide.title}`}
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
            left: "clamp(10px, 2.5vw, 32px)",
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
            style={{ width: "clamp(36px, 5.5vw, 72px)" }}
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
            right: "clamp(10px, 2.5vw, 32px)",
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
            style={{ width: "clamp(36px, 5.5vw, 72px)" }}
          >
            <path
              fill="currentColor"
              d="M81.121 13.06a1.5 1.5 0 0 0 0-2.12l-9.546-9.547a1.5 1.5 0 1 0-2.121 2.122L77.939 12l-8.485 8.485a1.5 1.5 0 1 0 2.121 2.122l9.546-9.546ZM.782 13.5H80.06v-3H.782v3Z"
            />
          </svg>
        </button>

        {/* Bottom Pagination Dots */}
        <div
          className="absolute z-30 flex items-center justify-center gap-3"
          style={{
            bottom: "clamp(16px, 3vw, 36px)",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {slides.map((_, dotIdx) => {
            const isActive = dotIdx === currentSlide;
            return (
              <button
                key={dotIdx}
                onClick={() => goToSlide(dotIdx)}
                type="button"
                aria-label={`Go to slide ${dotIdx + 1}`}
                style={{
                  width: isActive ? "32px" : "12px",
                  height: "12px",
                  borderRadius: "6px",
                  backgroundColor: isActive ? "var(--c-orange, #E9511C)" : "rgba(255, 255, 255, 0.75)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                }}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
