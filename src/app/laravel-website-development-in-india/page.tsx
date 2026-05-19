"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCart, Zap, Smartphone } from "lucide-react";
import ServicePage from "@/components/ServicePage";

// --- Components ---

const LaravelInfoSection = () => (
  <div className="py-20 bg-[#F1F1F1]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black leading-tight">
            Why is Laravel website development a top choice for modern businesses?
          </h2>
          <div className="text-gray-700 space-y-4 text-sm md:text-sm leading-relaxed">
            <p>
              Laravel website development includes the use of elegant syntax and a PHP framework in order to accelerate the working of your website in an essential manner. At Flymedia Technology, we have a qualified and intellectual team of professionals who have a deep understanding of Laravel website development, therefore ensuring to utilize it comprehensively for your business’s website development. This framework is quite different and unique as it includes the precise practice of turning simple to complex websites to give a strong online presence to your specific business. By engaging with the professional team members of Flymedia Technology, the best <strong className="text-black font-bold">Laravel website development company in India</strong>, you can make certain that your business’s website includes better and more effective functionality.
            </p>
            <p>
              By choosing the professionals of Flymedia Technology, you can effectively add to the faster website functionality of your business. Along with this, Laravel development can be the best choice for web applications, mobile app development and e-commerce development in an essential manner. This framework is considered best for creating a rapid, secure, and scalable website for effectively showcasing your business’s services. Also, Laravel includes built-in features, due to which common and repetitive tasks such as authentication, caching and database management can be managed without any trouble.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-[4/3] group">
            <Image src="/web-des.png" alt="Laravel Web Designing Company" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const LaravelFeaturesIntroSection = () => (
  <div className="py-20 bg-[#F1F1F1]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="relative w-full aspect-[4/3.3]  overflow-hidden ">
            <Image src="/images/mobi.png" alt="Laravel Features" fill className="object-cover " />
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-6 order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black leading-tight">
            Leverage Laravel’s out-of-the-box features to grow your business with Flymedia Technology.
          </h2>
          <div className="text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              Ensuring that your websites are running well without any trouble is the top-most priority for modern businesses. Therefore, the professionals of Flymedia Technology make sure that your websites can work efficiently and provide a better user experience by leveraging Laravel website development. Explore the amazing features of Laravel web development that are mentioned below in a thorough manner.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const LaravelCustomServicesSection = () => {
  const features = [
    {
      title: "Provides strong protection against common vulnerabilities",
      desc: (
        <>
          Laravel is an amazing framework, ensuring that your website remains protected from attackers in an effective manner. Due to its built-in security features, you can ensure that your website remains protected from SQL injection and malicious scripts. By using Eloquent ORM (Object Relational Mapper), your security information and data remain secure in an essential manner.
        </>
      )
    },
    {
      title: "Offers high performance and scalability",
      desc: (
        <>
          Using Laravel for website development can be your optimum choice, as it helps in increasing the functionality of the web applications by making them run smoothly and rapidly. This eliminates the need to reload the website from scratch, as it helps in route caching and loading the pages faster. At Flymedia Technology, we ensure that your business’s website is developed in a manner that it can effectively handle high traffic.
        </>
      )
    },
    {
      title: "Includes better handling of websites",
      desc: (
        <>
          By engaging with the professionals of Flymedia Technology for <strong className="text-black font-bold font-sans">Laravel website development in Ludhiana</strong>, you can make certain that your website can manage high traffic without any hassle. Along with this, the Laravel framework also allows your website to manage the message queues efficiently.
        </>
      )
    },
    {
      title: "Efficiently reduces time-to-market",
      desc: (
        <>
          You can effectively contribute to the fate of launching your product, hence reducing the need to wait for months for product launch. Laravel helps in eliminating the need to perform repetitive tasks, which allows you to focus on your core business logic.
        </>
      )
    }
  ];

  return (
    <div className=" bg-[#F1F1F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <div className="space-y-10 text-gray-700 text-sm md:text-[15px] leading-relaxed max-w-6xl">
          {features.map((f, i) => (
            <p key={i}>
              <strong className="text-black font-bold font-sans text-sm md:text-[15px]">{f.title}: </strong>
              {f.desc}
            </p>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-16 ">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black leading-tight">Flymedia Technology offers custom Laravel services for high-performance applications.</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">At Flymedia Technology, we ensure that your websites are developed in an effective manner that improves the user experience thoroughly. We are all ears to your specific purposes, hence ensuring to alter the templates to meet your specific business purposes.</p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3.3] overflow-hidden">
              <Image src="/images/bestr-it.png" alt="Custom Laravel Services" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LaravelServicesGridSection = () => {
  const services = [
    { title: "Implementations in e-commerce websites", desc: "The skilled team members of Flymedia Technology ensure that your e-commerce websites are maintained in an effective manner. Laravel allows you to manage the shopping carts, calculate, and thoroughly process the checkout system.", icon: <ShoppingCart className="w-8 h-8 text-white" /> },
    { title: "Offer high performance for web app development", desc: "You can make certain that your web applications are performing well due to the thorough implementation of Laravel framework in an essential manner. This allows your web application to perform faster.", icon: <Zap className="w-8 h-8 text-white" /> },
    { title: "Streamlines API services to mobile apps", desc: "Laravel allows API to perform better for mobile apps. As a result of this, your mobile apps can function well, which includes handling and exchanging data quickly and processing requests rapidly.", icon: <Smartphone className="w-8 h-8 text-white" /> }
  ];

  return (
    <div className="py-20 bg-[#F1F1F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 md:p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#ff9900] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-duration-300">{s.icon}</div>
              <h3 className="text-xl font-bold text-black mb-4 leading-tight">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LaravelPartnershipSection = () => (
  <div className=" bg-[#F1F1F1]">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200/60 p-8 md:p-14 space-y-8">
        <h2 className="text-3xl md:text-[38px] font-serif font-bold text-black leading-tight text-center">
          Advantages of partnering with Flymedia Technology to grow your business
        </h2>
        <div className="text-gray-600 text-center space-y-6 text-sm md:text-[15px] leading-relaxed max-w-4xl mx-auto font-medium">
          <p>
            Our highly intellectual team ensures that your business can witness rapid growth by comprehensively opting for a PHP-based framework for website development. Our process of developing websites for your business’s purposes includes a CMS Content Management System) that allows your business to achieve effective and precise results in terms of maximum visibility and better user experience.
          </p>
          <p>
            The professional team of Flymedia Technology are all ears to your specific concerns regarding your business’s website development, hence providing the results accordingly. Along with this, we provide premium website development services at an affordable rate to help you avoid high costs. You can engage with us without worrying about the high costs for Laravel web development and achieve the optimum results eventually. Considering this, we ensure that <strong className="text-black font-bold">the Laravel mobile app development cost in Punjab</strong> remains budget-friendly for you, without compromising our result-oriented services.
          </p>
          <p>
            The bottom line is that joining hands with the professionals of Flymedia Technology can effectively contribute to your rapid business growth and maximum profits. Therefore, leading your business with the latest digital marketing strategies of Flymedia Technology towards the path of success and growth can be your comprehensive and wise decision.
          </p>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Page ---

export default function LaravelDevelopment() {
  const data = {
    title: "Laravel Website Development in India | Flymedia Technology",
    h1: ["Laravel Website Development in", "India"],
    paragraphs: [
      "Build highly scalable, secure, and custom web applications with our expert Laravel development services. We create robust solutions tailored to your specific business requirements.",
    ],
    images: [],
    folderName: "flymediatech.com__laravel-website-development"
  };

  return (
    <ServicePage {...data} bgClass="bg-[#F1F1F1]">
      <div className="pt-12 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6 leading-tight flex flex-col gap-2">
          <span>Laravel Website Development in India</span>
        </h1>
      </div>
      <div className="pb-10">
        <LaravelInfoSection />
        <LaravelFeaturesIntroSection />
        <LaravelCustomServicesSection />
        <LaravelServicesGridSection />
        <LaravelPartnershipSection />
      </div>
    </ServicePage>
  );
}
