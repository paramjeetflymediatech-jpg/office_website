"use client";

import React from "react";
import ServicePage from "@/components/ServicePage";
import WebSoftwareSection from "@/components/WebSoftwareSection";
import { MapPin, Phone, Mail } from "lucide-react";

// --- Contact Form Section ---
const ContactFormSection = () => {
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
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Contact Details (Elementor HTML Replicated) */}
            <div className="lg:col-span-5 space-y-6 py-6 pr-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-none">
                Contact Us
              </h2>
              
              <div className="space-y-6">
                {/* Location */}
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-black font-sans leading-tight">
                    Location
                  </h2>
                  <div className="flex items-start gap-3 mt-1">
                    <span className="text-[#FA7E09] w-5 h-5 shrink-0 mt-0.5">
                      <svg aria-hidden="true" className="fill-[#FA7E09] w-5 h-5" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                      </svg>
                    </span>
                    <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">
                      Flymedia Technology, Plot no, 20, Vishal Nagar Ext, opposite Kashish Cafe, Vishal Nagar, Jawaddi Taksal, Ludhiana, Punjab 141001
                    </p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-black font-sans leading-tight">
                    Phone Number
                  </h2>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[#FA7E09] w-5 h-5 shrink-0">
                      <svg aria-hidden="true" className="fill-[#FA7E09] w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                      </svg>
                    </span>
                    <a href="tel:+91-98884-84310" className="text-gray-700 font-medium text-sm sm:text-base hover:text-[#FA7E09] transition-colors leading-relaxed">
                      +91-98884-84310
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-black font-sans leading-tight">
                    Email
                  </h2>
                  <div className="space-y-3 mt-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[#FA7E09] w-5 h-5 shrink-0">
                        <svg aria-hidden="true" className="fill-[#FA7E09] w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                        </svg>
                      </span>
                      <a href="mailto:anujguptaflymedia@gmail.com" className="text-gray-700 font-medium text-sm sm:text-base hover:text-[#FA7E09] transition-colors leading-relaxed">
                        anujguptaflymedia@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#FA7E09] w-5 h-5 shrink-0">
                        <svg aria-hidden="true" className="fill-[#FA7E09] w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                        </svg>
                      </span>
                      <a href="mailto:anujgupta@flymediatech.com" className="text-gray-700 font-medium text-sm sm:text-base hover:text-[#FA7E09] transition-colors leading-relaxed">
                        anujgupta@flymediatech.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form (Sharp corners, background classic) */}
            <div className="lg:col-span-7 bg-[#EFEFEF] p-8 sm:p-12 rounded-none shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-gray-200/20 relative z-20">
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-8 tracking-tight leading-none font-sans">
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

// --- Main Page ---
export default function WebBasedSoftwares() {
  const data = {
    title: "Web Based Software Development Company in Ludhiana, Punjab, India",
    h1: ["Web Based Software Development - Modern Solutions for Modern Business"],
    paragraphs: [
      "Software used on the internet via a web browser is web software’s. For such software’s you do not require any CDs and neither do you have to download any software from the net.",
    ],
    images: [],
    folderName: "flymediatech.com__our-services_web-based-softwares"
  };

  return (
    <ServicePage {...data}>
      <WebSoftwareSection />
      <ContactFormSection />
    </ServicePage>
  );
}
