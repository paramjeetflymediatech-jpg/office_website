"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

const CLIENTS = [
  "vardhman.png", "sofat.png", "softlogic.png", "manas-hospital.png",
  "vjs.png", "mitra-eye.png", "nk-dairy.png", "mom-dad-finance.png",
  "itech.png", "ameritus.png", "safe-drive.png", "ananta-ayurveda.png",
  "sweepy-maid.png", "deepakheart.png", "meat-mechanics.png", "grand-pavilion.png",
  "sweepy-scrub.png", "kalyan-diagnostics.png", "italian-corner.png", "super.png",
  "ayush-ayurveda.jpg", "sha-clinics.png", "smile-zone.png", "taste-of-india.png",
  "ludhiana-dental.png", "avani.png", "bright-wood.png", "ludhianadental.png"
];

export default function ClientsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 0.8; // Adjust speed here
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-black text-black">
            Our Clients
          </h2>
        </div>
      </div>

      {/* Mobile Automated Slider */}
      <div 
        ref={scrollRef}
        className="flex md:hidden overflow-hidden border-t border-b border-gray-100 whitespace-nowrap"
      >
        {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((img, index) => (
          <div
            key={`${img}-${index}`}
            className="border-r border-gray-100 h-32 flex items-center justify-center p-8 min-w-[200px] shrink-0"
          >
            <div className="relative w-full h-full ">
              <Image
                src={`/images/clients/${img}`}
                alt="Client Logo"
                fill
                sizes="200px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop & Tablet Grid View */}
      <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-l border-gray-100">
        {CLIENTS.map((img, index) => (
          <div
            key={index}
            className="border-b border-r border-gray-100 h-40 flex items-center justify-center p-8 hover:bg-gray-50 transition-colors group"
          >
            <div className="relative w-full h-full">
              <Image
                src={`/images/clients/${img}`}
                alt="Client Logo"
                fill
                sizes="25vw"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
