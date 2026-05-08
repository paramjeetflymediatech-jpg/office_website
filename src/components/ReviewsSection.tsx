"use client";

import React from "react";
import { motion } from "framer-motion";

// ==========================================
// GOOGLE REVIEWS INTEGRATION GUIDE & FUTURE PLAN
// ==========================================
// To enable real-time Google Reviews in the future, follow these instructions:
//
// 1. Obtain your Google Place ID:
//    - Use the Place ID Finder tool: https://developers.google.com/maps/documentation/places/web-service/place-id
//    - Search for "Fly Media Technology" and copy the unique Place ID.
//
// 2. Set Up a Secure Next.js API Route (to prevent exposing your Google Maps API Key on the client side):
//    - Create a new file: `src/app/api/google-reviews/route.ts` (if using Next.js App Router)
//    - Add the following server-side code:
//
//      import { NextResponse } from "next/server";
//      export async function GET() {
//        const PLACE_ID = process.env.GOOGLE_PLACE_ID;
//        const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
//        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;
//        try {
//          const res = await fetch(url);
//          const data = await res.json();
//          return NextResponse.json(data.result?.reviews || []);
//        } catch (error) {
//          return NextResponse.json({ error: "Failed to fetch Google reviews" }, { status: 500 });
//        }
//      }
//
// 3. Set your environment variables in `.env.local`:
//    - GOOGLE_PLACE_ID=your_place_id_here
//    - GOOGLE_MAPS_API_KEY=your_api_key_here
//
// 4. Toggle the flag `USE_GOOGLE_REVIEWS` below to `true` to activate dynamic fetching!
// ==========================================

const USE_GOOGLE_REVIEWS = false; // Toggle to true once the API route is configured

export interface ReviewType {
  id: string | number;
  title: string;
  rating: number;
  text: string;
  date: string;
  author: string;
  profilePhoto?: string; // Optional author photo (e.g. from Google profile)
}

const REVIEWS: ReviewType[] = [
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
  },
  {
    id: 3,
    title: "Highly Professional",
    rating: 5,
    text: "Working with Fly Media Technology has been a game-changer for our brand's online presence. Their SEO strategies pushed our website to the first page of Google within a few months. The team is extremely responsive, knowledgeable, and always goes the extra mile to deliver exceptional results. If you are looking to scale your business, they are the absolute best choice!",
    date: "2 Weeks Ago",
    author: "Rajiv Malhotra"
  },
  {
    id: 4,
    title: "Stunning Website Design",
    rating: 5,
    text: "I am absolutely thrilled with the website design Fly Media Technology created for my business. It is incredibly fast, responsive, and looks extremely high-end. Our clients constantly compliment the layout and ease of navigation. The development team was professional throughout the process, incorporating all my feedback seamlessly. Highly recommend!",
    date: "3 Weeks Ago",
    author: "Priya Sharma"
  }
];

const ReviewCard = ({ review }: { review: ReviewType }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center h-full w-full select-none"
    >
      {/* Review Card (Speech Bubble) */}
      <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] relative mb-8 w-full min-h-[380px] sm:min-h-[420px] flex flex-col items-center transition-all duration-500 hover:shadow-[0_30px_80px_rgba(255,153,0,0.1)] border border-gray-50 flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-black text-center mb-4 uppercase tracking-wider">{review.title}</h3>
        
        {/* Rating Stars */}
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
            className="text-black font-black text-[12px] sm:text-sm border-b-2 border-[#ff9900] mb-6 hover:text-[#ff9900] transition-colors uppercase tracking-widest mt-auto"
          >
            {isExpanded ? "READ LESS" : "READ MORE"}
          </button>
        </div>

        <p className="text-gray-400 font-bold text-center text-[10px] sm:text-xs uppercase tracking-tighter mt-auto">{review.date}</p>
        
        {/* Speech Bubble Tail */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-white"></div>
      </div>
      
      {/* Author below the bubble with Avatar */}
      <div className="flex items-center gap-3">
        {review.profilePhoto ? (
          <img 
            src={review.profilePhoto} 
            alt={review.author} 
            className="w-8 h-8 rounded-full object-cover border border-gray-100 shadow-sm"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ff9900] to-yellow-500 text-white font-black text-xs flex items-center justify-center uppercase shadow-md select-none">
            {review.author.charAt(0)}
          </div>
        )}
        <motion.h4 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-base sm:text-lg font-black text-black uppercase tracking-widest"
        >
          {review.author}
        </motion.h4>
      </div>
    </motion.div>
  );
};

export default function ReviewsSection() {
  const [reviewsList, setReviewsList] = React.useState<ReviewType[]>(REVIEWS);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [visibleCards, setVisibleCards] = React.useState(2);
  const [isPaused, setIsPaused] = React.useState(false);

  // 1. Dynamic responsiveness check for mobile layout (1 card) vs desktop/tablet layout (2 cards)
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else {
        setVisibleCards(2);
      }
    };
    
    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2. Future Google Reviews Fetch Integration Hook
  React.useEffect(() => {
    if (!USE_GOOGLE_REVIEWS) return;

    const fetchGoogleReviews = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/google-reviews");
        const googleReviews = await response.json();
        
        if (googleReviews && Array.isArray(googleReviews) && googleReviews.length > 0) {
          const mappedReviews: ReviewType[] = googleReviews.map((gReview: any, index: number) => ({
            id: `google-${index}-${gReview.time || index}`,
            title: gReview.rating >= 4 ? "Excellent Service" : "Google Review",
            rating: gReview.rating || 5,
            text: gReview.text || "No review content provided.",
            date: gReview.relative_time_description || "Recent Review",
            author: gReview.author_name || "Anonymous User",
            profilePhoto: gReview.profile_photo_url || undefined
          }));
          
          setReviewsList(mappedReviews);
        }
      } catch (error) {
        console.error("Failed to load Google Reviews. Falling back to local premium reviews.", error);
        setReviewsList(REVIEWS);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGoogleReviews();
  }, []);

  // Ensure current index is capped when visibleCards changes
  React.useEffect(() => {
    const maxIndex = reviewsList.length - visibleCards;
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [visibleCards, reviewsList.length, currentIndex]);

  // 3. Auto Scroll functionality with hover-pause
  React.useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = reviewsList.length - visibleCards;
        if (prevIndex >= maxIndex) {
          return 0; // Loop back to start
        }
        return prevIndex + 1;
      });
    }, 5000); // Transitions to next review every 5 seconds

    return () => clearInterval(interval);
  }, [visibleCards, reviewsList.length, isPaused]);

  const handlePrev = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) => {
      const maxIndex = reviewsList.length - visibleCards;
      if (prevIndex <= 0) {
        return Math.max(0, maxIndex);
      }
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) => {
      const maxIndex = reviewsList.length - visibleCards;
      if (prevIndex >= maxIndex) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const totalDots = reviewsList.length - visibleCards + 1;

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

        {isLoading ? (
          <div className="flex justify-center items-center h-48">
            <div className="w-10 h-10 border-4 border-[#ff9900] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="relative px-0 md:px-12">
            {/* Navigation Arrows (Visible on MD screens and above) */}
            <button 
              onClick={handlePrev}
              className="absolute -left-4 top-[40%] -translate-y-1/2 w-12 h-12 bg-white border border-gray-100 rounded-full hidden md:flex items-center justify-center text-black shadow-xl hover:bg-[#ff9900] hover:text-white transition-all z-10 group"
              aria-label="Previous review"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-6 h-6 rotate-180 group-hover:-translate-x-1 transition-transform">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="absolute -right-4 top-[40%] -translate-y-1/2 w-12 h-12 bg-white border border-gray-100 rounded-full hidden md:flex items-center justify-center text-black shadow-xl hover:bg-[#ff9900] hover:text-white transition-all z-10 group"
              aria-label="Next review"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slider Container */}
            <div 
              className="overflow-hidden w-full px-1 py-4 cursor-grab active:cursor-grabbing"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <motion.div 
                className="flex items-stretch"
                animate={{ x: `-${currentIndex * (100 / visibleCards)}%` }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                {reviewsList.map((review) => (
                  <div 
                    key={review.id} 
                    className="w-full md:w-1/2 flex-shrink-0 px-4"
                  >
                    <ReviewCard review={review} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Pagination Dots */}
            {totalDots > 1 && (
              <div className="flex justify-center gap-3 mt-12">
                {Array.from({ length: totalDots }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsPaused(true);
                      setCurrentIndex(idx);
                    }}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      currentIndex === idx 
                        ? "bg-[#ff9900] w-7" 
                        : "bg-gray-200 hover:bg-[#ff9900]/50 w-3"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
