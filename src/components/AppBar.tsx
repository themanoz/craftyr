import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function AppBar() {
  return (
    <div className="flex justify-around items-center pt-6 ">
      <Link href={"/"}>
        <h1 className="text-2xl font-bold">craftyr</h1>
      </Link>
      {/* <div className="flex justify-center items-center gap-2 pt-1 font-medium">
        <li className="list-none">Features</li>
        <li className="list-none">Pricing</li>
        <li className="list-none">Contact</li>
      </div> */}
      <div className="flex gap-2">
        <Link href={"/signup"}>
          <Button>Get Started</Button>
        </Link>
        <Link href={"/signin"}>
          <Button variant={"outline"}>Login</Button>
        </Link>
      </div>
    </div>
  );
}
