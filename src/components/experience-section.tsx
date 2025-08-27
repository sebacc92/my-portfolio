import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";

export const ExperienceSection = component$(() => {
  const experiences = [
    {
      company: "Freelance",
      position: _`experienceFreelancePosition`,
      location: _`experienceFreelanceLocation`,
      period: "10/2024 - Presente",
      description: _`experienceFreelanceDescription`,
      technologies: ["WordPress", "Qwik", "Strapi", "SaaS", _`experienceFreelanceTech1`],
    },
    {
      company: "Arzion",
      position: _`experienceArzionPosition`,
      location: _`experienceArzionLocation`,
      period: "11/2019 - 09/2024",
      description: _`experienceArzionDescription`,
      technologies: ["React", "JavaScript", "Cypress", _`experienceArzionTech1`, _`experienceArzionTech2`],
      highlights: [
        _`experienceArzionHighlight1`,
        _`experienceArzionHighlight2`,
        _`experienceArzionHighlight3`,
        _`experienceArzionHighlight4`
      ]
    }
  ];

  return (
    <section id="experience" class="py-20">
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
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 class="text-xl font-bold text-primary">{_`${exp.position}`}</h3>
                      <span class="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <h4 class="font-semibold text-lg mb-2">{exp.company}</h4>
                    <div class="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                      <span class="i-lucide-map-pin h-4 w-4"></span>
                      {_`${exp.location}`}
                    </div>
                    <p class="text-muted-foreground mb-4 leading-relaxed">{_`${exp.description}`}</p>
                    
                    {/* Highlights - Solo mostrar si existen */}
                    {exp.highlights && (
                      <div class="mb-4">
                        <h5 class="font-medium text-sm mb-2 text-foreground">{_`experienceHighlights`}</h5>
                        <ul class="space-y-1">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} class="flex items-start gap-2 text-sm text-muted-foreground">
                              <span class="i-lucide-check-circle h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"></span>
                              {_`${highlight}`}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    <div class="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} class="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-background hover:bg-muted transition-colors">
                          {tech.startsWith('experience') ? _`${tech}` : tech}
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