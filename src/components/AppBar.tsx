import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function AppBar() {
  return (
    <div className="flex justify-between px-10 items-center pt-6 ">
      <Link href={"/"}>
        <h1 className="text-2xl font-semibold text-blue-900">craftyr</h1>
      </Link>
      <div className="flex justify-center items-center gap-3 pt-1 font-medium">
        <li className="list-none">Features</li>
        <li className="list-none">Pricing</li>
        {/* <li className="list-none">Login</li> */}
        <li className="list-none">
          <Button className="rounded-full bg-blue-900 font-semibold">
            Login
          </Button>
        </li>
      </div>
      {/* <div className="flex gap-2">
        <Link href={"/signup"}>
          <Button>Get Started</Button>
        </Link>
        <Link href={"/signin"}>
          <Button variant={"outline"}>Login</Button>
        </Link>
      </div> */}
    </div>
  );
}
