import React from "react";
import { Briefcase, Edit, PlayCircle } from "lucide-react"; // Import icons

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const featuresData = [
  {
    title: "Marketing Mastery",
    description:
      "Tailor your marketing efforts in real-time with no developers needed.",
    icon: <Briefcase />,
  },
  {
    title: "Flexible Customization",
    description: "Easily adjust settings to suit your unique needs.",
    icon: <Edit />,
  },
  {
    title: "Effortless Automation",
    description:
      "Automate tasks and streamline processes for better efficiency.",
    icon: <PlayCircle />,
  },
];

const Features = () => {
  return (
    <section className="container mx-auto max-w-screen-lg px-4 py-12">
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl mb-2">
        Key Features
      </h2>
      <p className="max-w-[700px] text-muted-foreground md:text-xl mt-4 my-2 mb-4">
        Streamline your travel agency: automate follow-ups, customize easily,
        and optimize marketing and build brands on the go.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuresData.map((feature, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-col items-center justify-center">
              <div className={`mb-4 p-2 rounded-full `}>
                {React.cloneElement(feature.icon, {
                  className: `h-8 w-8 dark:text-gray-100 text-gray-900`,
                })}
              </div>
              <CardTitle className="text-xl font-semibold">
                {feature.title}
              </CardTitle>
              <CardDescription className="text-center">
                {feature.description}
              </CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
