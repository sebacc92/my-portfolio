import { component$, getLocale, useSignal, useVisibleTask$, $ } from '@builder.io/qwik'
import { locales } from 'compiled-i18n'
import { LuLanguages, LuChevronDown } from '@qwikest/icons/lucide'
import { Button } from './ui/button/button'

export const LocaleSelector = component$(() => {
	const currentLocale = getLocale()
	const isOpen = useSignal(false)
	const dropdownRef = useSignal<HTMLDivElement>()
	const firstOptionRef = useSignal<HTMLAnchorElement>()
	
	const toggleDropdown = $(() => {
		isOpen.value = !isOpen.value
	})
	
	const closeDropdown = $(() => {
		isOpen.value = false
	})

	// Manejar el foco cuando se abre el dropdown
	useVisibleTask$(({ track }) => {
		track(() => isOpen.value);
		if (isOpen.value && firstOptionRef.value) {
			requestAnimationFrame(() => {
				firstOptionRef.value?.focus();
			});
		}
	});

	// Manejar tecla Escape para cerrar el dropdown
	const handleKeyDown = $((event: KeyboardEvent) => {
		if (event.key === 'Escape' && isOpen.value) {
			isOpen.value = false;
		}
	});
	
	return (
		<div class="relative" role="combobox" aria-expanded={isOpen.value} aria-haspopup="listbox" aria-label="Select language">
			<Button 
				look="ghost" 
				size="icon" 
				onClick$={toggleDropdown}
				onKeyDown$={handleKeyDown}
				aria-label="Select language"
				aria-expanded={isOpen.value}
				aria-controls="locale-dropdown"
				aria-haspopup="listbox"
				class="relative inline-flex items-center text-xl md:text-2xl"
				type="button"
			>
				<LuLanguages class="h-[1em] w-[1em]" aria-hidden="true" />
				<LuChevronDown class={`h-[0.75em] w-[0.75em] ml-1 transition-transform duration-200 ${isOpen.value ? 'rotate-180' : ''}`} aria-hidden="true" />
				<span class="sr-only">Select language</span>
			</Button>
			
			{isOpen.value && (
				<>
					{/* Backdrop para cerrar al hacer clic fuera */}
					<div 
						class="fixed inset-0 z-40" 
						onClick$={closeDropdown}
						aria-hidden="true"
					/>
					
					{/* Dropdown */}
					<div 
						id="locale-dropdown"
						ref={dropdownRef}
						class="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 min-w-[160px] py-2"
						role="listbox"
						aria-label="Language options"
						onKeyDown$={handleKeyDown}
					>
						{locales.map((locale, index) => {
							const isCurrent = locale === currentLocale
							return (
								<a
									key={locale}
									ref={index === 0 ? firstOptionRef : undefined}
									href={`/${locale}`}
									role="option"
									aria-selected={isCurrent}
									aria-disabled={isCurrent}
									class={`block px-4 py-3 text-sm transition-colors duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
										isCurrent 
											? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-semibold pointer-events-none' 
											: 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus-visible:bg-gray-50 dark:focus-visible:bg-gray-700'
									}`}
									onClick$={closeDropdown}
									aria-label={`Switch to ${locale === "es" ? "Spanish" : "English"}`}
								>
									{locale === "es" ? "🇪🇸 Español" : "🇺🇸 English"}
								</a>
							)
						})}
					</div>
				</>
			)}
		</div>
	)
})