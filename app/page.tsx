import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import InquiryManagment from "@/components/InquiryManagment";
import KeyFeatures from "@/components/KeyFeatures";

import SoftwareIntegration from "@/components/SoftwareIntegration";
import Testimonials from "@/components/Testimonials";
import WhyGogency from "@/components/WhyGogency";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyGogency />
      <KeyFeatures />
      <SoftwareIntegration />
      <InquiryManagment />
      <Testimonials />
      <HowItWorks />
      <Faqs />
    </>
  );
}
