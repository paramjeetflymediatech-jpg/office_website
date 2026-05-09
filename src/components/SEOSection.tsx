"use client";

import Image from "next/image";
import { UserCog, Users, Laptop, SearchCode, Network, Link as LinkIcon, UserSearch, ArrowRight } from "lucide-react";

export default function SEOSection() {
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
    </div>
  );
}
