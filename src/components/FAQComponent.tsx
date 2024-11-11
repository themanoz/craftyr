import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQComponent() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-[700px] flex flex-col justify-center pt-10"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          How does the AI optimize my resume for a specific job?
        </AccordionTrigger>
        <AccordionContent>
          The AI analyzes job descriptions and tailors your resume to highlight
          the most relevant skills and experience for each role.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
        Can I customize my resume after it&apos;s optimized?
        </AccordionTrigger>
        <AccordionContent>
        Yes, you can make any changes to the optimized resume before downloading it.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
        Are the resumes ATS-friendly?
        </AccordionTrigger>
        <AccordionContent>
        Yes, our platform creates ATS-optimized resumes to help you pass automated screenings.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
        Can I optimize my resume for multiple jobs?
        </AccordionTrigger>
        <AccordionContent>
        Yes, you can create different resumes tailored to different job descriptions.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>What if my resume isn&apos;t getting noticed by employers?</AccordionTrigger>
        <AccordionContent>
        We provide tips and suggestions to further enhance your resume and improve its effectiveness.
        </AccordionContent>
      </AccordionItem>
      {/* <AccordionItem value="item-6">
        <AccordionTrigger>What payment methods are available?</AccordionTrigger>
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
        <AccordionTrigger>Do you provide certification?</AccordionTrigger>
        <AccordionContent>
          No, we don’t offer certifications. You can apply for official exams
          like DELF/DALF through the official Canadian website.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger>Can I get a refund?</AccordionTrigger>
        <AccordionContent>
          No, we do not offer refunds once the subscription is purchased. Please
          make sure you review all details before subscribing.
        </AccordionContent>
      </AccordionItem> */}
    </Accordion>
  );
}
