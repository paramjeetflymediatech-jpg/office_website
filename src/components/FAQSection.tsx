"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ_DATA = [
  {
    question: "Where is Flymedia Technology located and do you serve clients internationally?",
    answer: "Flymedia Technology is located in Ludhiana, Punjab, India providing digital marketing services for fourteen years without lagging behind. Yes, we do serve clients internationally as well with firm commitments."
  },
  {
    question: "Do you work with startups, small businesses, and large enterprises alike?",
    answer: "Yes we work with startups, small businesses and large enterprises alike by providing various digital marketing solutions to make your business known to the world. Our expertise is dedicated to providing services for content creation, SEO marketing and web development in order to attract more customers for your business."
  },
  {
    question: "What types of websites do you build — corporate, e-commerce, custom portals?",
    answer: "Our dedicated team members are trained enough to create websites including e-commerce, corporate and custom portals. With our clear vision, we ensure that your specific preferences are listened to and create the websites accordingly. You can make certain that your website is powerful and impactful by engaging with the services of website designing in Ludhiana."
  },
  {
    question: "Do you create WordPress and WooCommerce websites?",
    answer: "Yes, we create WordPress and WooCommerce websites including fully functional stores to make it easy for customer’s use. With accuracy and precision, we create the product pages and shopping cart."
  },
  {
    question: "Can you redesign an existing website without losing SEO ranking?",
    answer: "Yes, we can redesign an existing website without losing SEO ranking in order to meet your specific needs and preferences. We ensure that the URL structure and high SEO ranking remain preserved while redesigning an existing website."
  },
  {
    question: "Do you provide website maintenance and security updates?",
    answer: "Yes we provide website maintenance and security checkups to ensure that the specific website is working properly. Our expert team members have enough knowledge regarding fixing bugs and providing easy user experience."
  },
  {
    question: "How long does it take to develop a new website from scratch?",
    answer: "The duration of developing a new website from scratch depends on its complexity. If it's a simple website, then it might get developed within a few weeks while the complex website takes several months to be prepared."
  },
  {
    question: "What digital marketing services do you offer (SEO, Google Ads, social media marketing, etc.)?",
    answer: "At Flymedia Technology, the best digital marketing company in Ludhiana, you will be offered various services such as SEO, Google Ads and social media marketing. Our services not only ends here, in fact, we are also indulged in providing other services such as web design and web development in order to attract more customers."
  },
  {
    question: "How can SEO help my business grow online?",
    answer: "By engaging with our professionals, you can make certain that your business reaches the maximum number of customers due to the use of SEO. We understand the SEO rankings and strategies, therefore, with the optimum use of SEO, we make sure that your services appear on the top of the search bar which effectively contribute to your business growth."
  },
  {
    question: "What is the average time to see SEO results with Flymedia Technology?",
    answer: "You can see the positive results regarding SEO ranking in an average time between six to twelve months. At Flymedia Technology, we are determined to provide the desirable SEO results within a few months and make your business known to the world."
  },
  {
    question: "Do you offer local SEO for small businesses in India, UK, Canada, or Australia?",
    answer: "Certainly, we offer local SEO for small businesses in Indian, UK, Canada and Australia in an effective manner. We even have specific location pages such as a digital marketing agency in Sydney, in order to promote the particular services efficiently."
  },
  {
    question: "How do you measure and report marketing campaign performance?",
    answer: "We use different combination metrics to analyze the engagement and conversion rates. Through the precise analysis of such metrics, we give the specific report to you containing profitability and visibility so that you can alter your business strategy accordingly."
  },
  {
    question: "Do you build custom WooCommerce or Shopify stores?",
    answer: "Yes, we build custom WooCommerce and Shopify stores in order to create e-commerce platforms. Along with this, we provide custom solutions regarding web development in order to promote your services effectively."
  },
  {
    question: "Can you integrate payment gateways and shipping systems?",
    answer: "Yes, we integrate payment gateways and shipping systems which is beneficial for most of the business to process their payments securely. We understand the hassle of payment, therefore we integrate payment gateways for your ease and convenience."
  },
  {
    question: "Do you design logos, brochures, and brand identity materials?",
    answer: "Yes, our team members are proficient in designing logos, brochures and brand identity materials in an effective manner. Through such a creative approach, we ensure that your business gets a voice in order to increase engagement with the customers."
  },
  {
    question: "How do you ensure my e-commerce store is fast, mobile-friendly, and SEO-ready?",
    answer: "By utilizing digital marketing services, we also indulge in the practice of e-commerce development in Ludhiana. Through our digital marketing services and analyzing responsive design, we ensure that your e-commerce store is fast, mobile-friendly and SEO-ready."
  },
  {
    question: "Can you handle product uploads and category optimization for my store?",
    answer: "Yes, we can efficiently handle product uploads and category optimization for your store. Our team members use AI-powered strategies to make your product’s listing better and increase the visibility in an essential manner."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f1f1f1] py-20 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-800 max-w-4xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            Striving for quality, the best digital marketing company in Ludhiana ensures an effective flow of communication by addressing all the concerns of the clients associated with their digital success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div 
              key={index} 
              className="mb-2 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left transition-all bg-[#f0f0f0] border-b-2 border-[#FA7E09] rounded-[10px] min-h-[100px]"
              >
                <span className="text-[17px] md:text-[19px] font-semibold text-black pr-4 leading-tight">
                  {faq.question}
                </span>
                <span className="text-2xl font-bold text-black shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 bg-white text-gray-800 text-[15px] leading-relaxed border border-gray-300 rounded-[5px]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
