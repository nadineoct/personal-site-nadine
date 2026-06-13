import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nadine Arindy Octavia | Portfolio",
  description: "Personal portfolio of Nadine Arindy Octavia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              <div className="container max-w-4xl mx-auto px-4">
                {children}
              </div>
            </main>
            <footer className="border-t py-6 md:py-0">
              <div className="container max-w-4xl mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  Built by Nadine Arindy Octavia.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
