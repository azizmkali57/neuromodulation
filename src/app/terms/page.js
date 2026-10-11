"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  const tableOfContents = [
    { id: "acceptance", label: "1. Acceptance of Terms" },
    { id: "website-use", label: "2. Website Use & Permitted Conduct" },
    { id: "educational-purpose", label: "3. Educational Purpose of the Workshop" },
    { id: "registration", label: "4. Enquiries, Registration & Seat Allocation" },
    { id: "payment-policies", label: "5. Fees, Cancellations & Rescheduling Policy" },
    { id: "professional-conduct", label: "6. Workshop Participation & Safety Conduct" },
    { id: "medical-disclaimer", label: "7. Medical Education Disclaimer & Scope" },
    { id: "outcomes-disclaimer", label: "8. No Clinical Outcome Guarantees" },
    { id: "intellectual-property", label: "9. Intellectual Property & Training Materials" },
    { id: "availability", label: "10. Website Availability & External Resources" },
    { id: "liability", label: "11. Limitation of Liability" },
    { id: "modifications", label: "12. Amendments to Terms" },
    { id: "contact", label: "13. Contact & Inquiries" },
  ];

  return (
    <div className="w-100 bg-white" style={{ minHeight: "100vh" }}>
      {/* 1. Global Header */}
      <Header />

      <main className="main-content pt-header w-100" id="content">
        {/* =================================================================
            HEADER / HERO
            Restrained, clean editorial header matching site design tokens
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
              WORKSHOP INFORMATION & GOVERNANCE
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
              OF PARTICIPATION
            </h1>

            <div
              className="style-content m-auto text-gray-700"
              style={{ maxWidth: "42em", fontSize: "1.05rem", lineHeight: "1.65em" }}
            >
              <p>
                These Terms and Conditions govern the use of this website, online enquiries,
                delegates registration, and physical participation in the Advanced Neuromodulation
                Techniques Workshop conducted by Dr. Neha Arora Verma.
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
                  By accessing, browsing, submitting an enquiry, or registering for the Advanced
                  Neuromodulation Techniques Workshop via this website or our official admissions
                  desk, you acknowledge that you have read, understood, and agree to be legally bound
                  by these Terms and Conditions.
                </p>
                <p className="type-15 text-gray-700">
                  If you do not agree with any provision set forth herein, you should discontinue
                  use of this website and refrain from registering for workshop sessions.
                </p>
              </article>

              {/* Section 2 */}
              <article id="website-use" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  2. Website Use & Permitted Conduct
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  This website is provided to convey curriculum highlights, dates, workshop syllabi,
                  and official communication channels for healthcare professionals and researchers.
                </p>
                <p className="type-15 text-gray-700 mb-2">
                  When interacting with this website, you agree that you will not:
                </p>
                <ul className="list-disc pl-6 space-y-2 type-15 text-gray-700">
                  <li>Provide misleading, inaccurate, or fraudulent contact or professional details.</li>
                  <li>Attempt to disrupt website security, infrastructure, or performance.</li>
                  <li>Copy, reproduce, scrap, or redistribute website assets or branding without prior written consent.</li>
                </ul>
              </article>

              {/* Section 3 */}
              <article id="educational-purpose" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  3. Educational Purpose of the Workshop
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  The Advanced Neuromodulation Techniques workshop is a continuing professional
                  education program specifically tailored for qualified clinicians, including
                  physiotherapists, neurologists, occupational therapists, rehabilitation specialists,
                  physiatrists, and healthcare scholars.
                </p>
                <p className="type-15 text-gray-700">
                  The workshop curriculum focuses on theoretical principles, equipment familiarization,
                  and supervised bedside demonstrations of non-invasive electroceutical and
                  neuromodulatory modalities.
                </p>
              </article>

              {/* Section 4 */}
              <article id="registration" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  4. Enquiries, Registration & Seat Allocation
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  Submitting an enquiry via website forms, telephone (+91 7470529991), or WhatsApp
                  initiates an academic admissions consultation and does not automatically guarantee a
                  confirmed delegate seat.
                </p>
                <p className="type-15 text-gray-700">
                  To ensure quality hands-on practice, workshop cohorts are intentionally capped in
                  size. Seats are reserved strictly on a first-come, first-confirmed basis following
                  verification of professional background and receipt of formal enrollment confirmation
                  from the admissions desk.
                </p>
              </article>

              {/* Section 5 */}
              <article id="payment-policies" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="font-headings type-28 uppercase text-[#1D1A55] m-0">
                    5. Fees, Cancellations & Rescheduling Policy
                  </h2>
                </div>
                <p className="type-15 text-gray-700 mb-4">
                  Official enrollment fees, payment deadlines, and seat confirmation receipts are
                  provided directly by the admissions coordinator upon verification of professional
                  credentials.
                </p>
                <div className="p-4 bg-[#f5f8fc] border-l-4 border-[#FEE003] mb-4 text-xs text-gray-700 leading-normal">
                  <span className="font-bold text-[#1D1A55] block mb-1">
                    [Owner Policy Notice]
                  </span>
                  Exact refund windows, administrative fees for cancellations, and transfer to subsequent
                  batches are confirmed in writing at the time of invoice issuance. If a workshop batch
                  is rescheduled by the organizers due to unforeseen administrative or clinical
                  circumstances, enrolled delegates will be offered the option to transfer their seat to
                  the next scheduled date without penalty.
                </div>
              </article>

              {/* Section 6 */}
              <article id="professional-conduct" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  6. Workshop Participation & Safety Conduct
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  During in-person bedside sessions and hands-on demonstrations, attendees must strictly
                  adhere to all safety directions, hygiene protocols, and parameter instructions issued
                  by Dr. Neha Arora Verma and the clinical instructors.
                </p>
                <p className="type-15 text-gray-700">
                  Participants must not operate clinical stimulation machinery without supervision or
                  outside calibrated protocol ranges. The organizers reserve the right to exclude any
                  attendee whose conduct compromises patient safety or the learning environment.
                </p>
              </article>

              {/* Section 7 */}
              <article id="medical-disclaimer" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  7. Medical Education Disclaimer & Scope of Training
                </h2>
                <div className="p-5 bg-[#fdf2e9] border-l-4 border-[#E9511C] mb-4 text-sm text-gray-800 leading-relaxed">
                  <p className="font-bold text-[#1D1A55] mb-2 uppercase">
                    Important Medical Education Notice:
                  </p>
                  <p className="mb-2">
                    The instruction, materials, demonstrations, and discussions provided during this
                    workshop are intended solely for the professional education of licensed and
                    qualified clinicians. They do not constitute formal individual patient medical advice,
                    diagnosis, or treatment prescriptions.
                  </p>
                  <p className="m-0">
                    Completion of the workshop or receipt of a certificate of participation does not
                    confer a statutory medical license, board certification, independent prescribing
                    authority, or replace the clinician’s duty of care, formal clinical supervision,
                    or institutional credentialing standards.
                  </p>
                </div>
              </article>

              {/* Section 8 */}
              <article id="outcomes-disclaimer" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  8. No Guarantee of Clinical or Patient Outcomes
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  Neurological recovery is intrinsically variable and governed by biological factors,
                  etiology, chronicity, and multidisciplinary care. While protocols taught are grounded
                  in peer-reviewed neuroplasticity research, the organizers, Dr. Neha Arora Verma, and
                  associated faculty make no guarantee or warranty that application of these techniques
                  will yield identical or specific recovery outcomes in any individual patient.
                </p>
                <p className="type-15 text-gray-700">
                  Clinicians must exercise independent professional assessment, evaluate patient
                  contraindications, and observe individual risk thresholds prior to initiating any
                  neuromodulatory protocol.
                </p>
              </article>

              {/* Section 9 */}
              <article id="intellectual-property" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  9. Intellectual Property & Training Materials
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  All clinical guides, presentation slides, protocol summaries, diagrams, course notes,
                  and website materials are the proprietary intellectual property of Dr. Neha Arora
                  Verma and the workshop organizers, protected under applicable intellectual property laws.
                </p>
                <p className="type-15 text-gray-700">
                  Enrolled delegates are granted a revocable, non-exclusive, non-transferable license to
                  use supplied reference material solely for their own continuing clinical study.
                  Materials may not be commercially re-published, resold, taught in third-party workshops,
                  or publicly disseminated without explicit prior written authorization.
                </p>
              </article>

              {/* Section 10 */}
              <article id="availability" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  10. Website Availability & External Resources
                </h2>
                <p className="type-15 text-gray-700">
                  We strive to maintain accurate, up-to-date website information and unbroken uptime.
                  However, we do not warrant that website functionality will be error-free or uninterrupted.
                  Links to third-party platforms (such as research databases or messaging applications)
                  are provided for delegate convenience; we do not endorse or assume responsibility for
                  third-party practices or content.
                </p>
              </article>

              {/* Section 11 */}
              <article id="liability" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  11. Limitation of Liability
                </h2>
                <p className="type-15 text-gray-700">
                  To the maximum extent permitted by applicable law, Dr. Neha Arora Verma, workshop
                  organizers, and associated staff shall not be liable for any indirect, incidental,
                  consequential, or special damages arising out of website usage, workshop participation,
                  or clinical application of discussed concepts by delegates in their independent
                  practices.
                </p>
              </article>

              {/* Section 12 */}
              <article id="modifications" className="scroll-mt-32 border-b border-gray-100 pb-8">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  12. Amendments to Terms
                </h2>
                <p className="type-15 text-gray-700">
                  We reserve the right to update or modify these Terms and Conditions periodically to
                  reflect evolving clinical guidelines, administrative policies, or regulatory requirements.
                  The current version published on this page will reflect the active policy.
                </p>
              </article>

              {/* Section 13 */}
              <article id="contact" className="scroll-mt-32">
                <h2 className="font-headings type-28 uppercase text-[#1D1A55] mb-4">
                  13. Contact & Inquiries
                </h2>
                <p className="type-15 text-gray-700 mb-4">
                  For questions concerning these Terms, delegate admissions, or workshop policies,
                  please connect with our desk:
                </p>
                <div className="bg-[#f5f8fc] p-6 border-l-4 border-[#00AF9C]">
                  <div className="font-bold text-sm text-[#1D1A55] uppercase mb-1">
                    Admissions & Academic Coordination Desk
                  </div>
                  <div className="text-sm text-gray-700 mb-1">
                    Dr. Neha Arora Verma — Advanced Neuromodulation Techniques
                  </div>
                  <div className="text-sm text-gray-700 mb-1">
                    Venue: A-65 MIG, Behind CHL Hospital, Indore, Madhya Pradesh 452001
                  </div>
                  <div className="text-sm text-gray-700 mb-1">
                    Phone / WhatsApp:{" "}
                    <a href="tel:7470529991" className="font-bold text-[#E9511C] hover:underline">
                      +91 7470529991
                    </a>
                  </div>
                  <div className="text-sm text-gray-700">
                    Email:{" "}
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
