"use client";

import React from "react";
import Link from "next/link";
import { Scale, FileCheck, Landmark, ShieldAlert, AlertOctagon, HelpCircle, Mail, Phone, MapPin } from "lucide-react";

export default function TermsConditions() {
  const lastUpdated = "May 2026";

  const termsSections = [
    {
      icon: <FileCheck className="w-6 h-6 text-[#ff9900]" />,
      title: "1. Acceptance of Terms",
      content: (
        <p>
          By accessing or using the services provided by Fly Media Technology ("us", "we", or "our"), including this website and our SEO, SMO, web development, website designing, and PPC services, you agree to be bound by these Terms and Conditions. If you do not agree to all terms, please refrain from using our services and website.
        </p>
      )
    },
    {
      icon: <Landmark className="w-6 h-6 text-[#ff9900]" />,
      title: "2. Payment Terms & Invoicing",
      content: (
        <div className="space-y-3">
          <p>
            Engaging Fly Media Technology for IT and digital marketing projects implies acceptance of our billing structure:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>For project-based services (e.g. custom web design, web development), payments are made in installments as defined in the initial project quotation.</li>
            <li>For monthly retainer services (e.g. SEO campaigns, SMO, PPC management), fees are due in advance at the start of each service cycle.</li>
            <li>Failure to clear outstanding invoices within the specified timeframe may result in temporary suspension of active services or access to development portals.</li>
          </ul>
        </div>
      )
    },
    {
      icon: <Scale className="w-6 h-6 text-[#ff9900]" />,
      title: "3. Intellectual Property Rights",
      content: (
        <p>
          All code, designs, graphics, strategies, and materials created by Fly Media Technology remain our intellectual property until all associated project invoices are fully cleared by the client. Upon final payment, the license, ownership rights, and credentials of the custom codebase or assets will be completely transferred to the client.
        </p>
      )
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-[#ff9900]" />,
      title: "4. Client Obligations & Data Access",
      content: (
        <p>
          To ensure timely execution of services, the client must cooperate with our team by providing necessary access credentials (e.g. website admin panels, FTP details, social media pages, Google Analytics), and prompt feedback on draft milestones. We hold no responsibility for project delays caused by a client's failure to provide required assets, text copy, or approvals.
        </p>
      )
    },
    {
      icon: <AlertOctagon className="w-6 h-6 text-[#ff9900]" />,
      title: "5. Service Guarantees & Liability Limits",
      content: (
        <p>
          While we adhere strictly to the latest white-hat Google SEO guidelines and industry standards, search engine algorithms are dynamic and subject to change. We make no absolute guarantees regarding specific keyword ranks or instant revenue surges, as search engine behavior is outside our control. In no event shall Fly Media Technology be liable for any indirect, incidental, or consequential damages resulting from website downtime or campaign performance.
        </p>
      )
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-[#ff9900]" />,
      title: "6. Governing Law & Dispute Resolution",
      content: (
        <p>
          These Terms & Conditions and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of India. Any legal action or proceeding relating to our services must be brought exclusively in courts situated in Ludhiana, Punjab, India.
        </p>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-[#F3F4F6] px-4 py-12 md:py-20 font-sans text-gray-850">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Hero Section */}
        <section className="text-center space-y-4">
          <div className="inline-flex p-3 bg-orange-50 rounded-2xl text-[#ff9900] mb-2">
            <Scale className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-black tracking-tight leading-tight">
            Terms & Conditions
          </h1>
          <div className="w-20 h-1.5 bg-[#ff9900] mx-auto rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4 font-medium">
            Please read these terms and conditions carefully before utilizing any digital solutions, campaigns, or services from Fly Media Technology.
          </p>
          <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">
            Last Updated: {lastUpdated}
          </p>
        </section>

        {/* Legal Preamble */}
        <section className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm leading-relaxed">
          <p className="text-base md:text-lg font-medium text-gray-700">
            Welcome to Fly Media Technology ("us", "we", or "our"). These Terms & Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("client", "you"), and Fly Media Technology, concerning your access to and use of our website (
            <Link href="/" className="text-[#ff9900] font-bold hover:underline">
              flymediatech.com
            </Link>
            ) as well as any other media form, media channel, mobile website, or services related, linked, or otherwise connected thereto.
          </p>
        </section>

        {/* Terms Sections */}
        <section className="space-y-6">
          {termsSections.map((sec, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 items-start hover:border-orange-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                {sec.icon}
              </div>
              <div className="space-y-3 flex-grow">
                <h2 className="text-2xl font-bold text-gray-900">{sec.title}</h2>
                <div className="text-gray-655 leading-relaxed font-medium text-base md:text-[16.5px]">
                  {sec.content}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Support Section */}
        <section className="bg-gradient-to-br from-black to-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-white/5 space-y-8">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-serif font-bold text-[#ff9900]">7. Questions & Revisions</h2>
            <p className="text-gray-300 max-w-3xl leading-relaxed text-sm md:text-base font-medium">
              We reserve the right, in our sole discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason. If you have questions about these terms, please connect with us via the contact channels listed below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ff9900]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Email Us</p>
                <a href="mailto:anujguptaflymedia@gmail.com" className="text-sm font-bold text-white hover:text-[#ff9900] transition-colors">
                  anujguptaflymedia@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ff9900]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Call Support</p>
                <a href="tel:+919888484310" className="text-sm font-bold text-white hover:text-[#ff9900] transition-colors">
                  +91-98884-84310
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ff9900]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Head Office</p>
                <p className="text-sm font-bold text-gray-200">
                  Ludhiana, Punjab, India
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
