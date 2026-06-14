import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Nadine Arindy Octavia | IT Student & Creative Developer",
  description: "Personal portfolio of Nadine Arindy Octavia. IT student at ITB specializing in backend development and creative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className="font-sans">
        <Navbar />
        <main className="container max-w-5xl mx-auto px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
