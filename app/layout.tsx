import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: ".yassir/portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nunito.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
}

