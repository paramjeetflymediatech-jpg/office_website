"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  HeartPulse, 
  GraduationCap, 
  ChevronRight, 
  Globe2, 
  Building2, 
  Award, 
  ClipboardCheck, 
  Users, 
  Heart, 
  Zap, 
  Compass
} from "lucide-react";

import ContactFormSection from "@/components/ContactFormSection";


export default function NABHConsultants() {
  const serviceAreas = [
    "Hospitals",
    "Small Healthcare Units",
    "Wellness Centres",
    "Dental Facilities",
    "Ayush Hospitals",
    "Oral Substitution Therapy Units",
    "Medical Imaging Services",
    "Blood Banks",
    "Medical Testing Laboratories"
  ];

  const assessmentSteps = [
    { num: "01", title: "Acquire prospects", desc: "Create a copy of NABH prospects and information booklets." },
    { num: "02", title: "Self-assessment", desc: "Perform comprehensive self-assessment in compliance with NABH standards." },
    { num: "03", title: "Gap analysis", desc: "Recognize gaps and formulate a concrete plan to overcome them." },
    { num: "04", title: "Implementation", desc: "Ensure NABH standards are fully authorized and integrated with hospital operations." },
    { num: "05", title: "Submit application", desc: "Generate and submit the NABH application form for scrutiny." },
    { num: "06", title: "Pay accreditation fees", desc: "Complete the payment of the standard NABH accreditation charges." },
    { num: "07", title: "Receive assessment plan", desc: "Accept assessment details from NABH mentioning dates and assessor names." },
    { num: "08", title: "Support assessment", desc: "Provide full support and cooperation to the NABH assessment program on-site." },
    { num: "09", title: "Get recommendations", desc: "Receive official NABH accreditation recommendations and address feedback." },
    { num: "10", title: "Regular monitoring", desc: "Ensure a quality improvement system by regular monitoring of patient care." }
  ];

  return (
    <div className="min-h-screen bg-[#F1F1F1] font-sans selection:bg-[#ff9900]/30 text-gray-800">
      
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24 ">
        
        {/* Section 1: Logo & Introduction (Row 1 of original WordPress page) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: NABH Logo (4Cols) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full flex items-center justify-center">
              <div className="absolute inset-4  -z-0 rounded-2xl"></div>
              <Image 
                src="/nabh-consultants/nabh-logo.png" 
                alt="NABH Consultants In Ludhiana, Punjab" 
                width={200} 
                height={200} 
                className="relative z-10 object-contain w-80 h-80"
                priority
              />
            </div>
          </div>

          {/* Right Column: Title and Content (8Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif font-black text-black tracking-tight leading-tight">
              NABH Consultants in Punjab, India
            </h2>
            <div className="h-1.5 w-16 bg-[#ff9900] rounded-full"></div>

            <div className="text-lg text-gray-600 leading-relaxed space-y-6 font-medium">
              <p>
                <strong className="text-black font-semibold">NABH Consultants in Ludhiana, Punjab:</strong> When it comes to opting for the best NABH consultancy services in Ludhiana, Punjab, FlyMedia Technology has no exception. It helps clients with flexible consultancy solutions by implementing in-house tactics to get certified to NABH standards benignly.
              </p>
              <p>
                Since our inception, we have walked a long journey in the consultancy services domain. With a prideful history and demonstration of reliable policies, FlyMedia Technology have become the apex choice of customers. They approach us for end-to-end NABH consultancy, incorporating implementation support, training, and audit to obtain the certification as per NABH Accreditation and guidelines.
              </p>
            </div>
          </div>

        </section>

        {/* Section 2: Process & Image (Row 2 of original WordPress page) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Process Content (7Cols) */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1 text-sm sm:text-base md:text-[17px] text-gray-700 leading-relaxed font-medium font-sans">
            <p>
              Furthermore, FlyMedia Technology follows a smooth and transparent process to acquire national and international NABH Accreditations. We have experience hands concerning prestigious acknowledgements like NABH, NABL and JCI.
            </p>
            <p>
              These protocols are the benchmarks to improve healthcare services quality. Along with, these Accreditation certificates serve the base for process evaluation that further help healthcare units to measure, assess and improve performance.
            </p>
            <p>
              Consequently, we at FlyMedia Technology strives to deliver superior NABH Accreditation and certification services for healthcare organizations. It is our vast customer engagement, higher success rate and professional experience that poses us to be the choicest NABH consultants in Punjab, India.
            </p>
          </div>

          {/* Right Column: Process Image (5Cols) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[400px]">
              <Image 
                src="/nabh-consultants/imagwe-01.png" 
                alt="Best NABH consultants in Punjab, India" 
                width={500} 
                height={500} 
                className="w-full h-auto"
              />
            </div>
          </div>

        </section>

        {/* Section 3: What is NABH? (Centered layout match) */}
        <section className="max-w-7xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black leading-tight text-center">
            What is NABH?
          </h2>

          <div className="space-y-6 text-sm sm:text-base md:text-[17px] text-gray-700 leading-relaxed font-medium font-sans">
            <p>
              NABH is a short form of National Accreditation Board for Hospitals & Healthcare Units. It is formulated with a view to manage accreditation programs for healthcare providers. Following the current scenario, it is the topmost benchmark standard to measure and evaluate hospital quality in India.
            </p>
            <p>
              It is positioned by the Quality Council of India (QCI) following the International Accreditation Standards (IAS) such as JCI, ACHS as well as Canadian Hospital Accreditation Standards. Therefore, NABH is a comprehensive bunch of practical tools to cater to India's unique health system needs.
            </p>
            <p>
              Further, the International Society for Quality Assurance (ISQua) in Healthcare acknowledged NABH as an international accreditation within just 2 years of its launch.
            </p>
          </div>
        </section>

        {/* Section 4: Operations & Links (Connections match) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Operations Content (7Cols) */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base md:text-[17px] text-gray-700 leading-relaxed font-medium font-sans">
            <p>
              Today, NABH offers full functional autonomy in its operation, after being backed up by stakeholders like consumers, industry and government. Apart from the domestic circle, NABH also uniforms links to some reputed international organizations.
            </p>
            <p>
              It has connections with;
            </p>
            
            <ul className="list-disc pl-6 space-y-3">
              <li>International Society for Quality in Healthcare (ISQua) as an institutional and board member</li>
              <li>Asian Society for Quality in Healthcare (ASQua) as a board member</li>
            </ul>
          </div>

          {/* Right: Search Image (5Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[400px]">
              <Image 
                src="/nabh-consultants/online-serch.png" 
                alt="Healthcare Marketing and Consultants" 
                width={500} 
                height={500} 
                className="w-full h-auto"
              />
            </div>
          </div>

        </section>

        {/* Section 5: Key Areas of Accreditation Services (with ROCKET-FLY.png match) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: ROCKET-FLY image (5Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[400px]">
              <Image 
                src="/nabh-consultants/ROCKET-FLY.png" 
                alt="NABH Key Areas of Accreditation" 
                width={500} 
                height={500} 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right: Key Areas Content (7Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-serif font-bold text-black leading-tight">
              NABH – Key Areas of Accreditation Services
            </h2>

            <p className="text-sm sm:text-base md:text-[17px] text-gray-700 font-medium font-sans">
              As of today, NABH is delivering its accreditation services to healthcare organizations listed below:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base md:text-[17px] text-gray-700 font-medium font-sans">
              <li>Hospitals</li>
              <li>Small Healthcare Units</li>
              <li>Wellness Centres</li>
              <li>Dental Facilities</li>
              <li>Ayush Hospitals</li>
              <li>Oral Substitution Therapy Units</li>
              <li>Medical Imaging Services</li>
              <li>Blood Banks</li>
              <li>Medical Testing Laboratories</li>
            </ul>
          </div>

        </section>

        {/* Section 6: NABH Assessment Process (10 Steps - Orange Container Match) */}
        <section className="bg-[#FA7E09] text-white rounded-[24px] p-8 md:p-12 space-y-6 shadow-md relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white tracking-tight leading-none">
            NABH Assessment Process
          </h2>
          
          <div className="space-y-4 text-white text-sm sm:text-base md:text-lg leading-relaxed font-sans font-medium">
            <p>
              The National Accreditation Board for Hospitals & Healthcare follows the 10-step method to generate accreditations. On its panel, NABH contains two or more trained and qualified assessors to perform the objective evaluation of hospitals.
            </p>
            <p>
              In the NABH Assessment Process, communication with patients, residents and staff is followed. It includes on-site visits to patient care areas as well. Here're the steps under the NABH Assessment Process:
            </p>
          </div>

          <div className=" text-white text-sm sm:text-base md:text-lg leading-relaxed font-sans font-medium">
            <div className="flex gap-2">
              <span className="shrink-0 font-bold">1.</span>
              <p>Create a copy of NABH prospects</p>
            </div>
            <div className="flex gap-2">
              <span className="shrink-0 font-bold">2.</span>
              <p>Perform self-assessment in compliance with NABH standards</p>
            </div>
            <div className="flex gap-2">
              <span className="shrink-0 font-bold">3.</span>
              <p>Recognize gaps and form a plan to overcome it</p>
            </div>
            <div className="flex gap-2">
              <span className="shrink-0 font-bold">4.</span>
              <p>Make sure NABH standards are fully authorized for implementation and integration with hospital modus operandi</p>
            </div>
            <div className="flex gap-2">
              <span className="shrink-0 font-bold">5.</span>
              <p>Generate and submit NABH application form for further scrutiny</p>
            </div>
            <div className="flex gap-2">
              <span className="shrink-0 font-bold">6.</span>
              <p>Pay the NABH accreditation charges</p>
            </div>
            <div className="flex gap-2">
              <span className="shrink-0 font-bold">7.</span>
              <p>Accept assessment details from NABH mentioning dates and assessor's names</p>
            </div>
            <div className="flex gap-2">
              <span className="shrink-0 font-bold">8.</span>
              <p>Support NABH assessment program</p>
            </div>
            <div className="flex gap-2">
              <span className="shrink-0 font-bold">9.</span>
              <p>Get NABH accreditation recommendations</p>
            </div>
            <div className="flex gap-2">
              <span className="shrink-0 font-bold">10.</span>
              <p>Ensure quality improvement system by regular monitoring of patient care services</p>
            </div>
          </div>
        </section>

        {/* Section 7: Finding the Best Consultants (Single Column Layout Match) */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-serif font-black text-black leading-tight">
            How to Find the Best NABH Consultants in Ludhiana, Punjab, India?
          </h2>

          <div className="space-y-6 text-sm sm:text-base md:text-[17px] text-gray-700 leading-relaxed font-medium font-sans">
            <p>
              It is no secret that NABH accreditation consultancy services are at boom now. Health organizations and medical enterprises look forward to obtaining the NABH accreditation certifications to occupy a prestigious place in the industry.
            </p>
            <p>
              If you are also panic about the same, here FlyMedia Technology has a one-stop solution for you. It offers an extensive blend of consultancy services in Punjab, India to clients looking for industry-driven credentials.
            </p>
            <p>
              Further, our NABH consultancy help firms plan, design, monitor, implement and improve their management system. At the same time, we also promise to impart innovative, effective, value-added and practical suites of NABH accreditations to businesses across the country.
            </p>
            <p>
              FlyMedia Consultants follows a well-documented approach to handle your all NABH certification requirements. Furthermore, we realize the value of your time and strive hard to obtain your certifications in quick time. 100% customer satisfaction, trust and long-term relationships are some of our prime motives. We never think twice to walk an extra mile when it comes to achieving these standards.
            </p>
          </div>
        </section>

        {/* Conclusion Block */}
        <section className="bg-[#EFEFEF] p-8 rounded-[32px] text-lg text-gray-700 leading-relaxed font-medium  max-w-7xl mx-auto space-y-4">
          <h4 className="font-serif font-bold text-xl text-black text-start text-2xl md:text-3xl lg:text-4xl">Conclusion</h4>
          <p>
            NABH Accreditation certification is the need of the hour. It imposes strict policies to ensure better health services for patients within a hospital. If you are new to this domain and need reliable NABH consultants in Ludhiana, FlyMedia Technology is here with the required set of skills and industry experience.
          </p>
        </section>
        <ContactFormSection />
              </div>
    </div>
  );
}
