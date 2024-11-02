import type { Metadata } from "next";
import {Urbanist} from "next/font/google";
import "./globals.css";
import AppBar from "@/components/AppBar";

const fontUrban = Urbanist({
  subsets: ["latin"],
  variable: "--font-urban",
});

export const metadata: Metadata = {
  title: "craftyr",
  description: "Tailor your resume with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={fontUrban.className}
      >
        <AppBar />
        {children}
      </body>
    </html>
  );
}
