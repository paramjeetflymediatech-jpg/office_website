"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";


const REVIEWS = [
  {
    id: 1,
    title: "Fast Service",
    rating: 5,
    text: "In my opinion, Fly Media Technology is the best digital marketing company. They provide an array of digital marketing solutions. I wanted to start my business from scratch and thus wanted a one-stop destination company. I found Fly Media Technology to be the best digital marketing company. I got their comprehensive service package that included everything from website design, SEO, content writing, and graphic design to social media marketing, email marketing, and more. Great service!",
    date: "7 Days Ago",
    author: "Shashank Rai"
  },
  {
    id: 2,
    title: "Best Assistance",
    rating: 5,
    text: "I found Fly Media Technology to be the best for logo design and branding. I needed an eye-catching logo that was subtle yet captivating, and Fly Media rightly understood my requirement. The logo was better than my expectations. I will recommend the company and their services to everyone who wants eye-catching and compelling logo designs.",
    date: "7 Days Ago",
    author: "Esha Gupta"
  }
];

const ReviewCard = ({ review }: { review: typeof REVIEWS[0] }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center h-full"
    >
      {/* Review Card (Speech Bubble) */}
      <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] relative mb-8 w-full min-h-[380px] sm:min-h-[420px] flex flex-col items-center transition-all duration-500 hover:shadow-[0_30px_80px_rgba(255,153,0,0.1)] border border-gray-50">
        <h3 className="text-lg sm:text-xl font-bold text-black text-center mb-4 uppercase tracking-wider">{review.title}</h3>
        <div className="flex justify-center gap-1.5 mb-6">
          {Array.from({ length: review.rating }).map((_, i) => (
            <motion.svg 
              key={i} 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff9900]"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </motion.svg>
          ))}
        </div>
        
        {/* Content Area */}
        <div className="flex-grow flex flex-col items-center w-full">
          <p className={`text-gray-600 text-center text-sm sm:text-base leading-relaxed mb-4 transition-all duration-500 ${isExpanded ? "" : "line-clamp-4"}`}>
            {review.text}
          </p>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-black font-black text-[12px] sm:text-sm border-b-2 border-[#ff9900] mb-6 hover:text-[#ff9900] transition-colors uppercase tracking-widest"
          >
            {isExpanded ? "READ LESS" : "READ MORE"}
          </button>
        </div>

        <p className="text-gray-400 font-bold text-center text-[10px] sm:text-xs uppercase tracking-tighter mt-auto">{review.date}</p>
        
        {/* Speech Bubble Tail */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-white"></div>
      </div>
      
      {/* Author below the bubble */}
      <motion.h4 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-base sm:text-lg font-black text-black uppercase tracking-widest"
      >
        {review.author}
      </motion.h4>
    </motion.div>
  );
};

export default function ReviewsSection() {
  return (
    <section className="bg-white py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-10 left-10 text-9xl font-serif text-[#ff9900]">"</div>
        <div className="absolute bottom-10 right-10 text-9xl font-serif text-[#ff9900] rotate-180">"</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-semibold text-black mb-4">
            Clients Reviews
          </h2>
          <div className="w-24 h-1 bg-[#ff9900] mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative px-0 md:px-12">
          {/* Navigation Arrows (Desktop Only) */}
          <button className="absolute -left-4 top-[40%] -translate-y-1/2 w-12 h-12 bg-white border border-gray-100 rounded-full hidden xl:flex items-center justify-center text-black shadow-xl hover:bg-[#ff9900] hover:text-white transition-all z-10 group">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-6 h-6 rotate-180 group-hover:-translate-x-1 transition-transform">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button className="absolute -right-4 top-[40%] -translate-y-1/2 w-12 h-12 bg-white border border-gray-100 rounded-full hidden xl:flex items-center justify-center text-black shadow-xl hover:bg-[#ff9900] hover:text-white transition-all z-10 group">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-16">
            <button className="w-3 h-3 bg-gray-200 rounded-full hover:bg-[#ff9900] transition-colors"></button>
            <button className="w-3 h-3 bg-[#ff9900] rounded-full"></button>
            <button className="w-3 h-3 bg-gray-200 rounded-full hover:bg-[#ff9900] transition-colors"></button>
          </div>
        </div>
      </div>
    </section>
  );
}
