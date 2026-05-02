import ServicePage from "@/components/ServicePage";

export default function AboutUs() {
  const data = {
    title: "About Us | Flymedia Technology",
    h1: ["The Most Credible Best IT Company in Ludhiana Since 2011"],
    paragraphs: [
      "Welcome to Flymedia Technology. We are the top digital marketing agency in Ludhiana. We are always ready for your assistance. Our professionals create your digital strategy and then our developers, designers and SEO experts perform it accurately. We are consistently working hard since 2011 to provide our clients with the best digital marketing, Web development and Website designing services.",
      "Ludhiana is a manufacturing hub for textiles, hosiery and cycle parts, and it is situated in the state of Punjab. It is the industrial capital of Punjab. After seeing the scenario of industrial development, Flymedia Technology was started in the year 2011. Since its inception the firm has consistently worked hard and developed into the most credible name in the field of IT in Ludhiana, Punjab.",
      "The dedicated and committed team of Flymedia Technology is well versed in providing high quality and cost-effective IT solutions. We take care of our clients and provide them with the best services. Our goal is to satisfy our customers and provide them with the best output. We are always ready to face the new challenges and convert them into opportunities.",
    ],
    mainContent: "The Most Credible Best IT Company in Ludhiana Since 2011\n\nWelcome to Flymedia Technology...",
    images: new Array(40).fill(""), // Placeholder for the length, the component will map them
    folderName: "flymediatech.com__about-us"
  };

  return <ServicePage {...data} />;
}
