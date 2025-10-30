import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { jetBrains } from "@/components/ui/fonts";
import "./globals.css";
// import { bitcount } from "@/components/ui/fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cleidy Gil - Desarrolladora Frontend",
  description: "Portafolio profesional de Cleidy Gil",
  keywords: ["frontend", "react", "nextjs", "developer", "portfolio"],
  authors: [{ name: "Cleidy Gil" }],
  openGraph: {
    title: "Cleidy Gil - Desarrolladora Frontend",
    description: "Portafolio profesional de desarrollo frontend",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrains.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
