"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  UserCog, Users, Laptop, SearchCode, Network, Link as LinkIcon, UserSearch, ChevronDown,
  Database, Settings, Eye, TrendingUp, User, UserPlus, Globe, MapPin, ShoppingBag, MessageSquare, Monitor
} from "lucide-react";

export default function SEOSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqData = [
    {
      question: "What is SEO?",
      answer: "Search Engine Optimization keeps on website ranking on the top. It is an organic way to make your site rank No. 1. Different elements play paramount importance in this regard. Some of them are Page Speed, Meta tags, H1 tags, Anchor Tags, Interlinking, and many more. Apart from that, there are off-page factors like content syndication, link building, content writing, and guest postings."
    },
    {
      question: "How Much Does SEO Cost?",
      answer: "SEO costs can be between $250 a month to $7000 a month. Well, it also depends on what company is providing the services. It is important to check what elements they are working upon, their promise on the ROI, and where the company is located. If you ever come across a company that has hidden costs or you do not get the detailed information, then do not go with them. Sometimes, they do that so that the base price is low. Before you sign up for the contract you should be clear about everything."
    },
    {
      question: "What does the Term Organic SEO mean?",
      answer: "Organic SEO means ranking the website on the top without the use of paid advertisements for Google."
    },
    {
      question: "Does SEO gives the desired results?",
      answer: "SEO costs can be betweean $250 a month to $7000 a month. Well, it also depends on what company is providing the services. It is important to check what elements they are working upon, their promise on the ROI, and where the company is located. If you ever come across a company that has hidden costs or you do not get the detailed information, then do not go with them. Sometimes, they do that so that the base price is low. Before you sign up for the contract you should be clear about everything."
    },
    {
      question: "How Much is the Actual Cost of SEO Services?",
      answer: "With every SEO agency in Punjab, the cost factor is determined differently. Some of them charge depending on the keyword, and others charge for the services, depending on the revenue generation. In simple terms, the keyword and location which needs to be targeted will be kept in mind. With the increase in keyword optimization, the SEO services cost will differ. On average, the cost for 10 keywords can start from $200 per month, and it can go up to $750 per month."
    },
    {
      question: "When the results are visible?",
      answer: "You need to wait for 4 to 6 months to see the notable difference. But why so long? With SEO there are many On-page and Off-page changes. Even a minute change on the website takes time to notice by Google. Changes need time to be reflected. Well, it is not just about the changes but there are other things like content writing, link building, content syndication, and many more. In all, all these to effectively work will take time. SEO experts need this much time to deliver you the evident results you need."
    },
    {
      question: "What All is the part of SEO services?",
      answer: "SEO services have 3 major parts. First of all, there is technical SEO and UI. in that phase, all the technical information needs to be fixed on time and taken care of so that the end-user is not bothered in any way. It is important so that the user has a seamless experience. The second is the on-page. It incorporates the changes on websites like Interlinking, H1 tags, meta tags, anchor tags, and web content optimization. Lastly, off-page optimization. In this part, content writing, ethical link placement, promotional content writing, and promotions are included."
    },
    {
      question: "Will I Get an on-time Report?",
      answer: "We ensure that every single piece of information is reached to your time. All the work that is done on the website is shared with the clients in the form of a monthly report. It includes goal conversions, traffic improvement, and ranking improvement. With all these, it helps the client to understand how SEO is making a difference and how your website is recognized on the search engine."
    },
    {
      question: "How can I get access to quality services?",
      answer: "Here, you need to search as much as you can. Do not just go with anyone or whom you come in contact in the first place. It is important that you identify how they work and then shortlist some of them to get the best services. You need to work with a company that meets your expectations and understands your objectives."
    },
    {
      question: "How website authority gets better?",
      answer: "Domain authority is improving by incorporating quality backlinks, having a website with on-page optimization, and optimizing the content to the most."
    },
    {
      question: "What is the responsibility of the client?",
      answer: "Any changes required to be made on the website need approval from the client which is an important part for at least 2 months to get the work done properly. Then comes the option of regular audits, and a parallel link building should be done."
    },
    {
      question: "Is there any refund policy if I don’t see the results?",
      answer: "Just go through our website and check the client testimonials to see whether they were satisfied with the results or not. We have been giving SEO services for 9 years and in this time we have maintained a perfect relationship with each of our clients. Your work is evaluated after three months to check whether it is working the way it is needed. Certain changes may be made for improved results. However, there is no refund policy."
    },
    {
      question: "What is a reliable way to measure ROI?",
      answer: "Google Analytics will have the goal conversion tracking so that the ROI is measured correctly."
    },
    {
      question: "What is the minimum contract period for an SEO plan?",
      answer: "SEO plan does not work based on contract."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="">
      {/* Section 1: Driving Revenue Through Discovery */}
      <section className="overflow-hidden py-12 bg-[#EFEFEF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Side: Image */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative z-10 w-full max-w-[500px]">
                <Image 
                  src="/images/seo-right-image.png" 
                  alt="Driving Revenue Through Discovery" 
                  width={500} 
                  height={454} 
                  className="w-full h-auto "
                  priority
                />
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                 <h2 className="text-[36px] sm:text-[42px] md:text-[50px] font-serif font-bold text-black leading-tight flex flex-col">
                   <span>Driving Revenue</span>
                   <span>Through Discovery</span>
                 </h2>
              </div>

              <div className="space-y-6">
                <h5 className="text-xl md:text-2xl font-serif font-semibold text-gray-900">
                  Masters Of Every Channel And Champions Of Every Vertical.
                </h5>
                <div className="text-base md:text-[16px] text-gray-700 leading-relaxed font-medium space-y-4">
                  <p>
                    Flymedia Technology offers the best SEO services in India, Australia, and all across the sphere. Being the leading SEO service provider, online visibility has increased along with ROI.
                  </p>
                  <p>
                    Virtual platform development is an important part of strengthening the digital presence. With an active and striking online presence, the business can get budding customers. If you don’t have one then your business is missing out on many opportunities for increased ROI (Return on Investment).
                  </p>
                  <p>
                    Before anything else, have the professionals build your website. After that, it needs to be on the top of search engine ranking. SEO is the key to find your business online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How to Choose Right SEO Services */}
      <section className="py-10 bg-[#EFEFEF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black">How To Choose Right SEO Services?</h2>
            <p className="max-w-2xl mx-auto text-gray-600 font-medium pt-4">
              With the help of SEO Marketing Services, you can get your SEO optimized website as well. But, before you do this there are some points you should know.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "What Do You Require",
                desc: "Managing your reputation, link removals, marketing your content, retargeting, a one-time SEO audit, or an ongoing SEO.",
                icon: <UserCog className="w-8 h-8 text-[#ff9900]" />
              },
              {
                title: "Consult More Than One",
                desc: "Once you decide what you want, your next step is consultation. Consulting with different services will take a few days but is worth the effort.",
                icon: <Users className="w-8 h-8 text-[#ff9900]" />
              },
              {
                title: "Collect References",
                desc: "Approach Flymedia Technology to get the work done with the right approach, we are on the top of the list for delivering the best SEO results.",
                icon: <Laptop className="w-8 h-8 text-[#ff9900]" />
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-sm shadow-xl hover:shadow-2xl transition-all border-b-4 border-transparent group"
              >
                <div className="mb-6 p-4 bg-gray-50 inline-block rounded-full group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tighter text-black uppercase">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Why Our SEO Tactics Are Unbeatable */}
      <section className="py-24 relative overflow-hidden bg-[#EFEFEF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-16">
            <div className="w-full lg:w-3/5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-serif font-bold  leading-tight">
                  Why Are Our SEO Services Tactics Unbeatable From Others?
                </h2>
              </div>
              <p className=" text-lg leading-relaxed">
                Efficacy and affordability with SEO services do not come on their own. For the desired and improved results, it is important to have a reliable solution and it needs to work with the changes happening in the search algorithm. For a layman, it is important to understand how it works but when you work with SEO professionals everything is set on the right track.
              </p>
            </div>

            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4  rounded-full blur-3xl  transition-all"></div>
                <Image 
                  src="/images/bestr-it.png" 
                  alt="SEO Excellence" 
                  width={1200} 
                  height={1000} 
                  className="relative z-10 w-full h-auto drop-shadow-[0_0_50px_rgba(255,153,0,0.3)]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "On Page SEO", 
                icon: <SearchCode className="w-8 h-8" />, 
                desc: "When you give us your website, a full audit is done that includes the keyword and content. Along with that, the site should have all the essential prerequisites like heading, title, URL structure, schema, headings, and many more. Our enthusiastic team will ensure that every nook and corner of the website is performing to the best of its potential, and it should be accessible on all the search engines." 
              },
              { 
                title: "Keyword Research", 
                icon: <Network className="w-8 h-8" />, 
                desc: "Keyword usage must be maximum to its potential. Keywords research is a vital part of growing traffic. When you know which terms are used to search for the product, it helps in bringing the right kind of website traffic. Therefore, keyword analysis must be done by giving proper time. With the best SEO service provider, your business is going to have effective keyword tactics." 
              },
              { 
                title: "Link Building", 
                icon: <LinkIcon className="w-8 h-8" />, 
                desc: "Link Building comes under the category of SEO services practices which helps other websites to link with your content, blog, vlog, podcast, or products. The users will find your website reliable and informative. Link development is likely to increase with the presence of quality content. Some of the ideal methods are guest posts, Q&A, broken link building, forum, social media, and blogs." 
              },
              { 
                title: "Competitor", 
                icon: <UserSearch className="w-8 h-8" />, 
                desc: "Expert presence is going to prove beneficial in different ways. They will analyze each part of the website so that your business has a boost in traffic. The experts will find which keywords need to be used and how the ranking will increase. The team is going to find which strategy is likely to make you shine in this competitive world. Let us be your helping hand." 
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="space-y-4 p-8 bg-white/5 rounded-sm border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:bg-white/10 hover:border-[#ff9900]/50 transition-all group"
              >
                <div className="group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tighter text-[#ff9900]">{item.title}</h4>
                <p className="text-sm  leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium SEO Marketing Copy & Strategy Sections */}
      <section className="py-10 bg-[#EFEFEF] border-t border-gray-200/50 space-y-24">
        
        {/* Section A: How Can Flymedia SEO Services Make A Variance In Your Business? */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-6">
            <h2 
              className="text-3xl md:text-4xl font-serif font-bold text-black max-w-4xl mx-auto leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              How Can Flymedia SEO Services Make A Variance In Your Business?
            </h2>
            <p className="max-w-5xl mx-auto text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
              Is your website ranking going down? One of the reasons is the SEO services are outdated. Google frequently changes the search algorithm that are known as search bots or web crawlers. Their aim is to find content that is unique and informative. If it has been a long time that your SEO strategy is not updated then you are losing out on a lot of things. No matter what SEO tactics you need, we are here to bolt up your web presence. Whether your site is new or it has been in existence for a long time, we are here to offer you a long-sighted SEO strategy that helps you get the top ranking. We are here to get you moving with our complete SEO package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Increased Visitors",
                desc: "When more users to the landing pages, you want them to feel connected to your site. Page optimization is a part of getting increased searches.",
                icon: <Users className="w-10 h-10 text-[#ff9900]" />
              },
              {
                title: "Updated CRM Tools",
                desc: "Business client relationship management is essential, and that is better when your business is providing all the latest information.",
                icon: <Database className="w-10 h-10 text-[#ff9900]" />
              },
              {
                title: "Organic Traffic",
                desc: "Organic traffic comes through searchers. On the search engine, when the user types something it is shown in the first place and it increases click-throughs.",
                icon: <Settings className="w-10 h-10 text-[#ff9900]" />
              },
              {
                title: "Online Visibility",
                desc: "Online recognition is important for increased visibility and recognition. The page ranking increases, and this makes the business online.",
                icon: <Eye className="w-10 h-10 text-[#ff9900]" />
              },
              {
                title: "Boost Sales",
                desc: "For every business increased sales is the ultimate goal. SEO reports are here for you to deal with professional.",
                icon: <TrendingUp className="w-10 h-10 text-[#ff9900]" />
              },
              {
                title: "Steadfast Project Manager",
                desc: "We know every business has its own needs, and that is fulfilled when you have dedicated manager to communicate and coordinate with you on every step.",
                icon: <User className="w-10 h-10 text-[#ff9900]" />
              },
              {
                title: "Boost in Business Growth",
                desc: "When SEO is found through the search, it is going to bring authentic and reliable visitors to the site that matters = Faster growth and increased sales.",
                icon: <UserPlus className="w-10 h-10 text-[#ff9900]" />
              },
              {
                title: "Keep a Check on the Performance",
                desc: "The KPIs are here to measure the success and check what will be its impacts on the campaign. This way investment is perfect, and ROI is measured correctly.",
                icon: <SearchCode className="w-10 h-10 text-[#ff9900]" />
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 flex flex-col items-start text-left"
              >
                <div className="mb-6 p-1 text-[#ff9900]">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#ff9900]">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[13px] font-medium">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section B: SERVICES */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  border-t border-gray-200/50">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-serif font-bold text-black uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              SERVICES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Global SEO Services",
                desc: "Every business owner wants to create a different impression on the world. If you are in search of that, then we are here for you to do the work with full dedication.",
                icon: <Globe className="w-8 h-8 text-[#ff9900]" />
              },
              {
                title: "Local SEO Services",
                desc: "For an SEO compliant website, Flymedia experts are the best option for you. The SEO experts in Ludhiana will tell you the right type of keywords that need to be linked.",
                icon: <MapPin className="w-8 h-8 text-[#ff9900]" />
              },
              {
                title: "E-COMMERCE SEO Services",
                desc: "Our array of services also include E-commerce SEO services. No matter what the product is we will work upon it.",
                icon: <ShoppingBag className="w-8 h-8 text-[#ff9900]" />
              },
              {
                title: "Link Building Services",
                desc: "Link building pros will provide the best links through methods that are working the way with top-rated sites.",
                icon: <LinkIcon className="w-8 h-8 text-[#ff9900]" />
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 flex flex-col items-start text-left"
              >
                <div className="mb-6 p-4 bg-gray-50/50 rounded-full inline-flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#ff9900]">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[13px] font-medium">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section C: Leveraging Organic Media To Drive Noticeable Results On Different Platforms */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-gray-200/50">
          <div className="text-center mb-16 space-y-6">
            <h2 
              className="text-3xl md:text-4xl font-serif font-bold text-black max-w-4xl mx-auto leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Leveraging Organic Media To Drive Noticeable Results On Different Platforms
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed font-medium">
              Flymedia technology uses the latest and quality SEO services to make your business shine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Review and Analysis",
                desc: "You need to check for the broken links, Google penalties, duplicate content, and analyze the website in-depth.",
                icon: <MessageSquare className="w-10 h-10 mx-auto text-[#ff9900]" />
              },
              {
                title: "On Page Optimization",
                desc: "We ensure that only relevant and informative content is present on the website so that it leads to leads. Even the HTML links & header tags are optimized. There is even the addition of a specific plan to incorporate the value SEO services.",
                icon: <Monitor className="w-10 h-10 mx-auto text-[#ff9900]" />
              },
              {
                title: "Content Marketing",
                desc: "Premium content is the king of website. With the addition of videos, blogs, infographics, and other types of rich content the business visibility is boosted.",
                icon: <Users className="w-10 h-10 mx-auto text-[#ff9900]" />
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-transparent p-8 rounded-2xl border border-gray-300 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/30"
              >
                <div className="mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#ff9900]">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm font-medium">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section D: Proactive Approach To Keep A Check On SEO Guidelines */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  border-t border-gray-200/50">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-serif font-bold text-black max-w-4xl mx-auto leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Proactive Approach To Keep A Check On SEO Guidelines
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Premium Logo/Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300">
                <Image
                  src="/seo-png.png"
                  alt="SEO Strategy Guidelines"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain rounded-3xl"
                />
              </div>
            </div>

            {/* Right Column: Expert content */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-black mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-[#ff9900] rounded-full inline-block" />
                    Enthusiastic and dedicated SEO managers:
                  </h4>
                  <p className="text-gray-600 text-[14px] leading-relaxed font-medium pl-3.5">
                    SEO professionals provide miraculous results to give you the best in every situation. Not having the professionals guidance, simply means the cost is increased instead of making your page rank higher. SEO guidelines are updated frequently, and this is where our team gives their best to make the search process easier.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-black mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-[#ff9900] rounded-full inline-block" />
                    White Hat Techniques:
                  </h4>
                  <p className="text-gray-600 text-[14px] leading-relaxed font-medium pl-3.5">
                    We swear by the Google SEO standards, no matter what tactic is being used. The prime focus is on the searches and making the business grow organically in terms of leads, sales, and traffic.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-black mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-[#ff9900] rounded-full inline-block" />
                    Technical Parameters:
                  </h4>
                  <p className="text-gray-600 text-[14px] leading-relaxed font-medium pl-3.5">
                    URLs are created which are easy to understand and have a high frequency of getting clicked. Duplicate content is avoided in the URL string, optimized URLs mean an increase in the CTR.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-[#ff9900] text-[15px] font-bold leading-relaxed italic">
                  "With our experienced SEO professionals, you will have a superior level of service and quality that gives evident results."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section E: What Is The Need For SEO Marketing Services? */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-gray-200/50">
          {/* Centered Heading */}
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-serif font-bold text-black max-w-4xl mx-auto leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Is The Need For SEO Marketing Services?
            </h2>
          </div>

          <div className="space-y-20">
            {/* Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Premium Logo/Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/SWHAD-768x768 copy.webp"
                    alt="SEO Marketing Need"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain rounded-3xl"
                  />
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed font-medium">
                  SEO is the only and reliable way to boost business traffic. It is one of those methods which is tested time and again & proven to give effective results. To fetch higher ranks on the website, SEO services are all that you need. The search engine has over 200 methods to determine what ranking your website needs. Being an SEO professional is not everyone's cup of tea. The person needs to be proficient and able to deliver the best to you in the SEO market.
                </p>
                <div className="space-y-3 pt-4">
                  <h4 className="text-xl font-bold text-black flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-[#ff9900] rounded-full inline-block" />
                    Search Engine Parameter is Changing
                  </h4>
                  <p className="text-gray-600 text-[14px] leading-relaxed font-medium pl-3.5">
                    One of the vital reason, SEO professionals are important is because the search engine algorithm is changing. It is of paramount importance to keep a check on the algorithms daily. SEO agencies ensure that all the requirements are met, and they set the standards high. When any change comes, they are going to act very fast so that all the SEO guidelines are incorporated into the website.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Content */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-black flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-[#ff9900] rounded-full inline-block" />
                    Guaranteed SEO services focus on your requirement
                  </h4>
                  <p className="text-gray-600 text-[14px] leading-relaxed font-medium pl-3.5">
                    SEO experts know how to work on the entire scenario. The experts audit the site, go through the competitor's site, find the suitable keyword, use on-page & off-page tactics, specifically designed for your website.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-black flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-[#ff9900] rounded-full inline-block" />
                    Professionals Handle Work Effectively
                  </h4>
                  <p className="text-gray-600 text-[14px] leading-relaxed font-medium pl-3.5">
                    Specific techniques and methods are there to make your website come on No. 1 on search engines. Hiring an SEO agency in Punjab for marketing services is what your business needs.
                  </p>
                </div>
              </div>

              {/* Right Column: Premium Illustration representing SEO and mobile analytics */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/seo01-768x768.png"
                    alt="SEO Marketing Professionals"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section F: What is Competitor Analysis? */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 border-t border-gray-200/50">
          {/* Centered Heading */}
          <div className="text-center mb-12 space-y-4">
            <h2 
              className="text-3xl md:text-4xl font-serif font-bold text-black max-w-4xl mx-auto leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What is Competitor Analysis?
            </h2>
            <p className="max-w-4xl mx-auto text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
              Analyzing your competitor is the most critical part for any business person. It is this evaluation that enables you in defining how your service or products can be superior than theirs. How you can make yourself be on the top. For this you have to ask yourself some questions:
            </p>
          </div>

          {/* List of checked items */}
          <div className="   space-y-1">
            {[
              "Clarify who your competitor is?",
              "What strategies did they follow in the past?",
              "What strategies are they following or planning to follow?",
              "What type of media do they use for marketing their service or products?",
              "What are their strength and weakness points?",
              "As a competitor what threat do they impend on you?",
              "What potential opportunity do you feel is available due to them?",
              "Some people may consider this a waste of time and prefer making their own plans and implementing them. But, just like you are giving the same service or products as your competitor, your plans can also be the same. Hence, to be on the forefront of your competitor it is better to analyze your competitor."
            ].map((question, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="text-[#ff9900] mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <p className="text-gray-700 text-[14px] md:text-[15px] font-medium leading-relaxed">
                  {question}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section G: Why Do You Need To Hire Flymedia Technology- No.1 SEO Agency In Ludhiana? */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 border-t border-gray-200/50 space-y-16">
          <div className="space-y-6">
            <h2 
              className="text-3xl md:text-4xl font-serif font-bold text-black leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Do You Need To Hire Flymedia Technology- No.1 SEO Agency In Ludhiana?
            </h2>
            <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed font-medium">
              Flymedia Technology is the pioneer in digital marketing services, and their working approach has made them the best. The team is characterized by intrinsic and common diligence to work hard in this evolving digital space. The SEO and marketing team takes extra time to go through every nuance of the platform and technique they use. What's even better is that the SEO strategies are tailored and accurately used.
            </p>
          </div>

          <div className="space-y-6 border-t border-gray-200/50 pt-12">
            <h2 
              className="text-3xl md:text-4xl font-serif font-bold text-black leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Recommendation
            </h2>
            <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed font-medium">
              Last but not least, make sure you go through the agreement carefully before signing it. Remember to carefully understand the terms and the risks completely. Be clear on how long it will take for your site to be online and how much traffic is expected from your site. But, do not go behind SEO providers who promise to put the world at your feet because that's not possible, your site will bring traffic but, it's your service or products that you provide that will make your site run in the future.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Premium Interactive FAQ Section */}
      <section className=" bg-[#EFEFEF] border-t border-gray-200/50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Centered Heading */}
          <div className="text-center mb-16">
            <h2 
              className="text-5xl md:text-6xl font-bold text-black"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              FAQ
            </h2>
          </div>

          {/* Accordions */}
          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className=" rounded-lg border border-gray-100 border-b-[3px] border-b-[#ff9900] rounded-b-[12px] overflow-hidden transition-all duration-300 "
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-base md:text-lg text-black hover:text-[#ff9900] transition-colors duration-200"
                  >
                    <span className="pr-4 leading-snug font-semibold text-[#1a1a1a]">{faq.question}</span>
                    <span className="text-[#ff9900] flex-shrink-0 ml-4">
                      {isOpen ? (
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path>
                        </svg>
                      ) : (
                        <svg className="w-3 h-3 fill-current rotate-90" viewBox="0 0 192 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                        </svg>
                      )}
                    </span>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="px-5 pb-6 text-gray-600 leading-relaxed text-sm font-medium">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Structured JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema, null, 2) }}
        />
      </section>
    </div>
  );
}
