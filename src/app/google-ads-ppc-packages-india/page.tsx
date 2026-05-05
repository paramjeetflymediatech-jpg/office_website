import ServicePage from "@/components/ServicePage";
import PPCPricingTable from "@/components/PPCPricingTable";

export default function PPCManagementPackages() {
  const data = {
    title: "Google Ads PPC Packages India | Flymedia Technology",
    h1: ["PPC Management"],
    paragraphs: [
      "Maximize your ROI with our expert Pay-Per-Click management services. We create targeted, high-performing Google Ads campaigns designed to drive immediate traffic and conversions.",
    ],
    images: [],
    folderName: "flymediatech.com__google-ads-ppc-packages-india"
  };

  return (
    <ServicePage {...data} bgClass="bg-[#F1F1F1]">
      <div className="pt-12 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">
          PPC Management
        </h1>
        <div className="h-1.5 w-24 bg-[#ff9900] rounded-full mx-auto"></div>
      </div>
      <div className="pb-24">
        <PPCPricingTable />
      </div>
    </ServicePage>
  );
}
