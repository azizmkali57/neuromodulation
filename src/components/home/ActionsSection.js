"use client";

import React, { useState } from "react";
import { siteData } from "@/app/siteData";

export default function ActionsSection() {
  const { title, description, tabs, highlights, audience } = siteData.actions;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="grid-p pt-88 pb-40" id="training">
      <h2
        className="font-headings type-48 uppercase mb-32 a-center m-auto overflow"
        style={{ maxWidth: "22em" }}
      >
        {title}
      </h2>
      <div className="style-content m-auto mb-40 a-center" style={{ maxWidth: "44em" }}>
        <p className="font-semibold text-lg mb-4">{description}</p>
        {audience && (
          <p className="text-sm opacity-80 italic mb-2">
            {audience}
          </p>
        )}
      </div>

      {/* Tabs Switcher */}
      <header className="flex flex-wrap flex-center gap-40 font-headings">
        {tabs.map((tab, idx) => {
          const isSelected = activeTab === idx;
          return (
            <div
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`clickable flex flex-vac gap-sm mb-32 hover-orange trans js-tab-title ${
                isSelected ? "loc color-orange" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <div className="w-1 type-48 ratio-1 br-50 bg-cur"></div>
              <div className="uppercase type-20" style={{ maxWidth: "16em", lineHeight: "1.1em" }}>
                {tab.label}
              </div>
            </div>
          );
        })}
      </header>

      {/* Tab Image display */}
      <div
        className="w-100 relative overflow"
        style={{
          aspectRatio: "2.4615384615385",
          maxHeight: "calc(80vh - var(--header-height))",
        }}
      >
        {tabs.map((tab, idx) => {
          const isSelected = activeTab === idx;
          return (
            <picture
              key={tab.id}
              className={`fill-dimensions z-1 pe-none picture tab-image trans ${
                isSelected ? "loc opacity-100" : "opacity-0"
              }`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                transition: "opacity 300ms ease",
              }}
              id={`map-${idx}`}
            >
              <source type="image/webp" srcSet={tab.srcset} />
              <img
                loading="lazy"
                src={tab.image}
                alt={tab.label}
                className="abs-tl z-1 pe-none fit img"
                srcSet={tab.srcset}
              />
            </picture>
          );
        })}
      </div>

      {/* Highlights List Cards */}
      {highlights && (
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {highlights.map((h, i) => (
            <div key={i} className="p-4 border-l-2 border-[#00AF9C] bg-[#BDDFEC]/10 rounded-r">
              <span className="font-headings text-[#E9511C] text-sm block mb-1">HIGHLIGHT 0{i + 1}</span>
              <p className="text-sm font-medium text-[#1D1A55]">{h}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
