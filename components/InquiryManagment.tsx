import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

const InquiryManagment = () => {
  return (
    <section>
      <h2>Efficient inquiry management​</h2>
      <p className="paraheading">
        Explore our versatile inquiry dashboard: effortlessly track, manage, and
        respond to customer requests.
      </p>
      <div>
        <AspectRatio ratio={16 / 7}>
          <Image
            src="/dummy.jpg"
            alt="Image"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </section>
  );
};

export default InquiryManagment;
