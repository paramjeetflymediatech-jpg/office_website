"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import LocationPortfolio from "@/components/LocationPortfolio";
import { TrendingUp, Target, PenTool, Share2, Phone, FileText, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function BestDigitalMarketingVancouverPage() {
  const marketingPillars = [
    {
      title: "Advanced Organic SEO",
      desc: "Drive targeted search traffic and dominate Vancouver search rankings with data-driven keyword strategies and robust technical optimization.",
      icon: <TrendingUp className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "High-ROI PPC Advertising",
      desc: "Maximize returns across Google Ads and social channels with precision targeting, compelling ad copy, and continuous campaign refinement.",
      icon: <Target className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Compelling Content Strategy",
      desc: "Engage your ideal demographic with high-quality, informative blog posts, articles, and website copy designed to convert visitors.",
      icon: <PenTool className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Dynamic Social Media",
      desc: "Build community loyalty and brand prestige across leading social platforms with captivating visual media and strategic audience interaction.",
      icon: <Share2 className="w-8 h-8 text-[#ff9900]" />
    }
  ];

  const unbeatableServices = [
    {
      number: "1",
      title: "On Page SEO",
      desc: "On-page SEO is the practice of optimising the individual web pages using different codes to help the webpages rank higher on search engines and to bring the right kind of traffic. The factors that can be directly controlled are keyword optimisation, content quality, and the site structure. The website should also include headings, titles, URL structures, and authentic content."
    },
    {
      number: "2",
      title: "Keyword Research",
      desc: "The usage of the keywords should be maximised to their potential, as it helps in getting maximum traffic. If you use the right keywords that people use on the search engines, it can help to bring the desired results. The keyword analysis should be given proper time."
    },
    {
      number: "3",
      title: "Link Building",
      desc: "Link building is also a very important SEO service. It is the strategic process of high-quality backlinks from other reputable websites that helps to increase the site’s authority, search engine rankings, and traffic. It is the voice of confidence, as when other websites link to the content, it shows that the content is credible. The effective techniques used in content building are guest posting, broken link building, and content marketing. It will help the users to find your website reliable and informative."
    }
  ];

  const chooseSeoBoxes = [
    {
      title: "Case Studies and Proofs",
      desc: "It is very important to ask for the case studies and examples of the SEO campaigns successfully conducted by the agency. Our experts are proficient in significantly increasing traffic and conversions rather than just ranking improvements, as the increased traffic will lead to increased sales.",
      icon: <FileText className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "Avoid Guaranteed Ratings",
      desc: "It is very important to focus on long-term growth and stability rather than just rankings, as long-term growth will be more beneficial for the website. Therefore, our professionals ensure long-term growth through SEO services that are best suited for your website, as one size does not fit all.",
      icon: <ShieldAlert className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "Check Ethical Practices",
      desc: "The SEO services should be ethical and follow all the guidelines, rules, and regulations. The ethical website should follow all the rules to increase traffic, as unethical websites get penalised by the search engines.",
      icon: <CheckCircle2 className="w-10 h-10 text-[#ff9900]" />
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-16 text-black">


      {/* 2. Core Content Section (SEO Marketing Services- Masters Of Every Channel) */}
      <section className="py-16 md:py-20 border-b border-gray-100 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left order-1">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                SEO Marketing Services- Masters Of Every Channel
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  SEO services are a strategic and comprehensive digital marketing technique which helps in increasing the visibility of the website and ranking in the organic, unpaid search engine results. The SEO services involve technical optimisation, on-page content enhancement and link building, which helps in improving the user experience, attracts the target audience and helps in increasing ROI. Virtual development plays an important role in strengthening the digital presence. In today’s time, an active, right and striking online presence can help in building and growing any brand or business. If the company does not have a website, it may miss out on opportunities, as the website can help in increasing ROI. The optimisation of the website’s infrastructure to ensure that the search engine can index the website efficiently. The technical SEO involves fixing 404 errors, increasing site speed, optimising URL structures, and enhancing mobile responsiveness.
                </p>
                <p>
                  It is very important to take help from professionals to build the website, and it is important to make the website reach the top ranking on the search engine. There are many steps that are followed to reach this stage. The collaborative term for the process is called search engine optimisation (SEO). The correct use of SEO helps in increasing traffic on the website, which helps in increasing sales. To gain the right knowledge about SEO suitable for your website, you can get the best knowledge from the professionals of FlyMedia Technology – the best <strong className="text-black font-semibold">SEO agency in Vancouver.</strong>
                </p>
              </div>
            </div>

            {/* Right Column: Image Illustration */}
            <div className="lg:col-span-6 flex justify-center order-2">
              <div className="relative w-full aspect-[5/3] max-w-[560px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden">
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

      {/* 3. Why Are SEO Services Unbeatable Than The Other Services? */}
      <section className="py-16 md:py-20  border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Why Are SEO Services Unbeatable Than The Other Services?
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              It is important to have efficiency and affordability with the SEO services. The desired results can be achieved only when there are reliable solutions available, and also by following the changes in the search algorithm. The right kind of traffic will come to the website if the right SEO services are implemented by the <strong className="text-black font-semibold">SEO experts in Vancouver.</strong> Different SEO services help in bringing the right traffic to the website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {unbeatableServices.map((item, index) => (
              <div
                key={index}
                className="bg-[#414141] rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#ff9900]/40 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="text-4xl font-black text-[#ff9900]">
                    {item.number}
                  </div>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-2xl text-white font-bold  font-serif"
                  >
                    {item.title}
                  </h3>
                  <p className=" text-white text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How To Choose The Right SEO Services? */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              How To Choose The Right SEO Services?
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              It is very important to choose the right SEO services for your website, as it helps in the growth of traffic on your website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chooseSeoBoxes.map((box, index) => (
              <div
                key={index}
                className=" rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-5"
              >
                <div className="p-4 bg-gray-50 rounded-2xl">
                  {box.icon}
                </div>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl font-bold text-black font-serif"
                >
                  {box.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Dominate Google Searches With FlyMedia Technology */}
      <section className="py-16 md:py-20 border-b border-gray-100">
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

            {/* Right Column: Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                Dominate Google Searches With FlyMedia Technology
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  FlyMedia Technology focuses on improving the SEO of your website by thoroughly targeting the right audience. Through effective digital marketing strategies, our professional team members ensure that your website appears at the top of the search results, thus increasing visibility and organic traffic.
                </p>
                <p>
                  We have created a strong and intellectual team member due to the constant efforts over the last 13 years, thus reflecting our expertise in implementing digital marketing strategies, along with taking your business to the next level. We ensure to thoroughly analyse the context of your specific business, thus deriving more organic traffic through an interactive website, excellent content creation and effective SEO strategies in an essential manner.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
