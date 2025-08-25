import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";

export const SkillsSection = component$(() => {
  const categories: { title: string; items: string[] }[] = [
    {
      title: "Frontend",
      items: [
        "HTML5", "CSS3", "Sass", "Tailwind CSS", "Less", "Stylus", "Styled Components", "CSS Modules", "PostCSS",
        "JavaScript", "TypeScript",
        "Qwik", "React", "Next.js", "Vue", "Nuxt", "Svelte", "SvelteKit", "Astro",
        "Redux Toolkit", "Zustand", "Jotai", "MobX", "RxJS",
        "Webpack", "Vite", "Rollup", "Babel",
        "Storybook", "Framer Motion", "GSAP",
        "Accessibility (a11y)", "Web Components", "PWAs", "Service Workers"
      ]
    },
    {
      title: "Backend",
      items: [
        "Node.js", "Express", "Fastify", "NestJS", "Hapi",
        "GraphQL (Apollo, Yoga)", "REST", "tRPC",
        "WebSockets",
        "PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis",
        "Prisma", "TypeORM", "Mongoose", "Drizzle",
        "Authentication (JWT, OAuth2, SSO)",
        "File Storage (S3, GCS)", "Email (SES, Sendgrid)"
      ]
    },
    {
      title: "Architecture & Patterns",
      items: [
        "Domain-Driven Design (DDD)", "Hexagonal Architecture", "Clean Architecture",
        "CQRS", "Event Sourcing", "Microservices", "Monorepos (Nx, Turborepo)",
        "Design Patterns", "SOLID", "Twelve-Factor App"
      ]
    },
    {
      title: "Testing & QA",
      items: [
        "Jest", "Vitest", "Mocha/Chai", "Testing Library", "Cypress", "Playwright",
        "Contract Testing (Pact)", "Storybook Testing", "Mutation Testing", "TDD/BDD"
      ]
    },
    {
      title: "DevOps & Cloud",
      items: [
        "Docker", "Docker Compose", "Kubernetes", "Helm",
        "AWS (EC2, ECS/EKS, Lambda, S3, RDS, CloudFront, Route53)",
        "GCP (Cloud Run, GKE, Cloud Functions)", "Azure",
        "CI/CD (GitHub Actions, GitLab CI, Jenkins)", "Terraform", "Ansible",
        "Monitoring (Prometheus, Grafana)", "Logging (ELK, Loki)", "Sentry", "New Relic"
      ]
    },
    {
      title: "Mobile & Desktop",
      items: [
        "React Native", "Expo", "Flutter", "Ionic", "Capacitor",
        "Electron", "Tauri", "PWA Offline"
      ]
    },
    {
      title: "Data & Analytics",
      items: [
        "ETL", "dbt", "Airflow", "BigQuery", "Athena", "Redshift",
        "BI (Metabase, Superset)", "Data Visualization (D3, ECharts)"
      ]
    },
    {
      title: "Security",
      items: [
        "OWASP Top 10", "CSP", "CSRF", "XSS", "SQLi prevention", "Secrets Management",
        "mTLS", "Hashing/Encryption", "Key Rotation"
      ]
    },
    {
      title: "Collaboration & Process",
      items: [
        "Scrum/Kanban", "Jira", "Azure DevOps", "Confluence",
        "Code Review", "Mentoring", "Tech Leadership", "Documentation"
      ]
    }
  ];

  return (
    <section id="skills" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12 space-y-2">
          <h2 class="text-3xl md:text-4xl font-bold">{_`skillsTitle`}</h2>
          <p class="text-muted-foreground max-w-3xl mx-auto">{_`skillsSubtitle`}</p>
        </div>

        <div class="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <div class="rounded-2xl border bg-card text-card-foreground shadow-sm p-6" key={category.title}>
              <h3 class="text-xl font-semibold mb-3">{category.title}</h3>
              <div class="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} class="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-background">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}); 