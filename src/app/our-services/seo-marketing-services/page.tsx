import ServicePage from "@/components/ServicePage";
import SEOSection from "@/components/SEOSection";
import ContactFormSection from "@/components/ContactFormSection";

export default function SEOMarketing() {
  const data = {
    title: "Best SEO Marketing Company in Ludhiana, Punjab, India",
    h1: ["SEO Marketing Services - Driving Revenue Through Discovery"],
    paragraphs: [
      "Flymedia Technology offers the best SEO services in India, Australia, and all across the sphere. Being the leading SEO service provider, online visibility has increased along with ROI.",
    ],
    images: [],
    folderName: "flymediatech.com__our-services_seo-marketing-services"
  };

  return (
    <ServicePage {...data}>
      <SEOSection />
      <ContactFormSection />
    </ServicePage>
  );
}
