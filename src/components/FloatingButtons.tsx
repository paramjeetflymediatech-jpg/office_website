"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function FloatingButtons() {
  const pathname = usePathname();
  const isAdminOrLogin = pathname?.startsWith("/admin") || pathname?.includes("/login") || pathname === "/login";

  if (isAdminOrLogin) return null;

  let callNumber = "+919888484310";
  // let whatsappNumber = "919888484310";

  if (pathname?.startsWith("/canada")) {
    callNumber = "+12368855725";
    // whatsappNumber = "12368855725";
  } else if (pathname?.startsWith("/australia")) {
    callNumber = "+61434500077";
    // whatsappNumber = "61434500077";
  }

  return (
    <>
      {/* Floating Call Button */}
      <div className="fixed bottom-10 right-10 z-50">
        <Link
          href={`tel:${callNumber}`}
          className="w-16 h-16 bg-[#ffcc33] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
            <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </Link>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-10 left-10 z-50 hidden lg:block">
        <Link
          href="https://api.whatsapp.com/send?phone=919888484310&text=Hi Anuj"
          target="_blank"
          className="flex items-center gap-3 rounded-full bg-[#2db742] px-6 py-3 text-white shadow-2xl hover:scale-105 transition-transform"
        >
          <div className="h-10 w-10 relative">
            <Image
              src="/dropdown-icons/whatsapp_logo.svg"
              alt="WhatsApp"
              fill
              sizes="40px"
            />
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="text-[10px] text-[#d5f0d9] font-medium">
              Anuj Gupta | Online
            </span>
            <span className="text-[14px] font-bold">Need Help? Chat with us</span>
          </div>
        </Link>
      </div>
    </>
  );
}
