import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
import { HydrationOverlay } from "@builder.io/react-hydration-overlay";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});
const adelia = localFont({
  src: './fonts/adelia.ttf',
  display: 'swap',
  variable: '--font-adelia',
})
const nature = localFont({
  src: './fonts/nature.ttf',
  display: 'swap',
  variable: '--font-nature',
})


export const metadata: Metadata = {
  title: "Ectore",
  description: "Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${adelia.variable} ${nature.variable}`}><HydrationOverlay>{children}</HydrationOverlay></body>
    </html>
  );
}
