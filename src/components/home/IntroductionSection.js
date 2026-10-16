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
          className="style-content m-auto mb-40 text-gray-700"
          style={{ maxWidth: "44em", fontSize: "1.05rem", lineHeight: "1.7em" }}
        >
          <p className="mb-4">
            At Shree Namoh Wellness, our mission is to deliver advanced, compassionate, and patient-centered healthcare through innovative treatment solutions in paralysis care, genetic counseling, and advanced eye care.
          </p>
          <p className="mb-4">
            We are committed to combining modern medical advancements, personalized care, and scientific expertise to support neurological recovery, provide meaningful genetic health guidance, and promote better vision and eye health. Through a holistic and individualized approach, we strive to empower patients and their families with knowledge, confidence, and access to appropriate healthcare solutions.
          </p>
          <p>
            Our goal is to enhance quality of life, encourage informed health decisions, and make advanced healthcare more accessible, reliable, and focused on every patient&apos;s unique needs.
          </p>
        </div>

        {/* Link matching template design */}
        <div>
          <a
            href={linkHref || "/directors"}
            className="link-underlined font-headings type-24 uppercase hover-orange"
            style={{ color: "var(--c-darkest-blue, #1D1A55)" }}
          >
            {linkText || "MEET OUR DIRECTORS"}
          </a>
        </div>
      </div>
    </section>
  );
}
