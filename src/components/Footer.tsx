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
    <motion.svg
      whileHover={{ scale: 1.2, color }}
      className="h-6 w-6 fill-current text-white transition-all cursor-pointer"
      viewBox="0 0 512 512"
    >
      <path d={d} />
    </motion.svg>
  </Link>
);

export default function Footer() {
  return (
    <footer className="relative bg-black pt-16 pb-4 text-white overflow-hidden font-sans">
      {/* Star Background Effect */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/g-stars.png')] bg-cover"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {LOCATIONS.map((loc, i) => (
            <div key={i} className="space-y-4">
              <div className="flex items-center gap-2 text-[#ff9900]">
                <MapPin size={24} fill="#ff9900" className="text-black" />
                <h3 className="text-xl font-bold uppercase tracking-tight">{loc.title}</h3>
              </div>
              <p className="text-sm text-white leading-snug max-w-[280px]">
                {loc.address}
              </p>
              <div className="relative h-52 w-full rounded-sm overflow-hidden border border-white/10 group cursor-pointer bg-white/5">
                <iframe
                  src={loc.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-3 left-3 bg-white text-blue-600 text-[10px] px-3 py-1.5 font-bold rounded shadow-md uppercase pointer-events-none">
                  Maps ↗
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-white/5 pt-16">
          {/* Brand & Contacts */}
          <div className="lg:col-span-3 space-y-8">
            <div className="relative h-20 w-full max-w-[240px]">
              <Image 
                src="/dropdown-icons/logo-white.png" 
                alt="Logo" 
                fill 
                sizes="(max-width: 768px) 100vw, 240px"
                className="object-contain object-left"
                priority
              />
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-4 text-sm font-medium">
                 <Phone size={20} className="text-[#ff9900]" />
                <span className="text-white">+91-98884-84310</span>
              </div>
              <div className="flex items-center gap-4 text-sm font-medium">
                 <Mail size={20} className="text-[#ff9900]" />
                <span className="text-white">anujguptaflymedia@gmail.com</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex gap-3">
              <Link href="https://www.google.com/partners/agency?id=6034178446" target="_blank" className="relative h-20 w-36 bg-white rounded-sm overflow-hidden p-1 flex items-center justify-center border border-white/20 transition-transform hover:scale-105">
                 <Image 
                   src="/dropdown-icons/PremierBadge.webp" 
                   alt="Google Partner" 
                   fill
                   sizes="144px"
                   className="object-contain"
                 />
              </Link>
              <Link href="#" className="relative h-20 w-36 bg-white rounded-sm overflow-hidden p-1 flex items-center justify-center border border-white/20 transition-transform hover:scale-105">
                 <Image 
                   src="/dropdown-icons/pghoepwe.webp" 
                   alt="PhonePe Partner" 
                   fill
                   sizes="144px"
                   className="object-contain"
                 />
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold uppercase tracking-tight mb-8 border-l-4 border-[#ff9900] pl-3 leading-none">Quick Links</h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-[13px] text-white font-medium">
                  {QUICK_LINKS.map((link, i) => (
                    <Link key={i} href={link.href} className="hover:text-[#ff9900] transition-colors">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Our Services */}
              <div>
                <h4 className="text-xl font-bold uppercase tracking-tight mb-8 border-l-4 border-[#ff9900] pl-3 leading-none">Our Services</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-[13px] text-white font-medium">
                  <div className="space-y-4">
                    {OUR_SERVICES.slice(0, 5).map((link, i) => (
                      <Link key={i} href={link.href} className="block hover:text-[#ff9900] transition-colors">
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {OUR_SERVICES.slice(5).map((link, i) => (
                      <Link key={i} href={link.href} className="block hover:text-[#ff9900] transition-colors leading-tight">
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: CMS & Payment */}
          <div className="lg:col-span-3 space-y-12">
            <div>
              <h4 className="text-lg font-bold mb-6 flex flex-col leading-tight">
                <span>CMS Platforms We</span>
                <span className="text-[#ff9900]">Deal</span>
              </h4>
              <div className="relative h-20 w-full">
                <Image 
                  src="/dropdown-icons/techs.webp" 
                  alt="CMS Platforms" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 300px"
                  className="object-contain object-left cursor-pointer"
                />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-tighter">Payment Gateways</h4>
              <div className="relative h-12 w-full">
                <Image 
                  src="/dropdown-icons/payments.webp" 
                  alt="Payment Gateways" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 300px"
                  className="object-contain object-left cursor-pointer"
                />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Follow/Contact</h4>
              <div className="flex gap-6">
                {SOCIAL_LINKS.map(social => (
                  <SocialIcon key={social.name} {...social} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] font-bold text-white uppercase tracking-wide">
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
