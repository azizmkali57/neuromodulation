"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { neuroplasticityTrainingData } from "./trainingData";
import { SocialIcon } from "@/components/common/SocialIcons";

const TARGET_ADMISSIONS_EMAIL = "neha_arora27@yahoo.com";
const PRIMARY_PHONE_RAW = "9827079888";
const PRIMARY_PHONE_DISPLAY = "+91 98270-79888";
const SECONDARY_PHONE_RAW = "7470529991";
const SECONDARY_PHONE_DISPLAY = "+91 74705-29991";

export default function NeuroplasticityTrainingPage() {
  const {
    hero,
    meetDirector,
    lookBeyondSymptoms,
    whatIsTheProgram,
    whoIsThisFor,
    learningJourney,
    decisionFlowchart,
    benefits,
    perspectiveShift,
    takeaways,
    takeawayConclusion,
    courses,
    webinar,
    closingManifesto,
    faqs
  } = neuroplasticityTrainingData;

  const [formData, setFormData] = useState({
    fullName: "",
    profession: "Physiotherapist",
    phone: "",
    email: "",
    city: "",
    programInterest: "Advance Neuroplasticity Master Coach Program (Online - 2 Months)",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildEmailSubject = () => {
    return `Neuroplasticity Coach Program Application - ${formData.fullName || "Applicant"}`;
  };

  const buildEmailBody = () => {
    return (
      `Dear Dr. Neha Arora Verma & Program Admissions Team,\n\n` +
      `Here are the application & enrollment details submitted for the Neuroplasticity Coach Program:\n\n` +
      `• Full Name: ${formData.fullName}\n` +
      `• Professional Background: ${formData.profession}\n` +
      `• Mobile / WhatsApp: ${formData.phone}\n` +
      `• Email Address: ${formData.email || "Not provided"}\n` +
      `• City / State: ${formData.city || "Not provided"}\n` +
      `• Program / Track of Interest: ${formData.programInterest}\n` +
      `• Learning Goals / Notes: ${
        formData.message || "Please share batch schedule, curriculum details, and enrollment guidance."
      }\n\n` +
      `Submitted via Neuroplasticity Coach Program Portal (Shree Namoh Wellness)`
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setFormStatus({ state: "error", message: "Please provide your full name and mobile number." });
      return;
    }
    setFormStatus({ state: "submitting", message: "" });

    const subject = encodeURIComponent(buildEmailSubject());
    const body = encodeURIComponent(buildEmailBody());
    const mailtoUrl = `mailto:${encodeURIComponent(TARGET_ADMISSIONS_EMAIL)}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setFormStatus({
        state: "success",
        message: `Your enrollment inquiry has been prepared for dispatch to ${TARGET_ADMISSIONS_EMAIL}. Click below to confirm via email or chat directly on WhatsApp.`
      });
      if (typeof window !== "undefined") {
        window.location.href = mailtoUrl;
      }
    }, 400);
  };

  const handleSendViaEmail = () => {
    const subject = encodeURIComponent(buildEmailSubject());
    const body = encodeURIComponent(buildEmailBody());
    window.location.href = `mailto:${encodeURIComponent(TARGET_ADMISSIONS_EMAIL)}?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppDirect = (number = SECONDARY_PHONE_RAW) => {
    const text = encodeURIComponent(
      `Hello Dr. Neha Arora Verma & Admissions Team,\n\nI would like to inquire about the Neuroplasticity Coach Program.\n\nName: ${
        formData.fullName || "Applicant"
      }\nProfession: ${formData.profession}\nPhone: ${formData.phone || "Not provided"}\nCity: ${
        formData.city || "Not provided"
      }\nProgram Interest: ${formData.programInterest}\nQuestions/Goals: ${
        formData.message || "Please share upcoming webinar info, course syllabus, and admission details."
      }`
    );
    window.open(`https://wa.me/91${number}?text=${text}`, "_blank");
  };

  return (
    <div className="w-100 bg-white" style={{ minHeight: "100vh" }}>
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="main-content pt-header w-100" id="neuroplasticity-coach-program-content">
        {/* Continuous Marquee Ticker */}
        <header
          className="marquee flex no-wrap font-headings type-108 uppercase color-white bg-dark overflow-hidden py-1"
          role="marquee"
          aria-label="Clinical Announcements"
          style={{ backgroundColor: "#1D1A55", letterSpacing: "0.08em" }}
        >
          <div className="marquee-scroll flex no-wrap">
            <span>
              NEUROPLASTICITY COACH PROGRAM • UNDERSTAND THE BRAIN. TRANSFORM YOUR PRACTICE. • LEARN • APPLY • TRANSFORM • DR. NEHA ARORA VERMA • LAKWA MUKT BHARAT • REWIRING THE BRAIN •&nbsp;
            </span>
          </div>
          <div className="marquee-scroll flex no-wrap" aria-hidden="true">
            <span>
              NEUROPLASTICITY COACH PROGRAM • UNDERSTAND THE BRAIN. TRANSFORM YOUR PRACTICE. • LEARN • APPLY • TRANSFORM • DR. NEHA ARORA VERMA • LAKWA MUKT BHARAT • REWIRING THE BRAIN •&nbsp;
            </span>
          </div>
        </header>

        {/* 2. Hero Section */}
        <section className="hero-section section-border-b border-[#1D1A55] bg-[#F7F9FC] py-12 md:py-20">
          <div className="grid-p">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Title & Key Value Proposition */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1D1A55] text-white text-xs font-bold uppercase tracking-wider mb-4 border border-[#1D1A55]">
                  <span className="w-2 h-2 rounded-full bg-[#E9511C] animate-pulse"></span>
                  {hero.badge}
                </div>

                <h1 className="font-headings type-72 md:type-96 text-[#1D1A55] leading-none mb-3">
                  {hero.title}
                </h1>

                <h2 className="font-headings text-2xl md:text-3xl text-[#E9511C] font-bold tracking-tight mb-4">
                  {hero.tagline}
                </h2>

                <p className="font-sans text-lg md:text-xl text-neutral-800 leading-relaxed mb-6 font-normal">
                  {hero.subtitle}
                </p>

                {/* Director Spotlight Box */}
                <div className="w-full p-4 md:p-5 bg-white border-l-4 border-[#00AF9C] shadow-sm mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-neutral-500 block mb-1">
                      Program Director & Lead Mentor
                    </span>
                    <h3 className="font-headings text-xl md:text-2xl text-[#1D1A55] font-bold">
                      {hero.director}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-600 font-medium">
                      {hero.credentials}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
                    {hero.socialLinks &&
                      hero.socialLinks.map((soc, sIdx) => (
                        <a
                          key={sIdx}
                          href={soc.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Dr. Neha on ${soc.name}`}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#f0f4f9] hover:bg-[#00AF9C] text-[#1D1A55] hover:text-white text-xs font-bold transition-all shadow-xs"
                        >
                          <SocialIcon name={soc.name} className="w-3.5 h-3.5 fill-current" />
                          <span>{soc.name}</span>
                        </a>
                      ))}
                    <Link
                      href="/directors/dr-neha-arora-verma"
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#00AF9C] hover:underline ml-1"
                    >
                      Bio →
                    </Link>
                  </div>
                </div>

                {/* Quick Action CTA Buttons */}
                <div className="flex flex-wrap gap-3 items-center w-full">
                  <a
                    href="#courses"
                    className="btn px-6 py-3.5 bg-[#E9511C] hover:bg-[#d44514] text-white font-bold uppercase text-xs md:text-sm tracking-wider shadow-md transition-all"
                  >
                    View Courses & Formats
                  </a>
                  <a
                    href="#webinar"
                    className="btn px-6 py-3.5 bg-[#1D1A55] hover:bg-[#2c2877] text-white font-bold uppercase text-xs md:text-sm tracking-wider shadow-md transition-all"
                  >
                    Join Upcoming Webinar
                  </a>
                  <button
                    type="button"
                    onClick={() => handleWhatsAppDirect(SECONDARY_PHONE_RAW)}
                    className="btn px-5 py-3.5 bg-[#00AF9C] hover:bg-[#009686] text-white font-bold uppercase text-xs md:text-sm tracking-wider shadow-md transition-all flex items-center gap-2"
                  >
                    <span>WhatsApp Helpline</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Hero Visual & Director Portrait */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="relative w-full aspect-[4/3] md:aspect-[5/4] border-4 border-[#1D1A55] shadow-xl overflow-hidden bg-white">
                  <Image
                    src="/images/dr-neha-portrait.jpg"
                    alt="Dr. Neha Arora Verma - India's First Neuroplasticity Coach"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1D1A55] via-[#1D1A55]/90 to-transparent text-white">
                    <span className="text-xs uppercase tracking-widest text-[#FEE003] font-bold block mb-1">
                      AWARDED BY UN BOOK OF WORLD RECORDS
                    </span>
                    <p className="text-sm font-semibold">
                      India&apos;s First Neuroplasticity Coach • Founder, Lakva Mukt Bharat
                    </p>
                  </div>
                </div>

                {/* Direct Contact Bar */}
                <div className="p-4 bg-white border border-neutral-300 shadow-xs flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                      Enrollment & Inquiries:
                    </span>
                    <div className="flex flex-wrap gap-3 mt-1">
                      <a
                        href={`tel:${PRIMARY_PHONE_RAW}`}
                        className="font-mono text-sm font-bold text-[#1D1A55] hover:text-[#E9511C]"
                      >
                        {PRIMARY_PHONE_DISPLAY}
                      </a>
                      <span className="text-neutral-400">|</span>
                      <a
                        href={`tel:${SECONDARY_PHONE_RAW}`}
                        className="font-mono text-sm font-bold text-[#1D1A55] hover:text-[#E9511C]"
                      >
                        {SECONDARY_PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                  <a
                    href="#enrollment-form"
                    className="text-xs font-bold uppercase tracking-wider text-[#00AF9C] hover:underline"
                  >
                    Apply Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Stats Strip (From PDF Page 1 & 2) */}
        <section className="bg-[#1D1A55] text-white py-6 border-y border-[#1D1A55]">
          <div className="grid-p">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {hero.stats.map((s, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="font-headings text-3xl md:text-4xl font-extrabold text-[#FEE003] mb-1">
                    {s.value}
                  </span>
                  <span className="text-xs md:text-sm text-neutral-200 uppercase tracking-wider font-semibold max-w-[220px]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Meet Dr. Neha Arora Verma (Page 2) */}
        <section className="py-16 md:py-24 bg-white border-b border-neutral-200" id="about-director">
          <div className="grid-p">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] w-full border-4 border-[#00AF9C] shadow-xl overflow-hidden bg-white">
                  <Image
                    src="/images/dr-neha-coach-studio.jpg"
                    alt="Dr. Neha Arora Verma - Clinical Neuroplasticity Master Coach"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-[#E9511C] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 shadow">
                    LEARN • APPLY • TRANSFORM
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#1D1A55] via-[#1D1A55]/85 to-transparent text-white text-center">
                    <span className="text-xs uppercase font-bold tracking-widest text-[#FEE003]">
                      India&apos;s 1st Neuroplasticity Coach
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E9511C] block mb-2">
                  INTRODUCTION
                </span>
                <h2 className="font-headings type-48 md:type-72 text-[#1D1A55] mb-2">
                  {meetDirector.heading}
                </h2>
                <h3 className="text-sm md:text-base font-semibold text-[#00AF9C] mb-6">
                  {meetDirector.subtitle}
                </h3>

                <div className="space-y-4 text-neutral-700 text-base leading-relaxed mb-6">
                  {meetDirector.bio.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                <div className="p-5 bg-[#FAF5EE] border-l-4 border-[#1D1A55] mb-8">
                  <span className="text-xs uppercase font-bold tracking-wider text-neutral-500 block mb-1">
                    HER MISSION
                  </span>
                  <p className="font-headings text-lg md:text-xl text-[#1D1A55] font-bold italic">
                    &ldquo;{meetDirector.quote}&rdquo;
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <a
                    href="#enrollment-form"
                    className="btn px-6 py-3 bg-[#1D1A55] hover:bg-[#2c2877] text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Enroll in Master Program
                  </a>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-500 font-bold uppercase">Call Directly:</span>
                    <a
                      href={`tel:${PRIMARY_PHONE_RAW}`}
                      className="text-xs font-bold font-mono text-[#E9511C] hover:underline"
                    >
                      {PRIMARY_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. What If You Could Look Beyond The Symptoms? (Page 3 & Page 9) */}
        <section className="py-16 md:py-24 bg-[#F7F9FC] border-b border-neutral-200">
          <div className="grid-p">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00AF9C] block mb-2">
                A NEW PARADIGM IN PATIENT RECOVERY
              </span>
              <h2 className="font-headings type-48 md:type-72 text-[#1D1A55] mb-4">
                {lookBeyondSymptoms.heading}
              </h2>
              <p className="text-neutral-700 text-base md:text-lg leading-relaxed mb-6">
                {lookBeyondSymptoms.lead}
              </p>
              <div className="inline-block p-4 bg-[#1D1A55] text-white font-headings text-lg md:text-xl font-bold border-l-4 border-[#FEE003]">
                {lookBeyondSymptoms.goalHighlight}
              </div>
            </div>

            {/* Symptoms Grid */}
            <div className="mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-4">
                BEHIND EVERY SYMPTOM:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {lookBeyondSymptoms.symptoms.map((symptom, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white border border-neutral-300 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-full bg-[#FAF5EE] text-[#E9511C] font-mono text-xs font-bold flex items-center justify-center mb-3">
                        0{idx + 1}
                      </div>
                      <h4 className="font-headings text-base font-bold text-[#1D1A55] mb-2 uppercase">
                        {symptom.title}
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {symptom.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shift in Thinking Comparison: Page 9 */}
            <div className="bg-white border-2 border-[#1D1A55] shadow-lg p-6 md:p-10">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E9511C] block mb-1">
                  {perspectiveShift.subtitle}
                </span>
                <h3 className="font-headings text-2xl md:text-3xl font-bold text-[#1D1A55]">
                  {perspectiveShift.heading}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Traditional Approach */}
                <div className="p-6 bg-neutral-100 border-l-4 border-neutral-400 flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-neutral-500 block mb-2">
                      {perspectiveShift.traditional.label}
                    </span>
                    <h4 className="font-headings text-2xl text-neutral-700 font-bold mb-3">
                      {perspectiveShift.traditional.question}
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {perspectiveShift.traditional.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-200 text-xs font-bold text-neutral-500 uppercase">
                    Focus: Mechanical Exercises & Passive Movement
                  </div>
                </div>

                {/* Neuroplasticity Approach */}
                <div className="p-6 bg-[#FAF5EE] border-l-4 border-[#00AF9C] flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#00AF9C] block mb-2">
                      {perspectiveShift.neuroplasticity.label}
                    </span>
                    <h4 className="font-headings text-2xl text-[#1D1A55] font-bold mb-3">
                      {perspectiveShift.neuroplasticity.question}
                    </h4>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      {perspectiveShift.neuroplasticity.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-300 text-xs font-bold text-[#E9511C] uppercase">
                    Focus: Cortical Adaptation, Synaptogenesis & Active Motor Relearning
                  </div>
                </div>
              </div>

              {/* The 7-Step Framework (Page 9) */}
              <div className="mt-10 pt-8 border-t border-neutral-200">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1D1A55] text-center block mb-4">
                  THE CLINICAL FRAMEWORK
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                  {perspectiveShift.frameworkSteps.map((stepItem, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 bg-[#1D1A55] text-white text-center flex flex-col justify-between"
                    >
                      <div>
                        <span className="font-headings text-sm md:text-base font-bold text-[#FEE003] block mb-1">
                          {stepItem.step}
                        </span>
                        <p className="text-[11px] text-neutral-200 leading-tight">
                          {stepItem.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-xs md:text-sm text-neutral-600 italic mt-4">
                  {perspectiveShift.footer}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. What is the Program? (Page 4) */}
        <section className="py-16 md:py-24 bg-white border-b border-neutral-200">
          <div className="grid-p">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E9511C] block mb-2">
                  WHAT IS THE PROGRAM?
                </span>
                <h2 className="font-headings type-48 md:type-72 text-[#1D1A55] mb-4">
                  {whatIsTheProgram.heading}
                </h2>
                <p className="text-neutral-700 text-base md:text-lg leading-relaxed mb-6">
                  {whatIsTheProgram.lead}
                </p>

                <div className="p-5 bg-[#FAF5EE] border-l-4 border-[#00AF9C] mb-6">
                  <p className="font-headings text-lg text-[#1D1A55] font-bold">
                    &ldquo;{whatIsTheProgram.summaryStatement}&rdquo;
                  </p>
                </div>

                <a
                  href="#enrollment-form"
                  className="btn px-6 py-3.5 bg-[#E9511C] hover:bg-[#d44514] text-white font-bold uppercase text-xs tracking-wider shadow"
                >
                  Apply for Next Batch →
                </a>
              </div>

              <div className="lg:col-span-7 bg-[#F7F9FC] p-6 md:p-8 border border-neutral-300 shadow-sm">
                <h3 className="font-headings text-xl text-[#1D1A55] font-bold mb-4">
                  Key Practical Clinical Competencies You Will Develop:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {whatIsTheProgram.objectives.map((obj, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-white border border-neutral-200 flex items-start gap-2.5"
                    >
                      <span className="text-[#00AF9C] font-bold text-base leading-none">✓</span>
                      <span className="text-xs md:text-sm text-neutral-800 font-medium leading-relaxed">
                        {obj}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Who is This Program For? (Page 5) */}
        <section className="py-16 md:py-24 bg-[#FAF5EE] border-b border-neutral-200" id="who-is-this-for">
          <div className="grid-p">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00AF9C] block mb-2">
                TARGET AUDIENCE
              </span>
              <h2 className="font-headings type-48 md:type-72 text-[#1D1A55]">
                {whoIsThisFor.heading}
              </h2>
              <p className="text-sm md:text-base text-neutral-600 font-semibold mt-2">
                {whoIsThisFor.subtitle}
              </p>
              <div className="w-16 h-1 bg-[#1D1A55] mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whoIsThisFor.audiences.map((aud, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white border-t-4 border-[#1D1A55] border-x border-b border-neutral-300 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#E9511C] block mb-2">
                      ROLE 0{idx + 1}
                    </span>
                    <h3 className="font-headings text-xl text-[#1D1A55] font-bold mb-2">
                      {aud.role}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                      {aud.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-neutral-700 text-sm md:text-base font-medium mb-4">
                {whoIsThisFor.lead}
              </p>
              <a
                href="#enrollment-form"
                className="btn px-6 py-3 bg-[#1D1A55] hover:bg-[#2c2877] text-white text-xs font-bold uppercase tracking-wider"
              >
                Inquire For Professional Enrollment
              </a>
            </div>
          </div>
        </section>

        {/* 8. What Will You Learn? Your Learning Journey (Page 6) */}
        <section className="py-16 md:py-24 bg-white border-b border-neutral-200" id="curriculum">
          <div className="grid-p">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E9511C] block mb-2">
                WHAT WILL YOU LEARN?
              </span>
              <h2 className="font-headings type-48 md:type-72 text-[#1D1A55] mb-4">
                Your 8-Stage Learning Journey
              </h2>
              <p className="text-neutral-700 text-base md:text-lg">
                A structured, step-by-step curriculum that bridges fundamental neuroscience with clinical rehabilitation protocols.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningJourney.map((moduleItem, mIdx) => (
                <div
                  key={mIdx}
                  className="p-6 bg-[#F7F9FC] border border-neutral-300 relative flex flex-col justify-between hover:border-[#1D1A55] transition-colors"
                >
                  <div>
                    <span className="text-sm font-mono font-bold text-[#E9511C] block mb-2">
                      MODULE {moduleItem.number}
                    </span>
                    <h3 className="font-headings text-xl text-[#1D1A55] font-bold mb-3">
                      {moduleItem.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                      {moduleItem.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. From Knowledge to Application: Decision Flowchart (Page 7) */}
        <section className="py-16 md:py-24 bg-[#1D1A55] text-white">
          <div className="grid-p">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FEE003] block mb-2">
                CLINICAL DECISION-MAKING
              </span>
              <h2 className="font-headings type-48 md:type-72 text-white">
                {decisionFlowchart.heading}
              </h2>
              <p className="text-sm md:text-base text-neutral-200 mt-3 font-medium">
                {decisionFlowchart.subheading}
              </p>
              <div className="w-16 h-1 bg-[#00AF9C] mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {decisionFlowchart.steps.map((stepObj, sIdx) => (
                <div
                  key={sIdx}
                  className="p-6 bg-white/5 border border-white/15 backdrop-blur-sm flex flex-col justify-between relative hover:bg-white/10 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#FEE003]">
                        DECISION STEP {stepObj.step}
                      </span>
                    </div>
                    <h3 className="font-headings text-lg md:text-xl text-white font-bold mb-3">
                      {stepObj.question}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
                      {stepObj.context}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. How Will This Benefit You? (Page 8) */}
        <section className="py-16 md:py-24 bg-white border-b border-neutral-200">
          <div className="grid-p">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00AF9C] block mb-2">
                HOW WILL THIS BENEFIT YOU?
              </span>
              <h2 className="font-headings type-48 md:type-72 text-[#1D1A55] mb-4">
                Upgrade the Way You Work with Patients
              </h2>
              <p className="text-neutral-700 text-base md:text-lg">
                Applied neuroplasticity empowers you to evolve your clinical thinking, achieve predictable patient outcomes, and differentiate your practice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#FAF5EE] border border-neutral-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#E9511C] block mb-2">
                      BENEFIT 0{b.number}
                    </span>
                    <h3 className="font-headings text-xl text-[#1D1A55] font-bold mb-3 uppercase">
                      {b.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. What You Take Away (Page 10) */}
        <section className="py-16 md:py-24 bg-[#F7F9FC] border-b border-neutral-200">
          <div className="grid-p">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E9511C] block mb-2">
                  PROGRAM DELIVERABLES
                </span>
                <h2 className="font-headings type-48 md:type-72 text-[#1D1A55] mb-4">
                  What You Take Away
                </h2>
                <p className="text-neutral-700 text-base md:text-lg leading-relaxed mb-6">
                  By the end of the program, you will possess comprehensive neuroscientific mastery, assessment tools, and practical frameworks to apply immediately in patient care.
                </p>

                <div className="p-5 bg-white border-l-4 border-[#00AF9C] shadow-sm mb-6">
                  <span className="text-xs uppercase font-bold text-neutral-500 block mb-1">
                    THE ULTIMATE SHIFT
                  </span>
                  <p className="font-headings text-lg md:text-xl text-[#1D1A55] font-bold">
                    {takeawayConclusion}
                  </p>
                </div>

                <a
                  href="#enrollment-form"
                  className="btn px-6 py-3.5 bg-[#1D1A55] hover:bg-[#2c2877] text-white font-bold uppercase text-xs tracking-wider shadow"
                >
                  Join Next Program Cohort →
                </a>
              </div>

              <div className="lg:col-span-7 bg-white p-6 md:p-8 border border-neutral-300 shadow-md">
                <h3 className="font-headings text-xl text-[#1D1A55] font-bold mb-4">
                  By the End of the Program, You Will Have:
                </h3>
                <div className="space-y-3">
                  {takeaways.map((takeaway, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-3 p-3 bg-[#FAF5EE] border border-neutral-200">
                      <span className="text-[#00AF9C] font-bold text-base leading-none">✓</span>
                      <span className="text-xs md:text-sm text-neutral-800 font-medium">
                        {takeaway}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Our Courses: Choose the Learning Path (Page 11) */}
        <section className="py-16 md:py-24 bg-white border-b border-neutral-200" id="courses">
          <div className="grid-p">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E9511C] block mb-2">
                OUR COURSES
              </span>
              <h2 className="font-headings type-48 md:type-72 text-[#1D1A55]">
                Choose the Learning Path That Fits You
              </h2>
              <div className="w-16 h-1 bg-[#1D1A55] mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="p-8 md:p-10 flex flex-col justify-between border-2 border-[#1D1A55] bg-[#FAF5EE] shadow-lg relative"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-[#1D1A55] text-white text-xs font-bold uppercase tracking-wider">
                        {course.format}
                      </span>
                      <span className="font-mono text-sm font-extrabold text-[#E9511C] bg-white px-3 py-1 border border-neutral-300">
                        DURATION: {course.duration}
                      </span>
                    </div>

                    <h3 className="font-headings text-2xl md:text-3xl text-[#1D1A55] font-bold mb-2">
                      {course.name}
                    </h3>

                    <p className="text-xs md:text-sm font-semibold text-[#00AF9C] mb-4">
                      {course.location}
                    </p>

                    <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                      {course.description}
                    </p>

                    <div className="border-t border-neutral-300 pt-4 mb-6">
                      <span className="text-xs uppercase font-bold tracking-wider text-neutral-600 block mb-3">
                        Key Curriculum Highlights:
                      </span>
                      <ul className="space-y-2.5">
                        {course.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs md:text-sm text-neutral-800">
                            <span className="text-[#E9511C] font-bold">✓</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-neutral-300">
                    <p className="text-xs text-neutral-600 italic mb-4">
                      <strong>Recommended for:</strong> {course.recommendedFor}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="#enrollment-form"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            programInterest: course.name
                          }))
                        }
                        className="btn flex-1 py-3.5 text-center text-xs font-bold uppercase tracking-wider bg-[#1D1A55] hover:bg-[#2c2877] text-white transition-all shadow"
                      >
                        Enroll / Apply Now →
                      </a>
                      <button
                        type="button"
                        onClick={() => handleWhatsAppDirect(SECONDARY_PHONE_RAW)}
                        className="btn px-4 py-3.5 bg-[#00AF9C] hover:bg-[#009686] text-white text-xs font-bold uppercase tracking-wider transition-all"
                      >
                        WhatsApp Desk
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Official Certification Showcase (Page 11 of Brochure) */}
            <div className="mt-16 bg-[#FAF5EE] border-2 border-[#1D1A55] p-6 md:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E9511C] block mb-2">
                  OFFICIAL RECOGNITION & CREDENTIAL
                </span>
                <h3 className="font-headings text-2xl md:text-3xl text-[#1D1A55] font-bold mb-3">
                  Neuroplasticity Master Coach Certificate of Completion
                </h3>
                <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-4">
                  Graduates of the program receive an official accredited Certificate of Completion issued by Shree Namoh Wellness, personally endorsed by Dr. Neha Arora Verma (India&apos;s 1st Neuroplasticity Coach).
                </p>
                <div className="space-y-2 text-xs md:text-sm text-neutral-800">
                  <div className="flex items-center gap-2">
                    <span className="text-[#00AF9C] font-bold">✓</span>
                    <span>Validates clinical competency in brain rewiring and neural recovery protocols</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00AF9C] font-bold">✓</span>
                    <span>Authorizes integration of applied neuroplasticity coaching into professional practice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00AF9C] font-bold">✓</span>
                    <span>Grants inclusion in the Shree Namoh Wellness clinical referral network</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="relative aspect-[1000/708] w-full border-4 border-[#1D1A55] shadow-2xl overflow-hidden bg-white">
                  <Image
                    src="/images/neuroplasticity-certificate.png"
                    alt="Neuroplasticity Coach Training Program Certificate of Completion - Dr. Neha Arora Verma"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Webinar Banner (Page 11) */}
        <section className="py-14 bg-[#1D1A55] text-white border-y border-[#1D1A55]" id="webinar">
          <div className="grid-p">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FEE003] block mb-2">
                  WANT TO KNOW MORE?
                </span>
                <h2 className="font-headings type-48 text-white mb-3">
                  {webinar.title}
                </h2>
                <h3 className="text-base md:text-lg font-semibold text-[#00AF9C] mb-4">
                  {webinar.subtitle}
                </h3>
                <p className="text-neutral-200 text-sm md:text-base leading-relaxed mb-6">
                  {webinar.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {webinar.bulletPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-neutral-200">
                      <span className="text-[#FEE003] font-bold">●</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white/5 border border-white/15 text-center">
                <span className="text-xs uppercase font-bold text-neutral-300 tracking-wider mb-2">
                  FOR MORE DETAILS, CALL:
                </span>
                <a
                  href={`tel:${PRIMARY_PHONE_RAW}`}
                  className="font-headings text-2xl md:text-3xl font-black text-[#FEE003] hover:underline mb-1"
                >
                  {PRIMARY_PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:${SECONDARY_PHONE_RAW}`}
                  className="font-headings text-2xl md:text-3xl font-black text-[#FEE003] hover:underline mb-4"
                >
                  {SECONDARY_PHONE_DISPLAY}
                </a>
                <a
                  href="#enrollment-form"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      programInterest: "Join Upcoming Webinar / Info Session"
                    }))
                  }
                  className="btn w-full py-3 bg-[#E9511C] hover:bg-[#d44514] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Register For Free Webinar →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 14. Closing Manifesto: Page 12 */}
        <section className="py-16 md:py-24 bg-[#FAF5EE] border-b border-neutral-300">
          <div className="grid-p">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E9511C] block mb-3">
                BECOME A NEUROPLASTICITY COACH TODAY
              </span>
              <h2 className="font-headings type-48 md:type-72 text-[#1D1A55] mb-6">
                {closingManifesto.heading}
              </h2>
              <p className="text-neutral-700 text-lg md:text-xl leading-relaxed mb-8">
                {closingManifesto.lead}
              </p>

              <div className="p-6 bg-white border-2 border-[#1D1A55] shadow-md inline-block max-w-2xl mb-8">
                <p className="font-headings text-xl md:text-2xl text-[#1D1A55] font-black uppercase tracking-wider mb-2">
                  {closingManifesto.motto}
                </p>
                <p className="text-sm font-semibold text-[#00AF9C]">
                  Directed by {closingManifesto.directorName} • {closingManifesto.directorTitle}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#enrollment-form"
                  className="btn px-8 py-4 bg-[#E9511C] hover:bg-[#d44514] text-white font-bold uppercase text-xs md:text-sm tracking-wider shadow-lg"
                >
                  Apply For Program Enrollment →
                </a>
                <button
                  type="button"
                  onClick={() => handleWhatsAppDirect(SECONDARY_PHONE_RAW)}
                  className="btn px-8 py-4 bg-[#00AF9C] hover:bg-[#009686] text-white font-bold uppercase text-xs md:text-sm tracking-wider shadow-lg flex items-center gap-2"
                >
                  <span>Chat on WhatsApp ({SECONDARY_PHONE_DISPLAY})</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 15. FAQs Section */}
        <section className="py-16 md:py-24 bg-[#F7F9FC] border-b border-neutral-200">
          <div className="grid-p">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1D1A55] block mb-2">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="font-headings type-48 text-[#1D1A55]">
                Questions About the Neuroplasticity Coach Program
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

        {/* 16. Application & Enrollment Intake Form */}
        <section className="py-16 md:py-24 bg-white" id="enrollment-form">
          <div className="grid-p">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Form Guidance Column */}
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E9511C] block mb-2">
                  ENROLLMENT & WEBINAR REGISTRATION
                </span>
                <h2 className="font-headings type-48 md:type-72 text-[#1D1A55] mb-4">
                  Apply for Neuroplasticity Coaching
                </h2>
                <p className="text-neutral-700 text-base leading-relaxed mb-6">
                  Submit your details below for review by Dr. Neha Arora Verma and our admissions committee. Our clinical desk will reach out with course curriculum schedules and enrollment steps.
                </p>

                <div className="p-5 bg-[#FAF5EE] border-l-4 border-[#1D1A55] mb-6">
                  <h4 className="font-headings text-base font-bold text-[#1D1A55] mb-2">
                    Direct Program Helplines:
                  </h4>
                  <p className="text-xs md:text-sm text-neutral-700 mb-1">
                    Direct Call / WhatsApp: <strong>{PRIMARY_PHONE_DISPLAY}</strong>
                  </p>
                  <p className="text-xs md:text-sm text-neutral-700 mb-1">
                    Alternate Helpline: <strong>{SECONDARY_PHONE_DISPLAY}</strong>
                  </p>
                  <p className="text-xs md:text-sm text-neutral-700 mt-2">
                    Official Admissions Email: <strong>{TARGET_ADMISSIONS_EMAIL}</strong>
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => handleWhatsAppDirect(SECONDARY_PHONE_RAW)}
                    className="w-full py-3.5 px-4 bg-[#00AF9C] hover:bg-[#009686] text-white font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow"
                  >
                    <span>Instant WhatsApp Inquiry ({SECONDARY_PHONE_DISPLAY})</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleWhatsAppDirect(PRIMARY_PHONE_RAW)}
                    className="w-full py-3.5 px-4 bg-[#1D1A55] hover:bg-[#2c2877] text-white font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow"
                  >
                    <span>Instant WhatsApp Inquiry ({PRIMARY_PHONE_DISPLAY})</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleSendViaEmail}
                    className="w-full py-3.5 px-4 bg-neutral-800 hover:bg-neutral-900 text-white font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow"
                  >
                    <span>Direct Email to {TARGET_ADMISSIONS_EMAIL}</span>
                  </button>
                </div>
              </div>

              {/* Form Input Column */}
              <div className="lg:col-span-7 bg-[#F7F9FC] p-6 md:p-10 border-2 border-[#1D1A55] shadow-lg">
                <h3 className="font-headings text-2xl text-[#1D1A55] font-bold mb-6">
                  Program Enrollment & Webinar Inquiry Form
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
                        onClick={() => handleWhatsAppDirect(SECONDARY_PHONE_RAW)}
                        className="px-3 py-1.5 bg-[#00AF9C] text-white text-xs font-bold uppercase tracking-wider"
                      >
                        Confirm on WhatsApp
                      </button>
                    </div>
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Professional Background
                      </label>
                      <select
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C]"
                      >
                        <option value="Physiotherapist">Physiotherapist</option>
                        <option value="Doctor (Neurologist / Physiatrist / Physician)">
                          Doctor (Neurologist / Physiatrist / Physician)
                        </option>
                        <option value="Neurotherapist">Neurotherapist</option>
                        <option value="Occupational Therapist">Occupational Therapist</option>
                        <option value="Speech & Language Professional">
                          Speech & Language Professional
                        </option>
                        <option value="Healer & Wellness Professional">
                          Healer & Wellness Professional
                        </option>
                        <option value="Coach / Movement Specialist">Coach / Movement Specialist</option>
                        <option value="Rehabilitation Professional">Rehabilitation Professional</option>
                        <option value="Patient / Family Caregiver">Patient / Family Caregiver</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
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
                        placeholder="e.g. doctor@example.com"
                        className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        City / State
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Indore / Mumbai / Delhi"
                        className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Program of Interest
                      </label>
                      <select
                        name="programInterest"
                        value={formData.programInterest}
                        onChange={handleChange}
                        className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C]"
                      >
                        <option value="Advance Neuroplasticity Master Coach Program (Online - 2 Months)">
                          Advance Neuroplasticity Master Coach Program (Online - 2 Months)
                        </option>
                        <option value="Certification in Neuromodulation Technology (Offline - 5 Days)">
                          Certification in Neuromodulation Technology (Offline - 5 Days)
                        </option>
                        <option value="Join Upcoming Webinar / Info Session">
                          Join Upcoming Webinar / Info Session
                        </option>
                        <option value="Clinical Patient Rehabilitation Consultation">
                          Clinical Patient Rehabilitation Consultation
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Professional Practice Objectives / Questions
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your current clinical practice focus, patient cases you work with, or specific questions for Dr. Neha..."
                      className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C]"
                    ></textarea>
                  </div>

                  {/* Dispatch Target Display */}
                  <div className="p-3 bg-neutral-200 border border-neutral-300 flex items-center justify-between text-xs">
                    <span className="text-neutral-700">Official Admissions Dispatch:</span>
                    <span className="font-mono font-bold text-[#1D1A55]">
                      {TARGET_ADMISSIONS_EMAIL}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#E9511C] hover:bg-[#d44514] text-white font-bold uppercase text-xs md:text-sm tracking-wider shadow-md transition-all"
                  >
                    Submit Application / Webinar Inquiry →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer socialLinks={neuroplasticityTrainingData.socialLinks} />
    </div>
  );
}
