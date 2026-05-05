"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, CreditCard, Zap, ChevronRight } from "lucide-react";

export default function PaymentGatewaySection() {
  const regions = [
    {
      name: "India",
      gateways: ["CCAvenue", "EBS", "PayPal", "PayUMoney", "Citrus", "Razorpay"],
      color: "bg-orange-50"
    },
    {
      name: "USA",
      gateways: ["PayPal", "Authorize.net", "Skrill", "Stripe"],
      color: "bg-blue-50"
    },
    {
      name: "UK",
      gateways: ["Worldpay", "Sage Pay", "Barclaycard"],
      color: "bg-red-50"
    },
    {
      name: "Australia",
      gateways: ["SecurePay", "eWAY", "NAB Transact"],
      color: "bg-green-50"
    }
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Section 1: Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-tight">
              Driving Global Revenue Through Seamless Payments
            </h2>
            <div className="h-1.5 w-24 bg-[#ff9900] rounded-full"></div>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 font-medium">
              <p>
                In the digital era, a secure and smooth payment experience is the backbone of e-commerce success. Flymedia Technology provides expert payment gateway integration services that build trust and ensure high conversion rates.
              </p>
              <p>
                Whether you are targeting local customers or an international audience, our solutions are designed to handle transactions securely across multiple currencies and platforms.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Secure", icon: <ShieldCheck className="w-8 h-8" />, desc: "PCI-DSS Compliant" },
              { title: "Global", icon: <Globe className="w-8 h-8" />, desc: "Multi-currency" },
              { title: "Fast", icon: <Zap className="w-8 h-8" />, desc: "Instant Settlements" },
              { title: "Flexible", icon: <CreditCard className="w-8 h-8" />, desc: "All Major Cards" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white shadow-lg rounded-sm border-t-4 border-[#ff9900] text-center space-y-2 hover:shadow-2xl transition-all"
              >
                <div className="text-[#ff9900] flex justify-center">{feature.icon}</div>
                <h4 className="font-bold text-black uppercase tracking-tighter">{feature.title}</h4>
                <p className="text-xs text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Regional Gateways */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">Categorized Gateway Integration</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We support all major payment providers across different regions to ensure your business is ready for the world.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`${region.color} p-8 rounded-sm shadow-sm hover:shadow-xl transition-all h-full flex flex-col`}
              >
                <h3 className="text-2xl font-serif font-bold text-black mb-6 border-b-2 border-black/10 pb-2">
                  {region.name}
                </h3>
                <ul className="space-y-4 flex-grow">
                  {region.gateways.map((gw, gIdx) => (
                    <li key={gIdx} className="flex items-center gap-3 text-gray-700 font-medium">
                      <ChevronRight className="w-4 h-4 text-[#ff9900]" />
                      {gw}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Call to Action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="bg-black text-white p-12 rounded-sm shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff9900] opacity-10 blur-3xl"></div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to start accepting payments?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
            Our experts will help you choose the right gateway and handle the entire integration process from A to Z.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ff9900] text-black px-12 py-5 font-black uppercase tracking-tighter rounded-sm hover:bg-white transition-all shadow-2xl"
          >
            Get Integrated Now
          </motion.button>
        </div>
      </section>
    </div>
  );
}
