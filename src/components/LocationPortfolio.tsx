"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { getPortfolioItems } from "@/app/actions/portfolio";
import { X, Maximize2, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LocationPortfolioProps {
  location: "australia" | "india" | "canada";
}

interface PortfolioItem {
  id: number | string;
  title: string;
  imageUrl: string;
  category: string;
  location: string;
}

// 1. Fallback Curated Data Matrix for initial load
const AUSTRALIA_FALLBACKS: PortfolioItem[] = [
  { id: "au-1", title: "Meat Mechanics", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/meat-mechanics.png", category: "Web Design", location: "australia" },
  { id: "au-2", title: "Lakeview Dental", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/lakeview.png", category: "Web Development", location: "australia" },
  { id: "au-3", title: "Grand Indian Cuisine", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/grand-indian-cuisine.png", category: "Web Design", location: "australia" },
  { id: "au-4", title: "Grand Bukhara", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/grand-bukhara.png", category: "Web Development", location: "australia" },
  { id: "au-5", title: "Cholas Restaurant", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/cholas-2.png", category: "Web Design", location: "australia" },
  { id: "au-6", title: "Binge Café", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/binge.png", category: "Web Development", location: "australia" },
  { id: "au-7", title: "Asees Indian Restaurant", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/asees-1.png", category: "Web Design", location: "australia" },
  { id: "au-8", title: "TGP Portal", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/TGP-1.png", category: "SEO & SMO", location: "australia" },
  { id: "au-9", title: "Sylvania Retailers", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/sylvania-1.png", category: "Web Design", location: "australia" },
  { id: "au-10", title: "Pizza Shed", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/pizza-shed-2.png", category: "Web Development", location: "australia" },
  { id: "au-11", title: "NTH Consulting", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/nth-1.png", category: "SEO & SMO", location: "australia" },
  { id: "au-12", title: "Yes Nurse", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/yes-nurse.png", category: "Web Design", location: "australia" },
  { id: "au-13", title: "Singh Finance", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/singh-finance.png", category: "Web Development", location: "australia" },
  { id: "au-14", title: "NES Electrical", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/NES-electrical.png", category: "Web Design", location: "australia" },
  { id: "au-15", title: "Mom & Dad Healthcare", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/mom-and-dad.png", category: "Web Development", location: "australia" },
  { id: "au-16", title: "MIG Enterprises", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/MIG-enterprises.png", category: "SEO & SMO", location: "australia" },
  { id: "au-17", title: "AB Logistics", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/AB-1.png", category: "Web Design", location: "australia" },
];

const INDIA_FALLBACKS: PortfolioItem[] = [
  { id: "in-1", title: "TechCorp India", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/meat-mechanics.png", category: "Web Development", location: "india" },
  { id: "in-2", title: "Royal Rajasthan Tourism", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/lakeview.png", category: "Web Design", location: "india" },
  { id: "in-3", title: "Mumbai Bazaars", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/grand-indian-cuisine.png", category: "Web Development", location: "india" },
  { id: "in-4", title: "Veda Wellness", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/grand-bukhara.png", category: "SEO & SMO", location: "india" },
  { id: "in-5", title: "Delhi Foodies App", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/cholas-2.png", category: "Web Design", location: "india" },
];

const CANADA_FALLBACKS: PortfolioItem[] = [
  { id: "ca-1", title: "Maple Leaf Logistics", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/sylvania-1.png", category: "Web Development", location: "canada" },
  { id: "ca-2", title: "Toronto Heights Real Estate", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/pizza-shed-2.png", category: "Web Design", location: "canada" },
  { id: "ca-3", title: "Quebec Bistro Portal", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/nth-1.png", category: "Web Development", location: "canada" },
  { id: "ca-4", title: "Rocky Mountain Adventures", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/yes-nurse.png", category: "SEO & SMO", location: "canada" },
  { id: "ca-5", title: "Ontario FinTech", imageUrl: "https://flymediatech.com/australia/wp-content/uploads/2024/05/singh-finance.png", category: "Web Design", location: "canada" },
];

export default function LocationPortfolio({ location }: LocationPortfolioProps) {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Pagination / Load More settings
  const [visibleCount, setVisibleCount] = useState(12);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function load() {
      try {
        const dbData = await getPortfolioItems();
        
        // Filter DB items for this specific location
        const targetedDbItems = dbData
          .filter((item: any) => (item.location || "australia").toLowerCase() === location.toLowerCase())
          .map((item: any) => ({
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            category: item.category || "General",
            location: item.location || "australia",
          }));

        let finalItems: PortfolioItem[] = targetedDbItems;

        // If DB has no target items, fall back to our beautiful presets
        if (finalItems.length === 0) {
          if (location === "australia") {
            finalItems = AUSTRALIA_FALLBACKS;
          } else if (location === "india") {
            finalItems = INDIA_FALLBACKS;
          } else if (location === "canada") {
            finalItems = CANADA_FALLBACKS;
          }
        }

        setItems(finalItems);
        setFilteredItems(finalItems);

        // Calculate unique categories
        const uniqCats = Array.from(new Set(finalItems.map((item) => item.category)))
          .filter((cat) => cat && cat !== "All")
          .sort((a, b) => a.localeCompare(b));

        setCategories(["All", ...uniqCats]);
      } catch (err) {
        console.error("Error loading portfolio items:", err);
        // Robust fallback on error
        const backup = location === "australia" ? AUSTRALIA_FALLBACKS : location === "india" ? INDIA_FALLBACKS : CANADA_FALLBACKS;
        setItems(backup);
        setFilteredItems(backup);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [location]);

  // Handle activeCategory change
  useEffect(() => {
    let result = items;
    if (activeCategory !== "All") {
      result = items.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());
    }
    setFilteredItems(result);
    setVisibleCount(12);
  }, [activeCategory, items]);

  // Infinite Scroll Observer
  useEffect(() => {
    if (visibleCount >= filteredItems.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 12, filteredItems.length));
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [visibleCount, filteredItems.length]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-12 h-12 border-4 border-[#ff9900]/20 border-t-[#ff9900] rounded-full animate-spin" />
      </div>
    );
  }

  const currentVisibleItems = filteredItems.slice(0, visibleCount);

  return (
    <div className="space-y-12 w-full">
      
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 border-2 ${
              activeCategory === cat
                ? "bg-black border-black text-white shadow-lg scale-105"
                : "bg-white border-gray-100 text-gray-500 hover:border-[#ff9900] hover:text-[#ff9900]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Portfolio Showcase */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {currentVisibleItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (index % 12) * 0.04 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-gray-200 border border-gray-100 aspect-[3/2] cursor-pointer transition-all duration-300"
                onClick={() => setSelectedImage(item.imageUrl)}
              >
                <div className="relative w-full h-full p-3 bg-[#FCFCFC] flex items-center justify-center">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    unoptimized
                  />
                </div>

                {/* Glass Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-1.5">
                    <span className="text-[#ff9900] text-[10px] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-white text-lg font-serif font-bold leading-tight">
                      {item.title}
                    </h3>
                    <div className="w-6 h-[2px] bg-[#ff9900] rounded-full"></div>
                    <div className="pt-2">
                      <div className="inline-flex items-center gap-1.5 text-white/80 text-xs font-bold uppercase tracking-wider">
                        <Maximize2 size={12} className="text-[#ff9900]" />
                        Zoom View
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-100">
          <Search size={32} className="mx-auto text-gray-300 mb-3" />
          <h4 className="text-gray-900 font-bold text-lg">No Projects Found</h4>
          <p className="text-gray-400 text-sm">We are currently updating our portfolio for {location.toUpperCase()}. Check back soon!</p>
        </div>
      )}

      {/* Infinite Scroll Load More Trigger */}
      {visibleCount < filteredItems.length && (
        <div ref={loadMoreRef} className="flex justify-center py-6">
          <div className="flex gap-1.5">
            {[0, 0.2, 0.4].map((delay) => (
              <motion.div
                key={delay}
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ repeat: Infinity, duration: 1, delay }}
                className="w-2.5 h-2.5 bg-[#ff9900] rounded-full"
              />
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Slideshow Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-6 right-6 text-white/60 hover:text-white bg-white/15 p-3 rounded-full hover:bg-white/20 transition-all shadow-md"
            >
              <X size={24} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full h-full flex items-center justify-center pointer-events-none"
            >
              <div className="relative w-full max-w-5xl h-full max-h-[85vh] pointer-events-auto">
                <Image
                  src={selectedImage}
                  alt="Enlarged Portfolio View"
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
