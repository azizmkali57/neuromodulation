"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/app/siteData";
import { neuroplasticityTrainingData } from "./trainingData";

const TARGET_ADMISSIONS_EMAIL = "neha_arora27@yahoo.com";
const WHATSAPP_NUMBER = "7470529991";
const WHATSAPP_DISPLAY = "+91 7470529991";

export default function NeuroplasticityTrainingPage() {
  const {
    hero,
    corePhilosophy,
    trainingTracks,
    clinicalMethodology,
    trainingPrograms,
    faqs
  } = neuroplasticityTrainingData;

  const [formData, setFormData] = useState({
    fullName: "",
    relationship: "Patient / Self",
    condition: "Post-Stroke Hemiplegia & Paralysis",
    email: "",
    phone: "",
    city: "",
    programInterest: "In-Clinic Intensive Neuroplasticity Program",
    durationSinceOnset: "Less than 6 months",
    message: ""
  });
  const [targetEmail, setTargetEmail] = useState(TARGET_ADMISSIONS_EMAIL);
  const [formStatus, setFormStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildEmailSubject = () => {
    return `Neuroplasticity Training Consultation - ${formData.fullName || "Patient"}`;
  };

  const buildEmailBody = () => {
    return (
      `Dear Dr. Neha Arora Verma & Clinical Neuro Team,\n\n` +
      `Here are the registration & inquiry details submitted for Neuroplasticity Training:\n\n` +
      `• Patient / Applicant Name: ${formData.fullName}\n` +
      `• Submitter Role: ${formData.relationship}\n` +
      `• Neurological Condition: ${formData.condition}\n` +
      `• Time Since Onset / Stroke: ${formData.durationSinceOnset}\n` +
      `• Contact Phone: ${formData.phone}\n` +
      `• Email Address: ${formData.email || "Not provided"}\n` +
      `• City / Location: ${formData.city || "Not provided"}\n` +
      `• Program of Interest: ${formData.programInterest}\n` +
      `• Clinical Goals / Medical Summary: ${formData.message || "Please share clinical appointment availability, rehabilitation fees, and admission guidance."}\n\n` +
      `Submitted via Neuroplasticity Training Portal (Lakwa Mukt Bharat / Shree Namoh Wellness)`
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
        message: `Your training request has been prepared for dispatch to ${targetEmail}. Click below to confirm via email or chat directly on WhatsApp.`
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
      `Hello Dr. Neha Arora Verma & Clinical Team,\n\nI would like to inquire about Neuroplasticity Training.\n\nPatient Name: ${
        formData.fullName || "Inquirer"
      }\nRelationship: ${formData.relationship}\nCondition: ${formData.condition}\nDuration: ${
        formData.durationSinceOnset
      }\nPhone: ${formData.phone || "Not provided"}\nCity: ${formData.city || "Not provided"}\nProgram: ${
        formData.programInterest
      }\nNotes: ${
        formData.message || "Please share appointment availability, rehabilitation options, and admission details."
      }`
    );
    window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div className="w-100 bg-white" style={{ minHeight: "100vh" }}>
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="main-content pt-header w-100" id="neuroplasticity-training-content">
        {/* Continuous Marquee Ticker */}
        <header
          className="marquee flex no-wrap font-headings type-108 uppercase color-white bg-dark overflow-hidden py-1"
          role="marquee"
          aria-label="Clinical Announcements"
          style={{ backgroundColor: "#1D1A55", letterSpacing: "0.08em" }}
        >
          <div className="marquee-scroll flex no-wrap">
            <span>
              CLINICAL NEUROPLASTICITY TRAINING • REWIRING THE BRAIN • FOUNDED BY DR. NEHA ARORA VERMA • LAKWA MUKT BHARAT • ADVANCED STROKE REHABILITATION •&nbsp;
            </span>
          </div>
          <div className="marquee-scroll flex no-wrap" aria-hidden="true">
            <span>
              CLINICAL NEUROPLASTICITY TRAINING • REWIRING THE BRAIN • FOUNDED BY DR. NEHA ARORA VERMA • LAKWA MUKT BHARAT • ADVANCED STROKE REHABILITATION •&nbsp;
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
                  <span className="w-2 h-2 rounded-full bg-[#E9511C] animate-pulse"></span>
                  {hero.badge}
                </div>

                <h1 className="font-headings type-72 md:type-96 text-[#1D1A55] leading-none mb-6">
                  {hero.title}
                </h1>

                <p className="font-sans text-lg md:text-xl text-neutral-800 leading-relaxed mb-6 font-normal">
                  {hero.subtitle}
                </p>

                {/* Director Spotlight Box */}
                <div className="w-full p-4 md:p-5 bg-white border-l-4 border-[#00AF9C] shadow-sm mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-neutral-500 block mb-1">
                      Clinical Director & Founder, Lakwa Mukt Bharat
                    </span>
                    <h3 className="font-headings text-xl md:text-2xl text-[#1D1A55] font-bold">
                      {hero.director}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-600 font-medium">
                      {hero.credentials}
                    </p>
                  </div>
                  <Link
                    href="/directors/dr-neha-arora-verma"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00AF9C] hover:underline"
                  >
                    View Director Profile →
                  </Link>
                </div>

                {/* Quick Action CTA Buttons */}
                <div className="flex flex-wrap gap-4 items-center w-full">
                  <a
                    href="#training-form"
                    className="btn px-6 py-3.5 bg-[#E9511C] hover:bg-[#d44514] text-white font-bold uppercase text-sm tracking-wider shadow-md transition-all"
                  >
                    Consult for Rehabilitation
                  </a>
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="btn px-6 py-3.5 bg-[#00AF9C] hover:bg-[#009686] text-white font-bold uppercase text-sm tracking-wider shadow-md transition-all flex items-center gap-2"
                  >
                    <span>WhatsApp Helpline ({WHATSAPP_DISPLAY})</span>
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
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1D1A55] to-transparent text-white">
                    <span className="text-xs uppercase tracking-widest text-[#FEE003] font-bold block">
                      Lakwa Mukt Bharat Initiative
                    </span>
                    <p className="text-sm font-semibold">
                      Restoring Independence Through Task-Specific Cortical Rewiring
                    </p>
                  </div>
                </div>

                {/* Quick Stat Bar */}
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

        {/* 4. Core Neuroplasticity Philosophy */}
        <section className="py-16 md:py-24 bg-white border-b border-neutral-200">
          <div className="grid-p">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E9511C] block mb-2">
                CLINICAL BREAKTHROUGH
              </span>
              <h2 className="font-headings type-48 md:type-72 text-[#1D1A55] mb-4">
                {corePhilosophy.heading}
              </h2>
              <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
                {corePhilosophy.lead}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {corePhilosophy.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#FAF5EE] border-t-4 border-[#1D1A55] border-x border-b border-neutral-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#E9511C] block mb-2">
                      {pillar.number}
                    </span>
                    <h3 className="font-headings text-xl text-[#1D1A55] font-bold mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Four Specialized Training Tracks */}
        <section className="py-16 md:py-24 bg-[#F7F9FC] border-b border-neutral-300">
          <div className="grid-p">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1D1A55] block mb-2">
                SPECIALIZED PATHWAYS
              </span>
              <h2 className="font-headings type-48 md:type-72 text-[#1D1A55]">
                Targeted Neuroplasticity Training Tracks
              </h2>
              <div className="w-16 h-1 bg-[#00AF9C] mx-auto mt-4"></div>
            </div>

            <div className="space-y-12">
              {trainingTracks.map((track) => (
                <div
                  key={track.id}
                  className="bg-white border-2 border-[#1D1A55] shadow-lg grid grid-cols-1 lg:grid-cols-12 overflow-hidden"
                >
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-neutral-100">
                    <Image
                      src={track.image}
                      alt={track.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#1D1A55] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 shadow">
                      {track.tag}
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs uppercase font-bold tracking-widest text-[#E9511C]">
                          Track {track.number}
                        </span>
                      </div>
                      <h3 className="font-headings text-2xl md:text-3xl text-[#1D1A55] font-bold mb-2">
                        {track.title}
                      </h3>
                      <h4 className="text-sm md:text-base font-semibold text-[#00AF9C] mb-4">
                        {track.subtitle}
                      </h4>
                      <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-6">
                        {track.description}
                      </p>

                      <div className="border-t border-neutral-200 pt-4">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#1D1A55] block mb-3">
                          Clinical Protocols & Deliverables:
                        </span>
                        <ul className="space-y-2">
                          {track.deliverables.map((item, dIdx) => (
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
                        href="#training-form"
                        className="text-xs md:text-sm uppercase font-bold tracking-wider text-[#E9511C] hover:underline"
                      >
                        Inquire for Patient Case Assessment →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Step-by-Step Clinical Methodology */}
        <section className="py-16 md:py-24 bg-white border-b border-neutral-200">
          <div className="grid-p">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00AF9C] block mb-2">
                CLINICAL METHODOLOGY
              </span>
              <h2 className="font-headings type-48 md:type-72 text-[#1D1A55] mb-4">
                5 Phases of Neuroplastic Recovery
              </h2>
              <p className="text-neutral-700 text-base md:text-lg">
                Our scientific protocol transforms complex neurological impairments into clear, measurable functional recovery milestones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {clinicalMethodology.map((m, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#FAF5EE] border border-neutral-300 relative flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#E9511C] block mb-2">
                      {m.phase}
                    </span>
                    <h3 className="font-headings text-lg text-[#1D1A55] font-bold mb-2">
                      {m.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Lakwa Mukt Mission Banner */}
        <section className="py-16 bg-[#1D1A55] text-white">
          <div className="grid-p">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FEE003] block mb-2">
                  OUR NATIONAL REHABILITATION MISSION
                </span>
                <h2 className="font-headings type-48 text-white mb-4">
                  Lakwa Mukt Bharat: Hope, Dignity & Mobility
                </h2>
                <p className="text-neutral-200 text-base md:text-lg leading-relaxed mb-4">
                  Paralysis impacts not only the patient but their entire family. Through Lakwa Mukt Bharat, Dr. Neha Arora Verma is breaking the myth of therapeutic helplessness. Every patient deserves access to advanced neuroplastic rehabilitation, regardless of their background.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="px-4 py-2 bg-white/10 border border-white/20 text-xs uppercase font-bold tracking-wider">
                    Community Awareness Camps
                  </div>
                  <div className="px-4 py-2 bg-white/10 border border-white/20 text-xs uppercase font-bold tracking-wider">
                    Caregiver Bedside Certification
                  </div>
                  <div className="px-4 py-2 bg-white/10 border border-white/20 text-xs uppercase font-bold tracking-wider">
                    Affordable Technology Access
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 text-center">
                <span className="font-headings text-4xl text-[#FEE003] font-bold mb-2">
                  17+ Years
                </span>
                <p className="text-sm text-neutral-300 font-medium mb-4">
                  Dedicated Exclusively to Neurological Recovery & Paralysis Care
                </p>
                <a
                  href="#training-form"
                  className="btn px-6 py-3 bg-[#E9511C] hover:bg-[#d44514] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Join the Mission
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Training Programs / Admission Options */}
        <section className="py-16 md:py-24 bg-white border-b border-neutral-200" id="programs">
          <div className="grid-p">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E9511C] block mb-2">
                REHABILITATION FORMATS
              </span>
              <h2 className="font-headings type-48 md:type-72 text-[#1D1A55]">
                Neuroplasticity Training Formats
              </h2>
              <div className="w-16 h-1 bg-[#1D1A55] mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {trainingPrograms.map((prog, idx) => (
                <div
                  key={idx}
                  className={`p-6 md:p-8 flex flex-col justify-between border-2 ${
                    prog.featured
                      ? "border-[#E9511C] bg-[#FFFBF7] shadow-xl relative"
                      : "border-neutral-300 bg-white shadow-sm"
                  }`}
                >
                  {prog.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E9511C] text-white px-4 py-0.5 text-xs font-bold uppercase tracking-widest">
                      Most Recommended
                    </div>
                  )}

                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-[#00AF9C] block mb-2">
                      {prog.category}
                    </span>
                    <h3 className="font-headings text-2xl text-[#1D1A55] font-bold mb-3">
                      {prog.name}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                      {prog.description}
                    </p>

                    <div className="border-t border-neutral-200 pt-4 mb-6">
                      <span className="text-xs uppercase font-bold tracking-wider text-neutral-500 block mb-3">
                        What This Includes:
                      </span>
                      <ul className="space-y-2.5">
                        {prog.features.map((f, fIdx) => (
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
                      <strong>Best for:</strong> {prog.recommendedFor}
                    </p>
                    <a
                      href="#training-form"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          programInterest: prog.name
                        }))
                      }
                      className={`block w-full py-3 text-center text-xs font-bold uppercase tracking-wider ${
                        prog.featured
                          ? "bg-[#E9511C] text-white hover:bg-[#d44514]"
                          : "bg-[#1D1A55] text-white hover:bg-[#2c2877]"
                      } transition-all`}
                    >
                      Inquire for Admission →
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
                Questions About Neuroplasticity Training
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
        <section className="py-16 md:py-24 bg-white" id="training-form">
          <div className="grid-p">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Form Guidance Column */}
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E9511C] block mb-2">
                  PATIENT & PRACTITIONER INTAKE
                </span>
                <h2 className="font-headings type-48 md:type-72 text-[#1D1A55] mb-4">
                  Apply for Neuroplasticity Training
                </h2>
                <p className="text-neutral-700 text-base leading-relaxed mb-6">
                  Submit patient details below for a comprehensive review by Dr. Neha Arora Verma and our clinical rehabilitation team at Shree Namoh Wellness.
                </p>

                <div className="p-5 bg-[#FAF5EE] border-l-4 border-[#1D1A55] mb-6">
                  <h4 className="font-headings text-base font-bold text-[#1D1A55] mb-1">
                    Direct Contact Desk:
                  </h4>
                  <p className="text-xs md:text-sm text-neutral-700 mb-2">
                    Official Admissions Email: <strong>{TARGET_ADMISSIONS_EMAIL}</strong>
                  </p>
                  <p className="text-xs md:text-sm text-neutral-700">
                    Direct WhatsApp Helpline: <strong>{WHATSAPP_DISPLAY}</strong>
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full py-3.5 px-4 bg-[#00AF9C] hover:bg-[#009686] text-white font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow"
                  >
                    <span>Instant WhatsApp Inquiry ({WHATSAPP_DISPLAY})</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleSendViaEmail}
                    className="w-full py-3.5 px-4 bg-[#1D1A55] hover:bg-[#2c2877] text-white font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow"
                  >
                    <span>Direct Email to {TARGET_ADMISSIONS_EMAIL}</span>
                  </button>
                </div>
              </div>

              {/* Form Input Column */}
              <div className="lg:col-span-7 bg-[#F7F9FC] p-6 md:p-10 border-2 border-[#1D1A55] shadow-lg">
                <h3 className="font-headings text-2xl text-[#1D1A55] font-bold mb-6">
                  Rehabilitation Case Assessment Form
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Patient / Applicant Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Your Relationship to Patient
                      </label>
                      <select
                        name="relationship"
                        value={formData.relationship}
                        onChange={handleChange}
                        className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C]"
                      >
                        <option value="Patient / Self">Patient / Self</option>
                        <option value="Son / Daughter">Son / Daughter</option>
                        <option value="Spouse">Spouse</option>
                        <option value="Physiotherapist / Doctor">Physiotherapist / Doctor</option>
                        <option value="Other Relative">Other Relative</option>
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
                        placeholder="e.g. +91 74705XXXXX"
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
                        placeholder="e.g. patient@example.com"
                        className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Neurological Condition
                      </label>
                      <select
                        name="condition"
                        value={formData.condition}
                        onChange={handleChange}
                        className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C]"
                      >
                        <option value="Post-Stroke Hemiplegia & Paralysis">
                          Post-Stroke Hemiplegia & Paralysis
                        </option>
                        <option value="Spinal Cord Injury & Paraplegia">
                          Spinal Cord Injury & Paraplegia
                        </option>
                        <option value="Parkinson's Disease & Gait Freezing">
                          Parkinson's Disease & Gait Freezing
                        </option>
                        <option value="Bell's Palsy & Facial Nerve Deficit">
                          Bell's Palsy & Facial Nerve Deficit
                        </option>
                        <option value="Aphasia & Cognitive Speech Impairment">
                          Aphasia & Cognitive Speech Impairment
                        </option>
                        <option value="Practitioner Fellowship Inquiry">
                          Practitioner Fellowship Inquiry
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Time Since Stroke / Diagnosis
                      </label>
                      <select
                        name="durationSinceOnset"
                        value={formData.durationSinceOnset}
                        onChange={handleChange}
                        className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C]"
                      >
                        <option value="Less than 1 month (Acute)">Less than 1 month (Acute)</option>
                        <option value="1 to 6 months (Subacute)">1 to 6 months (Subacute)</option>
                        <option value="6 months to 2 years">6 months to 2 years</option>
                        <option value="Over 2 years (Chronic Recovery)">Over 2 years (Chronic Recovery)</option>
                      </select>
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
                        placeholder="e.g. Indore / Bhopal / Delhi"
                        className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Training Program
                      </label>
                      <select
                        name="programInterest"
                        value={formData.programInterest}
                        onChange={handleChange}
                        className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C]"
                      >
                        <option value="In-Clinic Intensive Neuroplasticity Program">
                          In-Clinic Intensive Neuroplasticity Program (Indore)
                        </option>
                        <option value="Lakwa Mukt Family & Tele-Rehab Mentorship">
                          Lakwa Mukt Family & Tele-Rehab Mentorship
                        </option>
                        <option value="Practitioner Clinical Fellowship & Mentorship">
                          Practitioner Clinical Fellowship & Mentorship
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Current Physical Challenges & Recovery Goals
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe current walking ability, hand grip, speech status, or specific questions for Dr. Neha..."
                      className="w-full p-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#E9511C]"
                    ></textarea>
                  </div>

                  {/* Target Dispatch Email Display */}
                  <div className="p-3 bg-neutral-200 border border-neutral-300 flex items-center justify-between text-xs">
                    <span className="text-neutral-700">Admissions Dispatch Email:</span>
                    <span className="font-mono font-bold text-[#1D1A55]">
                      {targetEmail}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#E9511C] hover:bg-[#d44514] text-white font-bold uppercase text-xs md:text-sm tracking-wider shadow-md transition-all"
                  >
                    Submit Rehabilitation Application →
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
