import { component$, useStylesScoped$, $ } from '@builder.io/qwik';
import { Popover, usePopover } from '@qwik-ui/headless';
import { LuCheckCircle2, LuXCircle, LuInfo, LuAlertTriangle, LuX } from '@qwikest/icons/lucide';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  id: string;
  type?: ToastType;
  title?: string;
  message: string;
  duration?: number;
}

export default component$<ToastProps>(({ id, type = 'info', title, message, duration = 4000 }) => {
  useStylesScoped$(`
    @keyframes toast-progress { 
      from { transform: scaleX(1) } 
      to { transform: scaleX(0) } 
    }
    .progress { 
      transform-origin: left; 
      will-change: transform;
      animation: toast-progress var(--d, 4000ms) linear forwards; 
    }
  `);

  const { hidePopover } = usePopover(id);

  const onToggle$ = $((ev: Event) => {
    const el = ev.target as HTMLElement;
    const isOpen = el.hasAttribute('data-open');
    const prev = (el as any)._t as number | undefined;
    if (prev) window.clearTimeout(prev);
    if (isOpen) {
      // Usar requestAnimationFrame para evitar reflow forzado
      requestAnimationFrame(() => {
        (el as any)._t = window.setTimeout(() => hidePopover(), duration);
      });
    }
  });

  const palette = {
    success: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    error: 'bg-red-50 border-red-200 text-red-900',
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
  } as const;

  const iconFor = {
    success: <LuCheckCircle2 class="h-5 w-5 text-emerald-600" />,
    error: <LuXCircle class="h-5 w-5 text-red-600" />,
    info: <LuInfo class="h-5 w-5 text-blue-600" />,
    warning: <LuAlertTriangle class="h-5 w-5 text-amber-600" />,
  } as const;

  return (
    <Popover.Root id={id} manual floating={false} gutter={0}>
      <Popover.Panel
        onToggle$={onToggle$}
        class={`
          fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]
          max-w-sm w-[92vw] sm:w-[420px]
          rounded-lg border shadow-xl pointer-events-auto
          transition-opacity duration-200
          data-[open]:opacity-100 data-[open]:translate-y-0
          data-[closed]:opacity-0 data-[closed]:translate-y-2
          will-change-[opacity,transform]
          ${palette[type]}
        `}
        role="status"
        aria-live={type === 'error' ? 'assertive' : 'polite'}
      >
        <div class="flex items-start gap-3 p-4">
          <div class="shrink-0 mt-0.5">{iconFor[type]}</div>
          <div class="flex-1">
            {title && <p class="font-medium leading-5 mb-0.5">{title}</p>}
            <p class="text-sm opacity-90">{message}</p>
          </div>
          <button
            type="button"
            class="p-1 rounded-md hover:bg-black/5 transition-colors"
            aria-label="Cerrar notificación"
            onClick$={hidePopover}
          >
            <LuX class="h-4 w-4" />
          </button>
        </div>
        <div class="h-1 w-full bg-black/5 overflow-hidden rounded-b-lg">
          <div class="h-full bg-current/40 progress" style={{ '--d': `${duration}ms` }} />
        </div>
      </Popover.Panel>
    </Popover.Root>
  );
});