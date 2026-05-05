import ServicePage from "@/components/ServicePage";
import LogoPricingTable from "@/components/LogoPricingTable";

export default function LogoDesignPackages() {
  return (
    <ServicePage
      title="Logo Design Packages India | Flymedia Technology"
      h1={["Logo Design", "Packages"]}
      paragraphs={[
        "Choose from our range of professional logo design packages in India. We offer tailored solutions for startups and established businesses to create a unique and memorable brand identity.",
        "Our packages include multiple design concepts, revisions, and high-resolution deliverables, ensuring you get a logo that perfectly represents your business values and vision."
      ]}
      folderName="flymediatech.com_home"
      images={["logo-design.png"]}
      bgClass="bg-[#F1F1F1]"
    >
      <div className="pt-12 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">
          Logo Design
        </h1>
        <div className="h-1.5 w-24 bg-[#ff9900] rounded-full mx-auto"></div>
      </div>
      
      <div className="pb-24">
        <LogoPricingTable />
      </div>
    </ServicePage>
  );
}
