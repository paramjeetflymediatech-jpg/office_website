import ServicePage from "@/components/ServicePage";
import WebDesignPricingTable from "@/components/WebDesignPricingTable";

export default function WebDesignPackages() {
  const data = {
    title: "Website Designing Packages India | Flymedia Technology",
    h1: ["Web Design"],
    paragraphs: [
      "Elevate your online presence with our premium web design packages. We create stunning, fast, and responsive websites tailored to engage your audience and drive business growth.",
    ],
    images: [],
    folderName: "flymediatech.com__website-designing-packages-india"
  };

  return (
    <ServicePage {...data} bgClass="bg-[#F1F1F1]">
      <div className="pt-12 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">
          Web Design
        </h1>
        <div className="h-1.5 w-24 bg-[#ff9900] rounded-full mx-auto"></div>
      </div>
      
      <div className="pb-24">
        <WebDesignPricingTable />
      </div>
    </ServicePage>
  );
}
