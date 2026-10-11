import React from "react";
import { siteData } from "@/app/siteData";

export default function TransparencySection() {
  const { headingHighlight, headingRest, description, subheading, stats } = siteData.transparency;

  return (
    <section className="grid-p pt-88 pb-88 bg-light-blue a-center relative" style={{ zIndex: 20 }}>
      <h2
        className="font-headings type-48 uppercase mb-32 highlight-bolds m-auto overflow"
        style={{ maxWidth: "11em", "--bg": "var(--c-yellow)" }}
      >
        <b>{headingHighlight}</b>
        <br />
        {headingRest.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h2>

      <div className="style-content m-auto mb-56" style={{ maxWidth: "40em" }}>
        <p>{description}</p>
      </div>

      <h3 className="font-headings type-28 uppercase mb-32 m-auto overflow" style={{ maxWidth: "10em" }}>
        {subheading.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h3>

      <div className="flex flex-wrap flex-center gap-f a-center">
        {stats.map((st, i) => (
          <article key={i} className="circle-stat ratio-1 font-headings type-108 dg a-center g-vac relative mb-12">
            <div className="w-100 piled-item ratio-1 relative z-1 br-50 bg-green"></div>
            <div className="w-100 piled-item over type-28" style={{ padding: "1.6em" }}>
              <header className="type-108 mb-8" style={{ minWidth: "2em" }}>
                {st.percent}
              </header>
              <div className="type-28 uppercase m-auto" style={{ maxWidth: "6.5em" }}>
                {st.label}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
