'use client';

import React from 'react';
import Link from 'next/link';

export default function ComputerJobsPage() {
  const possibleOptions = [
    {
      title: "Computer Programmers",
      img: "/uploads/2024/05/Computer-Programmers.png",
      desc: "Computer programmers can write programs in different languages like C++, Java, and many other advanced programming languages. They can:",
      bullets: [
        "Improve and expand the existing program",
        "Make use of CASE tools (Computer-assisted software engineering)",
        "Debug program by testing and fixing errors",
        "Make writing easy through code libraries."
      ]
    },
    {
      title: "Software Developers",
      img: "/uploads/2024/05/developewr.png",
      desc: "Software developers take into account the software development process facets which includes:",
      bullets: [
        "Coding",
        "Design",
        "Project management",
        "Computer programming"
      ]
    },
    {
      title: "Web Designer",
      img: "/uploads/2024/05/Web-Designer.png",
      desc: "Website designers have the responsibility to develop and create websites. As per the client’s needs, they create the required product.",
      bullets: []
    },
    {
      title: "Database Administrator",
      img: "/uploads/2024/05/data.png",
      desc: "DBA has the responsibility to carry out:",
      bullets: [
        "Designing",
        "Implementation",
        "Maintenance",
        "Repair of Organization database"
      ],
      extra: "They are also known as ‘Database programmers or database coordinators’."
    },
    {
      title: "Web/Multimedia Programmer",
      img: "/uploads/2024/05/Web-Multimedia-Programmer.png",
      desc: "They have the responsibility to carry out different features like:",
      bullets: [
        "Sound",
        "Graphics",
        "Digital Photography",
        "Text",
        "Animation",
        "Video"
      ],
      extra: "Creativity and technical skills are of utmost importance in this job profession."
    },
    {
      title: "Technical Writer",
      img: "/uploads/2024/05/System-Analyst-1.png",
      desc: "The technical writer has an understanding of technology and writing skills. They should understand how to write:",
      bullets: [
        "Product description",
        "Design Specifications",
        "User manuals",
        "Project plans",
        "Papers"
      ]
    },
    {
      title: "Software Consultant",
      img: "/uploads/2024/05/Software-Consultant.png",
      desc: "They have the eye to check the client business and what software solution will make their business escalate.",
      bullets: []
    },
    {
      title: "System Analyst",
      img: "/uploads/2024/05/3rd.png",
      desc: "Being a system analyst they have the responsibility to check the problem and then plan the solution for the system.",
      bullets: []
    }
  ];

  return (
    <main className="min-h-screen bg-[#F3F4F6] text-black overflow-hidden font-sans pb-16">

      {/* 1. Hero & Header Section */}
      <section className="relative pt-12 md:pt-16 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 order-last lg:order-first">

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold tracking-tight leading-[1.1] text-gray-900">
                Fresher Computer Jobs in Ludhiana
              </h1>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium">
              Do you want to give your career an instant start and make it future secure? Hands down, the Computer application
              is the favorable choice for those who wish to be a part of the <Link href="/it-company-in-ludhiana/" className="text-[#ff9900] underline font-bold hover:text-black transition-colors">IT world</Link>. If you have a sharp mind, the ability to analyze the situation, and apply the best possible solutions, then you tick all the boxes to become the next IT professional.
            </p>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Computer application education will include an understanding of computer basics and programming concepts like mastering programming language & learning. In India, the demand for IT professionals is at the peak which opens up the door of success for the individuals. Even the demand for Computer jobs in Ludhiana has seen a hike in the last few years.
            </p>

          </div>

          {/* Hero Right Image Column */}
          <div className="lg:col-span-5 relative group order-first lg:order-last">
            <div className="absolute inset-0 bg-[#ff9900]/5 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-3xl p-4 overflow-hidden">
              <img
                src="/uploads/2024/05/main-ne.png"
                alt="Fresher Computer Jobs in Ludhiana"
                width={1000}
                height={600}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. Options Table Section - SAME-TO-SAME LIKE ELEMENTOR IMAGES AND TABLE STYLE */}
      <section className="py-12 bg-[#F3F4F6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold tracking-tight text-gray-900 leading-tight">
              What are the possible options in Computer Application and IT?
            </h2>
            <div className="w-16 h-1 bg-[#ff9900] mx-auto rounded-full"></div>
          </div>

          {/* Dark elementor-styled high-fidelity table */}
          <div className="overflow-x-auto rounded-lg border border-gray-800 shadow-xl">
            <table className="w-full border-collapse bg-[#1C1C1C] text-white">
              <thead>
                <tr className="bg-[#121212] border-b border-gray-800 text-sm uppercase tracking-wider">
                  <th className="py-4 px-6 font-extrabold text-center border-r border-gray-800 w-[45%] sm:w-[40%] text-[#ff9900]">
                    Job Options
                  </th>
                  <th className="py-4 px-6 font-extrabold text-left w-[55%] sm:w-[60%] text-[#ff9900]">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {possibleOptions.map((option, idx) => (
                  <tr key={idx} className="border-b border-gray-800 hover:bg-[#232323] transition-colors duration-200">

                    {/* Left cell - image & bold name */}
                    <td className="py-8 px-6 text-center border-r border-gray-800 align-middle">
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <img
                          src={option.img}
                          alt={option.title}
                          loading="lazy"
                          decoding="async"
                          className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
                        />
                        <span className="block font-bold text-sm sm:text-base tracking-wide text-white font-sans">
                          {option.title}
                        </span>
                      </div>
                    </td>

                    {/* Right cell - desc & bullets */}
                    <td className="py-8 px-6 sm:px-8 text-left align-middle text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed">
                      <p className="font-semibold text-gray-100 mb-3">
                        {option.desc}
                      </p>

                      {option.bullets.length > 0 && (
                        <ul className="list-disc pl-5 space-y-2 text-gray-300 marker:text-[#ff9900]">
                          {option.bullets.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="font-medium">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}

                      {option.extra && (
                        <p className="mt-4 text-xs sm:text-sm text-gray-400 italic font-semibold border-t border-gray-800 pt-3">
                          {option.extra}
                        </p>
                      )}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 3. Career Paths / How to Pursue Section - SAME TO SAME DARK TABLE */}
      <section className=" bg-[#F3F4F6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-serif font-extrabold tracking-tight text-gray-900 leading-tight">
              How to Pursue a Career in Computer Application and IT?
            </h2>
          </div>

          {/* Dark elementor-styled Career Paths table */}
          <div className="overflow-x-auto rounded-lg ">
            <table className="w-full border-collapse bg-[#1C1C1C] text-white">
              <thead>
                <tr className="bg-[#121212] border-b border-gray-800 text-xs sm:text-sm uppercase tracking-wider text-center">
                  <th className="py-4 px-6 font-extrabold border-r border-gray-800 w-[15%]"></th>
                  <th className="py-4 px-6 font-extrabold border-r border-gray-800  w-[25%]">Stream</th>
                  <th className="py-4 px-6 font-extrabold border-r border-gray-800  w-[25%]">Graduation</th>
                  <th className="py-4 px-6 font-extrabold border-r border-gray-800 w-[20%]">After Graduation</th>
                  <th className="py-4 px-6 font-extrabold w-[15%]">After Post Graduation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-center">
                <tr className="border-b border-gray-800 hover:bg-[#232323] transition-colors duration-200">
                  <td className="py-6 px-4 font-bold border-r border-gray-800  align-middle font-sans">
                    Path 1
                  </td>
                  <td className="py-6 px-6 border-r border-gray-800 align-middle text-gray-200 font-semibold text-xs sm:text-sm">
                    Clear Class XII with Any Stream with Maths (Computer Science is recommended)
                  </td>
                  <td className="py-6 px-6 border-r border-gray-800 align-middle text-gray-200 font-semibold text-xs sm:text-sm">
                    Pursue BCA/ BSc Computer Science for 3 years
                  </td>
                  <td className="py-6 px-6 border-r border-gray-800 align-middle text-gray-200 font-semibold text-xs sm:text-sm">
                    Pursue MCA for 2-3 years
                  </td>
                  <td className="py-6 px-4 align-middle text-gray-400 font-semibold text-xs sm:text-sm">–</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-[#232323] transition-colors duration-200">
                  <td className="py-6 px-4 font-bold border-r border-gray-800  align-middle font-sans">
                    Path 2
                  </td>
                  <td className="py-6 px-6 border-r border-gray-800 align-middle text-gray-200 font-semibold text-xs sm:text-sm">
                    Clear Class XII in Science Stream with IT/Computer Science/ Similar
                  </td>
                  <td className="py-6 px-6 border-r border-gray-800 align-middle text-gray-200 font-semibold text-xs sm:text-sm">
                    Pursue B.Tech in Computer Science for 4 years
                  </td>
                  <td className="py-6 px-6 border-r border-gray-800 align-middle text-gray-200 font-semibold text-xs sm:text-sm">
                    Pursue M.Tech for 2 Years
                  </td>
                  <td className="py-6 px-4 align-middle text-gray-400 font-semibold text-xs sm:text-sm">–</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 4. Work Description Section - FLAT STYLE SAME TO SAME AS IMAGE */}
      <section className="py-12 bg-[#F3F4F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-gray-900 leading-tight">
            What is the work description?
          </h2>

          <ul className="list-disc pl-6 space-y-0.5 text-gray-800 text-sm sm:text-base font-semibold leading-relaxed">
            <li>
              <Link href="/our-services/web-designing/" className="text-[#ff9900] hover:underline font-bold">Design </Link>
              and
              <Link href="/our-services/web-development/" className="text-[#ff9900] hover:underline font-bold"> development </Link>
              of websites along with mobile applications.
            </li>
            <li>Produce computer applications, network control systems, design software, and computer games.</li>
            <li>Produce software & utility programs, computer applications as per the client’s needs.</li>
            <li>Bring in innovative and effective IT solutions to help the business drive efficiency and increased profits.</li>
            <li>Plan to make the best high-level decision in regards to the design and architecture of IT services and products.</li>
            <li>Working with the software developers and engineers to bring out the best design solutions.</li>
            <li>By considering the business requirements, coming up with the most reliable yet effective solutions.</li>
            <li>Checking the client business, so that the best software solution is developed helps the business get increased success.</li>
          </ul>

        </div>
      </section>

      {/* 5. Benefits Section - FLAT STYLE SAME TO SAME AS IMAGE */}
      <section className="py-12 bg-[#F3F4F6] border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-gray-900 leading-tight">
            How is it beneficial to make your career in computer application and IT?
          </h2>

          <p className="text-gray-700 font-semibold text-sm sm:text-base leading-relaxed">
            Well! The job options are endless. As per your liking or skills you can choose the profession in which you fit in the most. Some of the major benefits are:
          </p>

          <ul className="list-disc pl-6 space-y-3.5 text-gray-800 text-sm sm:text-base font-semibold leading-relaxed">
            <li>Increased demand for computer professionals</li>
            <li>Growth and learning-oriented field</li>
            <li>High paying potential</li>
          </ul>

          <p className="text-gray-700 font-semibold text-sm sm:text-base leading-relaxed pt-2">
            So, if you are looking to make your future secure, then get started with Flymedia Technology. Get in touch with us for further information.
          </p>

        </div>
      </section>


    </main>
  );
}
