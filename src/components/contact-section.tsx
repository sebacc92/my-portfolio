import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Form, type ActionStore } from "@builder.io/qwik-city";
import { _ } from "compiled-i18n";
import { Button } from "~/components/ui/button/button";
import { LuMail, LuMapPin, LuSend, LuLoader2, LuCopy, LuCheckCircle2, LuAlertCircle } from "@qwikest/icons/lucide";
import type { ContactFormActionResult, ContactFormData } from "~/types/contact";

interface ContactSectionProps {
  action: ActionStore<ContactFormActionResult, ContactFormData>;
}

export const ContactSection = component$(({ action }: ContactSectionProps) => {
  const emailCopied = useSignal(false);
  const formRef = useSignal<HTMLFormElement>();

  const copyEmail$ = $(async () => {
    try {
      await navigator.clipboard.writeText("sebastiancardoso92@gmail.com");
      emailCopied.value = true;
      setTimeout(() => {
        emailCopied.value = false;
      }, 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = "sebastiancardoso92@gmail.com";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      emailCopied.value = true;
      setTimeout(() => {
        emailCopied.value = false;
      }, 2000);
    }
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => action.value);
    if (action.value?.success) {
      requestAnimationFrame(() => formRef.value?.reset());
    }
  });

  const successMessage = action.value?.success ? action.value.message ?? _`contactMessageSent` : null;
  const errorMessage = action.value && !action.value.success ? action.value.message ?? _`contactErrorSending` : null;

  return (
    <section id="contact" class="py-20 lg:py-28 bg-linear-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300 relative overflow-hidden">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-emerald-400/20 to-teal-400/20 dark:from-emerald-600/10 dark:to-teal-600/10 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 lg:px-6 relative z-10">
        <div class="text-center mb-16 space-y-4">
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent">
            {_`contactTitle`}
          </h2>
          <p class="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {_`contactSubtitle`}
          </p>
        </div>

        <div class="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto">
          <div class="lg:col-span-2 space-y-8">
            <div class="space-y-4">
              <h3 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                {_`contactLetsTalk`}
              </h3>
              <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                {_`contactIntro`}
              </p>
            </div>

            <div class="space-y-6">
              <div class="group relative overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 p-6 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg">
                <div class="absolute inset-0 bg-linear-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div class="relative flex items-start gap-4">
                  <div class="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <LuMail class="h-6 w-6 text-white" />
                  </div>

                  <div class="flex-1 min-w-0">
                    <h4 class="font-bold text-slate-900 dark:text-white mb-2 text-lg">
                      {_`contactEmail`}
                    </h4>
                    <div class="flex items-center gap-2 flex-wrap">
                      <a
                        href="mailto:sebastiancardoso92@gmail.com"
                        class="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm break-all"
                      >
                        sebastiancardoso92@gmail.com
                      </a>
                      <button
                        onClick$={copyEmail$}
                        title={_`contactCopy`}
                        class="p-1.5 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-all duration-300 group/btn shrink-0"
                        disabled={emailCopied.value}
                      >
                        {emailCopied.value ? (
                          <LuCheckCircle2 class="h-4 w-4 text-green-600 dark:text-green-400" />
                        ) : (
                          <LuCopy class="h-4 w-4 text-slate-400 group-hover/btn:text-blue-600 dark:group-hover/btn:text-blue-400 transition-colors" />
                        )}
                      </button>
                    </div>
                    {emailCopied.value && (
                      <span class="text-xs text-green-600 dark:text-green-400 font-medium mt-1 inline-block animate-in fade-in duration-200">
                        {_`contactCopied`}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div class="group relative overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 p-6 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-300 hover:shadow-lg">
                <div class="absolute inset-0 bg-linear-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-900/10 dark:to-teal-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div class="relative flex items-start gap-4">
                  <div class="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <LuMapPin class="h-6 w-6 text-white" />
                  </div>

                  <div class="flex-1">
                    <h4 class="font-bold text-slate-900 dark:text-white mb-2 text-lg">
                      {_`contactLocation`}
                    </h4>
                    <p class="text-slate-600 dark:text-slate-300 text-sm">
                      Miramar, Buenos Aires, Argentina
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-6 border-t border-slate-200 dark:border-slate-700">
              <p class="text-sm text-slate-500 dark:text-slate-400 italic">
                {_`contactResponseTime`}
              </p>
            </div>
          </div>

          <div class="lg:col-span-3">
            <div class="relative overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 shadow-xl backdrop-blur-sm">
              <div class="absolute inset-0 bg-linear-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/5 dark:to-purple-900/5"></div>

              <div class="relative p-6 md:p-8">
                <Form action={action} class="space-y-6" ref={formRef}>
                  <div class="grid sm:grid-cols-2 gap-6">
                    <div class="space-y-2">
                      <label for="name" class="block text-sm font-semibold text-slate-900 dark:text-white">
                        {_`contactName`}
                      </label>
                      <input
                        id="name"
                        name="name"
                        class="w-full rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        placeholder={_`contactNamePlaceholder`}
                        required
                        disabled={action.isRunning}
                      />
                    </div>

                    <div class="space-y-2">
                      <label for="email" class="block text-sm font-semibold text-slate-900 dark:text-white">
                        {_`contactEmail`}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        class="w-full rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        placeholder="tu@email.com"
                        required
                        disabled={action.isRunning}
                      />
                    </div>
                  </div>

                  <div class="space-y-2">
                    <label for="subject" class="block text-sm font-semibold text-slate-900 dark:text-white">
                      {_`contactSubject`}
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      class="w-full rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      placeholder={_`contactSubjectPlaceholder`}
                      required
                      disabled={action.isRunning}
                    />
                  </div>

                  <div class="space-y-2">
                    <label for="message" class="block text-sm font-semibold text-slate-900 dark:text-white">
                      {_`contactMessage`}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      class="w-full rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 resize-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      placeholder={_`contactMessagePlaceholder`}
                      required
                      disabled={action.isRunning}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    class="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    disabled={action.isRunning}
                  >
                    {action.isRunning ? (
                      <span class="flex items-center justify-center gap-2">
                        <LuLoader2 class="h-5 w-5 animate-spin" aria-hidden="true" />
                        <span>{_`contactSend`}...</span>
                      </span>
                    ) : (
                      <span class="flex items-center justify-center gap-2">
                        <span>{_`contactSend`}</span>
                        <LuSend class="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </Button>

                  {successMessage && (
                    <div class="p-4 bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl animate-in fade-in slide-in-from-top-4 duration-300" role="alert" aria-live="polite">
                      <div class="flex items-start gap-3">
                        <LuCheckCircle2 class="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <p class="text-green-800 dark:text-green-300 font-semibold">
                            {_`contactMessageSent`}
                          </p>
                          <p class="text-green-700 dark:text-green-400 text-sm mt-1">
                            {successMessage}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {errorMessage && (
                    <div class="p-4 bg-linear-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl animate-in fade-in slide-in-from-top-4 duration-300" role="alert" aria-live="assertive">
                      <div class="flex items-start gap-3">
                        <LuAlertCircle class="h-5 w-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <p class="text-red-800 dark:text-red-300 font-semibold">
                            {_`contactErrorSending`}
                          </p>
                          <p class="text-red-700 dark:text-red-400 text-sm mt-1">
                            {errorMessage}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});