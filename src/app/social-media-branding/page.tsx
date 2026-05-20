import ServicePage from "@/components/ServicePage";
import SocialBrandingPricing from "@/components/SocialBrandingPricing";

export default function SocialBrandingPackages() {
  const data = {
    title: "Social Media Branding Packages India | Flymedia Technology",
    h1: ["Social Media Branding", "Amplify Your Presence"],
    paragraphs: [
      "Amplify your brand's voice across all major social networks with our comprehensive branding packages. We help you create a consistent and professional image that resonates with your audience.",
    ],
    images: [],
    folderName: "flymediatech.com__social-media-branding-packages-india"
  };

  return (
    <ServicePage {...data}>
      {/* Section 2: Luxury Pricing Matrix */}
      <SocialBrandingPricing />
    </ServicePage>
  );
}
