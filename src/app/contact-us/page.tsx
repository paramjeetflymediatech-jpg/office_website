"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import ContactSection from "@/components/ContactSection";

const OFFICES = [
  {
    country: "India Office",
    city: "Ludhiana (Punjab)",
    address: "Plot no, 20, Vishal Nagar Ext, opposite Kashish Cafe, Vishal Nagar, Jawaddi Taksal, Ludhiana, Punjab 141001",
    phone: "+91-98884-84310",
    email: "anujguptaflymedia@gmail.com",
    email2: "anujgupta@flymediatech.com",
    mapUrl: "https://maps.google.com/maps?q=Flymedia%20Technology%20Ludhiana&t=m&z=16&output=embed&iwloc=near",
    link: "https://maps.app.goo.gl/uUNNUd6Xxi5wnCSY7"
  },
  {
    country: "Australia Office",
    city: "Sydney",
    address: "35 Edgewood Dr, Stanhope Gardens NSW 2768, Australia",
    phone: "+61434500077",
    email: "anujguptaflymedia@gmail.com",
    email2: "anujgupta@flymediatech.com",
    mapUrl: "https://maps.google.com/maps?q=Flymedia%20Technology%20Australia&t=m&z=16&output=embed&iwloc=near",
    link:"https://maps.app.goo.gl/YBwmGwc4KfA5jwg17"
  },
  {
    country: "Canada Office",
    city: "Surrey (BC)",
    address: "7664 126a St, Surrey, BC V3W 4A9, Canada",
    phone: "+1 236-885-5725",
    email: "anujguptaflymedia@gmail.com",
    email2: "anujgupta@flymediatech.com",
    mapUrl: "https://maps.google.com/maps?q=Flymedia%20Technology%20Canada&t=m&z=16&output=embed&iwloc=near",
    link: "https://maps.app.goo.gl/AMkNaZ1U4JQawq4w6"
  }
];

export default function ContactUs() {
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
      {/* text section */}
      <section className="py-15 px-4 md:px-8 bg-gray-100 text-center mx-auto">
        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-7xl mx-auto">Feel free to talk to our online representative at any time you please using our Live Chat system on our website or one of the below instant messaging programs. Please be patient while waiting for response. (24/7 Support!) Phone General Inquiries:</p>
      </section>

     <ContactSection />

      {/* Office Locations Section */}
      <section className="py-20 px-4 md:px-8 border-t border-gray-200 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {OFFICES.map((office, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className=" rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-300"
              >
                <div className="h-[250px] relative overflow-hidden">
                  <iframe
                    src={office.mapUrl}
                    className="w-full h-full border-0"
                  ></iframe>
                </div>
                <div className="p-6 flex bg-gray-100  flex-col gap-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold">{office.country}</h3>
                      <p className="text-[#ff9900] font-semibold text-xs tracking-[0.2em] mt-2">{office.city}</p>
                    </div>
                  </div>
                   
                  <div className="space-y-3">
                    <Link href={office.link} className="flex items-center gap-3 text-black font-semibold hover:text-[#ff9900] transition-colors group/link">
                      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center group-hover/link:bg-[#ff9900]/10">
                        <MapPin size={28} className="text-[#ff9900]" />
                      </div>
                      <span className="text-sm">{office.address}</span>
                    </Link>
                    <Link href={`tel:${office.phone}`} className="flex items-center gap-3 text-black font-semibold hover:text-[#ff9900] transition-colors group/link">
                      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center group-hover/link:bg-[#ff9900]/10">
                        <Phone size={28} className="text-[#ff9900]" />
                      </div>
                      <span className="text-sm">{office.phone}</span>
                    </Link>
                    <Link href={`mailto:${office.email}`} className="flex items-center gap-3 text-black font-semibold hover:text-[#ff9900] transition-colors group/link">
                      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center group-hover/link:bg-[#ff9900]/10">
                        <Mail size={28} className="text-[#ff9900]" />
                      </div>
                      <span className="text-sm">{office.email}</span>
                    </Link>
                    <Link href={`mailto:${office.email2}`} className="flex items-center gap-3 text-black font-semibold hover:text-[#ff9900] transition-colors group/link">
                      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center group-hover/link:bg-[#ff9900]/10">
                        <Mail size={28} className="text-[#ff9900]" />
                      </div>
                      <span className="text-sm">{office.email2}</span>
                    </Link>
                  </div>
                  <Link
                    href={office.link}
                    target="_blank"
                    className="mt-8 w-full border-2 border-black text-black font-black py-3 rounded-xl tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all group/btn"
                  >
                    View On Maps <ChevronRight size={28} className="group-hover/btn:translate-x-1 transition-transform" />
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
