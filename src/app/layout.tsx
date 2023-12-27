import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import "slick-carousel/slick/slick.css";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopNow",
  description: "We sell only the most exclusive and high quality prodicts for you, We are best so come and shop with us.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Layout>
          <Navbar />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
