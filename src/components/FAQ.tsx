import FAQComponent from "./FAQComponent";
import React from "react";

export default function FAQ() {
  return (
    <section className="flex flex-col justify-center items-center lg:justify-between px-6 lg:px-44 py-16 lg:py-32">
      <div className="mb-8 lg:mb-0 text-center flex flex-col justify-center items-center space-y-5">
        <div className="bg-slate-200 w-fit px-5 py-1 rounded-md font-medium text-slate-600">
          FAQ
        </div>
        <p className="text-3xl lg:text-5xl font-semibold">
          Frequently Asked Questions
        </p>
      </div>
      <FAQComponent />
    </section>
  );
}
