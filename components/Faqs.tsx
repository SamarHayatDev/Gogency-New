import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Do I need technical skills to use Gogency?",
    answer:
      "No technical skills are required! Gogency is built for simplicity, allowing anyone to create a travel business website and manage operations effortlessly with intuitive tools and a user-friendly interface.",
  },
  {
    question: "Can Gogency help me attract more customers?",
    answer:
      "Absolutely! Gogency offers built-in SEO tools, automated content generation, and ad creation features to help you rank higher on search engines, run targeted ad campaigns, and engage with potential customers through email and WhatsApp.",
  },
  {
    question: "Is Gogency suitable for businesses outside the travel industry?",
    answer:
      "While Gogency is optimized for travel businesses, many of its automation and management features, like website creation, lead management, and payment tracking, can benefit other industries too. Contact us to explore custom solutions!",
  },
  {
    question: "What are the payment options for using Gogency?",
    answer:
      "We offer flexible subscription plans with secure payment options, including credit/debit cards, bank transfers, and online payment gateways. You can choose a plan that best suits your business needs.",
  },
  {
    question: "How does Gogency ensure my data is secure?",
    answer:
      "We prioritize data security with advanced encryption, regular backups, and secure server hosting. Your data is safe with us, and we comply with international data protection regulations.",
  },
  {
    question: "Can I integrate Gogency with other tools I’m already using?",
    answer:
      "Yes! Gogency supports integrations with popular tools like Google Analytics, WhatsApp Business, email marketing platforms, and payment gateways, ensuring a seamless experience.",
  },
  {
    question: "Is there a trial period to test Gogency?",
    answer:
      "Yes, we offer a free trial to help you explore Gogency’s features before committing. You can start creating your website and automating your business operations during the trial.",
  },
  {
    question: "How can I get support if I encounter issues?",
    answer:
      "We offer 24/7 customer support through email, live chat, and a dedicated help center with detailed guides and tutorials to assist you.",
  },
  {
    question: "Does Gogency provide training for new users?",
    answer:
      "Yes! We provide onboarding training, video tutorials, and a comprehensive knowledge base to help you get the most out of Gogency.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Absolutely. There are no long-term commitments, and you can cancel your subscription anytime through your account dashboard.",
  },
  {
    question: "How does Gogency handle commissions and financial management?",
    answer:
      "Gogency has built-in tools to track consultant commissions and generate financial reports. This ensures transparency and simplifies payment management for your team.",
  },
];

const Faqs = () => {
  return (
    <section>
      <h2>FAQs</h2>
      <p className="paraheading">
        Learn how our platform simplifies your business operations.
      </p>
      <Accordion type="single" collapsible>
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-muted-foreground">
              <p className="paraheading-faq">{faq.question}</p>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Faqs;
