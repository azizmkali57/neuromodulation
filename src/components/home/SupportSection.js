"use client";

import React from "react";
import { siteData } from "@/app/siteData";
import ContactForm from "./ContactForm";

export default function SupportSection() {
  const { headingHighlight, headingRest, description, bannerImage, bannerSrcset, benefitsList } =
    siteData.support;

  return (
    <section className="grid-p pt-88 pb-88" id="benefits">
      {/* Banner with two overlapping circle cutouts */}
      <aside
        className="w-100 relative mb-12 sm:mb-16 m-auto overflow"
        style={{ maxWidth: "1225px", aspectRatio: 1.9444444444444 }}
        id="images-circles"
      >
        <picture className="fill-dimensions z-1 pe-none picture">
          <source type="image/webp" srcSet={bannerSrcset} />
          <img
            loading="lazy"
            src={bannerImage}
            alt="Advanced Neuromodulation Workshop Benefits"
            className="abs-tl z-1 pe-none fit img"
            srcSet={bannerSrcset}
          />
        </picture>
        <div className="fill-dimensions bg-white blend-screen flex flex-vac flex-center">
          <div className="mask-circle ratio-1 br-50"></div>
          <div className="mask-circle ratio-1 br-50"></div>
        </div>
      </aside>

      {/* Heading */}
      <h2
        className="font-headings type-72 sm:type-108 uppercase mb-6 a-center m-auto highlight-bolds overflow"
        style={{ maxWidth: "14em", "--bg": "var(--c-green)", lineHeight: "1.02em" }}
      >
        <b>{headingHighlight}</b> <br />
        {headingRest}
      </h2>

      {/* Description */}
      <div className="style-content m-auto mb-12 sm:mb-16 a-center text-gray-700" style={{ maxWidth: "44em" }}>
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

      {/* Contact Form Desk */}
      <div className="mt-8 mb-8">
        <ContactForm />
      </div>
    </section>
  );
}
