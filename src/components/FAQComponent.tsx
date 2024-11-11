import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQComponent() {
  return (
    <Accordion type="single" collapsible className="w-[700px] flex flex-col justify-center pt-10">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          What’s included in the monthly subscription?
        </AccordionTrigger>
        <AccordionContent>
          The subscription provides access to all course materials, live Zoom
          sessions, and downloadable workbooks.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Will I have access to live Zoom sessions?
        </AccordionTrigger>
        <AccordionContent>
          Yes, live Zoom sessions are held regularly for practice and Q&A with
          instructors.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Do I get workbooks and other materials?
        </AccordionTrigger>
        <AccordionContent>
          Yes, downloadable workbooks and practice materials are included.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
        How long will I have access to the course?
        </AccordionTrigger>
        <AccordionContent>
        You’ll have access to all materials for as long as your subscription is active.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
        Can I cancel anytime?
        </AccordionTrigger>
        <AccordionContent>
        Yes, you can cancel your subscription at any time without penalty.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
        What payment methods are available?
        </AccordionTrigger>
        <AccordionContent>
        We accept credit/debit cards, UPI, Razorpay, and PayPal.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>
        Do I need any prior French knowledge?
        </AccordionTrigger>
        <AccordionContent>
        No, our beginner’s course is suitable for complete novices
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>
        Do you provide certification?
        </AccordionTrigger>
        <AccordionContent>
        No, we don’t offer certifications. You can apply for official exams like DELF/DALF through the official Canadian website.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger>
         Can I get a refund?
        </AccordionTrigger>
        <AccordionContent>
        No, we do not offer refunds once the subscription is purchased. Please make sure you review all details before subscribing.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}