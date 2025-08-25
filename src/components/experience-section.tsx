import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";

export const ExperienceSection = component$(() => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Frontend Developer",
      location: "Madrid, España",
      period: "2022 - Presente",
      description:
        "Lidero el desarrollo de aplicaciones web modernas usando React y Next.js. Implementé arquitecturas escalables que mejoraron el rendimiento en un 40%.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      company: "StartupHub",
      position: "Full Stack Developer",
      location: "Barcelona, España",
      period: "2020 - 2022",
      description:
        "Desarrollé aplicaciones completas desde el frontend hasta el backend. Colaboré en equipos ágiles y participé en la arquitectura de microservicios.",
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      company: "Digital Agency Pro",
      position: "Frontend Developer",
      location: "Valencia, España",
      period: "2019 - 2020",
      description:
        "Creé sitios web responsivos y aplicaciones interactivas para clientes de diversos sectores. Optimicé el SEO y la accesibilidad web.",
      technologies: ["JavaScript", "SASS", "WordPress", "PHP"],
    },
  ];

  return (
    <section id="experiencia" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12 space-y-2">
          <h2 class="text-3xl md:text-4xl font-bold">{_`experienceTitle`}</h2>
          <p class="text-muted-foreground max-w-3xl mx-auto">{_`experienceSubtitle`}</p>
        </div>

        <div class="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} class="rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300">
              <div class="p-6">
                <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div class="flex-1">
                    <h3 class="text-xl font-bold mb-2">{exp.position}</h3>
                    <h4 class="font-semibold text-primary text-lg mb-3">{exp.company}</h4>
                    <div class="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div class="flex items-center gap-2">
                        <span class="i-lucide-calendar h-4 w-4"></span>
                        {exp.period}
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="i-lucide-map-pin h-4 w-4"></span>
                        {exp.location}
                      </div>
                    </div>
                    <p class="text-muted-foreground mb-4">{exp.description}</p>
                    <div class="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} class="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-background">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}); 