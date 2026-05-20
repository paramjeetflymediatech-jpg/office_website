"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LocationPortfolio from "@/components/LocationPortfolio";
import { Laptop, ShoppingCart, MessageSquare, Globe2, Gauge, Bot, Sparkles, Smartphone, Phone } from "lucide-react";

export default function WebDesignVancouverPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const featureCards = [
    {
      number: "1",
      title: "Inclusion of AI automation",
      desc: "Our professional team members inculcate creative and smart thinking, due to which they prefer using AI automation for images and different website layouts. This can significantly prevent manual error, along with improving conversion rates in an effective manner."
    },
    {
      number: "2",
      title: "Strategic use of SEO",
      desc: "The professionals of FlyMedia Technology ensure to use specific SEO keywords for your specific website with the purpose of increasing organic traffic, thus increasing your sales. With the mindful use of different SEO keywords for your websites, our experts make sure to increase the traffic to your website in an organic and essential manner."
    },
    {
      number: "3",
      title: "Addition of minimalist designs",
      desc: "The experts of FlyMedia Technology ensure to prioritise minimalist design for our business’s websites with the aim of highlighting the business key areas, which should be the focal point. Along with this, the fast loading speed of your website and making it responsive to user experience are the other main goals of our experts, which are accomplished in a satisfactory manner."
    }
  ];

  const websiteTypes = [
    {
      title: "E-commerce websites",
      desc: "Building and designing e-commerce websites includes precision and high intellectual knowledge regarding optimising each product page. Our professionals excel in such a domain; therefore, make sure to provide you with interactive e-commerce websites with specific product pages and payment integration in a secure manner.",
      icon: <ShoppingCart className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "Mobile-friendly websites",
      desc: "Such websites that provide a mobile view without making a separate mobile version for them are what our professionals are highly skilled in. We make sure to develop and design your website so that it becomes mobile-friendly as well, thus providing an uninterrupted view from tablets and mobile phones.",
      icon: <Smartphone className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "Discussion forums",
      desc: "An engaging and captivating website includes online discussion where the users are free to reply and ask regarding their queries to the technical experts. Therefore, our creative team members are highly proficient in developing such discussion forums for providing an interactive online session to the users in an essential manner.",
      icon: <MessageSquare className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "Web portals",
      desc: "This holds utmost importance among the users in terms of getting accurate answers for their queries and managing specific appointments in an essential manner. For different business purposes, we make sure to develop a web portal to significantly answer all the queries of the customers regarding your brand’s services, thus fostering credibility and trust among them.",
      icon: <Globe2 className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "Performance optimization",
      desc: "Our professionals are well-trained in speeding up the process of website development, which eventually results in faster loading and effective response in an essential manner. We ensure to efficiently eliminate the bottlenecks and any debugging for your websites with the purpose of improving their responsiveness, so that the users stay glued to your website.",
      icon: <Gauge className="w-10 h-10 text-[#ff9900]" />
    }
  ];

  const dynamicFeatures = [
    {
      title: "Faster loading speed",
      desc: "This is one of the crucial factors responsible for making your website engaging and responsive; therefore, our professional team members make sure to put this factor above all other factors. We ensure to develop your websites that load within 2-3 seconds so that the user can stay glued to their screen.",
      icon: <Gauge className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Using AI-driven chatbots",
      desc: "In 2026, AI-driven chatbots have overcome traditional websites in an essential manner. AI-driven chatbots hold a significant place in terms of answering all the queries of the users, thus establishing their credibility in your specific brand’s services. When their queries are heard and answered well, they find the specific website engaging and responsive.",
      icon: <Bot className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Prioritising animations",
      desc: "Users find your website more interactive when there’s an inclusion of animations in terms of storytelling. The animated features that significantly demonstrate the specific story on your website make a clear description regarding the services of your brand, thus making your website truly engaging in such a modern world.",
      icon: <Sparkles className="w-8 h-8 text-[#ff9900]" />
    }
  ];

  const faqs = [
    {
      question: "Does it take more than one month to build a single website?",
      answer: "Usually, the time for building a website largely depends on the requirements for the website. If you are willing to add simpler layouts to your website, then it will take more than 3 weeks; however, the complex websites can take more than a single month to get ready."
    },
    {
      question: "How will my website become searchable on Google?",
      answer: "Our professionals make sure that your website is fast, responsive and mobile-friendly, along with SEO keywords that can significantly play an integral role in making your website searchable on Google."
    },
    {
      question: "Do you provide website maintenance or not?",
      answer: "Yes, we make sure to thoroughly provide you with website maintenance, which includes updating the necessary software and optimising the images in order to keep it functional for a long time."
    },
    {
      question: "How is CMS good for websites with regular updates?",
      answer: "A Content Management System plays a crucial role in updating the content of your websites without relying on the web developers for coding. Therefore, you can simply refresh the blog and product content in an essential manner, thus reflecting the best choice for websites with regular updates."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-16 text-black">

      {/* 2. Core Content Section */}
      <section className="py-16 md:py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column (Desktop) / Second (Mobile): Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                Captivate And Turn Into Active Customers With Engaging Websites
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  For engaging and responsive websites, it is a must to partner with professionals proficient in <strong className="text-black font-semibold">website design in Vancouver</strong>. Your search for talented, creative and intellectual team members ends here with FlyMedia Technology, which helps in building engaging websites for your specific business purposes.
                </p>
                <p>
                  With the experience of more than 13 years, we have developed a cooperative and smart team, having precise knowledge regarding building engaging and captivating websites, including engaging features. We put all our knowledge and effort into specific projects with the aim of satisfying your inner soul, along with turning viewers into your active customers.
                </p>
              </div>
            </div>

            {/* Right Column (Desktop) / First (Mobile): Image Illustration */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[5/3] max-w-[560px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden ">
                <Image
                  src="https://flymediatech.com/wp-content/uploads/2026/05/webs-dei-6.png"
                  alt="Modern web design and development services in Vancouver by Flymedia Technology."
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

      {/* 3. Shine A Spotlight On Your Website With New Features */}
      <section className="py-16 md:py-20 ">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Shine A Spotlight On Your Website With New Features
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              Our team members have sufficient knowledge regarding creating engaging and high-conversion websites, including new and dynamic features. We prioritise fast loading, responsive and minimalist website designs that can captivate the viewer’s attention in an essential manner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((item, index) => (
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

      {/* 4. Responsive Websites Crafted By Our Team */}
      <section className="py-16 md:py-10">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Responsive Websites Crafted By Our Team
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              Our intellectual team members are dedicated and committed towards making your website an engaging and captivating one with the help of AI and modern features. Due to such a mindful approach, we make sure to make different websites that are mentioned below, so have a look at them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteTypes.map((box, index) => (
              <div
                key={index}
                className=" rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start space-y-5"
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

      {/* 5. What Makes A Website Truly Engaging And Responsive In 2026? (Card Format) */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Header Info */}
            <div className="lg:col-span-7 space-y-4 text-left order-2 lg:order-1">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                What Makes A Website Truly Engaging And Responsive In 2026?
              </h2>
              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                With the evolving change in such a modern world, it has become a necessity to make your websites engaging and responsive that perfectly align with the user needs in a significant manner. Therefore, managing the performance speed of your website and including AI automation with dynamic features altogether plays a vital role in turning your viewers into customers, thus reflecting our strong commitment towards trendy designs and modern website features.
              </p>
            </div>

            {/* Right Illustration */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[5/3] max-w-[480px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden ">
                <Image
                  src="https://flymediatech.com/wp-content/uploads/2024/04/grow.png"
                  alt="Best Website Design & Development Company in Jalandhar"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

          </div>

          {/* Grid of Dynamic Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {dynamicFeatures.map((feat, fIdx) => (
              <div
                key={fIdx}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#ff9900]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="p-3.5 bg-gray-50 rounded-2xl w-fit">
                    {feat.icon}
                  </div>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl font-bold text-black font-serif"
                  >
                    {feat.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. FlyMedia Technology – Attract, Interact, and Convert */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column (Desktop) / Second (Mobile): Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                FlyMedia Technology – Attract, Interact, and Convert
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  In today’s modern world, we not only prioritize or run after users’ visibility, but we also make sure to interact with them in our specific brand’s services. This is precisely achieved through developing and designing interactive and captivating websites, including AI automation and animations for an easy user experience. Due to such a mindful and comprehensive approach, you can join hands with us for the best <strong className="text-black font-semibold">web development in Vancouver</strong>.
                </p>
                <p>
                  Our professionals have more than 13 years of experience, which efficiently reflects our protection and ability to handle your websites and turn them into an engaging one with the aim of increasing conversion rates. By sincerely following all the trendy and modern website designs, we ensure to drive more traffic to your websites, thus establishing an integrated digital space for your brand.
                </p>
                <p>
                  What makes us truly different and unique from others is the inclusion of a smart, strategic and mindful approach towards increasing the customer’s attention on your website, eventually turning them into customers. Through different digital marketing strategies, along with interactive and minimalist website designs, we ensure to foster a strong and reputable image of your specific brand in such a competitive world.
                </p>
              </div>
            </div>

            {/* Right Column (Desktop) / First (Mobile): Image Illustration */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[5/3] max-w-[560px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden">
                <Image
                  src="https://flymediatech.com/wp-content/uploads/2026/05/webs-dei-7.png"
                  alt="Illustration of mobile app development with rocket, coins, and tech icons in Vancouver."
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FAQs Accordion */}
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
