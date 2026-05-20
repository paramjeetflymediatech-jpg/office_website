"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LocationPortfolio from "@/components/LocationPortfolio";
import { Cpu, Zap, Search, BarChart3, Phone, MessageSquare, Sparkles, CloudLightning } from "lucide-react";

export default function AISeoVancouverPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const aiCapabilities = [
    {
      title: "ChatGPT & Gemini Integration",
      desc: "Harness state-of-the-art generative language models to construct highly engaging, SEO-optimized landing page copy that drives superior conversion rates.",
      icon: <Cpu className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Automated Optimization",
      desc: "Deploy machine learning algorithms to continuously analyze search intent, structure data, and automate technical optimization tasks in real time.",
      icon: <Zap className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Predictive Behavior Analytics",
      desc: "Anticipate customer search patterns and queries before competitors do by leveraging big data collections and advanced predictive trend modeling.",
      icon: <Search className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Machine Learning Insights",
      desc: "Transform raw search performance metrics into actionable organic growth strategies through deep data processing and automated reporting.",
      icon: <BarChart3 className="w-8 h-8 text-[#ff9900]" />
    }
  ];

  const secretWeapons = [
    {
      number: "1",
      title: "AI in SEO",
      desc: "Our professional team members delve into the strategic use of AI in SEO, which can significantly help in providing accurate guidance on SEO trends and keywords that can boost your brand’s specific content. Along with this, our professionals ensure to provide relevant information in the website content with an accurate use of SEO keywords that can be driven in different AI tools."
    },
    {
      number: "2",
      title: "Customer’s intent",
      desc: "Guessing about a customer’s changing behaviour and needs can be a daunting task; however, AI has overcome this as well. With the smart use of AI, the professionals make sure to thoroughly predict the customer’s behaviour and intent through social media comments and browsing history, which can significantly help in providing custom and relevant solutions to them. By smartly analysing the customer’s behaviour and specific needs, we make sure to alter our digital marketing strategies accordingly for more precise results."
    },
    {
      number: "3",
      title: "Strong customer support",
      desc: "With the mindful use of AI, customers’ concerns and queries are directly addressed through AI-driven chatbots on the websites. This can significantly provide a safe environment to the customers, where they can get appropriate answers to all their confusion questions and queries, thus improving customer experience."
    }
  ];

  const optimizePlatforms = [
    {
      title: "SEO for ChatGPT",
      desc: "This method is quite different and unique from traditional use of SEO, as it involves the optimisation of your brand’s content in questions and answers, with the clear mentioning of your brand’s name in an essential manner. Through SEO for ChatGPT, users can get appropriate information regarding the specific brand in a conversational tone, thus making your brand’s content easily discoverable.",
      icon: <MessageSquare className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "SEO for Gemini",
      desc: "In order to increase the content’s visibility, our professionals ensure to optimize the content for the AI Overview, which can significantly help in driving more organic traffic. The clear and conversational tone in the website content is prioritised with the purpose of optimising the content for Gemini, thus reflecting our strategic and smart use of AI. Therefore, our professionals ensure to thoroughly use SEO for Gemini with the aim of driving customer attention to your brand’s content.",
      icon: <Sparkles className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "SEO for Cloud",
      desc: "Smart leveraging of cloud platforms, including backlinks and fast indexing, plays a crucial role in making your brand’s content visible to users. The search engines will rank your content if you have strategically used SEO for Cloud, thus increasing customer visibility and high-conversion rates in an effective manner.",
      icon: <CloudLightning className="w-10 h-10 text-[#ff9900]" />
    }
  ];

  const faqs = [
    {
      question: "Is it possible to create SEO-friendly content through ChatGPT?",
      answer: "Yes, creating SEO-friendly content through ChatGPT can be possible; however, this cannot replace human-made content completely. Therefore, focusing on human-made content can drive organic traffic by leveraging the use of AI platforms for SEO."
    },
    {
      question: "Which content is more discoverable through ChatGPT?",
      answer: "If you have prioritised making bullet points, along with using clear and understandable language in your content, then ChatGPT will optimise your content in an essential manner."
    },
    {
      question: "Which content is usually preferred over Google AI Overviews?",
      answer: "The content demonstrating the precise and clear answers ranks high in Google AI Overviews in an essential manner; along with this, the conversational tone is also necessary for optimising the content over Gemini."
    },
    {
      question: "What is the best way to make AI-friendly content?",
      answer: "Make sure to thoroughly add suitable headings with a specific question in an essential manner. Also, provide a relevant answer in your content, along with adding FAQs, that drive more customer attention."
    },
    {
      question: "Is it necessary to keep refreshing the content?",
      answer: "Yes, refreshing the content can significantly help in driving more views over your content on AI Google Overviews; therefore, ensure to keep your content fresh and up-to-date through a specific revision cycle."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-16 text-black">



      {/* 2. Core Content Section (Best Digital Marketing Agency in Vancouver) */}
      <section className="py-16 md:py-10 border-b border-gray-100">
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
                  Focusing on manual practices for increasing the visibility and customer engagement on your website won’t provide you with consistent results. This is where engaging with the best <strong className="text-black font-semibold">AI SEO agency in Vancouver</strong> matters a lot in terms of improving your content visibility by smartly leveraging different AI tools to achieve optimum results.
                </p>
                <p>
                  The inclusion of AI has marked a significant end to the traditional methods of boosting your content; therefore, the professionals of FlyMedia Technology have precise knowledge regarding utilising different AI tools in an essential manner. Content generation, understanding customers’ behaviour and replying to all their queries – altogether contribute to the smart use of AI in digital marketing, which enables your brand to get maximum customer reach.
                </p>
                <p>
                  Using ChatGPT and Gemini with the aim of including SEO can significantly help in driving more traffic to your landing pages, thus providing you with profitable benefits. We have developed a highly intellectual and skilled team, proficient in using different AI tools for optimising your website and content in different AI tools in a strategic manner. By smartly using different technologies such as machine learning and data collection, marketing tasks such as SEO and content creation get automated.
                </p>
              </div>
            </div>

            {/* Right Column (Desktop) / First (Mobile): Image Illustration */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[5/3] max-w-[560px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden ">
                <Image
                  src="https://flymediatech.com/wp-content/uploads/2026/05/webs-dei-11.png"
                  alt="AI SEO Agency in Vancouver for digital marketing success. Boost your online presence with expert SEO."
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

      {/* 3. Our Secret Weapon for Clients’ Solutions */}
      <section className="py-16 md:py-10  border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Our Secret Weapon for Clients’ Solutions
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              We have an intellectual and professional team, holding accurate knowledge regarding the use of AI in digital marketing, such as content and image creation, with the purpose of driving customers’ attention. The story of leveraging AI in digital marketing does not end here; in fact, using AI for understanding the customer’s behaviour and interest also plays a significant role in increasing traffic to your website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {secretWeapons.map((item, index) => (
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

      {/* 4. Optimising SEO for Different AI platforms */}
      <section className="py-16 md:py-10">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Optimising SEO for Different AI platforms
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              The professional team members of FlyMedia Technology understand the utmost importance of leveraging different AI platforms for SEO in an essential manner. We have been proficient in using <strong className="text-black font-semibold">SEO for ChatGPT</strong> and Gemini with the purpose of driving the results in the answers for the specific questions asked by the users. We make sure to thoroughly add FAQs, mention the client’s name clearly and enhance the website’s content more clearly for better understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {optimizePlatforms.map((box, index) => (
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

      {/* 5. Not Just SEO, It’s AI Winning The Search Game */}
      <section className="py-16 md:py-10 border-b border-gray-100 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column (Desktop) / Second (Mobile): Image Illustration */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-1">
              <div className="relative w-full aspect-[3/2] max-w-[560px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden">
                <Image
                  src="https://flymediatech.com/wp-content/uploads/2026/05/online-digital-marketing-illustration-concept.png"
                  alt="AI SEO Agency Vancouver for innovative digital marketing solutions."
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column (Desktop) / First (Mobile): Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left order-2 lg:order-2">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                Not Just SEO, It’s AI Winning The Search Game
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Are you still relying on traditional SEO, while AI holds numerous benefits in boosting SEO through different AI platforms? Engage with the creative and talented team of FlyMedia Technology, bringing you closer towards AI SEO with the aim of optimising your content for organic traffic.
                </p>
                <p>
                  Our excellent team in content creation ensures the management of the content of different brands, thus boosting it on different AI platforms through the strategic use of SEO. This can significantly help in discovering your content in different AI platforms, such as Gemini and ChatGPT, in a conversational and engaging manner.
                </p>
                <p>
                  Our experts are proficient in finding the targeted audience for your specific content, along with adding trending keywords with the aim of driving more traffic, through different digital marketing strategies and aligning them with modern technologies, you can witness the improved customer engagement in your specific brand.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FAQs Accordion */}
      <section className="py-16 md:py-10 border-b border-gray-100">
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
