"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function DigitalMarketingPackages() {
  return (
    <main className="min-h-screen bg-[#EFEFEF]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-sm font-bold text-[#ff9900] mb-6">
            <CheckCircle2 size={16} />
            Best Digital Marketing Packages
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight max-w-4xl">
            Digital Marketing <span className="text-[#ff9900]">Packages</span> India
          </h1>

          <div className="mt-8 space-y-6 text-[15px] sm:text-base text-gray-600 leading-relaxed max-w-3xl">
            <p>
              Flymedia Technology offers affordable and result-oriented digital marketing packages in India. We combine various strategies to help your business reach its full online potential.
            </p>
            <p>
              Our packages include a mix of SEO, social media marketing, content strategy, and PPC management, providing a holistic approach to your digital growth and brand awareness.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact-us"
              className="px-8 py-4 bg-[#ff9900] text-black font-bold rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
