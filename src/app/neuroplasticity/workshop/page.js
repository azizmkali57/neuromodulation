"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/app/siteData";
import { neuroplasticityData } from "../neuroplasticityData";

export default function NeuroplasticityWorkshopPage() {
  const { hero, tableOfContents, modules, workshopTracks } = neuroplasticityData;

  const [formData, setFormData] = useState({
    fullName: "",
    profession: "Physiotherapist / Neuro-Rehab Clinician",
    email: "",
    phone: "",
    institution: "",
    trackInterest: "Comprehensive Clinical Fellowship Masterclass",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setFormStatus({ state: "error", message: "Please provide your full name and phone number." });
      return;
    }
    setFormStatus({ state: "submitting", message: "" });
    setTimeout(() => {
      setFormStatus({
        state: "success",
        message:
          "Thank you! Your workshop registration request has been submitted. Our clinical coordinator will contact you with batch dates, seat availability, and curriculum materials."
      });
    }, 500);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Dr. Neha Arora Verma & Shree Namoh Wellness Team,\n\nI would like to inquire about the Clinical Neuroplasticity & Neuromodulation Workshop.\n\nName: ${
        formData.fullName || "Doctor / Clinician"
      }\nProfession: ${formData.profession}\nPhone: ${formData.phone || "Not provided"}\nEmail: ${
        formData.email || "Not provided"
      }\nTrack of Interest: ${formData.trackInterest}\nHospital/City: ${
        formData.institution || "Not provided"
      }\nMessage: ${
        formData.message || "Please share upcoming batch dates, hands-on syllabus, and admission details."
      }`
    );
    window.open(`https://wa.me/919827079888?text=${text}`, "_blank");
  };

  return (
    <div className="w-100 bg-white" style={{ minHeight: "100vh" }}>
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="main-content pt-header w-100" id="neuroplasticity-content">
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
            HERO SECTION: CLINICAL NEUROPLASTICITY & NEUROMODULATION
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
              <span className="text-gray-400">Neuroplasticity</span>
              <span>/</span>
              <span className="text-[#1D1A55] font-bold">Workshop Overview &amp; Masterclass</span>
            </nav>

            {/* Top Eyebrow Badges */}
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
                HANDS-ON CLINICAL FELLOWSHIP &amp; PROTOCOLS
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
                  Bridge the gap between theoretical neuroscience and bedside functional recovery. Learn how to
                  administer non-invasive brain stimulation (tDCS, tACS), motor evoked potentials, and targeted
                  electroceuticals directly from Dr. Neha Arora Verma—founder of the Lakwa Mukt Bharat movement and
                  recognized as India&apos;s First Neuroplasticity Coach.
                </p>

                {/* Primary CTA Buttons */}
                <div className="flex flex-wrap gap-4 items-center">
                  <a
                    href="#admissions-booking"
                    className="button-link di relative font-headings type-24 ls lh-1 color-orange uppercase"
                  >
                    <span className="over di color-white">Register for Workshop →</span>
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
                      Inquire on WhatsApp
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Column: Key Scientific Metrics Box */}
              <div className="bg-[#f5f8fc] p-8 border-l-4 border-[#00AF9C] flex flex-col justify-between">
                <div>
                  <div className="font-headings type-20 uppercase color-darkest-blue mb-2">
                    CLINICAL IMPACT &amp; SCOPE
                  </div>
                  <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                    Proven outcomes across hemiplegia, paraplegia, Parkinsonian syndromes, and spinal recovery.
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
                    style={{ objectPosition: "center 15%" }}
                  />
                </div>
                <div>
                  <span className="text-xs uppercase font-headings text-[#FEE003] tracking-widest block">
                    PROGRAM DIRECTOR &amp; LEAD FACULTY
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
                  href="tel:9827079888"
                  className="font-headings text-xs uppercase px-4 py-2.5 bg-[#E9511C] hover:bg-[#d44312] text-white rounded transition-colors"
                >
                  Call: 9827079888
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
                CURRICULUM SYLLABUS ROADMAP
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

                {/* Split layout: Text vs Clinical Photo Widget */}
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
                          className="w-full h-auto object-cover mx-auto"
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
                          className="w-full h-auto object-cover mx-auto"
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
            WORKSHOP TRACKS & FELLOWSHIP MODULES GRID
        ================================================================= */}
        <section className="grid-p pt-88 pb-88 bg-[#f5f8fc] border-b border-[#BDDFEC]">
          <div className="m-auto" style={{ maxWidth: "1280px" }}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-headings type-18 color-orange uppercase mb-2 block">
                SPECIALIZED CLINICAL PATHWAYS
              </span>
              <h2 className="font-headings type-48 uppercase text-[#1D1A55] leading-tight">
                WORKSHOP TRAINING TRACKS
              </h2>
              <p className="type-16 text-gray-600 mt-2">
                Designed for Physiotherapists, Neurologists, Rehabilitation Therapists, and Clinical Teams seeking
                evidence-based mastery in non-invasive neuromodulation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workshopTracks.map((track, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 border-t-4 border-[#00AF9C] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-headings uppercase text-[#E9511C] tracking-wider block mb-1">
                      TRACK 0{idx + 1}
                    </span>
                    <h3 className="font-headings type-24 uppercase text-[#1D1A55] mb-3">
                      {track.title}
                    </h3>
                    <p className="type-15 text-gray-700 leading-relaxed mb-6">
                      {track.focus}
                    </p>
                  </div>
                  <div>
                    <a
                      href="#admissions-booking"
                      className="inline-flex items-center gap-1 text-xs font-headings uppercase text-[#0065BD] hover:text-[#E9511C] font-bold"
                    >
                      Enroll in This Track →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            INTERACTIVE WORKSHOP REGISTRATION & ADMISSIONS FORM
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
                CLINICAL ADMISSIONS &amp; SEAT RESERVATION
              </span>
              <h2 className="font-headings type-48 uppercase text-[#1D1A55] leading-tight mt-2">
                RESERVE YOUR WORKSHOP SEAT
              </h2>
              <p className="type-16 text-gray-600 max-w-xl mx-auto mt-2">
                Hands-on immersion batches are strictly limited to ensure personal supervision at the bedside. Register
                below or connect directly with our admissions coordinator.
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
                    Application Received!
                  </h3>
                  <p className="text-gray-700 max-w-md mx-auto mb-6">
                    {formStatus.message}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormStatus({ state: "idle", message: "" });
                      setFormData({
                        fullName: "",
                        profession: "Physiotherapist / Neuro-Rehab Clinician",
                        email: "",
                        phone: "",
                        institution: "",
                        trackInterest: "Comprehensive Clinical Fellowship Masterclass",
                        message: ""
                      });
                    }}
                    className="font-headings text-xs uppercase px-6 py-3 bg-[#1D1A55] text-white rounded hover:bg-[#00AF9C] transition-colors"
                  >
                    Register Another Participant
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {formStatus.state === "error" && (
                    <div className="p-4 bg-red-50 border-l-4 border-red-500 text-sm text-red-700">
                      {formStatus.message}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Dr. / Mr. / Ms. Your Name"
                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#E9511C] focus:outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Professional Background *
                      </label>
                      <select
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#E9511C] focus:outline-none text-sm"
                      >
                        <option value="Physiotherapist / BPT / MPT">Physiotherapist (BPT / MPT)</option>
                        <option value="Neurologist / Medical Doctor">Neurologist / Medical Doctor</option>
                        <option value="Occupational Therapist">Occupational Therapist</option>
                        <option value="Rehabilitation Specialist">Rehabilitation Specialist</option>
                        <option value="Neuroscience Researcher / Student">Neuroscience Researcher / Student</option>
                        <option value="Patient / Family Caregiver">Patient / Family Caregiver</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Mobile Number (WhatsApp Preferred) *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#E9511C] focus:outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="doctor@hospital.com"
                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#E9511C] focus:outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Clinic / Hospital / Institution &amp; City
                      </label>
                      <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        placeholder="e.g., Apollo Hospital, Indore"
                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#E9511C] focus:outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Workshop Track of Interest
                      </label>
                      <select
                        name="trackInterest"
                        value={formData.trackInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#E9511C] focus:outline-none text-sm"
                      >
                        <option value="Comprehensive Clinical Fellowship Masterclass">
                          Comprehensive Clinical Fellowship Masterclass (3 Days)
                        </option>
                        <option value="Post-Stroke Motor Relearning & Hemiplegia Track">
                          Post-Stroke Motor Relearning &amp; Hemiplegia Track
                        </option>
                        <option value="Paralysis & Spinal Neuromodulation Track">
                          Paralysis &amp; Spinal Neuromodulation Track
                        </option>
                        <option value="Parkinson's & Movement Disorders Track">
                          Parkinson&apos;s &amp; Movement Disorders Track
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Clinical Objectives or Inquiries
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your current clinical practice focus or any specific questions regarding workshop dates, equipment hands-on, or certification..."
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#E9511C] focus:outline-none text-sm"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-2">
                    <button
                      type="submit"
                      disabled={formStatus.state === "submitting"}
                      className="w-full sm:w-auto font-headings text-sm uppercase px-8 py-4 bg-[#E9511C] hover:bg-[#d44312] text-white font-bold tracking-wider rounded transition-colors cursor-pointer"
                    >
                      {formStatus.state === "submitting" ? "Submitting..." : "Submit Registration Request →"}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto font-headings text-xs uppercase px-6 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.203.043.072.043.419-.101.824z" />
                      </svg>
                      Instant WhatsApp Chat
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* =================================================================
            INSTITUTIONAL CLINICAL FACILITY BANNER
        ================================================================= */}
        <section className="grid-p py-12 bg-[#1D1A55] text-white border-t border-[#BDDFEC]">
          <div className="m-auto flex flex-col md:flex-row items-center justify-between gap-6" style={{ maxWidth: "1280px" }}>
            <div>
              <span className="text-xs uppercase font-headings text-[#FEE003] tracking-widest block mb-1">
                SHREE NAMOH WELLNESS INSTITUTE • INDORE, MP
              </span>
              <h3 className="font-headings type-28 uppercase text-white leading-tight">
                HAVE CLINICAL QUESTIONS OR PATIENT REFERRALS?
              </h3>
              <p className="text-sm text-[#BDDFEC] mt-1">
                Direct consults with Dr. Neha Arora Verma for paralysis, stroke rehab &amp; physician fellowship inquiries.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:9827079888"
                className="font-headings text-xs uppercase px-5 py-3 bg-[#E9511C] hover:bg-[#d44312] text-white rounded font-bold transition-colors"
              >
                Call: +91 9827079888
              </a>
              <a
                href="mailto:neha_arora27@yahoo.com"
                className="font-headings text-xs uppercase px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded font-bold transition-colors"
              >
                neha_arora27@yahoo.com
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
