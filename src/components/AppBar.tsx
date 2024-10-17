import React from "react";
import { Button } from "./ui/button";

export default function AppBar() {
  return (
    <div className="flex justify-between items-center pt-6 px-48">
      <div>
        <h1 className="text-xl font-semibold">JobCrafty</h1>
      </div>
      {/* <div className="flex justify-center items-center gap-2 pt-1 font-medium">
        <li className="list-none">Features</li>
        <li className="list-none">Pricing</li>
        <li className="list-none">Contact</li>
      </div> */}
      <div className="flex gap-2">
        <Button>
          Get Started
        </Button>
        <Button variant={"outline"}>
          Login
        </Button>
      </div>
    </div>
  );
}
