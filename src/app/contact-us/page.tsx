"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ChevronRight, Loader2 } from "lucide-react";

const OFFICES = [
  {
    country: "India Office",
    city: "Ludhiana (Punjab)",
    address: "Flymedia Technology, Plot no, 20, Vishal Nagar Ext, opposite Kashish Cafe, Ludhiana, Punjab 141001",
    phone: "+91-98884-84310",
    email: "anujguptaflymedia@gmail.com",
    mapUrl: "https://maps.google.com/maps?q=Flymedia%20Technology%20Ludhiana&t=m&z=16&output=embed&iwloc=near"
  },
  {
    country: "Australia Office",
    city: "Sydney",
    address: "Flymedia Technology Australia - Best Website Designing | Development | SEO Company in Sydney",
    phone: "+61 424 231 645",
    email: "info@flymediatech.com.au",
    mapUrl: "https://maps.google.com/maps?q=Flymedia%20Technology%20Australia&t=m&z=16&output=embed&iwloc=near"
  },
  {
    country: "Canada Office",
    city: "Surrey (BC)",
    address: "7664 126a St, Surrey, BC V3W 4A9, Canada",
    phone: "+1 604 754 5000",
    email: "canada@flymediatech.com",
    mapUrl: "https://maps.google.com/maps?q=Flymedia%20Technology%20Canada&t=m&z=16&output=embed&iwloc=near"
  }
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Web Design",
    message: ""
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: data.message });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "Web Design",
          message: ""
        });
      } else {
        setStatus({ type: "error", message: data.error || "Failed to send message." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "An unexpected error occurred." });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image
            src="/contant-banner.png"
            alt="Contact Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/60 z-[1]"></div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-black text-white tracking-tighter"
          >
            Contact Us
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            className="h-1.5 bg-[#ff9900] mx-auto mt-6 rounded-full"
          ></motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl  text-black tracking-tighter mb-8 leading-none">
                Get In Touch With Us
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Have a project in mind? We'd love to hear from you. Whether it's a new website, SEO strategy, or a custom app, our team is ready to help you grow.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-2xl group-hover:bg-[#ff9900] transition-colors duration-300">
                    <MapPin className="text-[#ff9900] group-hover:text-white transition-colors" size={28} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-gray-400 tracking-widest mb-1">Our Location</h4>
                    <p className="text-black font-semibold leading-snug">
                      Plot no, 20, Vishal Nagar Ext, opposite Kashish Cafe, Ludhiana, Punjab 141001
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-2xl group-hover:bg-[#ff9900] transition-colors duration-300">
                    <Phone className="text-[#ff9900] group-hover:text-white transition-colors" size={28} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-gray-400 tracking-widest mb-1">Phone Number</h4>
                    <p className="text-black font-semibold text-xl">+91-98884-84310</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-2xl group-hover:bg-[#ff9900] transition-colors duration-300">
                    <Mail className="text-[#ff9900] group-hover:text-white transition-colors" size={28} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-gray-400 tracking-widest mb-1">Email Address</h4>
                    <p className="text-black font-semibold">anujguptaflymedia@gmail.com</p>
                    <p className="text-black font-semibold">anujgupta@flymediatech.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 sm:p-12 rounded-[2rem] shadow-2xl shadow-gray-200/50"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black tracking-widest text-gray-400 ml-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full px-6 py-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff9900] transition-all font-semibold text-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black tracking-widest text-gray-400 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="w-full px-6 py-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff9900] transition-all font-semibold text-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black tracking-widest text-gray-400 ml-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="w-full px-6 py-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff9900] transition-all font-semibold text-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black  tracking-widest text-gray-400 ml-1">Subject</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff9900] transition-all font-semibold text-black appearance-none"
                    >
                      <option>Web Design</option>
                      <option>Digital Marketing</option>
                      <option>SEO Services</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black  tracking-widest text-gray-400 ml-1">Message</label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                    className="w-full px-6 py-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff9900] transition-all font-semibold text-black resize-none"
                  ></textarea>
                </div>

                {status.message && (
                  <div className={`p-4 rounded-xl text-sm font-bold ${
                    status.type === 'success' ? 'bg-green-100 text-green-700' : 
                    status.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {status.message}
                  </div>
                )}

                <button 
                  disabled={status.type === 'loading'}
                  className="w-full bg-[#ff9900] text-black font-black py-5 rounded-xl tracking-widest hover:bg-black hover:text-white transition-all duration-300 shadow-xl shadow-[#ff9900]/20 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {status.type === 'loading' ? (
                    <>
                      Sending... <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-black text-black tracking-tighter">
              Global <span className="text-[#ff9900]">Offices</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#ff9900] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {OFFICES.map((office, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-100"
              >
                <div className="h-[250px] relative overflow-hidden">
                  <iframe
                    src={office.mapUrl}
                    className="w-full h-full border-0"
                  ></iframe>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold">{office.city}</h3>
                      <p className="text-[#ff9900] font-semibold text-xs tracking-[0.2em] mt-2">{office.country}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                    {office.address}
                  </p>
                  <div className="space-y-3">
                    <Link href={`tel:${office.phone}`} className="flex items-center gap-3 text-black font-semibold hover:text-[#ff9900] transition-colors group/link">
                      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center group-hover/link:bg-[#ff9900]/10">
                        <Phone size={14} className="text-[#ff9900]" />
                      </div>
                      <span className="text-sm">{office.phone}</span>
                    </Link>
                    <Link href={`mailto:${office.email}`} className="flex items-center gap-3 text-black font-semibold hover:text-[#ff9900] transition-colors group/link">
                      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center group-hover/link:bg-[#ff9900]/10">
                        <Mail size={14} className="text-[#ff9900]" />
                      </div>
                      <span className="text-sm">{office.email}</span>
                    </Link>
                  </div>
                  <Link
                    href={office.mapUrl}
                    target="_blank"
                    className="mt-8 w-full border-2 border-black text-black font-black py-3 rounded-xl tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all group/btn"
                  >
                    View On Maps <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating CTA Buttons would go here (handled by global components) */}
    </main>
  );
}
