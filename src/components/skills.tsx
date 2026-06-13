import { siteConfig } from "@/data/config";

export function Skills() {
  return (
    <section id="skills" className="py-12 border-t">
      <h2 className="text-2xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-4 text-muted-foreground uppercase text-sm tracking-wider">
            Languages
          </h3>
          <ul className="space-y-2">
            {siteConfig.skills.languages.map((skill, i) => (
              <li key={i} className="text-foreground">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-muted-foreground uppercase text-sm tracking-wider">
            Frameworks
          </h3>
          <ul className="space-y-2">
            {siteConfig.skills.frameworks.map((skill, i) => (
              <li key={i} className="text-foreground">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-muted-foreground uppercase text-sm tracking-wider">
            Tools
          </h3>
          <ul className="space-y-2">
            {siteConfig.skills.tools.map((skill, i) => (
              <li key={i} className="text-foreground">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
