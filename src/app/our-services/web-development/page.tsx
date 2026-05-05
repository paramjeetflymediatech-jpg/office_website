"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Layout, Globe, Shield, Smartphone, Zap, Server, Database, Layers, CheckCircle2 } from "lucide-react";
import ServicePage from "@/components/ServicePage";

// --- Hero Section ---
const WebDevelopmentHero = () => {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const translateX = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <section className="relative py-24 overflow-hidden bg-[#efefef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-black leading-tight">
                Web Development Company in Ludhiana to Serve Online Solutions
              </h1>

            </div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
              <p>
                Through endless enhancement in our ventures ranging development techniques, engineering endeavors, management and quality testing protocols, we make every effort to improve customer’s experience.
              </p>
              <p>
                The modern touch of our designer tools creates attractive designs that stand you apart from the ocean of online business entrepreneurs. Uniform layout, rational space utilization, unique corporate identity and easy navigation and more is in the bag to explore.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <motion.div style={{ y: translateY, x: translateX }} className="relative z-10">
              <Image
                src="/images/bestr-it.png"
                alt="Web Development Company in Ludhiana"
                width={1200}
                height={1000}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#ff9900]/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Info Section ---
const WebDevelopmentInfoSection = () => {
  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, [0.1, 0.4], [-50, 50]);

  return (
    <section className="py-24 bg-[#F1F1F1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <motion.div style={{ x: translateX }} className="relative">
              <Image
                src="/IIMG02.png"
                alt="Digital Marketing Company"
                width={1000}
                height={1000}
                className="w-full h-auto drop-shadow-xl"
              />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="text-lg text-gray-700 leading-relaxed space-y-6 font-medium">
              <p>
                Easy website functionality makes your customer’s feel comfortable in using your portal and shop your products. We deliver the tailored solution with our ability to offer the functionality that best suits your business objectives. The development phase of any small to big project is divided into phases that enable us to explore the pre-established and latest functionality options to make your site’s performance incredible while keeping it budgetary. So you can obtain the great ROI from our web solution that reduces your cost significantly while providing the outstanding user’s experience. Contact our web development company in India for the quotes.
              </p>
              <p>
                After finishing the front end development task, back end office management is done efficiently to control the different site operations which include specific content development and display, media management that including images, videos etc, access rights, permission controls and much more. Overall our website development in Ludhiana fully takes care of your website needs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- PHP Frameworks Section ---
const PhpFrameworksSection = () => {
  const frameworks = [
    { title: "YII DEVELOPER", image: "yii.jpg", desc: "Professional Developers are creative, too fast in their work and can deploy different parts of a framework to form a perfect combination of ease and user adaptability. Hire a Yii Professional for your work and get the benefits in time." },
    { title: "CAKE PHP DEVELOPER", image: "cake-php.jpg", desc: "This technology is proficient in building any customized application that needs a skilled php developer, coz only a skilled person in this technology can deliver you the maximum benefits. By Choosing Flymedia, there is no need to take stress about this specific issue, since our proficient developers are near your current support usually." }
  ];
  return (
    <section className="py-24 bg-[#F1F1F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black uppercase tracking-tight">Php Framework Development</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {frameworks.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.2 }} viewport={{ once: true }} className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all group flex flex-col items-center text-center space-y-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#F1F1F1] group-hover:border-[#ff9900] transition-colors duration-500">
                <Image src={`/scrap/Archive/flymediatech.com__our-services_web-development/assets/images/${f.image}`} alt={f.title} fill className="object-cover" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-black tracking-wide group-hover:text-[#ff9900] transition-colors">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PHP Open Source Section ---
const PhpOpenSourceSection = () => {

  const platforms = [
    { title: "OPEN CART DEVELOPER", image: "open-cart.jpg", desc: "To get a future rich portal to run your online business, a quick choice is open cart. Your online business will have wings if developed and maintained by a professional developer. With us so long as should take the time in regards to this Technology, tactics along with methods being employed on your business, even as we make sure to include solely the most beneficial, to offer effects unparalleled inside top quality along with efficiency." },
    { title: "WORDPRESS DEVELOPER", image: "wordpress.jpg", desc: "When it comes to reliability then most adaptable platform is wordpress. The vast community support which is constantly improving plugins for the unmatched user experience with least complexity. Whenever using a simple yet effective technology like WordPress. Hiring a WordPress developer, you could be certain for the most beneficial support achievable, on realistic price tag." },
    { title: "MAGENTO DEVELOPER", image: "magento.jpg", desc: "Get built the most sophisticated environment for your ecommerce business and distinct it from multiple others like your business. Nevertheless, it truly is solely feasible for those who have a competent PHP Developer by your side. Allow a specialist get this expertise remarkable and also fulfilling in your case along with his know-how, and also devotion." },
    { title: "JOOMLA DEVELOPER", image: "joomla.jpg", desc: "To start a project fom basic and then extend it with Joomla extensions is so easy and time saving. Staying dynamic and still so unique, Joomla platform have become the need of online business. Building custom made projects, our team connected with PHP Programmer Asia will surely help the client to gain maximum benefits from their competitors." },
    { title: "PRESTASHOP DEVELOPER", image: "prestashop.jpg", desc: "The huge benefit line in Prestashop has overpower it from other conventional ecommerce based softwares online. This revolutionary technology has overbeaten the big giants and has emerged as a powerful technology to build the online store in minutes." },
    { title: "OSCOMMERCE DEVELOPER", image: "oscommerce_icon.jpg", desc: "To sell online has become so simple with this technology. The add-ons under the platform has leas to the simplest development mechanisms rule the web in terms of simplicity so long and still is a preferred choice for many people. Establishing customized jobs, our team involving PHP Developer in India might help ones brand gain an advantage over others." }
  ];
  return (
    <section className="py-24 bg-[#F1F1F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black uppercase tracking-tight">Php Open Source Development</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className="bg-[#F9F9F9] p-8 rounded-2xl border border-gray-100 hover:border-[#ff9900] transition-all group flex flex-col items-center text-center space-y-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 group-hover:scale-110 transition-transform duration-500">
                <Image src={`/scrap/Archive/flymediatech.com__our-services_web-development/assets/images/${p.image}`} alt={p.title} fill className="object-cover" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-black tracking-wide group-hover:text-[#ff9900] transition-colors">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Features List ---
const WhyHireUs = () => {
  const points = [
    "Function & Usage Optimization",
    "High-Performance Architecture",
    "Advanced Security Protocols",
    "Impressive Outlook & Design",
    "24/7 Support & Maintenance",
    "Max ROI with Minimal Cost"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/online-serch.png" alt="Why Choose Us" fill className="object-cover" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">Why Hire Our Web Developers?</h2>
              <div className="h-1.5 w-24 bg-[#ff9900] rounded-full"></div>
            </div>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              Our website development in Ludhiana fully takes care of your needs, from front-end design to complex back-end office management.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#ff9900] w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-800 font-bold text-sm">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Main Page ---
export default function WebDevelopment() {
  const data = {
    title: "Best Web Development Company in Ludhiana, Punjab, India | Flymedia Technology",
    h1: ["Web Development Services"],
    paragraphs: [
      "Through endless enhancement in our ventures ranging development techniques, engineering endeavors, management and quality testing protocols, we make every effort to improve customer’s experience.",
    ],
    images: [],
    folderName: "flymediatech.com__our-services_web-development"
  };

  return (
    <ServicePage {...data} bgClass="bg-[#F1F1F1]">
      <WebDevelopmentHero />
      <WebDevelopmentInfoSection />
      <PhpFrameworksSection />
      <PhpOpenSourceSection />
      <WhyHireUs />

      {/* Final CTA */}
      <section className="py-24 bg-[#ff9900] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">Ready to start your digital transformation?</h2>
          <p className="text-white/90 text-lg md:text-xl font-medium">Get a custom-built, high-performance website that targets the right audience and drives growth.</p>
          <button className="bg-white text-black px-12 py-5 rounded-full font-bold hover:bg-black hover:text-white transition-all transform hover:scale-105 shadow-2xl uppercase tracking-widest text-sm">
            Get A Free Quote
          </button>
        </div>
        {/* Abstract shapes for background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
      </section>
    </ServicePage>
  );
}
