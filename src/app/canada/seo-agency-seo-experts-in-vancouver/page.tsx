"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import ContactFormSection from "@/components/ContactFormSection";

export default function VancouverSEOPage() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans  text-black">
      {/* 1. Core Content Section (SEO Marketing Services - Masters Of Every Channel) */}
      <section className="py-16 md:py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Heading & Paragraph Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                SEO Marketing Services- Masters Of Every Channel
              </h1>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  <span className="font-normal">
                    SEO services are a strategic and comprehensive digital marketing technique which helps in increasing the visibility of the website and ranking in the organic, unpaid search engine results. The SEO services involve technical optimisation, on-page content enhancement and link building, which helps in improving the user experience, attracts the target audience and helps in increasing ROI.
                  </span>
                </p>
                <p>
                  <span className="font-normal">
                    Virtual development plays an important role in strengthening the digital presence. In today’s time, an active, right and striking online presence can help in building and growing any brand or business. If the company does not have a website, it may miss out on opportunities, as the website can help in increasing ROI. The optimisation of the website’s infrastructure to ensure that the search engine can index the website efficiently.
                  </span>
                </p>
                <p>
                  <span className="font-normal">
                    The technical SEO involves fixing 404 errors, increasing site speed, optimising URL structures, and enhancing mobile responsiveness. It is very important to take help from professionals to build the website, and it is important to make the website reach the top ranking on the search engine. There are many steps that are followed to reach this stage. The collaborative term for the process is called search engine optimisation (SEO).
                  </span>
                </p>
                <p>
                  <span className="font-normal">
                    The correct use of SEO helps in increasing traffic on the website, which helps in increasing sales. To gain the right knowledge about SEO suitable for your website, you can get the best knowledge from the professionals of FlyMedia Technology – the best{" "}
                  </span>
                  <b className="text-black font-extrabold">SEO agency in Vancouver.</b>
                </p>
              </div>
            </div>

            {/* Right Column: Provided Image Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-[5/3] max-w-[500px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden  border border-gray-100">
                <Image
                  src="/uploads/2026/05/webs-dei-1.png"
                  alt="Digital marketing and SEO solutions by Flymedia Technology in Vancouver."
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Why Are SEO Services Unbeatable Than The Other Services? */}
      <section className="py-16  border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Why Are SEO Services Unbeatable Than The Other Services?
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              <span style={{ fontWeight: 400 }}>
                It is important to have efficiency and affordability with the SEO services. The desired results can be achieved only when there are reliable solutions available, and also by following the changes in the search algorithm. The right kind of traffic will come to the website if the right SEO services are implemented by the{" "}
              </span>
              <b className="text-black font-extrabold">SEO experts in Vancouver</b>
              <span style={{ fontWeight: 400 }}>
                . Different SEO services help in bringing the right traffic to the website.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1: On Page SEO */}
            <div className="bg-[#414141] rounded-2xl p-8 hover:border-[#ff9900]/40 hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-extrabold text-[#ff9900]">1</span>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl font-bold text-white font-serif"
                  >
                    On Page SEO
                  </h3>
                </div>
                <p className="text-white text-xs sm:text-sm leading-relaxed font-medium">
                  On-page SEO is the practice of optimising the individual web pages using different codes to help the webpages rank higher on search engines and to bring the right kind of traffic. The factors that can be directly controlled are keyword optimisation, content quality, and the site structure. The website should also include headings, titles, URL structures, and authentic content.
                </p>
              </div>
            </div>

            {/* 2: Keyword Research */}
            <div className="bg-[#414141] rounded-2xl p-8  hover:border-[#ff9900]/40 hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-extrabold text-[#ff9900]">2</span>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl font-bold text-white font-serif"
                  >
                    Keyword Research
                  </h3>
                </div>
                <p className="text-white text-xs sm:text-sm leading-relaxed font-medium">
                  The usage of the keywords should be maximised to their potential, as it helps in getting maximum traffic. If you use the right keywords that people use on the search engines, it can help to bring the desired results. The keyword analysis should be given proper time.
                </p>
              </div>
            </div>

            {/* 3: Link Building */}
            <div className="bg-[#414141] rounded-2xl p-8  hover:border-[#ff9900]/40 hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-extrabold text-[#ff9900]">3</span>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl font-bold text-white font-serif"
                  >
                    Link Building
                  </h3>
                </div>
                <p className="text-white text-xs sm:text-sm leading-relaxed font-medium">
                  Link building is also a very important SEO service. It is the strategic process of high-quality backlinks from other reputable websites that helps to increase the site’s authority, search engine rankings, and traffic. It is the voice of confidence, as when other websites link to the content, it shows that the content is credible. The effective techniques used in content building are guest posting, broken link building, and content marketing. It will help the users to find your website reliable and informative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How To Choose The Right SEO Services? */}
      <section className="py-16 bg-[#F1F1F1] border-b border-gray-200/40">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              How To Choose The Right SEO Services?
            </h2>
            <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
              It is very important to choose the right SEO services for your website, as it helps in the growth of traffic on your website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1: Case Studies and Proofs */}
            <div className="rounded-3xl p-8 shadow-sm hover:border-[#ff9900]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="p-3.5 bg-gray-50 rounded-2xl w-fit text-[#ff9900]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-8 h-8 fill-current">
                    <path d="m62 4h-60a1 1 0 0 0 -1 1v54a1 1 0 0 0 1 1h60a1 1 0 0 0 1-1v-54a1 1 0 0 0 -1-1zm-1 2v10h-58v-10zm-58 14v-2h8v2zm10-2h8v2h-8zm10 0h8v2h-8zm10 0h8a2 2 0 0 1 -2 2h-6zm-30 40v-36h36a4 4 0 0 0 4-4h18v40z"></path>
                    <path d="m8 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z"></path>
                    <path d="m16 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z"></path>
                    <path d="m56 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z"></path>
                    <path d="m24 14h24a3 3 0 0 0 0-6h-24a3 3 0 0 0 0 6zm0-4h24a1 1 0 0 1 0 2h-24a1 1 0 0 1 0-2z"></path>
                    <path d="m52 22a6.948 6.948 0 0 0 -6.92 8h-10.08v-5a1 1 0 0 0 -1-1h-28a1 1 0 0 0 -1 1v24a1 1 0 0 0 1 1h21v5a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-19.685a6.994 6.994 0 0 0 -3-13.315zm-19 4v4h-5a1 1 0 0 0 -1 1v1h-20v-6zm-26 22v-14h20v14zm22 6v-14h24v14zm24-16h-24v-6h16.685a6.907 6.907 0 0 0 7.315 3.92zm-1-4a5 5 0 1 1 5-5 5.006 5.006 0 0 1 -5 5z"></path>
                    <path d="m53.293 26.293-1.293 1.293-1.293-1.293-1.414 1.414 1.293 1.293-1.293 1.293 1.414 1.414 1.293-1.293 1.293 1.293 1.414-1.414-1.293-1.293 1.293-1.293z"></path>
                    <path d="m9 28h2v2h-2z"></path>
                    <path d="m13 28h2v2h-2z"></path>
                    <path d="m31 34h2v2h-2z"></path>
                    <path d="m35 34h2v2h-2z"></path>
                    <path d="m9 36h16v2h-16z"></path>
                    <path d="m9 40h16v2h-16z"></path>
                    <path d="m9 44h12v2h-12z"></path>
                    <path d="m23 44h2v2h-2z"></path>
                    <path d="m31 42h20v2h-20z"></path>
                    <path d="m31 46h20v2h-20z"></path>
                    <path d="m31 50h16v2h-16z"></path>
                    <path d="m49 50h2v2h-2z"></path>
                  </svg>
                </div>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl font-bold text-black font-serif"
                >
                  Case Studies and Proofs
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
                  It is very important to ask for the case studies and examples of the SEO campaigns successfully conducted by the agency. Our experts are proficient in significantly increasing traffic and conversions rather than just ranking improvements, as the increased traffic will lead to increased sales.
                </p>
              </div>
            </div>

            {/* Box 2: Avoid Guaranteed Ratings */}
            <div className=" rounded-3xl p-8 shadow-sm hover:border-[#ff9900]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="p-3.5 bg-gray-50 rounded-2xl w-fit text-[#ff9900]">
                  <svg viewBox="0 0 488 512" className="w-8 h-8 fill-current">
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                  </svg>
                </div>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl font-bold text-black font-serif"
                >
                  Avoid Guaranteed Ratings
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
                  It is very important to focus on long-term growth and stability rather than just rankings, as long-term growth will be more beneficial for the website. Therefore, our professionals ensure long-term growth through SEO services that are best suited for your website, as one size does not fit all.
                </p>
              </div>
            </div>

            {/* Box 3: Check Ethical Practices */}
            <div className=" rounded-3xl p-8  shadow-sm hover:border-[#ff9900]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="p-3.5 bg-gray-50 rounded-2xl w-fit text-[#ff9900]">
                  <svg viewBox="0 0 640 512" className="w-8 h-8 fill-current">
                    <path d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"></path>
                  </svg>
                </div>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl font-bold text-black font-serif"
                >
                  Check Ethical Practices
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
                  The SEO services should be ethical and follow all the guidelines, rules, and regulations. The ethical website should follow all the rules to increase traffic, as unethical websites get penalised by the search engines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dominate Google Searches With FlyMedia Technology */}
      <section className="py-16 md:py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Image Illustration */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="relative w-full aspect-[5/3] max-w-[560px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden">
                <Image
                  src="/uploads/2026/05/webs-dei-3.png"
                  alt="Digital marketing and SEO services by Flymedia Technology in Vancouver."
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column: Copytext */}
            <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl font-serif font-bold text-black leading-tight"
              >
                Dominate Google Searches With FlyMedia Technology
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  <span className="font-normal">
                    FlyMedia Technology focuses on improving the SEO of your website by thoroughly targeting the right audience. Through effective digital marketing strategies, our professional team members ensure that your website appears at the top of the search results, thus increasing visibility and organic traffic.
                  </span>
                </p>
                <p>
                  <span className="font-normal">
                    We have created a strong and intellectual team member due to the constant efforts over the last 13 years, thus reflecting our expertise in implementing digital marketing strategies, along with taking your business to the next level. We ensure to thoroughly analyse the context of your specific business, thus deriving more organic traffic through an interactive website, excellent content creation and effective SEO strategies in an essential manner.
                  </span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      <ContactFormSection/>
    </main>
  );
}
