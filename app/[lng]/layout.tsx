import Providers from "@/components/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import "../globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: {
    default: "EduAI",
    template: "%s | EduAI",
  },
  description: "Plataforma para gerar perguntas, resumos e muito mais!",
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html
      lang={lng}
      className="scroll-smooth"
      suppressHydrationWarning
      dir={dir(lng)}
    >
      <body
        className={`${inter.className} transition-color font-inter scroll-smooth tracking-tight antialiased duration-150 dark:bg-indigo-950`}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
