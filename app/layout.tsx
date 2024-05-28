import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

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
      <body className={`${inter.variable} ${adelia.variable} ${nature.variable}`}>{children}</body>
    </html>
  );
}
