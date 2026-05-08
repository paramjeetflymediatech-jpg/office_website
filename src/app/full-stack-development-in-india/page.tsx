"use client";

import React from "react";
import Image from "next/image";
import { Code, Zap, Boxes, Coins } from "lucide-react";

export default function FullStackDevelopmentIndia() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="relative pt-20 pb-20 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Image */}
            <div className="relative order-1 lg:order-1">
              <Image 
                src="/full-stack-development-in-india/website-designing2.jpg" 
                alt="Flymedia technology digital marketing illustration." 
                width={1000} 
                height={600} 
                className="relative z-10 w-full h-auto  object-cover"
                priority
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8 order-2 lg:order-2 relative z-10">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-semibold text-black leading-[1.1] tracking-tight">
                  Why is Node.js Preferred for Web Development in Flymedia Technology?
                </h1>
              </div>
              
              <div className="space-y-6 text-base text-gray-600 leading-relaxed font-medium">
                <p>
                  <b>Node.js</b> is a highly popular choice for web development due to its unique architecture, which helps in building effective, engaging and efficient web development. It is a Free, open source and JavaScript run-time environment with which developers can create servers, web apps and websites for a much smoother experience as it performs asynchronous operations. Contemporary Operations are essentials to Node.js non-blocking model, allowing it to perform various continuous tasks without waiting for each one to complete. It allows developers to use JavaScript for both Client and Server-side tasks, smoothing the whole development process. When combined with Frameworks like Angular and <b>ReactJS</b>, its capability is further improved, leading to strong enterprise solutions that not only improve user experience but also increase business growth. Its continued preference by both startups and developed companies, are driven by its ability to handle high concurrency and real-time demand with unmatched efficiency. For businesses looking to tackle this power, end your search by engaging with the professionals of Flymedia technology, who provide high-performance, enterprise-grade <b>Node.js</b> Applications. Many highly rated companies in India offer <b>Node.js</b>, React.js, Express.js and <b>full-stack JavaScript app development</b> services, with many located in the Punjab region. These serve a wide range of needs from small startups to big enterprises.
                </p>
              </div>
            </div>

          </div>
        </div>
        
        {/* Floating Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FA7E09]/5 rounded-full blur-[150px] -z-10" />
      </section>

      {/* Coordinating Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-black leading-tight uppercase">
              Coordinating with leading Node.js development companies in India
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
              <p>
                For businesses looking to gain advantage on these technologies, choosing the right partner is important. Node.js allows developers to use JavaScript for both frontend and backend development.
              </p>
              
              <p>
                <b>USE OF COMMON CODEBASE: </b>Teams can reuse authentication logic, utility models and data functions across the entire application, which significantly removes development time.
              </p>
              
              <p>
                <b>STREAMLINED DEVELOPMENT: </b>By choosing Flymedia Technology, your business can witness amazing benefits from a unified process where frontend and backend are both implemented in a continuous manner. Many of the companies provide <b>Full-stack Javascript development in India</b> that use MERN/MEAN stack, which majorly uses JavaScript technologies like <b>Node.js</b>, MongoDB and React.js. Surrounded by the leaders in the zone, Flymedia Technology is known for delivering best web solutions. Flymedia Technology specializes in supporting <b>Node.js</b> and React.js to provide strong, reliable and scalable web applications. This helps businesses guide the complexity of modern business architecture and follow the latest trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Enterprises Section */}
      <section className="py-20 bg-[#F9F9F9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-black leading-tight uppercase">
                Why trending enterprises choose Node.js?
              </h2>
              <p className="text-lg text-gray-600 font-medium">
                Main reasons for leading enterprises choosing <b>Node.js</b> for development include
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {/* Icon Box 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#FA7E09]/10 rounded-full flex items-center justify-center mb-6">
                  <Code className="text-[#FA7E09]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Use Only JavaScript for Full-Stack Development
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Any enterprise can use JavaScript for both Client(frontend) and Server(Backend) Side. This helps in smooth flow of the development process, enables code reuse and promotes better collaboration between teams, as all the developers code in the same language.
                </p>
              </div>

              {/* Icon Box 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#FA7E09]/10 rounded-full flex items-center justify-center mb-6">
                  <Zap className="text-[#FA7E09]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Outstanding achievement in Performance and Scalability
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  It is made up on Google’s engine, which compiles JavaScript into fast machine code. Node.js uses an automated I/O model. This allows it to handle thousands of continuous requests simultaneously, making it highly efficient for high-traffic applications and managing infrastructure costs.
                </p>
              </div>

              {/* Icon Box 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#FA7E09]/10 rounded-full flex items-center justify-center mb-6">
                  <Boxes className="text-[#FA7E09]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Providing Microservices Architecture
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The flexible and lightweight Architecture of Node.js makes it ideal for building applications using Microservices Architecture. This allows large complex applications to be broken down into smaller ones and independent services that are easy to maintain, scale and develop.
                </p>
              </div>

              {/* Icon Box 4 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#FA7E09]/10 rounded-full flex items-center justify-center mb-6">
                  <Coins className="text-[#FA7E09]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Cost-effective
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Using only Javascript(single language) for the development blocks reduces the need for separate frontend and backend development teams, which in turn reduces the hiring and operational expenses. For enterprises, choosing Node.js is a strategic decision that offers a competitive edge in scalability, flexibility, maintainability and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise in Ludhiana and Punjab Section */}
      <section className="py-20  relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Image */}
            <div className="relative order-1 lg:order-1">
              <Image 
                src="/full-stack-development-in-india/online-serch.png" 
                alt="Facelift Surgeons Digital Marketing Agency in Ludhiana, Punjab, India" 
                width={1000} 
                height={1000} 
                className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] object-contain"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8 order-2 lg:order-2 relative z-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-black leading-tight uppercase">
                  Looking for expertise in the region: Ludhiana and Punjab
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  The localised tech areas, like Ludhiana, have advanced in specialised firms visualising growth, upcoming specific business needs. For the companies operating in <b>Ludhiana </b>and around wide areas of <b>Punjab, </b>sourcing local expertise offers planned benefits, such as improved collaboration, standardized Digital Growth and Localized Support. Identifying a highly reliable <b>Node.js Mobile App Development Company in Punjab </b>or a<b> React.js Mobile App Development Company in Ludhiana</b> is key to a successful project.
                </p>
                <p>
                  These local companies offer advantages like understanding of regional demand and implementing agile collaboration.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* React and Node Partnership Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div className="space-y-8 order-2 lg:order-1 relative z-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-black leading-tight uppercase">
                  Partnership of react.Js and node.Js in mobile app development process
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  The combination of <b>React.js </b>and <b>Node.js </b>creates a full-stack JavaScript environment that controls the development process.
                </p>
                <p>
                  React Native allows developers to build cross-platform apps for iOS and Android using a single JavaScript codebase, significantly reducing the development cost and time. <b>Node.js </b>tops the list at handling the data-driven, real-time demands of mobile apps. Its non-blocking architecture ensures a smooth user experience, whether it is about the user authentication process, processing live data streams and running complex data analytics.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 rounded-[70%] transform scale-105" />
              <Image 
                src="/full-stack-development-in-india/mobi.png" 
                alt="Mobile Apps Development Company In Ludhiana, Punjab" 
                width={1200} 
                height={1000} 
                className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] object-contain"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
