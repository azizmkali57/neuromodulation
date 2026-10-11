"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  const tableOfContents = [
    { id: "scope", label: "1. Scope of This Policy" },
    { id: "information-collected", label: "2. Information We Collect" },
    { id: "form-data", label: "3. Details Provided via Enquiry & Registration Forms" },
    { id: "how-we-use", label: "4. How Your Information Is Used" },
    { id: "cookies", label: "5. Cookies & Local Browser Storage" },
    { id: "analytics", label: "6. Website Usage & Analytics" },
    { id: "service-providers", label: "7. Communications & Third-Party Platforms" },
    { id: "security-retention", label: "8. Data Security, Protection & Retention" },
    { id: "user-rights", label: "9. Your Rights & Communication Choices" },
    { id: "external-links", label: "10. External Websites & Third-Party Links" },
    { id: "updates", label: "11. Changes to This Privacy Policy" },
    { id: "contact-privacy", label: "12. Privacy Inquiries & Contact Details" },
  ];

  return (
    <div className="w-100 bg-white" style={{ minHeight: "100vh" }}>
      {/* 1. Global Header */}
      <Header />

      <main className="main-content pt-header w-100" id="content">
        {/* =================================================================
            HEADER / HERO
            Compact, restrained editorial header matching Terms & Conditions
        ================================================================= */}
        <section className="grid-p pt-88 pb-40 a-center text-center bg-white border-b border-[#BDDFEC]">
          <div className="m-auto" style={{ maxWidth: "960px" }}>
            <span
              className="font-headings type-18 uppercase di mb-16 px-3 py-1"
              style={{
                backgroundColor: "var(--c-light-blue, #BDDFEC)",
                color: "var(--c-darkest-blue, #1D1A55)",
                letterSpacing: "0.05em",
              }}
            >
              PRIVACY & DATA PROTECTION
            </span>

            <h1
              className="font-headings type-108 uppercase mb-24 highlight-bolds m-auto overflow"
              style={{
                lineHeight: "0.98em",
                maxWidth: "14em",
                "--bg": "var(--c-yellow, #FEE003)",
              }}
            >
              <b>PRIVACY POLICY</b> <br />
              AND DATA PRACTICES
            </h1>

            <div
              className="style-content m-auto text-gray-700"
              style={{ maxWidth: "42em", fontSize: "1.05rem", lineHeight: "1.65em" }}
            >
              <p>
                This Privacy Policy explains how personal details and communications are handled
                when you browse our website, submit academic enquiries, or register for the Advanced
                Neuromodulation Techniques Workshop with Dr. Neha Arora Verma.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================================
            DOCUMENT BODY
            Single-column, high-readability layout with restrained styling
        ================================================================= */}
        <section className="grid-p pt-64 pb-88 bg-white">
          <div className="m-auto" style={{ maxWidth: "920px" }}>
            {/* Quick Navigation Drawer */}
            <div className="bg-[#f5f8fc] p-6 sm:p-8 mb-64 border-l-4 border-[#00AF9C]">
              <div className="font-headings type-20 uppercase text-[#1D1A55] mb-4">
                Table of Contents
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                {tableOfContents.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${item.id}`}
                    className="text-[#1D1A55] hover:text-[#E9511C] hover:underline transition-colors block py-1"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Document Content */}
            <div className="space-y-12 text-[#1D1A55]" style={{ lineHeight: "1.75em" }}>
              {/* Section 1 */}
              <article id="scope" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  1. Scope of This Policy
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  This policy applies to personal data collected through this website, our official
                  admissions telephone line (+91 7470529991), official WhatsApp communication channels,
                  and direct email correspondences relating to the Advanced Neuromodulation Techniques
                  workshop.
                </p>
                <p className="type-15 text-gray-700">
                  We are committed to handling your professional and personal information with
                  transparency, confidentiality, and respect for your communication preferences.
                </p>
              </article>

              {/* Section 2 */}
              <article id="information-collected" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  2. Information We Collect
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  We collect information strictly necessary to answer your curriculum questions,
                  verify clinical eligibility for workshop participation, issue enrollment details,
                  and coordinate attendance.
                </p>
                <p className="type-15 text-gray-700">
                  We do not collect sensitive biometric data, financial account passwords, or patient
                  identifiable medical records through this website.
                </p>
              </article>

              {/* Section 3 */}
              <article id="form-data" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  3. Details Provided via Enquiry & Registration Forms
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  When you voluntarily fill out the admissions enquiry form or contact our desk, you
                  may be asked to provide:
                </p>
                <ul className="list-disc pl-6 space-y-2 type-15 text-gray-700 mb-4">
                  <li>Full name and title (e.g., Dr., Pt., Occupational Therapist, etc.).</li>
                  <li>Contact telephone number and WhatsApp-enabled mobile number.</li>
                  <li>Email address for workshop syllabus and schedule transmission.</li>
                  <li>Professional specialization, clinical department, hospital, or practice affiliation.</li>
                  <li>City and state of practice.</li>
                  <li>Specific clinical questions, batch date preferences, or equipment queries.</li>
                </ul>
                <p className="type-15 text-gray-700">
                  Providing this information is entirely voluntary, though certain fields are necessary
                  if you request a callback or wish to register for a specific cohort.
                </p>
              </article>

              {/* Section 4 */}
              <article id="how-we-use" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  4. How Your Information Is Used
                </h2>
                <p className="type-15 text-gray-700 mb-2">
                  The information you provide is utilized solely for legitimate workshop coordination:
                </p>
                <ul className="list-disc pl-6 space-y-2 type-15 text-gray-700">
                  <li>Direct academic communication regarding workshop seats, batch dates, and fees.</li>
                  <li>Transmission of the workshop curriculum, pre-reading guidelines, and venue directions.</li>
                  <li>Verification of medical/rehabilitation qualifications required for hands-on clinical practice.</li>
                  <li>Issuing certificates of participation with accurate delegate names and designations.</li>
                  <li>Follow-up support concerning workshop protocol reference notes.</li>
                </ul>
              </article>

              {/* Section 5 */}
              <article id="cookies" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  5. Cookies & Local Browser Storage
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  This website relies primarily on standard static and client-side web technologies.
                  Basic technical cookies or session tokens may be used by the hosting infrastructure
                  solely to maintain secure page delivery, ensure correct layout rendering, and support
                  responsive features.
                </p>
                <p className="type-15 text-gray-700">
                  We do not use invasive third-party cross-site behavioral tracking cookies or sell your
                  browsing profile to third-party advertising networks.
                </p>
              </article>

              {/* Section 6 */}
              <article id="analytics" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  6. Website Usage & Analytics
                </h2>
                <p className="type-15 text-gray-700">
                  Standard web server logs automatically record general technical telemetry (such as
                  browser type, operating system, and page request timestamps) to diagnose performance
                  and maintain server health. This data is reviewed only in aggregate and is not linked
                  to individual medical records or private profiles.
                </p>
              </article>

              {/* Section 7 */}
              <article id="service-providers" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  7. Communications & Third-Party Platforms
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  We do not sell, rent, or trade your contact information. Where you choose to connect
                  with us via third-party communication tools (such as WhatsApp via Meta or your default
                  email service), your interaction with those tools is also governed by the respective
                  third party’s privacy terms.
                </p>
                <p className="type-15 text-gray-700">
                  Information is disclosed only when required by law or to protect safety during physical
                  clinical training sessions.
                </p>
              </article>

              {/* Section 8 */}
              <article id="security-retention" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  8. Data Security, Protection & Retention
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  We implement administrative and technical safeguards to protect your personal details
                  against unauthorized access, alteration, or disclosure.
                </p>
                <p className="type-15 text-gray-700">
                  While no Internet transmission or electronic storage method can claim 100% absolute
                  immunity, we restrict access to enquiry records exclusively to authorized admissions
                  and academic personnel. Participant records are retained only for the duration
                  required to manage workshop attendance, certification verification, and administrative
                  compliance.
                </p>
              </article>

              {/* Section 9 */}
              <article id="user-rights" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  9. Your Rights & Communication Choices
                </h2>
                <p className="type-15 text-gray-700 mb-2">
                  As a prospective delegate or workshop participant, you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 type-15 text-gray-700 mb-4">
                  <li>Request a copy of the contact details we have recorded for your enrollment.</li>
                  <li>Request correction of any outdated or inaccurate professional or contact data.</li>
                  <li>Opt out of future workshop announcements or follow-up communications at any time.</li>
                  <li>Request deletion of your enquiry data, subject to necessary legal and tax retention rules.</li>
                </ul>
                <p className="type-15 text-gray-700">
                  To exercise any of these options, simply contact our admissions desk via phone or email.
                </p>
              </article>

              {/* Section 10 */}
              <article id="external-links" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  10. External Websites & Third-Party Links
                </h2>
                <p className="type-15 text-gray-700">
                  Our website may feature links to external clinical research publications, medical
                  journals, professional reference sites, or social media profiles. We are not
                  responsible for the privacy practices, content, or data policies of external sites.
                  We encourage you to review the privacy terms of any third-party websites you visit.
                </p>
              </article>

              {/* Section 11 */}
              <article id="updates" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  11. Changes to This Privacy Policy
                </h2>
                <p className="type-15 text-gray-700">
                  We may periodically update this Privacy Policy to reflect modifications in our
                  educational workshops, communication technologies, or statutory compliance. Any
                  updates will be published on this page with immediate effect.
                </p>
              </article>

              {/* Section 12 */}
              <article id="contact-privacy" className="scroll-mt-32">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  12. Privacy Inquiries & Contact Details
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  If you have questions, concerns, or requests regarding this Privacy Policy or how
                  your details are handled, please contact our administrative desk:
                </p>
                <div className="bg-[#f5f8fc] p-6 border-l-4 border-[#00AF9C]">
                  <div className="font-bold text-sm text-[#1D1A55] uppercase mb-1">
                    Admissions & Academic Coordination Desk
                  </div>
                  <div className="text-sm text-gray-700 mb-1">
                    Dr. Neha Arora Verma — Advanced Neuromodulation Techniques
                  </div>
                  <div className="text-sm text-gray-700 mb-1">
                    Workshop Venue: A-65 MIG, Behind CHL Hospital, Indore, Madhya Pradesh 452001
                  </div>
                  <div className="text-sm text-gray-700 mb-1">
                    Direct Phone / WhatsApp:{" "}
                    <a href="tel:7470529991" className="font-bold text-[#E9511C] hover:underline">
                      +91 7470529991
                    </a>
                  </div>
                  <div className="text-sm text-gray-700">
                    Official Email:{" "}
                    <a href="mailto:contact@drnehaarora.com" className="font-bold text-[#1D1A55] hover:underline">
                      contact@drnehaarora.com
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* 3. Global Shared Footer */}
      <Footer />
    </div>
  );
}
