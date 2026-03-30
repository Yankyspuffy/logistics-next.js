import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bluescale Logistics",
  description: "Moving the Future. At Bluescale Speed. Intelligent freight and seamless supply chain solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased text-primary selection:bg-accent selection:text-primary max-w-[100vw] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
