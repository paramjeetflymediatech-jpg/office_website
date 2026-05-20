"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import SocialMediaPricingTable from "@/components/SocialMediaPricingTable";
import ContactFormSection from "@/components/ContactFormSection";

export default function SocialMediaOptimization() {
  const col1Faqs = [
    { q: "What is Digital Marketing?", a: "Digital Marketing is the practice of promoting products, services, or brands through electronic media channels. Unlike traditional marketing, it utilizes online platforms like search engines, social media, email, and mobile apps to reach target audiences in real-time." },
    { q: "What is the role of a digital marketer?", a: "The role of a digital marketer is to design, execute, and monitor online campaigns to increase brand awareness, drive traffic, and generate leads or sales. They manage SEO, PPC, content strategies, and social media channels to align with business objectives." },
    { q: "Is digital marketing helpful for my business?", a: "Yes, definitely. Digital marketing is highly beneficial as it allows you to reach a global or hyper-local audience cost-effectively, target specific demographics, track performance in real-time, and drive customer engagement and conversions." },
    { q: "What mistake can you make if you do things on your own?", a: "Sometimes, when we do things on our own we can start and stop. It is essential to have a steady flow of content and consistent strategies so that your business is benefited in every manner." },
    { q: "Why does mobile play an important part?", a: "Mobile plays a crucial role because the majority of internet users access websites and social media through mobile devices. Having a mobile-responsive design and mobile-friendly content ensures you capture this dominant audience segment." },
    { q: "How often does the website need to be updated?", a: "A website should be updated regularly with fresh content, security patches, and modern design tweaks. Keeping information current and adding regular blog posts or updates helps maintain search engine rankings and user trust." },
    { q: "Is there a need for a blog?", a: "Yes, a blog is highly beneficial. It serves as a continuous source of fresh content, provides opportunities to target new keywords, establishes your authority in your industry, and drives organic traffic from search engines." },
    { q: "What type of content is helpful?", a: "Content that is informative, engaging, and directly solves the user's problems is most helpful. This includes detailed blog posts, infographics, videos, ebooks, newsletters, and case studies tailored to your target audience." },
    { q: "How can I make people read the content?", a: "Choosing great headlines is a great way for people to watch, read, or listen to the content. With time, you need to do better and build your website. Your main motive is to not make the people read the content but they need to subscribe to it." },
    { q: "What is SEO?", a: "Most of the website traffic comes through search and people who come to your website through search will benefit you a lot. SEO (Search Engine Optimization) is the process of optimizing your website to rank higher on search engine results pages." }
  ];

  const col2Faqs = [
    { q: "Why is it important to use SEO?", a: "SEO is essential because it helps your website gain free, organic, and highly targeted traffic. It improves search visibility, builds credibility, and ensures that potential customers find your business when looking for your products or services." },
    { q: "What is the role of keywords?", a: "Keywords are the phrases and searches which are involved with search engines. With keywords, it becomes easy to find relevant pages, videos, images, and any other essential information. Our SEO professionals will choose the best keywords for your website and it will help to optimize the search user is looking for." },
    { q: "How is search engine ranking determined?", a: "Well, this is the question which Google is not going to answer for you. The search engine ranking is based on relevance and the authoritative level. One of the best ways to have the highest search engine ranking is by creating web pages with a specific topic or keyword." },
    { q: "What is PPC?", a: "PPC is known as Pay-per-click which is one of the ways to increase website traffic. Every time the ad is clicked, the advertisers will pay you something. One of the best forms of PPC is search engine advertising. You can also choose Facebook which also provides the PPC ad models." },
    { q: "Explain Sponsored content?", a: "Sponsored content is a modern way to publish the content on behalf of the sponsor. Take the help of the publishers you are aware of the latest tactics of designing and writing the content for microsites, articles, videos, and infographics." },
    { q: "What is meant by buyer persona?", a: "The buyer persona is the ideal way of customer representation based on data and market research. It includes the motivations, goals, behavior patterns, and demographics. By doing research you will get to know about what interests the buyer, about his attitude, and criteria that help them to make the buying decision." },
    { q: "What is personal branding?", a: "Person branding makes it easy to use offline and online tactics whether they are based individually or professionally. Digital media has helped to emphasize personal branding for all the purchase and hiring decisions." },
    { q: "What is a lead magnet?", a: "The lead magnet is a free offer that is done in exchange for the email address. The main aim is to join the email list and give them something relevant. Some of the examples include report, guide, ebook, assessment, template, webinar, coupon, course, or cheat sheet." },
    { q: "What is Marketing Automation?", a: "Marketing Automation manages campaigns and marketing processes through multiple channels. With this software, it leads to lead nurturing, lead scoring, segmentation, lead generation, or measurement processes. With marketing automation, you get to know about the audience and create the best content for the website as well as take the actions according to customer needs." },
    { q: "What is the importance of social media?", a: "The audience you have is extremely active and they are present on different social media sites. Understanding, the power of social media is extremely essential, and then giving your commitment towards it is needed. This will help you increase traffic, build loyalty, and drive sales." }
  ];

  return (
    <div className="min-h-screen bg-[#F1F1F1] font-sans selection:bg-[#ff9900]/30 text-black">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-[#EFEFEF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Rocket Image */}
            <div className="relative aspect-square flex items-center justify-center order-2 lg:order-1">
              <Image 
                src="/social-media-optimization/rocket.png" 
                alt="Best SMO Company" 
                width={500} 
                height={500} 
                className="relative z-10 drop-shadow-[0_50px_100px_rgba(0,0,0,0.15)]"
                priority
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-5xl font-serif font-black text-black leading-[1.1] tracking-tight">
                  Best SMO & Digital Marketing Company
                </h1>
              </div>
              
              <div className="space-y-6 text-gray-600">
                <p className="text-lg md:text-xl leading-relaxed font-medium">
                  North India’s best Digital Marketing Company in Ludhiana, Punjab: Award winning Flymedia Technology captures the right combination of digital marketing skills to be the best SMO social media marketing company in Ludhiana. We possess the result-driven mechanism for brands to cultivate the maximum conversions via specific social media marketing strategies.
                </p>
                <p className="text-lg md:text-xl leading-relaxed font-medium">
                  When it comes to promoting brands online, social media channels erupt as one of the best online marketing tools. Accordingly, Flymedia Technology utilizes the trending authorities for your business to create connections, and increase sales and website traffic.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#ff9900]/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px] -z-10" />
      </section>

      <SocialMediaPricingTable />

      {/* --- Rest of Page Content Rebuilt from original WordPress --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Section 1: Digital Marketing Cost Intro */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Content */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-black tracking-tight leading-tight">
              Digital Marketing Cost in Ludhiana | Smo Service Punjab
            </h2>
            
            <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed font-medium font-sans">
              <p>
                Be it any business, promotion is the most vital aspect for any business. Previously the promotion medium was radio, newspaper or TV, but, now with the internet all this has changed as other ways of promotion via internet have arrived.
              </p>
              <p>
                One of the latest promotion method is social media marketing. Today all are familiar with social sites like Facebook, Twitter etc. Likewise each site has its own benefits. Facebook gives you a complete page to showcase your product or service, along with the ability of showing images and sharing updates. On the other hand Twitter allows you to share short messages with your clientele.
              </p>
              <p>
                Now if you are wondering what or how can you promote on these social media sites, well here is the answer:
              </p>
            </div>
          </div>

          {/* Right Side: WordPress 3D circular badge */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-square">
              <Image 
                src="/cms-for-website/wordpre01.png" 
                alt="WordPress SMO Services" 
                width={350} 
                height={350} 
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Web Promotion Box */}
        <section className="bg-white p-8 md:p-12 border border-gray-200/80 rounded-none shadow-md">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-black mb-8 border-b-2 border-[#ff9900] pb-4">
            WEB PROMOTION : PROMOTING YOUR WEBSITE HELPS YOU GAIN TRAFFIC. HERE ARE SOME WAYS-
          </h3>
          
          <ul className="space-y-6 text-sm sm:text-base text-gray-700 font-medium font-sans leading-relaxed list-none pl-0">
            <li className="flex items-start gap-2">
              <span className="text-black font-extrabold shrink-0 mt-0.5">•</span>
              <p>
                <strong className="text-black">Facebook-</strong> You can setup your business page and promote the content of your website on your facebook wall. You can send regular updates and allow customers to send you comments and likes so you can evaluate your website better.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-extrabold shrink-0 mt-0.5">•</span>
              <p>
                <strong className="text-black">Twitter-</strong> On Twitter you can write small tweets about your website, like what it offers or some special offer.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-extrabold shrink-0 mt-0.5">•</span>
              <p>
                <strong className="text-black">YouTube-</strong> Uplaod your own YouTube channel and regularly post videos about your website encouraging customers to review the videos and give comments.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-extrabold shrink-0 mt-0.5">•</span>
              <p>
                <strong className="text-black">LinkedIn-</strong> Create a LinkedIn page and post your website URLs. Update regularly with your service or products reviews, books or articles you read that can be helpful.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-extrabold shrink-0 mt-0.5">•</span>
              <p>
                <strong className="text-black">Digital Marketing-</strong> Promoting your business via electronic media through <strong className="text-black font-semibold">Digital Marketing Company in India</strong>. Gone are the day’s when digital market meant TV or radio alone. Now internet is becoming the next digital medium in which social sites play a significant role.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-extrabold shrink-0 mt-0.5">•</span>
              <p>
                <strong className="text-black">Facebook-</strong> Sophisticated content attracts more traffic. If you have a strong content say on a blog you can post it on your Facebook page.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-extrabold shrink-0 mt-0.5">•</span>
              <p>
                <strong className="text-black">Twitter-</strong> Thanks to the new powerful Twitter search engine every tweet you have posted will be available. Even images, links and hashtags show up in the twitter engine results.
              </p>
            </li>
            
            {/* Nested Web Marketing Bullets */}
            <li className="space-y-4 pt-2">
              <div className="flex items-start gap-2">
                <span className="text-black font-extrabold shrink-0 mt-0.5">•</span>
                <p>
                  <strong className="text-black">Web Marketing-</strong> Web marketing or internet marketing is the use of internet as a medium for promotion. Online marketing is less expensive compared to other mediums of marketing.
                </p>
              </div>
              <ul className="pl-8 space-y-2 list-none text-gray-600 font-semibold text-xs sm:text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-[#ff9900] font-black shrink-0">+</span>
                  <span>Facebook is ideal to put your ad on.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#ff9900] font-black shrink-0">+</span>
                  <span>Combine all the social media sites to get maximum results.</span>
                </li>
              </ul>
            </li>

            {/* Nested Email Marketing Bullets */}
            <li className="space-y-4 pt-2">
              <div className="flex items-start gap-2">
                <span className="text-black font-extrabold shrink-0 mt-0.5">•</span>
                <p>
                  <strong className="text-black">Email Marketing-</strong> Email marketing is a direct marketing medium. It allows you to send mail to current and potential clients. You can add social icons to your emails.
                </p>
              </div>
              <ul className="pl-8 space-y-3 list-none text-gray-600 font-semibold text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff9900] font-black shrink-0 mt-0.5">+</span>
                  <p><strong className="text-black">Icons:</strong> Add social site icons so customers can connect with you.</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff9900] font-black shrink-0 mt-0.5">+</span>
                  <p><strong className="text-black">Request:</strong> Request openly to customer’s to reply via social sites.</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff9900] font-black shrink-0 mt-0.5">+</span>
                  <p><strong className="text-black">Innovate:</strong> Innovate by letting why is it better to link with social media sites.</p>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Section 3: Recommendation Block */}
        <section className="text-center max-w-7xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">
            Recommendation:
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-sans font-medium">
            As we all know, not all websites are similar. Some are different by category and others different by type. So it is quintessentially essential to make your website distinctive in its category otherwise the user will not find any reason to stay on the web pages and website when he has similar options who are ranking higher than you. So the presentation is highly carried out by incorporating the relevant extensions and add on that would help the user to find something worthy on your website.
          </p>
        </section>

        {/* Section 4: Accordion FAQs (Dual-column grid match with Elementor Closed/Opened Chevrons) */}
        <section className="space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Column 1 FAQs */}
            <div className="space-y-4">
              {col1Faqs.map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group bg-[#F1F1F1] border-b-2 border-[#ff9900] overflow-hidden transition-all duration-300 shadow-sm rounded-none "
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none 0 transition-colors">
                    <span className="font-sans font-bold text-sm sm:text-base text-gray-900 pr-4">
                      {faq.q}
                    </span>
                    <div className="shrink-0 text-[#ff9900] w-4 h-4 flex items-center justify-center">
                      {/* Chevron Down (shown when closed, hidden when open) */}
                      <svg className="w-4 h-4 text-[#ff9900] fill-current group-open:hidden" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                      </svg>
                      {/* Chevron Up (hidden when closed, shown when open) */}
                      <svg className="w-4 h-4 text-[#ff9900] fill-current hidden group-open:block" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-5 pb-5">
                    <div className="pt-3 border-t border-gray-100 text-gray-600 font-medium text-xs sm:text-sm leading-relaxed font-sans">
                      {faq.a}
                    </div>
                  </div>
                </details>
              ))}
            </div>

            {/* Column 2 FAQs */}
            <div className="space-y-4">
              {col2Faqs.map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group bg-[#F1F1F1] border-b-2 border-[#ff9900] overflow-hidden transition-all duration-300 shadow-sm rounded-none"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none transition-colors">
                    <span className="font-sans font-bold text-sm sm:text-base text-gray-900 pr-4">
                      {faq.q}
                    </span>
                    <div className="shrink-0 text-[#ff9900] w-4 h-4 flex items-center justify-center">
                      {/* Chevron Down (shown when closed, hidden when open) */}
                      <svg className="w-4 h-4 text-[#ff9900] fill-current group-open:hidden" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                      </svg>
                      {/* Chevron Up (hidden when closed, shown when open) */}
                      <svg className="w-4 h-4 text-[#ff9900] fill-current hidden group-open:block" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-5 pb-5">
                    <div className="pt-3 border-t border-gray-100 text-gray-600 font-medium text-xs sm:text-sm leading-relaxed font-sans">
                      {faq.a}
                    </div>
                  </div>
                </details>
              ))}
            </div>

          </div>
        </section>

        {/* Section 5: Role of Social Media Platforms */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black leading-tight">
            Role of Social Media Platforms in Digital Marketing Campaigns
          </h2>

          <div className="space-y-6 text-sm sm:text-base md:text-[17px] text-gray-700 leading-relaxed font-medium font-sans">
            <p>
              Social media platforms are concretely getting popularity throughout the globe. This unlocks the ways for businesses to approach their target audience more realistically. Here is the role of Social Media Marketing starts.
            </p>
            <p>
              The term ‘Social Media’ collectively refers to a bunch of various mediums. Some of the popular social media platforms incorporate Facebook, LinkedIn, Twitter, Instagram, YouTube, Pinterest, and Snapchat etc.
            </p>
            <p>
              It all includes sharing valuable and enticing content on different social media platforms to obtain desired results. Integration and communication are set to yield extraordinary gains for your brand. Flymedia Technology specializes in this corridor and creates brand awareness with relevant SMM strategies.
            </p>
            <p>
              The following are different work ethics we perform on SMO platforms to strengthen the role of social media marketing for your projects:
            </p>
            
            <ul className="list-disc pl-6 space-y-4 pt-2 text-gray-700">
              <li>
                <strong className="text-black">Facebook:</strong> At Flymedia Technology, we strive with attractive Facebook posts and ad campaigns by segmenting targeted regions to ensure improved local visibility of your brand.
              </li>
              <li>
                <strong className="text-black">Instagram:</strong> We utilize the Instagram dashboard smartly by sharing innovative posts (videos, infographics, images) to generate more followers and brand awareness.
              </li>
              <li>
                <strong className="text-black">YouTube:</strong> Our social media marketing agency in Ludhiana, Punjab also emphasize on YouTube to demonstrate your services in the video format.
              </li>
              <li>
                <strong className="text-black">LinkedIn:</strong> Well, LinkedIn is another tool to solidify your online identification by posting relevant content to grab audience attention.
              </li>
              <li>
                <strong className="text-black">Twitter:</strong> We develop productive Twitter marketing campaigns to let you host more connections throughout the globe. It includes lots of steps from profile creation to audience optimization to campaign management.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 6: How Flymedia Technology is the Best Fit */}
        <section className="bg-white p-8 md:p-12 border border-gray-200/80 rounded-none shadow-md">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-black mb-6 border-b-2 border-[#ff9900] pb-4">
            How Flymedia Technology is the Best Fit for Your Digital Projects?
          </h3>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-sans font-medium mb-6">
            Social media optimization involves tons of dedicated efforts to get your brand on the notice board. Flymedia yields perfection in this segment with a proven track record of global clients. Here’re some of our highlighting characteristics:
          </p>

          <ul className="space-y-4 text-sm sm:text-base text-gray-700 font-medium font-sans leading-relaxed list-none pl-0">
            <li className="flex items-start gap-2">
              <span className="text-[#ff9900] font-black shrink-0 mt-0.5">•</span>
              <p>Flymedia Technology has years of industry experience with expertise in the whole digital marketing scenario.</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#ff9900] font-black shrink-0 mt-0.5">•</span>
              <p>Our qualified social media marketers, campaign managers are the key resources, who badge us as the best social media optimization company Ludhiana.</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#ff9900] font-black shrink-0 mt-0.5">•</span>
              <p>Further, Flymedia Technology offers an extensive variety of online marketing services like SEO, PPC, SMM, SMO, Content Writing, Video Marketing, Website Design & Development, App and Software Development and more.</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#ff9900] font-black shrink-0 mt-0.5">•</span>
              <p>we have a reasonable price policy with the assurance of high-quality results within a set timeframe.</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#ff9900] font-black shrink-0 mt-0.5">•</span>
              <p>Quality is another essential feature we entertain for sure. We never compromise it against lower prices.</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#ff9900] font-black shrink-0 mt-0.5">•</span>
              <p>Moreover, client success matter most for us. We strike hard to obtain the best possible results in the form of higher conversion rate, website traffic, customer engagement and online reputation.</p>
            </li>
          </ul>
        </section>

      </div>

      {/* Symmetric Contact Section */}
      <ContactFormSection />

      {/* Dynamic FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [...col1Faqs, ...col2Faqs].map((faq) => ({
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
    </div>
  );
}
