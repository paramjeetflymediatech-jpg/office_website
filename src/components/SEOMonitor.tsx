"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const SCREENSHOTS = [
  "/image_70.png",
  "/image_69.png",
  "/image_71.png"
];

export default function SEOMonitor() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SCREENSHOTS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-[4/3]">
      {/* Monitor Frame */}
      <Image
        src="/image_68.png"
        alt="Desktop Monitor"
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
        priority
      />
      {/* Screenshot inside Monitor with Transition - z-20 for visibility */}
      <div className="absolute top-[6.5%] left-[5%] w-[90%] h-[68%] overflow-hidden rounded-t-sm z-20">
        {SCREENSHOTS.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`SEO Website Preview ${index + 1}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 700px"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
