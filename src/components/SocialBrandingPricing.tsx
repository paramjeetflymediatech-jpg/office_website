"use client";

import Link from "next/link";

export default function SocialBrandingPricing() {
  const plans = ["Social Lite", "Facebook Kit", "Social Elite", "Social MegaPack"];

  const features = [
    { name: "Facebook Cover", values: [true, true, true, true] },
    { name: "Facebook Welcome Landing Page", values: [false, true, false, true] },
    { name: "Twitter Banner", values: [true, false, true, true] },
    { name: "YouTube Channel Design", values: [false, false, true, true] },
    { name: "Google+ Branding", values: [true, false, true, true] },
    { name: "LinkedIn Group setup", values: [false, false, true, true] },
    { name: "Pinterest Account", values: [false, false, false, true] },
    { name: "PLUS – FREE Avatar Creation", values: [true, true, true, true] },
    { name: "Link your social media accounts to your website", values: [true, true, true, true] },
    { name: "Add social media icons to your website and link these to your social profiles", values: [true, true, true, true] },
    { name: "Set-up, design and develop your online marketing strategy as per your package account.", values: [false, false, true, true] },
  ];

  return (
    <div className="bg-[#F1F1F1] py-16 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-[46px] font-serif font-bold text-[#111111]">
            Social Media Branding
          </h2>
        </div>

        {/* Scrollable Table Wrapper */}
        <div className="overflow-x-auto rounded-sm border border-gray-300 shadow-sm bg-white">
          <table className="w-full min-w-[950px] border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-300">
                <th className="p-5 text-left font-bold text-black uppercase tracking-wider text-xs md:text-sm border-r border-gray-300 w-[40%]">
                  CHOOSE YOUR PLAN
                </th>
                {plans.map((plan, idx) => (
                  <th key={idx} className="p-5 text-center font-bold text-black text-sm md:text-base border-r border-gray-300 last:border-r-0 w-[15%]">
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={idx}
                  className="bg-[#181818] border-b border-[#292929] transition-colors duration-150 hover:bg-[#202020]"
                >
                  <td className="p-5 text-left font-medium text-white text-xs md:text-[13px] border-r border-[#292929] leading-relaxed">
                    {feature.name}
                  </td>
                  {feature.values.map((val, valIdx) => (
                    <td key={valIdx} className="p-5 text-center border-r border-[#292929] last:border-r-0">
                      <div className="flex justify-center items-center">
                        {val ? (
                          // White Checkmark
                          <span className="text-white text-lg font-bold select-none">✓</span>
                        ) : (
                          // Circled white "x"
                          <div className="w-5 h-5 rounded-full border border-white/70 flex items-center justify-center text-[10px] font-bold text-white/90 select-none">
                            x
                          </div>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
              
              {/* Cost Per Month / Button Row */}
              <tr className="bg-[#181818]">
                <td className="p-5 text-left font-bold text-white text-xs md:text-sm border-r border-[#292929]">
                  Cost Per Month
                </td>
                {plans.map((_, idx) => (
                  <td key={idx} className="p-5 text-center border-r border-[#292929] last:border-r-0">
                    <Link
                      href="/contact-us"
                      className="inline-block bg-[#ff9900] hover:bg-[#FA7E09] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-150"
                    >
                      Contact Us
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
