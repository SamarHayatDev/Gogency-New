import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const keyFeaturesData = {
  "Website Tools": [
    {
      title: "Instant Website Creation",
      description:
        "Create your travel website with a single click. No technical skills needed.",
      visualIdea:
        "Display a screen showing a simple drag-and-drop interface creating a sleek travel website.",
    },
    {
      title: "Built-in SEO",
      description:
        "Rank higher on search engines with Gogency's advanced SEO tools.",
      visualIdea: "A dashboard image showing SEO scores improving dynamically.",
    },
    {
      title: "Scalability & Customization",
      description:
        "Scale your business and tailor Gogency features to meet your specific needs.",
      visualIdea: "Animated blocks representing scalable solutions.",
    },
  ],
  "Marketing Tools": [
    {
      title: "Automated Content Generation",
      description:
        "Generate blogs, itineraries, and promotional content automatically to save time.",
      visualIdea:
        "Animated text typing effect showing blog creation in seconds.",
    },
    {
      title: "Ad Creation & Performance Tracking",
      description: "Launch and track ads effortlessly to boost conversions.",
      visualIdea: "Bar graphs comparing ad performance metrics.",
    },
    {
      title: "Customer Engagement via WhatsApp & Email",
      description:
        "Communicate instantly with customers through built-in WhatsApp and email tools.",
      visualIdea:
        "A smartphone mockup showing a WhatsApp chat with a customer and an email dashboard.",
    },
  ],
  "Business Management": [
    {
      title: "Lead Management & Automated Follow-Ups",
      description:
        "Keep track of leads, nurture them with follow-up emails, and close deals faster.",
      visualIdea:
        "A funnel diagram showcasing leads entering and conversions growing.",
    },
    {
      title: "Sales & Booking Management",
      description: "Streamline ticket sales and manage bookings in one place.",
      visualIdea: "An interactive calendar interface for managing bookings.",
    },
    {
      title: "Payment & Financial Management",
      description:
        "Handle payments securely with multiple options and get detailed financial insights.",
      visualIdea:
        "Animated pie charts and transaction logs displayed on a dashboard.",
    },
    {
      title: "HR & Consultant Management",
      description:
        "Track attendance, assign tasks, and monitor team performance effortlessly.",
      visualIdea:
        "A simple dashboard displaying employee tasks and HR metrics.",
    },
  ],
};

const KeyFeatures = () => {
  return (
    <section className="container mx-auto max-w-screen-lg px-4 py-12">
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl mb-8">
        Key Features
      </h2>
      <p className="max-w-[800px] text-muted-foreground md:text-xl mt-4 my-2 mb-8">
        Discover how Gogency’s core features transform business management,
        boosting efficiency, marketing, and operational flexibility.
      </p>
      <Tabs defaultValue="Website Tools" className="w-full">
        <TabsList className="flex space-x-4">
          {Object.keys(keyFeaturesData).map((tab) => (
            <TabsTrigger key={tab} value={tab}>
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(keyFeaturesData).map(([tab, features]) => (
          <TabsContent key={tab} value={tab}>
            <div className="grid gap-6 mt-6">
              {features.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground mt-2">
                    {feature.description}
                  </p>
                  {/* <p className="text-muted-foreground mt-1 italic">
                    <strong>Visual Idea:</strong> {feature.visualIdea}
                  </p> */}
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default KeyFeatures;
