import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { AchievementsHub } from "@/components/achievements-hub";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Education />
      <Experience />
      <AchievementsHub />
      <Skills />
    </div>
  );
}
