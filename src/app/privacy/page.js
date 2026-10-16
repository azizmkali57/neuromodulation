"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  const tableOfContents = [
    { id: "introduction", label: "1. Introduction" },
    { id: "information-collected", label: "2. Information We Collect" },
    { id: "how-we-use", label: "3. How We Use Your Information" },
    { id: "consent", label: "4. Consent" },
    { id: "special-protection", label: "5. Special Protection for Genetic and Health Data" },
    { id: "sharing-information", label: "6. Sharing of Information" },
    { id: "data-retention", label: "7. Data Retention" },
    { id: "data-security", label: "8. Data Security" },
    { id: "cookies", label: "9. Cookies" },
    { id: "your-rights", label: "10. Your Rights" },
    { id: "children-privacy", label: "11. Children’s Privacy" },
    { id: "changes-policy", label: "12. Changes to This Policy" },
    { id: "grievance-contact", label: "13. Grievance Officer and Contact" },
  ];

  return (
    <div className="w-100 bg-white" style={{ minHeight: "100vh" }}>
      {/* 1. Global Header */}
      <Header />

      <main className="main-content pt-header w-100" id="content">
        {/* =================================================================
            HEADER / HERO
            Editorial header matching site design tokens
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
              SHREE NAMOH WELLNESS &bull; PRIVACY &amp; DATA PROTECTION
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
              style={{ maxWidth: "44em", fontSize: "1.05rem", lineHeight: "1.65em" }}
            >
              <p>
                <strong>Shree Namoh Wellness</strong> respects your privacy. This policy explains
                how we collect, use, store, and protect your personal, health, and genetic information
                when you visit <strong>www.shreenamohwellness.com</strong> or use our clinical,
                educational, and genomic services.
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
              <article id="introduction" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  1. Introduction
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  <strong>Shree Namoh Wellness</strong> respects your privacy. This policy explains
                  how we collect, use, store, and protect your personal information when you visit{" "}
                  <a
                    href="https://www.shreenamohwellness.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E9511C] font-semibold hover:underline"
                  >
                    www.shreenamohwellness.com
                  </a>{" "}
                  or use our services: the <strong>Neuroplasticity Course for Medical Professionals</strong>,{" "}
                  <strong>Eye Care and Ophthalmic Surgery</strong>, and <strong>Genomic Wellness</strong>.
                </p>
                <p className="type-15 text-gray-700">
                  By using our website or services, you agree to this policy.
                </p>
              </article>

              {/* Section 2 */}
              <article id="information-collected" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  2. Information We Collect
                </h2>
                <div className="space-y-3 type-15 text-gray-700">
                  <p>
                    <strong className="text-[#1D1A55]">Personal information:</strong> Name, phone
                    number, email address, age, gender, address, etc.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Health information (eye care patients):</strong>{" "}
                    Medical history, symptoms, eye examination records, prescriptions, test
                    results, surgical records, and consent forms.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Genetic information (Genomic Wellness clients):</strong>{" "}
                    Biological samples (such as saliva or blood), DNA data, genomic reports, family
                    history, and lifestyle details.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Professional information (course participants):</strong>{" "}
                    Medical registration number, qualifications, hospital or clinic affiliation,
                    and course progress or assessment records.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Technical information:</strong> IP address,
                    browser type, device details, pages visited, and cookies.
                  </p>
                </div>
              </article>

              {/* Section 3 */}
              <article id="how-we-use" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  3. How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 space-y-2 type-15 text-gray-700">
                  <li>To book appointments and provide eye care, surgical, and genomic services.</li>
                  <li>To process samples and prepare personalized genomic reports.</li>
                  <li>To enroll you in courses, verify eligibility, and issue certificates.</li>
                  <li>To send reminders, receipts, reports, and service updates.</li>
                  <li>To respond to enquiries and provide support.</li>
                  <li>To improve our website, services, and user experience.</li>
                  <li>To meet legal and regulatory requirements.</li>
                  <li>
                    To send promotional updates, only with your consent. You can opt out at any time.
                  </li>
                </ul>
              </article>

              {/* Section 4 */}
              <article id="consent" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  4. Consent
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  We collect and process your personal data only with your consent, except where the
                  law permits otherwise. Because health and genetic data is highly sensitive, we
                  obtain specific written or electronic consent before collecting it.
                </p>
                <p className="type-15 text-gray-700">
                  You may withdraw consent at any time by contacting us, though this may limit our
                  ability to continue providing certain services.
                </p>
              </article>

              {/* Section 5 */}
              <article id="special-protection" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  5. Special Protection for Genetic and Health Data
                </h2>
                <div className="p-5 bg-[#fdf2e9] border-l-4 border-[#00AF9C] mb-4 text-sm text-gray-800 leading-relaxed space-y-2">
                  <p className="font-bold text-[#1D1A55] uppercase mb-1">
                    Confidentiality &amp; Genetic Data Safeguards:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-gray-800">
                    <li>Genetic data is used only for the purpose you consented to.</li>
                    <li>
                      <strong>We do not sell your genetic or health data.</strong>
                    </li>
                    <li>
                      Genetic data is not shared with insurers, employers, or any third party for
                      discrimination or marketing.
                    </li>
                    <li>
                      Samples and data may be processed by accredited partner laboratories under
                      strict confidentiality agreements.
                    </li>
                    <li>
                      Any use of de-identified data for research will happen only with your explicit
                      consent.
                    </li>
                  </ul>
                </div>
              </article>

              {/* Section 6 */}
              <article id="sharing-information" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  6. Sharing of Information
                </h2>
                <p className="type-15 text-gray-700 mb-3">
                  We do not sell or rent your personal information. We may share it only with:
                </p>
                <ul className="list-disc pl-6 space-y-2 type-15 text-gray-700">
                  <li>Healthcare professionals and laboratories involved in your care or testing.</li>
                  <li>
                    Service providers such as payment gateways, IT, and communication platforms,
                    bound by confidentiality agreements.
                  </li>
                  <li>
                    Government or legal authorities when required by law, court order, or to protect
                    rights and safety.
                  </li>
                </ul>
              </article>

              {/* Section 7 */}
              <article id="data-retention" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  7. Data Retention
                </h2>
                <p className="type-15 text-gray-700">
                  We keep your information only as long as needed for the purpose it was collected or
                  as required by law. Medical records are retained according to applicable medical
                  and legal requirements. After that, data is securely deleted or anonymized.
                </p>
              </article>

              {/* Section 8 */}
              <article id="data-security" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  8. Data Security
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  We use reasonable technical and organizational safeguards, including access
                  controls, secure servers, and encryption where appropriate, to protect your data.
                </p>
                <p className="type-15 text-gray-700">
                  No online system is completely secure, so we cannot guarantee absolute security.
                  Please protect your own login details and devices.
                </p>
              </article>

              {/* Section 9 */}
              <article id="cookies" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  9. Cookies
                </h2>
                <p className="type-15 text-gray-700">
                  Our website uses cookies to improve performance, remember preferences, and analyze
                  traffic. You can disable cookies in your browser settings, though some features may
                  not work properly.
                </p>
              </article>

              {/* Section 10 */}
              <article id="your-rights" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  10. Your Rights
                </h2>
                <p className="type-15 text-gray-700 mb-3">Under applicable law, you may:</p>
                <ul className="list-disc pl-6 space-y-2 type-15 text-gray-700 mb-4">
                  <li>Request access to the personal data we hold about you.</li>
                  <li>Request correction or updating of inaccurate data.</li>
                  <li>
                    Request deletion of your data, subject to legal and medical record requirements.
                  </li>
                  <li>Withdraw your consent.</li>
                  <li>Raise a grievance regarding the handling of your data.</li>
                </ul>
                <p className="type-15 text-gray-700">
                  To exercise these rights, contact us using the details below.
                </p>
              </article>

              {/* Section 11 */}
              <article id="children-privacy" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  11. Children’s Privacy
                </h2>
                <p className="type-15 text-gray-700">
                  Our website is not intended for children under 18. Where a minor needs eye care or
                  genomic services, we collect and process data only with the verifiable consent of a
                  parent or legal guardian.
                </p>
              </article>

              {/* Section 12 */}
              <article id="changes-policy" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  12. Changes to This Policy
                </h2>
                <p className="type-15 text-gray-700">
                  We may update this policy from time to time. Changes take effect when posted on
                  this page with a revised date.
                </p>
              </article>

              {/* Section 13 */}
              <article id="grievance-contact" className="scroll-mt-32">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  13. Grievance Officer and Contact
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  For privacy queries, data requests, or to contact our Grievance Officer:
                </p>
                <div className="bg-[#f5f8fc] p-6 sm:p-8 border-l-4 border-[#00AF9C]">
                  <div className="font-bold text-base text-[#1D1A55] uppercase mb-1">
                    Grievance Officer: Dr. Neha Arora Verma
                  </div>
                  <div className="text-sm font-semibold text-[#1D1A55] mb-2">
                    Shree Namoh Wellness
                  </div>
                  <div className="text-sm text-gray-700 mb-1">
                    A-65 MIG, Behind CHL Hospital, Indore, Madhya Pradesh, India
                  </div>
                  <div className="text-sm text-gray-700 mb-1">
                    Email:{" "}
                    <a
                      href="mailto:neha_arora27@yahoo.com"
                      className="font-bold text-[#1D1A55] hover:text-[#E9511C] hover:underline"
                    >
                      neha_arora27@yahoo.com
                    </a>
                  </div>
                  <div className="text-sm text-gray-700">
                    Phone:{" "}
                    <a
                      href="tel:+919827079888"
                      className="font-bold text-[#E9511C] hover:underline"
                    >
                      +91-9827079888
                    </a>
                    {" / "}
                    <a
                      href="tel:+917470529991"
                      className="font-bold text-[#E9511C] hover:underline"
                    >
                      +91-7470529991
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
