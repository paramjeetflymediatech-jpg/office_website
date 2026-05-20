"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  UserCheck, 
  ShieldCheck, 
  Activity, 
  Heart,
  TrendingUp
} from "lucide-react";
import ServicePage from "@/components/ServicePage";
import ContactFormSection from "@/components/ContactFormSection";

// --- Hero Section ---
const PatientAppointmentsHero = () => {
  const features = [
    { icon: <Calendar className="text-[#FA7E09]" size={24} />, text: "Automated Booking Funnels" },
    { icon: <UserCheck className="text-[#FA7E09]" size={24} />, text: "Higher Patient Retention" },
    { icon: <ShieldCheck className="text-[#FA7E09]" size={24} />, text: "HIPAA Compliant SEO" },
    { icon: <Activity className="text-[#FA7E09]" size={24} />, text: "Multi-Channel Exposure" },
  ];

  return (
    <div className="bg-[#F1F1F1] pt-16 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Details */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-black leading-tight">
                Healthcare Marketing & Patient Appointment Scheduling
              </h1>
              <p className="text-lg font-semibold text-[#FA7E09]">
                Fill your clinic's calendar with high-intent patient inquiries.
              </p>
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              Are you looking to streamline patient bookings and grow your medical practice? Flymedia Technology provides world-class digital marketing and appointment acquisition strategies designed specifically for clinics, hospitals, and specialized surgeons. We make sure patients seeking your medical specialty find you first, trust you immediately, and book online effortlessly.
            </p>

            {/* Grid of features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 leading-tight">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Image */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[460px]">
              <Image 
                src="/cosmetic-surgery-digital-marketing/MAIN.png" 
                alt="Patient Appointments Healthcare Marketing Illustration" 
                width={600} 
                height={600} 
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Custom Parallax Feature Section ---
const ParallaxAppointmentsSection = () => (
  <section 
    className="relative py-28 overflow-hidden bg-cover bg-center bg-fixed flex items-center justify-center"
    style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/bgimg.png')",
    }}
  >
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white relative z-10 space-y-8">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-white max-w-4xl mx-auto">
        Grow Your Medical Practice Brand Authority Dynamically
      </h2>
      <p className="text-lg sm:text-xl font-serif leading-relaxed max-w-5xl mx-auto">
        We bridge the gap between patient suffering and medical solutions. By optimizing local SEO profiles, ranking specialist pages, and configuring booking automation, your medical office will experience consistent growth.
      </p>
    </div>
  </section>
);

// --- Core Medical Services ---
const CoreMedicalSection = () => {
  const cards = [
    {
      title: "Medical Local SEO",
      desc: "Rank in the Google 3-Pack for queries like 'specialist surgeon near me' or 'best hospital in Chandigarh' with complete local profiles.",
      icon: <Activity className="text-[#FA7E09]" size={28} />
    },
    {
      title: "Reputation Management",
      desc: "Drive positive ratings across Google Maps, Practo, and medical directories to establish outstanding patient trust.",
      icon: <ShieldCheck className="text-[#FA7E09]" size={28} />
    },
    {
      title: "Booking Optimization",
      desc: "Integrate easy-to-use, quick booking systems, call widgets, and interactive contact panels directly on your site.",
      icon: <Calendar className="text-[#FA7E09]" size={28} />
    },
    {
      title: "Specialty Content writing",
      desc: "Deliver authoritative, medical-expert reviewed advice articles that satisfy search algorithms and build patient authority.",
      icon: <Heart className="text-[#FA7E09]" size={28} />
    }
  ];

  return (
    <section className="py-20 bg-[#EFEFEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">
            Our Patient Booking Solutions
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-medium">
            We configure specialized medical funnels to drive real appointment bookings, phone calls, and visits.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#EFEFEF] border border-gray-200 p-8 rounded-2xl flex flex-col items-center text-center space-y-6 hover:shadow-lg transition-all duration-300 shadow-sm"
            >
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-black">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- Main Container ---
export default function PatientAppointmentsPage() {
  const pageSEO = {
    title: "Healthcare Digital Marketing & Patient Appointment Services | Flymedia",
    h1: ["Patient Appointment Marketing"],
    paragraphs: [
      "Grow your clinic with customized digital marketing for healthcare providers. We specialize in driving patient appointments and local Google ranking."
    ],
    folderName: "flymediatech.com_home",
    images: ["r02.png"]
  };

  return (
    <ServicePage {...pageSEO} bgClass="bg-white">
      <PatientAppointmentsHero />
      <ParallaxAppointmentsSection />
      <CoreMedicalSection />
      <ContactFormSection />
    </ServicePage>
  );
}
