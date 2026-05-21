"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LocationPortfolio from "@/components/LocationPortfolio";
import ContactFormSection from "@/components/ContactFormSection";
import { ShoppingCart, Tag, Search, BarChart3, Phone, Laptop, Key, Users } from "lucide-react";

export default function EcommerceSeoVancouverPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const ecommercePillars = [
    {
      title: "Product Page Keyword Optimization",
      desc: "Implement highly targeted, buyer-intent search terms across product listings to secure top positions in Google Shopping and organic search.",
      icon: <Tag className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "High-Converting Descriptions",
      desc: "Craft persuasive, compelling product copy that addresses customer pain points, highlights key features, and accelerates purchasing decisions.",
      icon: <ShoppingCart className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Technical E-Commerce Indexing",
      desc: "Streamline site architecture, resolve complex URL structures, and implement robust schema markup for flawless search engine crawling.",
      icon: <Search className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Advanced Revenue Tracking",
      desc: "Deploy sophisticated analytics to accurately measure conversion attribution, average order value, and continuous revenue growth.",
      icon: <BarChart3 className="w-8 h-8 text-[#ff9900]" />
    }
  ];

  const visibilitySteps = [
    {
      number: "1",
      title: "Searching and optimising keywords",
      desc: "The creative team members of FlyMedia Technology understand the need to find the relevant and targeted keywords that are usually used by the viewers to find the desirable product. Therefore, such keywords are searched thoroughly with the purpose of optimising them into the websites, such as product pages, titles, or links, in an essential manner. This is basically done to provide a complete idea to the search engine for ranking your brand’s website at the top of Google."
    },
    {
      number: "2",
      title: "Creating and optimising content:",
      desc: "Identifying the pain points of the targeted audience is necessary in order to drive the highest rank in search engines. Therefore, our creative team members ensure to create and optimise the content, including tutorials and product guides, in an essential manner. Such content can significantly resonate with the targeted audience, thus making your brand’s content more engaging and captivating."
    },
    {
      number: "3",
      title: "Analysing SEO efforts",
      desc: "Tracking the SEO results by thoroughly maintaining the e-commerce websites is necessary. Therefore, our professionals understand the need and provide you with a thorough analysis of our SEO efforts. This is done by thoroughly examining the conversion rates and visibility in an essential manner. This holds utmost importance for clearly identifying different patterns and trends to keep your website working precisely."
    },
    {
      number: "4",
      title: "On-page optimisation",
      desc: "FlyMedia Technology have intellectual team members, having a precise understanding of enhancing the visibility of your product pages in an essential manner. Therefore, we make sure to inculcate the trending SEO keywords in the product description, meta tags and title with the purpose of ranking your page higher in Google search. Along with this, specific keywords are also added to the URL with the purpose of improving your content through search engines in an effective manner."
    },
    {
      number: "5",
      title: "SEO audit",
      desc: "Understanding the bottlenecks and specific issues in your e-commerce website is also necessary; therefore, we make sure to manage such issues with particular strategies. Our professionals ensure to identify the real problem when your website isn’t responding well in order to implement effective SEO solutions."
    }
  ];

  const discoveryBoxes = [
    {
      title: "Responsive and fast-loading websites",
      desc: "By engaging with the professionals of FlyMedia Technology -- the best e-commerce SEO agency in Vancouver, you can relax your mind regarding the essential features of e-commerce websites. Your websites can efficiently improve user experience, which is basically necessary for attracting more customers' attention.",
      icon: <Laptop className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "Utilising SEO keywords",
      desc: "We make sure to thoroughly add the specific and trending SEO keywords in product descriptions and meta tags that can eventually improve visibility. Such a mindful approach can efficiently help in increasing visibility over your product page and enhance your digital space.",
      icon: <Key className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "Understanding customers’ preferences",
      desc: "The talented team members of FlyMedia Technology have a precise understanding of customers’ preferences through their browsing history. Therefore, through such an effective approach, we make sure to clearly understand the customer’s interest and provide them with a personalised marketing experience.",
      icon: <Users className="w-10 h-10 text-[#ff9900]" />
    }
  ];

  const faqs = [
    {
      question: "What are the common mistakes of e-commerce SEO that should be avoided?",
      answer: "Make sure to avoid maintaining the poor structure of the specific product page, as this can make it harder for search engines to optimize your content. Along with this, neglecting the use of SEO keywords is a major mistake of e-commerce SEO that should be avoided."
    },
    {
      question: "What does an integrative product page include?",
      answer: "An interactive product page includes the perfect product description, along with specific images in an essential manner. Also, customer ratings, feedback and the product’s price should be demonstrated vividly to make it interactive and capable for search engines."
    },
    {
      question: "Which type of keywords would be best for e-commerce websites?",
      answer: "Using long-tail keywords for your e-commerce websites would be best in terms of driving organic traffic and making your online store more visible."
    },
    {
      question: "After how much time can I expect the results of using SEO in e-commerce websites?",
      answer: "You can start expecting e-commerce SEO results after 5 to 6 months, as it takes time to align with the customer’s preferences and intent. Also, due to high competition in online marketing, it can take up to 6 months as well to get precise and desired results."
    },
    {
      question: "Does content have an integral role in e-commerce websites or not?",
      answer: "Yes, content plays a crucial role in e-commerce websites when it comes to ranking your product page highest in Google search. Content can significantly help in optimising your blog post or product description in search engine rankings."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans  text-black">

      {/* 2. Core Content Section (Best Digital Marketing Agency in Vancouver) */}
      <section className="py-16 md:py-10 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column (Desktop) / Second (Mobile): Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                Best Digital Marketing Agency in Vancouver
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Are you still unaware of the powerful impact of e-commerce SEO on your online websites? If yes, then it is high time to partner with the professionals of FlyMedia Technology – the best <strong className="text-black font-semibold">e-commerce SEO agency in Vancouver</strong>, providing appropriate guidance on utilising different SEO keywords smartly. Our professionals ensure to thoroughly utilise SEO keywords in the product page with the purpose of driving organic traffic.
                </p>
                <p>
                  With the mindful strategies of adding SEO keywords in your e-commerce websites, we make sure to drive the viewer’s attention and increase your sales in an effective manner. Along with this, we clearly understand your specific coline goals, thus ensuring to add ranking SEO keywords in the product pages of your e-commerce websites, hence increasing the visibility in an essential manner.
                </p>
              </div>
            </div>

            {/* Right Column (Desktop) / First (Mobile): Image Illustration */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[5/3] max-w-[560px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden">
                <Image
                  src="/uploads/2026/05/webs-dei-12.png"
                  alt="Digital marketing and SEO strategies for e-commerce success by Flymedia Technology."
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

      {/* 3. Make Your Online Store Visible With E-Commerce SEO */}
      <section className="py-16 md:py-10 ">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Make Your Online Store Visible With E-Commerce SEO
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              With more than 13 years of expertise in utilising technical SEO, we have developed a reputable image in boosting your e-commerce website by improving its visibility and driving organic traffic. This time as well, our professionals are ready to increase your online sales through e-commerce SEO that can significantly help in driving your product page to the highest Google rank.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibilitySteps.map((item, index) => (
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
                    className="text-2xl text-white font-bold font-serif"
                  >
                    {item.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Get Your Products Discovered And Sold With FlyMedia Technology */}
      <section className="py-16 md:py-10">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Get Your Products Discovered And Sold With FlyMedia Technology
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              At FlyMedia Technology, our team is built with strong pillars of precision, professionalism, execution and talent that can significantly help in driving accurate results. We make sure to thoroughly optimise each product page of your e-commerce website with the purpose of deriving organic traffic for your specific brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {discoveryBoxes.map((box, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-5"
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


      {/* 6. FAQs Accordion */}
      <section className="py-16 md:py-10 ">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              FAQs
            </h2>
          </div>

          <div className="border-t border-[#ff9900]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border-b border-[#ff9900]">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-base sm:text-lg text-black leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-[#ff9900] shrink-0">
                      {isOpen ? (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32">
                          <path d="M8 20l8-8 8 8z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32">
                          <path d="M12 8l8 8-8 8z" />
                        </svg>
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-6 pr-8 text-gray-700 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ContactFormSection />

      {/* Dynamic FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }, null, 2),
        }}
      />
    </main>
  );
}
