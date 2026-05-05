import ServicePage from "@/components/ServicePage";
import DigitalMarketingSection from "@/components/DigitalMarketingSection";
import SocialMediaPricingTable from "@/components/SocialMediaPricingTable";

export default function DigitalMarketing() {
  return (
    <ServicePage
      title="Digital Marketing Services in India"
      h1={["Digital Marketing", "Services"]}
      paragraphs={[]}
      folderName="flymediatech.com_home"
      images={["digital-consultancy-icon.png"]}
    >
      <DigitalMarketingSection />
      <SocialMediaPricingTable />
    </ServicePage>
  );
}
