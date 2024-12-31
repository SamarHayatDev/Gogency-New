import React from "react";
import Link from "next/link"; // Import Link from Next.js
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
import { CircleCheck } from "lucide-react"; // Import CircleCheck icon

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
    monthlyLink:
      "https://www.flygency.com/?plan=e7044c5b-447c-4580-af5d-7f05fd570455&priceId=price_1NnfTuG7sNvxSo7yDSr2raSk&price=99&duration=false",
    annualLink:
      "https://www.flygency.com/?plan=95fd404f-24d5-428c-95d9-e84332dc265e&priceId=%22price_1NnfTuG7sNvxSo7ycV90Zz2r&price=1069&duration=true",
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
    monthlyLink:
      "https://www.flygency.com/?plan=d78e69d5-dc53-42dc-8595-78ca6074d9a7&priceId=price_1NnfTuG7sNvxSo7yMnOiT8Yy&price=199&duration=false",
    annualLink:
      "https://www.flygency.com/?plan=95fd404f-24d5-428c-95d9-e84332dc265e&priceId=price_1NnfTuG7sNvxSo7y3MHmOgxn&price=2149&duration=true",
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
    monthlyLink:
      "https://www.flygency.com/?plan=95fd404f-24d5-428c-95d9-e84332dc265e&priceId=price_1NnfTuG7sNvxSo7yVhHvvegL&price=499&duration=false",
    annualLink:
      "https://www.flygency.com/?plan=95fd404f-24d5-428c-95d9-e84332dc265e&priceId=price_1NnfTuG7sNvxSo7ycbGg6GWd&price=5390&duration=true",
  },
];

const PricingTab = () => {
  return (
    <section>
      <h1>Explore our Solutions</h1>
      <p className="paraheading">
        Work management platform teams use to stay focused on the goals,
        projects, and daily tasks that grow business.
      </p>
      <Tabs defaultValue="monthly" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="annual">Annual</TabsTrigger>
        </TabsList>
        <TabsContent value="monthly">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                  <ul className="mt-2 space-y-1 text-sm">
                    {plan.featuresMonthly.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CircleCheck className="text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link target="_blank" href={plan.monthlyLink} passHref>
                    <Button>{plan.cta}</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="annual">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                  <ul className="mt-2 space-y-1 text-sm">
                    {plan.featuresAnnual.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CircleCheck className="text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link target="_blank" href={plan.annualLink} passHref>
                    <Button>{plan.cta}</Button>
                  </Link>
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
