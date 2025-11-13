import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { HeroSection } from "~/components/hero-section";
import { SkillsSection } from "~/components/skills-section";
import { ProjectsSection } from "~/components/projects-section";
// import { TestimonialsSection } from "~/components/testimonials-section";
import { ContactSection } from "~/components/contact-section";

export const head: DocumentHead = ({ url, params }) => {
  // Extract locale from URL pathname (e.g., /en/ or /es/)
  const locale = params.locale || 'en';
  const baseUrl = url.origin;
  
  return {
    title: "Sebastian Cardoso - Frontend Developer | Portfolio",
    meta: [
      {
        name: "description",
        content: locale === 'es' 
          ? "Desarrollador Frontend especializado en Qwik, React, TypeScript y Tailwind CSS. Creo experiencias web modernas con enfoque en rendimiento, accesibilidad y diseño atractivo."
          : "Frontend Developer specialized in Qwik, React, TypeScript and Tailwind CSS. Building modern web experiences with focus on performance, accessibility and attractive design.",
      },
      {
        name: "keywords",
        content: locale === 'es'
          ? "desarrollador frontend, Qwik, React, TypeScript, Tailwind CSS, desarrollo web, portfolio, programador"
          : "frontend developer, Qwik, React, TypeScript, Tailwind CSS, web development, portfolio, programmer",
      },
      {
        name: "author",
        content: "Sebastian Cardoso",
      },
      {
        property: "og:title",
        content: "Sebastian Cardoso - Frontend Developer",
      },
      {
        property: "og:description",
        content: locale === 'es'
          ? "Desarrollador Frontend especializado en Qwik, React, TypeScript y Tailwind CSS."
          : "Frontend Developer specialized in Qwik, React, TypeScript and Tailwind CSS.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: url.href,
      },
      {
        property: "og:image",
        content: `${baseUrl}/hero-dark.webp`,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Sebastian Cardoso - Frontend Developer",
      },
      {
        name: "twitter:description",
        content: locale === 'es'
          ? "Desarrollador Frontend especializado en Qwik, React, TypeScript y Tailwind CSS."
          : "Frontend Developer specialized in Qwik, React, TypeScript and Tailwind CSS.",
      },
      {
        name: "twitter:image",
        content: `${baseUrl}/hero-dark.webp`,
      },
      {
        name: "theme-color",
        content: "#0ea5e9",
      },
      {
        name: "color-scheme",
        content: "dark light",
      },
    ],
    links: [
      {
        rel: "alternate",
        hreflang: "en",
        href: `${baseUrl}/en${url.pathname.replace(/^\/[a-z]{2}/, '')}`,
      },
      {
        rel: "alternate",
        hreflang: "es",
        href: `${baseUrl}/es${url.pathname.replace(/^\/[a-z]{2}/, '')}`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${baseUrl}/en${url.pathname.replace(/^\/[a-z]{2}/, '')}`,
      },
    ],
  };
};

export default component$(() => {
  return (
    <main class="min-h-screen">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </main>
  )
});