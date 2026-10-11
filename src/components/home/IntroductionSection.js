import React from "react";
import { siteData } from "@/app/siteData";

export default function IntroductionSection() {
  const { title, description, linkText, linkHref } = siteData.introduction;

  return (
    <section className="grid-p pt-88 pb-88 text-center" style={{ textAlign: "center" }} id="about">
      <h1
        className="font-headings type-48 mb-32 mx-auto uppercase overflow"
        style={{ maxWidth: "16em", lineHeight: "1.05em" }}
      >
        {title}
      </h1>
      <div
        className="mx-auto mb-32 text-center text-lg leading-relaxed text-[#1D1A55]"
        style={{ maxWidth: "44em", lineHeight: "1.6em" }}
      >
        <p>{description}</p>
      </div>
      <div>
        <a
          href={linkHref}
          className="link-underlined font-headings type-28 uppercase text-[#1D1A55] hover-orange"
        >
          {linkText}
        </a>
      </div>
    </section>
  );
}
