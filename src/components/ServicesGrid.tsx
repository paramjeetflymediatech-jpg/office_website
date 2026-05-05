"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  UserCheck,
  Monitor,
  FileCode2,
  Code2,
  GitBranch,
  Box,
  Database,
  Headphones,
  ChevronRight,
  ChevronsRight
} from "lucide-react";

const SERVICES = [
  {
    title: "Social Media Marketing",
    description: "Engage your customers with the most engaging platforms.",
    icon: <UserCheck className="w-12 h-12" />,
    image: "https://flymediatech.com/wp-content/uploads/2024/04/i01.jpg",
    href: "/social-media-optimization"
  },
  {
    title: "Search Engine Marketing",
    description: "Stay at the top of the game with every search.",
    icon: <Monitor className="w-12 h-12" />,
    image: "https://flymediatech.com/wp-content/uploads/2024/04/img02.jpg",
    href: "/our-services/seo-marketing-services/"
  },
  {
    title: "Google Adwords",
    description: "Speak your business to customers with creativity at its best.",
    icon: <FileCode2 className="w-12 h-12" />,
    image: "https://flymediatech.com/wp-content/uploads/2024/04/img04.jpg",
    href: "/pay-per-click-ppc/"
  },
  {
    title: "Meta Ads",
    description: "Innovate, captivate and walk on the path of digital dominance.",
    icon: <Code2 className="w-12 h-12" />,
    image: "https://flymediatech.com/wp-content/uploads/2024/04/img05.jpg",
    href: "/an-instagram-marketing-company-in-ludhiana/"
  },
  {
    title: "Marketing Strategy",
    description: "Stay ahead of the market curve with phenomenal strategies.",
    icon: <GitBranch className="w-12 h-12" />,
    image: "https://flymediatech.com/wp-content/uploads/2024/04/img06.jpg",
    href: "/how-we-work/"
  },
  {
    title: "Website Design And Development",
    description: "Be the one-stop shop with mind-blowing website designs.",
    icon: <Box className="w-12 h-12" />,
    image: "https://flymediatech.com/wp-content/uploads/2024/03/IIMG01.jpg",
    href: "/our-services/web-designing/"
  },
  {
    title: "Logos & Brand Design",
    description: "Shape your dreams and turn them into a magnificent reality.",
    icon: <Database className="w-12 h-12" />,
    image: "https://flymediatech.com/wp-content/uploads/2024/04/im08.jpg",
    href: "/logo-design/"
  },
  {
    title: "Content Marketing",
    description: "Build your brand's credibility and integrity with compelling content.",
    icon: <Headphones className="w-12 h-12" />,
    image: "https://flymediatech.com/wp-content/uploads/2024/04/imgh08.jpg",
    href: "/content-writing/"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-[#F1F1F1] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-black mb-6 leading-tight">
          Let Us Pave The Way To Your Brand's Success
        </h1>
        <p className="max-w-4xl mx-auto text-gray-700 text-sm md:text-base font-medium leading-relaxed mb-10">
          Committed to providing remarkable service to clients, the best digital marketing company in India is here to bring your vision to life and shape your digital destiny. With years of experience and expertise in digital marketing, we have helped countless clients realise the full potential of their business and attain the summit of success.
        </p>

        <div className="flex justify-center">
          <Link
            href="/contact-us"
            className="bg-[#ff9900] text-white font-bold px-8 py-3 rounded-full flex items-center gap-3 hover:bg-black transition-all shadow-lg"
          >
            Contact Us
            <ChevronsRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="relative h-[320px] rounded-[2rem] overflow-hidden group cursor-pointer bg-white transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              {/* Background Image Container (Hidden by default, zooms and fades in on hover) */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out scale-100 group-hover:scale-110">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Amber/Orange Overlay */}
                  <div className="absolute inset-0 bg-[#ff9900]/85 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>

              {/* Inner "Jazz" Border (Appears on hover) */}
              <div className="absolute inset-5 border-2 border-white opacity-0 group-hover:opacity-20 transition-all duration-500 z-10 pointer-events-none transform scale-95 group-hover:scale-100"></div>

              {/* Content Container */}
              <div className="relative h-full p-8 flex flex-col items-center justify-center text-center z-20 transition-transform duration-500 group-hover:-translate-y-3">
                {/* Icon */}
                <div className="mb-6 text-black group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(service.icon as React.ReactElement<any>, {
                    className: "w-12 h-12 stroke-[1.5]"
                  })}
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold mb-4 leading-tight text-black group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-sm font-medium leading-relaxed mb-8 text-gray-600 group-hover:text-white/90 transition-colors duration-300 max-w-[240px]">
                  {service.description}
                </p>

                {/* Button */}
                <Link
                  href={service.href}
                  className="bg-black group-hover:bg-[#ff9900] text-white text-xs font-bold px-8 py-3 rounded-full flex items-center gap-2 border border-black group-hover:border-white transition-all duration-300"
                >
                  Explore
                  <ChevronsRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
