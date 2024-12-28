import React from "react";
import { Globe, Rocket, Settings } from "lucide-react"; // Import relevant icons

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WhyGogencyData = [
  {
    title: "Setup in Minutes",
    description:
      "Launch your travel business effortlessly with instant website creation.",
    icon: <Rocket />,
  },
  {
    title: "Automate Everything",
    description:
      "Streamline operations and save time with powerful automation tools.",
    icon: <Settings />,
  },
  {
    title: "Grow Globally",
    description:
      "Expand your reach with scalable features and global integrations.",
    icon: <Globe />,
  },
];

const WhyGogency = () => {
  return (
    <section>
      <h2>Why Gogency?</h2>
      <p className="paraheading">Fully Automated Business Management</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {WhyGogencyData.map((gogency, index) => (
          <Card key={index} className="bg-slate-800/10 dark:bg-gray-100/10">
            <CardHeader className="flex flex-col items-center justify-center">
              <div className="mb-4 p-2 rounded-full">
                {React.cloneElement(gogency.icon, {
                  className: `h-8 w-8 dark:text-gray-100 text-gray-900`,
                })}
              </div>
              <CardTitle className="text-xl font-semibold">
                {gogency.title}
              </CardTitle>
              <CardDescription className="text-center">
                {gogency.description}
              </CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WhyGogency;
