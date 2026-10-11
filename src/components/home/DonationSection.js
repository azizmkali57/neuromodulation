"use client";

import React, { useState } from "react";
import { siteData } from "@/app/siteData";

export default function DonationSection() {
  const { headingHighlight, headingRest, image, srcset, amounts, defaultAmount, actionUrl } =
    siteData.donationForm;

  const [selectedAmount, setSelectedAmount] = useState(defaultAmount);
  const [customAmount, setCustomAmount] = useState("");
  const [workshopTrack, setWorkshopTrack] = useState("all-days"); // 'all-days' or 'hands-on'

  const handleAmountClick = (val) => {
    setSelectedAmount(val);
    setCustomAmount("");
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "tel:7470529991";
  };

  return (
    <section className="dg grid-auto tabv-db" id="section-donation">
      {/* Left Image with overlay heading */}
      <div className="relative dg pile g-vac overflow">
        <div className="piled-item" style={{ aspectRatio: 1.5 }}></div>
        <picture className="fill-dimensions z-1 pe-none picture">
          <source type="image/webp" srcSet={srcset} />
          <img
            loading="lazy"
            src={image}
            alt="Advanced Neuromodulation Workshop Registration"
            className="abs-tl z-1 pe-none fit img"
            srcSet={srcset}
          />
        </picture>
        <div className="fill-dimensions" style={{ backgroundColor: "#000", opacity: 0.3 }} />
        <h2
          className="font-headings type-48 uppercase m-auto over a-center color-white highlight-bolds piled-item overflow"
          style={{ width: "90%", maxWidth: "14em" }}
        >
          <b style={{ backgroundColor: "var(--c-orange)", color: "#fff" }}>{headingHighlight}</b>
          <br />
          {headingRest}
        </h2>
      </div>

      {/* Right Yellow Interactive Registration Form */}
      <article className="bg-yellow pt-88 pb-88 ps flex flex-columns flex-center flex-vac">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap flex-center gap-sm rg-sm type-108" style={{ maxWidth: "10em" }}>
            <div className="w-100 a-center font-headings type-20 uppercase color-dark mb-2">
              SELECT NUMBER OF DELEGATES / SEATS
            </div>

            {amounts.map((amt) => {
              const isSelected = selectedAmount === amt;
              return (
                <div
                  key={amt}
                  onClick={() => handleAmountClick(amt)}
                  className={`donation-amount font-headings type-108 box-sizing a-center relative overflow clickable ${
                    isSelected ? "bg-green color-white" : "bg-dark color-green"
                  }`}
                  style={{ minWidth: "1.4em" }}
                >
                  <input
                    type="radio"
                    name="amount"
                    value={amt}
                    checked={isSelected}
                    onChange={() => handleAmountClick(amt)}
                    className="donation-radio fill-dimensions op-0 clickable"
                    aria-label={`Seats: ${amt}`}
                  />
                  {amt}
                </div>
              );
            })}

            {/* Custom Amount / Group Field */}
            <div className="donation-input-holder bg-dark">
              <input
                type="number"
                name="other-amount"
                className="donation-input w-100 box-sizing font-headings type-108 uppercase bg-dark color-green a-center"
                value={customAmount}
                onChange={handleCustomChange}
                placeholder="OTHER"
                aria-label="custom delegate count"
              />
            </div>

            {/* Attendance Track: 3-Day Intensive */}
            <div
              onClick={() => setWorkshopTrack("all-days")}
              className="donation-button font-headings uppercase no-wrap box-sizing a-center clickable relative"
            >
              <input
                type="radio"
                name="track"
                value="all-days"
                className="donation-radio fill-dimensions op-0 clickable"
                aria-label="3-Day Pass"
                checked={workshopTrack === "all-days"}
                onChange={() => setWorkshopTrack("all-days")}
              />
              <div
                className={`type-48 donation-button__inner br trans ${
                  workshopTrack === "all-days" ? "bg-dark color-white" : "bg-white color-dark"
                }`}
              >
                3-DAY PASS
              </div>
            </div>

            {/* Attendance Track: Hands-On */}
            <div
              onClick={() => setWorkshopTrack("hands-on")}
              className="donation-button font-headings uppercase box-sizing a-center clickable relative"
            >
              <input
                type="radio"
                name="track"
                value="hands-on"
                className="donation-radio fill-dimensions op-0 clickable"
                aria-label="Full Practicum"
                checked={workshopTrack === "hands-on"}
                onChange={() => setWorkshopTrack("hands-on")}
              />
              <div
                className={`type-48 donation-button__inner br trans ${
                  workshopTrack === "hands-on" ? "bg-dark color-white" : "bg-white color-dark"
                }`}
              >
                HANDS-ON
              </div>
            </div>

            {/* Submit Button */}
            <div className="donation-button uppercase box-sizing" style={{ "--w": "100%", width: "100%" }}>
              <a
                href="tel:7470529991"
                className="font-headings type-48 w-100 box-sizing br trans clickable color-dark bg-green db hover-white a-center"
                style={{ padding: "10px 14px", border: "none", textDecoration: "none", fontSize: "clamp(20px, 2.4vw, 36px)", lineHeight: "1.1em" }}
              >
                REGISTER: 7470529991
              </a>
            </div>

            <div className="w-100 a-center text-xs font-sans text-dark/70 mt-2">
              Seats are limited to keep training personal and hands-on.
            </div>
          </div>
        </form>
      </article>
    </section>
  );
}
