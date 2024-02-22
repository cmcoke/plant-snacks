import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Plant Snacks - Delicious and Healthy Vegan Chips",
  description: "Explore a meticulously crafted educational clone of Plant Snacks - a fictional web experience built with Next.js, TypeScript, Tailwind CSS, and Sanity CMS. This project serves as a personal learning endeavor in web development."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
