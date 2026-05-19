import ServicePage from "@/components/ServicePage";
import MobileAppsSection from "@/components/MobileAppsSection";
import ContactFormSection from "@/components/ContactFormSection";

export default function MobileAppsDevelopment() {
  const data = {
    title: "Best Mobile App Development Company in Ludhiana, Punjab, India",
    h1: ["Mobile App Designing - Creating Stunning Designs & Intelligent Usability"],
    paragraphs: [
      "Creating stunning designs & intelligent usability and create organizational efficiencies.",
    ],
    images: [],
    folderName: "flymediatech.com__mobile-apps-development"
  };

  return (
    <ServicePage {...data}>
      <MobileAppsSection />
      <ContactFormSection />
    </ServicePage>
  );
}
