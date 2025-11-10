import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { jetBrains } from "@/components/ui/fonts";
import "@/app/globals.css";
// import { bitcount } from "@/components/ui/fonts";

export const metadata: Metadata = {
  title: {
    default: "Cleidy Gil - Desarrolladora Frontend",
    template: "%s | Cleidy",
  },
  description:
    "Desarrolladora Frontend especializada en React, Next.js y TypeScript. Creando soluciones web y móviles funcionales y responsivas.",
  keywords: [
    "desarrollador frontend",
    "react",
    "next.js",
    "typescript",
    "javascript",
    "desarrollo web",
    "UI/UX",
    "cleidy",
  ],
  authors: [{ name: "Cleidy" }],
  creator: "Cleidy",
  publisher: "Cleidy",
  openGraph: {
    title: "Cleidy Gil - Desarrolladora Frontend",
    description: "Portafolio profesional de desarrollo frontend",
    type: "website",
    locale: "es_ES",
  },
  // Favicons y app icons
  icons: {
    icon: [
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "any",
      },
      {
        url: "/favicon/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/favicon/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrains.className} antialiased`}>{children}</body>
    </html>
  );
}
