import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

const InquiryManagment = () => {
  return (
    <section className="container mx-auto max-w-screen-lg px-4 py-12">
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl mb-2">
        Efficient inquiry management​
      </h2>
      <p className="max-w-[800px] text-muted-foreground md:text-xl mt-4 my-2 mb-4">
        Explore our versatile inquiry dashboard: effortlessly track, manage, and
        respond to customer requests.
      </p>
      <div>
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/home/inqManagement.webp"
            alt="Image"
            fill
            className="rounded-md object-contain"
          />
        </AspectRatio>
      </div>
    </section>
  );
};

export default InquiryManagment;
