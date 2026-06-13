import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}
