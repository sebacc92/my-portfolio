import { component$, useSignal } from "@builder.io/qwik";
import { Button } from "~/components/ui/button/button"
import { LuMenu, LuX } from "@qwikest/icons/lucide";
import { _ } from "compiled-i18n";
import Logo from "~/components/Logo";
import { LocaleSelector } from "./locale-selector";
import { ThemeSwitch } from "~/components/ThemeSwitch";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const isMenuOpen = useSignal(false);

  const navigation = [
    { name: _`Skills`, href: "#skills" },
    { name: _`Projects`, href: "#projects" },
    { name: _`Contact`, href: "#contact" },
  ];

  return (
    <header class="fixed top-0 left-0 right-0 z-50 h-16 bg-white dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div class="container mx-auto px-4 h-full">
        <nav class="flex items-center justify-between h-full" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" class="flex items-center space-x-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 rounded-lg px-1" aria-label={_`Home`}>
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div class="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                class="transition-colors hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 rounded-lg px-1 py-1"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div class="flex items-center space-x-2">
            {/* Language Selector */}
            <LocaleSelector />

            {/* Theme Toggle */}
            <ThemeSwitch />

            {/* Mobile Menu Button */}
            <Button 
              look="ghost" 
              size="icon" 
              class="md:hidden text-gray-700 dark:text-gray-300" 
              onClick$={() => (isMenuOpen.value = !isMenuOpen.value)} 
              aria-label={isMenuOpen.value ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen.value}
            >
              {isMenuOpen.value ? <LuX class="h-5 w-5" aria-hidden="true" /> : <LuMenu class="h-5 w-5" aria-hidden="true" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen.value && (
          <nav class="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/95 backdrop-blur-md" aria-label="Mobile navigation">
            <div class="flex flex-col space-y-3 pt-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  class="px-4 py-3 rounded-lg transition-all duration-300 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
                  onClick$={() => (isMenuOpen.value = false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
});