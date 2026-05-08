"use client";

import React from "react";
import Image from "next/image";
import { ChevronsRight } from "lucide-react";

export default function HowWeWork() {
  const successFactors = [
    "Flymedia Technology Quality Policy",
    "Quality Objectives",
    "Continuous Improvement & Learning",
    "Customer Driven Quality",
    "Product Conformance & Deliverables",
    "Quality Product and Services"
  ];

  return (
    <div className="min-h-screen bg-[#EFEFEF] font-sans pb-20">
      
      {/* Hero / Header Section */}
      <section className="pt-20 pb-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-12">
            <Image 
              src="/how-we-work/new02.png" 
              alt="How We Work" 
              width={800} 
              height={313} 
              className="mx-auto w-full h-auto object-contain drop-shadow-xl"
              priority
            />
          </div>
          
          <h1 className="text-4xl md:text-3xl lg:text-5xl font-serif font-bold text-black leading-tight ">
            PROCESS LEADS THE WAY
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8  space-y-10">
            
            {/* Paragraphs */}
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
              <p>
                Now Let’s start with this question in mind. What is essential to get a business idea so successful? Does it solely depends upon the experienced team who are working over your idea or is it creativeness in your idea? or anything else? But the truth is actual implementation process is very different and demands a lot of time and continuous work and also a firm strategy and proper planning to execute the proper workflow.
              </p>
              <p>
                The proper management and planning will tell the success of a project. We follow all the essential protocols to make a project successful. We before implementing belief in the firm co-ordination between our client’s needs and resources available and execute the best in that set period of time and budget. To impress the Clients with fortunate and well-to-do results.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Success Factors List */}
            <div className="space-y-6">
              <h4 className="text-2xl md:text-3xl font-serif font-semibold text-black tracking-tight">
                HOW WE MAKE YOUR PROJECTS SUCCESSFUL
              </h4>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {successFactors.map((factor, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronsRight className="w-6 h-6 text-[#ff9900] mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-lg">{factor}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
