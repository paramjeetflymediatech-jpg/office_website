"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Gem,
  Globe, 
  Monitor, 
  Users, 
  Code, 
  PhoneCall
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import ServicePage from "@/components/ServicePage";

// --- Components ---

const ITHeroSection = () => (
  <div className="bg-[#F1F1F1] py-12 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Left Column: Image (Rendered first in both mobile stack and desktop left) */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
            <Image 
              src="/scrap/Archive/flymediatech.com__it-company-in-ludhiana/assets/images/bestr-it-300x250.png" 
              alt="IT Company In Ludhiana" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-black leading-tight">
            Best IT Company in Ludhiana
          </h1>
          <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4">
            <p>
              Best IT Company in Ludhiana, IT Jobs Punjab, Flymedia Technology is consistently working hard to provide its clients with the{" "}
              <Link href="/social-media-optimization" className="text-[#ff9900] font-semibold hover:underline">
                best digital marketing
              </Link>
              ,{" "}
              <Link href="/our-services/web-development" className="text-[#ff9900] font-semibold hover:underline">
                Web development
              </Link>{" "}
              and{" "}
              <Link href="/web-design-company-in-india" className="text-[#ff9900] font-semibold hover:underline">
                Website designing
              </Link>{" "}
              services. It is because of the support of our clients that we are in the league apart and come up as the best IT company in Ludhiana. We do facilitate our upcoming clients with the customized off of the services.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ITExpertServicesSection = () => {
  const services = [
    {
      title: "Strategizing Your Brand",
      desc: "The nature of your business is reflected in the designing of the brand. So it needs to be outlined meticulously. It is the responsibility of the team of flymedia technology that the design and execution of your brand come up with ultimate distinctiveness and elegance.",
      icon: <Gem className="w-6 h-6 text-[#ff9900] group-hover:text-black transition-colors duration-300" />
    },
    {
      title: "Systematic Digital Marketing",
      desc: "We are recognized for making the business of our clients shine through the digital marketing world with immensely cost-effective and traffic-fetching digital marketing strategies.",
      icon: <Globe className="w-6 h-6 text-[#ff9900] group-hover:text-black transition-colors duration-300" />
    },
    {
      title: "Search Engine Optimization",
      desc: "Maximum organic traffic is what makes you rank higher. Our team of SEO corroborates to make your name visible each time the user is active on search engines.",
      icon: <Monitor className="w-6 h-6 text-[#ff9900] group-hover:text-black transition-colors duration-300" />
    },
    {
      title: "Social Media Marketing",
      desc: "To make youth and folks interested in your brand, there is a need to create an effective social media marketing layout that assists them to somehow connect with your brand.",
      icon: <FaInstagram className="w-6 h-6 text-[#ff9900] group-hover:text-black transition-colors duration-300" />
    },
    {
      title: "Pay per Click",
      desc: "When it is about pay per click campaigns, you need a reliable IT company which we assure you ‘We are. We know how much a single penny mean to you, on account of this we make sure that each penny spent comes up with significant profits.",
      icon: <Users className="w-6 h-6 text-[#ff9900] group-hover:text-black transition-colors duration-300" />
    },
    {
      title: "Web Designing & Development",
      desc: "The website is what the user counts on before concluding to approach you for taking up the services. It is the accountability of our adept web developers that your website does not experience bouncing back of the visitors.",
      icon: <Code className="w-6 h-6 text-[#ff9900] group-hover:text-black transition-colors duration-300" />
    }
  ];

  return (
    <div className="py-20 bg-[#F1F1F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-black leading-tight">
            What we are expert at?
          </h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We do have an experienced team of qualified  proficient web developers. Graphic designers, Content writers and Search engine optimization executives who are specialized in the performance of their respective services. Because of them, we can facilitate our clients with the ensuing expert services:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:bg-[#ff9900] transition-all duration-300 shadow-sm">
                  {svc.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-black leading-tight group-hover:text-[#ff9900] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// const ITCallToAction = () => (
//   <div className="py-24 bg-black text-white text-center relative overflow-hidden border-t border-white/5">
//     {/* Decorative blur elements */}
//     <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#ff9900]/10 rounded-full blur-3xl -z-10" />
//     <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl -z-10" />

//     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
//       <span className="text-[#ff9900] text-xs font-bold uppercase tracking-widest bg-[#ff9900]/10 px-4 py-1.5 rounded-full border border-[#ff9900]/20 inline-block">
//         Connect With Ludhiana's Best IT Team
//       </span>
//       <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight max-w-3xl mx-auto">
//         Ready to Scale Your Digital Infrastructure?
//       </h2>
//       <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
//         Let us customize an off of services aligned fully around your brand's specific needs, targets, and goals. Reach out to our specialist team today.
//       </p>
//       <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
//         <Link 
//           href="/contact-us" 
//           className="bg-[#ff9900] text-black font-black px-12 py-4 rounded-xl uppercase tracking-wider hover:bg-white hover:text-black transition-all shadow-lg shadow-[#ff9900]/25 text-sm"
//         >
//           Get In Touch With Us
//         </Link>
//         <Link 
//           href="tel:+919888484310" 
//           className="border border-white/20 text-white font-black px-12 py-4 rounded-xl uppercase tracking-wider hover:bg-white hover:text-black transition-all text-sm flex items-center justify-center gap-2"
//         >
//           <PhoneCall className="w-4 h-4" /> Call +91-98884-84310
//         </Link>
//       </div>
//     </div>
//   </div>
// );

// --- Main Page Component ---

export default function ITCompany() {
  const data = {
    title: "Best IT Company in Ludhiana - IT Companies Jobs Punjab | Flymedia Technology",
    h1: ["Best IT Company in Ludhiana"],
    paragraphs: [
      "Flymedia Technology is consistently working hard to provide its clients with the best digital marketing, Web development and Website designing services. It is because of the support of our clients that we are in the league apart and come up as the best IT company in Ludhiana. We do facilitate our upcoming clients with the customized off of the services.",
      "The nature of your business is reflected in the designing of the brand. So it needs to be outlined meticulously. It is the responsibility of the team of flymedia technology that the design and execution of your brand come up with ultimate distinctiveness and elegance.",
      "We are recognized for making the business of our clients shine through the digital marketing world with immensely cost-effective and traffic-fetching digital marketing strategies.",
    ],
    images: [
      "it.png", "web-develop-1.png", "digital-consultancy-icon.png", "SEO.png", 
      "Pay-per-click111.png", "mobile-marketing-1.png", "logo-design.png", 
      "ecommerce.png", "contentr.png", "r06.png", "r11-1.png", "r09.png"
    ],
    folderName: "flymediatech.com__it-company-in-ludhiana"
  };

  return (
    <ServicePage {...data} bgClass="bg-white">
      <ITHeroSection />
      <ITExpertServicesSection />
      {/* <ITCallToAction /> */}
    </ServicePage>
  );
}
