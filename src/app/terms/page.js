"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  const tableOfContents = [
    { id: "acceptance", label: "1. Acceptance of Terms" },
    { id: "our-services", label: "2. Our Services" },
    { id: "medical-disclaimer", label: "3. General Medical Disclaimer" },
    { id: "eye-care", label: "4. Eye Care and Ophthalmic Surgery" },
    { id: "neuroplasticity-course", label: "5. Neuroplasticity Course for Medical Professionals" },
    { id: "genomic-wellness", label: "6. Genomic Wellness" },
    { id: "user-responsibilities", label: "7. User Responsibilities" },
    { id: "intellectual-property", label: "8. Intellectual Property" },
    { id: "limitation-of-liability", label: "9. Limitation of Liability" },
    { id: "indemnity", label: "10. Indemnity" },
    { id: "suspension-termination", label: "11. Suspension and Termination" },
    { id: "force-majeure", label: "12. Force Majeure" },
    { id: "governing-law", label: "13. Governing Law and Jurisdiction" },
    { id: "changes-terms", label: "14. Changes to These Terms" },
    { id: "contact-us", label: "15. Contact Us" },
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
              SHREE NAMOH WELLNESS &bull; GOVERNANCE & POLICIES
            </span>

            <h1
              className="font-headings type-108 uppercase mb-24 highlight-bolds m-auto overflow"
              style={{
                lineHeight: "0.98em",
                maxWidth: "14em",
                "--bg": "var(--c-yellow, #FEE003)",
              }}
            >
              <b>TERMS & CONDITIONS</b> <br />
              OF SERVICE
            </h1>

            <div
              className="style-content m-auto text-gray-700"
              style={{ maxWidth: "44em", fontSize: "1.05rem", lineHeight: "1.65em" }}
            >
              <p>
                By accessing <strong>Www.Shreenamohwellness.Com</strong> or using any service of{" "}
                <strong>Shree Namoh Wellness</strong>, you agree to these Terms &amp; Conditions and
                our Privacy Policy. Please review each section carefully.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================================
            LEGAL DOCUMENT BODY
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
              <article id="acceptance" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  By accessing{" "}
                  <a
                    href="https://www.shreenamohwellness.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E9511C] font-semibold hover:underline"
                  >
                    www.shreenamohwellness.com
                  </a>{" "}
                  or using any service of <strong>Shree Namoh Wellness</strong>, you agree to these
                  Terms &amp; Conditions and our Privacy Policy.
                </p>
                <p className="type-15 text-gray-700">
                  If you do not agree, please do not use our website or services.
                </p>
              </article>

              {/* Section 2 */}
              <article id="our-services" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  2. Our Services
                </h2>
                <p className="type-15 text-gray-700 mb-3">
                  We offer:
                </p>
                <ul className="list-disc pl-6 space-y-2 type-15 text-gray-700 mb-4">
                  <li>
                    <strong>Neuroplasticity Course For Medical Professionals</strong>
                  </li>
                  <li>
                    <strong>Eye Care And Ophthalmic Surgery</strong>
                  </li>
                  <li>
                    <strong>Genomic Wellness</strong>
                  </li>
                </ul>
                <p className="type-15 text-gray-700">
                  Service details, availability, and fees may change without prior notice.
                </p>
              </article>

              {/* Section 3 */}
              <article id="medical-disclaimer" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  3. General Medical Disclaimer
                </h2>
                <div className="p-5 bg-[#fdf2e9] border-l-4 border-[#E9511C] mb-4 text-sm text-gray-800 leading-relaxed">
                  <p className="font-bold text-[#1D1A55] mb-2 uppercase">
                    Important Medical Notice:
                  </p>
                  <p className="mb-2">
                    The information on this website is for general awareness only and is not a
                    substitute for professional medical advice, diagnosis, or treatment. Always
                    consult a qualified doctor about your health.
                  </p>
                  <p className="mb-2">
                    Do not delay or ignore medical advice because of something you read on our
                    website.
                  </p>
                  <p className="m-0 font-semibold text-[#1D1A55]">
                    In a medical emergency, contact your nearest hospital or emergency services
                    immediately.
                  </p>
                </div>
              </article>

              {/* Section 4 */}
              <article id="eye-care" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  4. Eye Care and Ophthalmic Surgery
                </h2>
                <div className="space-y-3 type-15 text-gray-700">
                  <p>
                    <strong className="text-[#1D1A55]">Appointments:</strong> Bookings are subject
                    to doctor availability. We may reschedule for clinical or operational reasons.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Accurate Information:</strong> You must
                    provide complete and accurate medical history, including allergies, medications,
                    and existing conditions.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Informed Consent:</strong> Surgical and
                    procedural treatment is carried out only after a doctor explains the procedure,
                    benefits, risks, and alternatives, and you give written informed consent.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">No Guarantee Of Results:</strong> Outcomes
                    vary from person to person. We do not guarantee any specific result, and all
                    medical and surgical procedures carry inherent risks.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Follow-Up Care:</strong> Following
                    post-treatment instructions and attending follow-ups is your responsibility and
                    is important for recovery.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Cancellation And Fees:</strong> Appointment
                    cancellations, rescheduling requests, and consultation or procedure fees are
                    governed by clinic scheduling policies. Please contact our administrative desk in
                    advance if you need to reschedule.
                  </p>
                </div>
              </article>

              {/* Section 5 */}
              <article id="neuroplasticity-course" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  5. Neuroplasticity Course for Medical Professionals
                </h2>
                <div className="space-y-3 type-15 text-gray-700">
                  <p>
                    <strong className="text-[#1D1A55]">Eligibility:</strong> This course is intended
                    for registered medical and healthcare professionals. We may ask for proof of
                    registration and qualifications, and may cancel enrolment if the information is
                    false.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Registration And Fees:</strong> Enrolment is
                    confirmed only after full payment of the course fee.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Educational Purpose:</strong> The course is
                    for education and professional development. Applying the learning in clinical
                    practice remains your own professional responsibility, and we do not guarantee
                    any particular clinical outcome or career benefit.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Certificates:</strong> Certificates are
                    issued only on meeting attendance and assessment requirements.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Course Materials:</strong> All lectures,
                    videos, notes, and resources are our intellectual property. You may not copy,
                    record, share, resell, or distribute them without written permission.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Conduct:</strong> Participants must behave
                    professionally. We may remove anyone who disrupts the course or violates these
                    terms, without refund.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Changes:</strong> We may change schedules,
                    faculty, or format when necessary.
                  </p>
                </div>
              </article>

              {/* Section 6 */}
              <article id="genomic-wellness" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  6. Genomic Wellness
                </h2>
                <div className="space-y-3 type-15 text-gray-700">
                  <p>
                    <strong className="text-[#1D1A55]">Not A Diagnostic Service:</strong> Unless
                    clearly stated otherwise, Genomic Wellness reports are for wellness and
                    lifestyle guidance and are not a diagnosis, prediction, or confirmation of any
                    disease.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Understanding Results:</strong> Genetic
                    results indicate tendencies or risk factors, not certainty. They should be
                    interpreted with a qualified healthcare professional or genetic counsellor.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Samples And Consent:</strong> You must provide
                    your own sample, or valid consent if the sample is for a minor. Testing is done
                    only after you sign a specific consent form.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Sample Quality:</strong> Poor or contaminated
                    samples may need to be recollected, and results may be delayed.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Accuracy And Limitations:</strong> Genomic
                    science is evolving, and interpretations may change as research advances.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Do Not Self-Treat:</strong> Do not start,
                    stop, or change any medication, diet, or treatment based on your report without
                    consulting a doctor.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Data Privacy:</strong> Your genetic data is
                    handled according to our Privacy Policy.
                  </p>
                  <p>
                    <strong className="text-[#1D1A55]">Fees And Refunds:</strong> Tests that have
                    been processed and submitted for laboratory analysis are non-refundable. Please
                    inquire with our administrative team for specific package details.
                  </p>
                </div>
              </article>

              {/* Section 7 */}
              <article id="user-responsibilities" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  7. User Responsibilities
                </h2>
                <p className="type-15 text-gray-700 mb-3">You Agree To:</p>
                <ul className="list-disc pl-6 space-y-2 type-15 text-gray-700">
                  <li>Provide Accurate And Complete Information.</li>
                  <li>Use Our Website And Services Lawfully.</li>
                  <li>
                    Not misuse the website, attempt unauthorized access, or introduce harmful code.
                  </li>
                  <li>Not Impersonate Another Person Or Submit False Details.</li>
                </ul>
              </article>

              {/* Section 8 */}
              <article id="intellectual-property" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  8. Intellectual Property
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  All content on this website, including text, logos, graphics, images, course
                  material, and reports, belongs to <strong>Shree Namoh Wellness</strong> or its
                  licensors and is protected by law.
                </p>
                <p className="type-15 text-gray-700">
                  You may not copy, modify, distribute, or use it commercially without written
                  permission.
                </p>
              </article>

              {/* Section 9 */}
              <article id="limitation-of-liability" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  9. Limitation of Liability
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  To the fullest extent permitted by law, <strong>Shree Namoh Wellness</strong> is
                  not liable for any indirect, incidental, or consequential loss arising from your
                  use of the website or services, including reliance on website information or
                  interpretation of reports without professional advice.
                </p>
                <p className="type-15 text-gray-700">
                  Nothing in these terms limits liability that cannot be excluded under Indian law,
                  including liability for professional negligence.
                </p>
              </article>

              {/* Section 10 */}
              <article id="indemnity" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  10. Indemnity
                </h2>
                <p className="type-15 text-gray-700">
                  You agree to indemnify <strong>Shree Namoh Wellness</strong> against claims or
                  losses arising from your breach of these terms, misuse of our services, or
                  submission of false information.
                </p>
              </article>

              {/* Section 11 */}
              <article id="suspension-termination" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  11. Suspension and Termination
                </h2>
                <p className="type-15 text-gray-700">
                  We may suspend or terminate your access to our website or services, without notice,
                  if you violate these terms or misuse our services.
                </p>
              </article>

              {/* Section 12 */}
              <article id="force-majeure" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  12. Force Majeure
                </h2>
                <p className="type-15 text-gray-700">
                  We are not liable for delays or failure to perform caused by events beyond our
                  reasonable control, such as natural disasters, strikes, government orders,
                  technical failures, or pandemics.
                </p>
              </article>

              {/* Section 13 */}
              <article id="governing-law" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  13. Governing Law and Jurisdiction
                </h2>
                <p className="type-15 text-gray-700">
                  These terms are governed by the laws of India. Any dispute is subject to the
                  exclusive jurisdiction of the courts at{" "}
                  <strong>Indore, Madhya Pradesh</strong>.
                </p>
              </article>

              {/* Section 14 */}
              <article id="changes-terms" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  14. Changes to These Terms
                </h2>
                <p className="type-15 text-gray-700">
                  We may update these terms at any time. Continued use of our website or services
                  after changes means you accept the updated terms.
                </p>
              </article>

              {/* Section 15 */}
              <article id="contact-us" className="scroll-mt-32">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  15. Contact Us
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  If you have questions about these Terms &amp; Conditions or our services, please
                  contact:
                </p>
                <div className="bg-[#f5f8fc] p-6 sm:p-8 border-l-4 border-[#00AF9C]">
                  <div className="font-bold text-base text-[#1D1A55] uppercase mb-2">
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
