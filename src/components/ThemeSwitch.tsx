import { component$, createContextId, type Signal, useContextProvider, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";
import { Button } from "~/components/ui/button/button";
import { LuMoon, LuSun } from "@qwikest/icons/lucide";

export const ThemeContext = createContextId<Signal<string>>(
    'docs.theme-context'
);

export const ThemeSwitch = component$(() => {
    const theme = useSignal<'light' | 'dark'>('dark');
    useContextProvider(ThemeContext, theme);

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        const htmlTheme = document.documentElement.className || 'dark';
        theme.value = htmlTheme as 'light' | 'dark';

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme && savedTheme !== htmlTheme) {
            theme.value = savedTheme as 'light' | 'dark';
            document.documentElement.className = savedTheme;
        } else if (!savedTheme) {
            localStorage.setItem('theme', htmlTheme);
        }
    });

    const toggleTheme = $(() => {
        const newTheme = theme.value === 'light' ? 'dark' : 'light';
        document.documentElement.className = newTheme;
        localStorage.setItem('theme', newTheme);
        theme.value = newTheme;
    });

    return (
        <Button
            type="button"
            look="ghost"
            size="icon"
            class="relative text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
            aria-label={theme.value === 'dark' ? _`themeToggleLight` : _`themeToggleDark`}
            onClick$={toggleTheme}
        >
            <span class={theme.value === 'light' ? 'block' : 'hidden'}>
                <LuSun class="h-5 w-5" aria-hidden="true" />
            </span>
            <span class={theme.value === 'dark' ? 'block' : 'hidden'}>
                <LuMoon class="h-5 w-5" aria-hidden="true" />
            </span>
            <span class="sr-only">{_`Toggle theme`}</span>
        </Button>
    );
}); 