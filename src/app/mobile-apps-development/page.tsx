import ServicePage from "@/components/ServicePage";

export default function MobileAppsDevelopment() {
  const data = {
    title: "Best Mobile App Development Company in Ludhiana, Punjab, India",
    h1: ["Mobile App Designing - Creating Stunning Designs & Intelligent Usability"],
    paragraphs: [
      "Do you have any theme for your app that you need to begin to move to the next level, it is called an app design. An attractive app design definitely draws visitors and makes them your users.",
      "Get customized android app development India for customized app look with better option to develop an exclusive app for you and users than those traditional app designers and developers.",
      "Our team of expert developers is skilled in both iOS and Android platforms, ensuring that your app provides a consistent and high-quality experience across all mobile devices.",
    ],
    mainContent: "Mobile App Designing...\n\nEvery factor is customized to ensure the complete uniqueness at all hooks and corners...",
    images: new Array(40).fill(""),
    folderName: "flymediatech.com__mobile-apps-development"
  };

  return <ServicePage {...data} />;
}
