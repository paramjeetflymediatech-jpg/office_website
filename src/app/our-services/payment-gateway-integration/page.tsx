import ServicePage from "@/components/ServicePage";
import PaymentGatewaySection from "@/components/PaymentGatewaySection";
import ContactFormSection from "@/components/ContactFormSection";

export default function PaymentGateway() {
  const data = {
    title: "Best Payment Gateway Integration Services in Ludhiana, Punjab, India",
    h1: ["Payment Gateway", "Integration"],
    paragraphs: [
      "Payment gateway is the service that autherise and facilitates the payment through cards like credit or debit and even through online banking. It basically works as middleman between bank and merchandiser’s site or mobile application.",
      "With the passage of time various payment gateways are making space in the online markets. Here is the list of few popular ones according to the major countries in the world."
    ],
    images: [],
    folderName: "flymediatech.com__our-services_payment-gateway-integration"
  };

  return (
    <ServicePage {...data}>
      <PaymentGatewaySection />
      <ContactFormSection />
    </ServicePage>
  );
}
