"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  SOCIAL_LINKS,
  QUICK_LINKS,
  OUR_SERVICES,
  LOCATIONS
} from "@/constants";

const SocialIcon = ({ d, color, href }: { d: string; color: string; href: string }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <svg
      className="h-6 w-6 fill-current text-white transition-all cursor-pointer"
      viewBox="0 0 24 24"
    >
      <path d={d} />
    </svg>
  </Link>
);

export default function Footer() {
  return (
    <footer className="relative bg-black pt-16 pb-4 text-white overflow-hidden font-sans">
      {/* Star Background Effect */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0  bg-cover"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Branding + Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Contacts Column */}
          <div className="space-y-8">
            <div className="relative h-16 w-full max-w-[240px]">
              <Image
                src="/dropdown-icons/logo-white.png"
                alt="Logo"
                fill
                sizes="(max-width: 768px) 100vw, 240px"
                className="object-contain object-left"
                priority
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-semibold">
                <Phone size={20} className="text-[#ff9900]" />
                <span className="text-white">+91-98884-84310</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold">
                <Mail size={20} className="text-[#ff9900]" />
                <span className="text-white">anujguptaflymedia@gmail.com</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex gap-4 pt-2">
              <Link href="https://www.google.com/partners/agency?id=6034178446" target="_blank" className="relative h-30 w-30  overflow-hidden shadow-xl">
                <Image
                  src="/dropdown-icons/PremierBadge.webp"
                  alt="Google Partner"
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </Link>
              <Link href="#" className="relative h-30 w-30">
                <Image
                  src="/dropdown-icons/pghoepwe.webp"
                  alt="PhonePe Partner"
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Locations Columns */}
          {LOCATIONS.map((loc, i) => (
            <div key={i} className="space-y-5">
              <div className="flex items-center gap-3 ">
                <MapPin size={24} fill="black" className="text-[#ff9900]" />
                <h3 className="text-xl font-semibold">{loc.title}</h3>
              </div>
              <p className="text-sm text-white/90 leading-snug font-medium min-h-[40px]">
                {loc.address}
              </p>
              <div className="relative h-48 w-full  overflow-hidden border border-white/10 group cursor-pointer shadow-2xl">
                <iframe
                  src={loc.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-500 opacity-90"
                />
                <div className="absolute top-3 left-3 bg-white text-[#1a73e8] text-[11px] px-3 py-1.5 font-bold flex items-center gap-1.5 shadow-md transition-colors pointer-events-none">
                  Maps
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Links, Techs, Payments */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12  border-white/10 ">
          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-bold uppercase tracking-tight mb-8 border-l-4 border-[#ff9900] pl-4 leading-none">Quick Links</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 text-[12.4px] text-white font-medium">
              {QUICK_LINKS.map((link, i) => (
                <Link key={i} href={link.href} className="transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-5">
            <h4 className="text-xl font-bold uppercase tracking-tight mb-8 border-l-4 border-[#ff9900] pl-4 leading-none">Our Services</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 text-[12.4px] text-white font-medium">
              <div className="flex flex-col gap-3.5">
                {OUR_SERVICES.slice(0, 5).map((link, i) => (
                  <Link key={i} href={link.href} className="transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3.5">
                {OUR_SERVICES.slice(5).map((link, i) => (
                  <Link key={i} href={link.href} className="transition-colors leading-tight">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CMS, Payments & Social */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2 uppercase tracking-wide">
                <span>CMS Platforms We</span>
                <span className="text-[#ff9900]">Deal</span>
              </h4>
              <div className="relative h-8 w-full cursor-pointer">
                <Image
                  src="/dropdown-icons/techs.webp"
                  alt="CMS Platforms"
                  fill
                  sizes="400px"
                  className="object-contain object-left"
                />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-wide">Payment Gateways</h4>
              <div className="relative h-8 w-full  cursor-pointer">
                <Image
                  src="/dropdown-icons/payments.webp"
                  alt="Payment Gateways"
                  fill
                  sizes="400px"
                  className="object-contain object-left"
                />
              </div>
            </div>

            <div className=" border-t border-white/5">
              <h4 className="text-lg font-bold mb-6 uppercase tracking-wide">Follow / Contact Us</h4>
              <div className="flex gap-5">
                {SOCIAL_LINKS.map(social => (
                  <SocialIcon key={social.name} {...social} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-10 pt-5 border-t border-white/10 text-center max-w-7xl mx-auto">
          <p className="text-[13px] font-semibold text-white ">
            Copyright © 2011 - 2024 Flymediatech.com. All Rights Reserved.
          </p>
        </div>
      </div>



      <div className="fixed bottom-24 right-8 z-[60] lg:hidden">
        {/* Mobile only call button if needed, but the original snippet had fixed WhatsApp only */}
      </div>
    </footer>
  );
}
