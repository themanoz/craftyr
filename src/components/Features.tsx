import React from "react";

export default function Features() {
  return (
    <section className="pt-28">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-slate-200 w-fit px-5 py-1 rounded-md font-medium text-slate-600">
          Features
        </div>
        <div className="flex flex-col justify-center items-center pt-5">
          <h1 className="text-md font-semibold text-center tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Streamline your resume creation
          </h1>
          <p className="text-lg font-medium text-muted-foreground space-y-2 pt-4 text-center tracking-tight lg:w-1/2 xl:w-2/3">
            Our AI-powered resume builder instantly creates a tailored,
            professional resume from your job description.
          </p>
        </div>
        <div className="pt-12 flex ">
          <div className="w-3/6 space-y-6">
            <div className="space-y-1">
              <h1 className="font-semibold text-xl">Customized Resumes</h1>
              <p className="text-slate-500 font-medium">
                Our Al analyzes the job description and tailors your resume to
                match the required skills and experience.
              </p>
            </div>
            <div className="space-y-1">
              <h1 className="font-semibold text-xl">Automatic Formatting</h1>
              <p className="text-slate-500 font-medium">
                No need to worry about formatting - our tool ensures your resume
                looks professional and polished
              </p>
            </div>
            <div className="space-y-1">
              <h1 className="font-semibold text-xl">Download and Share</h1>
              <p className="text-slate-500 font-medium">
                Once your resume is ready, you can download it in various
                formats or share it directly with potential employers.
              </p>
            </div>
          </div>
          <div>Images</div>
        </div>
      </div>
    </section>
  );
}