"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TypewriterText from "@/components/TypewriterText";

export default function DigitalMarketingSection() {
  return (
    <section className=" overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side: Rocket Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative flex justify-center"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-10 w-full max-w-[500px]"
            >
              <Image 
                src="/images/rocket.png" 
                alt="Best SMO & Digital Marketing Company" 
                width={550} 
                height={550} 
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(255,153,0,0.2)]"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="space-y-3">
               <h2 className="text-[36px] sm:text-[42px] md:text-[50px] lg:text-[50px] font-serif font-bold text-black leading-[40px] md:leading-[56px] uppercase tracking-tighter flex flex-col min-h-[80px] md:min-h-[112px]">
                 <TypewriterText text="Generate More Leads" speed={50} />
                 <TypewriterText text="Generate More Revenue" speed={60} />
               </h2>
               <div className="h-1.5 w-20 bg-[#ff9900] rounded-full mt-4"></div>
            </div>

            <div className="space-y-4 text-base md:text-[16px] text-gray-700 leading-relaxed font-medium">
              <p>
                North India’s best Digital Marketing Company in Ludhiana, Punjab: Award winning 
                <span className="text-black font-bold"> Flymedia Technology</span> captures the right combination of digital marketing skills to be the best SMO social media marketing company in Ludhiana. 
              </p>
              <p>
                We possess the result-driven mechanism for brands to cultivate the maximum conversions via specific social media marketing strategies.
              </p>
              <p>
                When it comes to promoting brands online, social media channels erupt as one of the best online marketing tools. 
                Accordingly, Flymedia Technology utilizes the trending authorities for your business to create connections, and increase sales and website traffic.
              </p>
            </div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pt-4"
            >
              <button className="bg-black text-white px-10 py-5 font-black uppercase tracking-tighter rounded-sm hover:bg-[#ff9900] hover:text-black transition-all shadow-2xl flex items-center gap-3 group">
                Scale Your Brand
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
