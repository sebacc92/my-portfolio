import { component$ } from "@builder.io/qwik";
import { HeroSection } from "~/components/hero-section";
import { SkillsSection } from "~/components/skills-section";
import { ExperienceSection } from "~/components/experience-section";

export default component$(() => {
  return (
    <main class="min-h-screen">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
    </main>
  )
});