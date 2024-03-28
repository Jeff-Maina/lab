import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Footer from "./components/homepage/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Lab",
  description: "Lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
