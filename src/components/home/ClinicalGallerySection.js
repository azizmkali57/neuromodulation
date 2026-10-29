"use client";

import React, { useState } from "react";

const clinicalGalleries = [
  {
    id: 1,
    title: "Bedside Clinical Assessment & Patient Mobility",
    category: "CLINICAL PRACTICE",
    location: "Shree Namoh Wellness Clinic",
    image: "/images/clinical-moments/clinical-consultation-patient.jpg",
    aspect: "landscape",
    summary: "Hands-on functional evaluation, movement pattern assessment, and personalized recovery roadmaps."
  },
  {
    id: 2,
    title: "Neuroplasticity Masterclass & Practitioner Fellowship",
    category: "PROFESSIONAL TRAINING",
    location: "Clinical Workshop Hall",
    image: "/images/clinical-moments/clinical-masterclass.jpg",
    aspect: "landscape",
    summary: "Supervised clinician training on non-invasive neuromodulation techniques and device calibration."
  },
  {
    id: 3,
    title: "Active Motor Re-education & Movement Rehabilitation",
    category: "PARALYSIS REHABILITATION",
    location: "Neuro Rehabilitation Unit",
    image: "/images/clinical-moments/clinical-rehab-session.jpg",
    aspect: "landscape",
    summary: "Targeted sensory-motor stimulation drills for post-stroke recovery and functional independence."
  },
  {
    id: 4,
    title: "National Healthcare Excellence Recognition",
    category: "LEADERSHIP & RECOGNITION",
    location: "National Medical Summit",
    image: "/images/clinical-moments/clinical-award-presentation.jpg",
    aspect: "landscape",
    summary: "Honored on prestigious national platforms for leadership in neuroplasticity and paralysis recovery."
  },
  {
    id: 5,
    title: "Live Device Demonstration & Clinical Protocols",
    category: "HANDS-ON DEMONSTRATION",
    location: "Advanced Clinical Suite",
    image: "/images/clinical-moments/clinical-hands-on-demo.jpg",
    aspect: "landscape",
    summary: "Translating neurological theory into precise clinical execution under direct directorial guidance."
  },
  {
    id: 6,
    title: "Lakwa Mukt Bharat Community Outreach & Awareness",
    category: "COMMUNITY IMPACT",
    location: "Public Healthcare Forum",
    image: "/images/clinical-moments/clinical-stage-seminar.jpg",
    aspect: "landscape",
    summary: "Nationwide movement empowering families, patients, and healthcare providers across Central India."
  }
];

export default function ClinicalGallerySection() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section className="py-20 sm:py-28 bg-[#f5f8fc] border-t border-b border-[#BDDFEC] overflow-hidden" id="transparency-gallery">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header: Broad, Editorial & Authoritative */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E9511C]"></span>
              <span className="font-headings text-xs sm:text-sm uppercase tracking-widest text-[#E9511C] font-bold">
                CLINICAL TRANSPARENCY &amp; GROUNDWORK
              </span>
            </div>
            <h2
              className="font-headings text-3xl sm:text-5xl lg:text-6xl uppercase text-[#1D1A55] tracking-tight leading-[1.05]"
              style={{ maxWidth: "16em" }}
            >
              DR. NEHA ARORA VERMA IN CLINICAL ACTION
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-600 max-w-md leading-relaxed">
            Real bedside care, hands-on masterclasses, and national leadership. Authentic glimpses into how Lakwa Mukt Bharat and Shree Namoh Wellness translate science into human recovery.
          </p>
        </div>

        {/* Professional Editorial Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {clinicalGalleries.map((item) => (
            <figure
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative bg-white border border-[#BDDFEC] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1D1A55]">
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="font-headings text-[11px] uppercase tracking-wider px-2.5 py-1 rounded bg-[#1D1A55]/90 text-white font-bold backdrop-blur-sm shadow">
                    {item.category}
                  </span>
                </div>

                {/* Subdued Gradient Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1A55]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5">
                    View Moment
                    <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Caption & Context Block */}
              <figcaption className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <h3 className="font-headings text-base sm:text-lg text-[#1D1A55] uppercase leading-snug mb-2 group-hover:text-[#E9511C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-semibold uppercase tracking-wider">
                  <span>{item.location}</span>
                  <span className="text-[#00AF9C]">Documented</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Bottom Clinical Transparency Footer Strip */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-white border border-[#BDDFEC] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#00AF9C]/15 text-[#00AF9C] flex items-center justify-center font-headings text-xl font-bold flex-shrink-0">
              ✓
            </div>
            <div>
              <h4 className="font-headings text-sm sm:text-base uppercase text-[#1D1A55] font-bold">
                100% Genuine Clinical &amp; Academic Documentation
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Every photograph documents authentic patient interventions, accredited clinician masterclasses, and real recovery journeys.
              </p>
            </div>
          </div>

          <a
            href="/directors/dr-neha-arora-verma"
            className="font-headings text-xs sm:text-sm uppercase px-6 py-3 bg-[#1D1A55] text-white hover:bg-[#E9511C] transition-colors rounded font-bold tracking-wider whitespace-nowrap shadow"
          >
            Read Dr. Neha&apos;s Profile
          </a>
        </div>

      </div>

      {/* Lightbox Modal on Image Click */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-[700] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl border border-white/20"
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors cursor-pointer"
            >
              ✕
            </button>
            <div className="aspect-[16/10] w-full bg-black">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 bg-white">
              <span className="font-headings text-xs uppercase px-2 py-0.5 rounded bg-[#00AF9C]/15 text-[#00AF9C] font-bold tracking-wider inline-block mb-2">
                {activePhoto.category}
              </span>
              <h3 className="font-headings text-lg sm:text-xl text-[#1D1A55] uppercase mb-2">
                {activePhoto.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                {activePhoto.summary}
              </p>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                Location: {activePhoto.location}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

