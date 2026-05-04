'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { getPortfolioItems } from '@/app/actions/portfolio';
import { X, Search, Maximize2 ,ChevronRight} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function PortfolioPage() {
  const [items, setItems] = useState<any[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // High-End Full Infinite Scroll State
  const [visibleCount, setVisibleCount] = useState(20);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function load() {
      const data = await getPortfolioItems();
      
      const normalizedData = data.map((item: any) => ({
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 -mt-10 relative z-20">
        {/* Filter Tabs - Floating Style */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap justify-center gap-3 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl shadow-black/5 border border-white/50"
          >
            {categories.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 border-2 ${
                  activeCategory === cat
                    ? 'bg-black border-black text-white shadow-xl scale-105'
                    : 'bg-white border-gray-100 text-gray-500 hover:border-[#ff9900] hover:text-[#ff9900]'
                }`}
              >
                {cat}
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
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 aspect-square cursor-pointer"
                onClick={() => setSelectedImage(item.imageUrl)}
              >
                <Image src={item.imageUrl} alt={item.title} fill className="object-contain p-2 transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-2">
                    <span className="text-[#ff9900] text-xs font-bold uppercase tracking-widest">{item.category}</span>
                    <h3 className="text-white text-xl font-serif font-bold">{item.title}</h3>
                    <div className="w-8 h-0.5 bg-[#ff9900] rounded-full"></div>
                    <div className="pt-4"><div className="inline-flex items-center gap-2 text-white/80 text-sm font-medium"><Maximize2 size={16} />View Project</div></div>
                  </div>
                </div>
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

        {/* End of Gallery Indicator */}
        {visibleCount >= filteredItems.length && filteredItems.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-20 p-10 border-t border-gray-100">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
            <p className="text-gray-400 font-serif italic text-lg">You've reached the end of our success stories.</p>
          </motion.div>
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
              link: "/portfolio/flymedia-technology-case-study-for-australian-restaurant/"
            },
            {
              title: "Transformative Car Rentals Digital Journey",
              desc: "Transformative Car Rentals Digital Journey With Fly Media Technology’s Digital Marketing Techniques",
              image: "/portfolio/2.avif",
              link: "/portfolio/fly-media-technology-case-study-for-car-rentals/",
              tag: "Branding"
            },
            {
              title: "Boosting Business Growth",
              desc: "Boosting Business Growth Of A Technology Company In Australia: A Fly Media Technology Case Study",
              image: "/portfolio/3.avif",
              tag: "Digital Growth",
              link: "/portfolio/fly-media-technology-case-study-for-a-technology-company/"
            }
          ].map((study, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={study.image} alt={study.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-[#ff9900] shadow-sm">
                  {study.tag}
                </div> */}
              </div>
              <div className="p-8 space-y-4 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-[#ff9900] transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-1">
                  {study.desc}
                </p>
                <Link href={study.link} passHref target='_blank'>
                <div className="pt-4">
                  <button className="flex items-center gap-2 text-black font-bold group/btn">
                    Read Full Story
                    <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center group-hover/btn:bg-[#ff9900] transition-colors">
                      <ChevronRight size={14} />
                    </div>
                  </button>
                </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10" onClick={() => setSelectedImage(null)}>
            <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/10 p-3 rounded-full"><X size={32} /></motion.button>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative w-full h-full flex items-center justify-center pointer-events-none">
              <div className="relative w-full max-w-5xl h-full max-h-[85vh] pointer-events-auto"><Image src={selectedImage} alt="Enlarged view" fill className="object-contain" priority /></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
