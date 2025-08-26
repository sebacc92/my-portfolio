import { Button } from "~/components/ui/button/button"
import { LuArrowDown, LuGithub, LuInstagram, LuLinkedin, LuMail, LuTwitter, LuYoutube } from "@qwikest/icons/lucide"
import { _ } from "compiled-i18n"
import { NavLink } from "./NavLink"

export function HeroSection() {
  return (
    <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Gradient Background */}
      <div class="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-10 dark:opacity-20"></div>

      {/* Content */}
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div class="text-center lg:text-left">
            <h1 class="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-gray-800 dark:text-white mb-6">
              {_`Hola, soy`}{" "}
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Seba</span> 👋
            </h1>
            <h2 class="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 mb-6">
              {_`Desarrollador Frontend`}
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              {_`Ayudo a empresas y marcas a construir y mejorar su presencia online a través de código limpio, interfaces
              modernas y experiencias de usuario excepcionales.`}
            </p>

            {/* CTA Buttons */}
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <NavLink href="#experience">
                <Button size="lg" class="bg-primary hover:bg-primary/90 text-white">
                  {_`Ver mi trabajo`}
                  <LuArrowDown class="ml-2 h-4 w-4" />
                </Button>
              </NavLink>
              <Button look="outline" size="lg" class="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                {_`Descargar CV`}
              </Button>
            </div>

            {/* Social Links */}
            <div class="flex gap-4 justify-center lg:justify-start">
              <a href="https://github.com/sebacc92" target="_blank">
                <Button look="ghost" size="sm" class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
                  <LuGithub class="h-5 w-5" />
                </Button>
              </a>
              <a href="https://x.com/sebacc92" target="_blank">
                <Button look="ghost" size="sm" class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
                  <LuTwitter class="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/sebastiancardoso92/" target="_blank">
                <Button look="ghost" size="sm" class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
                  <LuLinkedin class="h-5 w-5" />
                </Button>
              </a>
              <a href="https://instagram.com/sebacc92" target="_blank">
                <Button look="ghost" size="sm" class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
                  <LuInstagram class="h-5 w-5" />
                </Button>
              </a>
              <a href="https://youtube.com/@sebacc92" target="_blank">
                <Button look="ghost" size="sm" class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
                  <LuYoutube class="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:sebastiancardoso92@gmail.com" target="_blank">
                <Button look="ghost" size="sm" class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
                  <LuMail class="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Image/Visual */}
          <div class="relative">
            <div class="relative w-full max-w-md mx-auto">
              <div class="aspect-square rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                <div class="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                  {/* Light mode image - man working outdoors at night */}
                  <img
                    src="/hero-light.webp"
                    alt={_`Seba trabajando en su laptop al aire libre bajo las estrellas`}
                    class="w-full h-full rounded-full object-cover dark:hidden"
                  />
                  {/* Dark mode image - man working in forest during day */}
                  <img
                    src="/hero-dark.webp"
                    alt={_`Seba trabajando en su laptop en el bosque durante el día`}
                    class="w-full h-full rounded-full object-cover hidden dark:block"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div class="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 dark:bg-primary/30 rounded-full animate-bounce"></div>
              <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 dark:bg-secondary/30 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
