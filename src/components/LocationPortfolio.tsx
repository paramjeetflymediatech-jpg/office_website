"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { getPortfolioItems } from "@/app/actions/portfolio";
import { X, Maximize2, Minimize2, Search, ChevronRight, ChevronLeft, ZoomIn, ZoomOut, RotateCcw, Share2 } from "lucide-react";
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
  { id: "au-1", title: "Meat Mechanics", imageUrl: "/uploads/2024/05/meat-mechanics.png", category: "Web Design", location: "australia" },
  { id: "au-2", title: "Lakeview Dental", imageUrl: "/uploads/2024/05/lakeview.png", category: "Web Development", location: "australia" },
  { id: "au-3", title: "Grand Indian Cuisine", imageUrl: "/uploads/2024/05/grand-indian-cuisine.png", category: "Web Design", location: "australia" },
  { id: "au-4", title: "Grand Bukhara", imageUrl: "/uploads/2024/05/grand-bukhara.png", category: "Web Development", location: "australia" },
  { id: "au-5", title: "Cholas Restaurant", imageUrl: "/uploads/2024/05/cholas-2.png", category: "Web Design", location: "australia" },
  { id: "au-6", title: "Binge Café", imageUrl: "/uploads/2024/05/binge.png", category: "Web Development", location: "australia" },
  { id: "au-7", title: "Asees Indian Restaurant", imageUrl: "/uploads/2024/05/asees-1.png", category: "Web Design", location: "australia" },
  { id: "au-8", title: "TGP Portal", imageUrl: "/uploads/2024/05/TGP-1.png", category: "SEO & SMO", location: "australia" },
  { id: "au-9", title: "Sylvania Retailers", imageUrl: "/uploads/2024/05/sylvania-1.png", category: "Web Design", location: "australia" },
  { id: "au-10", title: "Pizza Shed", imageUrl: "/uploads/2024/05/pizza-shed-2.png", category: "Web Development", location: "australia" },
  { id: "au-11", title: "NTH Consulting", imageUrl: "/uploads/2024/05/nth-1.png", category: "SEO & SMO", location: "australia" },
  { id: "au-12", title: "Yes Nurse", imageUrl: "/uploads/2024/05/yes-nurse.png", category: "Web Design", location: "australia" },
  { id: "au-13", title: "Singh Finance", imageUrl: "/uploads/2024/05/singh-finance.png", category: "Web Development", location: "australia" },
  { id: "au-14", title: "NES Electrical", imageUrl: "/uploads/2024/05/NES-electrical.png", category: "Web Design", location: "australia" },
  { id: "au-15", title: "Mom & Dad Healthcare", imageUrl: "/uploads/2024/05/mom-and-dad.png", category: "Web Development", location: "australia" },
  { id: "au-16", title: "MIG Enterprises", imageUrl: "/uploads/2024/05/MIG-enterprises.png", category: "SEO & SMO", location: "australia" },
  { id: "au-17", title: "AB Logistics", imageUrl: "/uploads/2024/05/AB-1.png", category: "Web Design", location: "australia" },
];

const INDIA_FALLBACKS: PortfolioItem[] = [
  { id: "in-1", title: "TechCorp India", imageUrl: "/uploads/2024/05/meat-mechanics.png", category: "Web Development", location: "india" },
  { id: "in-2", title: "Royal Rajasthan Tourism", imageUrl: "/uploads/2024/05/lakeview.png", category: "Web Design", location: "india" },
  { id: "in-3", title: "Mumbai Bazaars", imageUrl: "/uploads/2024/05/grand-indian-cuisine.png", category: "Web Development", location: "india" },
  { id: "in-4", title: "Veda Wellness", imageUrl: "/uploads/2024/05/grand-bukhara.png", category: "SEO & SMO", location: "india" },
  { id: "in-5", title: "Delhi Foodies App", imageUrl: "/uploads/2024/05/cholas-2.png", category: "Web Design", location: "india" },
];

const CANADA_FALLBACKS: PortfolioItem[] = [
  { id: "ca-1", title: "Maple Leaf Logistics", imageUrl: "/uploads/2024/05/sylvania-1.png", category: "Web Development", location: "canada" },
  { id: "ca-2", title: "Toronto Heights Real Estate", imageUrl: "/uploads/2024/05/pizza-shed-2.png", category: "Web Design", location: "canada" },
  { id: "ca-3", title: "Quebec Bistro Portal", imageUrl: "/uploads/2024/05/nth-1.png", category: "Web Development", location: "canada" },
  { id: "ca-4", title: "Rocky Mountain Adventures", imageUrl: "/uploads/2024/05/yes-nurse.png", category: "SEO & SMO", location: "canada" },
  { id: "ca-5", title: "Ontario FinTech", imageUrl: "/uploads/2024/05/singh-finance.png", category: "Web Design", location: "canada" },
];

export default function LocationPortfolio({ location }: LocationPortfolioProps) {
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImageIndex]);

  const [visibleCount, setVisibleCount] = useState(12);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Interactive Lightbox State and Handlers
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    if (!lightboxRef.current) return;
    if (!document.fullscreenElement) {
      lightboxRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(err => console.log(err));
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const handleShare = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    setScale(1);
    setRotate(0);
  }, [selectedImageIndex]);

  // Keyboard Arrow Key Navigation
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (selectedImageIndex === null) return;
      if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      } else if (e.key === "Escape") {
        setSelectedImageIndex(null);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, filteredItems]);

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
      <style dangerouslySetInnerHTML={{
        __html: `
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

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 border-2 ${activeCategory === cat
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
                className="scroll-container group relative bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 aspect-[3/4] cursor-pointer"
                onClick={() => {
                  const idx = filteredItems.findIndex(x => x.id === item.id);
                  setSelectedImageIndex(idx !== -1 ? idx : null);
                }}
              >
                <div className="relative w-full h-full overflow-hidden bg-[#FBFBFB]">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="scroll-img"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                </div>

                {/* Hover Glass Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="text-center py-16 bg-white  border border-dashed border-gray-100">
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
      {mounted && typeof document !== "undefined"
        ? createPortal(
          <AnimatePresence>
            {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
              <motion.div
                ref={lightboxRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-10 select-none"
                onClick={() => setSelectedImageIndex(null)}
              >
                {/* Premium Top Navigation Control Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-16 bg-black/60 backdrop-blur-md flex items-center justify-between px-6 z-50 border-b border-white/10"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Left Side: Counter */}
                  <div className="text-white/90 font-mono text-sm tracking-wider font-semibold">
                    {selectedImageIndex + 1} / {filteredItems.length}
                  </div>

                  {/* Right Side Controls */}
                  <div className="flex items-center gap-1.5 sm:gap-3 text-white">
                    {copied && (
                      <span className="text-xs text-[#ff9900] font-bold animate-pulse mr-2">
                        Link Copied!
                      </span>
                    )}

                    {/* Reset Zoom & Rotate */}
                    <button
                      title="Reset"
                      className="p-2 hover:bg-white/10 hover:text-[#ff9900] rounded-lg transition-colors duration-200"
                      onClick={() => { setScale(1); setRotate(0); }}
                    >
                      <RotateCcw size={20} />
                    </button>

                    {/* Zoom Out */}
                    <button
                      title="Zoom Out"
                      className="p-2 hover:bg-white/10 hover:text-[#ff9900] rounded-lg transition-colors duration-200"
                      onClick={() => setScale(prev => Math.max(0.5, prev - 0.25))}
                    >
                      <ZoomOut size={20} />
                    </button>

                    {/* Zoom In */}
                    <button
                      title="Zoom In"
                      className="p-2 hover:bg-white/10 hover:text-[#ff9900] rounded-lg transition-colors duration-200"
                      onClick={() => setScale(prev => Math.min(3.0, prev + 0.25))}
                    >
                      <ZoomIn size={20} />
                    </button>

                    {/* Fullscreen Toggle */}
                    <button
                      title="Toggle Fullscreen"
                      className="p-2 hover:bg-white/10 hover:text-[#ff9900] rounded-lg transition-colors duration-200"
                      onClick={toggleFullscreen}
                    >
                      {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                    </button>

                    {/* Share Link */}
                    <button
                      title="Copy Image URL"
                      className="p-2 hover:bg-white/10 hover:text-[#ff9900] rounded-lg transition-colors duration-200"
                      onClick={(e) => handleShare(e, filteredItems[selectedImageIndex].imageUrl)}
                    >
                      <Share2 size={20} />
                    </button>

                    {/* Close Button */}
                    <button
                      title="Close Gallery"
                      className="p-2 hover:bg-[#ff9900] hover:text-white bg-white/10 rounded-lg transition-colors duration-200 ml-1.5"
                      onClick={() => setSelectedImageIndex(null)}
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                {/* Left Slider Arrow */}
                <button
                  className="hidden md:block absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-[#ff9900] hover:scale-105 active:scale-95 text-white p-3.5 sm:p-4 rounded-full transition-all duration-300 z-10 focus:outline-none shadow-lg border border-white/5"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((prev) =>
                      prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
                    );
                  }}
                >
                  <ChevronLeft size={36} />
                </button>

                {/* Right Slider Arrow */}
                <button
                  className="hidden md:block absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-[#ff9900] hover:scale-105 active:scale-95 text-white p-3.5 sm:p-4 rounded-full transition-all duration-300 z-10 focus:outline-none shadow-lg border border-white/5"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((prev) =>
                      prev !== null ? (prev + 1) % filteredItems.length : null
                    );
                  }}
                >
                  <ChevronRight size={36} />
                </button>

                {/* Image Container with Dynamic Transition & Custom Zoom Scale/Rotate Transform */}
                <motion.div
                  key={selectedImageIndex}
                  initial={{ opacity: 0, x: 80, scale: 0.95 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 350, damping: 32 }}
                  className="relative w-full h-full flex items-center justify-center pointer-events-none mt-16"
                >
                  <div
                    className="relative w-full max-w-5xl h-full max-h-[80vh] pointer-events-auto transition-transform duration-200 ease-out"
                    style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
                  >
                    <Image
                      src={filteredItems[selectedImageIndex].imageUrl}
                      alt={filteredItems[selectedImageIndex].title || "Enlarged Portfolio View"}
                      fill
                      className="object-contain"
                      priority
                      unoptimized
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )
        : null}
    </div>
  );
}
