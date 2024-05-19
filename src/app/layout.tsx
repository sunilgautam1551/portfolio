
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Skills from "@/components/Skills";
import Newsletter from "@/components/Newsletter";
import Projects from "@/components/Projects";
import Footer from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        {/* <Newsletter /> */}
        <Footer />
        {/* <main>{children}</main> */}
      </body>
    </html>
  );
}
