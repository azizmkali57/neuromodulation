"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/app/siteData";
import { geneticSolutionsData } from "./solutionsData";

const TARGET_GENOMICS_EMAIL = "genomics@drnehaarora.com";
const WHATSAPP_NUMBER = "6261891312";
const WHATSAPP_DISPLAY = "+91 62618 91312";

export default function GeneticHealthSolutionsPage() {
  const {
    hero,
    howItWorks,
    phenotypeCategories,
    clinicalPillars,
    packages,
    faqs
  } = geneticSolutionsData;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    solutionInterest: "Complete Holistic Genomic Health Solution",
    message: ""
  });
  const [targetEmail, setTargetEmail] = useState(TARGET_GENOMICS_EMAIL);
  const [formStatus, setFormStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildEmailSubject = () => {
    return `Genetic Health Solutions Inquiry - ${formData.fullName || "Client"}`;
  };

  const buildEmailBody = () => {
    return (
      `Dear Coach Richha Arrora & Genomic Health Solutions Team,\n\n` +
      `Here are the consultation details submitted for Genetic Health Solutions:\n\n` +
      `• Full Name: ${formData.fullName}\n` +
      `• Mobile / WhatsApp Number: ${formData.phone}\n` +
      `• Email Address: ${formData.email || "Not provided"}\n` +
      `• City / Location: ${formData.city || "Not provided"}\n` +
      `• Solution Program of Interest: ${formData.solutionInterest}\n` +
      `• Health Goals / Concerns: ${formData.message || "Please share testing kit availability, procedure, and consultation slots."}\n\n` +
      `Submitted via Genetic Health Solutions Portal (Shree Namoh Wellness)`
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setFormStatus({ state: "error", message: "Please provide your full name and phone number." });
      return;
    }
    setFormStatus({ state: "submitting", message: "" });

    const subject = encodeURIComponent(buildEmailSubject());
    const body = encodeURIComponent(buildEmailBody());
    const mailtoUrl = `mailto:${encodeURIComponent(targetEmail)}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setFormStatus({
        state: "success",
        message: `Your inquiry details have been formatted for ${targetEmail}. Click below to confirm via email or chat directly on WhatsApp.`
      });
      if (typeof window !== "undefined") {
        window.location.href = mailtoUrl;
      }
    }, 400);
  };

  const handleSendViaEmail = () => {
    const subject = encodeURIComponent(buildEmailSubject());
    const body = encodeURIComponent(buildEmailBody());
    window.location.href = `mailto:${encodeURIComponent(targetEmail)}?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Coach Richha Arrora & Shree Namoh Wellness Team,\n\nI would like to inquire about Genetic Health Solutions (Crack Your Genetic Code).\n\nName: ${
        formData.fullName || "Inquirer"
      }\nPhone: ${formData.phone || "Not provided"}\nEmail: ${formData.email || "Not provided"}\nProgram: ${
        formData.solutionInterest
      }\nCity: ${formData.city || "Not provided"}\nGoals / Questions: ${
        formData.message || "Please share DNA testing kit delivery details, pricing, and consultation dates."
      }`
    );
    window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div className="w-100 bg-white" style={{ minHeight: "100vh" }}>
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="main-content pt-header w-100" id="genetic-solutions-content">
        {/* Continuous Marquee Ticker */}
        <header
          className="marquee flex no-wrap font-headings type-108 uppercase color-white bg-dark overflow-hidden py-1"
          role="marquee"
          aria-label="Clinical Genomic Announcements"
          style={{ backgroundColor: "#1D1A55", letterSpacing: "0.08em" }}
        >
          <div className="marquee-scroll flex no-wrap">
            <span>
              PRECISION GENOMICS • TRANSLATIONAL NUTRIGENETICS • DNA-BASED METABOLIC RESILIENCE • DIRECTED BY COACH RICHHA ARRORA • SHREE NAMOH WELLNESS •&nbsp;
            </span>
          </div>
          <div className="marquee-scroll flex no-wrap" aria-hidden="true">
            <span>
              PRECISION GENOMICS • TRANSLATIONAL NUTRIGENETICS • DNA-BASED METABOLIC RESILIENCE • DIRECTED BY COACH RICHHA ARRORA • SHREE NAMOH WELLNESS •&nbsp;
            </span>
          </div>
        </header>

        {/* =================================================================
            HERO SECTION: MATCHING REFERENCE LAYOUT
            - Top Left: Eyebrow Badge & Director Link
            - Centered Big Title: Crack Your Genetic Code
            - Visual Section: Family Photo (Left) + DNA Kit Card (Right)
            - Tagline: Know Your DNA Discover Yourself
            - Ambient Molecular Motifs (Left & Right)
        ================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F9FC] via-white to-white pt-8 pb-14 border-b border-neutral-200">
          {/* Ambient Molecule Background Accents */}
          <div
            className="absolute top-6 left-0 w-24 sm:w-32 md:w-44 h-80 pointer-events-none opacity-40 z-0 select-none hidden sm:block"
            style={{
              backgroundImage: "url('/images/genomics/mol-left.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain"
            }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-6 right-0 w-24 sm:w-32 md:w-44 h-80 pointer-events-none opacity-40 z-0 select-none hidden sm:block"
            style={{
              backgroundImage: "url('/images/genomics/mol-right.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "bottom right"
            }}
            aria-hidden="true"
          />

          <div className="grid-p relative z-10">
            {/* Top Eyebrow & Breadcrumb */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                <Link href="/" className="hover:text-[#E9511C] transition-colors">Home</Link>
                <span>/</span>
                <span className="text-neutral-400">Genomic</span>
                <span>/</span>
                <span className="text-[#1D1A55] font-bold">Solutions</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1D1A55] text-white text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#00AF9C] animate-pulse"></span>
                {hero.badge}
              </div>
            </div>

            {/* Main Centered Hero Heading */}
            <div className="text-center max-w-4xl mx-auto mb-10">
              <h1 className="font-headings type-72 md:type-108 text-[#1D1A55] uppercase tracking-tight mb-3" style={{ lineHeight: "0.98" }}>
                {hero.title}
              </h1>
              <p className="text-sm md:text-base font-bold uppercase tracking-widest text-[#E9511C]">
                {hero.subtitle}
              </p>
            </div>

            {/* Visual Block: Family Portrait + DNA Kit Showcase Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl mx-auto mb-12">
              {/* Left Column: Fresh High-Quality Family Portrait */}
              <div className="lg:col-span-7 flex justify-center">
                <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white ring-1 ring-neutral-200">
                  <Image
                    src={hero.familyImage}
                    alt="Happy healthy family discovering wellness through genetic testing"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  {/* Subtle Badge */}
                  <div className="absolute top-4 left-4 bg-[#1D1A55]/90 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded">
                    Holistic Family Wellness
                  </div>
                </div>
              </div>

              {/* Right Column: DNA Kit Card + Tagline */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* DNA Kit 3D Floating Presentation Card */}
                <div className="w-full max-w-sm p-6 bg-gradient-to-br from-white via-[#F7F9FC] to-[#BDDFEC]/20 rounded-2xl border-2 border-[#1D1A55] shadow-xl relative overflow-hidden mb-6 group hover:shadow-2xl transition-all">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-200">
                    <span className="text-xs uppercase font-extrabold tracking-widest text-[#1D1A55]">
                      Precision DNA Kit
                    </span>
                    <span className="text-[11px] font-bold text-white bg-[#00AF9C] px-2 py-0.5 rounded">
                      Made in India
                    </span>
                  </div>

                  {/* Kit Visual Representation */}
                  <div className="relative h-44 w-full flex items-center justify-center bg-white rounded-lg border border-neutral-200 p-3 mb-4 shadow-inner">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/genomics/image1.jpeg"
                        alt="DNA Precision Testing Kit Module"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-headings text-lg font-bold text-[#1D1A55]">
                      Advanced Saliva Sample Collection
                    </h3>
                    <p className="text-xs text-neutral-600">
                      Non-invasive buccal/saliva screening analyzing 220+ phenotypes across 16 targeted panels.
                    </p>
                  </div>
                </div>

                {/* Tagline Matching Reference Layout */}
                <div className="space-y-1">
                  <h2 className="font-headings text-2xl md:text-3xl font-extrabold text-[#1D1A55] tracking-tight">
                    Know Your DNA
                  </h2>
                  <h2 className="font-headings text-2xl md:text-3xl font-extrabold text-[#00AF9C] tracking-tight">
                    Discover Yourself
                  </h2>
                </div>
              </div>
            </div>

            {/* Introductory Narrative Card */}
            <div className="max-w-3xl mx-auto text-center bg-white p-6 md:p-8 rounded-xl border border-neutral-200 shadow-sm">
              <h3 className="font-headings text-xl md:text-2xl text-[#1D1A55] font-bold mb-4">
                {hero.subtitle}
              </h3>
              <div className="space-y-3 text-neutral-700 text-sm md:text-base leading-relaxed">
                {hero.description.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-6 border-t border-neutral-100">
                <a
                  href="#how-it-works"
                  className="px-6 py-3 bg-[#1D1A55] hover:bg-[#2c2877] text-white font-bold uppercase text-xs tracking-wider transition-all shadow"
                >
                  Explore How It Works ↓
                </a>
                <a
                  href="#phenotypes-categories"
                  className="px-6 py-3 bg-[#E9511C] hover:bg-[#d44514] text-white font-bold uppercase text-xs tracking-wider transition-all shadow"
                >
                  View 19 Vital Categories →
                </a>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="px-6 py-3 bg-[#00AF9C] hover:bg-[#009686] text-white font-bold uppercase text-xs tracking-wider transition-all shadow flex items-center gap-2"
                >
                  <span>Inquire Via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="bg-[#1D1A55] text-white py-6 border-y border-[#1D1A55]">
          <div className="grid-p">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {hero.stats.map((s, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="font-headings text-3xl md:text-4xl font-extrabold text-[#FEE003] mb-1">
                    {s.value}
                  </span>
                  <span className="text-xs md:text-sm text-neutral-200 uppercase tracking-wider font-semibold max-w-[200px]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 2: HOW DOES IT WORK?
            - Layout: 2 Columns × 3 Rows of Pastel/Pill Cards
            - Left: Icon Thumbnail
            - Right: Bold Title + Subtitle + Description
        ================================================================= */}
        <section className="py-16 md:py-24 bg-[#FAF5EE] border-b border-neutral-300" id="how-it-works">
          <div className="grid-p max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E9511C] block mb-2">
                STEP-BY-STEP CLIENT JOURNEY
              </span>
              <h2 className="font-headings type-48 md:type-72 text-[#1D1A55] tracking-tight">
                How Does It Work?
              </h2>
              <div className="w-16 h-1 bg-[#1D1A55] mx-auto mt-4"></div>
            </div>

            {/* 6 Step Cards in 2 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {howItWorks.map((step, idx) => (
                <div
                  key={step.id}
                  className="bg-white rounded-2xl p-5 md:p-6 shadow-md border-2 border-neutral-200 hover:border-[#1D1A55] hover:shadow-xl transition-all flex items-start gap-4"
                  style={{
                    backgroundColor: "#FFFFFF"
                  }}
                >
                  {/* Left: Vector Icon Container with tinted background */}
                  <div
                    className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center p-3 border shadow-sm"
                    style={{
                      backgroundColor: step.badgeColor,
                      borderColor: step.borderColor,
                      color: step.accentColor
                    }}
                  >
                    {step.id === "step-kit" && (
                      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                      </svg>
                    )}
                    {step.id === "step-delivery" && (
                      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V3.375c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v10.875" />
                      </svg>
                    )}
                    {step.id === "step-report" && (
                      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm-3.75 11.25h6m-6 3h6m-6 3h3" />
                      </svg>
                    )}
                    {step.id === "step-counselling" && (
                      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                      </svg>
                    )}
                    {step.id === "step-action-plan" && (
                      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                      </svg>
                    )}
                    {step.id === "step-helpdesk" && (
                      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    )}
                  </div>

                  {/* Right: Text Information */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-neutral-400">
                        Step 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-headings text-base md:text-lg font-bold text-[#1D1A55] leading-snug">
                      {step.title}
                    </h3>

                    {step.subTitle && (
                      <span className="block text-xs font-semibold text-[#E9511C] mt-0.5 mb-2">
                        {step.subTitle}
                      </span>
                    )}

                    <p className="text-xs md:text-sm text-neutral-600 leading-relaxed mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 3: ADVANCED DNA PROGRAM CONSISTS OF 220+ PHENOTYPES
            UNDER 19 VITAL CATEGORIES
            - 3-Column Grid of 19 Visual Cards
            - Card Layout: Image Thumbnail (Left) + Category Name (Right)
            - 19th Card centered or spanning cleanly
        ================================================================= */}
        <section className="py-16 md:py-24 bg-white border-b border-neutral-200" id="phenotypes-categories">
          <div className="grid-p max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00AF9C] block mb-2">
                EXHAUSTIVE MULTI-SYSTEM GENOMIC COVERAGE
              </span>
              <h2 className="font-headings type-40 md:type-64 text-[#1D1A55] tracking-tight uppercase" style={{ lineHeight: "1.05" }}>
                ADVANCED DNA PROGRAM CONSISTS OF<br />
                <span className="text-[#E9511C]">220+ PHENOTYPES</span> UNDER <span className="text-[#00AF9C]">19 VITAL CATEGORIES</span>
              </h2>
              <div className="w-20 h-1 bg-[#1D1A55] mx-auto mt-4"></div>
            </div>

            {/* 19 Categories Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {phenotypeCategories.map((cat, idx) => (
                <div
                  key={cat.id}
                  className={`bg-white rounded-2xl p-4 border-2 border-neutral-200 hover:border-[#1D1A55] shadow-sm hover:shadow-xl transition-all flex items-center gap-4 group ${
                    idx === 18 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                  }`}
                >
                  {/* Category High-Res Thumbnail */}
                  <div className="w-20 h-20 sm:w-24 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 bg-neutral-100 border border-neutral-200 relative shadow-md">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-300"
                    />
                  </div>

                  {/* Category Label */}
                  <div className="flex-1 pr-1">
                    <span className="text-[11px] font-mono font-extrabold uppercase tracking-wider text-[#00AF9C] block mb-1">
                      Category {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <h3 className="font-headings text-sm sm:text-base font-bold text-[#1D1A55] group-hover:text-[#E9511C] transition-colors leading-snug">
                      {cat.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Consultation Prompt Strip */}
            <div className="mt-12 p-6 bg-gradient-to-r from-[#1D1A55] to-[#252169] text-white rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-headings text-xl font-bold mb-1">
                  Ready to map all 19 vital categories for your biology?
                </h4>
                <p className="text-xs md:text-sm text-neutral-300">
                  Book a direct 1-on-1 counseling with Coach Richha Arrora to review your complete DNA blueprint.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#consultation-form"
                  className="px-5 py-3 bg-[#E9511C] hover:bg-[#d44514] text-white font-bold uppercase text-xs tracking-wider transition-all whitespace-nowrap shadow"
                >
                  Book Genomic Kit →
                </a>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="px-5 py-3 bg-[#00AF9C] hover:bg-[#009686] text-white font-bold uppercase text-xs tracking-wider transition-all whitespace-nowrap shadow"
                >
                  WhatsApp Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 4: FOUR CLINICAL PILLARS
            Preserving high-value scientific depth tailored to Coach Richha Arrora
        ================================================================= */}
        <section className="py-16 md:py-24 bg-[#F7F9FC] border-b border-neutral-300">
          <div className="grid-p max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E9511C] block mb-2">
                SCIENTIFIC FOUNDATIONS
              </span>
              <h2 className="font-headings type-48 md:type-72 text-[#1D1A55]">
                Four Clinical Pillars We Target
              </h2>
              <div className="w-16 h-1 bg-[#1D1A55] mx-auto mt-4"></div>
            </div>

            <div className="space-y-12">
              {clinicalPillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="bg-white border-2 border-[#1D1A55] shadow-lg grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-xl"
                >
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-neutral-100">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#1D1A55] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 shadow">
                      {pillar.tag}
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs uppercase font-bold tracking-widest text-[#E9511C]">
                          Pillar {pillar.number}
                        </span>
                      </div>
                      <h3 className="font-headings text-2xl md:text-3xl text-[#1D1A55] font-bold mb-2">
                        {pillar.title}
                      </h3>
                      <h4 className="text-sm md:text-base font-semibold text-[#00AF9C] mb-4">
                        {pillar.subtitle}
                      </h4>
                      <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-6">
                        {pillar.description}
                      </p>

                      <div className="border-t border-neutral-200 pt-4">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#1D1A55] block mb-3">
                          What We Map &amp; Optimize:
                        </span>
                        <ul className="space-y-2">
                          {pillar.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-sm text-neutral-800">
                              <span className="text-[#00AF9C] font-bold">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <a
                        href="#consultation-form"
                        className="text-xs md:text-sm uppercase font-bold tracking-wider text-[#E9511C] hover:underline"
                      >
                        Inquire about this clinical module →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 5: SOLUTION PACKAGES
        ================================================================= */}
        <section className="py-16 md:py-24 bg-white border-b border-neutral-200" id="programs">
          <div className="grid-p max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E9511C] block mb-2">
                PERSONALIZED CARE OPTIONS
              </span>
              <h2 className="font-headings type-48 md:type-72 text-[#1D1A55]">
                Genomic Health Solution Programs
              </h2>
              <div className="w-16 h-1 bg-[#1D1A55] mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`p-6 md:p-8 flex flex-col justify-between border-2 rounded-xl ${
                    pkg.featured
                      ? "border-[#E9511C] bg-[#FFFBF7] shadow-xl relative"
                      : "border-neutral-300 bg-white shadow-sm"
                  }`}
                >
                  {pkg.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E9511C] text-white px-4 py-0.5 text-xs font-bold uppercase tracking-widest rounded-full">
                      Most Comprehensive
                    </div>
                  )}

                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-[#00AF9C] block mb-2">
                      {pkg.category}
                    </span>
                    <h3 className="font-headings text-2xl text-[#1D1A55] font-bold mb-3">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="border-t border-neutral-200 pt-4 mb-6">
                      <span className="text-xs uppercase font-bold tracking-wider text-neutral-500 block mb-3">
                        Included In This Program:
                      </span>
                      <ul className="space-y-2.5">
                        {pkg.features.map((f, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs md:text-sm text-neutral-800">
                            <span className="text-[#E9511C] font-bold">✓</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-neutral-200">
                    <p className="text-xs text-neutral-500 italic mb-4">
                      <strong>Best For:</strong> {pkg.recommendedFor}
                    </p>
                    <a
                      href="#consultation-form"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          solutionInterest: pkg.name
                        }))
                      }
                      className={`block w-full py-3 text-center text-xs font-bold uppercase tracking-wider rounded ${
                        pkg.featured
                          ? "bg-[#E9511C] text-white hover:bg-[#d44514]"
                          : "bg-[#1D1A55] text-white hover:bg-[#2c2877]"
                      } transition-all`}
                    >
                      Book This Program →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 6: FREQUENTLY ASKED QUESTIONS
        ================================================================= */}
        <section className="py-16 md:py-24 bg-[#F7F9FC] border-b border-neutral-200">
          <div className="grid-p max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1D1A55] block mb-2">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="font-headings type-48 text-[#1D1A55]">
                Clarifying Genetic Health Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-6 bg-white border border-neutral-300 shadow-sm rounded-xl">
                  <h3 className="font-headings text-lg text-[#1D1A55] font-bold mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 7: CONSULTATION & APPLICATION BOOKING FORM
        ================================================================= */}
        <section className="py-16 md:py-24 bg-white" id="consultation-form">
          <div className="grid-p max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Form Guidance Column */}
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E9511C] block mb-2">
                  CONFIDENTIAL CONSULTATION
                </span>
                <h2 className="font-headings type-48 md:type-72 text-[#1D1A55] mb-4">
                  Request Your Genetic Health Solution
                </h2>
                <p className="text-neutral-700 text-base leading-relaxed mb-6">
                  Fill out the consultation form below to inquire about testing kits, 16 panel options, 220+ phenotypes decoding, and consultation scheduling with Coach Richha Arrora.
                </p>

                <div className="p-5 bg-[#FAF5EE] border-l-4 border-[#1D1A55] mb-6 rounded-r-lg">
                  <h4 className="font-headings text-base font-bold text-[#1D1A55] mb-1">
                    Direct Contact Desk:
                  </h4>
                  <p className="text-xs md:text-sm text-neutral-700 mb-2">
                    Official Genomics Desk: <strong>{TARGET_GENOMICS_EMAIL}</strong>
                  </p>
                  <p className="text-xs md:text-sm text-neutral-700">
                    WhatsApp Helpline: <strong>{WHATSAPP_DISPLAY}</strong>
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full py-3.5 px-4 bg-[#00AF9C] hover:bg-[#009686] text-white font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow rounded"
                  >
                    <span>Instant WhatsApp Inquiry With Coach Richha</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleSendViaEmail}
                    className="w-full py-3.5 px-4 bg-[#1D1A55] hover:bg-[#2c2877] text-white font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow rounded"
                  >
                    <span>Send Inquiry to {TARGET_GENOMICS_EMAIL}</span>
                  </button>
                </div>
              </div>

              {/* Form Input Column */}
              <div className="lg:col-span-7 bg-[#F7F9FC] p-6 md:p-10 border-2 border-[#1D1A55] shadow-lg rounded-2xl">
                <h3 className="font-headings text-2xl text-[#1D1A55] font-bold mb-6">
                  Patient &amp; Client Registration Form
                </h3>

                {formStatus.state === "error" && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-800 text-xs font-semibold rounded">
                    {formStatus.message}
                  </div>
                )}

                {formStatus.state === "success" && (
                  <div className="mb-4 p-4 bg-emerald-50 border border-emerald-400 text-emerald-900 text-xs font-semibold rounded">
                    <p className="mb-2 font-bold">{formStatus.message}</p>
                    <div className="flex gap-2 mt-2">
                      <button
                        type="button"
                        onClick={handleSendViaEmail}
                        className="px-3 py-1.5 bg-[#1D1A55] text-white text-xs font-bold uppercase tracking-wider rounded"
                      >
                        Open Email Client
                      </button>
                      <button
                        type="button"
                        onClick={handleWhatsAppDirect}
                        className="px-3 py-1.5 bg-[#00AF9C] text-white text-xs font-bold uppercase tracking-wider rounded"
                      >
                        Confirm on WhatsApp
                      </button>
                    </div>
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Patel"
                      className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C] rounded"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Mobile / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98270XXXXX"
                        className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C] rounded"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. name@example.com"
                        className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C] rounded"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        City / Location
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Indore, MP"
                        className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C] rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Program of Interest
                      </label>
                      <select
                        name="solutionInterest"
                        value={formData.solutionInterest}
                        onChange={handleChange}
                        className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C] rounded"
                      >
                        <option value="Complete Holistic Genomic Health Solution">
                          Complete Holistic Genomic Health Solution (19 Categories)
                        </option>
                        <option value="Metabolic & Nutrition Genomic Solution">
                          Metabolic &amp; Nutrition Genomic Solution
                        </option>
                        <option value="Family Heritage & Preventative Health Panel">
                          Family Heritage &amp; Preventative Health Panel
                        </option>
                        <option value="General Genomic Wellness Consultation">
                          General Genomic Wellness Consultation
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Health Goals or Primary Health Inquiries
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share any family health background, weight concerns, digestive issues, or questions for Coach Richha..."
                      className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C] rounded"
                    ></textarea>
                  </div>

                  {/* Target Dispatch Email Display */}
                  <div className="p-3 bg-neutral-200 border border-neutral-300 flex items-center justify-between text-xs rounded">
                    <span className="text-neutral-700">Dispatch Email:</span>
                    <span className="font-mono font-bold text-[#1D1A55]">
                      {targetEmail}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#E9511C] hover:bg-[#d44514] text-white font-bold uppercase text-xs md:text-sm tracking-wider shadow-md transition-all rounded"
                  >
                    Submit Consultation Request →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
