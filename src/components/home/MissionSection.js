import React from "react";
import { siteData } from "@/app/siteData";

export default function MissionSection() {
  const { quote, description, buttonText, buttonHref, image, srcset } = siteData.mission;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 overflow-hidden" id="mission">
      {/* Green quote block */}
      <article className="bg-green py-14 sm:py-20 md:py-24 px-6 sm:px-10 lg:px-14 flex flex-col justify-center text-center items-center">
        <span
          className="font-headings type-18 uppercase di mb-4 px-3 py-1 text-white bg-dark/20 rounded"
          style={{ letterSpacing: "0.05em" }}
        >
          OUR MISSION
        </span>
        <h2
          className="font-headings type-48 mb-6 mx-auto uppercase text-white leading-tight"
          style={{ maxWidth: "16em" }}
        >
          {quote}
        </h2>
        <div
          className="text-white/90 text-sm sm:text-base mb-8 mx-auto leading-relaxed"
          style={{ maxWidth: "28em" }}
        >
          <p>{description}</p>
        </div>
        <div>
          <a
            href={buttonHref || "/about"}
            className="button-link relative di font-headings type-24 ls lh-1 color-orange uppercase"
            style={{ textDecoration: "none" }}
          >
            <span className="over di color-white uppercase">{buttonText || "LEARN MORE"}</span>
          </a>
        </div>
      </article>

      {/* Accompanying Clinical Photo */}
      <div className="relative overflow-hidden min-h-[300px] sm:min-h-[380px] md:min-h-[460px] bg-[#1D1A55]">
        <img
          loading="lazy"
          src={image || "/images/mission-device-demo.jpg"}
          srcSet={srcset || "/images/mission-device-demo.jpg 1x, /images/mission-device-demo.jpg 2x"}
          alt="Shree Namoh Wellness - Mission & Clinical Excellence"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
