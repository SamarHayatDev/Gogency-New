import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const KeyFeatures = () => {
  return (
    <section>
      <h2>Key Features</h2>
      <p className="paraheading">
        Gogency is designed to help you automate, scale, and succeed. Our key
        features are built to help you manage your business efficiently and
        effectively
      </p>

      {/* First Parent Grid - First 2 Cards */}
      <div className="w-full grid grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <Card className="flex-1">
            <CardHeader>
              <AspectRatio ratio={16 / 9}>
                <Image
                  fill
                  src="/dummy.jpg"
                  alt="Feature 1"
                  className="w-full h-full object-cover rounded"
                />
              </AspectRatio>
            </CardHeader>
            <CardContent>
              <CardTitle>
                <h5>Feature 1</h5>
              </CardTitle>
              <CardDescription>
                <p>
                  Description for Feature 1. This feature helps automate your
                  workflow for better productivity.
                </p>
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col">
          <Card className="flex-1">
            <CardHeader>
              <AspectRatio ratio={16 / 9}>
                <Image
                  fill
                  src="/dummy.jpg"
                  alt="Feature 2"
                  className="w-full h-full object-cover rounded"
                />
              </AspectRatio>
            </CardHeader>
            <CardContent>
              <CardTitle>
                <h5>Feature 2</h5>
              </CardTitle>
              <CardDescription>
                <p>
                  Description for Feature 2. This feature scales your business
                  efficiently with ease.
                </p>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Second Parent Grid - Last 3 Cards */}
      <div className="w-full grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          <Card className="flex-1">
            <CardHeader>
              <AspectRatio ratio={16 / 9}>
                <Image
                  fill
                  src="/dummy.jpg"
                  alt="Feature 3"
                  className="w-full h-full object-cover rounded"
                />
              </AspectRatio>
            </CardHeader>
            <CardContent>
              <CardTitle>
                <h5>Feature 3</h5>
              </CardTitle>
              <CardDescription>
                <p>
                  Description for Feature 3. Automate your tasks and save time
                  with this feature.
                </p>
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col">
          <Card className="flex-1">
            <CardHeader>
              <AspectRatio ratio={16 / 9}>
                <Image
                  fill
                  src="/dummy.jpg"
                  alt="Feature 4"
                  className="w-full h-full object-cover rounded"
                />
              </AspectRatio>
            </CardHeader>
            <CardContent>
              <CardTitle>
                <h5>Feature 4</h5>
              </CardTitle>
              <CardDescription>
                <p>
                  Description for Feature 4. Scale your business operations with
                  ease.
                </p>
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col">
          <Card className="flex-1">
            <CardHeader>
              <AspectRatio ratio={16 / 9}>
                <Image
                  fill
                  src="/dummy.jpg"
                  alt="Feature 5"
                  className="w-full h-full object-cover rounded"
                />
              </AspectRatio>
            </CardHeader>
            <CardContent>
              <CardTitle>
                <h5>Feature 5</h5>
              </CardTitle>
              <CardDescription>
                <p>
                  Description for Feature 5. This feature ensures smooth
                  workflow and operations.
                </p>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
