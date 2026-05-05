"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EcommercePricingTable() {
  const plans = ["Budget", "Starter", "Advanced", "Pro"];
  
  const features = [
    { name: "Number of Pages", values: ["Upto 25 Pages", "Upto 50 Pages", "Upto 100 Pages", "Unlimited"] },
    { name: "Website design concepts", values: ["1", "1", "2", "3"] },
    { name: "Content Changes", values: ["1", "1", "2", "5"] },
    { name: "Content Management System (CMS)", values: [true, true, true, true] },
    { name: "Number of Products", values: ["50", "100", "Unlimited", "Unlimited"] },
    { name: "Multiple payment Options", values: ["Only 1", "Upto 2", "Upto 3", "Upto 5"] },
    { name: "Analytics & Sales Reports", values: [false, true, true, true] },
    { name: "Full Order Management", values: ["Basic", true, true, true] },
    { name: "Shipping Management", values: [false, false, true, true] },
    { name: "Tax Management", values: [false, true, true, true] },
    { name: "Advanced Search Facility", values: [false, false, true, true] },
    { name: "Advance Filtering", values: [false, false, true, true] },
    { name: "Promotions & Discounts", values: [false, true, true, true] },
    { name: "Newsletter Signup", values: [false, false, true, true] },
    { name: "Blog", values: [false, false, true, true] },
    { name: "Zipcode Availability", values: [false, false, false, true] },
    { name: "Voucher Code", values: [false, false, false, true] },
    { name: "Quick View (Modal)", values: [false, false, false, true] },
    { name: "Cash on Delivery", values: [false, true, true, true] },
    { name: "Featured Products (Home Page)", values: [false, true, true, true] },
    { name: "Facebook Login", values: [false, true, true, true] },
    { name: "Credits System", values: [false, false, false, true] },
    { name: "Transaction Email API", values: [false, false, true, true] },
    { name: "SMS Integration", values: [false, false, true, true] },
    { name: "Visual Features: Slide show, Lightbox Gallery, Interactive map, Enquiry form", values: [true, true, true, true] },
    { name: "Social media: Facebook, Twitter, Google+, Linkedin Group page setup", values: [false, false, true, true] },
    { name: "Email Accounts", values: [false, "2", "3", "5"] },
    { name: "Free .com Domain name", values: [true, true, true, true] },
    { name: "On Page SEO Features (SEO not included)", values: [true, true, true, true] },
    { name: "Google Analytics implementation", values: [true, true, true, true] },
    { name: "12 Months Website Hosting", values: [false, true, true, true] },
    { name: "Duration of Project", values: ["2 Week", "3 Week", "3-4 Week", "5-6 Week"], isBold: true },
    { name: "Training & Support", values: [false, true, true, true] },
    { name: "Support & Maintenance", values: ["1 Month", "3 Month", "6 Month", "1 Year"], isBold: true },
  ];

  return (
    <div className="overflow-x-auto font-sans">
      <div className="max-w-[1400px] mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="min-w-[1000px] border border-gray-300 rounded-lg overflow-hidden shadow-2xl"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-300">
                <th className="text-black p-6 font-bold text-lg uppercase tracking-tight w-[30%]">
                  CHOOSE YOUR PLAN
                </th>
                {plans.map((plan, i) => (
                  <th key={i} className="text-black p-6 font-bold text-xl text-center w-[17.5%] border-l border-gray-300">
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-[#1A1A1A]">
              {features.map((feature, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors duration-150 border-b border-gray-300">
                  <td className={`p-5 text-white ${feature.isBold ? "font-bold" : "font-medium text-[15px]"}`}>
                    {feature.name}
                  </td>
                  {feature.values.map((v, vIdx) => (
                    <td key={vIdx} className="p-5 border-l border-gray-300 text-center relative group">
                      {typeof v === "boolean" ? (
                        <div className="flex justify-center">
                          {v ? (
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                            </svg>
                          ) : (
                            <div className="w-6 h-6 rounded-full border-2 border-white/20 flex items-center justify-center">
                              <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
                              </svg>
                            </div>
                          )}
                        </div>
                      ) : v === "Basic" ? (
                        <div className="flex items-center justify-center gap-2">
                           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                           </svg>
                           <span className="text-white/60 text-xs font-medium uppercase tracking-tighter">(Basic)</span>
                        </div>
                      ) : (
                        <span className={`text-white ${feature.isBold ? "font-bold text-white" : "font-medium"} text-[15px]`}>
                          {v}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-black/20 font-bold border-t border-gray-300">
                <td className="p-6 text-white font-bold text-lg uppercase tracking-tight">Cost Per Month</td>
                {plans.map((_, idx) => (
                  <td key={idx} className="p-6 text-center border-l border-gray-300">
                    <div className="flex justify-center">
                      <a 
                        href="/contact-us" 
                        className="inline-block bg-[#ff9900] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-black transition-all transform hover:scale-105 shadow-lg text-sm"
                      >
                        Contact Us
                      </a>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </motion.div>
        <p className="text-center text-sm text-gray-500 mt-8 italic">* Followers cannot be guaranteed without any paid activity.</p>
      </div>
    </div>
  );
}
