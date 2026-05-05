"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServicePageProps {
  title: string;
  h1: string[];
  paragraphs: string[];
  mainContent?: string;
  images: string[];
  folderName: string;
  children?: React.ReactNode;
  bgClass?: string;
}

export default function ServicePage({ title, h1, paragraphs, mainContent, images, folderName, children, bgClass = "bg-white" }: ServicePageProps) {
  // Convert remote image URLs to local paths based on the folder name
  // Handle both provided names and the default image_N.png pattern
  const localImages = images.map((img, index) => {
    if (img && img.trim() !== "") {
      return `/scrap/Archive/${folderName}/assets/images/${img}`;
    }
    return `/scrap/Archive/${folderName}/assets/images/image_${index}.png`;
  });

  return (
    <main className={`min-h-screen ${bgClass} font-sans`}>
      {/* Hero Section */}
     

      {/* Full Width Content Section */}
      {mainContent && (
        <section className="py-20 border-t border-gray-100">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose prose-lg max-w-none text-gray-800 whitespace-pre-wrap font-sans leading-relaxed">
                 {mainContent.split('\n\n').slice(1).join('\n\n')}
              </div>
           </div>
        </section>
      )}

      {/* Custom Content (e.g. Pricing Table) */}
      {children && (
        <div className="w-full">
           {children}
        </div>
      )}

      {/* CTA Section */}
      {/* <section className="bg-black py-20 text-white text-center border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">Ready to grow your <span className="text-[#ff9900]">Business?</span></h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Join hundreds of successful businesses who trust Flymedia Technology for their digital growth.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="/contact-us" className="bg-[#ff9900] text-black font-black px-12 py-4 rounded-sm uppercase tracking-tighter hover:bg-white transition-all">Get A Free Quote</Link>
               <Link href="tel:+919888484310" className="border border-white/20 text-white font-black px-12 py-4 rounded-sm uppercase tracking-tighter hover:bg-white hover:text-black transition-all">Call +91-98884-84310</Link>
            </div>
         </div>
      </section> */}
    </main>
  );
}
