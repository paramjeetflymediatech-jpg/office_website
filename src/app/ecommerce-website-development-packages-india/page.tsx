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
      <div className="pt-12 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">
          Ecommerce Website Development
        </h1>
        <div className="h-1.5 w-24 bg-[#ff9900] rounded-full mx-auto"></div>
      </div>
      <EcommercePackagesSection />
      <EcommercePricingTable />
      <EcommercePostPricingSection />
    </ServicePage>
  );
}
