"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CMSForWebsite() {
  return (
    <div className="min-h-screen bg-[#EFEFEF] font-sans">
      <section className="relative pt-10 pb-20 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div className="space-y-8 order-2 lg:order-1 relative z-10">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-semibold text-black leading-[1.1] tracking-tight">
                  Best CMS for Website Designing
                </h1>
              </div>
              
              <div className="space-y-6 text-base text-gray-600 leading-relaxed font-medium">
                <p>
                  As we all know content management is essential for any good website. because in the absence of that the content will not clutter effectively and there are high chances that the content will not look presentable. Owing to the lack of presentation factor, the potential user may bounce from your website. To prevent that you need the best cms for <Link href="/our-services/web-designing" className="text-[#FA7E09] underline hover:text-black transition-colors">website designing</Link>. But as we all know there are multiple options available for each thing in the market, so we choose the one which is facilitating our needs and preferences.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative order-1 lg:order-2">
              <Image 
                src="/cms-for-website/wordpre01.png" 
                alt="Best CMS For Website Designing" 
                width={800} 
                height={800} 
                className="relative z-10 w-full h-auto object-contain"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* Bonus Point Section */}
      <section className="py-20 bg-[#EFEFEF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Stacked Images */}
            <div className="relative order-1 lg:order-1">
              <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                <Image 
                  src="/cms-for-website/MAIN.png" 
                  alt="Best CMS For Website Designing" 
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-contain relative z-10"
                />
                <Image 
                  src="/cms-for-website/men.png" 
                  alt="CMS Designing Illustration" 
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-contain absolute inset-0 z-20 hover:translate-x-4 transition-transform duration-700"
                />
                <Image 
                  src="/cms-for-website/chat.png" 
                  alt="CMS Communication Bubble" 
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-contain absolute inset-0 z-30 animate-pulse"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-12 order-2 lg:order-2 relative z-10">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-black leading-tight">
                  Bonus Point of Having a Good CMS System
                </h2>
                <div className="text-lg text-gray-600 leading-relaxed font-medium">
                  <p className="mb-4">
                    If we do not have a content management system, then we would have to learn languages like HTML, Java and CSS which are not at all easy-peasy. Besides, it becomes a problem for those who cannot learn to code so early. So in those situations, it is always very helpful to get assistance from the content management system.
                  </p>
                  <p>
                    So today, we shall be discussing why it is indispensable to pick up the best CMS platform for your website.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-black leading-tight">
                  What is the connotation of a content management system?
                </h2>
                <div className="text-lg text-gray-600 leading-relaxed font-medium">
                  <p>
                    An ideal content management system always provides the platform to skimpily manage &amp; present the content and generate a good website.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Factors to Consider Section */}
      <section className="py-20 bg-[#EFEFEF] relative overflow-hidden border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-black leading-tight text-center">
              Which factors should be considered while choosing the best CMS system?
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
              <p>
                The following factors possess the utmost significance when it is to choose the best CMS Platform.
              </p>
              
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <b>Ease of Use</b>: No matter which application and system we talk about, it is always the demand of the user to get its interface as user friendly as possible. We know there are no such hard and fast things that we need to learn when we are talking particularly about content management systems. It is just dragging and dropping pages and the addition of variegated elements on the page that would catch the eye of the user.
                </li>
                <li>
                  <b>Design Options</b>: You should consider your convenience of utmost priority because unless you are satisfied with the facilities provided by the content management system, its services will be of no use. So you should consider whether the content management system is providing a wide range of templates. A wider range of templates will help to cope up with the presentation aspect of any kind of content.
                </li>
                <li>
                  <b>Data portability</b>: An ideal content management system should provide you with the ease to handle data and its variegated facets like:
                  <ul className="list-[circle] pl-8 mt-2 space-y-2">
                    <li>Exporting data</li>
                    <li>Moving data</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sub-sections */}
      <section className="py-20 bg-[#EFEFEF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            
            {/* Extensions Block */}
            <div className="space-y-6 bg-white p-10 rounded-3xl shadow-sm border border-gray-100 h-full">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-black leading-tight">
                Extensions &amp; Addons
              </h2>
              <div className="text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  As we all know, not all websites are similar. Some are different by category and others different by type. So it is quintessentially essential to make your website distinctive in its category otherwise the user will not find any reason to stay on the web pages and website when he has similar options who are ranking higher than you. So the presentation is highly carried out by incorporating the relevant extensions and add on that would help the user to find something worthy on your website.
                </p>
              </div>
            </div>

            {/* Help Block */}
            <div className="space-y-6 bg-white p-10 rounded-3xl shadow-sm border border-gray-100 h-full">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-black leading-tight">
                Help and support options
              </h2>
              <div className="text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  We have researched the main cause of the user getting bounced back from the website and that is the absence of help and support options on the website. No doubt, every potential developer always aims at bringing about the fluctuation-free and best website built. There are some exceptional situations in which the user gets stuck and wants to get away from the problem with the help and support of your team. To make this service available to the users, the website should have the help and support option on the website.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Cost of CMS Section */}
      <section className="py-20 bg-[#EFEFEF] relative overflow-hidden border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-black leading-tight">
              What is the cost of an Ideal Content Management system?
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed font-medium space-y-4">
              <p>
                As we all know, there is an availability of both the systems in their paid and free version. It is highly the call of the user to decide which content management system is meeting his needs and he is feeling worthy to be paying for.
              </p>
              <p>
                So let us have a glance at some of the predominant content management systems which are used by most of the companies for the management of content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WordPress.org Section */}
      <section className="py-20 bg-[#EFEFEF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Image */}
            <div className="relative order-1 lg:order-1">
              <Image 
                src="/cms-for-website/ORG.png" 
                alt="WordPress.org CMS For Website Designing" 
                width={800} 
                height={800} 
                className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.05)] object-contain transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8 order-2 lg:order-2 relative z-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-black leading-tight">
                  WordPress.org
                </h2>
                <div className="text-lg text-gray-600 leading-relaxed font-medium">
                  <p>
                    WordPress is the most used tool for blogging.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#FA7E09] leading-tight">
                  Do you know<br/>
                  35 to 40% of the websites are using WordPress.
                </h2>
                
                <div className="text-lg text-gray-600 leading-relaxed font-medium space-y-4">
                  <p>
                    The predominant reasons for the popularity of WordPress are mentioned below.
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      WordPress is considered the most flexible kind of content management system as you are free to build any sort of website.
                    </li>
                    <li>
                      No technical knowledge and skills are required to run this system. You just have to go through a complete Youtube tutorial and you will get to know all the preponderant features of the same. For those who do not want to code but are interested in content writing, then this tool is surely going to help them.
                    </li>
                    <li>
                      Variety is what every potential user wants. A potential user always loves to experiment with variegated themes, so WordPress is the platform they should be looking for as it provides numerous themes and plugins that are enough to satisfy the content of every possible type.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Joomla Section */}
      <section className="py-20 bg-[#EFEFEF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div className="space-y-8 order-2 lg:order-1 relative z-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-black leading-tight">
                  Joomla
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  Joomla is one of the most recognized free tools. It is one of the quintessential used open-source platforms for content management services.<br/>
                  This platform is acclaimed for providing the following benefits:
                </p>
                
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    It is also flexible and there are tons of options for you to incorporate on your website.
                  </li>
                  <li>
                    Being an open-source program, one can not only use it but add a little bit for its progress.
                  </li>
                  <li>
                    There is always the availability of community support. So if you are stuck, you would not be getting frustrated since you are available with high community support.
                  </li>
                  <li>
                    Joomla is the most customarily used tool by the e-commerce website. Since it has lots of features and options that would facilitate building up an efficient and user-friendly website.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative order-1 lg:order-2">
              <Image 
                src="/cms-for-website/joomla.png" 
                alt="Joomla CMS For Website Designing" 
                width={800} 
                height={800} 
                className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.05)] object-contain transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* WordPress.com Section */}
      <section className="py-20 bg-[#EFEFEF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Image */}
            <div className="relative order-1 lg:order-1">
              <Image 
                src="/cms-for-website/2ndword.png" 
                alt="WordPress.com CMS For Website Designing" 
                width={800} 
                height={800} 
                className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.05)] object-contain transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8 order-2 lg:order-2 relative z-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-black leading-tight">
                  WordPress.com
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  Many people confuse wordpress.org with wordpress.com, but these should not be used interchangeably. Because of WordPress. Org is an open-source program while wordpress.com is not only the commercial but hosted version of the WordPress franchise.<br/>
                  The preponderant benefits of using WordPress.com are as follow:
                </p>
                
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    The easy user interface always facilitates the use of WordPress. It provides the best interface for simply doing the addition and edition of the content.
                  </li>
                  <li>
                    This is the first choice of beginners who are learning to build a website because it is entirely free. Even when you want to make your website to be presented on the internet, the cheapest economical plans are available for you to get a domain name.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
