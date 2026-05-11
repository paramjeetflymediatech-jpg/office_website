"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Award,
  Search,
  TrendingUp,
  Users,
  Target,
  ShieldCheck,
  PhoneCall,
  ArrowRight,
  ExternalLink,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import ServicePage from "@/components/ServicePage";

// --- Components ---


const PPCHeroSection = () => (
  <div className=" bg-[#F1F1F1]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black leading-tight">
            Flymedia Technology for Google Adwords?
          </h2>
          <div className="text-gray-700 space-y-4 text-base leading-relaxed">
            <p>
              Are you on the lookout for a top-rated and trusted google agency for AdWords? Search engine shows around 75,20,00,000 results when looking for the{" "}
              <Link href="/about-us" className="text-[#ff9900] font-semibold hover:underline inline-flex items-center gap-1">
                Google AdWords Expert <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              . Finally, your search has let you come across the Google certified experts at Flymedia Technology with experience of 12+ years and counting.
            </p>
            <p>
              With over a decade of hands-on expertise, we don't just set up campaigns; we engineer ROI-centric structures that convert clicks into long-term business assets. Let our certified team handle the complexities of Google Ads while you reap the rewards of sustainable growth.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-[1/1] max-w-lg mx-auto p-4 ">
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
              <Image
                src="/scrap/Archive/flymediatech.com__pay-per-click-ppc/assets/images/image_33.png"
                alt="Flymedia Google AdWords Specialist"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PPCExplanationSection = () => (
  <div className="bg-[#F1F1F1]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-16 py-12 lg:py-20">
        <div className="w-full lg:w-1/2 space-y-6">

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black leading-tight">
            How Pay-Per-Click Drives Measurable Business Growth
          </h2>
          <div className="text-gray-700 space-y-4 text-base leading-relaxed">
            <p>
              Google creates a ladder for every business, and one of the most effective ones is PPC (Pay-Per-Click Services), which allows them to reach potential customers from around the globe. The internet uses the pay-per-click model to direct users toward your site.
            </p>
            <p>
              In this process, the advertiser pays the search engine each time a user clicks their ad. The expertise and management of a dedicated Pay per click company help generate high-quality Pay by clicks instead of wasting budget on traditional, untargeted marketing methods.
            </p>
            <p>
              By laser-targeting specific keywords, demographic profiles, and user behaviors, we put your brand at the exact top of search results when high-intent buyers are looking for your services.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden ">
            <Image
              src="/scrap/Archive/flymediatech.com__pay-per-click-ppc/assets/images/image_34.png"
              alt="How Pay Per Click Works"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PPCWhyChooseUsSection = () => {
  const points = [
    "Cater the most engaging strategies to help you build your brand.",
    "Tried and tested strategies used to optimize the business needs and drive profitable results for the clients.",
    "Helped thousands of clients to target audiences and generated performance.",
    "Build, optimize, and manage advertisers' accounts depending on their business goals, sizes, and needs.",
    "Check the loophole in the customer's path from the 'Search to Purchase' journey. And then fixing the same to boost ROI (Return On Investment)."
  ];

  return (
    <div className=" bg-[#F1F1F1] border-b border-gray-200/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Top Segment: Centered Google Partner & Flat Numbered List */}
        <div className="flex flex-col items-center space-y-12">
          <div className="relative w-64 h-36">
            <Image
              src="/scrap/Archive/flymediatech.com__pay-per-click-ppc/assets/images/image_35.png"
              alt="Google Partner Premier 2024"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="w-full max-w-4xl text-left">
            {points.map((pt, idx) => (
              <p key={idx} className="text-gray-900 font-sans font-medium text-sm sm:text-base md:text-lg leading-relaxed flex gap-3">
                <span className="font-bold text-gray-950 shrink-0">{idx + 1}.</span>
                <span>{pt}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Bottom Segment: Recommendation (Two Column layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black tracking-tight leading-none">
              Recommendation
            </h2>
            <p className="text-gray-800 font-sans font-medium text-sm sm:text-base leading-relaxed">
              Simple Pay per click is a paid service that search engines use to take their Pay.
              Pay per click has become an essential tool, but, do not go overboard with more clicks is a better thought.
              Once you have decided who to choose, make sure you are 100% comfortable with them both at work and in conversation.
              The company should be one with whom you can have a long-term relationship.
              It would help if you tried to make a partner feel between you and the service provider.
              A long-lasting relationship needs to be comfortable.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full aspect-[4/3] max-w-md">
              <Image
                src="/scrap/Archive/flymediatech.com__pay-per-click-ppc/assets/images/image_36.png"
                alt="Recommendation Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const PPCGoogleCertifiedSection = () => (
  <div className="py-20 bg-[#F1F1F1]">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Heading */}
      <h2 className="text-[32px] md:text-[36px] font-serif font-bold text-black leading-tight">
        Why Google Certified Agency?
      </h2>

      {/* Description Copy */}
      <div className="text-gray-700 text-base md:text-lg leading-relaxed">
        The badge of Google Certified Agency is obtained after fulfilling certain requirements. Let me give you clarity over the same so that &lsquo;Now&rsquo; &lsquo;Future&rsquo; you know the key reasons to choose a Google Adwords certified agency in Ludhiana, Punjab to create a full-funnel marketing strategy as per the latest trends and methods:
      </div>

      {/* Bordered Table - Same layout, fonts, and borders */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-gray-300">
          <tbody>
            <tr>
              <td className="border border-gray-300 p-4 font-bold text-black text-sm md:text-base w-1/3">
                Requirements
              </td>
              <td className="border border-gray-300 p-4 font-bold text-black text-sm md:text-base">
                Features
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-bold text-black text-sm md:text-base">
                Performance
              </td>
              <td className="border border-gray-300 p-4 text-gray-700 text-sm md:text-base">
                Need to maintain optimization score of <span className="font-bold text-black">&ldquo; &gt;=70% &rdquo;</span>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-bold text-black text-sm md:text-base">
                Certifications
              </td>
              <td className="border border-gray-300 p-4 text-gray-700 text-sm md:text-base">
                Professional Accreditation offered by Google to show proficiency in the Ad world.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom Statement (Italic & Same format) */}
      <div className="text-gray-700 text-base md:text-lg leading-relaxed">
        <p className="italic">
          As a <strong className="font-bold text-black">Google Partner:</strong> <strong className="font-bold text-black">&lsquo;Flymedia Technology&rsquo;</strong> has successfully met all the certification requirements with <strong className="font-bold text-black">a 70% optimization score threshold.</strong> At present, our optimization score is 78.4%.
        </p>
      </div>
    </div>
  </div>
);

const PPCSpecialistSection = () => {
  const [openToggles, setOpenToggles] = React.useState<Record<number, boolean>>({});

  const toggleTab = (index: number) => {
    setOpenToggles(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleData = [
    {
      title: "Seek Assistance in Managing Your Online Marketing",
      content: "To tell the world about your business, you need a PPC campaign, which professionals also run. The expert services are planned and strategized for cost-effective solutions for your landing page or the whole website. Flymedia Technology ‘Google Ads Expert’ are the ones you can reach out to every time. The expert team has fulfilled all the requirements to be a Google Partner."
    },
    {
      title: "Google Ads Campaign Marketing Specialist Knows ‘what,’ ‘when,’ & ‘how.’",
      content: "The PPC experts, having 11+ years of experience, know which tactics and methods are relevant to increasing website traffic. We are not saying ‘It’s easy as a pie,’ but they know which piece fits perfectly in one place. They know how to track progress, make changes, and develop the most reliable solutions."
    },
    {
      title: "Keep an Eye on Success",
      content: (
        <div className="space-y-3">
          <p>‘SUCCESS’ – Ultimate goal for every business. The expertise of Google AdWords professionals helps to determine:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>What works the best?</li>
            <li>What are the required changes?</li>
          </ol>
        </div>
      )
    }
  ];

  return (
    <div className="py-20 bg-[#F1F1F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column: Image (Rendered first in mobile stack and desktop left) */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[1/1] max-w-lg mx-auto">
              <Image
                src="/scrap/Archive/flymediatech.com__pay-per-click-ppc/assets/images/image_37.png"
                alt="Google Adwords Company in Ludhiana"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black leading-tight">
              Certified Google Adwords Specialist
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              For every business need, solutions and strategies are different. In-depth research is the linchpin to achieving optimized and desirable results for every project. Under the expertise of &lsquo;Certified Google AdWords Specialist in Punjab,&rsquo; you get several excellent benefits, and it includes the following:
            </p>

            {/* Accordion / Toggle Widget */}
            <div className="space-y-4 pt-4 border-t border-gray-300">
              {toggleData.map((item, index) => {
                const isOpen = !!openToggles[index];
                return (
                  <div key={index} className="border-b border-gray-300 pb-4">
                    <button
                      onClick={() => toggleTab(index)}
                      className="w-full flex justify-between items-center text-left py-2 font-bold text-black text-base md:text-lg hover:text-[#ff9900] transition-colors focus:outline-none"
                    >
                      <span>{item.title}</span>
                      <span className="text-gray-500 flex-shrink-0 ml-4">
                        {isOpen ? (
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 192 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
                          </svg>
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed pl-2 border-l-2 border-[#ff9900]/60">
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PPCCallToAction = () => (
  <div className="py-24 bg-[#F1F1F1]  text-center relative overflow-hidden border-t border-white/5 ">
    {/* Decorative blur elements */}
    <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#ff9900]/10 rounded-full blur-3xl -z-10" />
    <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl -z-10" />

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <h2 className="text-4xl md:text-xl lg:text-3xl font-serif font-bold leading-tight max-w-3xl mx-auto uppercase">
        Reach Out to Well-Known Google AdWords Experts
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
        Flymedia Technology is here to help you deploy a successful and highly manageable PPC campaign. Schedule a consulting session to take the first step towards a results-driven strategy for your online business.
      </p>
    </div>
  </div>
);

const ContactFormSection = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for getting in touch with us! We will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-white py-24 relative z-10 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-6 py-6 pr-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-none">
              Contact Us
            </h2>

            <div className="space-y-6">
              {/* Location */}
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-black font-sans leading-tight">
                  Location
                </h2>
                <div className="flex items-start gap-3 mt-1">
                  <span className="text-[#FA7E09] w-5 h-5 shrink-0 mt-0.5">
                    <svg aria-hidden="true" className="fill-[#FA7E09] w-5 h-5" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                    </svg>
                  </span>
                  <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">
                    Flymedia Technology, Plot no, 20, Vishal Nagar Ext, opposite Kashish Cafe, Vishal Nagar, Jawaddi Taksal, Ludhiana, Punjab 141001
                  </p>
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-black font-sans leading-tight">
                  Phone Number
                </h2>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[#FA7E09] w-5 h-5 shrink-0">
                    <svg aria-hidden="true" className="fill-[#FA7E09] w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                    </svg>
                  </span>
                  <a href="tel:+91-98884-84310" className="text-gray-700 font-medium text-sm sm:text-base hover:text-[#FA7E09] transition-colors leading-relaxed">
                    +91-98884-84310
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-black font-sans leading-tight">
                  Email
                </h2>
                <div className="space-y-3 mt-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[#FA7E09] w-5 h-5 shrink-0">
                      <svg aria-hidden="true" className="fill-[#FA7E09] w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                      </svg>
                    </span>
                    <a href="mailto:anujguptaflymedia@gmail.com" className="text-gray-700 font-medium text-sm sm:text-base hover:text-[#FA7E09] transition-colors leading-relaxed">
                      anujguptaflymedia@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#FA7E09] w-5 h-5 shrink-0">
                      <svg aria-hidden="true" className="fill-[#FA7E09] w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                      </svg>
                    </span>
                    <a href="mailto:anujgupta@flymediatech.com" className="text-gray-700 font-medium text-sm sm:text-base hover:text-[#FA7E09] transition-colors leading-relaxed">
                      anujgupta@flymediatech.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (Sharp corners, background classic) */}
          <div className="lg:col-span-7 bg-[#EFEFEF] p-8 sm:p-12 rounded-none shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-gray-200/20 relative z-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-8 tracking-tight leading-none font-sans">
              Get In Touch With Us
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full bg-white border border-gray-300 rounded-none px-4 py-3.5 text-gray-950 placeholder-gray-500 font-medium focus:outline-none focus:ring-1 focus:ring-black text-xs sm:text-sm"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-white border border-gray-300 rounded-none px-4 py-3.5 text-gray-950 placeholder-gray-500 font-medium focus:outline-none focus:ring-1 focus:ring-black text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="w-full">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full bg-white border border-gray-300 rounded-none px-4 py-3.5 text-gray-950 placeholder-gray-500 font-medium focus:outline-none focus:ring-1 focus:ring-black text-xs sm:text-sm"
                />
              </div>

              <div className="w-full">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Type you message here..."
                  required
                  className="w-full bg-white border border-gray-300 rounded-none px-4 py-3.5 text-gray-950 placeholder-gray-500 font-medium focus:outline-none focus:ring-1 focus:ring-black text-xs sm:text-sm resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-black text-white hover:bg-[#FA7E09] hover:text-white transition-all duration-300 font-bold px-10 py-3.5 rounded-full text-sm sm:text-base shadow-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Main Page ---

export default function PayPerClick() {
  const data = {
    title: "Google Adwords Company in Ludhiana | Pay Per Click Marketing Agency in Punjab, India",
    h1: ["Pay Per Click Campaigning Company India- High Quality Result Oriented Services"],
    paragraphs: [
      "Pay per click is a paid search engine marketing technique that is designed for receiving instant web traffic. In this method of marketing you pay search engine only when someone clicks on your ad.",
      "The expert professionals are completely aware of performance, service and complications of every platform and can assure that your app is exclusive and outstanding on every gadget.",
      "With high ROI and instant visibility, PPC is the fastest way to get your business in front of the right audience at the right time. Our team manages every aspect of your campaigns, from keyword bidding to ad copy and landing page optimization.",
    ],
    images: new Array(40).fill(""),
    folderName: "flymediatech.com__pay-per-click-ppc"
  };

  return (
    <ServicePage {...data} bgClass="bg-white">
      <PPCHeroSection />
      <PPCExplanationSection />
      <PPCWhyChooseUsSection />
      <PPCGoogleCertifiedSection />
      <PPCSpecialistSection />
      <PPCCallToAction />
      <ContactFormSection />
    </ServicePage>

  );
}
