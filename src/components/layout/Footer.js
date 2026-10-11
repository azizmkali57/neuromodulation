"use client";

import React, { useState } from "react";
import { siteData } from "@/app/siteData";

export default function Footer() {
  const { navLinks, tuvLogo, financialStats, locations, legalLinks, copyright, credits } =
    siteData.footer;

  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setNewsletterStatus("Please enter your email address.");
      return;
    }
    if (!agreed) {
      setNewsletterStatus("Please accept the terms to proceed.");
      return;
    }
    setNewsletterStatus("Thank you! Our admissions coordinator will contact you shortly.");
    setEmail("");
  };

  return (
    <footer className="footer pt-64 bg-dark grid-p color-white" style={{ paddingBottom: "1px" }}>
      <section className="dg grid-footer gap-f mob-db">
        {/* logo-donate */}
        {/* <div className="a-center mb-40" style={{ gridArea: "logo-donate" }}>
          <a href="#" className="logo db m-auto flex flex-center items-center justify-center" aria-label="Dr. Neha Arora Verma">
            <img
              src="/logo.webp"
              alt="Dr. Neha Arora Verma"
              className="w-100 db object-contain"
              style={{ maxWidth: "160px", maxHeight: "100px" }}
            />
          </a>
          <div className="pt-88 pb-40">
            <a href="tel:7470529991" className="button-link relative di font-headings type-48 color-yellow">
              <span className="over color-dark di uppercase">Register Now</span>
            </a>
          </div>
        </div> */}

        {/* left-col */}
        <section className="mb-40 mob-hide flex flex-columns flex-jcb" style={{ gridArea: "left-col" }}>
          <ul id="menu-footermenu_el" className="menu-ul font-headings type-48 menu-simple db uppercase block-menu mb-32 w-100">
            {navLinks.map((item, idx) => (
              <li key={idx} className="menu-item">
                <a href={item.href} className="menu-a menu-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="w-100 relative db lh-1 mb-24" style={{ width: "min(100%, 140px)" }}>
            <img loading="lazy" src={tuvLogo} alt="Official Workshop Logo" className="w-100 object-contain" />
          </div>
        </section>

        {/* footer-statistics */}
        <aside className="mb-40 tab-hide" style={{ gridArea: "footer-statistics" }}>
          <header className="font-headings type-20 ls-2 uppercase mb-1">{financialStats.title}</header>
          <div className="pt-12">
            {financialStats.items.map((stat, sIdx) => (
              <article key={sIdx} className="mb-12">
                <div className="font-headings type-48">{stat.percent}</div>
                <div className="type-14 uppercase" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {stat.label}
                </div>
              </article>
            ))}
          </div>
        </aside>

        {/* newsletter */}
        <section className="mb-40 flex flex-columns flex-jcb" style={{ gridArea: "newsletter" }}>
          <div>
            <header className="font-headings type-20 ls-2 uppercase mb-12">WORKSHOP ENQUIRIES</header>
            <p className="type-14 text-white/70 mb-4">
              Receive workshop schedules, detailed curriculum, and protocol documentation.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="pt-12">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Doctor's / Clinical Email"
                className="w-100 bg-white/10 text-white placeholder-white/50 px-4 py-3 rounded border border-white/20 mb-3 text-sm outline-none focus:border-[#FEE003]"
              />
              <div className="flex items-start gap-2 mb-4">
                <input
                  type="checkbox"
                  id="agree-terms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1"
                />
                <label htmlFor="agree-terms" className="text-xs text-white/70">
                  I agree to receive neuromodulation workshop updates & schedule notifications.
                </label>
              </div>
              <button
                type="submit"
                className="w-100 font-headings uppercase py-2 bg-[#00AF9C] text-white hover:bg-[#E9511C] transition-colors rounded text-base cursor-pointer"
              >
                REQUEST BROCHURE
              </button>
              {newsletterStatus && (
                <div className="text-xs text-[#FEE003] mt-2 font-sans">{newsletterStatus}</div>
              )}
            </form>
          </div>

          <div className="mt-8">
            <header className="font-headings type-14 uppercase text-white/50 mb-2">DIRECT DESK</header>
            <a href="tel:7470529991" className="font-headings type-24 text-[#FEE003] block hover:underline">
              CALL: 7470529991
            </a>
          </div>
        </section>

        {/* footer-locations */}
        <aside className="mb-40" style={{ gridArea: "footer-locations" }}>
          <header className="font-headings type-20 ls-2 uppercase mb-4">WORKSHOP DESK</header>
          {locations.map((loc, lIdx) => (
            <div key={lIdx} className="footer-location mb-6">
              <div className="font-bold text-sm uppercase text-[#00AF9C]">{loc.city}</div>
              {loc.address && <div className="text-xs text-white/80">{loc.address}</div>}
              {loc.subAddress && <div className="text-xs text-white/80">{loc.subAddress}</div>}
              {loc.phone && (
                <div>
                  <a href={loc.phoneHref} className="text-xs text-white hover:text-[#FEE003]">
                    {loc.phone}
                  </a>
                </div>
              )}
              {loc.email && (
                <div>
                  <a href={`mailto:${loc.email}`} className="text-xs text-white/70 hover:text-white">
                    {loc.email}
                  </a>
                </div>
              )}
              {loc.lines &&
                loc.lines.map((line, lineIdx) => (
                  <div key={lineIdx} className="mt-1">
                    <div className="text-xs text-white/80">{line.address}</div>
                    <a href={line.phoneHref} className="text-xs text-white hover:text-[#FEE003]">
                      {line.phone}
                    </a>
                  </div>
                ))}
            </div>
          ))}
        </aside>

        {/* social-terms */}
        <div className="mb-20 flex flex-wrap gap-4 items-center" style={{ gridArea: "social-terms" }}>
          {siteData.footer.socialLinks.map((s, idx) => (
            <a
              key={idx}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase text-white/70 hover:text-[#00AF9C] mr-2"
            >
              {s.name}
            </a>
          ))}
        </div>

        {/* footer-copyrights */}
        <div className="mb-20 text-xs text-white/50" style={{ gridArea: "footer-copyrights" }}>
          <div>{copyright}</div>
          <div className="mt-1 flex gap-3">
            {legalLinks.map((leg, idx) => (
              <a key={idx} href={leg.href} className="hover:text-white underline">
                {leg.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}
