"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Send, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Clock, 
  Sparkles 
} from "lucide-react";

export default function RequestFreeQuote() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    budget: "$1,000 - $5,000",
    service: "Web Designing",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate high-fidelity network API response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const servicesList = [
    "Web Designing",
    "Web Development",
    "SEO Marketing",
    "Social Media Marketing",
    "Google Adwords (PPC)",
    "Graphic Designing",
    "Content Writing",
    "Other / Custom Project"
  ];

  const budgetsList = [
    "Less than $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+"
  ];

  return (
    <main className="min-h-screen bg-[#F3F4F6] text-black pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header / Intro Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-bold text-gray-600">
            <span className="w-2 h-2 rounded-full bg-[#ff9900]" />
            Elevate Your Business Today
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold tracking-tight text-black leading-tight">
            Request A Free <span className="text-[#ff9900]">Quote</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
            Take the first step to scaling your digital brand. Fill out the form below, and our specialized digital consultants will assemble a custom proposal for your project within 24 hours.
          </p>
        </div>

        {/* Form and Side-Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 border border-gray-150 shadow-lg">
            {isSuccess ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle size={36} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">Thank You, {formState.name}!</h3>
                  <p className="text-gray-500 max-w-md mx-auto font-medium">
                    Your request has been successfully transmitted. Our consulting experts are already reviewing your details and will get in touch with you shortly.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormState({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        website: "",
                        budget: "$1,000 - $5,000",
                        service: "Web Designing",
                        details: "",
                      });
                    }}
                    className="inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#ff9900] hover:text-black transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-gray-700 block">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-black bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff9900] focus:border-[#ff9900] transition-all font-medium text-sm"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700 block">Business Email *</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-black bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff9900] focus:border-[#ff9900] transition-all font-medium text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone field */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-gray-700 block">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formState.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (123) 456-7890"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-black bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff9900] focus:border-[#ff9900] transition-all font-medium text-sm"
                    />
                  </div>

                  {/* Company field */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-bold text-gray-700 block">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formState.company}
                      onChange={handleInputChange}
                      placeholder="ACME Corp"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-black bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff9900] focus:border-[#ff9900] transition-all font-medium text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Service type */}
                  <div className="space-y-2 md:col-span-1">
                    <label htmlFor="service" className="text-sm font-bold text-gray-700 block">Required Service</label>
                    <select
                      name="service"
                      id="service"
                      value={formState.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-black bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff9900] focus:border-[#ff9900] transition-all font-medium text-sm"
                    >
                      {servicesList.map((srv, i) => (
                        <option key={i} value={srv}>{srv}</option>
                      ))}
                    </select>
                  </div>

                  {/* Project Budget */}
                  <div className="space-y-2 md:col-span-1">
                    <label htmlFor="budget" className="text-sm font-bold text-gray-700 block">Estimated Budget</label>
                    <select
                      name="budget"
                      id="budget"
                      value={formState.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-black bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff9900] focus:border-[#ff9900] transition-all font-medium text-sm"
                    >
                      {budgetsList.map((bdg, i) => (
                        <option key={i} value={bdg}>{bdg}</option>
                      ))}
                    </select>
                  </div>

                  {/* Website URL */}
                  <div className="space-y-2 md:col-span-1">
                    <label htmlFor="website" className="text-sm font-bold text-gray-700 block">Current Website</label>
                    <input
                      type="url"
                      name="website"
                      id="website"
                      value={formState.website}
                      onChange={handleInputChange}
                      placeholder="https://example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-black bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff9900] focus:border-[#ff9900] transition-all font-medium text-sm"
                    />
                  </div>
                </div>

                {/* Project Details textarea */}
                <div className="space-y-2">
                  <label htmlFor="details" className="text-sm font-bold text-gray-700 block">Project Details & Requirements *</label>
                  <textarea
                    name="details"
                    id="details"
                    required
                    rows={5}
                    value={formState.details}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your objectives, target audience, and any special features you would like us to configure..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-black bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff9900] focus:border-[#ff9900] transition-all font-medium text-sm leading-relaxed"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <ShieldCheck size={18} className="text-green-600 flex-shrink-0" />
                  <p className="text-xs text-gray-500 font-semibold">
                    Your personal and project details are encrypted and securely protected under standard NDAs.
                  </p>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ff9900] text-black font-extrabold py-4 rounded-xl hover:bg-black hover:text-white transition-all duration-300 shadow-xl shadow-orange-500/10 flex items-center justify-center gap-2 uppercase tracking-wider text-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Generating Proposal...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Submit Quote Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Key Trust Pillars */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Box */}
            <div className="bg-black text-white rounded-3xl p-8 border border-white/5 shadow-xl space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-extrabold text-white">Need Urgent Help?</h3>
                <p className="text-gray-400 text-sm font-medium">Reach our dedicated support team directly for rapid assistance.</p>
              </div>

              <div className="space-y-4">
                <a href="mailto:info@flymediatech.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#ff9900] group-hover:bg-[#ff9900] group-hover:text-black transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Email Us</p>
                    <p className="text-sm font-bold text-white group-hover:text-[#ff9900] transition-colors">anujguptaflymedia@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+919888484310" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#ff9900] group-hover:bg-[#ff9900] group-hover:text-black transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Call Directly</p>
                    <p className="text-sm font-bold text-white group-hover:text-[#ff9900] transition-colors">+91-98884-84310</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#ff9900]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Ludhiana Head Office</p>
                    <p className="text-sm font-bold text-white">Plot no, 20, Vishal Nagar Ext, Vishal Nagar, Ludhiana, Punjab 141001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Partner With Us Icons Grid */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-extrabold text-black tracking-tight pl-2">
                Why partner with Flymedia?
              </h3>

              <div className="space-y-4">
                {[
                  {
                    title: "13+ Years of Excellence",
                    desc: "Leverage standard, real-world digital marketing strategies honed over a decade of industry operations.",
                    icon: <Clock className="text-[#ff9900]" size={20} />
                  },
                  {
                    title: "Award-Winning Team",
                    desc: "Work collaboratively with MCA/Ph.D. certified digital architects who live and breathe your ROI goals.",
                    icon: <Sparkles className="text-[#ff9900]" size={20} />
                  },
                  {
                    title: "Loved By 500+ Businesses",
                    desc: "Join an elite cohort of scaling ventures across India, Canada, Australia, and all over the globe.",
                    icon: <Users className="text-[#ff9900]" size={20} />
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/50 border border-gray-150 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-base">{item.title}</h4>
                      <p className="text-gray-500 text-sm font-medium leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
