"use client";

import React from "react";
import ServicePage from "@/components/ServicePage";
import WebSoftwareSection from "@/components/WebSoftwareSection";
import ContactFormSection from "@/components/ContactFormSection";

// --- Main Page ---
export default function WebBasedSoftwares() {
  const data = {
    title: "Web Based Software Development Company in Ludhiana, Punjab, India",
    h1: ["Web Based Software Development - Modern Solutions for Modern Business"],
    paragraphs: [
      "Software used on the internet via a web browser is web software’s. For such software’s you do not require any CDs and neither do you have to download any software from the net.",
    ],
    images: [],
    folderName: "flymediatech.com__our-services_web-based-softwares"
  };

  return (
    <ServicePage {...data}>
      <WebSoftwareSection />
      <ContactFormSection />
    </ServicePage>
  );
}
