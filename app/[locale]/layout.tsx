import Providers from "@/components/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "sonner";
import { locales } from "@/config";
import { unstable_setRequestLocale } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    default: "EduAI",
    template: "%s | EduAI",
  },
  description: "Plataforma para gerar perguntas, resumos e muito mais!",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} transition-color font-inter scroll-smooth tracking-tight antialiased duration-150 dark:bg-indigo-950`}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
