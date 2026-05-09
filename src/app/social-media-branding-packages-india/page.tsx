import ServicePage from "@/components/ServicePage";
import SocialBrandingIntroSection from "@/components/SocialBrandingIntroSection";
import SocialBrandingPricing from "@/components/SocialBrandingPricing";
import SocialBrandingPostPricingSection from "@/components/SocialBrandingPostPricingSection";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 1: Introduction Matrix */}
        <SocialBrandingIntroSection />
        
        {/* Section 2: Luxury Pricing Matrix */}
        <div className="py-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-serif font-black text-black">Branding Investment Packages</h3>
            <div className="h-1 w-16 bg-[#ff9900] rounded-full mx-auto mt-2"></div>
          </div>
          <SocialBrandingPricing />
        </div>

        {/* Section 3: Strategic Platform Matching & Pillars */}
        <SocialBrandingPostPricingSection />
      </div>
    </ServicePage>
  );
}
