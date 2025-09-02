import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";

const faqs = [
  {
    question: "What age is this app for?",
    answer:
      "Mindery One is designed for children ages 4-14, with age-specific programs that adapt to developmental stages. Our Little Explorers program (4-6) uses playful activities, Young Mindful (7-10) focuses on structured practice, and Teen Zen (11-14) addresses adolescent challenges.",
  },
  {
    question: "How long are the meditation sessions?",
    answer:
      "Sessions range from 3-20 minutes depending on the age group and activity type. Younger children start with 3-5 minute activities, while teens can engage in longer 15-20 minute sessions. All content is designed to match attention spans and developmental needs.",
  },
  {
    question: "Is it safe and ad-free?",
    answer:
      "Absolutely! Mindery One is a completely safe, ad-free environment designed specifically for children. We never collect personal data from children, have no social features, and all content is reviewed by child development experts and educators.",
  },
  {
    question: "Can multiple children use one account?",
    answer:
      "Yes! Our Premium and Family plans support multiple child profiles. Each child gets their own personalized experience, progress tracking, and age-appropriate content. Parents can monitor all children from one convenient dashboard.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a 14-day free trial for all plans with no credit card required. You'll have full access to age-appropriate content for your child during the trial period. Cancel anytime with no questions asked.",
  },
  {
    question: "Is there scientific research behind this?",
    answer:
      "Our programs are based on evidence-based mindfulness practices adapted for children. We work with child psychologists, educators, and mindfulness experts to ensure our content supports healthy emotional development and stress management.",
  },
  {
    question: "Can parents participate too?",
    answer:
      "Definitely! Our Family Sessions are designed for parents and children to practice together. We also provide parent resources, tips for creating mindful homes, and guidance on supporting your child's mindfulness journey.",
  },
  {
    question: "What devices can we use?",
    answer:
      "Mindery One works on all devices - smartphones, tablets, and computers. Our mobile apps are available for iOS and Android, and you can also access everything through our web platform. Content syncs across all devices.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about Mindery One and how it can benefit
            your family.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 border-0 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div
        className="
    w-[90%] sm:w-[95%] md:w-[85%] lg:max-w-4xl 
    mx-auto my-8 p-6 rounded-3xl shadow-lg 
    bg-gradient-to-br from-white via-blue-50 to-cyan-50
    dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
  "
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-center sm:text-left">
          Start Your Child’s Mindfulness Journey
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base text-center sm:text-left">
          Try it free. Build calm, focus, and kindness—one small practice a day.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:justify-start justify-center">
          <Button
            variant="hero"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 
               dark:from-violet-600 dark:to-purple-700 text-white text-sm font-medium shadow 
               focus:outline-none focus:ring-2 focus:ring-violet-300 dark:focus:ring-violet-500 w-full sm:w-auto"
          >
            Create Account
          </Button>

          <Button
            variant="hero"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-green-400 to-green-600 
               dark:from-green-600 dark:to-green-700 text-white text-sm font-medium shadow 
               focus:outline-none focus:ring-2 focus:ring-green-200 dark:focus:ring-green-400 w-full sm:w-auto"
          >
            Download App
          </Button>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">
          Still have questions? We're here to help!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:support@mindery.com"
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            📧 support@mindery.com
          </a>
          <a
            href="tel:+1234567890"
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            📞 (123) 456-7890
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
