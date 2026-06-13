import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
    <html lang="en" className="scroll-smooth">
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
