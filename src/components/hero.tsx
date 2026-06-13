import { siteConfig } from "@/data/config";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Hero() {
  return (
    <section className="py-12 md:py-24">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
          {siteConfig.name}
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px]">
          {siteConfig.title}
        </p>
        <p className="text-lg text-muted-foreground max-w-[700px] mt-4">
          {siteConfig.bio}
        </p>
        <div className="flex gap-4 mt-6">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
