"use client";

import React, { useState } from "react";
import { siteData } from "@/app/siteData";

export default function Footer() {
  const { navLinks, tuvLogo, financialStats, locations, legalLinks, copyright } =
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
    <footer className="footer pt-12 sm:pt-16 bg-[#0e1026] text-white border-t border-[#1D1A55]">
      <div className="grid-p m-auto" style={{ maxWidth: "1280px" }}>
        {/* Main 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12">
          {/* Col 1: Brand & Navigation Links */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="w-32 mb-6">
                <img
                  loading="lazy"
                  src={tuvLogo}
                  alt="Shree Namoh Wellness Logo"
                  className="w-full h-auto object-contain brightness-0 invert"
                />
              </div>
              <ul className="space-y-2.5 font-headings text-xs sm:text-sm uppercase tracking-wider">
                {navLinks.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="text-white/80 hover:text-[#FEE003] hover:underline transition-colors block py-0.5"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 2: Workshop Structure & Statistics */}
          <div>
            <div className="font-headings text-xs uppercase tracking-widest text-[#FEE003] mb-4">
              {financialStats.title}
            </div>
            <div className="space-y-4">
              {financialStats.items.map((stat, sIdx) => (
                <div key={sIdx} className="border-b border-white/10 pb-2">
                  <div className="font-headings text-xl sm:text-2xl text-[#00AF9C] leading-none mb-1">
                    {stat.percent}
                  </div>
                  <div className="text-[11px] uppercase text-white/70 tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Enquiries & Brochure Request */}
          <div>
            <div className="font-headings text-xs uppercase tracking-widest text-[#FEE003] mb-4">
              CLINICAL ENQUIRIES
            </div>
            <p className="text-xs text-white/70 mb-4 leading-relaxed">
              Receive workshop schedules, detailed curriculum, and protocol documentation.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Doctor's / Clinical Email"
                className="w-full bg-white/10 text-white placeholder-white/50 px-3.5 py-2.5 rounded border border-white/20 text-xs outline-none focus:border-[#FEE003] transition-colors"
              />
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="agree-terms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5"
                />
                <label htmlFor="agree-terms" className="text-[11px] text-white/70 leading-tight">
                  I agree to receive neuromodulation workshop updates &amp; schedule notifications.
                </label>
              </div>
              <button
                type="submit"
                className="w-full font-headings uppercase py-2.5 px-4 bg-[#00AF9C] text-white hover:bg-[#E9511C] transition-colors rounded text-xs font-bold tracking-wider cursor-pointer"
              >
                REQUEST BROCHURE
              </button>
              {newsletterStatus && (
                <div className="text-xs text-[#FEE003] font-sans">{newsletterStatus}</div>
              )}
            </form>

            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="font-headings text-[11px] uppercase text-white/50 mb-1">
                DIRECT PATIENT HELPLINE
              </div>
              <a
                href="tel:7470529991"
                className="font-headings text-lg text-[#FEE003] hover:underline block"
              >
                CALL: +91 7470529991
              </a>
            </div>
          </div>

          {/* Col 4: Locations & Clinical Desks */}
          <div>
            <div className="font-headings text-xs uppercase tracking-widest text-[#FEE003] mb-4">
              WORKSHOP &amp; CLINIC VENUE
            </div>
            <div className="space-y-4">
              {locations.map((loc, lIdx) => (
                <div key={lIdx} className="text-xs">
                  <div className="font-bold uppercase text-[#00AF9C] mb-1">{loc.city}</div>
                  {loc.address && <div className="text-white/80">{loc.address}</div>}
                  {loc.subAddress && <div className="text-white/80">{loc.subAddress}</div>}
                  {loc.phone && (
                    <div className="mt-1">
                      <a href={loc.phoneHref} className="text-white hover:text-[#FEE003]">
                        {loc.phone}
                      </a>
                    </div>
                  )}
                  {loc.email && (
                    <div>
                      <a href={`mailto:${loc.email}`} className="text-white/70 hover:text-white">
                        {loc.email}
                      </a>
                    </div>
                  )}
                  {loc.lines &&
                    loc.lines.map((line, lineIdx) => (
                      <div key={lineIdx} className="mt-1">
                        <div className="text-white/80">{line.address}</div>
                        <a href={line.phoneHref} className="text-white hover:text-[#FEE003]">
                          {line.phone}
                        </a>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Links & Socials */}
        <div className="pt-6 pb-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>{copyright}</div>

          <div className="flex flex-wrap items-center gap-4">
            {legalLinks.map((leg, idx) => (
              <a key={idx} href={leg.href} className="hover:text-white underline">
                {leg.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {siteData.footer.socialLinks.map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#00AF9C] transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
