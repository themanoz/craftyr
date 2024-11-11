import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import ModalVideo from "./modal-video";
import VideoThumb from "../../public/modal-video-thumb.jpg";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center h-full pt-36">
      <h1 className="text-3xl font-bold text-center leading- sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl lg:w-6/12">
        Tailored resumes for your{" "}
        <span className="text-blue-900">
          {" "}
          dream job{" "}
        </span>
      </h1>
      <p className="text-lg font-medium text-muted-foreground space-y-2 pt-4 text-center tracking-normal lg:w-3/6 xl:w-3/6">
        Our Al-driven platform analyzes job descriptions and automatically
        optimizes your resume to match the requirements, helping you stand out
        and land your dream job.
      </p>
      <div className="pt-6 flex gap-4">
        <Button className="rounded-full text-xl font-semibold p-7 bg-blue-900">
          Get Started
        </Button>
      </div>
      <ModalVideo
        thumb={VideoThumb}
        thumbWidth={768}
        thumbHeight={426}
        thumbAlt="Modal video thumbnail"
        video="/video.mp4"
        videoWidth={1920}
        videoHeight={1080}
      />
    </section>
  );
}