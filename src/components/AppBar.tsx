'use client';

import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function AppBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-around items-center p-6">
      <Link href={"/"}>
        <h1 className="text-2xl font-semibold text-blue-900">craftyr</h1>
      </Link>

      <div className="hidden md:flex items-center gap-6 font-medium">
        <a href="#features">
          <li className="list-none">Features</li>
        </a>
        {/* <a href="#pricing">
          <li className="list-none">Pricing</li>
        </a> */}
        <li className="list-none">
          <Button className="rounded-full bg-blue-900 text-white font-semibold">
            Login
          </Button>
        </li>
      </div>

      <button
        className="md:hidden text-blue-900"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
          <a href="#features" onClick={toggleMobileMenu}>
            <li className="list-none text-lg">Features</li>
          </a>
          <a href="#pricing" onClick={toggleMobileMenu}>
            <li className="list-none text-lg">Pricing</li>
          </a>
          <li className="list-none">
            <Button className="rounded-full bg-blue-900 text-white font-semibold w-full">
              Login
            </Button>
          </li>
        </div>
      )}
    </div>
  );
}
