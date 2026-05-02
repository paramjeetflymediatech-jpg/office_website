import ServicePage from "@/components/ServicePage";

export default function ContentWriting() {
  const data = {
    title: "High Quality SEO Content Writing Services in Ludhiana, Punjab, India",
    h1: ["Content Writing Services- Increase Roi From Your Website"],
    paragraphs: [
      "Considering the challenges in the website promotion, content strategy is one of the main aspects that are valuable for your target audient to make them return on your website again and again. Therefore web content services India are prepared including the diversity of techniques.",
      "Content creation is a strong strategy for the success of any website. In the companies that have a controlled budget and staff, content development usually goes down or rendered to the marketers who already have full hands. Content marketing is not a part time work, to create a winning content strategy, you need expert web content writing team to publish regularly and keep engage your buyers and customers.",
      "Undoubtedly a strong, unique and relevant content makes your site to stand apart from the ocean of websites under same niche. Posting engaging and search engine friendly content helps in boosting our website’s rank effectively as well as bring your readers and customers back.",
    ],
    mainContent: "Content Writing Services- Increase Roi From Your Website\n\nConsidering the challenges in the website promotion...",
    images: new Array(40).fill(""),
    folderName: "flymediatech.com__content-writing"
  };

  return <ServicePage {...data} />;
}
