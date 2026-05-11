"use client";

import React from "react";
import Link from "next/link";

export default function WebDesigningJalandhar() {
  return (
    <div className="min-h-screen bg-white text-black overflow-hidden font-sans">
      
      {/* 1. Hero / Distinction Section */}
      <section className="relative py-10 md:py-10 bg-[#EFEFEF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column (Text & Bullets) - Order last on mobile, first on desktop */}
            <div className="lg:col-span-7 space-y-6 order-last lg:order-first">
              
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-4xl font-serif font-extrabold tracking-tight text-gray-900 leading-[1.1] ">
                  Best Web Designing Company <br className="hidden md:inline" /> in India
                </h1>
                
                <p className="text-md sm:text-xl md:text-xl font-bold text-gray-900 leading-snug font-sans ">
                  How should I distinguish between freelancer and web development company?
                </p>
              </div>

              <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
                Best Web Designing Company in India, When a new idea clicks to your mind, we aim to take it in the right direction. 
                For the best-looking website which grabs user attention, you must have different ideas. But as you try to work on 
                those ideas you will get to know how much effort it needs to make them come into existence. Be it the idea is grand 
                or concise, the right way to implement the ideas takes efforts which are done through the developer. People often get 
                confused about whether to get the services of the <strong>Best web design company in India</strong> or hire an independent 
                software developer. Also, no matter how unique the concept is, it needs to be executed correctly. So, where does the 
                problem begin?
              </p>

              {/* Questions list */}
              <ul className="space-y-2 pl-5 text-gray-800 text-sm sm:text-base font-bold list-disc">
                <li>Who can I rely on the best website?</li>
                <li>Who do I need to build cooperation with?</li>
                <li>Should I get the services of an independent software developer?</li>
              </ul>

            </div>

            {/* Right Column (Image Column) - Order first on mobile, last on desktop */}
            <div className="lg:col-span-5 relative order-first lg:order-last flex justify-center">
              <img
                src="https://flymediatech.com/wp-content/uploads/2024/03/web-des.png"
                alt="Best Web Designing Company in India"
                width={800}
                height={625}
                className="w-full h-auto object-contain max-w-lg lg:max-w-none"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Specifics Section */}
      <section className="relative py-10 md:py-10 bg-[#EFEFEF] border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column (Image) - Naturally orders first on mobile */}
            <div className="lg:col-span-5 flex justify-center">
              <img
                src="https://flymediatech.com/wp-content/uploads/2024/03/mobi-1024x853.png"
                alt="Mobile Apps Development Company In Ludhiana, Punjab"
                width={800}
                height={666}
                className="w-full h-auto object-contain max-w-lg lg:max-w-none"
              />
            </div>

            {/* Right Column (Text & Bullets) */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold tracking-tight text-gray-900 leading-tight">
                What are the specifics needed for web development?
              </h2>

              <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
                The term <Link href="/our-services/web-development/" className="text-[#ff9900] hover:underline font-bold">web development</Link> is the complicated process of website creation. In the website creation, different stages are included and each of them needs to be done with the utmost attention. It includes:
              </p>

              <ul className="space-y-2 pl-5 text-gray-800 text-sm sm:text-base font-bold list-disc">
                <li>Web design</li>
                <li>Web development</li>
                <li>
                  <Link href="/content-writing/" className="hover:text-[#ff9900] hover:underline transition-colors">
                    Web content creation
                  </Link>
                </li>
                <li>Web scripting</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Freelancer vs Company Section */}
      <section className="relative py-10 md:py-10 bg-[#EFEFEF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Main Header / Intro */}
          <div className="max-w-5xl space-y-4 pl-2">
            <h2 className="text-3xl sm:text-4xl md:text-2xl font-serif font-extrabold tracking-tight text-gray-900 leading-tight text-center">
              Freelance Development: Pros and Cons
            </h2>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
              Lack of clear understanding is one of the major reasons we make wrong decisions. This is where it becomes important that you understand the benefits and disadvantages of freelancer and website development companies. While hiring the freelancer, you need to consider the following things:
            </p>
            <ul className="space-y-1.5 pl-5 text-gray-800 text-sm sm:text-base  list-disc">
              <li>Nice portfolio</li>
              <li>Recommended from clients</li>
            </ul>
          </div>

          {/* Benefits of Freelancer Sub-section (Image + Text) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Right Image - Order first on mobile, last on desktop */}
            <div className="lg:col-span-5 flex justify-center order-first lg:order-last">
              <img
                src="https://flymediatech.com/wp-content/uploads/2024/03/bestr-it-1024x853.png"
                alt="IT Company In Ludhiana"
                width={800}
                height={666}
                className="w-full h-auto object-contain max-w-lg lg:max-w-none"
              />
            </div>

            {/* Left Text - Order last on mobile, first on desktop */}
            <div className="lg:col-span-7 space-y-6 order-last lg:order-first">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-tight">
                What are the benefits of hiring a freelancer?
              </h2>
              <ul className="space-y-4 pl-1">
                {[
                  {
                    title: "Low Pricing",
                    desc: "The prices freelancers charge is lower than those suggested by the development companies."
                  },
                  {
                    title: "Flexible Schedule",
                    desc: "With a freelancer, you can work whenever you need. No matter where they are you can work with them."
                  },
                  {
                    title: "Narrow-Focused Expertise",
                    desc: "Freelancers work independently and each of them has certain skills. If you are looking for a different project then make sure to check their profile first."
                  }
                ].map((item, index) => (
                  <li key={index} className="space-y-1">
                    <div className="flex items-start gap-2">
                      <span className="text-gray-950 text-base sm:text-lg font-bold mt-0.5">•</span>
                      <span className="text-gray-850 text-sm sm:text-base leading-relaxed">
                        <strong className="text-gray-900 font-extrabold">{item.title}:</strong> {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Disadvantages of Freelancer */}
          <div className="max-w-5xl space-y-6 pl-2 pt-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-tight text-center">
              What are the disadvantages of hiring a freelancer?
            </h2>
            <ul className="space-y-4 pl-1">
              {[
                {
                  title: "Risks",
                  desc: "As the freelancer works independently which means they are going to decide on their own which project they would like to work on. It is possible that in between they say bye to the project and you have got nothing in the end."
                },
                {
                  title: "Difficulty Managing",
                  desc: "Time-management is what they do not focus upon which is risky and you won’t get the desired results."
                },
                {
                  title: "Low-Quality Product",
                  desc: "Freelancer’s major focus is on money-making. It means they do not focus on the project’s success. All the crucial details are not focused upon and there can be a lot of misunderstanding."
                }
              ].map((item, index) => (
                <li key={index} className="space-y-1">
                  <div className="flex items-start gap-2">
                    <span className="text-gray-950 text-base sm:text-lg font-bold mt-0.5">•</span>
                    <span className="text-gray-850 text-sm sm:text-base leading-relaxed">
                      <strong className="text-gray-900 font-extrabold">{item.title}:</strong> {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Pros & Cons */}
          <div className="max-w-5xl space-y-6 pl-2 pt-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-tight text-center">
              Web Development company: Pros and cons
            </h2>
            <p className="text-gray-800 text-sm sm:text-base font-bold">
              What are the benefits of hiring a web development company?
            </p>
            <ul className="space-y-4 pl-1">
              {[
                {
                  title: "Fail-safe & long-term quality services",
                  desc: "Hiring professionals from the web development company means there is a long-term corporation to make your project a success. They follow a full cycle to provide you with quality services for a long time. Whenever you need technical support from them, you can trust their instinct or whatever they suggest."
                },
                {
                  title: "Maven and trained team of professionals",
                  desc: "When you work with a freelancer, you will just have a single person who will be working for you. In the future, if there is a need for assistance then you need to find someone else. Trust me it’s a lot of hassle when you work with a freelancer. To ease out this and to have the right information, you should hire a web developer who has been working in this field for many years."
                },
                {
                  title: "Stability",
                  desc: "Being working as a professional means they are considered legal entities. They will even give you various documents which need to be looked upon to ensure that you are hiring reliable partners."
                },
                {
                  title: "Seamless Management",
                  desc: "When the company cooperates with you, it helps the communication flow to be much easier. Also, the experienced project managers will help you get the project completed on time. With their presence, it is only professionalism, perfection, and quality."
                },
                {
                  title: "Support Questions",
                  desc: "Hiring professionals from the web development company means, the website is supported, takes into account the necessary updates, and fixes bugs. Not only the current issues but even the future issues will be addressed by them."
                }
              ].map((item, index) => (
                <li key={index} className="space-y-1">
                  <div className="flex items-start gap-2">
                    <span className="text-gray-950 text-base sm:text-lg font-bold mt-0.5">•</span>
                    <span className="text-gray-850 text-sm sm:text-base leading-relaxed">
                      <strong className="text-gray-900 font-extrabold">{item.title}:</strong> {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Disadvantages of Web Development Company */}
          <div className="max-w-5xl space-y-4 pl-2 pt-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-tight text-center">
              Is there any disadvantage of hiring a web development company?
            </h2>
            <div className="space-y-2 pl-1">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-sans">
                High prices
              </h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
                Although it is not a con. You should not be worried when you see the high prices because they are dependent on the work they provide. <br />
                You should check the services they provide by looking at their previous project and you will get to know why they are asking for such an amount. For fruitful long-term cooperation, you should get their services.
              </p>
            </div>
          </div>

          {/* Comparison Table Sub-section */}
          <div className="max-w-5xl mx-auto space-y-6 pt-12 border-t border-gray-300 text-center">
            <h2 className="text-xl sm:text-2xl font-extrabold text-center text-gray-900 leading-tight font-sans">
              Comparison Between Website Company and Freelancing
            </h2>
            
            <div className="overflow-x-auto rounded-xl border border-gray-800 shadow-lg">
              <table className="w-full text-center border-collapse bg-[#1A1A1A] text-white">
                <thead>
                  <tr className="bg-[#111111] text-white border-b border-gray-800">
                    <th className="px-6 py-4 font-black text-xs sm:text-sm uppercase tracking-wider text-center border border-gray-800">Development Aspects</th>
                    <th className="px-6 py-4 font-black text-xs sm:text-sm uppercase tracking-wider text-center border border-gray-800">Website Development Company</th>
                    <th className="px-6 py-4 font-black text-xs sm:text-sm uppercase tracking-wider text-center border border-gray-800">Freelancer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {[
                    { aspect: "Communication", company: "Easy to Communicate", freelancer: "Difficult to Get Hold of Them" },
                    { aspect: "Availability", company: "Available", freelancer: "Takes Time" },
                    { aspect: "Project Delivery", company: "Faster", freelancer: "Slower" },
                    { aspect: "Range of Services", company: "Broad", freelancer: "Narrower" },
                    { aspect: "Confidentiality", company: "Lower Risk", freelancer: "Increased Risk" },
                    { aspect: "Budget", company: "Bigger", freelancer: "Small" },
                    { aspect: "Post-launch Support", company: "Always there to support you", freelancer: "You rarely get the support" },
                    { aspect: "Project scale", company: "Suitable for startups and big projects", freelancer: "Medium scale project" },
                    { aspect: "End product", company: "World-class product", freelancer: "Not that viable" },
                    { aspect: "Process Control", company: "On the scheduled timeline", freelancer: "Delayed" }
                  ].map((row, index) => (
                    <tr 
                      key={index} 
                      className="hover:bg-gray-800/40 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 text-xs sm:text-sm text-gray-100 font-extrabold text-center border border-gray-800">{row.aspect}</td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-gray-200 text-center border border-gray-800">{row.company}</td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-gray-200 text-center border border-gray-800">{row.freelancer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 4. CTA / Contact Card - Centered on Light Gray Background */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold tracking-tight text-gray-900 leading-tight">
              Get in touch with the professionals
            </h2>
            <p className="text-gray-750 text-sm sm:text-base leading-relaxed font-semibold max-w-3xl mx-auto">
              If you are looking for web development professionals then we are here for you to get everything done with ease. 
              Our team is well-aware of the edge-cutting technologies which help your business to stay on the top. A qualified 
              team will give you the right assistance and implement the strategies which make your website proper.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
