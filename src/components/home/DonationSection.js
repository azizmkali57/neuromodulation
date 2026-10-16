"use client";

import React, { useState } from "react";
import { siteData } from "@/app/siteData";

export default function DonationSection() {
  const { headingHighlight, headingRest, image, srcset, amounts, defaultAmount } =
    siteData.donationForm;

  const [selectedAmount, setSelectedAmount] = useState(defaultAmount || 1);
  const [consultationType, setConsultationType] = useState("in-person");

  const handleAmountClick = (val) => {
    setSelectedAmount(val);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden" id="section-donation">
      {/* Left Image with overlay heading */}
      <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[500px] flex items-center justify-center bg-[#1D1A55]">
        <img
          loading="lazy"
          src={image || "/images/hero-neuro-rehab.jpg"}
          srcSet={srcset || "/images/hero-neuro-rehab.jpg 1x, /images/hero-neuro-rehab.jpg 2x"}
          alt="Shree Namoh Wellness Clinical Consultation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h2
          className="font-headings type-48 uppercase relative z-10 text-center text-white p-6 max-w-lg leading-tight"
        >
          <span className="bg-[#E9511C] text-white px-3 py-1 inline-block mb-2 rounded-sm">
            {headingHighlight}
          </span>
          <br />
          {headingRest}
        </h2>
      </div>

      {/* Right Yellow Interactive Booking Form */}
      <article className="bg-[#FEE003] py-12 sm:py-16 md:py-20 px-6 sm:px-10 flex flex-col justify-center items-center">
        <div className="w-full flex flex-col items-center" style={{ maxWidth: "420px" }}>
          <div className="w-full text-center font-headings text-sm sm:text-base uppercase text-[#1D1A55] tracking-wider mb-4 font-bold">
            Select Number of Persons / Patients
          </div>

          {/* Number Selection Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 w-full">
            {(amounts || [1, 2, 3, 4, 5]).map((amt) => {
              const isSelected = selectedAmount === amt;
              return (
                <button
                  key={amt}
                  type="button"
                  onClick={() => handleAmountClick(amt)}
                  className={`w-12 h-12 sm:w-14 sm:h-14 font-headings text-2xl sm:text-3xl rounded font-bold transition-all duration-200 cursor-pointer flex items-center justify-center border-0 ${
                    isSelected
                      ? "bg-[#00AF9C] text-white shadow-md scale-105"
                      : "bg-[#1D1A55] text-[#00AF9C] hover:bg-[#1D1A55]/90"
                  }`}
                  aria-label={`${amt} persons`}
                >
                  {amt}
                </button>
              );
            })}
          </div>

          {/* Consultation Modes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-6">
            <button
              type="button"
              onClick={() => setConsultationType("in-person")}
              className={`py-3.5 px-4 font-headings text-xs sm:text-sm uppercase tracking-wider rounded transition-all cursor-pointer border-0 text-center ${
                consultationType === "in-person"
                  ? "bg-[#1D1A55] text-white shadow-md"
                  : "bg-white text-[#1D1A55] hover:bg-white/80"
              }`}
            >
              In-Person Clinic
            </button>

            <button
              type="button"
              onClick={() => setConsultationType("tele-consult")}
              className={`py-3.5 px-4 font-headings text-xs sm:text-sm uppercase tracking-wider rounded transition-all cursor-pointer border-0 text-center ${
                consultationType === "tele-consult"
                  ? "bg-[#1D1A55] text-white shadow-md"
                  : "bg-white text-[#1D1A55] hover:bg-white/80"
              }`}
            >
              Tele-Consult
            </button>
          </div>

          {/* Direct CTA Buttons */}
          <div className="w-full">
            <a
              href="tel:+919827079888"
              className="w-full font-headings text-sm sm:text-base uppercase tracking-wider py-4 px-6 bg-[#00AF9C] hover:bg-[#E9511C] text-white rounded font-bold transition-colors text-center block shadow-md"
            >
              Call to Book: +91 9827079888
            </a>
          </div>

          <div className="w-full text-center text-xs text-[#1D1A55]/80 mt-3 font-medium">
            A-65 MIG, Behind CHL Hospital, Indore, Madhya Pradesh
          </div>
        </div>
      </article>
    </section>
  );
}
