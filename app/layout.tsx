import type { Metadata } from "next";
import { Barlow, Fraunces } from "next/font/google";
import "./globals.css";

const barlow = Barlow({ weight: ["600"], variable: "--font-barlow" });
const fraunces = Fraunces({
  weight: ["700", "900"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Sunnyside agency landing page challenge | Frontend Mentor",
  description:
    "This is a solution to the Sunnyside agency landing page challenge on Frontend Mentor at https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${fraunces.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
