"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, HEADER_LOCATIONS, MEGA_MENU_DATA } from "@/constants";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isMobileLocOpen, setIsMobileLocOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isClickTriggered, setIsClickTriggered] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.nav-item-container')) {
        setActiveMenu(null);
        setIsClickTriggered(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsMobileLocOpen(false);
        setExpandedSection(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (name: string) => {
    setExpandedSection(expandedSection === name ? null : name);
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Top Bar with Location Dropdown (Desktop) */}
      <div className="relative w-full bg-black py-2 text-white flex justify-center items-center gap-1 group/loc cursor-pointer z-[60]">
        <div
          className="flex items-center gap-1 lg:pointer-events-auto"
          onClick={() => {
            if (window.innerWidth < 1024) {
              setIsMobileMenuOpen(true);
              setIsMobileLocOpen(true);
            }
          }}
        >
          <span className="text-[10px] sm:text-xs font-medium tracking-wide">Location</span>
          <ChevronDown size={14} className="text-[#ff9900]" />
        </div>

        {/* Dropdown Menu (Desktop Hover) */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white text-black shadow-2xl opacity-0 invisible group-hover/loc:opacity-100 group-hover/loc:visible transition-all duration-300 origin-top hidden lg:block border border-gray-100">
          <div className="flex flex-col">
            {HEADER_LOCATIONS.map((loc) => (
              <div key={loc.name} className="relative group/sub">
                <Link
                  href={loc.href}
                  className="flex items-center justify-between px-6 py-3.5 text-sm font-normal tracking-normal hover:bg-[#ff9900] hover:text-white transition-colors border-b border-gray-50 last:border-b-0"
                >
                  {loc.name}
                  {loc.subLocations && <ChevronRight size={14} />}
                </Link>

                {/* Submenu */}
                {loc.subLocations && (
                  <div className="absolute top-0 left-full w-48 bg-white text-black shadow-2xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 border border-gray-100">
                    {loc.subLocations.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-6 py-3 text-sm font-medium tracking-normal hover:bg-[#ff9900] hover:text-white transition-colors"
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
      </div>

      <header className="w-full bg-[#f1f1f1] py-3 lg:py-4 border-b border-gray-200/50 shadow-sm relative">
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
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const hasMegaMenu = link.name === "Services" || link.name === "Packages" || link.name === "What We Do";
              const shouldUseClick = link.name === "Services" || link.name === "Packages" || link.name === "What We Do";
              const megaMenuData = hasMegaMenu ? MEGA_MENU_DATA[link.name as keyof typeof MEGA_MENU_DATA] : null;

              return (
                <div 
                  key={link.name} 
                  className={`nav-item-container h-full flex items-center relative ${!shouldUseClick ? 'group' : ''}`}
                >
                  {shouldUseClick ? (
                    <button
                      onClick={() => {
                        const newState = activeMenu === link.name ? null : link.name;
                        setActiveMenu(newState);
                        setIsClickTriggered(true);
                      }}
                      className={`flex items-center gap-1 text-[13px] font-normal tracking-tight transition-all duration-300 relative py-4 ${
                        (isActive || activeMenu === link.name) ? "text-[#ff9900]" : "text-black hover:text-[#ff9900]"
                      }`}
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown 
                          size={14} 
                          className={`transition-transform duration-300 ${activeMenu === link.name ? "rotate-180" : ""}`} 
                        />
                      )}
                      <span className={`absolute bottom-3 left-0 h-0.5 bg-[#ff9900] transition-all duration-300 ${
                        (isActive || activeMenu === link.name) ? "w-full" : "w-0"
                      }`} />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 text-[13px] font-normal tracking-tight transition-all duration-300 relative py-4 ${
                        isActive ? "text-[#ff9900]" : "text-black hover:text-[#ff9900]"
                      }`}
                    >
                      {link.name}
                      {link.hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                      <span className={`absolute bottom-3 left-0 h-0.5 bg-[#ff9900] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`} />
                    </Link>
                  )}

                  {/* Mega Menu Dropdown */}
                  {hasMegaMenu && megaMenuData && (
                    <div 
                      className={`fixed top-[110px] left-0 w-full bg-[#000000] text-white shadow-2xl transition-all duration-300 origin-top z-[100] py-0 ${
                        shouldUseClick 
                          ? (activeMenu === link.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none")
                          : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                      }`}
                    >
                      <div className="max-w-7xl mx-auto flex h-full min-h-[450px]">
                        {/* Left Sidebar Content */}
                        <div className="w-[30%] py-5 pr-8 bg-[#ff9900]/10 border-r border-white/5 flex flex-col justify-between relative overflow-hidden">
                          <div className="relative z-10">
                            <div className="bg-[#723700] p-6 rounded-xl mb-6 shadow-xl">
                              <p className="text-sm font-medium leading-relaxed text-white">
                                {megaMenuData.sidebar.description}
                              </p>
                            </div>

                          </div>

                          {/* Rocket/Butterfly Image */}
                          <div className="absolute top-40 right-[-100px] bottom-0  h-50 inset-0 z-10">
                            <Image
                              src={megaMenuData.sidebar.image}
                              alt="Decorative"
                              fill
                              className="object-contain object-bottom transform hover:scale-110 transition-transform duration-700"
                              sizes="300px"
                            />
                          </div>
                        </div>

                        {/* Right Links Grid */}
                        <div className="w-[70%] p-1 grid grid-cols-3   bg-black content-start">
                          {megaMenuData.links.map((sublink: any) => (
                            <Link
                              key={sublink.name}
                              href={sublink.href}
                              onClick={() => {
                                setActiveMenu(null);
                                setIsClickTriggered(false);
                              }}
                              className="group/subitem flex items-center gap-4 hover:bg-white/5 p-3 rounded-lg transition-all duration-300"
                            >
                              <div className="relative h-10 w-10 flex-shrink-0 group-hover/subitem:scale-110 transition-transform">
                                <Image
                                  src={sublink.icon}
                                  alt={sublink.name}
                                  fill
                                  className="object-contain"
                                  sizes="40px"
                                />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[15px] font-normal text-white group-hover/subitem:text-[#ff9900] transition-colors leading-tight">
                                  {sublink.name}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Call Action */}
          <div className="hidden lg:flex items-center">
            <Link
              href="tel:+919888484310"
              className="rounded-full bg-black px-10 py-3.5 text-sm font-normal text-white tracking-normal transition-all hover:bg-[#ff9900] active:scale-95 shadow-lg"
            >
              Call Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-black hover:text-[#ff9900] transition-colors z-50"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsMobileLocOpen(false);
            }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden">
          <div className="flex flex-col h-full pt-24 px-6 overflow-y-auto">

            {/* Mobile Location Selector */}
            <div className="mb-8 bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
              <button
                onClick={() => setIsMobileLocOpen(!isMobileLocOpen)}
                className="w-full flex items-center justify-between p-4 text-sm font-bold text-black bg-white border-b border-gray-100"
              >
                <div className="flex items-center gap-2 text-[#ff9900]">
                  <ChevronRight size={18} className={isMobileLocOpen ? "rotate-90 transition-transform" : ""} />
                  <span className="font-normal">Select Location</span>
                </div>
              </button>
              {isMobileLocOpen && (
                <div className="p-2 space-y-1">
                  {HEADER_LOCATIONS.map((loc) => (
                    <div key={loc.name} className="space-y-1">
                      <Link
                        href={loc.href}
                        className="block px-4 py-3 text-sm font-normal text-gray-800 hover:text-[#ff9900] transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {loc.name}
                      </Link>
                      {loc.subLocations && (
                        <div className="pl-4 space-y-1">
                          {loc.subLocations.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-4 py-2 text-xs font-medium text-gray-600"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              — {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                const hasMegaMenu = link.name === "Services" || link.name === "Packages" || link.name === "What We Do";
                const megaMenuData = hasMegaMenu ? MEGA_MENU_DATA[link.name as keyof typeof MEGA_MENU_DATA] : null;
                const isExpanded = expandedSection === link.name;

                return (
                  <div key={link.name} className="border-b border-gray-50 last:border-0">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`py-4 text-md font-normal tracking-tight ${isActive ? "text-[#ff9900]" : "text-black"}`}
                      >
                        {link.name}
                      </Link>
                      {hasMegaMenu && (
                        <button
                          onClick={() => toggleSection(link.name)}
                          className="p-4 text-[#ff9900]"
                        >
                          <ChevronDown size={20} className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>

                    {/* Mobile Accordion Content */}
                    {hasMegaMenu && megaMenuData && isExpanded && (
                      <div className="grid grid-cols-1 gap-2 pb-6 pl-4">
                        {megaMenuData.links.map((sublink: any) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            <div className="relative h-6 w-6 flex-shrink-0">
                              <Image
                                src={sublink.icon}
                                alt={sublink.name}
                                fill
                                className="object-contain"
                                sizes="24px"
                              />
                            </div>
                            <span className="text-[14px] font-semibold text-gray-800">{sublink.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile Call CTA */}
            <div className="mt-auto pt-10 pb-10">
              <Link
                href="tel:+919888484310"
                className="flex items-center justify-center gap-3 w-full bg-[#ff9900] py-5 rounded-xl text-white font-normal tracking-normal shadow-xl"
              >
                <Phone size={20} fill="white" />
                Call +91-98884-84310
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
