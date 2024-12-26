import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  return (
    <main className="container mx-auto max-w-screen-lg px-4 py-12">
      <div className="w-full">
        <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Gogency is a purpose-built tool for automation in traveling
          management.
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl mt-4 my-2">
          Streamline your travel agency: automate follow-ups, customize easily,
          and optimize marketing and build brands on the go.
        </p>
        <div className="flex justify-start gap-4">
          <Button size="lg">
            Get Started
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
      <div className="mt-8">
        {/* transform -rotate-3 */}
        <div className="w-full ">
          {" "}
          {/* Added rotation here */}
          <AspectRatio ratio={16 / 9}>
            <Image
              src="/Images/hero.jpg"
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
