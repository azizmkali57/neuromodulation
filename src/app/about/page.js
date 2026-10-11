"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/app/siteData";
import { aboutData } from "@/app/aboutData";

export default function AboutPage() {
  const {
    hero,
    drBiography,
    philosophy,
    neuromodulationExplained,
    pedagogicalApproach,
    whoWeServe,
    finalCta,
  } = aboutData;

  return (
    <div className="w-100 bg-white" style={{ minHeight: "100vh" }}>
      {/* 1. Global Header */}
      <Header />

      <main className="main-content pt-header w-100" id="content">
        {/* Top Marquee (Identical to Homepage) */}
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
            SECTION 1 — ABOUT HERO
            Distinct Editorial Broadsheet Design:
            Clean white background, bold condensed type, distinctive stats ticker,
            and side-by-side clinical focus imagery without duplicating the home carousel.
        ================================================================= */}
        <section
          id="about-hero"
          className="grid-p pt-64 pb-64 bg-white border-b border-[#BDDFEC]"
        >
          <div className="m-auto" style={{ maxWidth: "1280px" }}>
            {/* Top Eyebrow & Category Label */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="font-headings type-18 uppercase px-3 py-1"
                style={{
                  backgroundColor: "var(--c-light-blue, #BDDFEC)",
                  color: "var(--c-darkest-blue, #1D1A55)",
                  letterSpacing: "0.05em",
                }}
              >
                {hero.badge}
              </span>
              <span className="font-headings type-18 uppercase color-orange">
                CLINICAL PERSPECTIVE & FACULTY MISSION
              </span>
            </div>

            {/* Massive Broadsheet Title */}
            <h1
              className="font-headings type-128 uppercase mb-32 highlight-bolds overflow"
              style={{
                lineHeight: "0.96em",
                maxWidth: "13em",
                "--bg": "var(--c-yellow, #FEE003)",
              }}
            >
              <b>{hero.headingHighlight}</b>
              <br />
              {hero.headingRest}
            </h1>

            {/* Editorial Lead & Split Presentation */}
            <div className="dg grid-auto gap-large g-vat mb-48">
              {/* Left Column: Descriptive Core Narrative */}
              <div>
                <p
                  className="type-20 leading-relaxed font-semibold text-[#1D1A55] mb-6"
                  style={{ maxWidth: "34em" }}
                >
                  {hero.description}
                </p>
                <p className="type-15 text-gray-700 leading-relaxed mb-8" style={{ maxWidth: "36em" }}>
                  Our educational platform was founded to bridge the critical gap between laboratory neuroplasticity
                  research and immediate bedside application. By combining strict safety frameworks, device parameter
                  mastery, and multidisciplinary clinical training, we empower practitioners to unlock new recovery
                  potentials in complex neurology.
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={hero.primaryCtaHref}
                    className="button-link di relative font-headings type-24 ls lh-1 color-orange uppercase"
                  >
                    <span className="over di color-white">{hero.primaryCtaText}</span>
                  </a>
                  <a
                    href="/contact"
                    className="button-link di relative font-headings type-24 ls lh-1 uppercase"
                    style={{
                      backgroundColor: "var(--c-darkest-blue, #1D1A55)",
                      color: "#ffffff",
                    }}
                  >
                    <span className="over di color-white">Connect With Desk</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Key Academic Metrics Box */}
              <div
                className="bg-[#f5f8fc] p-8 border-l-4 border-[#00AF9C] flex flex-columns justify-between"
                style={{ minHeight: "260px" }}
              >
                <div className="font-headings type-20 uppercase color-darkest-blue mb-4">
                  Translational Highlights
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="font-headings type-48 color-orange mb-1">3 DAYS</div>
                    <div className="text-xs font-bold uppercase text-gray-600">
                      Intensive Clinical Immersion
                    </div>
                  </div>
                  <div>
                    <div className="font-headings type-48 color-orange mb-1">70%+</div>
                    <div className="text-xs font-bold uppercase text-gray-600">
                      Supervised Hands-On Practice
                    </div>
                  </div>
                  <div>
                    <div className="font-headings type-48 color-orange mb-1">100%</div>
                    <div className="text-xs font-bold uppercase text-gray-600">
                      Evidence-Based Protocols
                    </div>
                  </div>
                  <div>
                    <div className="font-headings type-48 color-orange mb-1">1:1</div>
                    <div className="text-xs font-bold uppercase text-gray-600">
                      Bedside Parameter Calibration
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wide Clinical Panorama Feature (Not a carousel overlay) */}
            <div
              className="w-100 relative overflow shadow-sm"
              style={{
                aspectRatio: "2.8",
                maxHeight: "440px",
                borderTop: "3px solid var(--c-orange, #E9511C)",
              }}
            >
              <img
                src={hero.heroImage}
                alt="Neuromodulation Clinical Rehabilitation"
                className="abs-tl z-1 pe-none fit img"
                style={{ objectPosition: "center 30%" }}
              />
              <div
                className="abs-br z-10 px-4 py-2 text-xs font-headings uppercase text-white"
                style={{ backgroundColor: "rgba(29, 26, 85, 0.85)" }}
              >
                ADVANCED NON-INVASIVE NEUROMODULATION TRAINING
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 2 — ABOUT DR. NEHA ARORA VERMA
            Mirrors the homepage split layout (dg grid-auto mobsm-db)
        ================================================================= */}
        <section className="dg grid-auto tabv-db border-b border-[#BDDFEC]" id="faculty">
          {/* Left: Authentic Doctor / Clinical Educator Image */}
          <div className="relative dg pile g-vac overflow" style={{ minHeight: "520px" }}>
            <div className="piled-item" style={{ aspectRatio: 1.2 }}></div>
            <picture className="fill-dimensions z-1 pe-none picture">
              <img
                loading="lazy"
                src={drBiography.portraitImage}
                alt="Dr. Neha Arora Verma - Clinical Neurorehabilitation Educator"
                className="abs-tl z-1 pe-none fit img"
              />
            </picture>
            <div className="fill-dimensions" style={{ backgroundColor: "#000", opacity: 0.25 }} />
            <h2
              className="font-headings type-48 uppercase m-auto over a-center color-white highlight-bolds piled-item overflow"
              style={{ width: "90%", maxWidth: "12em" }}
            >
              <b style={{ backgroundColor: "var(--c-orange)", color: "#fff" }}>
                {drBiography.headingHighlight}
              </b>
              <br />
              {drBiography.badge}
            </h2>
          </div>

          {/* Right: Sharp Editorial Biography block */}
          <article className="bg-[#f5f8fc] pt-88 pb-88 ps flex flex-columns flex-center">
            <div style={{ maxWidth: "34em" }}>
              <div className="font-headings type-20 color-orange uppercase mb-12">
                {drBiography.headingRest}
              </div>

              <div className="type-18 leading-relaxed text-[#1D1A55] mb-24">
                <p>{drBiography.introText}</p>
              </div>

              <div className="flex flex-columns gap-sm mb-32">
                {drBiography.biographyPoints.map((pt, idx) => (
                  <div key={idx} className="timeline-entry">
                    <h3 className="font-headings type-20 uppercase mb-1 text-[#1D1A55]">
                      {pt.title}
                    </h3>
                    <p className="type-15 text-gray-700 m-0 leading-normal">
                      {pt.description}
                    </p>
                  </div>
                ))}
              </div>

              <blockquote className="post-content m-0">
                <p className="m-0 font-bold" style={{ color: "var(--c-blue)" }}>
                  {drBiography.quote}
                </p>
              </blockquote>
            </div>
          </article>
        </section>

        {/* =================================================================
            SECTION 3 — OUR PURPOSE
            Reuses the exact Homepage Teal/Green Section Design (MissionSection style)
        ================================================================= */}
        <section className="bg-green pt-88 pb-88 grid-p a-center text-center">
          <div className="m-auto" style={{ maxWidth: "1100px" }}>
            <span
              className="font-headings type-20 uppercase di mb-24 px-4 py-1"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.25)", color: "#fff" }}
            >
              {philosophy.badge}
            </span>

            <h2
              className="font-headings type-48 mb-40 mx-auto uppercase overflow text-white"
              style={{ maxWidth: "16em", lineHeight: "1.05em" }}
            >
              <b>{philosophy.headingHighlight}</b> <br />
              {philosophy.headingRest}
            </h2>

            <div
              className="style-content mx-auto mb-56 text-center text-white"
              style={{ maxWidth: "44em", opacity: 0.95 }}
            >
              <p className="type-20 leading-relaxed">{philosophy.leadParagraph}</p>
            </div>

            {/* 3 Numbered Pillars in sharp editorial layout */}
            <div className="dg grid-3 gap-f text-left">
              {philosophy.pillars.map((pil, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 border-t-4"
                  style={{ borderTopColor: "var(--c-yellow)" }}
                >
                  <div className="font-headings type-48 color-orange mb-2">{pil.number}</div>
                  <h3 className="font-headings type-20 uppercase text-[#1D1A55] mb-2">
                    {pil.title}
                  </h3>
                  <p className="type-14 text-gray-700 m-0 leading-relaxed">
                    {pil.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 4 — UNDERSTANDING NEUROMODULATION
            Reuses Homepage's clinical tracks layout (.cpt-item cards & sharp typography)
        ================================================================= */}
        <section className="grid-p pt-88 pb-88 bg-white border-b border-[#BDDFEC]">
          <div className="m-auto" style={{ maxWidth: "1280px" }}>
            <div className="a-center mb-64">
              <span className="font-headings type-20 color-orange uppercase mb-12 di">
                {neuromodulationExplained.badge}
              </span>
              <h2
                className="font-headings type-48 uppercase mb-24 highlight-bolds m-auto"
                style={{
                  maxWidth: "18em",
                  lineHeight: "1.05em",
                  "--bg": "var(--c-yellow, #FEE003)",
                }}
              >
                <b>{neuromodulationExplained.headingHighlight}</b>
                <br />
                {neuromodulationExplained.headingRest}
              </h2>
              <div className="style-content m-auto a-center" style={{ maxWidth: "44em" }}>
                <p className="type-18 text-gray-700 leading-relaxed">
                  {neuromodulationExplained.description}
                </p>
              </div>
            </div>

            {/* 3 Clinical Columns using exact .cpt-item structure from Homepage */}
            <div className="dg grid-3 gap-f">
              {neuromodulationExplained.cards.map((crd, idx) => (
                <article key={idx} className="cpt-item mb-24 over w-100">
                  <div
                    className="cpt_image w-100 relative mb-24 pe-none overflow img trans-slow"
                    style={{ aspectRatio: "465/380" }}
                  >
                    <div className="fill-dimensions overflow">
                      <picture className="fill-dimensions z-1 pe-none picture trans-slow">
                        <img
                          loading="lazy"
                          src={crd.image}
                          alt={crd.title}
                          className="abs-tl z-1 pe-none fit img"
                        />
                      </picture>
                    </div>
                  </div>
                  <header
                    className="flex flex-wrap flex-vabase gap-sm rg mb-12 font-headings type-20"
                    style={{ "--gut": "10px" }}
                  >
                    <div className="color-orange uppercase">{crd.category}</div>
                  </header>
                  <h3 className="font-bold type-24 ls--05 mb-12 the-title text-[#1D1A55]">
                    {crd.title}
                  </h3>
                  <div className="type-15 text-gray-700 leading-relaxed">
                    {crd.description}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 5 — OUR EDUCATIONAL APPROACH
            Reuses Homepage's Pale-Blue Background & Circle Stat / Highlight Hierarchy
        ================================================================= */}
        <section className="grid-p pt-88 pb-88 bg-light-blue a-center">
          <div className="m-auto" style={{ maxWidth: "1200px" }}>
            <span
              className="font-headings type-20 uppercase di mb-16 px-4 py-1"
              style={{
                backgroundColor: "var(--c-darkest-blue, #1D1A55)",
                color: "#fff",
              }}
            >
              {pedagogicalApproach.badge}
            </span>

            <h2
              className="font-headings type-48 uppercase mb-48 highlight-bolds m-auto overflow"
              style={{
                maxWidth: "14em",
                lineHeight: "1.05em",
                "--bg": "var(--c-yellow, #FEE003)",
              }}
            >
              <b>{pedagogicalApproach.headingHighlight}</b>
              <br />
              {pedagogicalApproach.headingRest}
            </h2>

            {/* 6 Structured Educational Principles in sharp 3-column grid */}
            <div className="dg grid-3 gap-f text-left">
              {pedagogicalApproach.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 border border-[#BDDFEC] flex flex-columns"
                >
                  <div className="flex flex-vac gap-sm mb-3">
                    <span className="font-headings type-24 color-orange">
                      0{idx + 1}
                    </span>
                    <h3 className="font-headings type-20 uppercase text-[#1D1A55] m-0">
                      {step.title}
                    </h3>
                  </div>
                  <p className="type-15 text-gray-700 m-0 leading-relaxed">
                    {step.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 6 — WHO THE WORKSHOP IS FOR
            Reuses Homepage's compact editorial list & bold typography
        ================================================================= */}
        <section className="grid-p pt-88 pb-88 bg-white" id="audience">
          <div className="m-auto" style={{ maxWidth: "1280px" }}>
            <div className="a-center mb-56">
              <span className="font-headings type-20 color-orange uppercase mb-12 di">
                {whoWeServe.badge}
              </span>
              <h2
                className="font-headings type-48 uppercase mb-24 highlight-bolds m-auto"
                style={{
                  maxWidth: "16em",
                  lineHeight: "1.05em",
                  "--bg": "var(--c-green, #00AF9C)",
                }}
              >
                <b>{whoWeServe.headingHighlight}</b>
                <br />
                {whoWeServe.headingRest}
              </h2>
              <div className="style-content m-auto a-center" style={{ maxWidth: "44em" }}>
                <p className="type-18 text-gray-700 leading-relaxed">
                  {whoWeServe.description}
                </p>
              </div>
            </div>

            {/* Compact Professional Columns */}
            <div className="dg grid-3 gap-f">
              {whoWeServe.professionals.map((prof, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white border-b-2"
                  style={{ borderBottomColor: "var(--c-blue, #0065BD)" }}
                >
                  <h3 className="font-headings type-20 uppercase text-[#1D1A55] mb-2">
                    {prof.role}
                  </h3>
                  <p className="type-14 text-gray-600 m-0 leading-relaxed">
                    {prof.benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 7 — CLOSING CTA
            Authentic Split Design (Matches Homepage Donation / Mission Section Pattern):
            - Left: Deep image with overlay title
            - Right: Vibrant yellow background with high contrast, crisp typography & buttons
            - Seamlessly contrasts against the dark footer without blending in.
        ================================================================= */}
        <section className="dg grid-auto tabv-db" id="about-enrollment">
          {/* Left: Atmospheric Workshop & Clinical Demonstration Image */}
          <div className="relative dg pile g-vac overflow" style={{ minHeight: "440px" }}>
            <div className="piled-item" style={{ aspectRatio: 1.5 }}></div>
            <picture className="fill-dimensions z-1 pe-none picture">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85"
                alt="Advance Your Knowledge - Dr. Neha Arora Verma"
                className="abs-tl z-1 pe-none fit img"
              />
            </picture>
            <div className="fill-dimensions" style={{ backgroundColor: "#000", opacity: 0.35 }} />
            <h2
              className="font-headings type-48 uppercase m-auto over a-center color-white highlight-bolds piled-item overflow"
              style={{ width: "90%", maxWidth: "14em" }}
            >
              <b style={{ backgroundColor: "var(--c-orange)", color: "#fff" }}>
                {finalCta.headingHighlight}
              </b>
              <br />
              {finalCta.headingRest}
            </h2>
          </div>

          {/* Right: Signature Yellow Panel with sharp typography and distinct buttons */}
          <article className="bg-yellow pt-88 pb-88 ps flex flex-columns flex-center flex-vac">
            <div style={{ maxWidth: "28em" }} className="a-center">
              <span className="font-headings type-20 uppercase color-dark mb-4 di">
                ACADEMIC ADMISSIONS & ENROLLMENT
              </span>

              <p className="type-18 leading-relaxed color-dark mb-32 font-semibold">
                {finalCta.description}
              </p>

              <div className="flex flex-columns gap-sm items-center justify-center">
                <a
                  href={finalCta.primaryButtonHref}
                  className="button-link di relative font-headings type-28 ls lh-1 color-orange uppercase w-100"
                  style={{ maxWidth: "340px", textAlign: "center" }}
                >
                  <span className="over di color-white">{finalCta.primaryButtonText}</span>
                </a>
                <a
                  href={finalCta.secondaryButtonHref}
                  className="button-link di relative font-headings type-28 ls lh-1 uppercase w-100"
                  style={{
                    backgroundColor: "var(--c-darkest-blue, #1D1A55)",
                    color: "#ffffff",
                    maxWidth: "340px",
                    textAlign: "center",
                  }}
                >
                  <span className="over di color-white">{finalCta.secondaryButtonText}</span>
                </a>
              </div>
            </div>
          </article>
        </section>
      </main>

      {/* 8. Global Shared Footer */}
      <Footer />
    </div>
  );
}
