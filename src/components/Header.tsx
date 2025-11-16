import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";
import { Button } from "~/components/ui/button/button"
import { LuMenu, LuX } from "@qwikest/icons/lucide";
import { _ } from "compiled-i18n";
import Logo from "~/components/Logo";
import { LocaleSelector } from "./locale-selector";
import { ThemeSwitch } from "~/components/ThemeSwitch";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const isMenuOpen = useSignal(false);
  const mobileMenuRef = useSignal<HTMLElement>();
  const firstMenuItemRef = useSignal<HTMLAnchorElement>();

  const navigation = [
    { name: _`Skills`, href: "#skills" },
    { name: _`Projects`, href: "#projects" },
    { name: _`Contact`, href: "#contact" },
  ];

  // Manejar el foco cuando se abre el menú móvil
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => isMenuOpen.value);
    if (isMenuOpen.value && firstMenuItemRef.value) {
      // Usar requestAnimationFrame para asegurar que el DOM esté actualizado
      requestAnimationFrame(() => {
        firstMenuItemRef.value?.focus();
      });
    }
  });

  // Manejar tecla Escape para cerrar el menú
  const handleKeyDown = $((event: KeyboardEvent) => {
    if (event.key === 'Escape' && isMenuOpen.value) {
      isMenuOpen.value = false;
    }
  });

  const toggleMenu = $(() => {
    isMenuOpen.value = !isMenuOpen.value;
  });

  const closeMenu = $(() => {
    isMenuOpen.value = false;
  });

  return (
    <header class="fixed top-0 left-0 right-0 z-50 h-16 bg-white dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div class="container mx-auto px-4 h-full">
        <nav class="flex items-center justify-between h-full" aria-label="Main navigation" role="navigation">
          {/* Logo */}
          <Link 
            href="/" 
            class="flex items-center space-x-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 rounded-lg px-1" 
            aria-label={_`Home`}
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav class="hidden md:flex items-center space-x-8" aria-label="Desktop navigation" role="navigation">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                class="transition-colors hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 rounded-lg px-1 py-1"
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div class="flex items-center space-x-2" role="toolbar" aria-label="Header controls">
            {/* Language Selector */}
            <LocaleSelector />

            {/* Theme Toggle */}
            <ThemeSwitch />

            {/* Mobile Menu Button */}
            <Button 
              look="ghost" 
              size="icon" 
              class="md:hidden text-gray-700 dark:text-gray-300" 
              onClick$={toggleMenu}
              onKeyDown$={handleKeyDown}
              aria-label={isMenuOpen.value ? _`Close menu` : _`Open menu`}
              aria-expanded={isMenuOpen.value}
              aria-controls="mobile-navigation"
              type="button"
            >
              {isMenuOpen.value ? <LuX class="h-5 w-5" aria-hidden="true" /> : <LuMenu class="h-5 w-5" aria-hidden="true" />}
              <span class="sr-only">{isMenuOpen.value ? _`Close menu` : _`Open menu`}</span>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen.value && (
          <nav 
            id="mobile-navigation"
            ref={mobileMenuRef}
            class="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/95 backdrop-blur-md" 
            aria-label="Mobile navigation"
            role="navigation"
            onKeyDown$={handleKeyDown}
          >
            <div class="flex flex-col space-y-3 pt-4">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  ref={index === 0 ? firstMenuItemRef : undefined}
                  href={item.href}
                  class="px-4 py-3 rounded-lg transition-all duration-300 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
                  onClick$={closeMenu}
                  aria-label={`Navigate to ${item.name} section`}
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