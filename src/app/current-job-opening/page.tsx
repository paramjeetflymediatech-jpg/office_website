"use client";

import React, { useState } from "react";
import Link from "next/link";

interface JobOpening {
  id: string;
  title: string;
  post: string;
  vacancies: string;
  experience: string;
  details?: { label: string; value: string }[];
  introduction?: string;
  description: string[];
  requiredSkills?: string[];
  subSections?: { subtitle: string; points: string[] }[];
}

export default function CurrentJobOpening() {
  const [openJobId, setOpenJobId] = useState<string | null>(null);

  const toggleJob = (id: string) => {
    setOpenJobId(openJobId === id ? null : id);
  };

  const jobListings: JobOpening[] = [
    {
      id: "seo",
      title: "SEO",
      post: "SEO ( Search Engine Optimization)",
      vacancies: "2",
      experience: "0-3 years",
      description: [
        "Knowledge of SEO on-page & off page, Google updates, ranking factors and Search Engine Marketing Techniques.",
        "The candidate must be able to perform all off-page and on pages tasks successfully, including article/press release/directory submissions, RSS feeds, blog posts, social bookmarking and commenting on social networks.",
        "Good Knowledge of on page SEO activities like meta tags, sitemap, header tags, URl optimization etc.",
        "Develop and implementation of the best strategies to improve the ranking of the clients’ business.",
        "Suggest the required changes in timely manner to upgrade the website architecture, designing and content.",
        "Research on Google Analytic, Search Engine Ranking monitoring and latest web trends for effective optimization.",
        "Manage the SEO and PPC campaigns"
      ]
    },
    {
      id: "marketing-manager",
      title: "Marketing Manager",
      post: "Marketing Manager",
      vacancies: "2",
      experience: "1+ years",
      description: [
        "Generate leads through cold calling which should lead to Conversion.",
        "Follow-up calls, E-mail to prospects clients.",
        "Complete knowledge of MS- Excel.",
        "Market research to establish initial contact and gathering information.",
        "Constantly updating the knowledge of the latest technologies and industries trend.",
        "Gathering requirement and providing the right solution.",
        "Corporate level marketing to manage sales pipeline.",
        "Client interaction/presentation.",
        "Managing new as well as existing clients",
        "Possess high energy and enthusiasm.",
        "Self motivated & goal-oriented.",
        "Excellent verbal, written & interpersonal communication skills."
      ]
    },
    {
      id: "online-bidder",
      title: "Business Development Manager (Online Bidder)",
      post: "Online Bidder",
      vacancies: "2",
      experience: "1-3 years",
      details: [
        { label: "Job Type", value: "Full-time & Day shift" },
        { label: "Experience", value: "Experienced" },
        { label: "Qualification", value: "Any Graduate" }
      ],
      description: [
        "Should have 1-3 years of work experience as an Online Bidder.",
        "Responsible for acquiring business & achieving sales target.",
        "Requirement analysis",
        "Write proposals for projects.",
        "Deal negotiations, finalizing deals with clients",
        "Client interaction",
        "Build and maintain client relationships",
        "Candidate should have hand on experience in lead generation, business development & services selling.",
        "Generate Business from Online Bidding Portals (Up work / Freelancer) and from other websites.",
        "Should be able to generate leads and can maintain track record of communication.",
        "To be involved in Pre – Bids, Follow ups, Competition Analysis",
        "E-Mail Marketing, Finding New Business Opportunities",
        "Able to propose project budgeting to client.",
        "Expertise on web technologies, mobile and IT domain",
        "Excellent communication skills & written skills.",
        "Must have understanding of market and searching the new market strategy and making agents to the foreign countries."
      ]
    },
    {
      id: "php-developer",
      title: "PHP Developer",
      post: "PHP Developer",
      vacancies: "2",
      experience: "1+ years",
      introduction: "We are looking for some talented smart candidate in PHP technology ready to work from scratch, open minded, can work in startup culture.",
      description: [
        "Must have good knowledge of developing applications using Apache and PHP.",
        "Should have strong web development fundamentals.",
        "Strong in PHP 5.x object-oriented design and programming.",
        "Strong jQuery, JavaScript and HTML/CSS Skills.",
        "Strong AJAX skills.",
        "Keyskills – CSS, Javascript, HTML, JQuery, MySQL, Ajax, PHP, Web Development."
      ]
    },
    {
      id: "content-writer-experienced",
      title: "Content Writer(Experienced)",
      post: "Content Writer",
      vacancies: "3",
      experience: "6 months – 1year Freshers can also apply with good communication and creative skills",
      description: [
        "Candidate must possess skills to write very high quality content in English.",
        "Should have a good understanding of internet based terms and technologies.",
        "Responsible for writing Web content; maintaining and updating Web pages/blogs",
        "Ability to write creative content for social media postings.",
        "Research industry-related topics (combining online sources, interviews and studies)",
        "Write clear marketing copy to promote our products/services",
        "Prepare well-structured drafts using Content Management Systems",
        "Proofread and edit blog posts before publication",
        "Submit work to editors for input and approval",
        "Coordinate with marketing and design teams to illustrate articles",
        "Conduct simple keyword research and use SEO guidelines to increase web traffic",
        "Promote content on social media"
      ],
      requiredSkills: [
        "Excellent command over English language and ability to think out-of-the-box, play-with-words and write in a simple, concise and accurate manner.",
        "Creating original articles.",
        "Creative writing.",
        "Good knowledge of MS-Word."
      ]
    },
    {
      id: "content-writer-fresher",
      title: "Content Writer Fresher",
      post: "Content Writer Fresher",
      vacancies: "N/A (Fresher position)",
      experience: "Fresher",
      details: [
        { label: "Job Type", value: "Full-time & Day shift" },
        { label: "Qualification", value: "Any Graduate" }
      ],
      introduction: "Skills & Responsibilities",
      description: [
        "Excellent command at writing skill in English language",
        "Creative and innovative thinker and planner",
        "Great research, organizational, and learning skill",
        "Ability to understand complex writing requirements and deliver quality content",
        "Self motivated",
        "Zeal to learn new things"
      ]
    },
    {
      id: "wordpress-developer",
      title: "WordPress developer",
      post: "WordPress developer",
      vacancies: "3",
      experience: "6 Months - 2 years",
      description: [
        "Designing and implementing new features and functionality",
        "Establishing and guiding the website’s architecture",
        "Ensuring high-performance and availability, and managing all technical aspects of the CMS",
        "Helping formulate an effective, responsive design and turning it into a working theme and plugin.",
        "Self motivated.",
        "Zeal to learn new things.",
        "Must be proficient in PHP, MySQL, CSS, HTML, Javascript, AJAX",
        "Should have experience with WordPress.",
        "Knowledge of PHP web frameworks like CodeIgniter."
      ]
    },
    {
      id: "ios-android-developer",
      title: "IOS and Android Developer",
      post: "IOS and Android Developer",
      vacancies: "3",
      experience: "0.5 year to 3 years",
      details: [
        { label: "Job Type", value: "Full-time & Day shift" },
        { label: "Qualification", value: "Any Graduate" }
      ],
      subSections: [
        {
          subtitle: "Android",
          points: [
            "Android:- Excellent knowledge in core Java",
            "Hands on experience in the full life cycle of Android application development",
            "Strong knowledge in RESTful web services",
            "Good Knowledge of Android SDK’s",
            "Push Notifications & Toast",
            "Eclipse & ANT based build system",
            "Android Studio",
            "Experience in Gradle."
          ]
        },
        {
          subtitle: "IOS",
          points: [
            "Very good experience with Objective-C and iOS SDK",
            "Good working knowledge in Cocoa Touch",
            "Experience with memory management and caching mechanisms specific to mobile devices",
            "Experience working with iOS frameworks such as Core Data, Core Animation, Core Graphics and Core Text"
          ]
        }
      ],
      description: []
    },
    {
      id: "laravel-developer",
      title: "Designation : Laravel developer.",
      post: "Senior Laravel Developer",
      vacancies: "1",
      experience: "Min 1.5 to 4 Years",
      details: [
        { label: "Location", value: "Vishal Nagar Ludhiana" },
        { label: "Salary Range", value: "12k to 20k" },
        { label: "Industry", value: "Information and Technology" },
        { label: "Functional Area", value: "Development" },
        { label: "Working Hours", value: "10 AM To 7 PM" },
        { label: "Job Opening Status", value: "On Going" },
        { label: "Skills", value: "PHP, laravel, wordpress" }
      ],
      introduction: "Duties and Responsibilities: Laravel, MySQL, PHP and related technology development. Coming up with ideas on how to improve speed, scalability and finding new ways to track how visitors are using our solutions",
      description: [
        "Desired Experience",
        "Comfortable with Facebook, Twitter, Instagram, Yelp and Google APIs",
        "Understanding of search and social advertising platform APIs",
        "Understanding of HTML, CSS, JS, JQuery, AWS, Redis",
        "Understanding of Web Services",
        "Knowledge of basic customization of wordpress is a plus."
      ]
    }
  ];

  const leftColumnJobs = jobListings.filter(job => 
    ["seo", "marketing-manager", "online-bidder", "php-developer", "content-writer-experienced"].includes(job.id)
  );
  
  const rightColumnJobs = jobListings.filter(job => 
    ["content-writer-fresher", "wordpress-developer", "ios-android-developer", "laravel-developer"].includes(job.id)
  );

  return (
    <div className="min-h-screen bg-[#EFEFEF] text-black font-sans pb-24">
      
      {/* 1. Header Banner */}
      <section className="relative py-12 md:py-16 bg-[#EFEFEF] text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-serif font-extrabold tracking-tight text-gray-900 leading-tight">
          Current Job Opening
        </h1>
        <p className="text-[#ff9900] text-sm sm:text-base font-extrabold tracking-wide uppercase">
          Time To Accelerate Your Business Presence
        </p>
      </section>

      {/* 2. Two-Column Accordion Layout */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumnJobs.map((job) => {
              const isOpen = openJobId === job.id;
              return (
                <div 
                  key={job.id}
                  className="bg-[#EFEFEF] rounded-2xl  border-b-2 border-[#ff9900] overflow-hidden transition-all duration-300 flex flex-col"
                >
                  {/* Trigger Button */}
                  <button
                    onClick={() => toggleJob(job.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-bold text-gray-950 font-sans leading-snug">
                      {job.title}
                    </span>
                    
                    {/* SVG Caret Indicator */}
                    <div className="flex-shrink-0">
                      <svg 
                        className={`w-3 h-3 fill-current text-[#ff9900] transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
                        viewBox="0 0 192 512" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
                      </svg>
                    </div>
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-left space-y-4 border-t border-gray-100/50">
                      <div className="text-gray-800 text-sm leading-relaxed space-y-1 font-semibold">
                        <p>Post : {job.post}</p>
                        <p>No. Of Vacancies : {job.vacancies}</p>
                        <p>Experience: {job.experience}</p>
                      </div>

                      {job.introduction && (
                        <p className="text-gray-800 text-sm font-bold leading-relaxed pt-1">
                          {job.introduction}
                        </p>
                      )}

                      {/* Job Description List */}
                      {job.description.length > 0 && (
                        <div className="space-y-2">
                          <p className="font-extrabold text-sm text-gray-900">Job Description</p>
                          <ul className="space-y-1.5 pl-4 list-disc text-gray-750 text-sm">
                            {job.description.map((pt, idx) => (
                              <li key={idx} className="leading-relaxed font-medium">{pt}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Required Skills list for Content Writers */}
                      {job.requiredSkills && (
                        <div className="space-y-2 pt-1">
                          <p className="font-extrabold text-sm text-gray-900">Required Skills:</p>
                          <ul className="space-y-1.5 pl-4 list-disc text-gray-750 text-sm">
                            {job.requiredSkills.map((skill, idx) => (
                              <li key={idx} className="leading-relaxed font-medium">{skill}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Apply Now button link */}
                      <div className="pt-3 border-t border-gray-100 text-sm font-semibold text-gray-700">
                        Apply for a job:{" "}
                        <Link 
                          href="/apply-for-job/"
                          className="text-[#ff9900] font-black underline hover:text-black transition-colors"
                        >
                          Click Here
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumnJobs.map((job) => {
              const isOpen = openJobId === job.id;
              return (
                <div 
                  key={job.id}
                  className="bg-[#EFEFEF] rounded-2xl  border-b-2 border-[#ff9900] overflow-hidden transition-all duration-300 flex flex-col"
                >
                  {/* Trigger Button */}
                  <button
                    onClick={() => toggleJob(job.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-bold text-gray-950 font-sans leading-snug">
                      {job.title}
                    </span>
                    
                    {/* SVG Caret Indicator */}
                    <div className="flex-shrink-0">
                      <svg 
                        className={`w-3 h-3 fill-current text-[#ff9900] transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
                        viewBox="0 0 192 512" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
                      </svg>
                    </div>
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-left space-y-4 border-t border-gray-100/50">
                      <div className="text-gray-800 text-sm leading-relaxed space-y-1 font-semibold">
                        <p>Post : {job.post}</p>
                        <p>No. Of Vacancies : {job.vacancies}</p>
                        <p>Experience: {job.experience}</p>
                      </div>

                      {job.introduction && (
                        <p className="text-gray-800 text-sm font-bold leading-relaxed pt-1">
                          {job.introduction}
                        </p>
                      )}

                      {/* Job Description List */}
                      {job.description.length > 0 && (
                        <div className="space-y-2">
                          <p className="font-extrabold text-sm text-gray-900">Job Description</p>
                          <ul className="space-y-1.5 pl-4 list-disc text-gray-750 text-sm">
                            {job.description.map((pt, idx) => (
                              <li key={idx} className="leading-relaxed font-medium">{pt}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Android / IOS Sub-sections */}
                      {job.subSections?.map((section, idx) => (
                        <div key={idx} className="space-y-2 pt-1">
                          <p className="font-extrabold text-sm text-gray-900">{section.subtitle}</p>
                          <ul className="space-y-1.5 pl-4 list-disc text-gray-750 text-sm">
                            {section.points.map((pt, index) => (
                              <li key={index} className="leading-relaxed font-medium">{pt}</li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {/* Apply Now button link */}
                      <div className="pt-3 border-t border-gray-100 text-sm font-semibold text-gray-700">
                        Apply for a job:{" "}
                        <Link 
                          href="/apply-for-job/"
                          className="text-[#ff9900] font-black underline hover:text-black transition-colors"
                        >
                          Click Here
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
