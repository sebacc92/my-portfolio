import { Button, buttonVariants } from "~/components/ui/button/button"
import { LuArrowDown, LuDownload, LuGithub, LuInstagram, LuLinkedin, LuTwitter, LuYoutube } from "@qwikest/icons/lucide"
import { _ } from "compiled-i18n"
import { NavLink } from "./NavLink"
import { FaTiktok } from "@qwikest/icons/font-awesome";
import SebastianCardosoCastilloImage from "~/media/Sebastian-Cardoso-Castillo.webp?jsx";
// import HeroLightImage from "~/media/hero-light.webp?jsx";
// import HeroDarkImage from "~/media/hero-dark.webp?jsx";

export function HeroSection() {
  const socialButtonClass = `${buttonVariants({ look: "ghost", size: "icon" })} h-12 w-12 min-h-[3rem] min-w-[3rem] text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 transition-transform`;

  return (
    <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-blue-50 via-indigo-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Gradient Background */}
      <div class="absolute inset-0 bg-linear-to-br from-primary via-secondary to-accent opacity-10 dark:opacity-20"></div>

      {/* Content */}
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div class="text-center lg:text-left">
            <h1 class="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-gray-800 dark:text-white mb-6">
              {_`heroGreeting`} {" "}
              <span class="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Seba</span> <span class="inline-block animate-wave">👋</span>
            </h1>
            <h2 class="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 mb-6">
              {_`heroTitle`}
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              {_`heroDescription`}
            </p>

            {/* CTA Buttons */}
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <NavLink href="#experience">
                <Button
                  size="lg"
                  class="group bg-linear-to-r from-sky-600 to-blue-700 text-white font-semibold shadow-lg hover:from-sky-700 hover:to-blue-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 w-full sm:w-auto min-w-[200px]"
                >
                  {_`heroViewWork`}
                  <LuArrowDown class="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                </Button>
              </NavLink>
              <Button
                look="outline"
                size="lg"
                class="group border-gray-300 dark:border-gray-600 text-slate-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 w-full sm:w-auto min-w-[200px]"
                onClick$={() => {
                  const link = document.createElement('a');
                  link.href = '/CV-Sebastian Cardoso.pdf';
                  link.download = 'Sebastian_Cardoso_CV.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                aria-label={_`heroDownloadCV`}
              >
                <LuDownload class="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
                {_`heroDownloadCV`}
              </Button>
            </div>

            {/* Social Links */}
            <nav class="flex gap-3 flex-wrap justify-center lg:justify-start" aria-label="Social media links">
              <a
                href="https://github.com/sebacc92"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                class={socialButtonClass}
                title="GitHub"
              >
                <LuGithub class="h-7 w-7" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/in/sebastiancardoso92/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                class={socialButtonClass}
                title="LinkedIn"
              >
                <LuLinkedin class="h-7 w-7" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/sebacc92"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                class={socialButtonClass}
                title="Instagram"
              >
                <LuInstagram class="h-7 w-7" aria-hidden="true" />
              </a>
              <a
                href="https://tiktok.com/@sebacc92"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok profile"
                class={socialButtonClass}
                title="TikTok"
              >
                <FaTiktok class="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://x.com/sebacc92"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X profile"
                class={socialButtonClass}
                title="Twitter / X"
              >
                <LuTwitter class="h-7 w-7" aria-hidden="true" />
              </a>
              <a
                href="https://youtube.com/@sebacc92"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube channel"
                class={socialButtonClass}
                title="YouTube"
              >
                <LuYoutube class="h-7 w-7" aria-hidden="true" />
              </a>
            </nav>
          </div>

          {/* Image/Visual */}
          <div class="relative">
            <div class="relative w-full max-w-[420px] mx-auto">
              <div class="aspect-square rounded-full bg-linear-to-br from-primary to-secondary p-1">
                <div class="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                  {/* Light mode image - man working outdoors at night */}
                  {/* <HeroLightImage
                    alt={_`heroImageAlt1`}
                    class="w-full h-full rounded-full object-cover dark:hidden"
                    loading="lazy"
                    fetchPriority="high"
                  /> */}
                  {/* Dark mode image - man working in forest during day */}
                  {/* <HeroDarkImage
                    alt={_`heroImageAlt2`}
                    class="w-full h-full rounded-full object-cover hidden dark:block"
                    loading="eager"
                    fetchPriority="high"
                  /> */}
                  <SebastianCardosoCastilloImage
                    alt={_`heroImageAlt1`}
                    class="w-full h-full rounded-full object-cover"
                    fetchPriority="high"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div class="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 dark:bg-primary/30 rounded-full animate-bounce" aria-hidden="true"></div>
              <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 dark:bg-secondary/30 rounded-full animate-pulse" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
