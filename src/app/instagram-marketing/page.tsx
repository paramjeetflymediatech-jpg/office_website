import ServicePage from "@/components/ServicePage";

export default function InstagramMarketing() {
  return (
    <ServicePage
      title="Instagram Marketing Services"
      h1={["Instagram", "Marketing"]}
      paragraphs={[
        "Elevate your brand with our professional Instagram marketing services. We help you leverage visual storytelling to engage your audience and build a loyal community.",
        "Our services include content strategy, creative design, hashtag optimization, and influencer collaborations to ensure your brand shines on one of the world's most popular social platforms."
      ]}
      folderName="flymediatech.com_home"
      images={["social-media-icon.png"]}
    />
  );
}
