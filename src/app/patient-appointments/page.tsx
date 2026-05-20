"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, Check, Star } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import ContactFormSection from "@/components/ContactFormSection";

// --- Hero / Video Section ---
const PatientAppointmentsHero = () => {
  return (
    <section className="bg-[#F1F1F1] pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-[46px] font-serif font-bold text-black max-w-5xl mx-auto leading-tight">
            Enhance the Scope of Your Business with FlyMedia Technology
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto font-medium">
            Say goodbye to depending on referrals, cold calling and third-party websites. With FlyMedia Technology, employ the latest marketing techniques to improve the scale of your hospital starting today!
          </p>
        </div>

        {/* Responsive YouTube Video Wrapper */}
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          <iframe
            src="https://www.youtube.com/embed/cYefHP7mOBI"
            title="Empowering Business and Growth | FlyMedia Technology"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>

        {/* Call to Action Button */}
        <div className="pt-4">
          <a
            href="#contact-us"
            className="inline-block w-full max-w-2xl bg-gradient-to-r from-[#FA7E09] to-[#EC7317] hover:from-[#EC7317] hover:to-[#FA7E09] text-white text-base md:text-lg font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wider"
          >
            Click Here To Book A Free 1:1 Consulting Session
          </a>
        </div>

      </div>
    </section>
  );
};

// --- Checklist / Extent Section ---
const ChecklistSection = () => {
  const checklistItems = [
    "A comprehensive plan on how to scale up your practice effectively.",
    "A meticulous plan regarding your business and paid social media campaigns (Facebook, Instagram)",
    "Improve the reach of your practice by engaging in paid Google AdWord campaigns",
    "Employ SEO strategies to target specific patient demographic",
    "Make your website user-friendly with our exceptional website design services"
  ];

  return (
    <section className="py-16 bg-[#F1F1F1] border-t border-gray-200/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-black border-b-2 border-black pb-2 inline-block">
            Explore the Marketing Extent with a 1:1 Session
          </h2>
          <p className="text-gray-700 text-base md:text-lg font-semibold pt-2">
            By booking a 1:1 consultation session with the experts of FlyMedia Technology, you can understand the following things:
          </p>
        </div>

        <ul className="space-y-4 max-w-2xl mx-auto">
          {checklistItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-800 text-sm md:text-base font-semibold leading-relaxed">
              <Check className="text-black shrink-0 mt-[3px]" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

// --- Client Reviews Section ---
const ClientReviewsSection = () => {
  const reviews = [
    {
      title: "Best Company",
      rating: 5,
      text: "Fly Media Technology is the best digital marketing company in India. I wanted to develop my website and was looking for a company that could provide a great quality website that is dynamic, responsive and fast. I contacted the company and they provided me with the best website development and design services. I was very happy with the design, speed, performance, and layout of the website. It was dynamic and user-friendly, just like I wanted. Great services, highly recommend!",
      author: "Sagar Kumar"
    },
    {
      title: "Good Service",
      rating: 5,
      text: "Fly Media Technology is a great company for SEO services. My website ranking was not as per my requirement, and I wanted to change it. That's when I contacted Fly Media Technology and told them about my SEO requirement. The company came up with good SEO marketing strategies and helped me achieve my goals. Within the agreed time, my ranking and visibility increased thanks to Fly Media Technology.",
      author: "Shubhdeep Singh"
    }
  ];

  return (
    <section className="py-16 bg-[#F1F1F1] border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">
            Clients Reviews
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-bold text-black">{rev.title}</h3>
                  <div className="flex items-center gap-0.5 text-yellow-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed text-justify">
                  {rev.text}
                </p>
              </div>
              <div className="border-t border-gray-50 pt-4 flex flex-col">
                <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">7 days ago</span>
                <span className="text-sm font-bold text-black mt-1">{rev.author}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-6 text-center">
          <a
            href="#contact-us"
            className="inline-block w-full max-w-2xl bg-gradient-to-r from-[#FA7E09] to-[#EC7317] hover:from-[#EC7317] hover:to-[#FA7E09] text-white text-base md:text-lg font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wider"
          >
            Click Here To Book A Free 1:1 Consulting Session
          </a>
        </div>

      </div>
    </section>
  );
};

// --- Trusted Provider & Illustrations ---
const TrustedProviderSection = () => {
  return (
    <section className="py-16 bg-[#F1F1F1] border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black max-w-4xl mx-auto leading-tight">
            FlyMedia – Your Trusted Provider of Marketing Services in the Medical Field
          </h2>
          <p className="text-gray-700 text-base md:text-[17px] leading-relaxed max-w-5xl mx-auto font-semibold">
            Working with respectable names in the IVF sector, such as Dr Sumita Sofat Hospital, to handle sensitive topics such as Transgender surgery for Dr. C. Vijay Kumar of Dr VJ’s Transgender Surgery Clinic – at FlyMedia Technology, we thoroughly understand your needs. Amplify the number of leads, appointments, and registrations you receive in a single day by relying on the marketing strategies we provide!
          </p>
        </div>

        {/* Grid of Two Medical/Creative Illustrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Illustration: Creative/Freelance */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md flex flex-col items-center justify-center text-center space-y-4">
            <div className="relative w-full aspect-[4/3] max-w-[380px]">
              <Image
                src="/19470783_6106768.webp"
                alt="Professional woman photographer capturing images indoors with camera, creative photography, freelance photographer, modern interior setting."
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Creative Photography & Modern Setting
            </p>
          </div>

          {/* Right Illustration: Tech growth */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md flex flex-col items-center justify-center text-center space-y-4">
            <div className="relative w-full aspect-[4/3] max-w-[380px]">
              <Image
                src="/dw.webp"
                alt="Innovative tech solutions for business growth by Flymedia Technology."
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Innovative tech solutions for business growth
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- Esteemed Clientele Grid ---
const ClienteleSection = () => {
  const medicalClients = [
    { name: "Dr. Sumita Sofat Hospital Logo", img: "sofat.png" },
    { name: "VJ Clinics Logo", img: "vjs.png" },
    { name: "Mitra Eye Hospital Logo", img: "mitra-eye.png" },
    { name: "Kalyan Hospital Logo", img: "kalyan-diagnostics.png" },
    { name: "Ameritus Hospital Logo", img: "ameritus.png" },
    { name: "Manas Hospital Logo", img: "manas-hospital.png" }
  ];

  return (
    <section className="py-16 bg-[#F1F1F1] border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">
            Our Esteemed Clientele
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {medicalClients.map((client, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-32 relative">
              <div className="relative w-full h-full">
                <Image
                  src={`/images/clients/${client.img}`}
                  alt={client.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- Case Studies Section ---
const CaseStudiesSection = () => {
  const caseStudies = [
    {
      num: 1,
      clinic: "Dr Sonal Homeopathy Clinic on Organic Results and Traffic",
      challenge: "When Dr Sonal Homeopathy Clinic got in touch with us, they were struggling for visibility amidst the hunt for organic results and traffic. Although they were constantly updating their website, a sheer lack of understanding when it came to establishing the right marketing and SEO strategies was hindering their growth altogether.",
      observation: "With the help of our experts, we made certain to devise an effective SEO strategy to implement on Dr Sonal Homeopathy Clinic’s website and the subsequent content posted on the website. This ensures that the website is able to target patients from specific cities in the country.",
      results: "Our effective SEO strategies and effective application of the same resulted in a rise in organic traffic on the website. It saw a rise in bookings, appointments and registrations through the website.",
      resultImages: ["/image_2025_04_24T04_29_53_756Z-1.webp"]
    },
    {
      num: 2,
      clinic: "Dr Sumita Sofat Hospital on Facebook, Instagram & Google AdWords Growth",
      challenge: "Dr Sumita Sofat Hospital, one of the leading providers of IVF in the city, wanted to employ Facebook, Instagram and Google AdWords to improve the reach of their social media presence. However, they were unable to do so on their own due to their lack of knowledge of how to operate paid advertisements.",
      observation: "Effectively employing the paid advertisement element of Facebook, Instagram, and Google AdWords enhances the presence on different social media platforms. This resulted in not only establishing a brand identity for Dr Sumita Sofat Hospital but also enhancing a level of trust among their followers across the platforms.",
      results: "By employing these effective strategies across various social media platforms as well as Google AdWords, Dr Sumita Sofat Hospital was able to target several different groups in a thorough and effective manner. We were also able to establish Dr Sumita Sofat Hospital as a source of the right information among the masses.",
      resultImages: ["/image_2025_04_24T04_31_41_926Z-1.webp", "/image_2025_04_24T04_35_46_234Z-2.webp"]
    },
    {
      num: 3,
      clinic: "Mitra Eye Hospital on Organic Results and Traffic",
      challenge: "When Mitra Eye Hospital joined the rostrum of FlyMedia Technology, they were struggling to raise genuine traffic and leads on their website. Although their website was primed for their patients, the traffic never converted into anything.",
      observation: "The experts of FlyMedia Technology divided an SEO-forward strategy for the website of Mitra Eye Hospital. Our team expertly revamped all the content on the website to make it SEO-friendly. Our team of content writers expertly inserted keywords in the content in a seamless fashion, which was then posted on the website.",
      results: "This strategy effectively resulted in the website becoming visible in several search results. Therefore gaining traction and genuine traffic on their website. With this strategy, our client’s website was able to be at the top of search results. Therefore, by being in the right position in search results, they were able to gain appointments and registration from their website in a thorough and effective manner.",
      resultImages: ["/image_2025_04_24T04_29_53_756Z-1.webp"]
    }
  ];

  return (
    <section className="py-16 bg-[#F1F1F1] border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {caseStudies.map((study) => (
          <div key={study.num} className=" rounded-3xl  p-8 md:p-12  space-y-8">
            <div className="border-b border-gray-100 pb-4">
              <span className="text-[#EC7317] font-bold text-sm uppercase tracking-wider">Case Study #{study.num}</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-black mt-1">
                {study.clinic}
              </h2>
            </div>

            <div className="space-y-6 max-w-6xl">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-black uppercase tracking-wider">Challenge</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify font-medium">
                  {study.challenge}
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-base font-bold text-black uppercase tracking-wider">Observation</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify font-medium">
                  {study.observation}
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-base font-bold text-black uppercase tracking-wider">Results</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify font-medium mb-4">
                  {study.results}
                </p>
                {/* Responsive Result Images Gallery */}
                {study.resultImages && study.resultImages.length > 0 && (
                  <div className={`grid gap-6 pt-4 ${study.resultImages.length > 1 ? "grid-cols-1 sm:grid-cols-2 max-w-5xl" : "grid-cols-1 max-w-3xl mx-auto"}`}>
                    {study.resultImages.map((imgUrl, imgIdx) => (
                      <Image
                        key={imgIdx}
                        src={imgUrl}
                        alt="SEO and Marketing Analytics Graph"
                        width={650}
                        height={400}
                        className="w-full h-auto object-contain max-h-[350px] mx-auto"
                        unoptimized
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Action button */}
            <div className="pt-6 text-center">
              <a
                href="#contact-us"
                className="inline-block w-full max-w-2xl bg-gradient-to-r from-[#FA7E09] to-[#EC7317] hover:from-[#EC7317] hover:to-[#FA7E09] text-white text-base md:text-lg font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wider"
              >
                Click Here To Book A Free 1:1 Consulting Session
              </a>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

// --- FAQ / Accordion Section ---
const FAQAccordionSection = () => {
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({});

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const faqs = [
    {
      q: "Why hire an agency over a freelancer?",
      a: "With a freelancer, you can only receive a specific service. For multiple services, you will have to hire multiple freelancers. This can make your content lose your identity."
    },
    {
      q: "Can I avail of specific services?",
      a: "Yes, you can! We thoroughly offer our clients the option to pick and choose whichever service they want."
    },
    {
      q: "Is there a limit to services I can ask for?",
      a: "No! We strive to serve our client’s wishes and desires. Therefore, you can take advantage of any of the services we offer."
    },
    {
      q: "What are the advantages of hiring FlyMedia when I can do my marketing on my own?",
      a: "If you are running your own social media accounts as well as a practice, it can thoroughly hinder your life. It is extremely time-consuming to effectively run your social media accounts when you should be paying attention to your patients. By granting us marketing of your practice, you can rest assured that everything will be handled by a team of professionals."
    },
    {
      q: "Are SEO services effective?",
      a: "Yes! SEO thoroughly helps all of our clients to target specific cities and services that they want. This ensures that a person in search of services you provide can find your practice effectively."
    },
    {
      q: "Can you manage my YouTube channel?",
      a: "Yes, we can happily take over your YouTube channel. Our services include posting and promoting long and short-form video content on the platform."
    },
    {
      q: "Can you take over my social media platforms?",
      a: "Yes, we can! Our team of professionals can thoroughly take over your social media profiles and offer brand identity and coherency across various platforms."
    },
    {
      q: "Can you target patients from a specific area?",
      a: "Yes, we can also do that! With our SEO services, you can target prospective patients from anywhere in the country."
    },
    {
      q: "Can you transform my static website into a dynamic one?",
      a: "Our website design and development services can affirmatively make certain that we can transform your already existing website into a dynamic website."
    },
    {
      q: "How much will it cost me?",
      a: "The cost of our services strictly depends upon the amount of services you opt for. Therefore, it varies for each client."
    }
  ];

  return (
    <section className="py-16 bg-[#F1F1F1] border-t border-gray-200/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black border-b-2 border-black pb-2 inline-block">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto font-semibold">
            Following are some of the questions we constantly get about our services. Explore this section to find the right answers. If there is a question on your mind that has not been answered below, feel free to reach out to us!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = !!openFaqs[idx];
            return (
              <div 
                key={idx} 
                className="bg-[#f0f0f0] border-b-2 border-[#FA7E09] rounded-xl overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex justify-between items-center w-full px-6 py-5 text-left font-serif font-bold text-base md:text-[19px] text-black hover:text-[#EC7317] transition-all duration-300"
                >
                  <span className="pr-4 leading-tight">{faq.q}</span>
                  <span className="text-[#EC7317] shrink-0 text-xl font-bold">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 bg-white border-t border-gray-100">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed font-semibold">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

// --- Choose FlyMedia / End Checklist Section ---
const ChooseFlyMediaSection = () => {
  const benefits = [
    "Professional and Trained Team",
    "13+ Years of Experience in Digital Marketing Sphere",
    "Ability to Completely Customise Your Marketing Strategy",
    "Expansion and Improvement with Algorithmic Changes",
    "Client Satisfaction is Primary to Our Company’s Ethos"
  ];

  return (
    <section className="py-16 bg-[#F1F1F1] border-t border-gray-200/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-black border-b-2 border-black pb-2 inline-block">
            Choose FlyMedia Technology for All Your Medical Marketing Needs!
          </h2>
          <p className="text-gray-700 text-sm md:text-base font-semibold pt-2 leading-relaxed">
            With the help of FlyMedia Technology, you can reap several benefits. Our expert team ensures that you and your practice can thoroughly expand beyond the scope of normal means. Find reliable and guaranteed solutions for your medical practice today! With FlyMedia, you can also avail the following benefits:
          </p>
        </div>

        <ul className="space-y-4 max-w-2xl mx-auto">
          {benefits.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-800 text-sm md:text-base font-semibold leading-relaxed">
              <Check className="text-black shrink-0 mt-[3px]" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Final Button */}
        <div className="pt-8 text-center">
          <a
            href="#contact-us"
            className="inline-block w-full max-w-2xl bg-gradient-to-r from-[#FA7E09] to-[#EC7317] hover:from-[#EC7317] hover:to-[#FA7E09] text-white text-base md:text-lg font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wider"
          >
            Click Here To Book A Free 1:1 Consulting Session
          </a>
        </div>

      </div>
    </section>
  );
};

// --- Main Container ---
export default function PatientAppointmentsPage() {
  const pageSEO = {
    title: "Medical Marketing & Patient Appointment Scheduling | FlyMedia Technology",
    h1: ["Patient Appointments Marketing"],
    paragraphs: [
      "Improve the scale of your hospital and clinics starting today with comprehensive digital marketing solutions for patient acquisitions from Flymedia Technology."
    ],
    folderName: "flymediatech.com_home",
    images: ["sofat.png"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why hire an agency over a freelancer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With a freelancer, you can only receive a specific service. For multiple services, you will have to hire multiple freelancers. This can make your content lose your identity."
        }
      },
      {
        "@type": "Question",
        "name": "Can I avail of specific services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can! We thoroughly offer our clients the option to pick and choose whichever service they want."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a limit to services I can ask for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No! We strive to serve our client’s wishes and desires. Therefore, you can take advantage of any of the services we offer."
        }
      },
      {
        "@type": "Question",
        "name": "What are the advantages of hiring FlyMedia when I can do my marketing on my own?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you are running your own social media accounts as well as a practice, it can thoroughly hinder your life. It is extremely time-consuming to effectively run your social media accounts when you should be paying attention to your patients. By granting us marketing of your practice, you can rest assured that everything will be handled by a team of professionals."
        }
      },
      {
        "@type": "Question",
        "name": "Are SEO services effective?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! SEO thoroughly helps all of our clients to target specific cities and services that they want. This ensures that a person in search of services you provide can find your practice effectively."
        }
      },
      {
        "@type": "Question",
        "name": "Can you manage my YouTube channel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we can happily take over your YouTube channel. Our services include posting and promoting long and short-form video content on the platform."
        }
      },
      {
        "@type": "Question",
        "name": "Can you take over my social media platforms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we can! Our team of professionals can thoroughly take over your social media profiles and offer brand identity across various platforms."
        }
      },
      {
        "@type": "Question",
        "name": "Can you target patients from a specific area?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we can also do that! With our SEO services, you can target prospective patients from anywhere in the country."
        }
      },
      {
        "@type": "Question",
        "name": "Can you transform my static website into a dynamic one?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our website design and development services can affirmatively make certain that we can transform your already existing website into a dynamic website."
        }
      },
      {
        "@type": "Question",
        "name": "How much will it cost me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of our services strictly depends upon the amount of services you opt for. Therefore, it varies for each client."
        }
      }
    ]
  };

  return (
    <ServicePage {...pageSEO} bgClass="bg-[#F1F1F1]">
      <PatientAppointmentsHero />
      <ChecklistSection />
      <ClientReviewsSection />
      <TrustedProviderSection />
      <ClienteleSection />
      <CaseStudiesSection />
      <FAQAccordionSection />
      <ChooseFlyMediaSection />
      <div id="contact-us">
        <ContactFormSection />
      </div>
      
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema, null, 2) }}
      />
    </ServicePage>
  );
}
