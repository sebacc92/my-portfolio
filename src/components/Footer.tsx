import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";
import { 
  LuGithub, 
  LuTwitter, 
  LuLinkedin, 
  LuInstagram, 
  LuYoutube,
  LuMail,
  LuMapPin,
  LuCode2,
  LuHeart
} from "@qwikest/icons/lucide";
import { FaTiktok } from "@qwikest/icons/font-awesome";

export default component$(() => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sebacc92",
      icon: LuGithub,
      color: "hover:text-slate-900 dark:hover:text-white",
      bgColor: "hover:bg-slate-100 dark:hover:bg-slate-700"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/sebacc92",
      icon: LuTwitter,
      color: "hover:text-blue-500",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sebastiancardoso92/",
      icon: LuLinkedin,
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/sebacc92",
      icon: LuInstagram,
      color: "hover:text-pink-500",
      bgColor: "hover:bg-pink-50 dark:hover:bg-pink-900/20"
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@sebacc92",
      icon: LuYoutube,
      color: "hover:text-red-500",
      bgColor: "hover:bg-red-50 dark:hover:bg-red-900/20"
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@sebacc92",
      icon: FaTiktok,
      color: "hover:text-pink-400",
      bgColor: "hover:bg-pink-50 dark:hover:bg-pink-900/20"
    }
  ];

  const quickLinks = [
    { name: _`navAbout`, href: "#about" },
    { name: _`navSkills`, href: "#skills" },
    { name: _`navProjects`, href: "#projects" },
    { name: _`navContact`, href: "#contact" }
  ];

  return (
    <footer class="bg-linear-to-t from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white border-t border-slate-700 dark:border-slate-800">
      <div class="container mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div class="py-12 lg:py-16">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Column */}
            <div class="lg:col-span-2 space-y-4">
              <div class="flex items-center gap-2 mb-4">
                <div class="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <LuCode2 class="w-6 h-6 text-white" />
                </div>
                <span class="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Sebastian Cardoso
                </span>
              </div>
              
              <p class="text-slate-300 leading-relaxed max-w-md">
                {_`footerDescription`}
              </p>

              {/* Contact Info */}
              <div class="space-y-2 pt-2">
                <a 
                  href="mailto:sebastiancardoso92@gmail.com"
                  class="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors group w-fit"
                >
                  <LuMail class="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span class="text-sm">sebastiancardoso92@gmail.com</span>
                </a>
                <div class="flex items-center gap-2 text-slate-300">
                  <LuMapPin class="w-4 h-4" />
                  <span class="text-sm">Miramar, Buenos Aires, Argentina</span>
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div class="space-y-4">
              <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <div class="w-1 h-6 bg-linear-to-b from-blue-500 to-purple-500 rounded-full"></div>
                {_`footerQuickLinks`}
              </h3>
              <ul class="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      class="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group w-fit"
                    >
                      <span class="w-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 group-hover:w-4 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media Column */}
            <div class="space-y-4">
              <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <div class="w-1 h-6 bg-linear-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                {_`footerSocialMedia`}
              </h3>
              <div class="grid grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class={`group relative flex items-center justify-center w-full aspect-square rounded-xl bg-slate-800/50 border border-slate-700 ${social.color} ${social.bgColor} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-slate-600`}
                    aria-label={social.name}
                    title={social.name}
                  >
                    <social.icon class="w-5 h-5 text-slate-300 group-hover:text-current transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div class="border-t border-slate-700/50 py-6">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="flex items-center gap-2 text-sm text-slate-400">
              <span>© 2025 Sebastian Cardoso.</span>
              <span class="hidden sm:inline">{_`allRightsReserved`}</span>
            </div>

            <div class="flex items-center gap-2 text-sm text-slate-400">
              <span>{_`footerMadeWith`}</span>
              <LuHeart class="w-4 h-4 text-red-500 animate-pulse" />
              <span>{_`footerUsingQwik`}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div class="h-1 bg-linear-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
    </footer>
  );
});