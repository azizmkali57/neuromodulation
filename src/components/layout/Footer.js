"use client";

import React from "react";
import { siteData } from "@/app/siteData";
import { SocialIcon } from "@/components/common/SocialIcons";

export default function Footer({ socialLinks } = {}) {
  const { navLinks, locations, legalLinks, copyright } = siteData.footer;

  const activeSocialLinks =
    socialLinks && socialLinks.length > 0
      ? socialLinks
      : siteData.footer.socialLinks;

  return (
    <footer className="footer pt-14 sm:pt-20 pb-10 bg-[#0a0c1f] text-white border-t border-[#1D1A55]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main 4-Column Balanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-white/10 items-start">
          
          {/* Column 1: Brand & Logo (4 cols on lg, full on mobile) */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <a href="/" className="inline-block w-44 sm:w-52 mb-4">
              <img
                loading="lazy"
                src="/logo-white.webp"
                alt="Shree Namoh Wellness Logo"
                className="w-full h-auto object-contain"
                style={{ maxHeight: "88px" }}
              />
            </a>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed pr-0 lg:pr-6 mb-4">
              Pioneering multidisciplinary healthcare institution combining Specialized Paralysis Rehabilitation, Personalized Genomic Wellness, and Advanced Ophthalmic Microsurgery.
            </p>
            <div className="text-[11px] sm:text-xs uppercase font-bold text-[#00AF9C] tracking-wider">
              Central India&apos;s Integrated Healthcare Destination
            </div>
          </div>

          {/* Column 2: Quick Links (3.5 cols on lg to eliminate wrapping, div-based to eliminate any legacy list bullets) */}
          <div className="lg:col-span-3 sm:pl-2 lg:pl-6">
            <h4 className="font-headings text-xs sm:text-sm uppercase tracking-widest text-[#FEE003] mb-4 font-bold border-b border-white/10 pb-2 inline-block sm:block">
              QUICK LINKS
            </h4>
            <nav className="flex flex-col gap-2 font-headings text-xs sm:text-sm uppercase tracking-wider">
              {navLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="text-white/80 hover:text-[#00AF9C] hover:translate-x-1 transition-all inline-block py-1 leading-normal whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Clinical Enquiries & Direct Booking (2.5 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="font-headings text-xs sm:text-sm uppercase tracking-widest text-[#FEE003] mb-4 font-bold border-b border-white/10 pb-2 inline-block sm:block">
              CLINICAL ENQUIRIES
            </h4>
            <p className="text-xs text-white/75 mb-4 leading-relaxed">
              Connect with our clinical desk for appointment schedules, treatment protocols, and consultation assistance.
            </p>
            <a
              href="/contact"
              className="inline-block w-full text-center font-headings uppercase py-2.5 px-4 bg-[#00AF9C] text-white hover:bg-[#E9511C] transition-colors rounded text-xs font-bold tracking-wider shadow-md whitespace-nowrap"
            >
              REQUEST INFORMATION
            </a>

            <div className="mt-5 pt-3 border-t border-white/10">
              <span className="block font-headings text-[10px] uppercase tracking-wider text-white/50 mb-0.5">
                Direct Patient Helpline
              </span>
              <a
                href="tel:+919827079888"
                className="font-headings text-sm sm:text-base text-[#FEE003] hover:underline font-bold tracking-wide block whitespace-nowrap"
              >
                +91 9827079888
              </a>
            </div>
          </div>

          {/* Column 4: Clinical Center & Locations (2.5 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="font-headings text-xs sm:text-sm uppercase tracking-widest text-[#FEE003] mb-4 font-bold border-b border-white/10 pb-2 inline-block sm:block">
              CLINICAL CENTERS
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <div className="font-bold uppercase text-[#00AF9C] text-xs sm:text-sm mb-1 tracking-wider">
                  Shree Namoh Wellness
                </div>
                <div className="text-white/80 leading-relaxed">
                  A-65 MIG, Behind CHL Hospital,<br />
                  Indore, Madhya Pradesh 452001
                </div>
              </div>

              <div className="text-white/70 text-[11px] sm:text-xs">
                <span className="font-semibold text-white/90">Regional Services: </span>
                Indore • Khandwa • Mundi (MP)
              </div>

              <div className="pt-2 border-t border-white/10 space-y-1 text-xs">
                <div>
                  <span className="text-white/50 uppercase text-[10px] tracking-wider block">Phone</span>
                  <a href="tel:+919827079888" className="text-white hover:text-[#00AF9C] font-semibold">
                    +91 9827079888
                  </a>
                </div>
                <div>
                  <span className="text-white/50 uppercase text-[10px] tracking-wider block">Email</span>
                  <a href="mailto:info@shreenamohwellness.com" className="text-white hover:text-[#00AF9C]">
                    info@shreenamohwellness.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal Links, Social Icons */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-white/60">
          <div className="text-center md:text-left text-[11px] sm:text-xs">
            {copyright}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-[11px] sm:text-xs">
            {legalLinks.map((leg, idx) => (
              <a key={idx} href={leg.href} className="hover:text-white underline transition-colors">
                {leg.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {activeSocialLinks.map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-white bg-white/5 hover:bg-[#E9511C] px-3 py-1.5 rounded transition-all"
              >
                <SocialIcon name={s.name} className="w-3.5 h-3.5 fill-current" />
                <span className="text-xs font-semibold">{s.name}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
