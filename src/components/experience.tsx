import { siteConfig } from "@/data/config";

export function Experience() {
  return (
    <section id="experience" className="py-12 border-t">
      <h2 className="text-2xl font-bold mb-8">Experience</h2>
      <div className="space-y-8">
        {siteConfig.experience.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row md:gap-8">
            <div className="md:w-1/4">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {exp.period}
              </p>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-muted-foreground font-medium mb-2">{exp.company}</p>
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
