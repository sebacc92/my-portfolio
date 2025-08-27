import { component$ } from "@builder.io/qwik";
import { HeroSection } from "~/components/hero-section";
import { SkillsSection } from "~/components/skills-section";
import { ProjectsSection } from "~/components/projects-section";
// import { TestimonialsSection } from "~/components/testimonials-section";
import { ContactSection } from "~/components/contact-section";

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