"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceNeeded: "Specialized Paralysis Care",
    city: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const openWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Shree Namoh Wellness Team,\n\nI would like to enquire about your healthcare services.\n\nName: ${formData.fullName || "Patient / Family"}\nPhone: ${formData.phone || "Not provided"}\nEmail: ${formData.email || "Not provided"}\nService Interested In: ${formData.serviceNeeded}\nCity: ${formData.city || "Not provided"}\nMessage: ${formData.message || "Please share appointment availability and consultation details."}`
    );
    window.open(`https://wa.me/919827079888?text=${text}`, "_blank");
  };

  return (
    <div
      id="contact-form-card"
      className="w-100 m-auto relative bg-white border border-[#BDDFEC] rounded-2xl shadow-lg overflow-hidden"
      style={{
        maxWidth: "760px",
        boxShadow: "0 20px 45px -10px rgba(29, 26, 85, 0.08)",
      }}
    >
      {/* Top Header Badge */}
      <div
        className="px-6 py-6 text-white text-center"
        style={{ backgroundColor: "var(--c-darkest-blue, #1D1A55)" }}
      >
        <span
          className="inline-block px-3 py-1 mb-2 text-xs font-headings uppercase rounded tracking-wider"
          style={{ backgroundColor: "var(--c-orange, #E9511C)" }}
        >
          Shree Namoh Wellness Clinical Desk
        </span>
        <h3 className="font-headings type-28 text-white uppercase m-0">
          Book a Consultation or Inquiry
        </h3>
        <p className="text-sm opacity-90 m-0 mt-2" style={{ color: "#BDDFEC" }}>
          Specialized Paralysis Care • Genetic Counseling • Advanced Eye Care • Doctor Training
        </p>
      </div>

      {submitted ? (
        <div className="p-10 a-center text-center">
          <div
            className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white"
            style={{ backgroundColor: "var(--c-green, #00AF9C)" }}
          >
            <svg className="w-8 h-8 fill-none stroke-white" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="font-headings type-28 uppercase color-darkest-blue mb-2">
            Thank You!
          </h4>
          <p className="type-18 text-gray-700 max-w-md mx-auto mb-6">
            Your consultation request has been received. Our clinical coordinator will contact you shortly on <b>{formData.phone || formData.email}</b>.
          </p>

          <div className="flex flex-wrap flex-center gap-4">
            <button
              type="button"
              onClick={openWhatsAppDirect}
              className="button-link di font-headings type-18 uppercase cursor-pointer flex items-center gap-2"
              style={{
                backgroundColor: "#25D366",
                color: "#ffffff",
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
              }}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.203.043.072.043.419-.101.824z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </button>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="font-bold text-sm text-gray-600 underline cursor-pointer bg-transparent border-0"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-5 text-left">
          {/* Row 1: Full Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-[#1D1A55] mb-2">
                Full Name <span style={{ color: "var(--c-orange, #E9511C)" }}>*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Patient / Attendee Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#E9511C] transition-colors"
                style={{ fontFamily: "inherit" }}
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-[#1D1A55] mb-2">
                Email Address <span style={{ color: "var(--c-orange, #E9511C)" }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#E9511C] transition-colors"
                style={{ fontFamily: "inherit" }}
              />
            </div>
          </div>

          {/* Row 2: Phone & Specialty Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-[#1D1A55] mb-2">
                Phone / WhatsApp Number <span style={{ color: "var(--c-orange, #E9511C)" }}>*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98270 79888"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#E9511C] transition-colors"
                style={{ fontFamily: "inherit" }}
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-[#1D1A55] mb-2">
                Service Required <span style={{ color: "var(--c-orange, #E9511C)" }}>*</span>
              </label>
              <select
                name="serviceNeeded"
                value={formData.serviceNeeded}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:border-[#E9511C] transition-colors"
                style={{ fontFamily: "inherit" }}
              >
                <option value="Specialized Paralysis Care">Specialized Paralysis Care</option>
                <option value="Genomic Counseling & Wellness">Genomic Counseling &amp; Wellness</option>
                <option value="Advanced Eye Care & Surgery">Advanced Eye Care &amp; Ophthalmic Surgery</option>
                <option value="Neuroplasticity Training Course">Neuroplasticity Training Course for Doctors</option>
                <option value="General Health Consultation">General Health Consultation</option>
              </select>
            </div>
          </div>

          {/* Row 3: City */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-[#1D1A55] mb-2">
              City / State
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Indore, Bhopal, Mumbai, Delhi"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#E9511C] transition-colors"
              style={{ fontFamily: "inherit" }}
            />
          </div>

          {/* Message / Symptoms / Clinical Context */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-[#1D1A55] mb-2">
              Describe Condition, Questions or Appointment Preference
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please briefly describe your medical background, symptoms, or inquiry details..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#E9511C] transition-colors"
              style={{ fontFamily: "inherit", resize: "vertical" }}
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-8 py-4 rounded-lg font-headings type-18 uppercase tracking-wide cursor-pointer transition-transform active:scale-95 text-white"
              style={{
                backgroundColor: "var(--c-orange, #E9511C)",
                border: "none",
                minWidth: "220px",
              }}
            >
              {submitting ? "Submitting..." : "Submit Inquiry"}
            </button>

            <button
              type="button"
              onClick={openWhatsAppDirect}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-headings type-18 uppercase tracking-wide text-white cursor-pointer transition-transform active:scale-95"
              style={{
                backgroundColor: "#25D366",
                border: "none",
              }}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.203.043.072.043.419-.101.824z" />
              </svg>
              <span>WhatsApp Helpline</span>
            </button>
          </div>

          <div className="text-xs text-gray-500 a-center text-center pt-2 flex items-center justify-center gap-1.5">
            <svg className="w-3.5 h-3.5 fill-current text-gray-400" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>Your personal details are handled strictly under our Privacy Policy.</span>
          </div>
        </form>
      )}
    </div>
  );
}
