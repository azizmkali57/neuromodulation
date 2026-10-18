import React from "react";
import { siteData } from "@/app/siteData";

export default function TransparencySection() {
  const { headingHighlight, headingRest, description, subheading, stats } = siteData.transparency;

  return (
    <section className="grid-p pt-88 pb-88 bg-light-blue a-center relative" style={{ zIndex: 20 }}>
      {/* Eyebrow Pill */}
      <div className="mb-4">
        <span
          className="font-headings type-18 uppercase px-4 py-1.5 di"
          style={{
            backgroundColor: "var(--c-yellow, #FEE003)",
            color: "var(--c-darkest-blue, #1D1A55)",
            letterSpacing: "0.05em",
          }}
        >
          OUR MISSION &amp; VISION
        </span>
      </div>

      <h2
        className="font-headings type-48 uppercase mb-32 highlight-bolds m-auto overflow"
        style={{ maxWidth: "14em", "--bg": "var(--c-yellow)" }}
      >
        <b>OUR MISSION &amp; VISION</b>
        <br />
        A TRUSTED CENTER OF CLINICAL EXCELLENCE
      </h2>

      {/* Side-by-Side Mission & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-48 text-left">
        <div className="bg-white p-6 sm:p-8 rounded-xl border-t-4 border-[#00AF9C] shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00AF9C]"></span>
              <span className="font-headings type-18 uppercase text-[#00AF9C] tracking-wider font-bold">
                OUR MISSION
              </span>
            </div>
            <h3 className="font-headings text-xl sm:text-2xl uppercase text-[#1D1A55] mb-3 leading-tight">
              Compassionate, Evidence-Based &amp; Individualized Healthcare
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              To deliver advanced, compassionate, and patient-centered healthcare through innovative treatment solutions in specialized paralysis care, genetic counseling, and advanced eye care. We combine cutting-edge science, neuroplasticity protocols, and personalized nutrition to foster measurable recoveries and empower families.
            </p>
          </div>
          <div className="pt-3 border-t border-gray-100 text-xs font-semibold text-[#00AF9C] uppercase tracking-wider">
            Patient-Centered Treatment Solutions
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl border-t-4 border-[#E9511C] shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E9511C]"></span>
              <span className="font-headings type-18 uppercase text-[#E9511C] tracking-wider font-bold">
                OUR VISION
              </span>
            </div>
            <h3 className="font-headings text-xl sm:text-2xl uppercase text-[#1D1A55] mb-3 leading-tight">
              Global Benchmark in Personalized Health &amp; Neurological Recovery
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              To establish Shree Namoh Wellness as a globally trusted center of excellence in advanced and personalized healthcare—recognized for clinical innovation, scientific rigor, empathetic service, and sustainable well-being where therapeutic solutions, genetic insights, and surgical eye care unite to transform lives.
            </p>
          </div>
          <div className="pt-3 border-t border-gray-100 text-xs font-semibold text-[#E9511C] uppercase tracking-wider">
            Scientific Rigor &amp; Life Transformation
          </div>
        </div>
      </div>

      <h3 className="font-headings type-28 uppercase mb-32 m-auto overflow" style={{ maxWidth: "12em" }}>
        {subheading.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h3>

      <div className="flex flex-wrap flex-center gap-f a-center">
        {stats.map((st, i) => {
          const isPillars = st.percent.includes("3+");
          return (
            <article
              key={i}
              className={`circle-stat ratio-1 font-headings dg a-center g-vac relative mb-12 ${
                isPillars ? "pillars-stat-circle" : ""
              }`}
              style={
                isPillars
                  ? {
                      "--w": "clamp(300px, 28vw, 420px)",
                      transform: "scale(1.06)",
                      transition: "transform 0.3s ease",
                    }
                  : {
                      "--w": "clamp(260px, 24vw, 360px)",
                    }
              }
            >
              <div
                className={`w-100 piled-item ratio-1 relative z-1 br-50 ${
                  isPillars ? "bg-[#1D1A55] shadow-xl ring-8 ring-[#00AF9C]/30" : "bg-green"
                }`}
              ></div>
              <div
                className={`w-100 piled-item over ${
                  isPillars ? "color-white" : ""
                }`}
                style={{ padding: isPillars ? "2em 1.2em" : "1.6em" }}
              >
                <header
                  className="font-headings leading-none mb-3"
                  style={{
                    fontSize: isPillars
                      ? "clamp(56px, 7.5vmin + 2.5rem, 126px)"
                      : "clamp(48px, 5.8vmin + 2rem, 108px)",
                    color: isPillars ? "#FEE003" : "inherit",
                    minWidth: "2em",
                  }}
                >
                  {st.percent}
                </header>
                <div
                  className="font-headings uppercase m-auto leading-snug"
                  style={{
                    maxWidth: isPillars ? "7.5em" : "6.5em",
                    fontSize: isPillars
                      ? "clamp(18px, 1.25vw + 0.85rem, 32px)"
                      : "clamp(16px, 1vw + 0.7rem, 28px)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {st.label}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
