"use client";

import React from "react";

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

export default function ReviewsSection() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-black">
            Clients Reviews
          </h2>
        </div>

        <div className="relative px-0 lg:px-12">
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#ff9900] rounded-full hidden lg:flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform z-10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-6 h-6 rotate-180">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#ff9900] rounded-full hidden lg:flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform z-10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-6 h-6">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {REVIEWS.map((review) => (
              <div key={review.id} className="flex flex-col items-center">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] relative mb-8 w-full">
                  <h3 className="text-xl font-bold text-black text-center mb-4">{review.title}</h3>
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-center text-base leading-relaxed mb-8">
                    {review.text}
                  </p>
                  <p className="text-black font-bold text-center text-sm">{review.date}</p>
                  
                  {/* Speech Bubble Tail */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-white shadow-sm"></div>
                </div>
                <h4 className="text-lg font-bold text-black">{review.author}</h4>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-12">
            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-[#ff9900] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
