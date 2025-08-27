import { component$, getLocale, useSignal, $ } from '@builder.io/qwik'
import { locales } from 'compiled-i18n'
import { LuLanguages, LuChevronDown } from '@qwikest/icons/lucide'
import { Button } from './ui/button/button'

export const LocaleSelector = component$(() => {
	const currentLocale = getLocale()
	const isOpen = useSignal(false)
	
	const toggleDropdown = $(() => {
		isOpen.value = !isOpen.value
	})
	
	const closeDropdown = $(() => {
		isOpen.value = false
	})
	
	return (
		<div class="relative">
			<Button 
				look="ghost" 
				size="icon" 
				onClick$={toggleDropdown}
				aria-label="Select language"
				aria-expanded={isOpen.value}
				class="relative"
			>
				<LuLanguages class="h-5 w-5" />
				<LuChevronDown class={`h-3 w-3 ml-1 transition-transform duration-200 ${isOpen.value ? 'rotate-180' : ''}`} />
			</Button>
			
			{isOpen.value && (
				<>
					{/* Backdrop para cerrar al hacer clic fuera */}
					<div 
						class="fixed inset-0 z-40" 
						onClick$={closeDropdown}
					/>
					
					{/* Dropdown */}
					<div class="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 min-w-[160px] py-2">
						{locales.map(locale => {
							const isCurrent = locale === currentLocale
							return (
								<a
									key={locale}
									href={`/${locale}`}
									aria-disabled={isCurrent}
									class={`block px-4 py-3 text-sm transition-colors duration-200 ${
										isCurrent 
											? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-semibold pointer-events-none' 
											: 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
									}`}
									onClick$={closeDropdown}
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