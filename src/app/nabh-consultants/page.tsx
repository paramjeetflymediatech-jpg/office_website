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
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-black tracking-tight">
                Our Smooth & Transparent Process
              </h3>
              <div className="h-1 w-12 bg-black rounded-full"></div>
            </div>

            <div className="text-lg text-gray-600 leading-relaxed space-y-6 font-medium">
              <p>
                Furthermore, FlyMedia Technology follows a smooth and transparent process to acquire national and international NABH Accreditations. We have experience hands concerning prestigious acknowledgements like NABH, NABL and JCI.
              </p>
              <p>
                These protocols are the benchmarks to improve healthcare services quality. Along with, these Accreditation certificates serve the base for process evaluation that further help healthcare units to measure, assess and improve performance.
              </p>
              <p className="border-l-4 border-[#ff9900] pl-6 py-2 text-black font-semibold italic bg-gray-50 rounded-r-xl">
                Consequently, we at FlyMedia Technology strives to deliver superior NABH Accreditation and certification services for healthcare organizations. It is our vast customer engagement, higher success rate and professional experience that poses us to be the choicest NABH consultants in Punjab, India.
              </p>
            </div>

            {/* Core Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-white border border-gray-150 rounded-xl flex flex-col items-center text-center space-y-2 shadow-sm">
                <div className="p-2 bg-[#ff9900]/10 text-[#ff9900] rounded-lg">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="font-bold text-sm text-black">Compliance Audit</h4>
              </div>
              <div className="p-4 bg-white border border-gray-150 rounded-xl flex flex-col items-center text-center space-y-2 shadow-sm">
                <div className="p-2 bg-[#ff9900]/10 text-[#ff9900] rounded-lg">
                  <HeartPulse size={20} />
                </div>
                <h4 className="font-bold text-sm text-black">Quality Assurance</h4>
              </div>
              <div className="p-4 bg-white border border-gray-150 rounded-xl flex flex-col items-center text-center space-y-2 shadow-sm">
                <div className="p-2 bg-[#ff9900]/10 text-[#ff9900] rounded-lg">
                  <GraduationCap size={20} />
                </div>
                <h4 className="font-bold text-sm text-black">Staff Training</h4>
              </div>
            </div>
          </div>

          {/* Right Column: Process Image (5Cols) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[400px]">
              <div className="absolute -inset-4  rounded-full blur-3xl -z-10"></div>
              <div className="p-6 overflow-hidden">
                <Image 
                  src="/nabh-consultants/imagwe-01.png" 
                  alt="Best NABH consultants in Punjab, India" 
                  width={500} 
                  height={500} 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

        </section>

        {/* Section 3: What is NABH? */}
        <section className="p-8 md:p-12 shadow-sm space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-4xl font-serif font-black text-black text-center">What is NABH?</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 text-lg text-gray-600 leading-relaxed font-medium">
            <div className="space-y-6">
              <p>
                <strong className="text-black font-semibold">NABH</strong> is a short form of National Accreditation Board for Hospitals & Healthcare Units. It is formulated with a view to manage accreditation programs for healthcare providers. Following the current scenario, it is the topmost benchmark standard to measure and evaluate hospital quality in India.
              </p>
              <p>
                It is positioned by the Quality Council of India (QCI) following the International Accreditation Standards (IAS) such as JCI, ACHS as well as Canadian Hospital Accreditation Standards. Therefore, NABH is a comprehensive bunch of practical tools to cater to India’s unique health system needs.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Operations & Links (Grid with online-serch.png) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Operations Content (7Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-[#ff9900]">
                Global Connectivity
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-black tracking-tight">
                Functional Autonomy & Reputed Associations
              </h3>
              <div className="h-1 w-12 bg-black rounded-full"></div>
            </div>

            <div className="text-lg text-gray-600 leading-relaxed space-y-6 font-medium">
              <p>
                Today, NABH offers full functional autonomy in its operation, after being backed up by stakeholders like consumers, industry and government. Apart from the domestic circle, NABH also uniforms links to some reputed international organizations.
              </p>
              <p>
                It maintains prestigious global connections with key regulatory bodies:
              </p>
              
              {/* Association List */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-black text-[#ff9900] rounded-md shrink-0 mt-1">
                    <Globe2 size={16} />
                  </div>
                  <div>
                    <strong className="text-black font-semibold">International Society for Quality in Healthcare (ISQua)</strong>
                    <span className="text-gray-600 block text-base">Acting as an institutional and board member.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 bg-black text-[#ff9900] rounded-md shrink-0 mt-1">
                    <Globe2 size={16} />
                  </div>
                  <div>
                    <strong className="text-black font-semibold">Asian Society for Quality in Healthcare (ASQua)</strong>
                    <span className="text-gray-600 block text-base">Contributing actively as a core board member.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: online-serch image (5Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[400px]">
              <div className="absolute -inset-4 bg-[#ff9900]/5 rounded-full blur-3xl -z-10"></div>
              <div className="p-6 overflow-hidden">
                <Image 
                  src="/nabh-consultants/online-serch.png" 
                  alt="Healthcare Marketing and Consultants" 
                  width={500} 
                  height={500} 
                  className="w-full h-auto rounded-[20px] object-cover shadow-lg"
                />
              </div>
            </div>
          </div>

        </section>

        {/* Section 5: Key Areas of Accreditation Services (with ROCKET-FLY.png) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: ROCKET-FLY image (5Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[400px]">
              <div className="absolute -inset-4 bg-[#ff9900]/5 rounded-full blur-3xl -z-10"></div>
              <div className="p-6 overflow-hidden">
                <Image 
                  src="/nabh-consultants/ROCKET-FLY.png" 
                  alt="NABH Key Areas of Accreditation" 
                  width={500} 
                  height={500} 
                  className="w-full h-auto rounded-[20px] object-contain shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Right: Key Areas Content (7Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-[#ff9900]">
                Accreditation Scope
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-black tracking-tight">
                NABH – Key Areas of Accreditation Services
              </h3>
              <div className="h-1 w-12 bg-[#ff9900] rounded-full"></div>
            </div>

            <p className="text-lg text-gray-600 font-medium">
              As of today, NABH is delivering its accreditation services to healthcare organizations listed below:
            </p>

            {/* Service Scope Badges Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white border border-gray-150 rounded-xl shadow-sm">
                  <div className="p-1.5 bg-[#ff9900]/10 text-[#ff9900] rounded-md shrink-0">
                    <Building2 size={16} />
                  </div>
                  <span className="text-sm font-bold text-black">{area}</span>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* Section 6: NABH Assessment Process (10 Steps) */}
        <section className="bg-black text-white rounded-[32px] p-8 md:p-12 border border-white/5 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#ff9900]">
              Evaluation Roadmap
            </span>
            <h3 className="text-3xl md:text-4xl font-serif font-black tracking-tight uppercase">
              NABH Assessment Process
            </h3>
            <p className="text-gray-400 text-base md:text-lg">
              The National Accreditation Board for Hospitals & Healthcare follows a rigorous 10-step method to generate accreditations. NABH panels utilize trained assessors to carry out objective on-site evaluations.
            </p>
          </div>

          {/* 10-Step Timeline/Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {assessmentSteps.map((step, index) => (
              <div 
                key={index} 
                className="bg-[#151515] border border-white/10 p-5 rounded-xl space-y-3 relative overflow-hidden"
              >
                {/* Number Backing */}
                <span className="absolute top-2 right-3 font-serif font-black text-3xl text-white/5 tracking-tighter select-none">
                  {step.num}
                </span>
                
                <div className="text-xs font-black text-[#ff9900] tracking-widest uppercase">
                  Step {step.num}
                </div>
                
                <h4 className="font-bold text-white text-base leading-snug">
                  {step.title}
                </h4>
                
                <p className="text-xs text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Finding the Best Consultants */}
        <section className="space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#ff9900]">
              Industry Experts
            </span>
            <h3 className="text-2xl md:text-4xl font-serif font-black text-black leading-tight">
              How to Find the Best NABH Consultants in Ludhiana, Punjab, India?
            </h3>
            <div className="h-1.5 w-16 bg-[#ff9900] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-lg text-gray-600 leading-relaxed font-medium">
            <div className="space-y-6">
              <p>
                It is no secret that NABH accreditation consultancy services are at a boom now. Healthcare organizations and medical enterprises look forward to obtaining the NABH accreditation certifications to occupy a prestigious place in the industry.
              </p>
              <p>
                If you are also concerned about navigating this path, <strong className="text-black font-semibold">FlyMedia Technology</strong> has a one-stop solution for you. We offer an extensive blend of consultancy services in Punjab, India to healthcare clients seeking industry-driven credentials.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                Further, our NABH consultancy helps firms plan, design, monitor, implement and improve their management systems. At the same time, we promise to impart innovative, effective, value-added, and practical suites of NABH accreditations to businesses across the country.
              </p>
              <p>
                FlyMedia Consultants follows a well-documented approach to handle all your NABH certification requirements. We realize the value of your time and strive hard to obtain certifications in quick time. 100% customer satisfaction, trust, and long-term relationships are our primary motives.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion Block */}
        <section className="bg-gray-50 border border-gray-150 p-8 rounded-[32px] text-lg text-gray-700 leading-relaxed font-medium text-center max-w-4xl mx-auto space-y-4">
          <h4 className="font-serif font-bold text-xl text-black">Conclusion</h4>
          <p>
            NABH Accreditation certification is the need of the hour. It imposes strict policies to ensure better health services for patients within a hospital. If you are new to this domain and need reliable NABH consultants in Ludhiana, FlyMedia Technology is here with the required set of skills and industry experience.
          </p>
        </section>

        {/* Static CTA Bar */}
        <section className="bg-black text-white p-8 md:p-12 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif font-bold text-2xl md:text-3xl">Get Certified to NABH Standards</h3>
            <p className="text-gray-400 text-sm md:text-base">Speak to our expert healthcare accreditation consultants today.</p>
          </div>
          <Link 
            href="/contact-us" 
            className="px-10 py-4 bg-[#ff9900] text-black font-black uppercase tracking-wider rounded-full hover:bg-white transition-all duration-300 text-sm flex items-center gap-2 group shrink-0"
          >
            Request Free Quote
            <ChevronRight size={16} />
          </Link>
        </section>

      </div>
    </div>
  );
}
