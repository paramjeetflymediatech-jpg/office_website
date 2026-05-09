"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface ContactSectionProps {
  className?: string;
}

export default function ContactSection({ className = "" }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Service Inquiry",
    message: ""
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    const newErrors: string[] = [];
    if (!formData.name.trim()) newErrors.push("name");
    if (!formData.email.trim()) newErrors.push("email");
    if (!formData.phone.trim()) newErrors.push("phone");
    if (!formData.message.trim()) newErrors.push("message");

    setErrors(newErrors);

    if (newErrors.length > 0) {
      setStatus({ type: "error", message: "All fields are required. Please fill in everything before sending." });
      return;
    }

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
        setStatus({ type: "success", message: data.message || "Thank you! Your message has been sent successfully." });
        setErrors([]);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "Service Inquiry",
          message: ""
        });
      } else {
        setStatus({ type: "error", message: data.error || "Failed to send message." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "An unexpected error occurred. Please try again later." });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl  text-black tracking-tighter mb-8 leading-none">
                Contact Us
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
          <div className="lg:col-span-4 bg-gray-400 rounded-[2rem]  lg:w-[700px] sm:w-[400px] lg:right-10 lg:absolute  ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-400 p-8 sm:p-12 rounded-[2rem] "
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className='flex justify-center'><p className='text-white text-5xl font-semibold'>Get In Touch With Us</p></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black tracking-widest text-white ml-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`w-full px-6 py-4 bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all font-semibold text-black ${errors.includes('name') ? 'border-red-500 ring-2 ring-red-100' : 'border-gray-100 focus:ring-[#ff9900]'
                        }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black tracking-widest text-white ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={`w-full px-6 py-4 bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all font-semibold text-black ${errors.includes('email') ? 'border-red-500 ring-2 ring-red-100' : 'border-gray-100 focus:ring-[#ff9900]'
                        }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black tracking-widest text-white ml-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className={`w-full px-6 py-4 bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all font-semibold text-black ${errors.includes('phone') ? 'border-red-500 ring-2 ring-red-100' : 'border-gray-100 focus:ring-[#ff9900]'
                        }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black  tracking-widest text-white ml-1">Select Your Enquiry Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}

                      className={`w-full px-6 py-4 bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all font-semibold text-black appearance-none ${errors.includes('subject') ? 'border-red-500 ring-2 ring-red-100' : 'border-gray-100 focus:ring-[#ff9900]'
                        }`}
                    >
                      <option> - Select Your Enquiry - </option>
                      <option>Web Design</option>
                      <option>Digital Marketing</option>
                      <option>SEO Services</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black  tracking-widest text-white ml-1">Message</label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}

                    placeholder="Tell us about your project..."
                    className={`w-full px-6 py-4 bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all font-semibold text-black resize-none ${errors.includes('message') ? 'border-red-500 ring-2 ring-red-100' : 'border-gray-100 focus:ring-[#ff9900]'
                      }`}
                  ></textarea>
                </div>

                {status.message && (
                  <div className={`p-4 rounded-xl text-sm font-bold ${status.type === 'success' ? 'bg-green-100 text-green-700' :
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
  );
}
