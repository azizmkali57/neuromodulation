"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/app/siteData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    state: "idle", // 'idle' | 'submitting' | 'local_only' | 'error'
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        state: "error",
        message: "Please fill out all required fields.",
      });
      return;
    }

    setStatus({ state: "submitting", message: "" });

    // Note: Project does not currently have an active third-party email API endpoint configured.
    // Rather than displaying a simulated confirmation, we provide immediate transparent guidance
    // and offer direct handoff to WhatsApp or email client with pre-filled details.
    setTimeout(() => {
      setStatus({
        state: "local_only",
        message:
          "Form details validated. As direct automated email dispatch is not configured on this server, please click below to send via WhatsApp or your default email client.",
      });
    }, 400);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Admissions Desk / Dr. Neha Arora Verma,\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nSubject: ${formData.subject || "Workshop Enquiry"}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/917470529991?text=${text}`, "_blank");
  };

  const handleMailtoSend = () => {
    const subject = encodeURIComponent(formData.subject || "Workshop Enquiry");
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:neha_arora27@yahoo.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-100 bg-white" style={{ minHeight: "100vh" }}>
      {/* 1. Global Header */}
      <Header />

      <main className="main-content pt-header w-100" id="content">
        {/* =================================================================
            1. COMPACT HERO
            Eyebrow label, bold condensed uppercase heading, yellow-highlighted
            phrase, and concise description matching landing page system.
        ================================================================= */}
        <section className="grid-p pt-88 pb-40 a-center text-center bg-white border-b border-[#BDDFEC]">
          <div className="m-auto" style={{ maxWidth: "1000px" }}>
            <span
              className="font-headings type-20 uppercase di mb-16 px-4 py-1"
              style={{
                backgroundColor: "var(--c-light-blue, #BDDFEC)",
                color: "var(--c-darkest-blue, #1D1A55)",
                letterSpacing: "0.05em",
              }}
            >
              COMMUNICATIONS & ADMISSIONS DESK
            </span>

            <h1
              className="font-headings type-108 uppercase mb-24 highlight-bolds m-auto overflow"
              style={{
                lineHeight: "0.98em",
                maxWidth: "14em",
                "--bg": "var(--c-yellow, #FEE003)",
              }}
            >
              <b>GET IN TOUCH</b> <br />
              WITH OUR TEAM
            </h1>

            <div
              className="style-content m-auto text-gray-700"
              style={{ maxWidth: "42em", fontSize: "1.1rem", lineHeight: "1.6em" }}
            >
              <p>
                Have questions regarding the Advanced Neuromodulation Techniques workshop, syllabus
                eligibility, device access, or registration seats? Connect directly with Dr. Neha
                Arora Verma and our admissions desk.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================================
            2 & 3. CLEAN CONTACT SECTION
            Message form alongside verified minimal contact information.
        ================================================================= */}
        <section className="grid-p pt-64 pb-88 bg-white">
          <div className="m-auto" style={{ maxWidth: "1160px" }}>
            <div className="dg grid-auto gap-large g-vat">
              {/* Left Column: Accessible Form */}
              <div
                className="bg-white p-6 sm:p-10 border border-[#BDDFEC]"
                style={{
                  boxShadow: "0 4px 20px rgba(29, 26, 85, 0.04)",
                }}
              >
                <div className="font-headings type-28 uppercase text-[#1D1A55] mb-6">
                  Send a Message
                </div>

                {status.state === "error" && (
                  <div
                    className="p-3 mb-6 font-bold text-sm"
                    style={{ backgroundColor: "#FEE2E2", color: "#991B1B" }}
                  >
                    {status.message}
                  </div>
                )}

                {status.state === "local_only" ? (
                  <div className="p-6 bg-[#f5f8fc] border-l-4 border-[#00AF9C] text-left">
                    <div className="font-headings type-20 uppercase color-darkest-blue mb-2">
                      Ready to Dispatch
                    </div>
                    <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                      {status.message}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <button
                        type="button"
                        onClick={handleWhatsAppSend}
                        className="button-link di font-headings type-18 uppercase cursor-pointer flex items-center gap-2"
                        style={{
                          backgroundColor: "#25D366",
                          color: "#ffffff",
                          border: "none",
                          padding: "12px 20px",
                        }}
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.203.043.072.043.419-.101.824z" />
                        </svg>
                        <span>Send via WhatsApp (7470529991)</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleMailtoSend}
                        className="button-link di font-headings type-18 uppercase cursor-pointer flex items-center gap-2"
                        style={{
                          backgroundColor: "var(--c-darkest-blue, #1D1A55)",
                          color: "#ffffff",
                          border: "none",
                          padding: "12px 20px",
                        }}
                      >
                        <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Send via Email</span>
                      </button>
                    </div>

                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={() => setStatus({ state: "idle", message: "" })}
                        className="text-xs text-gray-500 underline cursor-pointer bg-transparent border-0"
                      >
                        Edit Form Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-columns gap-sm text-left">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1D1A55] mb-2">
                        Full Name <span style={{ color: "var(--c-orange, #E9511C)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Dr. / Pt. First and Last Name"
                        className="w-100 p-3 border border-gray-300 text-sm focus:outline-none"
                        style={{ fontFamily: "inherit" }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1D1A55] mb-2">
                        Email Address <span style={{ color: "var(--c-orange, #E9511C)" }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="doctor@example.com"
                        className="w-100 p-3 border border-gray-300 text-sm focus:outline-none"
                        style={{ fontFamily: "inherit" }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1D1A55] mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Workshop Dates, Equipment Question, Group Registration"
                        className="w-100 p-3 border border-gray-300 text-sm focus:outline-none"
                        style={{ fontFamily: "inherit" }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1D1A55] mb-2">
                        Message <span style={{ color: "var(--c-orange, #E9511C)" }}>*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please write your questions or details here..."
                        className="w-100 p-3 border border-gray-300 text-sm focus:outline-none"
                        style={{ fontFamily: "inherit", resize: "vertical" }}
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status.state === "submitting"}
                        className="button-link di relative font-headings type-24 ls lh-1 color-orange uppercase cursor-pointer"
                        style={{ border: "none" }}
                      >
                        <span className="over di color-white">
                          {status.state === "submitting" ? "Validating..." : "Submit Message"}
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Right Column: Verified Minimal Contact Details */}
              <div className="flex flex-columns gap-f">
                {/* Contact Card */}
                <div className="bg-[#f5f8fc] p-6 sm:p-8 border-t-4 border-[#00AF9C]">
                  <div className="font-headings type-24 uppercase text-[#1D1A55] mb-6">
                    Direct Contact
                  </div>

                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase text-gray-500 mb-1">
                      Admissions Helpline & WhatsApp
                    </div>
                    <div className="flex flex-col gap-1">
                      <a
                        href="tel:9827079888"
                        className="font-headings type-24 color-orange link-underlined di uppercase"
                      >
                        +91 9827079888
                      </a>
                      <a
                        href="tel:7470529991"
                        className="font-headings type-24 color-orange link-underlined di uppercase"
                      >
                        +91 7470529991
                      </a>
                    </div>
                    <div className="text-xs text-gray-600 mt-2">
                      Available Monday to Saturday, 9:00 AM – 7:00 PM IST
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase text-gray-500 mb-1">
                      Official Admissions Email
                    </div>
                    <div className="flex flex-col gap-1">
                      <a
                        href="mailto:neha_arora27@yahoo.com"
                        className="font-headings type-18 text-[#1D1A55] link-underlined di"
                      >
                        neha_arora27@yahoo.com
                      </a>
                      <a
                        href="mailto:contact@drnehaarora.com"
                        className="text-xs text-gray-500 hover:text-[#1D1A55]"
                      >
                        contact@drnehaarora.com
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase text-gray-500 mb-1">
                      Clinical & Workshop Center
                    </div>
                    <div className="font-bold text-sm text-[#1D1A55]">
                      Shree Namoh Wellness
                    </div>
                    <div className="text-sm text-gray-700">
                      A-65 MIG, Behind CHL Hospital
                    </div>
                    <div className="text-sm text-gray-600">
                      Indore, Madhya Pradesh 452001
                    </div>
                  </div>
                </div>

                {/* 4. Small Natural Workshop Registration CTA */}
                <div className="bg-dark p-6 sm:p-8 color-white text-left">
                  <span
                    className="font-headings type-14 uppercase di mb-3 px-2 py-1"
                    style={{ backgroundColor: "var(--c-orange, #E9511C)" }}
                  >
                    UPCOMING BATCH
                  </span>
                  <h3 className="font-headings type-28 uppercase text-white mb-3">
                    3-Day Practical Masterclass
                  </h3>
                  <p className="text-sm text-[#BDDFEC] mb-6 leading-relaxed">
                    Over 70% hands-on device training covering stroke recovery, paralysis protocols,
                    Parkinson’s disease, and cognitive neurorehabilitation.
                  </p>
                  <div>
                    <a
                      href="/#training"
                      className="button-link di relative font-headings type-20 ls lh-1 color-orange uppercase"
                    >
                      <span className="over di color-white">Explore Curriculum</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 5. Shared Global Footer */}
      <Footer />
    </div>
  );
}
