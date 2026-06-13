import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">Portfolio</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link
              href="#experience"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Skills
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
