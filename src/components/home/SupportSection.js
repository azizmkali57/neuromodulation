"use client";

import React from "react";
import { siteData } from "@/app/siteData";
import ContactForm from "./ContactForm";

export default function SupportSection() {
  const { headingHighlight, headingRest, description, bannerImage, bannerSrcset, benefitsList } =
    siteData.support;

  return (
    <section className="grid-p pt-88 pb-88" id="benefits">
      {/* Dual Overlapping Circles: Award Presentation Photos */}
      <div
        className="w-100 relative mb-10 sm:mb-14 mx-auto overflow-hidden flex flex-col items-center justify-center"
        style={{ maxWidth: "1225px" }}
        id="images-circles"
      >
        <div className="relative flex items-center justify-center -space-x-8 sm:-space-x-16 md:-space-x-24 py-4 w-full">
          {/* Left Circle: Dr. Neha Arora Verma receiving award from Gulshan Grover */}
          <div className="relative w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full overflow-hidden shadow-2xl border-4 sm:border-8 border-white ring-4 ring-[#00AF9C]/25 bg-[#1D1A55] z-10 hover:z-30 hover:scale-105 transition-all duration-300">
            <img
              loading="lazy"
              src="/images/award-grover-honour.jpg"
              alt="Dr. Neha Arora Verma receiving Healthcare Excellence Award from Gulshan Grover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end justify-center pb-3 sm:pb-5">
              <span className="font-headings text-[10px] sm:text-xs md:text-sm text-white uppercase tracking-wider bg-[#1D1A55]/90 px-3 py-1 rounded shadow">
                Healthcare Excellence Award
              </span>
            </div>
          </div>

          {/* Right Circle: Dr. Neha Arora Verma receiving Health Coach Award */}
          <div className="relative w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full overflow-hidden shadow-2xl border-4 sm:border-8 border-white ring-4 ring-[#E9511C]/25 bg-[#1D1A55] z-20 hover:z-30 hover:scale-105 transition-all duration-300">
            <img
              loading="lazy"
              src="/images/award-health-coach.jpg"
              alt="Dr. Neha Arora Verma receiving National Recognition Award on Stage"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end justify-center pb-3 sm:pb-5">
              <span className="font-headings text-[10px] sm:text-xs md:text-sm text-white uppercase tracking-wider bg-[#1D1A55]/90 px-3 py-1 rounded shadow">
                National Clinical Recognition
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Heading */}
      <h2
        className="font-headings uppercase mb-6 sm:mb-8 a-center m-auto highlight-bolds overflow text-[#1D1A55]"
        style={{
          fontSize: "clamp(32px, 5vw, 68px)",
          lineHeight: "1.06em",
          maxWidth: "20em",
          "--bg": "var(--c-green)",
          letterSpacing: "0.01em",
        }}
      >
        <b>{headingHighlight}</b> <br />
        {headingRest}
      </h2>

      {/* Description */}
      <div className="style-content m-auto mb-10 sm:mb-14 a-center text-gray-700" style={{ maxWidth: "44em" }}>
        <p>{description}</p>
      </div>

      {/* Workshop Benefits Table/Grid from PDF */}
      {benefitsList && (
        <div className="max-w-4xl mx-auto mb-16 overflow-x-auto border border-[#BDDFEC] rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse min-w-[480px]">
            <thead>
              <tr className="bg-[#1D1A55] text-white">
                <th className="p-4 font-headings text-sm sm:text-base uppercase tracking-wider border-b border-[#BDDFEC]">
                  Benefit
                </th>
                <th className="p-4 font-headings text-sm sm:text-base uppercase tracking-wider border-b border-[#BDDFEC]">
                  What You Gain
                </th>
              </tr>
            </thead>
            <tbody>
              {benefitsList.map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#f5f8fc]"}>
                  <td className="p-4 font-bold text-xs sm:text-sm text-[#1D1A55] border-t border-gray-100">
                    {item.benefit}
                  </td>
                  <td className="p-4 text-xs sm:text-sm text-gray-700 border-t border-gray-100">
                    {item.gain}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
