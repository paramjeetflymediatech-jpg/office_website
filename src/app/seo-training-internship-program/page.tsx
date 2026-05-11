"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Video, 
  MousePointerClick, 
  Search, 
  Mail, 
  ChevronRight,
  Clock,
  Award,
  Users,
  Lightbulb
} from "lucide-react";

// --- Contact Form & Map Section ---
const ContactFormWithMap = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for getting in touch with us! We will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-[#F1F1F1] py-16 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-gray-200/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Contact Details & Map */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-4xl font-extrabold text-black tracking-tight leading-none">
                Contact Us
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#FA7E09] w-5 h-5 shrink-0 mt-0.5">
                    <svg aria-hidden="true" className="fill-[#FA7E09] w-5 h-5" viewBox="0 0 384 512">
                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                    </svg>
                  </span>
                  <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">
                    Flymedia Technology, Plot no, 20, Vishal Nagar Ext, opposite Kashish Cafe, Vishal Nagar, Jawaddi Taksal, Ludhiana, Punjab 141001
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#FA7E09] w-5 h-5 shrink-0">
                    <svg aria-hidden="true" className="fill-[#FA7E09] w-5 h-5" viewBox="0 0 512 512">
                      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                    </svg>
                  </span>
                  <a href="tel:+91-98884-84310" className="text-gray-700 font-medium text-sm sm:text-base hover:text-[#FA7E09] transition-colors">
                    +91-98884-84310
                  </a>
                </div>
              </div>

              {/* Map Iframe */}
              <div className="w-full h-[250px] relative mt-4 border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.1818163539744!2d75.8346141!3d30.8815982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a824e4d5bbbb3%3A0xc348bfb36f781dfa!2sFlymedia%20Technology!5e0!3m2!1sen!2sin!4v1715424000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-[#EFEFEF] p-8 sm:p-12 border border-gray-200/20">
              <h2 className="text-3xl font-extrabold text-black mb-8 tracking-tight leading-none">
                Get In Touch With Us
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="w-full">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full bg-white border border-gray-300 rounded-none px-4 py-3.5 text-gray-950 placeholder-gray-500 font-medium focus:outline-none focus:ring-1 focus:ring-black text-xs sm:text-sm"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full bg-white border border-gray-300 rounded-none px-4 py-3.5 text-gray-950 placeholder-gray-500 font-medium focus:outline-none focus:ring-1 focus:ring-black text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full bg-white border border-gray-300 rounded-none px-4 py-3.5 text-gray-950 placeholder-gray-500 font-medium focus:outline-none focus:ring-1 focus:ring-black text-xs sm:text-sm"
                  />
                </div>

                <div className="w-full">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Type you message here..."
                    required
                    className="w-full bg-white border border-gray-300 rounded-none px-4 py-3.5 text-gray-950 placeholder-gray-500 font-medium focus:outline-none focus:ring-1 focus:ring-black text-xs sm:text-sm resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-black text-white hover:bg-[#FA7E09] hover:text-white transition-all duration-300 font-bold px-10 py-3.5 rounded-full text-sm sm:text-base shadow-md"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default function SEOTrainingInternshipProgram() {
  const courses = [
    {
      title: "Google SEO Fundamentals - 2 Months (SEO - SMO)",
      topics: [
        "Onpage Optimization",
        "Off Page Optimization (Backlinks)",
        "White Hat Techniques",
        "Google Webmaster Tools or Search Console",
        "Google Analytics",
        "Social Media Marketing",
        "Google Maps, Local SEO",
        "Latest SEO Updates: Google Panda, Humming Bird, Penguin, and Many More"
      ]
    },
    {
      title: "Master In Google Ads & SEO - 2 Months",
      topics: [
        "Onpage Optimization",
        "Off Page Optimization (Backlinks)",
        "White Hat Techniques",
        "Google Webmaster Tools or Search Console",
        "Google Analytics",
        "Social Media Marketing",
        "Google Maps, Local SEO",
        "Latest SEO Updates: Google Panda, Humming Bird, Penguin, and Many More",
        "Pay Per Click, Google Adwords",
        "Display Advertisement",
        "Search Ads",
        "Youtube Video Ads"
      ]
    },
    {
      title: "Master In Meta Ads & SMO - 2 Months",
      topics: [
        "Social Media Marketing",
        "Facebook Ads or Meta Ads",
        "How to setup a Facebook page, Ad Account, Business Manager",
        "Audience in Meta Ads",
        "How to write killer Ad Copies",
        "Dynamic Creative",
        "Fundamentals of Meta Ads",
        "Formats and Ad Types",
        "Campaign types and their uses",
        "Conversion tracking and setup",
        "Optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F1F1F1] text-black font-sans selection:bg-[#FA7E09]/30">
      
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-24 bg-[#EFEFEF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left: Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-[45px] font-serif font-extrabold text-black leading-tight tracking-tight">
                SEO Training & Internship Program in Ludhiana, Punjab
              </h1>
              
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-black font-sans">
                  Digital Marketing & SEO Training Institute in Ludhiana,
                </h3>
                <div className="space-y-4 text-gray-700 font-medium leading-relaxed text-sm sm:text-base">
                  <p>
                    <span className="text-[#FA7E09] font-bold">SEO Training & Internship Program in Ludhiana, Punjab:</span> SEO is the Search Engine Optimization which increases the quantity and quality of web page traffic by increasing the website visibility. SEO increases the business ranking in search engine resource pages and the business can get increased traffic and leads to better conversions.
                  </p>
                  <p>
                    This is the reason SEO is considered a vital part of small and large-scale business success. Moreover, this has also increased the importance of getting into the best SEO training institute in Ludhiana to get the SEO certification.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: SEO Collaboration Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[480px] aspect-square">
                <Image 
                  src="/images/seo01.png" 
                  alt="SEO Training Collaboration Illustration" 
                  width={550} 
                  height={550} 
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. What is SEO Certification Section */}
      <section className="py-20 bg-[#F1F1F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: 3D phone SEO illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square">
                <Image 
                  src="/images/seo-right-image.png" 
                  alt="What is SEO Certification" 
                  width={450} 
                  height={450} 
                  className="w-full h-auto object-contain drop-shadow-xl animate-pulse"
                  style={{ animationDuration: "8s" }}
                />
              </div>
            </div>

            {/* Right Column: Copy */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-black leading-tight">
                What is SEO certification?
              </h2>
              
              <div className="space-y-4 text-gray-700 font-medium leading-relaxed text-sm sm:text-base">
                <p>
                  An SEO certification is given to individuals who complete an SEO course. It shows that you have the required training and skills to work with SEO.
                </p>
                <p>
                  There are different ways you can get an SEO internship but choosing the best institute for digital marketing training in Ludhiana will give you better results. If you are looking for a digital marketing internship in Ludhiana, then do consult our experienced team for proper understanding.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Our Courses Cards Section */}
      <section className="py-20 bg-[#EFEFEF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-extrabold tracking-tight text-black">
              Our Courses
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <div 
                key={idx}
                className="bg-white border border-gray-200/80 shadow-md hover:shadow-xl hover:border-[#FA7E09]/30 transition-all duration-300 p-8 flex flex-col justify-between h-full rounded-none"
              >
                <div className="space-y-6">
                  <h3 className="text-xl md:text-2xl font-serif font-black text-black leading-snug border-b-2 border-[#FA7E09] pb-4">
                    {course.title}
                  </h3>
                  
                  <ul className="space-y-3">
                    {course.topics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-left">
                        <span className="text-[#FA7E09] font-black shrink-0 mt-0.5">•</span>
                        <span className="text-gray-700 font-medium text-xs sm:text-sm leading-relaxed">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link 
                    href="#contact"
                    className="bg-[#FA7E09] text-white hover:bg-black transition-all duration-300 px-6 py-3 font-sans font-bold text-xs sm:text-sm w-fit rounded-full flex items-center gap-2 group shadow-md"
                  >
                    Contact Us
                    <ChevronRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Certified Digital Marketing strip */}
      <section className="py-16 bg-[#FA7E09] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-12">
          
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-white leading-tight">
            Certified Digital Marketing
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto items-start">
            {/* 1. Video Marketing */}
            <div className="flex flex-col items-center space-y-4 group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#FA7E09] transition-all duration-300 text-white shadow-inner">
                <Video className="w-8 h-8" />
              </div>
              <span className="font-sans font-bold text-sm sm:text-base tracking-wide">
                Video Marketing
              </span>
            </div>

            {/* 2. PPC, SEM Training */}
            <div className="flex flex-col items-center space-y-4 group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#FA7E09] transition-all duration-300 text-white shadow-inner">
                <MousePointerClick className="w-8 h-8" />
              </div>
              <span className="font-sans font-bold text-sm sm:text-base tracking-wide">
                PPC, SEM Training
              </span>
            </div>

            {/* 3. SEO Training */}
            <div className="flex flex-col items-center space-y-4 group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#FA7E09] transition-all duration-300 text-white shadow-inner">
                <Search className="w-8 h-8" />
              </div>
              <span className="font-sans font-bold text-sm sm:text-base tracking-wide">
                SEO Training
              </span>
            </div>

            {/* 4. Meta Ads */}
            <div className="flex flex-col items-center space-y-4 group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#FA7E09] transition-all duration-300 text-white shadow-inner">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="font-sans font-bold text-sm sm:text-base tracking-wide">
                Meta Ads
              </span>
            </div>

            {/* 5. Email Marketing */}
            <div className="flex flex-col items-center space-y-4 group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#FA7E09] transition-all duration-300 text-white shadow-inner">
                <Mail className="w-8 h-8" />
              </div>
              <span className="font-sans font-bold text-sm sm:text-base tracking-wide">
                Email Marketing
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Dual Column Boxed Section */}
      <section className="py-20 bg-[#F1F1F1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200/80 shadow-md p-8 sm:p-12 rounded-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Column 1: Benefit List */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-black leading-snug border-b border-gray-100 pb-4">
                  How does completing Advanced digital marketing SEO certification training from Flymedia can benefit you?
                </h3>
                <ul className="space-y-3.5 pl-0 list-none">
                  {[
                    "Better career opportunities.",
                    "Real-Time and Practical Training Classes.",
                    "Get the best SEO trainer with years of experience.",
                    "Certification in SEO.",
                    "Understand the nitty-gritty of SEO working.",
                    "SEO training can give benefits to students, working professionals, and business owners.",
                    "Understand the dynamics of SEO clearly and get to clear your doubts also.",
                    "Digital Marketing Course Modules can help you learn different things like SEO, PPC, Email Marketing, Social media marketing, Youtube Ads, Google Adsense, and Mobile App Promotions."
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#FA7E09] font-black shrink-0 mt-0.5">•</span>
                      <span className="text-gray-700 font-semibold text-xs sm:text-sm leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Topic List */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#FA7E09] leading-snug border-b border-gray-100 pb-4">
                  What are the major SEO topics?
                </h3>
                <ul className="space-y-3.5 pl-0 list-none">
                  {[
                    "Onpage Optimization",
                    "Off Page Optimization (Backlinks)",
                    "White Hat and Black Hat Techniques",
                    "Google Webmaster Tools or Search Console",
                    "Pay Per Click, Google Adwords, Google Adsense, Google Tag Manager",
                    "Social Media Marketing, Affiliate Marketing, and Email Marketing.",
                    "Mobile App Promotions, Display Advertisement, and Digital Marketing.",
                    "Online Reputation Management and Youtube Ads.",
                    "Google Analytics and Certification.",
                    "Google Maps, Local SEO",
                    "Latest SEO Updates: Google Panda, Humming Bird, Penguin, and many more."
                  ].map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-black font-black shrink-0 mt-0.5">•</span>
                      <span className="text-gray-700 font-semibold text-xs sm:text-sm leading-relaxed">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. Orange Section: Course Duration & Why Join */}
      <section className="py-20 bg-[#FA7E09] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Subheading 1: Duration */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white leading-tight border-b border-white/20 pb-4 flex items-center gap-3">
              <Clock className="w-7 h-7 shrink-0 text-white" />
              What about the course duration?
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Total 20 - 30 Hrs Training Classes",
                "In Class, You Get In-Depth Practical Knowledge on each SEO Topic",
                "Workshops Classes, Different Time Slots Available",
                "Weekend Classes, Flexible Timings"
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-white font-extrabold text-lg leading-none mt-0.5">•</span>
                  <span className="font-sans font-bold text-xs sm:text-sm md:text-base text-white/95 leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Subheading 2: Why Join */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white leading-tight border-b border-white/20 pb-4 flex items-center gap-3">
              <Award className="w-7 h-7 shrink-0 text-white" />
              Why should I join an SEO training institute?
            </h2>
            
            <div className="space-y-8 font-sans">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-white/95">
                  <strong className="text-white text-base sm:text-lg block mb-1">SEO course can save you a lot of time:</strong> A good training institute will teach you everything which you need to know. Your time is saved to search for answers on Google. So enroll and learn from the best.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-white/95">
                  <strong className="text-white text-base sm:text-lg block mb-1">Increased resources:</strong> SEO rules are advanced and for sure you won't be able to understand each one of them on your own. Having a good SEO trainer can prove helpful and makes everything much easier.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-white/95">
                  <strong className="text-white text-base sm:text-lg block mb-1">Get inspired:</strong> When you are learning from someone experienced you get to know many real things. This will help you stay concentrated on your goals.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Contact Form & Map Section */}
      <div id="contact">
        <ContactFormWithMap />
      </div>

    </div>
  );
}
