import ServicePage from "@/components/ServicePage";

export default function HowWeWork() {
  const data = {
    title: "How We Work | Flymedia Technology",
    h1: ["Our Strategic Workflow For Your Success"],
    paragraphs: [
      "At Flymedia Technology, our process is designed to be transparent, efficient, and result-oriented. We start with a deep dive into your business objectives to ensure every line of code and every design choice aligns with your goals.",
      "Our multi-phase approach includes Discovery, Planning, Design, Development, and rigorous Testing. We believe in keeping you in the loop at every stage, providing regular updates and seeking your feedback to ensure the final product exceeds your expectations.",
      "Post-launch, we don't just walk away. We provide ongoing support and maintenance to ensure your digital assets continue to perform at their peak in an ever-evolving digital landscape.",
    ],
    mainContent: "Our Strategic Workflow For Your Success\n\nDiscovery Phase...\nPlanning Phase...",
    images: new Array(40).fill(""),
    folderName: "flymediatech.com__how-we-work"
  };

  return <ServicePage {...data} />;
}
