import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";

type PersonalProject = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  type: string;
  featured: boolean;
  demo?: string;
};

const personalProjects: PersonalProject[] = [
  {
    id: 1,
    title: "Geounity",
    description: "projectsGeounityDescription",
    technologies: ["Qwik", "TypeScript", "Tailwind CSS", "Python"],
    github: "https://github.com/PactGeo/",
    type: "personal",
    featured: false
  },
  {
    id: 2,
    title: "Qwik Raffle",
    description: "projectsQwikRaffleDescription",
    technologies: ["Qwik", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/sebacc92/qwik-raffle",
    type: "personal",
    featured: false
  }
];

const freelanceProjects = [
  {
    id: 3,
    title: "Grupo UDEC",
    description: "projectsGrupoUdecDescription",
    technologies: ["WordPress"],
    url: "https://grupoudec.com.ar/",
    type: "freelance"
  },
  {
    id: 4,
    title: "ERCON",
    description: "projectsErconDescription",
    technologies: ["WordPress"],
    url: "https://ercon.ar",
    type: "freelance"
  },
  {
    id: 5,
    title: "AMP Agremiación Médica Platense",
    description: "projectsAmpDescription",
    technologies: ["WordPress", "Migration"],
    url: "https://amp.org.ar/",
    type: "freelance"
  },
  {
    id: 6,
    title: "Italianos en Miramar",
    description: "projectsItalianosEnMiramarDescription",
    technologies: ["Qwik", "TypeScript", "Strapi", "Tailwind CSS"],
    url: "http://italianosenmiramar.com/",
    type: "freelance"
  },
  {
    id: 7,
    title: "Coach Fabián Avendaño",
    description: "projectsCoachFabianDescription",
    technologies: ["Qwik", "TypeScript", "Tailwind CSS"],
    url: "https://coach-fabian-avendano.netlify.app/",
    type: "freelance"
  },
  {
    id: 8,
    title: "Urban Style Miramar",
    description: "projectsUrbanStyleMiramarDescription",
    technologies: ["TiendaNube", "E-commerce", "Payment Integration"],
    url: "https://urbanstylemiramar.mitiendanube.com/",
    type: "freelance"
  }
];

export const ProjectsSection = component$(() => {
  return (
    <section id="projects" class="py-20 lg:py-28 bg-linear-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300" aria-labelledby="projects-heading">
      <div class="container mx-auto px-4 lg:px-6 max-w-7xl">
        {/* Header mejorado */}
        <div class="text-center mb-20 space-y-4">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-800 mb-4">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
            <span class="text-sm font-semibold text-blue-700 dark:text-blue-300">Portfolio</span>
          </div>
          
          <h2 id="projects-heading" class="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent">
            {_`projectsTitle`}
          </h2>
          <p class="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {_`projectsSubtitle`}
          </p>
        </div>

        {/* Personal Projects Section */}
        <div class="mb-24">
          <div class="flex items-center gap-4 mb-12">
            <div class="h-1 flex-1 bg-linear-to-r from-transparent via-blue-500 to-blue-500 dark:via-blue-400 dark:to-blue-400 rounded-full"></div>
            <h3 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {_`projectsPersonalTitle`}
            </h3>
            <div class="h-1 flex-1 bg-linear-to-l from-transparent via-purple-500 to-purple-500 dark:via-purple-400 dark:to-purple-400 rounded-full"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {personalProjects.map((project) => (
              <div 
                key={project.id} 
                class={`group relative overflow-hidden rounded-2xl border-2 ${project.featured ? 'border-blue-300 dark:border-blue-700' : 'border-slate-200 dark:border-slate-700'} shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-slate-800/90 backdrop-blur-sm hover:-translate-y-2`}
              >
                {project.featured && (
                  <div class="absolute -top-8 -right-8 w-32 h-32 bg-linear-to-br from-blue-500 to-purple-500 rotate-45 flex items-end justify-center pb-8">
                    <span class="text-white text-xs font-bold -rotate-45">Featured</span>
                  </div>
                )}
                
                <div class="absolute inset-0 bg-linear-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" role="presentation"></div>
                
                <div class="relative p-8">
                  {/* Icono decorativo */}
                  <div class="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                  </div>

                  <h4 class="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p class="text-slate-600 dark:text-slate-300 text-base mb-6 leading-relaxed min-h-[72px]">
                    {_(project.description)}
                  </p>
                  
                  <div class="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        class="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div class="flex gap-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        class="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                        aria-label={`View ${project.title} live demo`}
                        class="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-linear-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Freelance Projects Section */}
        <div>
          <div class="flex items-center gap-4 mb-12">
            <div class="h-1 flex-1 bg-linear-to-r from-transparent via-emerald-500 to-emerald-500 dark:via-emerald-400 dark:to-emerald-400 rounded-full"></div>
            <h3 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {_`projectsFreelanceTitle`}
            </h3>
            <div class="h-1 flex-1 bg-linear-to-l from-transparent via-teal-500 to-teal-500 dark:via-teal-400 dark:to-teal-400 rounded-full"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freelanceProjects.map((project) => (
              <div 
                key={project.id} 
                class="group relative overflow-hidden rounded-xl border-2 border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-500 bg-white dark:bg-slate-800/90 backdrop-blur-sm hover:-translate-y-2"
              >
                <div class="absolute inset-0 bg-linear-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-900/10 dark:to-teal-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" role="presentation"></div>
                
                <div class="relative p-6">
                  {/* Icono decorativo */}
                  <div class="w-12 h-12 rounded-lg bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>

                  <h4 class="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {project.title}
                  </h4>
                  
                  <p class="text-slate-600 dark:text-slate-300 text-sm mb-5 leading-relaxed line-clamp-3 min-h-[60px]">
                    {_(project.description)}
                  </p>
                  
                  <div class="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-emerald-300 dark:hover:border-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.url && (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} website`}
                      class="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white bg-linear-to-r from-emerald-600 to-teal-600 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </section>
  );
});