"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Target,
  Users2,
  Award,
  ChevronRight,
  Sparkles,
  CheckCircle
} from "lucide-react";

export default function AboutUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "How much experience do your professionals have in the digital marketing field?",
      a: "Our professionals have more than thirteen years of experience in the field of digital marketing. This is the major reason why Flymedia Technology is leading the list of best digital marketing companies in India."
    },
    {
      q: "Do you also help in providing marketing strategies to small-scale businesses?",
      a: "Yes, we efficiently help in raising small-scale businesses by providing them with a complete guide to different digital marketing strategies. Along with this, our professionals and skilled team members ensure to boost their small-scale businesses all over the world through our effective strategies."
    },
    {
      q: "How is your digital marketing agency unique and different from other companies?",
      a: "FlyMedia Technology – the best digital marketing company in India – includes creative and innovative team members, highly proficient in website designing and content creation. Due to such a strong pillar, our company holds a unique and different perspective, thus providing you with effective digital marketing strategies."
    },
    {
      q: "Do you handle our social media accounts for increasing visibility?",
      a: "Yes, our professional team members have precise knowledge regarding managing your social media account in an essential manner. Through different social media strategies, we make sure to boost your profile’s visibility, thus providing you with numerous benefits."
    },
    {
      q: "Do you also help start-up businesses to rise in this competitive world?",
      a: "Yes, our professionals also help start-up businesses in this competitive world by providing you with different and unique digital marketing strategies with the aim of increasing your visibility in this competitive world."
    },
    {
      q: "Do you provide all digital marketing services?",
      a: "Yes, we excel in providing all digital marketing services, including SEO, content writing, Google Adwords, website development and website designing with the inclusion of perfectionism and professionalism by the best website designer in Ludhiana."
    },
    {
      q: "What is your price structure for overall digital marketing services?",
      a: "Generally, our price range for all digital marketing services varies around 4,00,000 or beyond this, totally depending on your specific needs and requirements. You can engage with us anytime with the aim of getting a clear idea regarding our price structure for different digital marketing services."
    },
    {
      q: "After how much time will I be able to witness a noticeable change in my website growth?",
      a: "Due to our consistent approach towards boosting your website reach through different keyword rankings, you’ll be able to witness the noticeable change within three to six months. We make sure to derive faster results in terms of increasing the visibility of your website in an essential manner."
    },
    {
      q: "Do you also excel in creating mobile apps?",
      a: "Yes, our skilled team members are capable of creating mobile apps with the inclusion of perfect website elements. Our highly determined team members ensure that mobile apps are made with accuracy and precision that can significantly help in enhancing the user experience."
    },
    {
      q: "Do you also help in updating the website periodically?",
      a: "Yes, our professionals in website development make sure to thoroughly update your website in a periodic manner with the aim of fixing any bugs or updating the images that seem relevant to the content. This can significantly help in enhancing the functionality of your website, along with providing a smooth user experience."
    },
    {
      q: "How do your professionals help in aligning my website to the target audience?",
      a: "One of the most effective ways used by the professionals of FlyMedia Technology includes the use of keywords in a strategic manner with the aim of finding the target audience. This includes the addition of specific keywords which are commonly used by the audience in order to find the desired results."
    },
    {
      q: "How much time do your professionals take to build a website?",
      a: "The time to develop a single website thoroughly depends on the complexity of the design, along with its specific functionality. However, the professionals of FlyMedia Technology make sure to develop a single website within a few weeks; however, if it includes a complex structure of content, along with different designs, then it can take up to months."
    },
    {
      q: "What sets you apart in terms of website design from other companies?",
      a: "We make sure to introduce you to the complex and modern website elements that can be beneficial in this highly competitive world. With the use of unique and different elements, we help in enhancing your website’s visibility, thus effectively contributing to one of the reasons why we are the best website designing company in Punjab."
    }
  ];

  const milestones = [
    {
      icon: <Building2 className="w-6 h-6 text-[#ff9900]" />,
      title: "Established since 2011",
      desc: "Consistently working hard to provide top-tier web solutions and digital excellence for over a decade."
    },
    {
      icon: <Users2 className="w-6 h-6 text-[#ff9900]" />,
      title: "Dedicated Experts Team",
      desc: "Our skilled developers, creative designers, and certified SEO experts perform all operations with high accuracy."
    },
    {
      icon: <Target className="w-6 h-6 text-[#ff9900]" />,
      title: "Client-Centric Mission",
      desc: "We focus on understanding your distinct business requirements and creating custom strategies tailored for growth."
    },
    {
      icon: <Award className="w-6 h-6 text-[#ff9900]" />,
      title: "Industrial Tech Capital",
      desc: "Proudly rooted in Ludhiana, Punjab's industrial hub, enabling regional and global brands to dominate online search."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F3F4F6] px-4">

      {/* 1. Elementor-replicated Headline/Hero Section */}
      <section className="max-w-7xl mx-auto pt-12 pb-16 text-center">


        {/* About Us Headline Layout */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-6">
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-black tracking-tight ">
              About
            </h1>
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-black tracking-tight ">
                Us
              </h1>
            </div>
          </div>
        </div>

        {/* Text editor - Time to accelerate... */}
        <p className="text-xl md:text-2xl font-serif font-bold text-gray-800 tracking-wide max-w-2xl mx-auto mt-4">
          Time To Accelerate Your Business Presence
        </p>
      </section>



      {/* 2.5. Globally With Digital Marketing Company Tactics Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="rounded-3xl p-8 md:p-12  grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Vision & Directors Info */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-black leading-tight">
              Globally With Digital Marketing Company Tactics
            </h2>
            <div className="w-16 h-1"></div>

            <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Flymedia Technology started with the vision to bring the latest and modern tactics to prove fruitful for small-scale businesses. <span className="text-black font-bold">Dr. Anuj Gupta (Director)</span> completed his Ph.D., MCA, and BCA, along with Google Adword certification. Along with <span className="text-black font-bold">Er. Jainika Mittal</span> completed her MCA and BCA with the aim to assist the business to have a wider reach across the globe.
              </p>
              <p>
                The company started in 2011 with the vision to assist the business with the most effective and cost-friendly methods of <Link href="/social-media-optimization/" className="text-[#ff9900] underline font-bold hover:text-black transition-colors">digital marketing</Link> and many methods of SEO. The zeal to make a difference is the reason for the company’s extreme presence as one of the top-rated <Link href="/" className="text-[#ff9900] underline font-bold hover:text-black transition-colors">digital marketing company in India</Link>.
              </p>
            </div>
          </div>

          {/* Right Column: Dr. Anuj Gupta's Image */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative group max-w-sm mx-auto">
              <div className="absolute inset-0 scale-102 opacity-80 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative  p-3 rounded-2xl   overflow-hidden">
                <img
                  loading="lazy"
                  src="https://flymediatech.com/wp-content/uploads/2024/03/Anujgupta.png"
                  alt="Anuj Gupta - best digital marketer in India"
                  className="w-full h-auto l object-cover hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2.6. Unlock Your Full Potential Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="rounded-3xl p-8 md:p-12  grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 scale-105 group-hover:rotate-1 transition-transform duration-300"></div>
            <div className="relative p-3 rounded-2xl overflow-hidden">
              <img
                loading="lazy"
                src="https://flymediatech.com/wp-content/uploads/2024/03/IIMG02.png"
                alt="Best Digital Marketing Company in Punjab"
                className="w-full h-auto rounded-xl object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Copytext */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-black leading-tight">
              Unlock Your Full Potential With Fly Media Technology
            </h2>

            <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              <p>
                We understand there are many digital marketing agencies, but what sets us apart is our passion, creativity, innovation, hard work, strategic planning, digital marketing experts, and our genuine network. We believe in collaboration and partnership. We provide services to start-ups as well as global enterprises. Our personalised digital marketing solutions are developed to meet your unique business objectives and needs.
              </p>
              <p>
                We are committed to help with any concerns or queries you have. Even if you are confused, we provide digital consultancy and help you gain clarity for your digital marketing goals. We deliver 100% client satisfaction, and hence, we are the best digital marketing agency. We value trust, transparency and integrity, and we stand by our values. Thus, join us on your journey to digital success.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 bg-[#ff9900] text-black font-extrabold px-8 py-3.5 rounded-xl hover:bg-black hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2.7. Elevate Your Digital Presence Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="rounded-3xl p-8 md:p-12  grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Copytext */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-black leading-tight">
              Elevate Your Digital Presence With Our Digital Marketing Services
            </h2>
            <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Our digital marketing solutions are catered to meet your distinct needs. We understand how crucial it is to have a strong digital presence in the current era. We have expertise and years of experience to help you navigate the digital marketing industry and take the right steps to move forward and grow your business. We have helped many clients accomplish their digital marketing goals with our dedication, exceptional services, hard work and transparent communication.
              </p>
              <p>
                From <Link href="/pay-per-click-ppc/" className="text-[#ff9900] underline font-bold hover:text-black transition-colors">PPC</Link>, Social Media Marketing, <Link href="/our-services/seo-marketing-services/" className="text-[#ff9900] underline font-bold hover:text-black transition-colors">SEO</Link> to <Link href="/content-writing/" className="text-[#ff9900] underline font-bold hover:text-black transition-colors">Content creation</Link>, marketing and email marketing, we offer a comprehensive solution for all your digital marketing-related concerns. We ensure you understand your requirements, create strategic plans, and formulate steps to achieve your business goals. In addition, our expert team of digital marketers will help you throughout the completion of the project and render the desired results. Therefore, if you are ready to take your online presence to the next level, contact Fly Media Technology Today.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 bg-[#ff9900] text-black font-extrabold px-8 py-3.5 rounded-xl hover:bg-black hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 group">
            <div className="absolute inset-0 rounded-2xl rotate-3 scale-105 group-hover:-rotate-1 transition-transform duration-300"></div>
            <div className="relative p-3 rounded-2xl overflow-hidden">
              <img
                loading="lazy"
                src="https://flymediatech.com/wp-content/uploads/2024/03/imagwe-01.png"
                alt="Best Digital Marketing Company in Ludhiana"
                className="w-full h-auto rounded-xl object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>


      {/* 2.8. Video Background "Get in touch" CTA Section */}
      <section className="relative rounded-3xl h-[450px] flex items-center justify-center overflow-hidden mb-12 border border-gray-150 shadow-xl max-w-7xl mx-auto">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://flymediatech.com/wp-content/uploads/2024/03/4785844_Shape_Blast_Explosion_1280x7201.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-white tracking-tight uppercase">
            Get in touch
          </h2>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed font-medium">
            Feel free to talk to our online representative at any time you please using our Live Chat system on our website or one of the below instant messaging programs. Please be patient while waiting for response. (24/7 Support!) Phone General Inquiries:
          </p>
          <div className="pt-2">
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 bg-[#ff9900] text-black font-extrabold px-10 py-4 rounded-xl hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm shadow-lg shadow-orange-500/20"
            >
              Contact Us <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2.7.2. High-Quality Dynamic and Responsive Website Solutions Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 rounded-2xl rotate-3 scale-105 group-hover:-rotate-1 transition-transform duration-300"></div>
            <div className="relative p-3 rounded-2xl overflow-hidden">
              <img
                loading="lazy"
                src="https://flymediatech.com/wp-content/uploads/2024/04/MAIN.png"
                alt="Best CMS For Website Designing"
                className="w-full h-auto rounded-xl object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Copytext */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-black leading-tight">
              High-Quality Dynamic and Responsive Website Development and Designing Solutions
            </h2>
            <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              <p>
                In the current era, website development and designing has become crucial. In this fast-paced digital world, it is no longer an option but a necessity. Nowadays, online presence is imperative for business, as it helps the audience to locate and learn about them. Your website is the first impression your potential client will have of you. If you have a great website, it will help you not only generate business but also increase your credibility, authority, and trustworthiness. Thus, for the best website development and designing solutions, contact Fly Media Technology today!
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2.7.3. Escalate Your Website Ranking Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Copytext */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-black leading-tight">
              Escalate Your Website Ranking With The Best SEO Services
            </h2>

            <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              <p>
                For expert and customised SEO solutions that drive traffic and boost your visibility, contact Fly Media Technology. We provide SEO services that help you increase your ROI, revenue, and sales. Our services cater to all your SEO needs and focus on all SEO elements such as Keyword Research, Quality Content, Competitor Analysis, Advanced Analytics, Technical On-page and Off-Page SEO, and SEO Audits. Our SEO service is a complete package designed to help you elevate your website ranking.
              </p>
              <p>
                Let us help you on the journey to SEO and digital success with our proven SEO strategies. We also believe in and prioritise open communication to ensure transparency and eliminate misunderstandings and delays. Once all the requirements and SEO goals are discussed, an SEO strategy will be formulated, and accordingly, our SEO experts will work to meet your SEO goals and objectives. We have helped multiple clients boost their SEO games; what are you waiting for? Contact us now!
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 group">
            <div className="absolute inset-0 rounded-2xl rotate-3 scale-105 group-hover:-rotate-1 transition-transform duration-300"></div>
            <div className="relative p-3 rounded-2xl overflow-hidden">
              <img
                loading="lazy"
                src="https://flymediatech.com/wp-content/uploads/2024/04/seo01.png"
                alt="Digital Marketing: Internship"
                className="w-full h-auto rounded-xl object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2.7.4. Our Vision Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="bg-gradient-to-br from-[#ff9900]/5 to-transparent rounded-3xl p-8 md:p-12 border border-orange-100 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Icon and Title */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-4">
            <div className="w-16 h-16 bg-[#ff9900]/10 rounded-2xl flex items-center justify-center text-[#ff9900]">
              <Target size={36} />
            </div>
            <div className="text-center lg:text-left space-y-2">
              <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-black tracking-tight">
                Our Vision
              </h2>
              <div className="w-12 h-1 bg-[#ff9900] mx-auto lg:mx-0"></div>
            </div>
          </div>

          {/* Right Column: Statement Content */}
          <div className="lg:col-span-8">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-semibold italic text-center lg:text-left">
              "The world of online marketing is keeping everyone on their toes to take the business toward the next step. In this entire phase, the digital marketing professional assistance will make a huge difference in boosting ROI and process the suitable leads correctly."
            </p>
          </div>

        </div>
      </section>

      {/* 2.7.5. Dynamic Luxury FAQ Section */}
      <section className="max-w-4xl mx-auto mb-20 px-4">
        {/* Dynamic Schema Injection for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.a
                }
              }))
            }, null, 2)
          }}
        />

        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-serif font-extrabold text-black tracking-tight uppercase">
            FAQ
          </h2>
          <div className="w-16 h-1 bg-[#ff9900] mx-auto"></div>
          <p className="text-gray-500 font-medium">
            Frequently Asked Questions regarding Flymedia's digital experience and IT services.
          </p>
        </div>

        {/* Stateful Toggle List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:border-orange-200 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-gray-800 hover:text-[#ff9900] transition-colors focus:outline-none"
                >
                  <span className="text-base md:text-lg leading-snug">{faq.q}</span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 text-[#ff9900] flex items-center justify-center transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  >
                    <ChevronRight size={18} />
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 border-t border-gray-50" : "max-h-0"
                    }`}
                >
                  <div className="p-6 text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>



    </main>
  );
}
