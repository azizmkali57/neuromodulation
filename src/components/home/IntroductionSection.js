import React from "react";
import { siteData } from "@/app/siteData";

export default function IntroductionSection() {
  const { description, secondaryDescription, linkText, linkHref } = siteData.introduction;

  return (
    <section className="grid-p pt-88 pb-88 a-center bg-white" style={{ textAlign: "center" }} id="about">
      <div className="m-auto" style={{ maxWidth: "960px" }}>
        {/* Brand Header */}
        <div className="mb-16">
          <span
            className="font-headings type-18 uppercase px-4 py-1.5 di"
            style={{
              backgroundColor: "var(--c-light-blue, #BDDFEC)",
              color: "var(--c-darkest-blue, #1D1A55)",
              letterSpacing: "0.05em",
            }}
          >
            SHREE NAMOH WELLNESS
          </span>
        </div>

        {/* Tagline */}
        <h1
          className="font-headings type-48 mb-24 m-auto uppercase overflow"
          style={{ maxWidth: "20em", lineHeight: "1.08em", color: "var(--c-darkest-blue, #1D1A55)" }}
        >
          ADVANCED CARE. PERSONALIZED SOLUTIONS. HEALTHIER LIVES.
        </h1>

        {/* 3 Core Pillars - Clean Typographic Pills (No Emojis) */}
        <div className="flex flex-wrap flex-center gap-sm rg-sm mb-40">
          {[
            "Specialized Paralysis Care",
            "Genetic Counseling",
            "Advanced Eye Care",
          ].map((pillar, idx) => (
            <span
              key={idx}
              className="pill font-headings type-18 uppercase"
              style={{
                borderColor: "var(--c-darkest-blue, #1D1A55)",
                color: "var(--c-darkest-blue, #1D1A55)",
                padding: "8px 20px",
              }}
            >
              {pillar}
            </span>
          ))}
        </div>

        {/* Description from Docx */}
        <div
          className="style-content m-auto mb-10 text-gray-700"
          style={{ maxWidth: "44em", fontSize: "1.05rem", lineHeight: "1.7em" }}
        >
          <p className="mb-4">
            Shree Namoh Wellness is a pioneering multidisciplinary healthcare institution committed to delivering advanced, compassionate, and patient-centered healthcare through innovative treatment solutions in Specialized Paralysis Care, Genetic Counseling, and Comprehensive Ophthalmic Care.
          </p>
          <p className="mb-4">
            By integrating state-of-the-art Non-Invasive Neuromodulation, Translational Nutrigenomics, and Precision Microsurgical Ophthalmology under distinguished directors, we empower patients and families with clear guidance, evidence-based recovery protocols, and lasting wellness.
          </p>
          <p>
            Our dedicated clinical focus enhances quality of life, supports informed healthcare decisions, and ensures that specialized, world-class treatments remain accessible, dignified, and responsive to every individual&apos;s unique health journey.
          </p>
        </div>

        {/* Direct Action */}
        <div>
          <a
            href="/directors"
            className="inline-flex items-center gap-2 font-headings type-18 uppercase px-6 py-3 bg-[#1D1A55] text-white hover:bg-[#E9511C] transition-colors rounded font-bold tracking-wider shadow-md"
          >
            <span>MEET OUR DIRECTORS</span>
            <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
