// import Faqs from "@/components/Faqs";
import PricingTab from "@/components/PricingTab";
import { Metadata } from "next";
// import Testimonials from "@/components/Testimonials";
import React from "react";
export const metadata: Metadata = {
  title: "Gogency - Pricing",
  description: "Pricing for Gogency Packages",
};

const Pricing = () => {
  return (
    <>
      <PricingTab />
      {/* <Testimonials /> */}
      {/* <Faqs /> */}
    </>
  );
};

export default Pricing;
