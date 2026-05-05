"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
    { name: "Link social accounts to website", values: [true, true, true, true] },
    { name: "Add social icons to website", values: [true, true, true, true] },
    { name: "Marketing strategy setup", values: [false, false, true, true] },
  ];

  return (
    <div className="py-24 overflow-x-auto text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-black mb-4 tracking-tighter">Social Media Branding</h2>
          <div className="h-1.5 w-24 bg-white mx-auto rounded-full"></div>
        </motion.div>

        <div className="min-w-[900px] pb-12">
          <table className="w-full border-collapse rounded-sm overflow-hidden shadow-[0_0_50px_rgba(255,153,0,0.1)] border border-white/10">
            <thead>
              <tr className="bg-[#111] text-white text-center border-b border-white/20">
                <th className="p-8 text-left font-serif text-2xl border-r border-white/10 uppercase tracking-widest text-[#ff9900]">Plan Features</th>
                {plans.map((plan, idx) => (
                  <th key={idx} className="p-8 font-serif text-xl border-r border-white/10 last:border-r-0">
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <motion.tr 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className={`${idx % 2 === 0 ? "bg-black" : "bg-[#080808]"} hover:bg-[#151515] transition-colors border-b border-white/5`}
                >
                  <td className="p-6 font-medium text-gray-300 border-r border-white/10 text-lg uppercase tracking-tight">{feature.name}</td>
                  {feature.values.map((v, vIdx) => (
                    <td key={vIdx} className="p-6 text-center border-r border-white/10 last:border-r-0">
                      <div className="flex justify-center">
                        <Image 
                          src={v ? "/images/clickIcon.png" : "/images/crossIcon.png"} 
                          alt={v ? "Included" : "Not Included"} 
                          width={24} 
                          height={24}
                          className="transition-transform group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] w-auto h-auto"
                        />
                      </div>
                    </td>
                  ))}
                </motion.tr>
              ))}
              <tr className="bg-[#111] font-bold border-t border-[#ff9900]/30">
                <td className="p-8 text-2xl font-serif border-r border-white/10 text-[#ff9900]">Cost Per Month</td>
                {plans.map((_, idx) => (
                  <td key={idx} className="p-8 text-center border-r border-white/10 last:border-r-0">
                    <a 
                      href="/contact-us" 
                      className="inline-block bg-[#ff9900] text-black px-4 py-2 rounded-sm font-black tracking-tighter hover:bg-white transition-all shadow-[0_10px_30px_rgba(255,153,0,0.3)] active:scale-95"
                    >
                      Contact Us
                    </a>
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
