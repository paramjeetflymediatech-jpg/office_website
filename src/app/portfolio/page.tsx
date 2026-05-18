'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { getPortfolioItems } from '@/app/actions/portfolio';
import { X, Search, Maximize2, Minimize2, ChevronRight, ChevronLeft, ZoomIn, ZoomOut, RotateCcw, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function PortfolioPage() {
  const [items, setItems] = useState<any[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  const [visibleCount, setVisibleCount] = useState(20);
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
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    return () => {
      if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

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
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      } else if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      } else if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredItems]);

  useEffect(() => {
    async function load() {
      const data = await getPortfolioItems();
      
      const nonAustraliaData = data.filter((item: any) => (item.location || 'australia').toLowerCase() !== 'australia');

      const normalizedData = nonAustraliaData.map((item: any) => ({
        ...item,
        category: (item.category || 'General').toLowerCase() === 'general' ? 'General' : item.category
      }));

      setItems(normalizedData);
      setFilteredItems(normalizedData);

      const otherCats = Array.from(new Set(normalizedData.map((item: any) => item.category).filter(Boolean)))
        .filter(cat => cat !== 'All' && cat !== 'General')
        .sort((a: any, b: any) => a.localeCompare(b));

      setCategories(['All', 'General', ...otherCats]);
      setLoading(false);
    }
    load();
  }, []);

  useEffect(() => {
    let result = items;
    if (activeCategory !== 'All') {
      result = items.filter(item => {
        const itemCat = (item.category || 'General').toLowerCase();
        const activeCat = activeCategory.toLowerCase();
        return itemCat === activeCat;
      });
    }
    setFilteredItems(result);
    setVisibleCount(20);
  }, [activeCategory, items]);

  useEffect(() => {
    if (visibleCount >= filteredItems.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount(prev => Math.min(prev + 20, filteredItems.length));
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-12 h-12 border-4 border-[#ff9900]/20 border-t-[#ff9900] rounded-full animate-spin" />
      </div>
    );
  }

  const currentVisibleItems = filteredItems.slice(0, visibleCount);

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Premium Hero Banner Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center bg-black">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image 
            src="/portfolio/bannerimg.avif" 
            alt="Portfolio Banner" 
            fill 
            className="object-cover"
            priority
          />
          {/* Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-gray-50"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto text-center px-4 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[#ff9900] font-bold tracking-[0.3em] uppercase text-sm"
          >
            PortFolio
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-4xl md:text-7xl font-serif font-black text-white leading-tight"
          >
            Showcasing Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9900] to-[#ffcc33]">Creative Excellence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-gray-200 max-w-2xl mx-auto text-lg md:text-xl font-light"
          >
            A curated collection of digital success stories, from high-converting websites to stunning brand identities.
          </motion.p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 pt-8 relative z-20">
        {/* Filter Tabs - Floating Style */}
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 p-6"
          >
            {categories.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative pb-1 font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'text-[#ff9900]'
                    : 'text-gray-500 hover:text-[#ff9900]'
                }`}
              >
                {cat}
                {/* Underline for active state */}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeFilterUnderline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#ff9900]"
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Animated Infinite Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {currentVisibleItems.map((item, index) => (
              <motion.div 
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: (index % 20) * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden aspect-[3/2] cursor-pointer"
                onClick={() => {
                  const idx = filteredItems.findIndex(x => x.id === item.id);
                  setSelectedImageIndex(idx !== -1 ? idx : null);
                }}
              >
                <Image src={item.imageUrl} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Loading Anchor */}
        {visibleCount < filteredItems.length && (
          <div ref={loadMoreRef} className="flex justify-center mt-20 p-10">
            <div className="flex gap-2">
              {[0, 0.2, 0.4].map(delay => (
                <motion.div key={delay} animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay }} className="w-2.5 h-2.5 bg-[#ff9900] rounded-full shadow-sm shadow-orange-100" />
              ))}
            </div>
          </div>
        )}


        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-100 mt-10">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300"><Search size={32} /></div>
            <h3 className="text-xl font-bold text-gray-900">No projects found</h3>
          </motion.div>
        )}
      </div>

      {/* Case Studies Section */}
      <section className="max-w-7xl mx-auto px-4 mt-32 border-t border-gray-100 pt-20">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ff9900] font-bold tracking-widest uppercase text-sm"
          >
            Deep Dives
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-black text-black"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">Case Studies</span>
          </motion.h2>
          <p className="text-gray-500 max-w-xl mx-auto">Discover the strategy and results behind some of our most impactful digital transformations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Resturant Website Design & Development",
              desc: "Flymedia Technology Case Study For Restaurants Based in Australia",
              image: "/portfolio/1.avif", // Using existing asset as placeholder
              tag: "Web Strategy",
              link: "/flymedia-technology-case-study-for-australian-restaurant/"
            },
            {
              title: "Transformative Car Rentals Digital Journey",
              desc: "Transformative Car Rentals Digital Journey With Fly Media Technology’s Digital Marketing Techniques",
              image: "/portfolio/2.avif",
              link: "/fly-media-technology-case-study-for-car-rentals/",
              tag: "Branding"
            },
            {
              title: "Boosting Business Growth",
              desc: "Boosting Business Growth Of A Technology Company In Australia: A Fly Media Technology Case Study",
              image: "/portfolio/3.avif",
              tag: "Digital Growth",
              link: "/fly-media-technology-case-study-for-a-technology-company/"
            }
          ].map((study, i) => (
            <Link key={i} href={study.link} className="flex flex-col h-full group">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full w-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={study.image} alt={study.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-[#ff9900] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {study.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
          <motion.div 
            ref={lightboxRef}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-10 select-none" 
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
               animate={{ opacity: 1, x: 0, scale: 1 }} 
               exit={{ opacity: 0, x: -80, scale: 0.95 }} 
               transition={{ type: 'spring', stiffness: 350, damping: 32 }}
               className="relative w-full h-full flex items-center justify-center pointer-events-none mt-16"
            >
               <div 
                 className="relative w-full max-w-5xl h-full max-h-[80vh] pointer-events-auto transition-transform duration-200 ease-out"
                 style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
               >
                 <Image 
                   src={filteredItems[selectedImageIndex].imageUrl} 
                   alt={filteredItems[selectedImageIndex].title || "Enlarged view"} 
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
    </main>
  );
}
