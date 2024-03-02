import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Footer from "./components/homepage/Footer";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
