"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight, Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, HEADER_LOCATIONS } from "@/constants";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Top Bar with Location Dropdown */}
      <div className="relative w-full bg-black py-2 text-white flex justify-center items-center gap-1 group/loc cursor-pointer z-[60]">
         <div className="flex items-center gap-1">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">Location</span>
            <ChevronDown size={14} className="text-[#ff9900]" />
         </div>

         {/* Dropdown Menu (Desktop Hover) */}
         <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white text-black shadow-2xl opacity-0 invisible group-hover/loc:opacity-100 group-hover/loc:visible transition-all duration-300 origin-top hidden lg:block">
            {HEADER_LOCATIONS.map((loc) => (
              <div key={loc.name} className="relative group/sub">
                 <Link 
                   href={loc.href}
                   className="flex items-center justify-between px-6 py-3 text-sm font-bold uppercase tracking-tight hover:bg-[#ff9900] hover:text-white transition-colors"
                 >
                   {loc.name}
                   {loc.subLocations && <ChevronRight size={14} />}
                 </Link>

                 {/* Submenu (e.g., Edmonton) */}
                 {loc.subLocations && (
                   <div className="absolute top-0 left-full w-48 bg-white text-black shadow-2xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                      {loc.subLocations.map((sub) => (
                        <Link 
                          key={sub.name}
                          href={sub.href}
                          className="block px-6 py-3 text-sm font-bold uppercase tracking-tight hover:bg-[#ff9900] hover:text-white transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                   </div>
                 )}
              </div>
            ))}
         </div>
      </div>

      <header className="w-full bg-[#f1f1f1] py-3 lg:py-4 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50">
            <div className="relative h-10 w-40 sm:h-14 sm:w-56">
              <Image
                src="/logo.png"
                alt="Flymedia Technology"
                fill
                sizes="(max-width: 768px) 160px, 224px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-[13px] font-bold tracking-tight transition-colors hover:text-[#ff9900] ${
                    link.active ? "text-[#ff9900]" : "text-gray-800"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                </Link>
                
                {link.active && (
                   <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ff9900] scale-x-100 transition-transform" />
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Call Action */}
          <div className="hidden lg:flex items-center">
            <Link 
              href="tel:+919888484310" 
              className="rounded-full bg-black px-10 py-3.5 text-sm font-black text-white uppercase tracking-tighter transition-all hover:bg-[#ff9900] active:scale-95 shadow-lg"
            >
              Call Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-black hover:text-[#ff9900] transition-colors z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 bg-white z-[40] transition-transform duration-500 lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full pt-28 px-6 pb-10 overflow-y-auto">
          {/* Mobile Nav Links */}
          <nav className="flex flex-col space-y-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-black uppercase tracking-tighter ${
                  link.active ? "text-[#ff9900]" : "text-black"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Locations */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 block">Our Locations</span>
            <div className="space-y-4">
               {HEADER_LOCATIONS.map((loc) => (
                 <div key={loc.name} className="space-y-3">
                    <Link 
                      href={loc.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-bold text-black hover:text-[#ff9900] flex items-center justify-between"
                    >
                      {loc.name}
                      <ChevronRight size={18} className="text-[#ff9900]" />
                    </Link>
                    {loc.subLocations && (
                      <div className="pl-4 space-y-2">
                        {loc.subLocations.map((sub) => (
                          <Link 
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-sm font-medium text-gray-600 hover:text-[#ff9900]"
                          >
                            — {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                 </div>
               ))}
            </div>
          </div>

          {/* Mobile Call CTA */}
          <div className="mt-auto pt-10">
            <Link 
              href="tel:+919888484310"
              className="flex items-center justify-center gap-3 w-full bg-[#ff9900] py-5 rounded-xl text-white font-black uppercase tracking-widest shadow-xl"
            >
              <Phone size={20} fill="white" />
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

