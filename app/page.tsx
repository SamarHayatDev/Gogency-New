import BentoGrid from "@/components/BentoGrid";
import ConsultantReport from "@/components/ConsultantReport";
import Faqs from "@/components/Faqs";
import Features from "@/components/Features";

import Hero from "@/components/Hero";
import InquiryManagment from "@/components/InquiryManagment";
import SoftwareIntegration from "@/components/SoftwareIntegration";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <SoftwareIntegration />
      <ConsultantReport />
      <InquiryManagment />
      <BentoGrid />
      <Faqs />
    </>
  );
}
