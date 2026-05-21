"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Menu, X, Phone } from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";
import { NAV_LINKS, HEADER_LOCATIONS, AUSTRALIA_HEADER_LOCATIONS, CANADA_HEADER_LOCATIONS, MEGA_MENU_DATA, AUSTRALIA_MEGA_MENU_DATA, CANADA_MEGA_MENU_DATA } from "@/constants";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isMobileLocOpen, setIsMobileLocOpen] = useState(false);
  const [isLocDropdownOpen, setIsLocDropdownOpen] = useState(false); // New state to toggle location dropdown on click
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isClickTriggered, setIsClickTriggered] = useState(false);
  const pathname = usePathname();
  const isAustraliaAboutUs = pathname === "/australia/about-us" || pathname?.startsWith("/australia");
  const isEdmonton = false;
  const isCanada = pathname === "/canada" || pathname?.startsWith("/canada");

  const getPhoneNumber = () => {
    if (isAustraliaAboutUs) {
      return { href: "tel:+61434500077", label: "+61 434 500 077" };
    }
    if (isCanada) {
      return { href: "tel:+12368855725", label: "+1 236-885-5725" };
    }
    return { href: "tel:+919888484310", label: "+91-98884-84310" };
  };

  const { href: phoneHref, label: phoneLabel } = getPhoneNumber();

  const getLogoHref = () => {
    if (isAustraliaAboutUs) {
      return "/australia/about-us";
    }
    if (isCanada) {
      return "/canada";
    }
    return "/";
  };

  const logoHref = getLogoHref();

  const locationMenuData = {
    "Brisbane": [
      { name: "Website Design in Brisbane", href: "/australia/website-designing-in-brisbane" },
      { name: "Digital Marketing Agency in Brisbane", href: "/australia/digital-marketing-agency-in-brisbane" }
    ],
    "Melbourne": [
      { name: "Website Design Company in Melbourne", href: "/australia/website-designing-company-in-melbourne" },
      { name: "Digital Marketing Agency in Melbourne", href: "/australia/digital-marketing-agency-in-melbourne" }
    ],
    "Sydney": [
      { name: "Digital Marketing Agency in Seven Hills", href: "/australia/digital-marketing-agency-in-seven-hills" },
      { name: "Digital Marketing Agency in Quakers Hill", href: "/australia/digital-marketing-agency-in-quakers-hill" },
      { name: "Digital Marketing Agency in Blacktown", href: "/australia/digital-marketing-agency-in-blacktown" }
    ]
  };

  const canadaLocationMenuData = {
    "Edmonton": [
      { name: "Website Designing in Edmonton", href: "/canada/website-designing-company-in-edmonton" }
    ],
    "Vancouver": [
      { name: "Website Designing in Vancouver", href: "/canada/website-designing-company-in-vancouver" },
      { name: "Google Adwords Company in Vancouver", href: "/canada/google-adwords-company-in-vancouver" },
      { name: "SEO Agency & SEO Experts in Vancouver", href: "/canada/seo-agency-seo-experts-in-vancouver" },
      { name: "Mobile App Development in Vancouver", href: "/canada/mobile-app-development-in-vancouver" },
      // { name: "Web Designing & Web Development in Vancouver", href: "/canada/web-designing-web-development-in-vancouver" },
      { name: "SMO Agency & SMO Experts in Vancouver", href: "/canada/smo-agency-smo-experts-in-vancouver" },
      { name: "Best Digital Marketing Agency in Vancouver", href: "/canada/best-digital-marketing-agency-in-vancouver" },
      { name: "AI SEO Agency in Vancouver", href: "/canada/ai-seo-agency-in-vancouver" },
      { name: "E-Commerce SEO Agency in Vancouver", href: "/canada/e-commerce-seo-agency-in-vancouver" }
    ]
  };

  const activeLocationData = isCanada ? canadaLocationMenuData : locationMenuData;

  const navLinks = isAustraliaAboutUs
    ? [
      { name: "About Us", href: "/australia/about-us" },
      { name: "How We Work", href: "/how-we-work" },
      { name: "Services", href: "/#", hasDropdown: true },
      { name: "Packages", href: "/#", hasDropdown: true },
      { name: "What We Do", href: "/#", hasDropdown: true },
      { name: "Location", href: "/#", hasDropdown: true },
      { name: "Blog", href: "/australia/blog" },
      { name: "Contact Us", href: "/australia/contact-us" },
    ]
    : isCanada
      ? [
        { name: "About Us", href: "/canada/about-us" },
        { name: "Services", href: "/#", hasDropdown: true },
        { name: "Location", href: "/#", hasDropdown: true },
        { name: "Portfolio", href: "/canada/portfolio" },
        { name: "Blog", href: "/blog" },
        { name: "Contact Us", href: "/canada/contact-us" },
      ]
      : NAV_LINKS;

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
        setIsLocDropdownOpen(false);
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
      {/* Top Bar with Location Dropdown (Desktop Hover & Mobile/Tablet Click-to-Toggle) */}
      {!isEdmonton && (
        <div
          className="relative w-full bg-black py-2 text-white flex justify-center items-center gap-1 group/loc cursor-pointer z-[60]"
          onMouseEnter={() => setIsLocDropdownOpen(true)}
          onMouseLeave={() => setIsLocDropdownOpen(false)}
        >
          <div
            className="flex items-center gap-1 lg:pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation();
              setIsLocDropdownOpen(!isLocDropdownOpen);
            }}
          >
            <span className="text-[10px] sm:text-xs font-medium tracking-wide">Location</span>
            <IoMdArrowDropdown size={18} className="text-white" />
          </div>

          {/* Dropdown Menu (Desktop Hover & Mobile/Tablet Click-to-Toggle) */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white text-black shadow-2xl transition-all duration-300 origin-top border border-gray-100 z-50 ${isLocDropdownOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible group-hover/loc:opacity-100 group-hover/loc:visible"
              }`}
          >
            <div className="flex flex-col">
              {(isAustraliaAboutUs ? AUSTRALIA_HEADER_LOCATIONS : isCanada ? CANADA_HEADER_LOCATIONS : HEADER_LOCATIONS).map((loc: { name: string; href: string; subLocations?: { name: string; href: string; }[] }) => (
                <div key={loc.name} className="relative group/sub">
                  <Link
                    href={loc.href}
                    className="flex items-center justify-between px-6 py-3.5 text-[15px] font-medium tracking-normal hover:bg-[#ff9900] hover:text-white transition-colors border-b border-gray-50 last:border-b-0"
                    style={{ fontFamily: '"Poppins", Sans-serif' }}
                    onClick={() => setIsLocDropdownOpen(false)}
                  >
                    {loc.name}
                    {loc.subLocations && <IoMdArrowDropdown size={14} />}
                  </Link>

                  {/* Submenu */}
                  {loc.subLocations && (
                    <div className="absolute top-0 left-full w-48 bg-white text-black shadow-2xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 border border-gray-100">
                      {loc.subLocations.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-6 py-3 text-[15px] font-medium tracking-normal hover:bg-[#ff9900] hover:text-white transition-colors"
                          style={{ fontFamily: '"Poppins", Sans-serif' }}
                          onClick={() => setIsLocDropdownOpen(false)}
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
      )}

      <header className="w-full bg-[#f1f1f1] py-3 lg:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Mobile & Tablet Call Icon (Visible on < lg, hidden on lg, elevated to relative z-50 to float above menu overlay) */}
          {!isEdmonton && (
            <Link
              href={phoneHref}
              className="lg:hidden w-11 h-11 bg-black rounded-full flex items-center justify-center text-white transition-all hover:bg-[#ff9900] hover:scale-105 active:scale-95 shadow-md flex-shrink-0 relative z-50"
              aria-label="Call Us"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white"
              >
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.56 11.56 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.62c0-.55-.45-1-1-1z" />
              </svg>
            </Link>
          )}

          <div className={`lg:static z-50 ${isEdmonton ? "w-full flex justify-center" : "flex-grow lg:flex-grow-0 flex justify-center lg:justify-start"}`}>
            <Link href={logoHref} className="flex items-center">
              <div className="relative h-10 w-40 sm:h-14 sm:w-56">
                <Image
                  src="/logo.png"
                  alt="Flymedia Technology"
                  fill
                  sizes="(max-width: 768px) 160px, 224px"
                  className="object-contain"
                  priority
                  unoptimized={true}
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isEdmonton && (
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const hasMegaMenu = link.name === "Services" || link.name === "Packages" || link.name === "What We Do";
                const megaMenuData = hasMegaMenu
                  ? (isCanada
                    ? CANADA_MEGA_MENU_DATA[link.name as keyof typeof CANADA_MEGA_MENU_DATA] || MEGA_MENU_DATA[link.name as keyof typeof MEGA_MENU_DATA]
                    : isAustraliaAboutUs
                      ? AUSTRALIA_MEGA_MENU_DATA[link.name as keyof typeof AUSTRALIA_MEGA_MENU_DATA] || MEGA_MENU_DATA[link.name as keyof typeof MEGA_MENU_DATA]
                      : MEGA_MENU_DATA[link.name as keyof typeof MEGA_MENU_DATA])
                  : null;

                return (
                  <div
                    key={link.name}
                    className="nav-item-container h-full flex items-center relative"
                    onMouseEnter={() => {
                      if (link.hasDropdown && !isClickTriggered) {
                        setActiveMenu(link.name);
                      }
                    }}
                    onMouseLeave={() => {
                      if (link.hasDropdown && !isClickTriggered) {
                        setActiveMenu(null);
                      }
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        if (link.hasDropdown) {
                          e.preventDefault();
                          const isCurrentlyOpen = activeMenu === link.name;
                          setActiveMenu(isCurrentlyOpen ? null : link.name);
                          setIsClickTriggered(!isCurrentlyOpen);
                        } else {
                          setActiveMenu(null);
                          setIsClickTriggered(false);
                        }
                      }}
                      className={`flex items-center gap-1 text-[14px] font-normal tracking-tight transition-all duration-300 relative py-4 ${(isActive || activeMenu === link.name) ? "text-[#ff9900]" : "text-black hover:text-[#ff9900]"
                        }`}
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <IoMdArrowDropdown
                          size={18}
                          className={`transition-transform duration-300 ${activeMenu === link.name ? "rotate-180" : ""}`}
                        />
                      )}
                      <span className={`absolute bottom-3 left-0 h-0.5 bg-[#ff9900] transition-all duration-300 ${(isActive || activeMenu === link.name) ? "w-full" : "w-0"
                        }`} />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    {hasMegaMenu && megaMenuData && (
                      <div
                        className={`fixed left-0 w-full bg-[#000000] text-white shadow-2xl transition-all duration-300 origin-top z-[100] py-0 top-[110px] ${activeMenu === link.name
                          ? "opacity-100 visible translate-y-0 pointer-events-auto"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                          }`}
                      >
                        {/* Triangular Pointer pointing to the selected nav item */}
                        <div className={`absolute -top-2 h-4 w-4 bg-black rotate-45 z-[110] hidden lg:block border-t border-l border-white/5 ${link.name === "Services" ? "left-[36%] xl:left-[36.5%]" :
                          link.name === "Packages" ? "left-[43%] xl:left-[43.5%]" :
                            "left-[51%] xl:left-[51.5%]"
                          }`} />
                        <div className="max-w-7xl mx-auto flex h-full min-h-[450px]">
                          {/* Left Sidebar Content */}
                          <div className="w-[30%] py-5 pr-8  border-r border-white/5 flex flex-col justify-between relative overflow-hidden">
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
                                  setIsClickTriggered(true);
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
                                  <span className="text-[17px] font-semibold text-white group-hover/subitem:text-[#ff9900] transition-colors leading-tight" style={{ fontFamily: '"Poppins", Sans-serif' }}>
                                    {sublink.name}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Custom Location Dropdown for Australia */}
                    {link.name === "Location" && (
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 w-72 bg-[#ffffff] text-black shadow-2xl transition-all duration-300 origin-top z-[100] border border-white/10 rounded-2xl p-2 ${activeMenu === "Location"
                          ? "opacity-100 visible translate-y-0 pointer-events-auto"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                          }`}
                      >
                        {/* Invisible Hover Bridge to prevent premature onMouseLeave */}
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />

                        {/* Triangular Pointer pointing to the Location nav link */}
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 bg-white rotate-45 z-[110] border-t border-l border-white/10" />

                        <div className="flex flex-col space-y-1 relative z-10">
                          {Object.entries(activeLocationData).map(([city, items]) => (
                            <div
                              key={city}
                              className="relative group/city"
                            >
                              <div className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-[#000000]/10 hover:text-[#ff9900] transition-colors cursor-pointer text-[15px] font-medium" style={{ fontFamily: '"Poppins", Sans-serif' }}>
                                <span>{city}</span>
                                <ChevronRight size={16} />
                              </div>

                              {/* Submenu on Hover */}
                              <div className="absolute top-0 left-full ml-2 w-72 bg-white text-black shadow-2xl opacity-0 invisible group-hover/city:opacity-100 group-hover/city:visible transition-all duration-300 border border-white/10 rounded-2xl p-2 space-y-1">

                                {/* Invisible Hover Bridge */}
                                <div className="absolute top-0 -left-4 bottom-0 w-4 bg-transparent" />

                                {items.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-4 py-2.5 text-[15px] font-medium rounded-lg hover:bg-[#ff9900] hover:text-black transition-colors"
                                    style={{ fontFamily: '"Poppins", Sans-serif' }}
                                    onClick={() => {
                                      setActiveMenu(null);
                                      setIsClickTriggered(false);
                                    }}
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          )}

          {/* Desktop Call Action */}
          {!isEdmonton && (
            <div className="hidden lg:flex items-center">
              <Link
                href={phoneHref}
                className="rounded-full bg-black px-10 py-3.5 text-sm font-normal text-white tracking-normal transition-all hover:bg-[#ff9900] active:scale-95 shadow-lg"
              >
                Call Now
              </Link>
            </div>
          )}

          {/* Mobile Menu Toggle (Visible on < lg, hidden on lg) */}
          {!isEdmonton && (
            <button
              className="lg:hidden w-11 h-11 flex items-center justify-center bg-white border-2 border-[#ff9900] rounded-xl text-black hover:bg-gray-50 transition-colors z-50 flex-shrink-0"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setIsMobileLocOpen(false);
              }}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={22} className="text-black" /> : <Menu size={22} className="text-black" />}
            </button>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {!isEdmonton && isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden">
          <div className="flex flex-col h-full pt-24 px-6 overflow-y-auto">

            {/* Mobile Location Selector */}
            {/* <div className="mb-8 bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
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
            </div> */}

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const hasMegaMenu = link.name === "Services" || link.name === "Packages" || link.name === "What We Do" || link.name === "Location";
                const megaMenuData = (link.name === "Services" || link.name === "Packages" || link.name === "What We Do")
                  ? (isCanada
                    ? CANADA_MEGA_MENU_DATA[link.name as keyof typeof CANADA_MEGA_MENU_DATA] || MEGA_MENU_DATA[link.name as keyof typeof MEGA_MENU_DATA]
                    : isAustraliaAboutUs
                      ? AUSTRALIA_MEGA_MENU_DATA[link.name as keyof typeof AUSTRALIA_MEGA_MENU_DATA] || MEGA_MENU_DATA[link.name as keyof typeof MEGA_MENU_DATA]
                      : MEGA_MENU_DATA[link.name as keyof typeof MEGA_MENU_DATA])
                  : null;
                const isExpanded = expandedSection === link.name;

                return (
                  <div key={link.name} className="border-b border-gray-50 last:border-0">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => {
                          if (!hasMegaMenu) {
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className={`py-4 text-md font-normal tracking-tight ${isActive ? "text-[#ff9900]" : "text-black"}`}
                      >
                        {link.name}
                      </Link>
                      {hasMegaMenu && (
                        <button
                          onClick={() => toggleSection(link.name)}
                          className="p-4 text-[#ff9900]"
                        >
                          <IoMdArrowDropdown size={24} className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>

                    {/* Mobile Accordion Content */}
                    {megaMenuData && isExpanded && (
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

                    {/* Mobile Location Accordion Content */}
                    {link.name === "Location" && isExpanded && (
                      <div className="grid grid-cols-1 gap-4 pb-6 pl-4">
                        {Object.entries(activeLocationData).map(([city, items]) => (
                          <div key={city} className="space-y-2 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                            <h4 className="text-xs font-bold text-[#ff9900] uppercase tracking-wider">{city}</h4>
                            <div className="flex flex-col space-y-2 pl-2">
                              {items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-[13px] font-medium text-gray-600 hover:text-[#ff9900] transition-colors"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
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
                href={phoneHref}
                className="flex items-center justify-center gap-3 w-full bg-[#ff9900] py-5 rounded-xl text-white font-normal tracking-normal shadow-xl"
              >
                <Phone size={20} fill="white" />
                Call {phoneLabel}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
