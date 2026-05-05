import ServicePage from "@/components/ServicePage";
import PaymentGatewaySection from "@/components/PaymentGatewaySection";

export default function PaymentGateway() {
  const data = {
    title: "Best Payment Gateway Integration Services in Ludhiana, Punjab, India",
    h1: ["Payment Gateway Integration - Secure & Smooth Transactions"],
    paragraphs: [
      "We provide expert payment gateway integration services for India, USA, UK, and Australia. Our solutions ensure your e-commerce site is ready to handle global payments securely.",
    ],
    images: [],
    folderName: "flymediatech.com__our-services_payment-gateway-integration"
  };

  return (
    <ServicePage {...data}>
      <PaymentGatewaySection />
    </ServicePage>
  );
}
