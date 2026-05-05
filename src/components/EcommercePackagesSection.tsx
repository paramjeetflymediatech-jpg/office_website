"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TypewriterText from "@/components/TypewriterText";

export default function EcommercePackagesSection() {
  return (
    <div className="space-y-24 pb-24">
      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 ">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-tight flex flex-col">
                <TypewriterText text="What are Ecommerce Websites?" speed={50} />
               
              </h2>
            </div>
            
            <div className="text-lg text-gray-700 leading-relaxed space-y-6 font-medium">
              <p>
                Electronic commerce websites are the virtual platforms where transactions of payments and sales are conducted. In today's digital age, the traditional method of selling products is rapidly becoming outdated.
              </p>
              <p>
                Every retailer is shifting towards selling products online, following the footsteps of giants like Flipkart and Amazon. Businessmen either develop their own independent websites or collaborate with major marketplaces to reach a global audience.
              </p>
              <p>
                The primary benefit of having an ecommerce website is the ability to reach a massive customer base across different states and cities, saving both time and energy for the modern consumer.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#ff9900]/10 rounded-full blur-3xl group-hover:bg-[#ff9900]/20 transition-all"></div>
              <Image 
                src="/images/e01.png" 
                alt="Ecommerce Website Development" 
                width={800} 
                height={560} 
                className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Building an Ecommerce Website */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-tight">
                  Building an Ecommerce website:
                </h2>
                <div className="h-1.5 w-24 bg-[#ff9900] rounded-full"></div>
              </div>
              
              <div className="text-lg text-gray-700 leading-relaxed space-y-6 font-medium">
                <p>
                  As mentioned earlier, there are two primary ways to establish your online presence. The first is building your own independent customized website. This path allows for maximum brand control and tailored features, though it involves lifelong investment in development and maintenance.
                </p>
                <p>
                  For those with a limited budget seeking a hassle-free start, tying up with larger ecommerce marketplaces is an excellent alternative. This strategy provides immediate access to a massive existing customer base and handles the technical complexities on your behalf.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#ff9900]/10 rounded-full blur-3xl group-hover:bg-[#ff9900]/20 transition-all"></div>
                <Image 
                  src="/images/E02.png" 
                  alt="Building an Ecommerce website" 
                  width={1000} 
                  height={1000} 
                  className="relative z-10 w-full h-auto drop-shadow-2xl transition-transform duration-500 hover:rotate-3 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
