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
  Sparkles
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
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff9900]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-bold text-gray-600 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff9900] animate-pulse" />
            Flymedia Technology Canada
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-8 leading-tight tracking-tight"
          >
            Best Digital Marketing <br className="hidden md:block" />
            Company In <span className="text-[#ff9900] relative inline-block">
              Surrey, BC
              <svg className="absolute w-full h-4 -bottom-1 left-0 text-black/10" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Explore and Excel in the digital marketing world with our comprehensive, data-driven and result-oriented digital marketing services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="/contact-us"
              className="px-8 py-4 bg-[#ff9900] text-black font-bold rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-xl shadow-[#ff9900]/20 flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Get Started Today
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/portfolio"
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              View Our Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Parth Katyal Leadership Spotlight */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center"
          >
            {/* Placeholder for Leadership Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ff9900] to-transparent" />
            
            <div className="relative z-20 text-center p-8 text-white">
              <Award size={64} className="mx-auto mb-6 text-[#ff9900]" />
              <h3 className="text-3xl font-bold mb-2">Parth Katyal</h3>
              <p className="text-xl text-gray-300 font-medium">Marketing Visionary & Expert</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Driving Digital Excellence in <span className="text-[#ff9900]">Canada</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                In collaboration with <strong className="text-black">Parth Katyal</strong>, a marketing expert in his own right, FlyMedia Technology is well-equipped with professionals who know and understand industry standards. A visionary in his field, Mr. Katyal ensures our clients experience the best possible results by always staying two steps ahead of the trend cycle.
              </p>
              <p>
                Mr. Katyal stepped into the digital marketing space with the ambition of rivaling already established companies. As a dynamic entrepreneur capable of dealing with any challenge, he brings exceptional on-the-go problem-solving skills to the FlyMedia Technology working environment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
              <div>
                <h4 className="text-4xl font-bold text-black mb-2">13+</h4>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-black mb-2">100%</h4>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Core Services Grid */}
      <section className="py-24 px-4 bg-[#EFEFEF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Comprehensive Services
            </h2>
            <p className="text-lg text-gray-600">
              Whether it is SEO, Website Designing, Graphic Designing, Content Writing, or Social Media Marketing, we have got all your needs covered to strengthen your digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 group border border-transparent hover:border-[#ff9900]/20"
              >
                <div className="w-14 h-14 bg-gray-50 group-hover:bg-[#ff9900] text-black rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#ff9900] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {service.desc}
                </p>
                <Link 
                  href={service.link}
                  className="inline-flex items-center gap-2 text-black font-bold text-sm group-hover:text-[#ff9900] transition-colors"
                >
                  Explore Service <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us / Features */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
                Why Partner With <span className="text-[#ff9900]">FlyMedia Technology?</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Digital Marketing is a concept that incorporates the practice of several components that contribute to the success of a business. As the best digital marketing company in Surrey, we enable your business to create a powerful status in the digital market.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#EFEFEF] p-6 rounded-2xl">
                <Target className="text-[#ff9900] mb-4" size={32} />
                <h4 className="font-bold text-black mb-2">Higher Rankings</h4>
                <p className="text-sm text-gray-600">Achieve efficient visibility results that lead to higher rankings in search engines.</p>
              </div>
              <div className="bg-black text-white p-6 rounded-2xl">
                <Users className="text-[#ff9900] mb-4" size={32} />
                <h4 className="font-bold mb-2">Quality Leads</h4>
                <p className="text-sm text-gray-300">Build trust and credibility to attract new, high-quality leads every single day.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 border-t border-gray-100">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#ff9900]/10 flex items-center justify-center text-[#ff9900] flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-2">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Industries Served Marquee/Grid */}
      <section className="py-24 px-4 bg-[#EFEFEF] overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Industries We Serve</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our versatile strategies are effective across a diverse range of industries and sectors.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center gap-4 text-center group hover:bg-[#ff9900] transition-colors duration-300 shadow-sm"
            >
              <div className="text-gray-400 group-hover:text-black transition-colors duration-300">
                {ind.icon}
              </div>
              <span className="font-bold text-sm text-black">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about our SEO and Digital Marketing services.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-bold text-black text-lg">{faq.q}</span>
                  <ChevronDown 
                    className={`transform transition-transform duration-300 text-[#ff9900] ${openFaq === index ? "rotate-180" : ""}`}
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
                      <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
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
      
      {/* 7. CTA Section */}
      <section className="py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#ff9900] rounded-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-gray-300 font-medium">Contact the best digital marketing company in British Columbia today.</p>
          <Link 
            href="/contact-us"
            className="inline-flex items-center gap-4 bg-[#ff9900] text-black font-bold px-12 py-5 rounded-full hover:bg-white transition-all shadow-2xl shadow-[#ff9900]/20 group"
          >
            Schedule a Consultation
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
