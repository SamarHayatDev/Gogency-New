import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import React from "react";

const ConsultantReport = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl mb-2">
        Consultant Activity Report​
      </h2>
      <p className="paraheading">
        Track and analyze consultant performance with detailed activity insights
        for better efficiency and transparency.
      </p>
      <div>
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/Images/hero.jpg"
            alt="Image"
            fill
            className="rounded-md object-contain"
          />
        </AspectRatio>
      </div>
    </section>
  );
};

export default ConsultantReport;
