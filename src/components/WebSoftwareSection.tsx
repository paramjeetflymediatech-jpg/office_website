"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Cloud, Zap, ShieldCheck } from "lucide-react";
import TypewriterText from "@/components/TypewriterText";

export default function WebSoftwareSection() {
  const benefits = [
    "Saves time as you always get to use the latest version.",
    "Saves you from long downloading.",
    "Saves you money as you do not have to buy new CDs or programs"
  ];

  return (
    <div className="space-y-24 lg:space-y-32 pb-24">
      {/* Section 1: Hero & Benefits */}
      <section className="overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Side: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-8"
            >
              <div className="space-y-4">
                 <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-serif font-bold text-black leading-tight">
                   Web Based Software’s Provide You Many Benefits Like:
                 </h2>
                 <div className="h-1.5 w-24 bg-[#ff9900] rounded-full"></div>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all border-l-4 border-[#ff9900]"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#ff9900] flex-shrink-0 mt-0.5" />
                    <span className="text-lg font-medium text-gray-800">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side: Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative flex justify-center"
            >
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  x: [0, 10, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-10 w-full max-w-[500px]"
              >
                <Image 
                  src="/images/online-serch.png" 
                  alt="Web Based Software Benefits" 
                  width={1000} 
                  height={1000} 
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: What is Web Software? */}
      <section className="bg-black text-white py-24 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image src="/image.png" alt="pattern" fill className="object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#ff9900]">
                Modern Web Software Solutions
              </h3>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Software used on the internet via a web browser is web software’s. For such software’s you do not require any CDs and neither do you have to download any software from the net.
                </p>
                <p>
                  If you are thinking this is a new technology well, be amazed because most of you have almost used them. <span className="text-white font-semibold">Yahoo Mail, Gmail, Twitter, Facebook</span> and Hotline are some of the most widely used web based software’s.
                </p>
                <p>
                  With <span className="text-white font-semibold">Web Based Software Development Services</span> you get software’s that do not require to be installed or maintained. They can be used on any device with net connection and they provide data storage and most of all important they are secure for your data even, personal.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "No Installation", desc: "Use directly in your browser without any setup.", icon: <Zap className="w-8 h-8" /> },
                { title: "Any Device", desc: "Access your software from anywhere with an internet connection.", icon: <Cloud className="w-8 h-8" /> },
                { title: "Secure Data", desc: "Enterprise-grade security for your personal and business data.", icon: <ShieldCheck className="w-8 h-8" /> },
                { title: "Always Updated", desc: "Never worry about versions; you always get the latest features.", icon: <Zap className="w-8 h-8" /> }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-[#ff9900] mb-3">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
