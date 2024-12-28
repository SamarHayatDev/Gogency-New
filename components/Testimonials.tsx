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

const testimonials = [
  {
    username: "John Doe",
    rating: 5,
    testimonial:
      "Gogency has transformed the way we manage our travel bookings. The integration was seamless, and the support team is excellent!",
  },
  {
    username: "Jane Smith",
    rating: 4,
    testimonial:
      "The platform's ease of use and powerful integrations have helped us save countless hours. Highly recommended!",
  },
  {
    username: "Michael Brown",
    rating: 5,
    testimonial:
      "Amazing experience! The tools provided are top-notch and have significantly improved our team's efficiency.",
  },
  {
    username: "Emily Davis",
    rating: 4,
    testimonial:
      "Gogency's integrations are a game-changer for our operations. We can now focus on growing our business rather than managing logistics.",
  },
  {
    username: "Chris Johnson",
    rating: 5,
    testimonial:
      "Fantastic platform! The user interface is intuitive, and the customer support is always there when we need them.",
  },
];

const Testimonials = () => {
  return (
    <section>
      <h2>What Our Clients Say</h2>
      <p className="paraheading">
        Hear from our satisfied clients about how Gogency has helped their
        businesses thrive.
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
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="pl-1 lg:basis-1/2 xl:basis-1/3 self-stretch"
            >
              <div className="p-1 h-full">
                <Card className="flex flex-col h-full bg-slate-800/10 dark:bg-gray-100/10">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center flex-grow">
                    <h3 className="text-lg font-semibold mb-2">
                      {testimonial.username}
                    </h3>
                    <div className="flex mb-2">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className={`mx-1 ${
                            starIndex < testimonial.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      &quot;{testimonial.testimonial}&quot;
                    </p>
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

export default Testimonials;
