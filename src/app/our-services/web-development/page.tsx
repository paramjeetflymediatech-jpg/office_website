import ServicePage from "@/components/ServicePage";

export default function WebDevelopment() {
  const data = {
    title: "Best Web Development Company in Ludhiana, Punjab, India",
    h1: ["The Best Web Development Company in Ludhiana Since 2011"],
    paragraphs: [
      "Welcome to Flymedia Technology. We are the top web development agency in Ludhiana. Our expert developers are proficient in the latest technologies to build robust, scalable, and secure web applications tailored to your business needs.",
      "Since 2011, we have been delivering high-performance websites that drive growth and enhance user engagement. From custom CMS to complex e-commerce platforms, we handle it all with precision and care.",
      "Our development process focuses on clean code, site performance, and security. We ensure that your website not only looks great but also functions flawlessly under high traffic conditions.",
    ],
    mainContent: "The Best Web Development Company in Ludhiana Since 2011\n\nOur Expertise includes...",
    images: new Array(40).fill(""),
    folderName: "flymediatech.com__our-services_web-development"
  };

  return <ServicePage {...data} />;
}
