import AboutHero from "@/components/AboutHero";
import Faqs from "@/components/Faqs";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Gogency - About",
  description: "Learn more about Gogency",
};
const About = () => {
  return (
    <>
      <AboutHero />
      <Testimonials />
      <Faqs />
    </>
  );
};

export default About;
