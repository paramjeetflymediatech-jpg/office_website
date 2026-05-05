import ServicePage from "@/components/ServicePage";
import SEOPricingTable from "@/components/SEOPricingTable";

export default function SEOPackages() {
  const data = {
    title: "SEO Packages India | Flymedia Technology",
    h1: ["SEO Services"],
    paragraphs: [
      "Dominate search engine rankings with our proven SEO packages. We deliver targeted strategies to increase your visibility, drive organic traffic, and boost your business growth.",
    ],
    images: [],
    folderName: "flymediatech.com__seo-packages-india"
  };

  return (
    <ServicePage {...data} bgClass="bg-[#F1F1F1]">
      <div className="pt-12 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">
          SEO Packages
        </h1>
        <div className="h-1.5 w-24 bg-[#ff9900] rounded-full mx-auto"></div>
      </div>
      
      <div className="pb-24">
        <SEOPricingTable />
      </div>
    </ServicePage>
  );
}
