import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";

const personalProjects = [
  {
    id: 1,
    title: "Qwik Raffle",
    description: "projectsQwikRaffleDescription",
    technologies: ["Qwik", "TypeScript", "Tailwind CSS", "SaaS"],
    github: "https://github.com/sebacc92/qwik-raffle",
    demo: "https://github.com/sebacc92/qwik-raffle",
    type: "personal"
  }
];

const freelanceProjects = [
  {
    id: 2,
    title: "Grupo UDEC",
    description: "projectsGrupoUdecDescription",
    technologies: ["WordPress", "PHP", "CSS", "JavaScript"],
    url: "https://grupoudec.com.ar/",
    type: "freelance"
  },
  {
    id: 3,
    title: "ERCON",
    description: "projectsErconDescription",
    technologies: ["WordPress", "PHP", "CSS", "JavaScript"],
    url: "https://ercon.ar",
    type: "freelance"
  },
  {
    id: 4,
    title: "Italianos en Miramar",
    description: "projectsItalianosEnMiramarDescription",
    technologies: ["Qwik", "TypeScript", "Strapi", "Tailwind CSS"],
    url: "http://italianosenmiramar.com/",
    type: "freelance"
  },
  {
    id: 5,
    title: "Coach Fabián Avendaño",
    description: "projectsCoachFabianDescription",
    technologies: ["Qwik", "TypeScript", "Tailwind CSS", "Responsive Design"],
    url: "https://coach-fabian-avendano.netlify.app/",
    type: "freelance"
  },
  {
    id: 6,
    title: "Urban Style Miramar",
    description: "projectsUrbanStyleMiramarDescription",
    technologies: ["TiendaNube", "E-commerce", "Responsive Design", "Payment Integration"],
    url: "https://urbanstylemiramar.mitiendanube.com/",
    type: "freelance"
  }
];

export const ProjectsSection = component$(() => {
  return (
    <section id="projects" class="py-20 bg-linear-to-b from-background to-muted/20">
      <div class="container mx-auto px-4 max-w-7xl">
        {/* Header centrado */}
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {_`projectsTitle`}
          </h2>
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            {_`projectsSubtitle`}
          </p>
        </div>

        {/* Personal Projects Section - Centrado */}
        <div class="mb-20">
          <h3 class="text-3xl font-bold text-center mb-10 text-foreground">
            {_`projectsPersonalTitle`}
          </h3>
          <div class="flex justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
              {personalProjects.map((project) => (
                <div key={project.id} class="group relative overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-linear-to-br from-card to-card/80 backdrop-blur-xs">
                  <div class="p-8 text-center">
                    <h4 class="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p class="text-muted-foreground text-base mb-6 leading-relaxed">
                      {_(project.description)}
                    </p>
                    
                    <div class="flex flex-wrap gap-2 mb-6 justify-center">
                      {project.technologies.map((tech) => (
                        <span key={tech} class="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-secondary/80 text-secondary-foreground border border-secondary/20 hover:bg-secondary transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div class="flex gap-3 justify-center">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                        >
                          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          {_`projectsViewCode`}
                        </a>
                      )}
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                          </svg>
                          {_`projectsViewDemo`}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Freelance Projects Section - Centrado */}
        <div class="mb-16">
          <h3 class="text-3xl font-bold text-center mb-10 text-foreground">
            {_`projectsFreelanceTitle`}
          </h3>
          <div class="flex justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl">
              {freelanceProjects.map((project) => (
                <div key={project.id} class="group relative overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-linear-to-br from-card to-card/80 backdrop-blur-xs">
                  <div class="p-6 text-center">
                    <h4 class="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p class="text-muted-foreground text-sm mb-5 leading-relaxed">
                      {_(project.description)}
                    </p>
                    
                    <div class="flex flex-wrap gap-2 mb-5 justify-center">
                      {project.technologies.map((tech) => (
                        <span key={tech} class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-secondary/80 text-secondary-foreground border border-secondary/20 hover:bg-secondary transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.url && (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                        </svg>
                        {_`projectsViewProject`}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}); 