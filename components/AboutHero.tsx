import React from "react";
import Image from "next/image";

const AboutHero = () => {
  return (
    <main className="container mx-auto max-w-screen-lg px-4 py-12">
      <div className="w-full">
        <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          We are small but grand ambitious
        </h1>
        <p className="max-w-[800px] text-muted-foreground md:text-xl mt-4 my-2">
          Work management platform teams use to stay focused on the goals,
          projects, and daily tasks that grow business
        </p>
      </div>
      <div className="mt-4">
        <div className="w-full">
          <Image
            src="/home/XECUTORS_BUILDING-scaled.webp"
            alt="Image"
            className="rounded-md w-full h-full object-contain"
            width={1000}
            height={1000}
          />
          <p className="w-full text-muted-foreground md:text-xl mt-4 my-2">
            The Xecutors office is where the Gogency team comes together to
            deliver cutting-edge consultancy and technology solutions. Designed
            to encourage creativity, innovation, and collaboration, this
            workspace reflects our commitment to excellence and a
            forward-thinking approach. It serves as the hub where we work to
            help businesses navigate the digital landscape and achieve their
            goals.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutHero;
