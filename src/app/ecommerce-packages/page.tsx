import ServicePage from "@/components/ServicePage";
import EcommercePackagesSection from "@/components/EcommercePackagesSection";
import EcommercePricingTable from "@/components/EcommercePricingTable";
import EcommercePostPricingSection from "@/components/EcommercePostPricingSection";

export default function EcommercePackages() {
  const data = {
    title: "Ecommerce Website Development Packages India | Flymedia Technology",
    h1: ["Ecommerce Website Development - Grow Your Business Online"],
    paragraphs: [
      "Transform your retail business with our high-performance ecommerce solutions. We build secure, scalable, and user-friendly online stores that drive sales and expand your reach.",
    ],
    images: [],
    folderName: "flymediatech.com__ecommerce-website-development-packages-india"
  };

  return (
    <ServicePage {...data} bgClass="bg-[#F1F1F1]">
      <EcommercePackagesSection />
      <EcommercePricingTable />
      <EcommercePostPricingSection />
    </ServicePage>
  );
}
