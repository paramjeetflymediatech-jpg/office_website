"use client";

import React, { useState } from "react";

export default function SummerTrainingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    mode: "Offline",
    course: "Digital Marketing",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    // Form Validation
    const { name, email, phone, college, mode, course, message } = formData;
    
    if (!name.trim()) {
      setToast({ type: "error", text: "Please enter your full name." });
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setToast({ type: "error", text: "Please enter a valid email address." });
      setLoading(false);
      return;
    }

    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s-]/g, ''))) {
      setToast({ type: "error", text: "Please enter a valid phone number (10-15 digits)." });
      setLoading(false);
      return;
    }

    const apiData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      college: formData.college,
      mode: formData.mode,
      course: formData.course,
      message: formData.message
    };

    try {
      const res = await fetch("/api/summer-training", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apiData),
      });
      const data = await res.json();
      if (res.ok) {
        setToast({ type: "success", text: "Application submitted successfully! We will contact you soon." });
        setFormData({ name: "", email: "", phone: "", college: "", mode: "Offline", course: "Digital Marketing", message: "" });
      } else {
        setToast({ type: "error", text: data.error || "Something went wrong. Please try again." });
      }
    } catch {
      setToast({ type: "error", text: "Network error. Please check your connection and try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative z-20 w-full h-full flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-purple-900 mb-8 tracking-tight leading-none text-center">
        Apply for Summer Training
      </h2>

      {toast && (
        <div className={`mb-6 flex items-start gap-3 px-4 py-3 text-sm font-medium border rounded-xl ${
          toast.type === "success"
            ? "bg-green-50 border-green-300 text-green-800"
            : "bg-red-50 border-red-300 text-red-800"
        }`}>
          {toast.type === "success" ? (
            <svg className="w-5 h-5 shrink-0 mt-0.5 fill-green-600" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
          ) : (
            <svg className="w-5 h-5 shrink-0 mt-0.5 fill-red-600" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
          )}
          <span>{toast.text}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="w-full">
            <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              disabled={loading}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm transition-all"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              disabled={loading}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="w-full">
            <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              disabled={loading}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm transition-all"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-bold text-gray-700 mb-2">College/University Name</label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              placeholder="Where do you study?"
              disabled={loading}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="w-full">
            <label className="block text-sm font-bold text-gray-700 mb-2">Training Mode *</label>
            <select
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm transition-all appearance-none cursor-pointer"
            >
              <option value="Offline">Offline (Ludhiana)</option>
              <option value="Online">Online</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block text-sm font-bold text-gray-700 mb-2">Course Interested In *</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm transition-all appearance-none cursor-pointer"
            >
              <option value="digital-marketing">Digital Marketing</option>
              <option value="web-development">Web Development</option>
              <option value="video-editing">Video Editing</option>
              <option value="graphic-designing">Graphic Designing</option>
              <option value="mern-stack-development ">MERN Stack Development</option>
            </select>
          </div>
        </div>

        <div className="w-full">
          <label className="block text-sm font-bold text-gray-700 mb-2">Any Queries / Additional Details</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Type your message here..."
            disabled={loading}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm resize-none transition-all"
          />
        </div>

        <div className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 bg-pink-600 text-white hover:bg-pink-700 transition-all duration-300 font-black px-12 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto min-w-[200px]"
          >
            {loading && (
              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
            )}
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
}
