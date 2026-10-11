"use client";

import React, { useEffect, useRef } from "react";
import { siteData } from "@/app/siteData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NewsSection() {
  const {
    badge,
    headingHighlight,
    headingRest,
    viewAllText,
    viewAllHref,
    leftColumn,
    rightColumn,
  } = siteData.newsSection;

  const sectionRef = useRef(null);
  const stickyHeaderRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const stickyHeader = stickyHeaderRef.current;
    if (!section || !stickyHeader) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 881px)", () => {
      // Parallax reveal on the cards as user scrolls through
      const cards = section.querySelectorAll(".cpt-item");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0.8 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-header pb-40 ps dg grid-home-news gap-f lap-ps-gap mobsm-db relative"
      id="diseases"
    >
      {/* Middle Column with Scroll Pinning & Heading */}
      <header
        ref={stickyHeaderRef}
        className="gas-start font-headings type-128 a-center sticky-t"
        style={{
          gridArea: "title",
          top: "var(--header-height, 120px)",
          position: "sticky",
          zIndex: 10,
        }}
        id="sticky-el"
      >
        <div className="mh flex flex-columns flex-center flex-vac box-sizing pb-40 tabv-mh">
          <h2
            className="font-headings type-28 uppercase m-auto mb-40 color-orange"
            style={{ maxWidth: "8em" }}
          >
            {badge}
          </h2>

          <svg
            className="type-24 w-1 color-orange mb-88"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
            fill="none"
            viewBox="0 0 24 75"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M10.94 74.06a1.5 1.5 0 0 0 2.12 0l9.547-9.545a1.5 1.5 0 1 0-2.122-2.122L12 70.88l-8.485-8.486a1.5 1.5 0 1 0-2.122 2.122l9.546 9.546ZM10.5 0v73h3V0h-3Z"
            />
          </svg>

          <h3
            className="font-headings type-128 uppercase mb-88 highlight-bolds m-auto overflow"
            style={{ maxWidth: "7.5em", lineHeight: "0.95em" }}
          >
            <b>{headingHighlight}</b> <br />
            {headingRest}
          </h3>

          <svg
            className="type-24 w-1 color-orange mb-40 tabv-hide"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
            fill="none"
            viewBox="0 0 24 75"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M10.94 74.06a1.5 1.5 0 0 0 2.12 0l9.547-9.545a1.5 1.5 0 1 0-2.122-2.122L12 70.88l-8.485-8.486a1.5 1.5 0 1 0-2.122 2.122l9.546 9.546ZM10.5 0v73h3V0h-3Z"
            />
          </svg>

          <div className="type-28">
            <a
              href={viewAllHref}
              className="button-link di relative font-headings type-28 ls lh-1 color-orange"
            >
              <span className="over di color-white uppercase">{viewAllText}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Left Column of Articles */}
      <div className="flex flex-columns rg" style={{ gridArea: "left-col" }}>
        {leftColumn.map((item) => (
          <article
            key={item.id}
            className="cpt-item mb-88 over w-100"
            style={{ maxWidth: "570px" }}
            id={item.id}
          >
            <a href={item.href} className="fill-dimensions hover-after" aria-label={item.title}></a>
            <div
              className="cpt_image w-100 relative mb-24 pe-none overflow img trans-slow"
              style={{ aspectRatio: "465/570" }}
            >
              <div className="fill-dimensions overflow">
                <picture className="fill-dimensions z-1 pe-none picture trans-slow">
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className="abs-tl z-1 pe-none fit img"
                  />
                </picture>
              </div>
            </div>
            <header className="flex flex-wrap flex-vabase gap-sm rg mb-12 font-headings type-20" style={{ "--gut": "10px" }}>
              <div className="color-orange uppercase">{item.category}</div>
              <div className="">{item.date}</div>
            </header>
            <h3 className="font-bold type-24 ls--05 mb-12 the-title">{item.title}</h3>
            <div className="type-15 lines-clamp3">{item.excerpt}</div>
          </article>
        ))}
      </div>

      {/* Right Column of Articles */}
      <div className="flex flex-columns flex-vab rg mobsm-hide" style={{ gridArea: "right-col" }}>
        {rightColumn.map((item) => (
          <article
            key={item.id}
            className="cpt-item mb-88 over w-100"
            style={{ maxWidth: "570px" }}
            id={item.id}
          >
            <a href={item.href} className="fill-dimensions hover-after" aria-label={item.title}></a>
            <div
              className="cpt_image w-100 relative mb-24 pe-none overflow img trans-slow"
              style={{ aspectRatio: "465/570" }}
            >
              <div className="fill-dimensions overflow">
                <picture className="fill-dimensions z-1 pe-none picture trans-slow">
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className="abs-tl z-1 pe-none fit img"
                  />
                </picture>
              </div>
            </div>
            <header className="flex flex-wrap flex-vabase gap-sm rg mb-12 font-headings type-20" style={{ "--gut": "10px" }}>
              <div className="color-orange uppercase">{item.category}</div>
              <div className="">{item.date}</div>
            </header>
            <h3 className="font-bold type-24 ls--05 mb-12 the-title">{item.title}</h3>
            <div className="type-15 lines-clamp3">{item.excerpt}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
