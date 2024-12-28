"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

// Updated integrations array with image sources
const integrations = [
  {
    name: "Sabre",
    imageSrc: "/apicons/Sabre.png", // Use actual image paths
    description:
      "A trusted partner connecting you to a global travel marketplace with advanced technology solutions.",
  },
  {
    name: "Stripe",
    imageSrc: "/apicons/stripe.png",
    description:
      "A secure and scalable platform for payment processing, ideal for online transactions and commerce needs.",
  },
  {
    name: "Gmail",
    imageSrc: "/apicons/gmail.png",
    description:
      "Simplify communication with Gmail's robust email platform, seamlessly integrated for business use.",
  },
  {
    name: "WhatsApp",
    imageSrc: "/apicons/whatsapp.png",
    description:
      "Enhance customer engagement and support with real-time messaging through WhatsApp integration.",
  },
  {
    name: "Travelport",
    imageSrc: "/apicons/travelport.png",
    description:
      "Access a wide range of travel products and services through Travelport's modern commerce platform.",
  },
  {
    name: "Amadeus",
    imageSrc: "/apicons/amadeus.png",
    description:
      "Empower your travel business with innovative tools for booking and travel management solutions.",
  },
];

const SoftwareIntegration = () => {
  return (
    <section>
      <h2>Software Integrations</h2>
      <p className="paraheading">
        Gogency integrates with industry-leading software and tools to ensure
        your business operates smoothly and efficiently.
      </p>
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent className="-ml-1 h-full">
          {integrations.map((integration, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 gap-4 lg:basis-1/3 xl:basis-1/4 self-stretch"
            >
              <div className="p-1 self-stretch">
                <Card className="flex flex-col self-stretch bg-slate-800/10 dark:bg-gray-100/10">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center flex-grow">
                    <div className={`mb-4 p-2 rounded-full`}>
                      {/* Replacing icon with image */}
                      <Image
                        src={integration.imageSrc}
                        alt={integration.name}
                        width={48}
                        height={48}
                        className="h-12 w-12 dark:text-gray-100 text-gray-900"
                      />
                    </div>
                    <h3 className="text-lg font-semibold">
                      {integration.name}
                    </h3>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
};

export default SoftwareIntegration;
