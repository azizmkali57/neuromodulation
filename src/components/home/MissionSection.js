import React from "react";
import { siteData } from "@/app/siteData";

export default function MissionSection() {
  const { quote, buttonText, buttonHref, image, srcset } = siteData.mission;

  return (
    <section className="dg grid-auto mobsm-db">
      {/* Green quote block */}
      <article className="bg-green pt-88 pb-88 grid-p flex flex-columns flex-center text-center items-center justify-center">
        <h2
          className="font-headings type-48 mb-40 mx-auto uppercase overflow text-white"
          style={{ maxWidth: "12em", lineHeight: "1.05em" }}
        >
          {quote}
        </h2>
        <div>
          <a
            href={buttonHref}
            className="button-link relative di font-headings type-32 ls lh-1 color-orange"
            style={{ textDecoration: "none" }}
          >
            <span className="over di color-white uppercase">{buttonText}</span>
          </a>
        </div>
      </article>

      {/* Accompanying Polyclinic Photo */}
      <div className="relative overflow" id="section-text-image" style={{ minHeight: "420px" }}>
        <picture className="fill-dimensions z-1 pe-none">
          <img
            loading="lazy"
            src={image}
            srcSet={srcset}
            alt="Advanced Neuromodulation Clinical Training - Dr. Neha Arora Verma"
            className="abs-tl z-1 pe-none fit"
          />
        </picture>
      </div>
    </section>
  );
}
