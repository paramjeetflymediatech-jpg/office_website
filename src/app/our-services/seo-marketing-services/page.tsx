import ServicePage from "@/components/ServicePage";

export default function SEOMarketing() {
  const data = {
    title: "Best SEO Marketing Company in Ludhiana, Punjab, India",
    h1: ["The Best SEO Marketing Services in Ludhiana Since 2011"],
    paragraphs: [
      "Maximum organic traffic is what makes you rank higher. Our team of SEO corroborates to make your name visible each time the user is active on search engines. We use proven, white-hat SEO techniques to improve your search visibility and drive qualified leads.",
      "Since 2011, Flymedia Technology has helped hundreds of businesses dominate search results. We provide comprehensive SEO audits, keyword research, on-page optimization, and high-quality link building services.",
      "Our SEO strategies are data-driven and focused on long-term growth. We keep up with the latest search engine algorithm updates to ensure your website maintains its competitive edge.",
    ],
    mainContent: "The Best SEO Marketing Services in Ludhiana Since 2011\n\nOur SEO process includes...",
    images: new Array(40).fill(""),
    folderName: "flymediatech.com__our-services_seo-marketing-services"
  };

  return <ServicePage {...data} />;
}
