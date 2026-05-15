"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, CreditCard, Zap, ChevronRight } from "lucide-react";

export default function PaymentGatewaySection() {
  const regions = [
    {
      name: "TOP 10 PAYMENT GATEWAYS FOR INDIA",
      gateways: [
        "2Checkout", "CCAvenue", "Citrus Payments", "EBS", "MasterCard Payment Gateway Services",
        "NETbilling", "PayDollar", "PayPal Express Checkout", "PayU India and PayU Money", 
        "Razorpay (All Cards, NetBanking, Wallets)"
      ],
      color: "bg-orange-50"
    },
    {
      name: "POPULAR PAYMENT GATEWAYS FOR UK",
      gateways: [
        "2Checkout", "Alipay Global", "Amazon Payments", "Authorize.net", "PaymentExpress",
        "PaymentSense", "PAYMILL", "PayPal Express Checkout", "PayPal Website Payments Pro (UK)",
        "PayVector (formerly Iridium)", "QuickPay", "Realex", "Realex Payments (Offsite)",
        "SagePay", "SagePay Form", "Shopify Payments", "SOFORT Banking (DIRECTebanking)",
        "WorldPay (Direct)", "WorldPay (Offsite)"
      ],
      color: "bg-red-50"
    },
    {
      name: "PAYMENT GATEWAYS FOR AUSTRALIA",
      gateways: [
        "2Checkout", "G2A Pay", "GoCoin", "IP Payments", "LAY-BUY Powered by PayPal",
        "MasterCard Payment Gateway Services", "MOLPay", "NETbilling", "NetRegistry",
        "Payment Express PxPay", "PaymentExpress", "POLi Internet Banking", "SecurePay (Australia)",
        "Shopify Payments", "WorldPay (Direct)"
      ],
      color: "bg-green-50"
    },
    {
      name: "MAJOR PAYMENT GATEWAYS IN CANADA",
      gateways: [
        "2Checkout", "Alipay Global", "Authorize.net", "Beanstream", "BitPay",
        "Chase Paymentech (Orbital)", "Coinbase", "CyberSource", "GoCoin", "IATS Payments",
        "Ignite Payments", "LAY-BUY Powered by PayPal", "Moneris", "MultiSafepay",
        "NETbilling", "Network Merchants (NMI)", "Optimal Payments", "PayPal Express Checkout",
        "PayPal Payflow Pro", "PayPal Website Payments Pro (CA)"
      ],
      color: "bg-blue-50"
    }
  ];

  return (
    <div className="space-y-24 pb-24">

      {/* Section 2: Regional Gateways */}
      <section className="bg-[#F1F1F1] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">Payment Gateway Integration</h2>
            <p className="text-gray-600 max-w-7xl mx-auto">Payment gateway is the service that autherise and facilitates the payment through cards like credit or debit and even through online banking. It basically works as middleman between bank and merchandiser’s site or mobile application.</p>
            <p className="text-gray-600 max-w-7xl mx-auto">With the passage of time various payment gateways are making space in the online markets. Here is the list of few popular ones according to the major countries in the world.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`${region.color} p-8 rounded-sm shadow-sm hover:shadow-xl transition-all h-full flex flex-col`}
              >
                <h3 className="text-2xl font-serif font-bold text-black mb-6 border-b-2 border-black/10 pb-2">
                  {region.name}
                </h3>
                <ul className="space-y-4 flex-grow">
                  {region.gateways.map((gw, gIdx) => (
                    <li key={gIdx} className="flex items-center gap-3 text-gray-700 font-medium">
                      <ChevronRight className="w-4 h-4 text-[#ff9900]" />
                      {gw}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Call to Action */}
      {/* <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="bg-black text-white p-12 rounded-sm shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff9900] opacity-10 blur-3xl"></div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to start accepting payments?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
            Our experts will help you choose the right gateway and handle the entire integration process from A to Z.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ff9900] text-black px-12 py-5 font-black uppercase tracking-tighter rounded-sm hover:bg-white transition-all shadow-2xl"
          >
            Get Integrated Now
          </motion.button>
        </div>
      </section> */}
    </div>
  );
}
