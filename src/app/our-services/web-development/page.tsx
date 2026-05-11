"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Layout, Globe, Shield, Smartphone, Zap, Server, Database, Layers, CheckCircle2, MapPin, Phone, Mail } from "lucide-react";
import ServicePage from "@/components/ServicePage";

// --- Hero Section ---
const WebDevelopmentHero = () => {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const translateX = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <section className="relative py-10 overflow-hidden bg-[#efefef]">
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
    <section className="bg-[#F1F1F1] overflow-hidden">
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
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.2 }} viewport={{ once: true }} className=" p-10 rounded-2xl  hover:shadow-2xl transition-all group flex flex-col items-center text-center space-y-6">
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
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className=" p-8 rounded-2xl border border-gray-100 hover:border-[#ff9900] transition-all group flex flex-col items-center text-center space-y-6">
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

// --- Features & Last Layout Section ---
const WebDevelopmentLastSection = () => {
  const bulletPoints = [
    "Function",
    "Usage",
    "Performance",
    "Security",
    "Give an impressive outlook to your website",
    "Maintain your website for you3",
    "Attain new clients while maintaining the older clients",
    "Provide high web outlook with minimal cost"
  ];

  return (
    <div className="bg-[#F1F1F1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Part 1: Top Segment (Girl Illustration & Intro Copy) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Girl Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full aspect-[4/3] max-w-md">
              <Image
                src="/scrap/Archive/flymediatech.com__our-services_web-development/assets/images/bestr-it.png"
                alt="Web Development Usage"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          {/* Right Column: Copy text */}
          <div className="lg:col-span-7 space-y-6 text-gray-800 font-sans font-medium text-sm sm:text-base leading-relaxed">
            <p>
              Now a days a web page is used for personal and business usage. Thanks to technology development of websites has become an easy availability. The increasing number in internet users and websites is a clear indication of the popularity of websites. Yes, TV and radio are also popular but, with the internet the user is completely free to use to self requirement. Fact, anybody, even a common person, can have his/her own website but, how many common people can have their own show on the TV.
            </p>
            <p>
              Today android devices are in everybody&apos;s hand hence, making internet easily accessible to all. With the ever advancing technology hosting or setting up a website has become very easy. It&apos;s this technology that helps the developers in making your website more viable. To get such viable site you require a website developer in Punjab. The work of these Website Development Services is to make your basic website into a highly developed and well arranged websites.
            </p>
          </div>
        </div>

        {/* Part 2: Middle Segment (Points List & Growth Copy) */}
        <div className="space-y-6 text-gray-800 font-sans font-medium text-sm sm:text-base leading-relaxed">
          <p>
            When the PC became a household item applications were made offering services but, they lacked diversity. This lack of diversity was overtaken with the development of web sites. Over time website development has only evolved with high aspirations. Be it any website developer they are concerned about these main points while developing a website:
          </p>
          
          {/* Flat Bullet list */}
          <ul className="list-disc pl-6 space-y-1 text-gray-900 font-sans font-semibold">
            {bulletPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>

          <p>
            No doubt, web is the door to reach not just maximum but, global audience. With a website you can put your service or product right in the hand of your customer. Thanks to these websites now just by the click of a mouse a product or service can be obtained.
          </p>
          <p>
            Yes, website developing includes many fields like development, designing, managing content and integrating the payment gate. Websites are not just beneficial for the owner of the website but, for the customer as well.
          </p>
          <p>
            Now a day&apos;s thanks to websites work like booking a railway ticket, airline ticket, booking a movie ticket, paying bills can easily be done online. Traffic is perhaps the most desired fruit expected from any website. A well developed website that targets the right demand of the users/audience is what one gets from hiring a website developer.
          </p>
        </div>

        {/* Part 3: Bottom Segment (When to get developed?) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12 border-t border-gray-300/40">
          {/* Left Column: Heading & Paragraph */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black tracking-tight leading-tight">
              When to get your website developed?
            </h2>
            <p className="text-gray-800 font-sans font-medium text-sm sm:text-base leading-relaxed">
              There is no particular time for this. Internet is available 24&times;7 and websites offer services to their customers also 24&times;7. As a owner you will soon be reaping profits. The e-market is developing day by day hence, the sooner you get your website developed the sooner your service will be in the hand of the customer. Or if you want to to the more information about the web development then you should read Less Web Development Cookbook.
            </p>
          </div>
          
          {/* Right Column: Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full aspect-[4/3] max-w-md">
              <Image
                src="/scrap/Archive/flymediatech.com__our-services_web-development/assets/images/content-1.png"
                alt="When to get website developed"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- Contact Form Section ---
const ContactFormSection = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for getting in touch with us! We will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-[#F1F1F1] py-16 relative z-10 font-sans">
          <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Contact Details (Elementor HTML Replicated) */}
          <div className="lg:col-span-5 space-y-6 py-6 pr-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-none">
              Contact Us
            </h2>
            
            <div className="space-y-6">
              {/* Location */}
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-black font-sans leading-tight">
                  Location
                </h2>
                <div className="flex items-start gap-3 mt-1">
                  <span className="text-[#FA7E09] w-5 h-5 shrink-0 mt-0.5">
                    <svg aria-hidden="true" className="fill-[#FA7E09] w-5 h-5" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                    </svg>
                  </span>
                  <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">
                    Flymedia Technology, Plot no, 20, Vishal Nagar Ext, opposite Kashish Cafe, Vishal Nagar, Jawaddi Taksal, Ludhiana, Punjab 141001
                  </p>
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-black font-sans leading-tight">
                  Phone Number
                </h2>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[#FA7E09] w-5 h-5 shrink-0">
                    <svg aria-hidden="true" className="fill-[#FA7E09] w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                    </svg>
                  </span>
                  <a href="tel:+91-98884-84310" className="text-gray-700 font-medium text-sm sm:text-base hover:text-[#FA7E09] transition-colors leading-relaxed">
                    +91-98884-84310
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-black font-sans leading-tight">
                  Email
                </h2>
                <div className="space-y-3 mt-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[#FA7E09] w-5 h-5 shrink-0">
                      <svg aria-hidden="true" className="fill-[#FA7E09] w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                      </svg>
                    </span>
                    <a href="mailto:anujguptaflymedia@gmail.com" className="text-gray-700 font-medium text-sm sm:text-base hover:text-[#FA7E09] transition-colors leading-relaxed">
                      anujguptaflymedia@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#FA7E09] w-5 h-5 shrink-0">
                      <svg aria-hidden="true" className="fill-[#FA7E09] w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                      </svg>
                    </span>
                    <a href="mailto:anujgupta@flymediatech.com" className="text-gray-700 font-medium text-sm sm:text-base hover:text-[#FA7E09] transition-colors leading-relaxed">
                      anujgupta@flymediatech.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (Sharp corners, background classic) */}
          <div className="lg:col-span-7 bg-[#EFEFEF] p-8 sm:p-12 rounded-none shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-gray-200/20 relative z-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-8 tracking-tight leading-none font-sans">
              Get In Touch With Us
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* bsm-1 container holding Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full bg-white border border-gray-300 rounded-none px-4 py-3.5 text-gray-950 placeholder-gray-500 font-medium focus:outline-none focus:ring-1 focus:ring-black text-xs sm:text-sm"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-white border border-gray-300 rounded-none px-4 py-3.5 text-gray-950 placeholder-gray-500 font-medium focus:outline-none focus:ring-1 focus:ring-black text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* bsm-3 container holding Phone */}
              <div className="w-full">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full bg-white border border-gray-300 rounded-none px-4 py-3.5 text-gray-950 placeholder-gray-500 font-medium focus:outline-none focus:ring-1 focus:ring-black text-xs sm:text-sm"
                />
              </div>

              {/* bsm-3 container holding Textarea */}
              <div className="w-full">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Type you message here..."
                  required
                  className="w-full bg-white border border-gray-300 rounded-none px-4 py-3.5 text-gray-950 placeholder-gray-500 font-medium focus:outline-none focus:ring-1 focus:ring-black text-xs sm:text-sm resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-black text-white hover:bg-[#FA7E09] hover:text-white transition-all duration-300 font-bold px-10 py-3.5 rounded-full text-sm sm:text-base shadow-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
      </div>
    </div>
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
      <WebDevelopmentLastSection />
      <ContactFormSection />
    </ServicePage>
  );
}
