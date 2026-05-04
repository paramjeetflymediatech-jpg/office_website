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
}

export default function ServicePage({ title, h1, paragraphs, mainContent, images, folderName }: ServicePageProps) {
  // Convert remote image URLs to local paths based on the folder name
  // Handle both provided names and the default image_N.png pattern
  const localImages = images.map((img, index) => {
    if (img && img.trim() !== "") {
      return `/scrap/Archive/${folderName}/assets/images/${img}`;
    }
    return `/scrap/Archive/${folderName}/assets/images/image_${index}.png`;
  });

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-black flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Authentic Grayscale Butterfly Pattern */}
          <div className="absolute inset-0 opacity-[0.12] scale-110 pointer-events-none">
             <Image 
               src="/image.png" 
               alt="Background Pattern" 
               fill
               className="object-cover object-left"
               priority
             />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
           >
             {h1?.[0] || title}
           </motion.h1>
           <motion.div 
             initial={{ width: 0 }}
             animate={{ width: 96 }}
             className="h-1 bg-[#ff9900] mx-auto rounded-full"
           ></motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
           <Image src="/image.png" alt="Background Pattern" fill className="object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
             {/* Left: Text Content */}
             <div className="lg:col-span-8 space-y-8">
                {paragraphs.map((p, i) => p.trim() && (
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    {p}
                  </motion.p>
                ))}
                
                <div className="pt-10">
                   <Link href="/contact-us" className="inline-block bg-[#ff9900] text-black font-black px-10 py-4 rounded-sm uppercase tracking-tighter hover:bg-black hover:text-white transition-all shadow-xl">
                      Start Your Project
                   </Link>
                </div>
             </div>

             {/* Right: Sidebar */}
             <div className="lg:col-span-4 space-y-8">
                <div className="bg-white p-8 border border-gray-100 shadow-2xl rounded-sm">
                   <h3 className="text-xl font-bold mb-6 border-l-4 border-[#ff9900] pl-4 uppercase tracking-tighter">Our Expertise</h3>
                   <div className="grid grid-cols-2 gap-4">
                      {localImages.slice(2, 12).map((img, i) => (
                        <div key={i} className="relative h-24 bg-gray-100 rounded-sm overflow-hidden group border border-gray-100">
                           <Image 
                             src={img} 
                             alt={`Expertise ${i}`} 
                             fill 
                             sizes="200px"
                             className="object-contain p-2 group-hover:scale-110 transition-transform"
                             onError={(e) => {
                               (e.target as any).style.display = 'none';
                             }}
                           />
                        </div>
                      ))}
                   </div>
                </div>

                <div className="bg-black text-white p-8 rounded-sm shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                       <Image src="/logo.png" alt="Flymedia" width={100} height={40} className="grayscale invert" style={{ height: 'auto' }} />
                    </div>
                   <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter text-[#ff9900]">Why Choose Flymedia?</h3>
                   <ul className="space-y-4 text-sm text-gray-300 font-medium">
                      <li className="flex gap-3">
                         <span className="text-[#ff9900] font-bold">✓</span>
                         <span>Expert Team of Professionals</span>
                      </li>
                      <li className="flex gap-3">
                         <span className="text-[#ff9900] font-bold">✓</span>
                         <span>100% Satisfaction Guarantee</span>
                      </li>
                      <li className="flex gap-3">
                         <span className="text-[#ff9900] font-bold">✓</span>
                         <span>Proven Track Record since 2011</span>
                      </li>
                      <li className="flex gap-3">
                         <span className="text-[#ff9900] font-bold">✓</span>
                         <span>Transparent Communication</span>
                      </li>
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="bg-black py-20 text-white text-center border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">Ready to grow your <span className="text-[#ff9900]">Business?</span></h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Join hundreds of successful businesses who trust Flymedia Technology for their digital growth.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="/contact-us" className="bg-[#ff9900] text-black font-black px-12 py-4 rounded-sm uppercase tracking-tighter hover:bg-white transition-all">Get A Free Quote</Link>
               <Link href="tel:+919888484310" className="border border-white/20 text-white font-black px-12 py-4 rounded-sm uppercase tracking-tighter hover:bg-white hover:text-black transition-all">Call +91-98884-84310</Link>
            </div>
         </div>
      </section>
    </main>
  );
}
