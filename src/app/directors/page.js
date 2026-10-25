import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/app/siteData";
import { directorsList } from "@/app/directorsData";
import { SocialIcon } from "@/components/common/SocialIcons";

export const metadata = {
  title: "Meet Our Directors | Dr Neha Arora Verma, Dr. S. S. Verma & Coach Richha Arrora",
  description:
    "Meet the visionary directors guiding Advanced Neuromodulation, Neuroplasticity, and Precision Genomics: Dr Neha Arora Verma, Dr. S. S. Verma, and Coach Richha Arrora."
};

export default function DirectorsIndexPage() {
  return (
    <div className="w-100 bg-white" style={{ minHeight: "100vh" }}>
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="main-content pt-header w-100" id="directors-directory">
        {/* Continuous Marquee */}
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
            HERO SECTION: MEET OUR DIRECTORS
        ================================================================= */}
        <section className="grid-p pt-8 sm:pt-12 pb-16 bg-white border-b border-[#BDDFEC]">
          <div className="m-auto" style={{ maxWidth: "1280px" }}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="font-headings type-18 uppercase px-3 py-1 font-bold"
                style={{
                  backgroundColor: "var(--c-light-blue, #BDDFEC)",
                  color: "var(--c-darkest-blue, #1D1A55)",
                  letterSpacing: "0.05em"
                }}
              >
                EXECUTIVE & CLINICAL GOVERNANCE
              </span>
              <span className="font-headings type-18 uppercase color-orange">
                MULTIDISCIPLINARY LEADERSHIP
              </span>
            </div>

            <h1
              className="font-headings type-128 uppercase mb-8 highlight-bolds overflow"
              style={{
                lineHeight: "0.96em",
                maxWidth: "14em",
                "--bg": "var(--c-yellow, #FEE003)"
              }}
            >
              <b>MEET OUR</b>
              <br />
              DIRECTORS
            </h1>

            <div className="dg grid-auto gap-large g-vat">
              <div>
                <p className="type-20 leading-relaxed font-semibold text-[#1D1A55] mb-4" style={{ maxWidth: "36em" }}>
                  Our leadership brings together pioneer clinical neurorehabilitation,
                  thirty-five years of surgical and medical governance, and cutting-edge
                  precision nutrigenomics.
                </p>
                <p className="type-16 text-gray-700 leading-relaxed" style={{ maxWidth: "38em" }}>
                  By combining non-invasive neuromodulatory devices, rigorous medical safety standards,
                  and individualized DNA-guided metabolic optimization, our directors lead an
                  integrated healthcare model focused on rapid, evidence-grounded patient recovery.
                </p>
              </div>

              <div className="bg-[#f5f8fc] p-8 border-l-4 border-[#00AF9C] flex flex-col justify-between">
                <div className="font-headings type-20 uppercase color-darkest-blue mb-4">
                  Leadership Matrix
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="font-headings type-36 color-orange mb-1">03</div>
                    <div className="text-[11px] font-bold uppercase text-gray-600">
                      Visionary Directors
                    </div>
                  </div>
                  <div>
                    <div className="font-headings type-36 color-orange mb-1">50+</div>
                    <div className="text-[11px] font-bold uppercase text-gray-600">
                      Combined Years Experience
                    </div>
                  </div>
                  <div>
                    <div className="font-headings type-36 color-orange mb-1">100%</div>
                    <div className="text-[11px] font-bold uppercase text-gray-600">
                      Evidence-Based Care
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            DIRECTORS PROFILE CARDS
        ================================================================= */}
        <section className="grid-p pt-88 pb-88 bg-[#f8fafc] border-b border-[#BDDFEC]">
          <div className="m-auto space-y-16" style={{ maxWidth: "1280px" }}>
            {directorsList.map((director, idx) => (
              <article
                key={director.slug}
                id={director.slug}
                className="bg-white border-2 border-[#BDDFEC] shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Director Photo Frame (Left 5 cols) */}
                  <div className="lg:col-span-5 relative bg-white min-h-[360px] flex items-center justify-center overflow-hidden">
                    <img
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-cover"
                      style={{ minHeight: "380px", objectPosition: director.objectPosition || "center top" }}
                    />
                    <div
                      className="absolute bottom-0 inset-x-0 p-6 text-white"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(29, 26, 85, 0.95) 0%, rgba(29, 26, 85, 0.5) 70%, transparent 100%)"
                      }}
                    >
                      <span className="text-xs font-headings uppercase text-[#FEE003] tracking-widest block mb-1">
                        0{idx + 1} • {director.badge}
                      </span>
                      <h2 className="font-headings type-36 uppercase leading-tight text-white m-0">
                        {director.name}
                      </h2>
                    </div>
                  </div>

                  {/* Director Details (Right 7 cols) */}
                  <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                    <div>
                      {/* Eyebrow and Role */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="font-headings text-xs uppercase px-2.5 py-1 bg-[#f0f4f9] text-[#1D1A55] font-bold border-l-2 border-[#E9511C]">
                          {director.roleCategory}
                        </span>
                        <span className="font-headings text-xs uppercase px-2.5 py-1 bg-[#00AF9C]/10 text-[#0065BD] font-bold">
                          {director.experience}
                        </span>
                      </div>

                      {director.mainHeadline && (
                        <h4 className="font-headings type-20 text-[#E9511C] uppercase mb-2">
                          {director.mainHeadline}
                        </h4>
                      )}

                      <h3 className="font-headings type-24 color-darkest-blue uppercase mb-1">
                        {director.designation}
                      </h3>
                      <p className="type-15 text-gray-500 italic mb-4">
                        {director.tagline}
                      </p>

                      <p className="type-16 text-gray-800 leading-relaxed mb-6">
                        {director.intro}
                      </p>

                      {/* Pull Quote Highlight */}
                      <blockquote className="p-4 bg-[#f5f8fc] border-l-4 border-[#E9511C] mb-6 italic text-sm text-[#1D1A55] font-medium leading-relaxed">
                        &ldquo;{director.quote}&rdquo;
                      </blockquote>

                      {/* Mini Stats */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                        {director.stats.map((st, sIdx) => (
                          <div key={sIdx} className="bg-[#f8fafc] p-2.5 border-t border-[#BDDFEC]">
                            <div className="font-headings type-24 color-orange leading-none mb-1">
                              {st.value}
                            </div>
                            <div className="text-[10px] font-bold uppercase text-gray-600 leading-tight">
                              {st.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Links & Social Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
                      <a
                        href={`/directors/${director.slug}`}
                        className="button-link di relative font-headings type-24 ls lh-1 color-orange uppercase"
                      >
                        <span className="over di color-white">
                          View Full Single Page →
                        </span>
                      </a>

                      {director.socialLinks && director.socialLinks.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider hidden sm:inline">
                            Follow:
                          </span>
                          {director.socialLinks.map((soc, sIdx) => (
                            <a
                              key={sIdx}
                              href={soc.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${director.name} on ${soc.name}`}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#f0f4f9] hover:bg-[#00AF9C] text-[#1D1A55] hover:text-white text-xs font-bold transition-all shadow-sm"
                            >
                              <SocialIcon name={soc.name} className="w-3.5 h-3.5 fill-current" />
                              <span>{soc.name}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
}
