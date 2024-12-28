import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  return (
    <main className="container mx-auto max-w-screen-lg px-4 py-12">
      <div className="w-full">
        <h1>.Automate, Scale, Succeed</h1>
        <p className="paraheading">
          Redefining Business Management across Industries.
          <br /> Your all-in-one solution to automate operations, maximize
          profits, and scale effortlessly
        </p>
        <div className="flex justify-start gap-4 mt-4">
          <Button size="lg">
            Get Started
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          {/* <Button variant="outline" size="lg">
            Learn More
          </Button> */}
        </div>
      </div>
      <div className="mt-8">
        {/* transform -rotate-3 */}
        <div className="w-full ">
          {" "}
          {/* Added rotation here */}
          <AspectRatio ratio={16 / 8}>
            <Image
              src="/dummy.jpg"
              fill
              alt="Image"
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </main>
  );
};

export default Hero;
