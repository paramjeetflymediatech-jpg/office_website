"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import LocationPortfolio from "@/components/LocationPortfolio";
import { Heart, Lightbulb, Globe, Award, Phone } from "lucide-react";

export default function CanadaAboutUsPage() {
  const valuesPillars = [
    {
      title: "Passion & Dedication",
      desc: "Our enthusiasm for digital excellence fuels every campaign, ensuring we invest our utmost energy into achieving your business goals.",
      icon: <Heart className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Innovation & Creativity",
      desc: "We stay ahead of digital marketing trends to deploy cutting-edge strategies and imaginative design concepts that set your brand apart.",
      icon: <Lightbulb className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Global Expertise",
      desc: "From local startups to multinational corporations, our extensive international experience allows us to scale businesses effectively.",
      icon: <Globe className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Result-Oriented Success",
      desc: "We measure our achievements entirely by the tangible growth, increased revenue, and digital success we generate for our clients.",
      icon: <Award className="w-8 h-8 text-[#ff9900]" />
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-16 text-black">

      {/* 1. Hero Title Banner */}
      <section className="relative w-full h-[220px] sm:h-[280px] bg-cover bg-center bg-fixed bg-no-repeat flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/digital-marketing-flymedia.webp')`
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="bg-black/50 backdrop-blur-md border border-white/10 px-8 py-5 rounded-xl shadow-2xl inline-block">
            <h1
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-serif"
            >
              About Fly Media Technology{" "}
              <span className="text-[#ff9900] relative inline-block">
                Surrey
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#ff9900]" />
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Core Content Section */}
      <section className="py-16 md:py-20 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Image Illustration */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="relative w-full aspect-[5/3] max-w-[560px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden border border-gray-100">
                <Image
                  src="/uploads/2024/05/digital-canada.jpg"
                  alt="Social media marketing and digital advertising strategy illustration."
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Right Column: Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                Fly Media Technology: Your Trusted Digital Marketing Company in Surrey
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Partner with Fly Media Technology to take your business to the next level. We provide digital marketing services to all businesses, from small to large-scale enterprises to startups globally. Our passion, innovation, creativity and zeal to help others achieve success drives us to provide the best services. This sets us apart and makes us the best digital marketing company in Surrey. So, you can entrust Fly Media Technology to deliver high-quality, result-oriented services.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Entrust Our Result-Oriented Digital Marketing Services */}
      <section className="py-16 md:py-20 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                Entrust Our Result-Oriented Digital Marketing Services
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Digital marketing is a broad term that entails various services and methods that can be used to boost the presence of your business. Our digital marketing services include SEO (Search Engine Optimization), Content Writing and Marketing, PPC (Pay-per-click), Social Media Marketing, Website Design and Development, Google Ads, Graphic and Logo design, and many more.
                </p>
                <p>
                  We provide an array of digital marketing services that can be used and customized as per your requirements. If you want to get a website for your business, get our website development services. Similarly, if you want your website to rank high in the Google search results, get our SEO services. We have services for all your requirements. Our services are popular in Canada and around the world; you can get in touch as well. Contact the best digital marketing company in Surrey and get bespoke digital marketing solutions.
                </p>
              </div>
            </div>

            {/* Right Column: Image Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full aspect-[4/5] max-w-[460px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden">
                <Image
                  src="/uploads/2024/05/gsfkg.png"
                  alt="Entrust Our Result-Oriented Digital Marketing Services"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Get Expert Consultation Banner */}
      <section className="py-16 border-b border-gray-200/50">
        <div className="max-w-4xl mx-auto px-6 space-y-4 text-center">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl md:text-4xl font-serif font-bold text-black"
          >
            Get Expert Consultation
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed max-w-3xl mx-auto">
            Even if you are unsure about the service or need an expert consultation, we provide digital marketing consultation, too. Let us know what your requirements and goals are, and based on that, we will let you know which digital marketing services will work best for you. So what are you waiting for? Reach out to us today!
          </p>
        </div>
      </section>

      {/* 5. Elevate Your Business & Ensure Its Growth */}
      <section className="py-16 md:py-20 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Image Illustration */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="relative w-full aspect-[1/1] max-w-[460px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden">
                <Image
                  src="/uploads/2024/05/fgjipsdfgjs.png"
                  alt="Elevate Your Business & Ensure Its Growth"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column: Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                Elevate Your Business & Ensure Its Growth
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Grow your business (small or large-scale) with our digital marketing services and reach new heights. Our services are focused on quality and also aim to attain your goals and objectives. We formulate strategies that align with your vision and help you achieve success. We can help you increase your sales, reach a wide audience, generate conversions and leads, track your performance and create a strong online presence.
                </p>
                <p>
                  We provide comprehensive digital marketing services, too, in which we focus on all aspects, from website designing, content writing, SEO, and social media marketing to promoting your brand on multiple platforms and running PPC and Google Ads campaigns. Our extensive service is effective and provides result-oriented outcomes. Not just this, we provide these services at a reasonable price. So, do not let price or other factors refrain you from getting services from the best digital marketing company in Surrey.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Get In Touch With Us Today Banner */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-4 text-center">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl md:text-4xl font-serif font-bold text-black"
          >
            Get In Touch With Us Today
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed max-w-3xl mx-auto">
            To stay competitive in the current tech-savvy digital world, it is crucial to effectively plan and utilize different digital marketing services. For this, Fly Media Technology, the best digital marketing company in Surrey, is here for you. We can help you unlock your potential and accomplish your goals through our effective and reliable digital marketing services. Get in touch with us today and take a step closer to success.
          </p>
        </div>
      </section>

    </main>
  );
}
