"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/app/siteData";
import { genomicData } from "../genomicData";

const TARGET_GENOMICS_EMAIL = "genomics@drnehaarora.com";
const WHATSAPP_NUMBER = "6261891312";
const WHATSAPP_DISPLAY = "+91 62618 91312";

export default function GenomicWorkshopPage() {
  const { hero, tableOfContents, modules, testingPanels } = genomicData;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    panelInterest: "Comprehensive Whole-Genome Wellness Program",
    message: ""
  });
  const [targetEmail, setTargetEmail] = useState(TARGET_GENOMICS_EMAIL);
  const [formStatus, setFormStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildEmailSubject = () => {
    return `Genetic Counseling & Genomic Wellness Inquiry - ${formData.fullName || "Inquirer"}`;
  };

  const buildEmailBody = () => {
    return (
      `Dear Coach Richha Arrora & Genomic Wellness Team,\n\n` +
      `Here are the consultation details submitted for Genetic Counseling:\n\n` +
      `• Full Name: ${formData.fullName}\n` +
      `• Phone / WhatsApp Number: ${formData.phone}\n` +
      `• Email Address: ${formData.email || "Not provided"}\n` +
      `• City / Location: ${formData.city || "Not provided"}\n` +
      `• Testing Panel / Consultation Interest: ${formData.panelInterest}\n` +
      `• Specific Health Concerns / Goals: ${formData.message || "Please share testing process details, pricing, and consultation dates."}\n\n` +
      `Submitted via Genetic Counseling Portal`
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setFormStatus({ state: "error", message: "Please provide your name and phone number." });
      return;
    }
    setFormStatus({ state: "submitting", message: "" });

    const subject = encodeURIComponent(buildEmailSubject());
    const body = encodeURIComponent(buildEmailBody());
    const mailtoUrl = `mailto:${encodeURIComponent(targetEmail)}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setFormStatus({
        state: "success",
        message: `Your genetic counseling details have been formatted for ${targetEmail}. Click below to confirm via your email app or WhatsApp.`
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
      `Hello Coach Richha Arrora & Shree Namoh Wellness Team,\n\nI would like to inquire about Genetic Counseling & Genomic Wellness.\n\nName: ${
        formData.fullName || "Inquirer"
      }\nPhone: ${formData.phone || "Not provided"}\nEmail: ${formData.email || "Not provided"}\nPanel of Interest: ${
        formData.panelInterest
      }\nCity: ${formData.city || "Not provided"}\nMessage: ${
        formData.message || "Please share testing process details, pricing, and consultation dates."
      }`
    );
    window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div className="w-100 bg-white" style={{ minHeight: "100vh" }}>
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="main-content pt-header w-100" id="genomic-content">
        {/* Continuous Marquee Ticker */}
        <header
          className="marquee flex no-wrap font-headings type-108 uppercase color-white bg-dark overflow-hidden py-1"
          style={{ letterSpacing: "0.02em" }}
        >
          <div className="marquee-track flex">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex no-wrap px-4">
                {siteData.marqueeText}
              </div>
            ))}
          </div>
        </header>

        {/* =================================================================
            HERO SECTION: GENOMIC WELLNESS & DNA TESTING PROGRAM
        ================================================================= */}
        <section className="grid-p pt-8 sm:pt-10 pb-16 bg-white border-b border-[#BDDFEC]">
          <div className="m-auto" style={{ maxWidth: "1280px" }}>
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6"
            >
              <a href="/" className="hover:text-[#E9511C] transition-colors">
                Home
              </a>
              <span>/</span>
              <span className="text-gray-400">Genomic</span>
              <span>/</span>
              <span className="text-[#1D1A55] font-bold">Workshop Overview &amp; DNA Counseling</span>
            </nav>

            {/* Top Eyebrow */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="font-headings type-18 uppercase px-3 py-1 font-bold"
                style={{
                  backgroundColor: "var(--c-light-blue, #BDDFEC)",
                  color: "var(--c-darkest-blue, #1D1A55)",
                  letterSpacing: "0.05em"
                }}
              >
                {hero.badge}
              </span>
              <span className="font-headings type-18 uppercase color-orange">
                PERSONALIZED DNA TESTING &amp; COUNSELING
              </span>
            </div>

            {/* Main Broadsheet Heading */}
            <h1
              className="font-headings type-108 uppercase mb-8 highlight-bolds overflow"
              style={{
                lineHeight: "0.96em",
                maxWidth: "15em",
                "--bg": "var(--c-yellow, #FEE003)"
              }}
            >
              <b>{hero.headingHighlight}</b>
              <br />
              {hero.headingRest}
            </h1>

            {/* Lead Narrative & Key Metrics Split */}
            <div className="dg grid-auto gap-large g-vat mb-12">
              <div>
                <p className="type-20 leading-relaxed font-semibold text-[#1D1A55] mb-6" style={{ maxWidth: "38em" }}>
                  {hero.lead}
                </p>
                <p className="type-16 text-gray-700 leading-relaxed mb-8" style={{ maxWidth: "38em" }}>
                  Predictive genetic testing combined with translational nutrigenetics and customized lifestyle
                  modifications shatters the outdated dogma of &quot;one size fits all.&quot; Discover how your DNA
                  influences food metabolism, disease predispositions, and athletic recovery, guided directly by our
                  in-house genetic counselors.
                </p>

                {/* Primary CTA Buttons */}
                <div className="flex flex-wrap gap-4 items-center">
                  <a
                    href="#admissions-booking"
                    className="button-link di relative font-headings type-24 ls lh-1 color-orange uppercase"
                  >
                    <span className="over di color-white">Book Genetic Counseling →</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="button-link di relative font-headings type-24 ls lh-1 uppercase cursor-pointer"
                    style={{
                      backgroundColor: "#25D366",
                      color: "#ffffff",
                      border: "none"
                    }}
                  >
                    <span className="over di color-white flex items-center gap-2">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.203.043.072.043.419-.101.824z" />
                      </svg>
                      WhatsApp: {WHATSAPP_DISPLAY}
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Column: Key Scientific Metrics Box */}
              <div className="bg-[#f5f8fc] p-8 border-l-4 border-[#00AF9C] flex flex-col justify-between">
                <div>
                  <div className="font-headings type-20 uppercase color-darkest-blue mb-2">
                    GENOME MATRIX HIGHLIGHTS
                  </div>
                  <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                    Personalized DNA bioinformatics decoded into lay-person clarity.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {hero.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-white p-4 border border-[#BDDFEC]">
                      <div className="font-headings type-36 color-orange leading-none mb-1">
                        {m.value}
                      </div>
                      <div className="text-[11px] font-bold uppercase text-gray-600 leading-tight">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Directorial Leadership Ribbon */}
            <div className="bg-[#1D1A55] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#FEE003]">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#FEE003]">
                  <img
                    src={hero.director.image}
                    alt={hero.director.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 20%" }}
                  />
                </div>
                <div>
                  <span className="text-xs uppercase font-headings text-[#FEE003] tracking-widest block">
                    PROGRAM DIRECTOR
                  </span>
                  <div className="font-headings type-24 text-white uppercase leading-tight">
                    {hero.director.name}
                  </div>
                  <div className="text-xs text-[#BDDFEC] mt-0.5">
                    {hero.director.role}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={hero.director.link}
                  className="font-headings text-xs uppercase px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
                >
                  View Director Profile →
                </a>
                <a
                  href={`https://wa.me/91${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-headings text-xs uppercase px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded transition-colors flex items-center gap-1.5"
                >
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            TABLE OF CONTENTS NAVIGATION DRAWER
        ================================================================= */}
        <section className="grid-p py-8 bg-[#f8fafc] border-b border-[#BDDFEC]">
          <div className="m-auto" style={{ maxWidth: "1280px" }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-headings text-xs uppercase text-[#E9511C] font-bold tracking-wider">
                CURRICULUM ROADMAP
              </span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
              {tableOfContents.map((toc, idx) => (
                <a
                  key={idx}
                  href={`#${toc.id}`}
                  className="text-xs font-semibold text-[#1D1A55] hover:text-[#E9511C] p-2 bg-white border border-gray-200 hover:border-[#E9511C] transition-colors rounded text-center block"
                >
                  {toc.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            DETAILED EDUCATIONAL MODULES (01 TO 06)
        ================================================================= */}
        <div className="divide-y divide-[#BDDFEC]">
          {modules.map((mod) => (
            <section
              key={mod.id}
              id={mod.id}
              className="grid-p pt-88 pb-88 bg-white scroll-mt-28"
            >
              <div className="m-auto" style={{ maxWidth: "1200px" }}>
                {/* Module Eyebrow Header */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-headings type-24 color-orange">
                    {mod.number}
                  </span>
                  <span
                    className="font-headings text-xs uppercase px-2.5 py-1 bg-[#BDDFEC] text-[#1D1A55] font-bold"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    {mod.badge}
                  </span>
                </div>

                <h2 className="font-headings type-48 uppercase text-[#1D1A55] mb-2 leading-tight">
                  {mod.title}
                </h2>
                <p className="font-headings type-20 text-[#E9511C] uppercase mb-8">
                  {mod.subtitle}
                </p>

                {/* Split layout: Text vs Scientific Image */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-8">
                  <div className={mod.image ? "lg:col-span-7" : "lg:col-span-12"}>
                    <div className="space-y-4 text-gray-800 type-16 leading-relaxed">
                      {mod.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>

                  {mod.image && (
                    <div className="lg:col-span-5 bg-[#f5f8fc] p-3 border border-[#BDDFEC] shadow-sm">
                      <div className="overflow-hidden bg-white mb-2">
                        <img
                          src={mod.image}
                          alt={mod.title}
                          className="w-full h-auto object-contain mx-auto"
                          style={{ maxHeight: "380px" }}
                        />
                      </div>
                      <p className="text-xs text-gray-600 italic text-center m-0 px-2 py-1">
                        {mod.imageCaption}
                      </p>
                    </div>
                  )}
                </div>

                {/* Secondary Image & Narrative (if present, e.g. in Module 1) */}
                {mod.secondaryImage && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-8 pt-6 border-t border-gray-100">
                    <div className="lg:col-span-5 order-2 lg:order-1 bg-[#f5f8fc] p-3 border border-[#BDDFEC]">
                      <div className="overflow-hidden bg-white mb-2">
                        <img
                          src={mod.secondaryImage}
                          alt={mod.title}
                          className="w-full h-auto object-contain mx-auto"
                          style={{ maxHeight: "380px" }}
                        />
                      </div>
                      <p className="text-xs text-gray-600 italic text-center m-0 px-2 py-1">
                        {mod.secondaryCaption}
                      </p>
                    </div>

                    <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 text-gray-800 type-16 leading-relaxed">
                      {mod.secondaryParagraphs &&
                        mod.secondaryParagraphs.map((sp, spIdx) => (
                          <p key={spIdx}>{sp}</p>
                        ))}
                    </div>
                  </div>
                )}

                {/* Key Takeaways Callout Box */}
                {mod.keyTakeaways && (
                  <div className="mt-8 p-6 bg-[#f8fafc] border-l-4 border-[#E9511C] shadow-sm">
                    <h3 className="font-headings type-18 uppercase text-[#1D1A55] mb-3">
                      Key Clinical Takeaways
                    </h3>
                    <ul className="space-y-2">
                      {mod.keyTakeaways.map((point, kIdx) => (
                        <li key={kIdx} className="flex items-start gap-2.5 text-sm text-gray-700">
                          <span className="inline-block w-2 h-2 rounded-full bg-[#E9511C] mt-1.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* =================================================================
            TESTING PANELS OVERVIEW GRID
        ================================================================= */}
        <section className="grid-p pt-88 pb-88 bg-[#f5f8fc] border-b border-[#BDDFEC]">
          <div className="m-auto" style={{ maxWidth: "1280px" }}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-headings type-18 color-orange uppercase mb-2 block">
                COMPREHENSIVE TESTING COVERAGE
              </span>
              <h2 className="font-headings type-48 uppercase text-[#1D1A55] leading-tight">
                AVAILABLE GENOMIC PANELS
              </h2>
              <p className="type-16 text-gray-600 mt-2">
                Mini panels, targeted profiles, and whole-genome health mapping curated for individual wellness needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testingPanels.map((panel, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 border-t-4 border-[#00AF9C] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-headings uppercase text-[#E9511C] tracking-wider block mb-1">
                      PANEL 0{idx + 1}
                    </span>
                    <h3 className="font-headings type-24 uppercase text-[#1D1A55] mb-3">
                      {panel.title}
                    </h3>
                    <p className="type-15 text-gray-700 leading-relaxed mb-6">
                      {panel.focus}
                    </p>
                  </div>
                  <div>
                    <a
                      href="#admissions-booking"
                      className="inline-flex items-center gap-1 text-xs font-headings uppercase text-[#0065BD] hover:text-[#E9511C] font-bold"
                    >
                      Inquire About This Panel →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            INTERACTIVE BOOKING & INQUIRY FORM
        ================================================================= */}
        <section className="grid-p pt-88 pb-88 bg-white" id="admissions-booking">
          <div className="m-auto" style={{ maxWidth: "960px" }}>
            <div className="text-center mb-12">
              <span
                className="font-headings type-18 uppercase px-3 py-1 di mb-3"
                style={{
                  backgroundColor: "var(--c-light-blue, #BDDFEC)",
                  color: "var(--c-darkest-blue, #1D1A55)"
                }}
              >
                ADMISSIONS &amp; CONSULTATIONS DESK
              </span>
              <h2 className="font-headings type-48 uppercase text-[#1D1A55] leading-tight mt-2">
                SCHEDULE YOUR GENETIC COUNSELING
              </h2>
              <p className="type-16 text-gray-600 max-w-xl mx-auto mt-2">
                Conducted virtually worldwide or at our Indore center. Fill in your details below and our clinical team
                will reach out to you within 24 hours.
              </p>
            </div>

            <div className="bg-[#f8fafc] border-2 border-[#BDDFEC] p-8 sm:p-12 shadow-lg">
              {formStatus.state === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#00AF9C] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-headings type-28 uppercase text-[#1D1A55] mb-2">
                    Inquiry Details Prepared!
                  </h3>
                  <p className="text-gray-700 max-w-lg mx-auto mb-6">
                    {formStatus.message}
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center items-center">
                    <button
                      type="button"
                      onClick={handleSendViaEmail}
                      className="font-headings text-xs uppercase px-6 py-3.5 bg-[#E9511C] hover:bg-[#d44312] text-white rounded font-bold transition-colors"
                    >
                      Open Email App (To: {targetEmail})
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="font-headings text-xs uppercase px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded font-bold transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.203.043.072.043.419-.101.824z" />
                      </svg>
                      Confirm via WhatsApp ({WHATSAPP_DISPLAY})
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFormStatus({ state: "idle", message: "" });
                      }}
                      className="font-headings text-xs uppercase px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded transition-colors"
                    >
                      Edit Form Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                  {formStatus.state === "error" && (
                    <div className="p-3 bg-red-100 text-red-800 text-sm font-semibold rounded">
                      {formStatus.message}
                    </div>
                  )}

                  {/* Target Email Selection Banner */}
                  <div className="p-4 bg-white border border-[#BDDFEC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                        Submissions Dispatched To Particular Email:
                      </span>
                      <span className="font-headings type-18 text-[#E9511C]">
                        {targetEmail}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <label className="text-xs font-semibold text-gray-600">Send To:</label>
                      <select
                        value={targetEmail}
                        onChange={(e) => setTargetEmail(e.target.value)}
                        className="px-2.5 py-1.5 text-xs bg-[#f8fafc] border border-gray-300 rounded font-semibold text-[#1D1A55] focus:outline-none focus:border-[#E9511C]"
                      >
                        <option value="genomics@drnehaarora.com">genomics@drnehaarora.com (Genomics Desk)</option>
                        <option value="neha_arora27@yahoo.com">neha_arora27@yahoo.com (Admissions Desk)</option>
                        <option value="eyecare@drnehaarora.com">eyecare@drnehaarora.com (Clinical Desk)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1D1A55] mb-2">
                        Full Name <span className="text-[#E9511C]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full p-3 border border-gray-300 text-sm focus:outline-none focus:border-[#E9511C]"
                        style={{ fontFamily: "inherit" }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1D1A55] mb-2">
                        Phone / WhatsApp Number <span className="text-[#E9511C]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 62618 91312"
                        className="w-full p-3 border border-gray-300 text-sm focus:outline-none focus:border-[#E9511C]"
                        style={{ fontFamily: "inherit" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1D1A55] mb-2">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@example.com"
                        className="w-full p-3 border border-gray-300 text-sm focus:outline-none focus:border-[#E9511C]"
                        style={{ fontFamily: "inherit" }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1D1A55] mb-2">
                        City / Location
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Indore, Mumbai, Delhi, International"
                        className="w-full p-3 border border-gray-300 text-sm focus:outline-none focus:border-[#E9511C]"
                        style={{ fontFamily: "inherit" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1D1A55] mb-2">
                      Testing Panel or Consultation Interest
                    </label>
                    <select
                      name="panelInterest"
                      value={formData.panelInterest}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 text-sm bg-white focus:outline-none focus:border-[#E9511C]"
                      style={{ fontFamily: "inherit" }}
                    >
                      <option value="Comprehensive Whole-Genome Wellness Program">
                        Comprehensive Whole-Genome Wellness Program
                      </option>
                      <option value="Nutrigenomics & Metabolic Panel">
                        Nutrigenomics &amp; Metabolic Panel
                      </option>
                      <option value="Wellness & Preventive Health Panel">
                        Wellness &amp; Preventive Health Panel
                      </option>
                      <option value="Fitness & Athletic Performance Panel">
                        Fitness &amp; Athletic Performance Panel
                      </option>
                      <option value="General Genetic Counseling Consultation">
                        General Genetic Counseling Consultation
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1D1A55] mb-2">
                      Specific Health Concerns or Goals (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g., Food allergies, fatigue, chronic conditions in family history, fitness goals..."
                      className="w-full p-3 border border-gray-300 text-sm focus:outline-none focus:border-[#E9511C]"
                      style={{ fontFamily: "inherit", resize: "vertical" }}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200">
                    <button
                      type="submit"
                      disabled={formStatus.state === "submitting"}
                      className="w-full sm:w-auto font-headings text-sm uppercase px-8 py-4 bg-[#E9511C] hover:bg-[#d44312] text-white font-bold tracking-wider rounded transition-colors cursor-pointer"
                    >
                      {formStatus.state === "submitting" ? "Submitting..." : `Submit via Email (${targetEmail}) →`}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto font-headings text-xs uppercase px-6 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.203.043.072.043.419-.101.824z" />
                      </svg>
                      Instant WhatsApp Chat ({WHATSAPP_DISPLAY})
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Direct Telephone Helpline Notice */}
            <div className="mt-8 text-center">
              <span className="text-xs uppercase font-headings text-gray-500 tracking-wider">
                OR CALL DIRECT ADMISSIONS HELPLINE
              </span>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                <a
                  href="tel:9827079888"
                  className="font-headings type-24 color-orange link-underlined uppercase"
                >
                  +91 9827079888
                </a>
                <span className="text-gray-400">•</span>
                <a
                  href="tel:7470529991"
                  className="font-headings type-24 color-orange link-underlined uppercase"
                >
                  +91 7470529991
                </a>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Shree Namoh Wellness • A-65 MIG, Behind CHL Hospital, Indore, Madhya Pradesh
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 3. Global Shared Footer */}
      <Footer />
    </div>
  );
}
