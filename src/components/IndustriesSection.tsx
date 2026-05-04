import React from "react";
import Image from "next/image";

const INDUSTRIES = [
  { name: "Medical", icon: "/images/industries/medical.png" },
  { name: "Restaurants", icon: "/images/industries/restaurants.png" },
  { name: "Car Rentals", icon: "/images/industries/car-rentals.png" },
  { name: "Technology", icon: "/images/industries/technology.png" },
  { name: "Nut Bolts", icon: "/images/industries/nut-bolts.png" },
  { name: "Textile", icon: "/images/industries/textile.png" },
  { name: "Steel", icon: "/images/industries/steel.png" },
  { name: "Construction", icon: "/images/industries/construction.png" },
  { name: "Music", icon: "/images/industries/music.png" },
  { name: "Real Estate", icon: "/images/industries/real-estate.png" },
];

export default function IndustriesSection() {
  return (
    <section
      className="relative py-16 md:py-16 overflow-hidden bg-[#854105]"
    >
      {/* Fixed Background Layer */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none bg-fixed bg-center bg-no-repeat bg-cover invert grayscale"
        style={{ backgroundImage: "url('/image copy.png')" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-serif font-black">
            Our Industries
          </h2>
<p className="max-w-6xl mx-auto text-lg md:text-xl opacity-90 leading-relaxed font-medium md:text-justify">            Consistently expanding our horizons, the best digital marketing company in India provides services to a diverse array of industries, including textile, healthcare, food, steel, finance, transport, and travel. With extensive knowledge and impeccable skills, we have pledged to deliver nothing but complete satisfaction to our clients, creating a new success story every day.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-16">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.name}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="relative w-20 h-20 mb-6 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  fill
                  sizes="80px"
                  className="object-contain brightness-0 invert" // Ensures icons are white
                />
              </div>
              <h3 className="text-xl font-bold tracking-wide">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
