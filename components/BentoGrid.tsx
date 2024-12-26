import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { Card } from "./ui/card";

const BentoGrid = () => {
  return (
    <section className="container mx-auto max-w-screen-lg px-4 py-12">
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl mb-2">
        Bento Grid
      </h2>
      <p className="max-w-[700px] text-muted-foreground md:text-xl mt-4 my-2 mb-4">
        Explore our versatile inquiry dashboard: effortlessly track, manage, and
        respond to customer requests.
      </p>
      <div className="grid md:grid-cols-4 md:grid-rows-3 gap-4">
        {/* Wrapper Card with col-span and row-span */}
        <Card className="col-span-1 row-span-1">
          <AspectRatio ratio={4 / 4}>
            <Image
              src="/Images/hero.jpg"
              alt="Image"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </Card>

        <Card className="col-span-1 row-span-1">
          <AspectRatio ratio={4 / 4}>
            <Image
              src="/Images/hero.jpg"
              alt="Image"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </Card>

        <Card className="md:col-span-2 md:row-span-2">
          <AspectRatio ratio={4 / 4}>
            <Image
              src="/Images/hero.jpg"
              alt="Image"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </Card>

        <Card className="md:col-span-2 md:row-span-2">
          <AspectRatio ratio={8 / 8}>
            <Image
              src="/Images/hero.jpg"
              alt="Image"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </Card>

        <Card className="col-span-1 row-span-1">
          <AspectRatio ratio={4 / 4}>
            <Image
              src="/Images/hero.jpg"
              alt="Image"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </Card>

        <Card className="col-span-1 row-span-1">
          <AspectRatio ratio={4 / 4}>
            <Image
              src="/Images/hero.jpg"
              alt="Image"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </Card>
      </div>
    </section>
  );
};

export default BentoGrid;
