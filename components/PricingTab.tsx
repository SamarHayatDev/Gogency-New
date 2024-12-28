import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Starter",
    priceMonthly: 99,
    priceAnnual: 1069,
    description: "Per user, Per month",
    descriptionAnnual: "Per user, Per year",
    featuresMonthly: [
      "Unlimited Inquiries",
      "Unlimited Customers",
      "Unlimited Vendors",
      "Unlimited landing pages",
      "100 Invoices",
      "10 Seats",
      "3 Brand Websites",
      "Email Support",
      "Payroll",
      "KPIs",
    ],
    featuresAnnual: [
      "Unlimited Inquiries",
      "Unlimited Customers",
      "Unlimited Vendors",
      "Unlimited landing pages",
      "1200 Invoices",
      "120 Seats",
      "36 Brand Websites",
      "Email Support",
      "Payroll",
      "KPIs",
    ],
    cta: "Get Subscription",
  },
  {
    name: "Growth",
    priceMonthly: 199,
    priceAnnual: 2149,
    description: "Per user, Per month",
    descriptionAnnual: "Per user, Per year",
    featuresMonthly: [
      "Unlimited Inquiries",
      "Unlimited Customers",
      "Unlimited Vendors",
      "Unlimited landing pages",
      "250 Invoices",
      "30 Seats",
      "10 Brand Websites",
      "Email Support",
      "Payroll",
      "KPIs",
    ],
    featuresAnnual: [
      "Unlimited Inquiries",
      "Unlimited Customers",
      "Unlimited Vendors",
      "Unlimited landing pages",
      "3000 Invoices",
      "360 Seats",
      "120 Brand Websites",
      "Email Support",
      "Payroll",
      "KPIs",
    ],
    cta: "Get Subscription",
  },
  {
    name: "Business",
    priceMonthly: 499,
    priceAnnual: 5390,
    description: "Per user, Per month",
    descriptionAnnual: "Per user, Per year",
    featuresMonthly: [
      "Unlimited Inquiries",
      "Unlimited Customers",
      "Unlimited Vendors",
      "Unlimited landing pages",
      "499 Invoices",
      "50 Seats",
      "20 Brand Websites",
      "Email Support",
      "Payroll",
      "KPIs",
    ],
    featuresAnnual: [
      "Unlimited Inquiries",
      "Unlimited Customers",
      "Unlimited Vendors",
      "Unlimited landing pages",
      "5988 Invoices",
      "600 Seats",
      "240 Brand Websites",
      "Email Support",
      "Payroll",
      "KPIs",
    ],
    cta: "Get Subscription",
  },
];

const PricingTab = () => {
  return (
    <section className="container mx-auto max-w-screen-lg px-4 py-12">
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl mb-2">
        Explore our Solutions
      </h2>
      <p className="max-w-[800px] text-muted-foreground md:text-xl mt-4 my-2 mb-4">
        Work management platform teams use to stay focused on the goals,
        projects, and daily tasks that grow business.
      </p>
      <Tabs defaultValue="monthly" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="annual">Annual</TabsTrigger>
        </TabsList>
        <TabsContent value="monthly">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className="bg-slate-800/10 dark:bg-gray-100/10"
              >
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold mb-2">£{plan.priceMonthly}</p>
                  <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                    {plan.featuresMonthly.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button>{plan.cta}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="annual">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className="bg-slate-800/10 dark:bg-gray-100/10"
              >
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.descriptionAnnual}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold mb-2">£{plan.priceAnnual}</p>
                  <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                    {plan.featuresAnnual.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button>{plan.cta}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default PricingTab;
