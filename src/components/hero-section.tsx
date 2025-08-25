import { Button } from "~/components/ui/button/button"
import { LuArrowDown, LuGithub, LuInstagram, LuLinkedin, LuMail, LuTwitter, LuYoutube } from "@qwikest/icons/lucide"
import { _ } from "compiled-i18n"

export function HeroSection() {
  return (
    <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div class="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-10"></div>

      {/* Content */}
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div class="text-center lg:text-left">
            <h1 class="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
              {_`Hola, soy`}{" "}
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Seba</span> 👋
            </h1>
            <h2 class="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mb-6">
              {_`Desarrollador Frontend`}
            </h2>
            <p class="text-lg text-muted-foreground mb-8 max-w-2xl">
              {_`Ayudo a empresas y marcas a construir y mejorar su presencia online a través de código limpio, interfaces
              modernas y experiencias de usuario excepcionales.`}
            </p>

            {/* CTA Buttons */}
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" class="bg-primary hover:bg-primary/90">
                {_`Ver mi trabajo`}
                <LuArrowDown class="ml-2 h-4 w-4" />
              </Button>
              <Button look="outline" size="lg">
                {_`Descargar CV`}
              </Button>
            </div>

            {/* Social Links */}
            <div class="flex gap-4 justify-center lg:justify-start">
              <a href="https://github.com/sebacc92" target="_blank">
                <Button look="ghost" size="sm">
                  <LuGithub class="h-5 w-5" />
                </Button>
              </a>
              <a href="https://x.com/sebacc92" target="_blank">
                <Button look="ghost" size="sm">
                  <LuTwitter class="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/sebas-dev/" target="_blank">
                <Button look="ghost" size="sm">
                  <LuLinkedin class="h-5 w-5" />
                </Button>
              </a>
              <a href="https://instagram.com/sebacc92" target="_blank">
                <Button look="ghost" size="sm">
                  <LuInstagram class="h-5 w-5" />
                </Button>
              </a>
              <a href="https://youtube.com/@sebasdev" target="_blank">
                <Button look="ghost" size="sm">
                  <LuYoutube class="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:sebas@sebas.dev" target="_blank">
                <Button look="ghost" size="sm">
                  <LuMail class="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Image/Visual */}
          <div class="relative">
            <div class="relative w-full max-w-md mx-auto">
              <div class="aspect-square rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                <div class="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <img
                    src="/professional-developer-portrait.png"
                    alt="Alex - Desarrollador Frontend"
                    class="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div class="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-bounce"></div>
              <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
