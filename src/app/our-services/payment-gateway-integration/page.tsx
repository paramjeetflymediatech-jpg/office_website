import ServicePage from "@/components/ServicePage";

export default function PaymentGateway() {
  const data = {
    title: "Best Payment Gateway Integration Services in Ludhiana, Punjab, India",
    h1: ["The Best Payment Gateway Integration in Ludhiana Since 2011"],
    paragraphs: [
      "Securing your online transactions is our top priority. We provide seamless and secure payment gateway integration services for your e-commerce website or web application. Whether you need PayPal, Stripe, Razorpay, or custom local gateways, we have the expertise to implement them correctly.",
      "Since 2011, we have helped numerous businesses enable online payments safely and efficiently. Our team ensures that the integration is PCI compliant and provides a smooth checkout experience for your customers.",
      "We handle everything from API integration to real-time transaction monitoring and automated receipt generation. Let us take the complexity out of online payments so you can focus on growing your business.",
    ],
    mainContent: "The Best Payment Gateway Integration in Ludhiana Since 2011\n\nSupported Gateways...",
    images: new Array(40).fill(""),
    folderName: "flymediatech.com__our-services_payment-gateway-integration"
  };

  return <ServicePage {...data} />;
}
