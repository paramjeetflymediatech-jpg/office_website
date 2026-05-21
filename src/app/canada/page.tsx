"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Monitor,
  Search,
  Code,
  Smartphone,
  TrendingUp,
  CreditCard,
  Target,
  Users,
  Award,
  ChevronDown,
  PenTool,
  CheckCircle2,
  Building2,
  Car,
  Plane,
  HeartPulse,
  Briefcase,
  ShieldCheck,
  Zap,
  Star,
  Sparkles,
  UserCheck,
  FileCode,
  Share2,
  Boxes,
  BarChart3
} from "lucide-react";

const services = [
  {
    title: "Web Designing",
    desc: "Create visually stunning, responsive, and user-friendly websites that capture your brand's essence and engage visitors.",
    icon: <Monitor size={24} />,
    link: "/canada/web-designing"
  },
  {
    title: "SEO Services",
    desc: "Optimize your digital presence to rank higher on search engines and attract organic, high-quality traffic to your business.",
    icon: <Search size={24} />,
    link: "/our-services/seo-marketing-services"
  },
  {
    title: "Website Development",
    desc: "Robust and scalable web development solutions tailored to meet your unique operational requirements and business goals.",
    icon: <Code size={24} />,
    link: "/our-services/web-development"
  },
  {
    title: "Digital Marketing",
    desc: "Comprehensive, data-driven marketing strategies that amplify your online presence and drive measurable growth.",
    icon: <TrendingUp size={24} />,
    link: "/social-media-optimization"
  },
  {
    title: "Google Adwords (PPC)",
    desc: "Targeted advertising campaigns to maximize your ROI by reaching customers actively searching for your products.",
    icon: <Target size={24} />,
    link: "/pay-per-click-ppc"
  },
  {
    title: "Content Writing",
    desc: "Compelling, SEO-optimized content that communicates your brand message clearly and establishes industry authority.",
    icon: <PenTool size={24} />,
    link: "/content-writing"
  },
  {
    title: "Mobile Apps",
    desc: "Custom iOS and Android application development for seamless customer experiences on the go.",
    icon: <Smartphone size={24} />,
    link: "/mobile-apps-development"
  },
  {
    title: "Payment Gateway",
    desc: "Secure and reliable payment integrations to facilitate smooth transactions and improve customer trust.",
    icon: <CreditCard size={24} />,
    link: "/our-services/payment-gateway-integration"
  }
];

const features = [
  {
    title: "Digital Consultancy",
    desc: "We work collaboratively to ensure you thoroughly understand the various marketing strategies employed in your digital space.",
    icon: <Briefcase size={20} />
  },
  {
    title: "Customized Plans",
    desc: "Every business is unique. We provide customized plans tailored to address and meet your specific digital marketing goals.",
    icon: <Target size={20} />
  },
  {
    title: "Dedicated Team",
    desc: "Our employees are at the top of their field and can provide solutions to any and all issues to realize your vision.",
    icon: <Users size={20} />
  },
  {
    title: "13+ Years Experience",
    desc: "You receive quality content strategies and the best pragmatic strategies built from over a decade of operational expertise.",
    icon: <Award size={20} />
  },
  {
    title: "Continuous Improvement",
    desc: "We always strive to upgrade ourselves with the latest advances made in the ever-evolving digital marketing space.",
    icon: <Zap size={20} />
  },
  {
    title: "Client Satisfaction",
    desc: "Your satisfaction is our key ethos. We ensure that your visions for your website and digital strategy are fully realized.",
    icon: <Star size={20} />
  }
];

const faqs = [
  {
    q: "What is SEO?",
    a: "SEO refers to search engine optimization, which incorporates practices that help a business achieve higher rankings in search engines. Higher rankings result in more visibility, which leads to more clicks and contributes to bringing more new leads."
  },
  {
    q: "How Much Does SEO Cost?",
    a: "The cost of SEO utterly depends on the extent of practice you choose for your business. It depends upon the practices you wish to focus on more that can take your business to the top."
  },
  {
    q: "When Are The Results Visible?",
    a: "SEO holds the capability to bring instant results for a website. However, if you desire organic, long-lasting results, it can take up to 4-6 months. Organic results create lasting trust and credibility."
  },
  {
    q: "What All Comes Under SEO Service?",
    a: "SEO incorporates various components that combine together to create an outstanding result, including local SEO keyword search, internal links, technical SEO, competitor analysis, guest blogging, and more."
  },
  {
    q: "How Can I Access Quality Service?",
    a: "Accessing quality service is extremely easy. You can contact us through our website or give us a call. We conduct all major services from our head office in India with our marketing office located in Canada."
  }
];

const industries = [
  { name: "Car Rental", icon: <Car size={32} /> },
  { name: "Immigration", icon: <Plane size={32} /> },
  { name: "Cleaning", icon: <Sparkles size={32} /> },
  { name: "Insurance", icon: <ShieldCheck size={32} /> },
  { name: "Real Estate & Construction", icon: <Building2 size={32} /> },
  { name: "Healthcare & IVF", icon: <HeartPulse size={32} /> }
];

export default function CanadaLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#EFEFEF]">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-36 pb-24 px-4 overflow-hidden">
        {/* Background video and gradient contrast overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover pointer-events-none"
          >
            <source src="/2551298_Science_World_1280x7201.mov" type="video/quicktime" />
            <source src="/2551298_Science_World_1280x7201.mov" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/80" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
          {/* Badge Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="inline-block bg-[#EC7317] text-white font-bold px-8 py-3.5 rounded-2xl shadow-2xl text-2xl md:text-7xl  tracking-wider mb-6 border border-white/10"
          >
            Refine The Success
          </motion.div>

          {/* Serif Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-xl md:text-3xl text-white font-medium mb-6 italic tracking-wide"
          >
            Of Your Business With
          </motion.h2>

          {/* Main Landing Header */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-8 drop-shadow-lg max-w-5xl"
          >
            Canada's Premier Digital Marketing Experts
          </motion.h1>
        </div>
      </section>



      {/* 2.5 Founder Spotlight: Dr. Anuj Gupta */}
      <section
        className="py-24 px-4 bg-[#D0D0D0] elementor-element elementor-element-82a5da1 e-flex e-con-boxed wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no e-con e-parent e-lazyloaded border-t border-gray-100"
        data-id="82a5da1"
        data-element_type="container"
      >
        <div className="max-w-7xl mx-auto e-con-inner grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="elementor-element elementor-element-496acef e-con-full e-flex e-con-child space-y-8 order-2 lg:order-1"
            data-id="496acef"
          >
            <div className="elementor-element elementor-element-d91e602 e-con-full e-flex e-con-child space-y-6" data-id="d91e602">

              {/* Heading */}
              <div className="elementor-element elementor-element-c7fb06a elementor-widget elementor-widget-heading animate-fade-in" data-id="c7fb06a" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-4xl md:text-5xl font-extrabold text-black leading-tight tracking-tight elementor-heading-title elementor-size-default"
                  >
                    Pioneering the Way in Digital Marketing Space: FlyMedia Technology
                  </h2>
                </div>
              </div>

              {/* Text Paragraph 1 */}
              <div className="elementor-element elementor-element-0abf8a2 elementor-widget elementor-widget-text-editor" data-id="0abf8a2" data-widget_type="text-editor.default">
                <div className="elementor-widget-container text-gray-600 text-lg leading-relaxed font-medium">
                  FlyMedia Technology has flourished thoroughly under the guidance and ambition of our founder, <strong className="text-black font-bold">Dr Anuj Gupta</strong>. Dr Gupta founded the company as a humble venture aiming to help other organizations and businesses prosper in the digital marketing space. A Google Adword certified digital marketing expert, Dr Gupta’s vision has successfully delivered the excellence of digital media to a number of his clients.
                </div>
              </div>

              {/* Text Paragraph 2 */}
              <div className="elementor-element elementor-element-5edcd12 elementor-widget elementor-widget-text-editor" data-id="5edcd12" data-widget_type="text-editor.default">
                <div className="elementor-widget-container text-gray-600 text-lg leading-relaxed font-medium">
                  With the wealth of experience gained in the last 13 years of operating as a prosperous business, FlyMedia Technology has been at the top of its game, thriving in the digital marketing space. No matter how large or small your business operation is, FlyMedia Technology can help your business flourish in the digital marketing space.
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Founder Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="elementor-element elementor-element-9316398 e-con-full e-flex e-con-child flex justify-center order-1 lg:order-2"
            data-id="9316398"
          >
            <div className="elementor-element elementor-element-b993a0e anujimg elementor-widget elementor-widget-image relative w-full aspect-square overflow-hidden  group " data-id="b993a0e" data-widget_type="image.default">
              <div className="elementor-widget-container w-full h-full">
                <Image
                  src="/uploads/2024/09/Anujgupta.webp"
                  alt="Website owner at Flymedia Technology, digital marketing expert, SEO strategist, technology professional Dr Anuj Gupta."
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Parth Katyal Leadership Spotlight */}
      <section
        className="py-24 px-4 bg-[#D0D0D0] elementor-element elementor-element-c4c8c2e e-flex e-con-boxed wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no e-con e-parent e-lazyloaded"
        data-id="c4c8c2e"
        data-element_type="container"
      >
        <div className="max-w-7xl mx-auto e-con-inner grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Official Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="elementor-element elementor-element-4c5f920 e-con-full e-flex e-con-child flex justify-center"
            data-id="4c5f920"
          >
            <div
              className="elementor-element elementor-element-25babfc anujimg elementor-widget elementor-widget-image relative w-full aspect-[500/700] max-w-[420px] rounded-[3rem] overflow-hidden  group "
              data-id="25babfc"
              data-element_type="widget"
              data-settings={'{"motion_fx_motion_fx_mouse":"yes"}'}
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container w-full h-full">
                <Image
                  src="/uploads/2024/09/newimg.png"
                  alt="Innovative digital marketing consultant at Flymedia Technology, Parth Katyal."
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Statement & Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="elementor-element elementor-element-852979d e-con-full e-flex e-con-child space-y-8"
            data-id="852979d"
          >
            <div className="space-y-6">

              {/* Heading */}
              <div className="elementor-element elementor-element-05192d4 elementor-widget elementor-widget-heading animate-fade-in" data-id="05192d4" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-4xl md:text-5xl font-extrabold text-black leading-tight tracking-tight elementor-heading-title elementor-size-default"
                  >
                    Armed with the Right Marketing Strategies: Parth Katyal
                  </h2>
                </div>
              </div>

              {/* Text Paragraph 1 */}
              <div className="elementor-element elementor-element-868f880 elementor-widget elementor-widget-text-editor" data-id="868f880" data-widget_type="text-editor.default">
                <div className="elementor-widget-container text-gray-600 text-lg leading-relaxed font-medium">
                  In collaboration with <strong className="text-black font-bold">Parth Katyal</strong>, a marketing expert in his own right, FlyMedia Technology is well-equipped with experts who know and understand industry standards. A visionary in his field, Mr Katyal has made certain that the clients of FlyMedia Technology experience the best possible results by being two steps ahead of the trend cycle.
                </div>
              </div>

              {/* Text Paragraph 2 */}
              <div className="elementor-element elementor-element-18d5c18 elementor-widget elementor-widget-text-editor" data-id="18d5c18" data-widget_type="text-editor.default">
                <div className="elementor-widget-container text-gray-600 text-lg leading-relaxed font-medium">
                  Mr Katyal stepped into the digital marketing space with the ambition of rivalling already established companies. A young entrepreneur capable of dealing with any problem as it may come, Mr Katyal is an integral part of FlyMedia Technology. On-the-go problem-solving has always been one of the best traits Mr Katyal has brought to the FlyMedia Technology working environment.
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Upgraded Promotional Services Grid */}
      <section
        className="py-24 px-4 bg-[#F1F1F1] text-white relative overflow-hidden elementor-element elementor-element-e4c7aba e-flex e-con-boxed wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no e-con e-parent e-lazyloaded"
        data-id="e4c7aba"
        data-element_type="container"
      >
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]" />

        <div className="max-w-7xl mx-auto e-con-inner relative z-10 space-y-16">

          {/* Header Block */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight tracking-tight elementor-element elementor-element-87a8927"
              data-id="87a8927"
            >
              Find the Correct Solutions for all Your Digital Marketing Needs with FlyMedia Technology
            </h2>
            <p
              className="text-lg md:text-xl text-black font-medium max-w-2xl mx-auto leading-relaxed elementor-element elementor-element-275dfe6"
              data-id="275dfe6"
            >
              We provide a variety of digital marketing services. From digital consultations to social media marketing strategies, you are assured of receiving the best result with FlyMedia Technology.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: "a5c0997",
                bg: "/uploads/2024/09/i01.jpg",
                icon: <UserCheck size={32} className="text-[#ff9900]" />,
                title: "Digital Consultancy",
                desc: "At FlyMedia Technology, we work in collaboration with the client. We know and understand that digital marketing terminology can be difficult to understand. However, we provide our consultations so the client thoroughly understands the various marketing strategies employed in the space."
              },
              {
                id: "166a7dc",
                bg: "/uploads/2024/09/img02.jpg",
                icon: <Monitor size={32} className="text-[#ff9900]" />,
                title: "Pay Per Click Advertising",
                desc: "In order to make certain that your advertisements are seen and viewed by as many people as possible, we employ Pay Per Click Advertising. This helps to increase your ROI by explicitly targeting customers who are aligned with the products or services offered by your business."
              },
              {
                id: "5a48305",
                bg: "/uploads/2024/09/img04.jpg",
                icon: <FileCode size={32} className="text-[#ff9900]" />,
                title: "Content Marketing",
                desc: "It is important to have a coherent and unified content marketing strategy. Our experts at FlyMedia Technology can help you navigate through the various plans that will work in your favour."
              },
              {
                id: "719e718",
                bg: "/uploads/2024/09/img06.jpg",
                icon: <Share2 size={32} className="text-[#ff9900]" />,
                title: "Social Media Marketing",
                desc: "The exponential rise of the Internet and social media has led to the expansion of digital marketing space. With FlyMedia Technology, you are assured of receiving the best possible Social Media Marketing strategies."
              },
              {
                id: "d108ac7",
                bg: "/uploads/2024/09/IIMG01.jpg",
                icon: <Boxes size={32} className="text-[#ff9900]" />,
                title: "Mobile App Marketing",
                desc: "It is perhaps one of the most vital ways FlyMedia Technology ensures that your website is reachable and visible to your target audience. Search Engine Optimization expands the scope of your website to reach the consumers who are already in need of your products and services."
              }
            ].map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="wpr-promo-box wpr-animation-wrap relative h-[440px] rounded-[2.5rem] overflow-hidden group shadow-xl border border-white/5 bg-gray-950"
                data-id={card.id}
              >
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={card.bg}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out brightness-[0.35] group-hover:brightness-[0.25]"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                </div>

                {/* Content Box */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg transform -translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500">
                    {card.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-wide group-hover:text-[#ff9900] transition-colors duration-300">
                    {card.title}
                  </h3>

                  <p className="text-sm text-gray-300/90 leading-relaxed font-medium line-clamp-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5 Standalone Potential Section: Canada Flag Graphics */}
      <section
        className="py-24 px-4 bg-[#F1F1F1] elementor-element elementor-element-f07cd18 e-flex e-con-boxed wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no e-con e-parent e-lazyloaded border-t border-gray-100"
        data-id="f07cd18"
        data-element_type="container"
      >
        <div className="max-w-7xl mx-auto e-con-inner grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Brand Statement Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="elementor-element elementor-element-bec3b8a e-con-full e-flex e-con-child space-y-8"
            data-id="bec3b8a"
          >
            <div className="elementor-element elementor-element-3b2a64e e-con-full e-flex e-con-child space-y-6" data-id="3b2a64e">

              {/* Heading */}
              <div className="elementor-element elementor-element-5bbb1fb elementor-widget elementor-widget-heading animate-fade-in" data-id="5bbb1fb" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-4xl md:text-5xl font-extrabold text-black leading-tight tracking-tight elementor-heading-title elementor-size-default"
                  >
                    Bring Out The Potential Of Your Business
                  </h2>
                </div>
              </div>

              {/* Text Description Block */}
              <div className="elementor-element elementor-element-fb15413 elementor-widget elementor-widget-text-editor" data-id="fb15413" data-widget_type="text-editor.default">
                <div className="elementor-widget-container text-gray-600 text-lg leading-relaxed font-medium">
                  The world of business has taken over the digital platform to overcome the limitations obstructing its path to success. The digital market has a vast horizon that expands to an endless array of opportunities that businesses can seize to unlock the doors of success. With FlyMedia technology, embark on the adventurous ride of running a successful business by leveraging our expertise in digital marketing. Let the world know of the true potential of your business with the finest digital marketing company in Surrey.
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Dynamic Flag Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="elementor-element elementor-element-1477156 e-con-full e-flex e-con-child flex justify-center"
            data-id="1477156"
          >
            <div
              className="elementor-element elementor-element-c0e8ea5 elementor-widget elementor-widget-image relative w-full aspect-[1000/600] max-w-[500px] overflow-hidden shadow-2xl border border-gray-100/50 group bg-gray-50 hover:shadow-orange-100 transition-shadow duration-500"
              data-id="c0e8ea5"
              data-element_type="widget"
              data-settings={'{"motion_fx_motion_fx_mouse":"yes","motion_fx_tilt_effect":"yes"}'}
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container w-full h-full">
                <Image
                  src="/uploads/2024/05/fodsjfosd.jpg"
                  alt="Beautiful Canada Flag illustration highlighting Flymedia digital marketing Surrey presence."
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. Reason to Opt for FlyMedia Technology */}
      <section
        className="py-24 px-4 bg-[#F1F1F1] elementor-element elementor-element-ba2de60 e-flex e-con-boxed wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no e-con e-parent e-lazyloaded border-t border-gray-100"
        data-id="ba2de60"
        data-element_type="container"
      >
        <div className="max-w-7xl mx-auto e-con-inner space-y-16">

          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl font-extrabold text-black leading-tight tracking-tight elementor-element elementor-element-474ebcd"
              data-id="474ebcd"
            >
              Reason to Opt for FlyMedia Technology
            </h2>
            <p
              className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed elementor-element elementor-element-bd0c375"
              data-id="bd0c375"
            >
              By choosing our services, you allow yourself to breathe easily. Our state-of-the-art digital solutions will drive results to your business.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: "cf049c4",
                bg: "/uploads/2024/09/i01.jpg",
                icon: <Target size={28} className="text-[#ff9900]" />,
                title: "Experience",
                desc: "With our 13 years of operational experience, you will receive quality content strategies and the best pragmatic strategies in the digital marketing space."
              },
              {
                id: "e1538f6",
                bg: "/uploads/2024/09/img02.jpg",
                icon: <Monitor size={28} className="text-[#ff9900]" />,
                title: "Customized Plans",
                desc: "We know that every client and every business has their unique needs and requirements. Therefore, we make certain to provide customized plans that are specifically tailored to address and meet your digital marketing goals."
              },
              {
                id: "246215a",
                bg: "/uploads/2024/09/img04.jpg",
                icon: <PenTool size={28} className="text-[#ff9900]" />,
                title: "Expertise",
                desc: "At FlyMedia Technology, we have experts who can provide solutions for all your digital marketing needs and demands. From Canva experts to certified website developers – we are a one-stop shop for all your requirements."
              },
              {
                id: "1cca92d",
                bg: "/uploads/2024/09/img06.jpg",
                icon: <Briefcase size={28} className="text-[#ff9900]" />,
                title: "Dedicated Team",
                desc: "Our team is comprised of dedicated employees who work to realize your visions into a tangible, viewable product. Our employees are at the top of their field and can provide solutions to any and all issues."
              },
              {
                id: "5f1333f",
                bg: "/uploads/2024/09/IIMG01.jpg",
                icon: <TrendingUp size={28} className="text-[#ff9900]" />,
                title: "Continuous Improvement",
                desc: "At FlyMedia Technology, we truly understand how quickly the digital marketing space moves ahead. We always strive to upgrade ourselves with the latest advances made in the digital marketing space."
              },
              {
                id: "0f70ca5",
                bg: "/uploads/2024/09/im08.jpg",
                icon: <Users size={28} className="text-[#ff9900]" />,
                title: "Client Satisfaction",
                desc: "Your satisfaction is the key ethos to our functioning as a company. We always strive to make certain that your visions for your website and the digital marketing strategy are realized."
              }
            ].map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="wpr-promo-box wpr-animation-wrap relative h-[400px] rounded-[2.5rem] overflow-hidden group shadow-xl border border-gray-100/10 bg-gray-950"
                data-id={card.id}
                data-settings={'{"motion_fx_motion_fx_mouse":"yes"}'}
              >
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={card.bg}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out brightness-[0.4] group-hover:brightness-[0.25]"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                </div>

                {/* Content Box */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/25 shadow-lg transform -translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500">
                    {card.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-[#ff9900] transition-colors duration-300">
                    {card.title}
                  </h3>

                  <p className="text-sm text-gray-200/90 leading-relaxed font-medium line-clamp-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4.5 Editorial Staggered Showcase: Canada City & Digital Empire */}
      <section
        className="py-24 px-4 bg-[#F1F1F1] overflow-hidden elementor-element elementor-element-2c70f73 e-flex e-con-boxed wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no e-con e-parent e-lazyloaded border-t border-gray-100"
        data-id="2c70f73"
        data-element_type="container"
      >
        <div className="max-w-7xl mx-auto space-y-32 e-con-inner">

          {/* Row 1: Save Precious Time (Left Image, Right Text) */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center elementor-element elementor-element-17fb4aa e-con-full e-flex e-con-child"
            data-id="17fb4aa"
          >
            {/* Left Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="elementor-element elementor-element-d7109dd e-con-full e-flex e-con-child flex justify-center"
              data-id="d7109dd"
            >
              <div
                className="elementor-element elementor-element-fb261a7 elementor-widget elementor-widget-image relative w-full aspect-square max-w-[460px]  overflow-hidden shadow-2xl border border-gray-100/50 group bg-gray-50 hover:shadow-orange-50 transition-shadow duration-500"
                data-id="fb261a7"
                data-element_type="widget"
                data-settings={'{"motion_fx_motion_fx_scrolling":"yes","motion_fx_translateX_effect":"yes"}'}
              >
                <div className="elementor-widget-container w-full h-full">
                  <Image
                    src="/uploads/2024/05/fdlsknfdksl.jpg"
                    alt="Scenic Canada City skyline representing Flymedia digital agency presence."
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="elementor-element elementor-element-e6496d9 e-con-full e-flex e-con-child space-y-6"
              data-id="e6496d9"
            >
              <div className="elementor-element elementor-element-c295326 elementor-widget elementor-widget-heading" data-id="c295326">
                <div className="elementor-widget-container">
                  <h2
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-4xl md:text-5xl font-extrabold text-black leading-tight tracking-tight"
                  >
                    Save Your Precious Time With Instant Results Of Digital Marketing Tactics
                  </h2>
                </div>
              </div>

              <div className="elementor-element elementor-element-6163719 elementor-widget elementor-widget-text-editor" data-id="6163719">
                <div className="elementor-widget-container text-gray-600 text-lg leading-relaxed font-medium">
                  At Fly Media Technology, we understand that your time is precious and that wasting even a single minute isn’t affordable. Therefore, with our expert team, we leverage our knowledge of the digital market, which we have attained with years of experience, to bring instant and long-lasting results to your business. The best digital marketing company in Canada specialises in turning visitors into potential customers for your business by building trust and credibility that is hard to compete with.
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Flourishing Digital Empire (Left Text, Right Image) */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center elementor-element elementor-element-be1ae3a e-con-full e-flex e-con-child"
            data-id="be1ae3a"
          >
            {/* Left Text Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="elementor-element elementor-element-9f9415d e-con-full e-flex e-con-child space-y-8 order-2 lg:order-1"
              data-id="9f9415d"
            >
              <div className="elementor-element elementor-element-f5104e0 elementor-widget elementor-widget-heading" data-id="f5104e0">
                <div className="elementor-widget-container">
                  <h2
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-4xl md:text-5xl font-extrabold text-black leading-tight tracking-tight"
                  >
                    Build A Flourishing Digital Empire And Fly To The Heights Of Success
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed font-medium">
                <div className="elementor-element elementor-element-738471f elementor-widget elementor-widget-text-editor" data-id="738471f">
                  <div className="elementor-widget-container">
                    Digital Marketing is a concept that incorporates the practice of several components that contribute to the success of a business. The best digital marketing company, FlyMedia Technology, enables a business to create a powerful status in the digital market.
                  </div>
                </div>

                <div className="elementor-element elementor-element-3c65740 elementor-widget elementor-widget-text-editor" data-id="3c65740">
                  <div className="elementor-widget-container">
                    We aim to bring the most out of your business with the strength of our expert team, who have years of experience in practising some of the most important components of digital marketing, such as content writing and SEO. SMO etc.
                  </div>
                </div>

                <div className="elementor-element elementor-element-eb13dd3 elementor-widget elementor-widget-text-editor" data-id="eb13dd3">
                  <div className="elementor-widget-container">
                    Our team structure is built on the foundation of trust and integrity that separates us and makes us stand out from our competitors. Every member of the best <strong className="text-black font-bold">digital marketing company in Calgary</strong> puts their extreme efforts into manifesting a result that is beyond your expectations. We provide a vast range of services at our head office located in <strong className="text-black font-bold">India</strong> for all the major operations with our marketing office in Canada that can strengthen your digital presence in the most effective way.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="elementor-element elementor-element-d552a33 e-con-full e-flex e-con-child flex justify-center order-1 lg:order-2"
              data-id="d552a33"
            >
              <div
                className="elementor-element elementor-element-3ef41e1 elementor-widget elementor-widget-image relative w-full aspect-[10/12] max-w-[420px]  overflow-hidden shadow-2xl border border-gray-100/50 group bg-gray-50 hover:shadow-orange-50 transition-shadow duration-500"
                data-id="3ef41e1"
                data-element_type="widget"
                data-settings={'{"motion_fx_motion_fx_scrolling":"yes","motion_fx_translateX_effect":"yes","motion_fx_translateX_direction":"negative"}'}
              >
                <div className="elementor-widget-container w-full h-full">
                  <Image
                    src="/uploads/2024/05/fkjsdhfsd.png"
                    alt="Corporate illustrations showing business empire growth under Flymedia guidance."
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 4.6 Business Potential Metrics: Manifesting Greater Success */}
      <section
        className="py-24 px-4 bg-[#F1F1F1] border-t border-b border-gray-100 elementor-element elementor-element-fc8fd61 e-flex e-con-boxed wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no e-con e-parent e-lazyloaded"
        data-id="fc8fd61"
        data-element_type="container"
      >
        <div className="max-w-7xl mx-auto e-con-inner space-y-16">

          {/* Section Heading */}
          <div className="text-center max-w-4xl mx-auto">
            <h3
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight tracking-tight elementor-element elementor-element-b7b8f35"
              data-id="b7b8f35"
            >
              Manifesting Greater Success By Tapping Into The Full Potential Of Your Business
            </h3>
          </div>

          {/* Cards Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 elementor-element elementor-element-55e92ea e-con-full e-flex e-con-child"
            data-id="55e92ea"
          >
            {/* Card 1: Higher Rankings */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:scale-[1.02] border border-gray-100/60 group transition-all duration-500 flex flex-col items-center text-center space-y-6 elementor-element elementor-element-14f03cb"
              data-id="14f03cb"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#ff9900]/10 flex items-center justify-center text-[#ff9900] group-hover:bg-[#ff9900] group-hover:text-white transition-all duration-500 shadow-md shadow-[#ff9900]/5">
                <BarChart3 size={32} />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-black tracking-wide group-hover:text-[#ff9900] transition-colors duration-300">
                  Higher Rankings
                </h4>
                <p className="text-gray-600 leading-relaxed font-medium">
                  The SEO professionals at the best digital marketing company in Canada empower the business by providing efficient visibility results that lead to higher ranking in the search engine.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Expert Advice */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:scale-[1.02] border border-gray-100/60 group transition-all duration-500 flex flex-col items-center text-center space-y-6 elementor-element elementor-element-776c9c6"
              data-id="776c9c6"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#ff9900]/10 flex items-center justify-center text-[#ff9900] group-hover:bg-[#ff9900] group-hover:text-white transition-all duration-500 shadow-md shadow-[#ff9900]/5">
                <Briefcase size={32} />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-black tracking-wide group-hover:text-[#ff9900] transition-colors duration-300">
                  Expert Advice
                </h4>
                <p className="text-gray-600 leading-relaxed font-medium">
                  The expertise of the best digital marketing company in Surrey focuses on planning effective strategies that would bring efficient results in less time and last longer.
                </p>
              </div>
            </motion.div>

            {/* Card 3: New And Quality Leads */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:scale-[1.02] border border-gray-100/60 group transition-all duration-500 flex flex-col items-center text-center space-y-6 elementor-element elementor-element-fb690d3"
              data-id="fb690d3"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#ff9900]/10 flex items-center justify-center text-[#ff9900] group-hover:bg-[#ff9900] group-hover:text-white transition-all duration-500 shadow-md shadow-[#ff9900]/5">
                <Users size={32} />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-black tracking-wide group-hover:text-[#ff9900] transition-colors duration-300">
                  New And Quality Leads
                </h4>
                <p className="text-gray-600 leading-relaxed font-medium">
                  The work and efforts of the best digital marketing company in British Columbia contribute to building trust and credibility of the business, attracting new and quality leads every single day.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>



      {/* 5. Brand Positioning: Why To Choose FlyMedia Technology in Canada */}
      <section
        className="py-24 px-4 bg-[#F1F1F1] elementor-element elementor-element-e115c28 e-flex e-con-boxed wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no e-con e-parent e-lazyloaded border-t border-b border-gray-100/50"
        data-id="e115c28"
        data-element_type="container"
      >
        <div className="max-w-7xl mx-auto e-con-inner">
          <div className="bg-white  p-8 md:p-16 shadow-xl border border-gray-200/40 space-y-10 text-center">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="elementor-element elementor-element-ffb8860 e-con-full e-flex e-con-child"
              data-id="ffb8860"
            >
              <div className="elementor-element elementor-element-be2c7b4 elementor-widget elementor-widget-heading w-full" data-id="be2c7b4">
                <div className="elementor-widget-container">
                  <h2
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight tracking-tight elementor-heading-title elementor-size-default"
                  >
                    Why To Choose The Best Digital Marketing Company In Canada?
                  </h2>
                </div>
              </div>
            </motion.div>

            {/* Detailed Content paragraphs */}
            <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed font-medium">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="elementor-element elementor-element-dee1bb3 elementor-widget elementor-widget-text-editor"
                data-id="dee1bb3"
              >
                <div className="elementor-widget-container">
                  <p>
                    FlyMedia Technology is more than just a digital marketing company; we work on finding the best route for a business that can take it up the ladder to success. Every business conducts different operations for which it requires targeting different consumers. We aim to find the consumers that would be fit for you by finding a path that would ensure the smooth flow of your business.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="elementor-element elementor-element-1966310 elementor-widget elementor-widget-text-editor"
                data-id="1966310"
              >
                <div className="elementor-widget-container">
                  <p>
                    We don’t believe in following what has already been done because we strive for more. The best <strong className="text-black font-bold">digital marketing company in British Columbia</strong> creates the best strategies that are well-planned and fit well with the company’s working structure. We dig deep into your company’s history and working mechanism to learn more about it, which enables us to bring out the most from your business. Bringing creativity and innovation to the front to attract consumers and transform them into permanent potential customers.
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl font-extrabold text-black tracking-tight"
            >
              FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-b border-[#ff9900] pb-6"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between py-4 bg-transparent hover:bg-gray-50/40 px-4 rounded-xl transition-colors text-left"
                >
                  <span className="font-bold text-black text-lg md:text-xl">{faq.q}</span>
                  <ChevronDown
                    className={`transform transition-transform duration-300 text-[#ff9900] ${openFaq === index ? "rotate-0" : "-rotate-90"}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-2 text-gray-600 leading-relaxed text-base">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
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
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }, null, 2),
        }}
      />
    </main>
  );
}
