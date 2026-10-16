"use client";

import React, { useState } from "react";
import { siteData } from "@/app/siteData";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header w-100 grid-p box-sizing fixed bg-white flex flex-vac gap-3 sm:gap-6 md:gap-8 color-brand z-[600]" id="header">
        <a
          href={siteData.header.logoHref}
          className="logo flex__0 over flex items-center"
          aria-label={siteData.header.logoAlt}
          style={{ width: "clamp(85px, 13vw, 130px)", height: "auto" }}
        >
          <img
            src={siteData.header.logoSrc}
            alt={siteData.header.logoAlt}
            className="w-100 h-auto db object-contain"
            style={{ maxHeight: "clamp(48px, 7vw, 75px)" }}
          />
        </a>

        {/* Desktop primary links */}
        <nav className="font type-14 uppercase over tabv-hide">
          <ul id="menu-topmenu_el" className="menu-ul flex gap-sm" style={{ gap: "22px" }}>
            {siteData.header.navLinks.map((link, idx) => (
              <li key={idx} className="menu-item relative group">
                <a
                  href={link.href || "#"}
                  className="menu-a hover-underline flex items-center gap-1"
                >
                  <span>{link.title}</span>
                  {link.children && (
                    <svg
                      className="w-3 h-3 ml-1 fill-current opacity-70 group-hover:rotate-180 transition-transform"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  )}
                </a>

                {/* Dropdown if link has children */}
                {link.children && (
                  <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-[700] min-w-[250px] shadow-2xl">
                    <div className="bg-[#1D1A55] text-white shadow-xl py-2 px-1 border-t-2 border-[#E9511C] rounded-b-sm">
                      {link.children.map((sub, sIdx) => (
                        <a
                          key={sIdx}
                          href={sub.href.startsWith("#") ? `/${sub.href}` : sub.href}
                          className="block px-4 py-2.5 text-xs font-headings uppercase hover:bg-[#E9511C] hover:text-white transition-colors tracking-wide whitespace-nowrap"
                        >
                          {sub.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side actions: Lang + Registration Button + MENU toggle */}
        <nav className="flex flex-end flex-vac gap-2 sm:gap-3 ml-auto over uppercase">
          <a
            href={siteData.header.langLink.href}
            className="font-bold text-sm sm:text-base lh-1 relative hover-underline mobsm-hide"
            data-label="Language"
            style={{ marginRight: "6px" }}
          >
            {siteData.header.langLink.label}
          </a>

          <a
            href={siteData.header.donateBtn.href}
            className="button-link relative font-headings color-orange text-xs sm:text-sm md:text-base"
            style={{ padding: "8px 14px", borderRadius: "8px" }}
          >
            <span className="over color-white uppercase no-wrap">
              {siteData.header.donateBtn.label}
            </span>
          </a>

          <button
            onClick={toggleMenu}
            type="button"
            className="burger flex button-link relative trans clickable font-headings color-blue text-xs sm:text-sm md:text-base no-wrap border-0 bg-transparent text-left cursor-pointer"
            id="burger"
            aria-label="Toggle navigation menu"
            style={{ padding: "8px 14px", borderRadius: "8px" }}
          >
            {!menuOpen ? (
              <span className="burger__label over color-white uppercase trans overflow">
                MENU
              </span>
            ) : (
              <span className="burger__label over color-white uppercase trans overflow flex flex-vac flex-center" style={{ width: "1.4em", height: "1em" }}>
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            )}
          </button>
        </nav>
      </header>

      {/* Fullscreen Overlay Burger Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[550] bg-[#1D1A55] text-white flex flex-col pt-header overflow-y-auto"
          id="burger-menu-holder"
        >
          <div className="grid-p py-12 flex justify-between items-center mobsm-db">
            <a
              href="#"
              className="text-[#BDDFEC] font-headings text-2xl uppercase hover:text-white"
            >
              {siteData.header.langLink.label || "IN"}
            </a>
          </div>

          <div className="w-100 grid-p uppercase font-headings type-80 py-8 flex-auto flex flex-col justify-center">
            <ul className="w-100 max-w-4xl mx-auto space-y-4">
              {siteData.burgerMenu.items.map((item, idx) => (
                <li
                  key={idx}
                  className="main-item border-b border-white/10 pb-2 relative"
                  onMouseEnter={() => item.children && setActiveSubmenu(idx)}
                >
                  <div className="flex justify-between items-baseline">
                    <a
                      href={item.href || "#"}
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-[#E9511C] transition-colors"
                    >
                      {item.title}
                    </a>
                    {item.children && (
                      <button
                        onClick={() => setActiveSubmenu(activeSubmenu === idx ? null : idx)}
                        className="text-sm px-3 py-1 bg-white/10 rounded font-sans uppercase hover:bg-white/20"
                      >
                        {activeSubmenu === idx ? "Hide" : "Explore"}
                      </button>
                    )}
                  </div>

                  {/* Submenu Dropdown */}
                  {item.children && activeSubmenu === idx && (
                    <ul className="pl-6 pt-4 pb-2 space-y-2 font-headings text-xl font-normal opacity-90 border-l border-white/20 mt-2">
                      {item.children.map((sub, sIdx) => (
                        <li key={sIdx}>
                          <a
                            href={sub.href}
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-[#FEE003] transition-colors block py-1"
                          >
                            {sub.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid-p py-8 text-center text-white/50 text-sm border-t border-white/10">
            <a
              href={siteData.burgerMenu.contactLink.href}
              className="hover:text-white text-base font-semibold"
            >
              {siteData.burgerMenu.contactLink.title}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
