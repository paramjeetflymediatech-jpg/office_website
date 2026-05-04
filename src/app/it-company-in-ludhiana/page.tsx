import ServicePage from "@/components/ServicePage";

export default function ITCompany() {
  const data = {
    title: "Best IT Company in Ludhiana - IT Companies Jobs Punjab | Flymedia Technology",
    h1: ["Best IT Company in Ludhiana"],
    paragraphs: [
      "Flymedia Technology is consistently working hard to provide its clients with the best digital marketing, Web development and Website designing services. It is because of the support of our clients that we are in the league apart and come up as the best IT company in Ludhiana.",
      "We do have an experienced team of qualified & proficient web developers, Graphic designers, Content writers and Search engine optimization executives who are specialized in the performance of their respective services.",
      "Whether it is search engine optimization, social media marketing, or custom web development, our team corroborates to make your name visible each time the user is active on search engines.",
    ],
    mainContent: "Best IT Company in Ludhiana\n\nWhat we are expert at?...",
    images: [
      "it.png", "web-develop-1.png", "digital-consultancy-icon.png", "SEO.png", 
      "Pay-per-click111.png", "mobile-marketing-1.png", "logo-design.png", 
      "ecommerce.png", "contentr.png", "r06.png", "r11-1.png", "r09.png"
    ],
    folderName: "flymediatech.com__it-company-in-ludhiana"
  };

  return <ServicePage {...data} />;
}
