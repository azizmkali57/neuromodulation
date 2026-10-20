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
        {/* Main 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pb-12">
          {/* Col 1: Brand & Navigation Links */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="w-44 mb-6">
                <img
                  loading="lazy"
                  src="/logo-white.webp"
                  alt="Shree Namoh Wellness Logo"
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: "110px" }}
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

          {/* Col 2: Enquiries & Brochure Request */}
          <div>
            <div className="font-headings text-xs uppercase tracking-widest text-[#FEE003] mb-4">
              CLINICAL ENQUIRIES
            </div>
            <p className="text-xs text-white/70 mb-4 leading-relaxed">
              Connect with Shree Namoh Wellness for appointment schedules, treatment protocol documentation, and specialized care assistance.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Doctor's / Patient's Email"
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
                  I agree to receive clinical updates &amp; appointment notifications.
                </label>
              </div>
              <button
                type="submit"
                className="w-full font-headings uppercase py-2.5 px-4 bg-[#00AF9C] text-white hover:bg-[#E9511C] transition-colors rounded text-xs font-bold tracking-wider cursor-pointer"
              >
                REQUEST INFORMATION
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

          {/* Col 3: Single Clinical Venue Address */}
          <div>
            <div className="font-headings text-xs uppercase tracking-widest text-[#FEE003] mb-4">
              CLINICAL CENTER &amp; ADDRESS
            </div>
            <div className="space-y-3 text-xs">
              <div className="font-bold uppercase text-[#00AF9C] text-sm">
                Shree Namoh Wellness
              </div>
              <div className="text-white/80 leading-relaxed">
                A-65 MIG, Behind CHL Hospital,<br />
                Indore, Madhya Pradesh 452001
              </div>
              <div className="pt-2 text-white/90">
                <span className="text-white/50 block text-[11px] uppercase">Phone:</span>
                <a href="tel:+919827079888" className="text-white hover:text-[#FEE003] block">
                  +91 9827079888
                </a>
                <a href="tel:+917470529991" className="text-white hover:text-[#FEE003] block">
                  +91 7470529991
                </a>
              </div>
              <div className="pt-1 text-white/90">
                <span className="text-white/50 block text-[11px] uppercase">Email:</span>
                <a href="mailto:neha_arora27@yahoo.com" className="text-white hover:text-[#FEE003]">
                  neha_arora27@yahoo.com
                </a>
              </div>
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
