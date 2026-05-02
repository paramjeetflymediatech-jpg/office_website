import ServicePage from "@/components/ServicePage";

export default function PayPerClick() {
  const data = {
    title: "Google Adwords (PPC) Marketing Company in Ludhiana, Punjab, India",
    h1: ["Pay Per Click Campaigning Company India- High Quality Result Oriented Services"],
    paragraphs: [
      "Pay per click is a paid search engine marketing technique that is designed for receiving instant web traffic. In this method of marketing you pay search engine only when someone clicks on your ad.",
      "The expert professionals are completely aware of performance, service and complications of every platform and can assure that your app is exclusive and outstanding on every gadget.",
      "With high ROI and instant visibility, PPC is the fastest way to get your business in front of the right audience at the right time. Our team manages every aspect of your campaigns, from keyword bidding to ad copy and landing page optimization.",
    ],
    mainContent: "Pay Per Click Campaigning Company India...\n\nWhy choose us for PPC?...",
    images: new Array(40).fill(""),
    folderName: "flymediatech.com__pay-per-click-ppc"
  };

  return <ServicePage {...data} />;
}
