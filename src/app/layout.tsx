import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Prism from "@/components/prism";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Nadine Arindy Octavia | IT Student & Creative Developer",
  description:
    "Personal portfolio of Nadine Arindy Octavia. IT student at ITB specializing in backend development and creative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "scroll-smooth",
        "font-sans",
        geist.variable
      )}
    >
      <body className="relative font-sans">
        {/* Global Prism Background */}
        <div className="fixed inset-0 -z-10 pointer-events-none prism-bg">
          <Prism
            animationType="3drotate"
            timeScale={0.08}
            height={1}
            baseWidth={7}
            scale={6}
            hueShift={260}
            colorFrequency={0.25}
            noise={0.03}
            glow={0.04}
          />
        </div>

        <Navbar />

        <main className="container max-w-5xl mx-auto px-6 relative z-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}