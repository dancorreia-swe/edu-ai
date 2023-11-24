import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduAI - AI for Education",
  description: "Plataforma para gerar perguntas, resumos e muito mais!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} transition-color font-inter scroll-smooth tracking-tight antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
