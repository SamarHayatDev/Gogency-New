import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { Card } from "./ui/card";

const HowItWorks = () => {
  return (
    <section>
      <h2>How it Works</h2>
      <p className="paraheading">
        Explore our versatile inquiry dashboard: effortlessly track, manage, and
        respond to customer requests.
      </p>
      <div className="grid md:grid-cols-4 md:grid-rows-3 gap-4">
        {/* Wrapper Card with col-span and row-span */}
        <Card className="col-span-1 row-span-1 overflow-hidden bg-slate-800/10 dark:bg-gray-100/10">
          <AspectRatio ratio={4 / 4}>
            <Image
              src="/dummy.jpg"
              alt="Image"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </Card>

        <Card className="col-span-1 row-span-1 overflow-hidden bg-slate-800/10 dark:bg-gray-100/10">
          <AspectRatio ratio={4 / 4}>
            <Image
              src="/dummy.jpg"
              alt="Image"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </Card>

        <Card className="md:col-span-2 md:row-span-2 overflow-hidden bg-slate-800/10 dark:bg-gray-100/10">
          <AspectRatio ratio={4 / 4}>
            <Image
              src="/dummy.jpg"
              alt="Image"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </Card>

        <Card className="md:col-span-2 md:row-span-2 overflow-hidden bg-slate-800/10 dark:bg-gray-100/10">
          <AspectRatio ratio={8 / 8}>
            <Image
              src="/dummy.jpg"
              alt="Image"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </Card>

        <Card className="col-span-1 row-span-1 overflow-hidden bg-slate-800/10 dark:bg-gray-100/10">
          <AspectRatio ratio={4 / 4}>
            <Image
              src="/dummy.jpg"
              alt="Image"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </Card>

        <Card className="col-span-1 row-span-1 overflow-hidden bg-slate-800/10 dark:bg-gray-100/10">
          <AspectRatio ratio={4 / 4}>
            <Image
              src="/dummy.jpg"
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

export default HowItWorks;
