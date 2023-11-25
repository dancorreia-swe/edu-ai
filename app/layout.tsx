import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";

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
    <html lang="en">
      <body
        className={`${inter.className} transition-color font-inter tracking-tight antialiased bg-neutral-900`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
