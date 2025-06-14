
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqItems: FaqItem[];
}

const FaqSection = ({ faqItems }: FaqSectionProps) => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-text-dark">
            <HelpCircle className="inline-block h-8 w-8 mr-2 text-primary-purple" />
            Часто задаваемые вопросы (FAQ)
          </h2>
        </div>
        <div className="mt-12 mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index} className="border-primary-purple/20">
                <AccordionTrigger className="text-lg text-left hover:no-underline text-text-dark font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-text-dark/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
