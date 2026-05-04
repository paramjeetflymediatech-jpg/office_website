import ServicePage from "@/components/ServicePage";

export default function CMSForWebsite() {
  return (
    <ServicePage
      title="CMS For Website Development"
      h1={["CMS For", "Website"]}
      paragraphs={[
        "Our custom CMS solutions empower you to manage your website content with ease. We build intuitive, secure, and flexible content management systems tailored to your specific business workflow.",
        "Whether you need a simple blog or a complex enterprise portal, our CMS platforms provide the tools you need to keep your digital presence fresh and engaging without technical expertise."
      ]}
      folderName="flymediatech.com_home"
      images={["r05.png"]}
    />
  );
}
