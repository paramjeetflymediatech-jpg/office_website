"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ShieldCheck, Zap, Globe, CreditCard } from "lucide-react";

export default function PaymentGatewaySection() {
  const regions = [
    {
      name: "TOP 10 PAYMENT GATEWAYS FOR INDIA",
      gateways: [
        "2Checkout", "CCAvenue", "Citrus Payments", "EBS", "MasterCard Payment Gateway Services",
        "NETbilling", "PayDollar", "PayPal Express Checkout", "PayU India and PayU Money", 
        "Razorpay (All Cards, NetBanking, Wallets)"
      ]
    },
    {
      name: "POPULAR PAYMENT GATEWAYS FOR UK",
      gateways: [
        "2Checkout", "Alipay Global", "Amazon Payments", "Authorize.net", "PaymentExpress",
        "PaymentSense", "PAYMILL", "PayPal Express Checkout", "PayPal Website Payments Pro (UK)",
        "PayVector (formerly Iridium)", "QuickPay", "Realex", "Realex Payments (Offsite)",
        "SagePay", "SagePay Form", "Shopify Payments", "SOFORT Banking (DIRECTebanking)",
        "WorldPay (Direct)", "WorldPay (Offsite)"
      ]
    },
    {
      name: "PAYMENT GATEWAYS FOR AUSTRALIA",
      gateways: [
        "2Checkout", "G2A Pay", "GoCoin", "IP Payments", "LAY-BUY Powered by PayPal",
        "MasterCard Payment Gateway Services", "MOLPay", "NETbilling", "NetRegistry",
        "Payment Express PxPay", "PaymentExpress", "POLi Internet Banking", "SecurePay (Australia)",
        "Shopify Payments", "WorldPay (Direct)"
      ]
    },
    {
      name: "MAJOR PAYMENT GATEWAYS IN CANADA",
      gateways: [
        "2Checkout", "Alipay Global", "Authorize.net", "Beanstream", "BitPay",
        "Chase Paymentech (Orbital)", "Coinbase", "CyberSource", "GoCoin", "IATS Payments",
        "Ignite Payments", "LAY-BUY Powered by PayPal", "Moneris", "MultiSafepay",
        "NETbilling", "Network Merchants (NMI)", "Optimal Payments", "PayPal Express Checkout",
        "PayPal Payflow Pro", "PayPal Website Payments Pro (CA)"
      ]
    }
  ];

  const offerLogos = [
    { name: "Citi", src: "/scrap/Archive/flymediatech.com__our-services_payment-gateway-integration/assets/images/citi.png" },
    { name: "NETbilling", src: "/scrap/Archive/flymediatech.com__our-services_payment-gateway-integration/assets/images/net.png" },
    { name: "PayDollar", src: "/scrap/Archive/flymediatech.com__our-services_payment-gateway-integration/assets/images/dollar.png" },
    { name: "MasterCard", src: "/scrap/Archive/flymediatech.com__our-services_payment-gateway-integration/assets/images/master.png" },
    { name: "PayPal", src: "/scrap/Archive/flymediatech.com__our-services_payment-gateway-integration/assets/images/paypal.png" },
    { name: "2Checkout", src: "/scrap/Archive/flymediatech.com__our-services_payment-gateway-integration/assets/images/2check-1.png" },
    { name: "CCAvenue", src: "/scrap/Archive/flymediatech.com__our-services_payment-gateway-integration/assets/images/CCAvenue.png" },
    { name: "EBS", src: "/scrap/Archive/flymediatech.com__our-services_payment-gateway-integration/assets/images/ebs.png" }
  ];

  return (
    <div className="font-sans text-gray-800">
      
      {/* Section 1: Regional Gateways */}
      <section className="bg-[#F1F1F1] py-20 md:py-24 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111111] leading-tight">
              Payment Gateway <span className="underline decoration-[#ff9900] decoration-2 underline-offset-[12px]">Integration</span>
            </h2>
            <p className="text-gray-600 max-w-5xl mx-auto text-base md:text-[17px] leading-relaxed font-medium pt-3">
              Payment gateway is the service that autherise and facilitates the payment through cards like credit or debit and even through online banking. It basically works as middleman between bank and merchandiser’s site or mobile application.
            </p>
            <p className="text-gray-600 max-w-5xl mx-auto text-base md:text-[17px] leading-relaxed font-medium">
              With the passage of time various payment gateways are making space in the online markets. Here is the list of few popular ones according to the major countries in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {regions.map((region, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="    overflow-hidden flex flex-col  duration-300"
              >
                {/* Header card with bold title */}
                <div className="bg-[#FA7E09] py-5 px-4 text-center border-b border-[#e68a00]">
                  <h3 className="text-white text-[13px] sm:text-[14px] font-bold uppercase tracking-wider leading-snug">
                    {region.name}
                  </h3>
                </div>
                {/* List items with bullet style */}
                <div className="p-6 flex-grow ">
                  <ul className="list-disc pl-5 space-y-3.5 text-gray-700 text-sm font-medium">
                    {region.gateways.map((gw, gIdx) => (
                      <li key={gIdx} className="leading-relaxed text-black">
                        {gw}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Effective Integration & Smooth Transactions */}
      <section className="bg-[#F1F1F1] py-20 md:py-24 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Detailed Text */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-[#111111] leading-tight">
                Effective Payment Gateways Integration for Smooth Transactions
              </h2>
              <div className="space-y-5 text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                <p>
                  In this smart buyers markets it has become mandatory for the businesses to provide option for online transaction to the users for the purchase of products, items, services. For the convenience of the visitors it is necessary to provide online shopping cart by the owner of website so that customers can purchase anything at any time while sitting anywhere.
                </p>
                <p>
                  Payment gateway make this possible for the customers to pay their shopping or purchasing bills through the digital payments by using their cards or online banking options. Payment gateways help in making the online transactions across the world. It works as middle man between banks and merchandisers.
                </p>
                <p className="font-semibold text-gray-800">
                  We ensure the successful integration of payment gateways so that customers can have smooth and secure transactions.
                </p>
                <p>
                  Payment gateway integration is the e-commerce service which allows the customers to make secure payments for e- businesses, online retailers after placing order without any interruption while paying. It is the typical way of making digital payment trough the online transactions from the various banks to the merchandisers or owner of websites. Flymedia Technology offers the effective payment gateway integration company in Ludhiana, Punjab for website portal development.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Phone Mockup Image */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-[420px] aspect-[4/5] drop-shadow-2xl"
              >
                <Image
                  src="/PAYE.png"
                  alt="Effective Payment Gateway Mockup"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: What We Offer */}
      <section className="bg-[#F1F1F1] py-20 md:py-10 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#111111] mb-4">
            What We Offer?
          </h2>
          <p className="text-gray-600 text-sm md:text-[15px] font-medium max-w-2xl mx-auto mb-16">
            There are various gateways for making payments that can be integrated in the portal for online transactions as follows
          </p>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto justify-items-center items-center">
            {offerLogos.map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Specialties */}
      <section className="bg-[#F1F1F1] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-[50px] font-serif font-bold text-black">
              Our Specialties
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-6 text-gray-700 text-base md:text-[17px] leading-relaxed">
            <p>
              Fly Media have professional developers that strives for implementing advanced features and supported applications to build a payment gateway portal which is widely used by B2B and B2C industry so that customers can have smooth and secure online transactions which add to their experience and helps to retain them for the particular website.
            </p>
            <p>
              Our programmers are well acquainted and experienced in integrating payment gateways with their APIs so that customers can make easy and secure payments through their credit/debit cards or the other options like net banking. We integrate the gateways with the advanced technologies that facilitate smooth transactions and better user experience.
            </p>
            <p>
              Our skilled and professional team ensures the development of fascinating websites for online transactions in these technically advanced digital markets. We ensure the gateway integration for mode of all online transactions for your web portal.
            </p>
            <p>
              Our payment gateway integration services ensure the integration of gateways for
            </p>
            <ul className="list-disc pl-6 space-y-2.5 text-gray-700 text-base md:text-[17px]">
              <li>Shopping carts</li>
              <li>Static and dynamic websites</li>
              <li>Secure robust online payments</li>
              <li>Online tracking systems</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
