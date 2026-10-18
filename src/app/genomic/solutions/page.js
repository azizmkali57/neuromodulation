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
    keyHighlights,
    solutionPillars,
    transformationProcess,
    targetAudiences,
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
    return `Genetic Health Solutions Consultation Request - ${formData.fullName || "Client"}`;
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
      `Hello Coach Richha Arrora & Shree Namoh Wellness Team,\n\nI would like to inquire about Genetic Health Solutions.\n\nName: ${
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

        {/* 2. Hero Section */}
        <section className="hero-section section-border-b border-[#1D1A55] bg-[#F7F9FC] py-12 md:py-20">
          <div className="grid-p">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Heading & Key Value Proposition */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1D1A55] text-white text-xs font-bold uppercase tracking-wider mb-4 border border-[#1D1A55]">
                  <span className="w-2 h-2 rounded-full bg-[#00AF9C] animate-pulse"></span>
                  {hero.badge}
                </div>

                <h1 className="font-headings type-72 md:type-96 text-[#1D1A55] leading-none mb-6">
                  {hero.title}
                </h1>

                <p className="font-sans text-lg md:text-xl text-neutral-800 leading-relaxed mb-6 font-normal">
                  {hero.subtitle}
                </p>

                {/* Director Spotlight Box */}
                <div className="w-full p-4 md:p-5 bg-white border-l-4 border-[#E9511C] shadow-sm mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-neutral-500 block mb-1">
                      Program Director & Clinical Strategist
                    </span>
                    <h3 className="font-headings text-xl md:text-2xl text-[#1D1A55] font-bold">
                      {hero.director}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-600 font-medium">
                      {hero.credentials}
                    </p>
                  </div>
                  <Link
                    href="/directors/coach-richha-arrora"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E9511C] hover:underline"
                  >
                    View Director Profile →
                  </Link>
                </div>

                {/* Quick Action CTA Buttons */}
                <div className="flex flex-wrap gap-4 items-center w-full">
                  <a
                    href="#consultation-form"
                    className="btn px-6 py-3.5 bg-[#E9511C] hover:bg-[#d44514] text-white font-bold uppercase text-sm tracking-wider shadow-md transition-all"
                  >
                    Request Genomic Consultation
                  </a>
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="btn px-6 py-3.5 bg-[#00AF9C] hover:bg-[#009686] text-white font-bold uppercase text-sm tracking-wider shadow-md transition-all flex items-center gap-2"
                  >
                    <span>WhatsApp Coach Richha ({WHATSAPP_DISPLAY})</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Hero Visual & Director Portrait */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="relative w-full aspect-[4/3] md:aspect-[5/4] border-4 border-[#1D1A55] shadow-xl overflow-hidden bg-white">
                  <Image
                    src="/images/coach-richha-arora-portrait.jpg"
                    alt="Coach Richha Arrora - Certified Genomic Wellness Consultant"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1D1A55] to-transparent text-white">
                    <span className="text-xs uppercase tracking-widest text-[#00AF9C] font-bold block">
                      Translational Nutrigenetics
                    </span>
                    <p className="text-sm font-semibold">
                      Bridging High-Throughput DNA Data with Real-World Holistic Nutrition
                    </p>
                  </div>
                </div>

                {/* Stat Bar */}
                <div className="grid grid-cols-2 gap-3">
                  {hero.stats.slice(0, 2).map((s, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white border border-neutral-300 shadow-xs flex flex-col justify-center"
                    >
                      <span className="font-headings text-2xl md:text-3xl font-black text-[#1D1A55]">
                        {s.value}
                      </span>
                      <span className="text-xs text-neutral-600 font-medium uppercase tracking-wider">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Stats Strip */}
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

        {/* 4. Why Genetic Health Solutions (Key Pillars) */}
        <section className="py-16 md:py-24 bg-white border-b border-neutral-200">
          <div className="grid-p">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E9511C] block mb-2">
                EVIDENCE-BASED PRECISION WELLNESS
              </span>
              <h2 className="font-headings type-48 md:type-72 text-[#1D1A55] mb-4">
                Why One-Size-Fits-All Diets Fail
              </h2>
              <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
                Conventional diets and generic workout routines treat everyone as identical biological machines. In reality, your DNA dictates how your enzymes break down carbohydrates, synthesize fats, activate vitamins, and tolerate environmental stress. Our Genetic Health Solutions decode these pathways to provide a roadmap built entirely for your biology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyHighlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#F7F9FC] border-t-4 border-[#00AF9C] border-x border-b border-neutral-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-neutral-400 block mb-2">
                      0{idx + 1}
                    </span>
                    <h3 className="font-headings text-xl text-[#1D1A55] font-bold mb-3">
                      {hl.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {hl.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Four Core Solution Pillars (Detailed Cards) */}
        <section className="py-16 md:py-24 bg-[#FAF5EE] border-b border-neutral-300">
          <div className="grid-p">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1D1A55] block mb-2">
                FOUR CLINICAL PILLARS
              </span>
              <h2 className="font-headings type-48 md:type-72 text-[#1D1A55]">
                Comprehensive Health Systems We Target
              </h2>
              <div className="w-16 h-1 bg-[#E9511C] mx-auto mt-4"></div>
            </div>

            <div className="space-y-12">
              {solutionPillars.map((pillar, idx) => (
                <div
                  key={pillar.id}
                  className="bg-white border-2 border-[#1D1A55] shadow-lg grid grid-cols-1 lg:grid-cols-12 overflow-hidden"
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
                          What We Map & Optimize:
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

        {/* 6. Step-by-Step Transformation Process */}
        <section className="py-16 md:py-24 bg-white border-b border-neutral-200">
          <div className="grid-p">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00AF9C] block mb-2">
                SEAMLESS CLIENT JOURNEY
              </span>
              <h2 className="font-headings type-48 md:type-72 text-[#1D1A55] mb-4">
                How Our Genetic Health Solution Works
              </h2>
              <p className="text-neutral-700 text-base md:text-lg">
                From simple non-invasive sample collection to lifetime nutritional transformation—here is your 5-step roadmap guided directly by Coach Richha Arrora.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {transformationProcess.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#F7F9FC] border border-neutral-300 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#1D1A55] text-white font-headings font-bold flex items-center justify-center text-sm mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-headings text-lg text-[#1D1A55] font-bold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Who is this For? */}
        <section className="py-16 bg-[#1D1A55] text-white">
          <div className="grid-p">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00AF9C] block mb-2">
                IDEAL CANDIDATES
              </span>
              <h2 className="font-headings type-48 text-white">
                Who Benefits Most from Genomic Precision?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetAudiences.map((aud, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white/5 border border-white/10 hover:border-[#00AF9C] transition-colors"
                >
                  <h3 className="font-headings text-lg text-[#FEE003] font-bold mb-2">
                    {aud.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
                    {aud.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Solution Packages / Programs */}
        <section className="py-16 md:py-24 bg-white border-b border-neutral-200" id="programs">
          <div className="grid-p">
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
                  className={`p-6 md:p-8 flex flex-col justify-between border-2 ${
                    pkg.featured
                      ? "border-[#E9511C] bg-[#FFFBF7] shadow-xl relative"
                      : "border-neutral-300 bg-white shadow-sm"
                  }`}
                >
                  {pkg.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E9511C] text-white px-4 py-0.5 text-xs font-bold uppercase tracking-widest">
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
                      <strong>Best for:</strong> {pkg.recommendedFor}
                    </p>
                    <a
                      href="#consultation-form"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          solutionInterest: pkg.name
                        }))
                      }
                      className={`block w-full py-3 text-center text-xs font-bold uppercase tracking-wider ${
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

        {/* 9. FAQs Section */}
        <section className="py-16 md:py-24 bg-[#F7F9FC] border-b border-neutral-200">
          <div className="grid-p">
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
                <div key={idx} className="p-6 bg-white border border-neutral-300 shadow-xs">
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

        {/* 10. Consultation & Application Booking Form */}
        <section className="py-16 md:py-24 bg-white" id="consultation-form">
          <div className="grid-p">
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
                  Fill out the consultation form below to inquire about testing kits, panel pricing, and consultation scheduling with Coach Richha Arrora.
                </p>

                <div className="p-5 bg-[#FAF5EE] border-l-4 border-[#1D1A55] mb-6">
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
                    className="w-full py-3.5 px-4 bg-[#00AF9C] hover:bg-[#009686] text-white font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow"
                  >
                    <span>Instant WhatsApp Inquiry with Coach Richha</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleSendViaEmail}
                    className="w-full py-3.5 px-4 bg-[#1D1A55] hover:bg-[#2c2877] text-white font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow"
                  >
                    <span>Send Inquiry to {TARGET_GENOMICS_EMAIL}</span>
                  </button>
                </div>
              </div>

              {/* Form Input Column */}
              <div className="lg:col-span-7 bg-[#F7F9FC] p-6 md:p-10 border-2 border-[#1D1A55] shadow-lg">
                <h3 className="font-headings text-2xl text-[#1D1A55] font-bold mb-6">
                  Patient & Client Registration Form
                </h3>

                {formStatus.state === "error" && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-800 text-xs font-semibold">
                    {formStatus.message}
                  </div>
                )}

                {formStatus.state === "success" && (
                  <div className="mb-4 p-4 bg-emerald-50 border border-emerald-400 text-emerald-900 text-xs font-semibold">
                    <p className="mb-2 font-bold">{formStatus.message}</p>
                    <div className="flex gap-2 mt-2">
                      <button
                        type="button"
                        onClick={handleSendViaEmail}
                        className="px-3 py-1.5 bg-[#1D1A55] text-white text-xs font-bold uppercase tracking-wider"
                      >
                        Open Email Client
                      </button>
                      <button
                        type="button"
                        onClick={handleWhatsAppDirect}
                        className="px-3 py-1.5 bg-[#00AF9C] text-white text-xs font-bold uppercase tracking-wider"
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
                      className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C]"
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
                        className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C]"
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
                        className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C]"
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
                        className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C]"
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
                        className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C]"
                      >
                        <option value="Complete Holistic Genomic Health Solution">
                          Complete Holistic Genomic Health Solution
                        </option>
                        <option value="Metabolic & Nutrition Genomic Solution">
                          Metabolic & Nutrition Genomic Solution
                        </option>
                        <option value="Family Heritage & Preventative Health Panel">
                          Family Heritage & Preventative Health Panel
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
                      className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C]"
                    ></textarea>
                  </div>

                  {/* Target Dispatch Email Display */}
                  <div className="p-3 bg-neutral-200 border border-neutral-300 flex items-center justify-between text-xs">
                    <span className="text-neutral-700">Dispatch Email:</span>
                    <span className="font-mono font-bold text-[#1D1A55]">
                      {targetEmail}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#E9511C] hover:bg-[#d44514] text-white font-bold uppercase text-xs md:text-sm tracking-wider shadow-md transition-all"
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
