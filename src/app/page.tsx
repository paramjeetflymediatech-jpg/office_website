import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f1f1f1] font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 lg:pt-0 px-4 sm:px-6 lg:px-24 overflow-hidden">
        {/* Decorative Background Patterns */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Authentic Grayscale Butterfly Pattern */}
          <div className="absolute inset-0 opacity-[0.05] lg:opacity-[0.08] scale-110 pointer-events-none">
            <Image
              src="/image.png"
              alt="Background Pattern"
              fill
              className="object-cover object-left"
              priority
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center relative z-10 w-full gap-12 lg:gap-0">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
            <h2 className="text-[#ff9900] text-2xl sm:text-3xl md:text-5xl font-serif italic leading-tight">
              Generate More Leads
            </h2>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-serif font-black text-black leading-[1.1] max-w-xl">
              With Your Trusted Partner For Result-Oriented Digital Marketing Solutions
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl font-medium max-w-lg leading-relaxed pt-2">
              Make your business reach new heights of digital success through our comprehensive range of digital marketing solutions. From Social Media Marketing, SEO, and Content Writing to Website Design, Graphic design and a lot more, we cover all your digital marketing needs. Contact Us Today!
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pt-4 w-full sm:w-auto">
              <Link href="/about-us" className="group flex items-center justify-center gap-2 text-[#ff9900] font-bold text-lg hover:text-black transition-colors w-full sm:w-auto">
                About Us
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link href="/contact-us" className="bg-[#ff9900] text-white font-bold px-8 sm:px-10 py-4 rounded-full flex items-center justify-center gap-3 text-lg shadow-xl shadow-[#ff9900]/20 hover:bg-black transition-all hover:scale-105 w-full sm:w-auto">
                Contact Us
                <div className="flex gap-0.5">
                  <ChevronRight className="w-4 h-4" />
                  <ChevronRight className="w-4 h-4 -ml-2" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[300px] sm:h-[450px] lg:h-[800px] flex items-center justify-center order-1 lg:order-2 w-full">
            <div className="relative w-full h-full lg:transform lg:translate-x-10 lg:translate-y-10 lg:scale-110">
              <Image
                src="/butrterfly.png"
                alt="Monarch Butterfly"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Reel Section - Contained */}
      <section className="bg-white py-12 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video w-full group rounded-sm overflow-hidden shadow-lg border border-gray-100">
            <video
              src="/scrap/Archive/flymediatech.com_home/assets/videos/video_0.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
          </div>
        </div>
      </section>

      {/* Ready to Grow CTA Section */}
      <section className="relative min-h-[400px] lg:min-h-[500px] bg-[#06122d] flex items-center justify-center overflow-hidden py-16 lg:py-24">
        {/* Starry Background */}
        <div className="absolute inset-0 z-0 opacity-40">
           <Image src="/g-stars.png" alt="Stars" fill className="object-cover" />
        </div>

        {/* Mountain/Hill Silhouettes (Subtle) */}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#0a1931] to-transparent opacity-50 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
           {/* Center Logo Circle */}
           <div className="relative inline-block mb-8 lg:mb-12">
              {/* Spinning/Glowing Orange Ring */}
              <div className="absolute inset-0 -m-6 lg:-m-8 border-[8px] lg:border-[12px] border-[#ff9900] border-t-transparent border-b-transparent rounded-full animate-[spin_10s_linear_infinite] opacity-80"></div>
              <div className="absolute inset-0 -m-6 lg:-m-8 border-[8px] lg:border-[12px] border-[#ff9900] border-l-transparent border-r-transparent rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-40"></div>
              
              <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-transparent flex items-center justify-center p-4">
                 <Image 
                   src="/logo.png" 
                   alt="Flymedia Logo" 
                   width={200} 
                   height={80} 
                   className="object-contain brightness-0 invert" 
                 />
              </div>
           </div>

           {/* Big Bold Text */}
           <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-tight lg:leading-none mb-4">
              Ready to reach <br />
              <span className="text-white">new heights</span>
           </h2>

           {/* 3D Question Mark (Floating on the right) */}
           <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block animate-bounce duration-[3000ms]">
              <div className="relative w-48 h-48 lg:w-64 lg:h-64 opacity-90 drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
                 <Image 
                   src="/pink_3d_question_mark_1777717577013.png" 
                   alt="Question Mark" 
                   fill 
                   className="object-contain"
                 />
              </div>
           </div>
        </div>
      </section>

      {/* Floating Call Button */}
      <div className="fixed bottom-10 right-10 z-50">
        <Link href="tel:+919888484310" className="w-16 h-16 bg-[#ffcc33] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
            <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </Link>
      </div>

      {/* WhatsApp Button (using your existing component logic) */}
      <div className="fixed bottom-10 left-10 z-50 hidden lg:block">
        <Link
          href="https://api.whatsapp.com/send?phone=919888484310&text=Hi Anuj"
          target="_blank"
          className="flex items-center gap-3 rounded-full bg-[#2db742] px-6 py-3 text-white shadow-2xl hover:scale-105 transition-transform"
        >
          <div className="h-10 w-10 relative">
            <Image src="/dropdown-icons/whatsapp_logo.svg" alt="WhatsApp" fill />
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="text-[10px] text-[#d5f0d9] font-medium">Anuj Gupta | Online</span>
            <span className="text-[14px] font-bold">Need Help? Chat with us</span>
          </div>
        </Link>
      </div>
    </main>
  );
}
