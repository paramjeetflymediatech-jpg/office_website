import ServicePage from "@/components/ServicePage";

export default function SocialMediaOptimization() {
  const data = {
    title: "Best Social Media Optimization (SMO) Company in Ludhiana, Punjab, India",
    h1: ["Social Media Optimization India - Connect With Your Audience"],
    paragraphs: [
      "Social media optimization (SMO) is the use of a number of social media outlets and communities to generate publicity to increase the awareness of a product, brand or event.",
      "Since 2011, we have been helping businesses build a strong social presence. We handle everything from profile creation to content scheduling and community engagement.",
      "Our SMO strategies are designed to foster loyalty and drive word-of-mouth marketing. We ensure your brand remains relevant and active on platforms like Facebook, Instagram, LinkedIn, and Twitter.",
    ],
    mainContent: "Social Media Optimization India...\n\nPlatforms we cover...",
    images: new Array(40).fill(""),
    folderName: "flymediatech.com__social-media-optimization"
  };

  return <ServicePage {...data} />;
}
