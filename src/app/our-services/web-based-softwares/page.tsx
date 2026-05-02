import ServicePage from "@/components/ServicePage";

export default function WebBasedSoftwares() {
  const data = {
    title: "Web Based Software Development Company in Ludhiana, Punjab, India",
    h1: ["Web Based Software’s Provide You Many Benefits Like:"],
    paragraphs: [
      "Software used on the internet via a web browser is web software’s. For such software’s you do not require any CDs and neither do you have to download any software from the net. If you are thinking this is a new technology well, be amazed because most of you have almost used them. Yahoo Mail, Gmail, Twitter, Face book and Hotline are some of the most widely used web based software’s.",
      "With Web Based Software Development Services you get software’s that do not require to be installed or maintained. They can be used on any device with net connection and they provide data storage and most of all important they are secure for your data even, personal.",
      "Our team of experts can develop custom web-based software tailored specifically to your business processes, helping you improve efficiency, reduce costs, and access your data from anywhere in the world.",
    ],
    mainContent: "Web Based Software’s Provide You Many Benefits Like:\nSaves time as you always get to use the latest version.\nSaves you from long downloading.\nSaves you money as you do not have to buy new CDs or programs...",
    images: new Array(40).fill(""),
    folderName: "flymediatech.com__our-services_web-based-softwares"
  };

  return <ServicePage {...data} />;
}
