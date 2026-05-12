"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getPortfolioItems } from "@/app/actions/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function AustraliaPortfolio() {
  const [portfolioItems, setPortfolioItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const dbData = await getPortfolioItems();
        
        // Filter DB items for Australia
        const targetedDbItems = dbData
          .filter((item: any) => (item.location || "australia").toLowerCase() === "australia")
          .map((item: any) => ({
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
          }));

        let finalItems = targetedDbItems;

        // If DB has no items uploaded for Australia, use the beautiful default fallback images
        if (finalItems.length === 0) {
          finalItems = [
            { id: "au-1", title: "Meat Mechanics", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/meat-mechanics.png" },
            { id: "au-2", title: "Lakeview Dental", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/lakeview.png" },
            { id: "au-3", title: "Grand Indian Cuisine", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/grand-indian-cuisine.png" },
            { id: "au-4", title: "Grand Bukhara", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/grand-bukhara.png" },
            { id: "au-5", title: "Cholas Restaurant", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/cholas-2.png" },
            { id: "au-6", title: "Binge Café", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/binge.png" },
            { id: "au-7", title: "Asees Indian Restaurant", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/asees-1.png" },
            { id: "au-8", title: "TGP Portal", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/TGP-1.png" },
            { id: "au-9", title: "Sylvania Retailers", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/sylvania-1.png" },
            { id: "au-10", title: "Pizza Shed", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/pizza-shed-2.png" },
            { id: "au-11", title: "NTH Consulting", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/nth-1.png" },
            { id: "au-12", title: "Yes Nurse", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/yes-nurse.png" },
            { id: "au-13", title: "Singh Finance", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/singh-finance.png" },
            { id: "au-14", title: "NES Electrical", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/NES-electrical.png" },
            { id: "au-15", title: "Mom & Dad Healthcare", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/mom-and-dad.png" },
            { id: "au-16", title: "MIG Enterprises", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/MIG-enterprises.png" },
            { id: "au-17", title: "AB Logistics", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/AB-1.png" },
          ];
        }

        setPortfolioItems(finalItems);
      } catch (err) {
        console.error("Error loading portfolio items:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : portfolioItems.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((prev) => (prev !== null && prev < portfolioItems.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <>
      {/* 5. Same-To-Same Elementor 4-Column Grid Portfolio Section */}
      <section className="py-24 px-4 overflow-hidden  elementor-element elementor-element-32d311f e-flex e-con-boxed wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no e-con e-parent e-lazyloaded" data-id="32d311f" data-element_type="container">
        {/* Custom Styles */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* Webpage Auto-Scroll Hover Effect */
          .scroll-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            transition: object-position 5s ease-in-out;
          }
          .scroll-container:hover .scroll-img {
            object-position: bottom;
          }
        `}} />

        <div className="max-w-7xl mx-auto e-con-inner">
          
          {/* Elementor Subheading Text-Editor Widget */}
          <div className="elementor-element elementor-element-75cc7f7 elementor-widget elementor-widget-text-editor text-center mb-16" data-id="75cc7f7" data-element_type="widget" data-widget_type="text-editor.default">
            <div className="elementor-widget-container">
              <p className="text-4xl md:text-5xl font-extrabold text-black tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Portfolio
              </p>
            </div>
          </div>

          {/* Elementor Gallery Widget Container */}
          <div className="elementor-element elementor-element-471e947 elementor-widget elementor-widget-gallery" data-id="471e947" data-element_type="widget" data-widget_type="gallery.default">
            <div className="elementor-widget-container">
              <div className="elementor-gallery__container e-gallery-container e-gallery-grid e-gallery--ltr e-gallery--lazyload">
                
                {loading ? (
                  <div className="flex items-center justify-center py-20">
                    <div className="w-12 h-12 border-4 border-[#ff9900]/20 border-t-[#ff9900] rounded-full animate-spin" />
                  </div>
                ) : portfolioItems.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px]">
                    {portfolioItems.map((item, idx) => (
                      <div
                        key={item.id}
                        onClick={() => setSelectedImageIdx(idx)}
                        className="scroll-container group relative aspect-[3/2] bg-white overflow-hidden border border-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
                      >
                        {/* Image Frame with Auto-Scrolling on Hover */}
                        <div className="relative w-full h-full overflow-hidden bg-[#FBFBFB]">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className="scroll-img"
                            sizes="(max-width: 768px) 100vw, 25vw"
                            unoptimized
                          />
                        </div>
                        
                        {/* Hover Glass Overlay Fade */}
                        {/* <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white text-xs font-bold tracking-wider uppercase bg-[#ff9900] px-4 py-2 rounded-full shadow-lg scale-90 group-hover:scale-100 transition-all duration-300">
                            Zoom View
                          </span>
                        </div> */}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-100">
                    <Search size={32} className="mx-auto text-gray-300 mb-3" />
                    <h4 className="text-gray-900 font-bold text-lg">No Projects Found</h4>
                    <p className="text-gray-400 text-sm">We are currently updating our portfolio. Check back soon!</p>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Slideshow Modal with Slider Controls */}
      <AnimatePresence>
        {selectedImageIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10"
            onClick={() => setSelectedImageIdx(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-6 right-6 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all shadow-md z-50"
              onClick={() => setSelectedImageIdx(null)}
            >
              <X size={24} />
            </motion.button>

            {/* Slider Navigation: Prev */}
            <button
              onClick={handlePrev}
              className="absolute left-6 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all shadow-md z-50 hidden sm:block"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Enlarged Image container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none"
            >
              <div className="relative w-full max-w-5xl h-full max-h-[80vh] pointer-events-auto">
                <Image
                  src={portfolioItems[selectedImageIdx].imageUrl}
                  alt={portfolioItems[selectedImageIdx].title}
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
              <p className="text-white font-semibold mt-4 text-center text-sm tracking-wide bg-black/40 py-2 px-6 rounded-full border border-white/10">
                {portfolioItems[selectedImageIdx].title}
              </p>
            </motion.div>

            {/* Slider Navigation: Next */}
            <button
              onClick={handleNext}
              className="absolute right-6 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all shadow-md z-50 hidden sm:block"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
