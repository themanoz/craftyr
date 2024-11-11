import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="flex justify-center items-center">
      <div className="border w-[890px] h-[270px] py-12 rounded-3xl bg-blue-900 text-white px-28 flex flex-col justify-between items-center">
        <div className="space-y-2 text-center">
          <h1 className="text-6xl font-bold">
            Ready to use{" "}
            <span className="bg-gradient-to-r text-white inline-block text-transparent bg-clip-text">
              craftyr {" "}
            </span>
            ?
          </h1>
          <p className="text-lg">
            Experience a new standard in resume optimization with our AI-driven
            platform.
          </p>
        </div>
        <div>
          <Link href={"/signup"}>
            <Button
              type="submit"
              className="text-xl font-bold p-6 rounded-full bg-white text-blue-900"
            >
              Try for free
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
