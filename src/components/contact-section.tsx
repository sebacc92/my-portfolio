import { component$, useStore, useSignal, $ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";
import { Button } from "~/components/ui/button/button";
import emailjs from '@emailjs/browser';
import { LuMail, LuPhone, LuMapPin, LuSend, LuLoader2, LuCopy } from "@qwikest/icons/lucide";

export const ContactSection = component$(() => {
  const formData = useStore({ name: "", email: "", subject: "", message: "" });
  const isSubmitted = useSignal(false);
  const loading = useSignal(false);
  const error = useSignal<string | null>(null);
  const emailCopied = useSignal(false);

  const handleSubmit$ = $(async () => {
    loading.value = true;
    error.value = null;

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      error.value = 'Faltan credenciales de EmailJS';
      loading.value = false;
      return;
    }

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      
      isSubmitted.value = true;
      // Reset form
      formData.name = "";
      formData.email = "";
      formData.subject = "";
      formData.message = "";
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        isSubmitted.value = false;
      }, 5000);
      
    } catch (err: any) {
      error.value = 'Error al enviar: ' + (err?.message || 'Desconocido');
    } finally {
      loading.value = false;
    }
  });

  const copyEmail$ = $(async () => {
    try {
      await navigator.clipboard.writeText('sebastiancardoso92@gmail.com');
      emailCopied.value = true;
      
      // Reset copied message after 2 seconds
      setTimeout(() => {
        emailCopied.value = false;
      }, 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = 'sebastiancardoso92@gmail.com';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      emailCopied.value = true;
      setTimeout(() => {
        emailCopied.value = false;
      }, 2000);
    }
  });

  return (
    <section id="contact" class="py-20 bg-linear-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12 space-y-2">
          <h2 class="text-3xl md:text-4xl font-bold">{_`contactTitle`}</h2>
          <p class="text-muted-foreground max-w-3xl mx-auto">{_`contactSubtitle`}</p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <div class="space-y-8">
            <div>
              <h3 class="text-2xl font-bold mb-6">{_`contactLetsTalk`}</h3>
              <p class="text-muted-foreground mb-8">{_`contactIntro`}</p>
            </div>

            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <LuMail class="h-5 w-5 text-primary" />
                </div>
                <div class="flex-1">
                  <h4 class="font-semibold">{_`contactEmail`}</h4>
                  <div class="flex items-center gap-2">
                    <p class="text-muted-foreground">sebastiancardoso92@gmail.com</p>
                    <button
                      onClick$={copyEmail$}
                      title={_`contactCopy`}
                      class="p-1 hover:bg-primary/10 rounded transition-colors group"
                      disabled={emailCopied.value}
                    >
                      <LuCopy class="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </button>
                    {emailCopied.value && (
                      <span class="text-xs text-green-600 dark:text-green-400 font-medium animate-in fade-in duration-200">
                        {_`contactCopied`}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <LuPhone class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 class="font-semibold">{_`contactPhone`}</h4>
                  <p class="text-muted-foreground">+54 11 2389-5482</p>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <LuMapPin class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 class="font-semibold">{_`contactLocation`}</h4>
                  <p class="text-muted-foreground">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-2xl border bg-card text-card-foreground shadow-sm">
            <div class="p-6">
              <form preventdefault:submit onSubmit$={handleSubmit$} class="space-y-6">
                <div class="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label for="name" class="block text-sm font-medium mb-2">{_`contactName`}</label>
                    <input 
                      id="name" 
                      name="name" 
                      class="w-full rounded-md border bg-background px-3 py-2 focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" 
                      placeholder={_`contactNamePlaceholder`} 
                      value={formData.name} 
                      onInput$={(e) => (formData.name = (e.target as HTMLInputElement).value)} 
                      required 
                      disabled={loading.value}
                    />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium mb-2">{_`contactEmail`}</label>
                    <input 
                      id="email" 
                      name="email" 
                      type="email" 
                      class="w-full rounded-md border bg-background px-3 py-2 focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" 
                      placeholder="tu@email.com" 
                      value={formData.email} 
                      onInput$={(e) => (formData.email = (e.target as HTMLInputElement).value)} 
                      required 
                      disabled={loading.value}
                    />
                  </div>
                </div>

                <div>
                  <label for="subject" class="block text-sm font-medium mb-2">{_`contactSubject`}</label>
                  <input 
                    id="subject" 
                    name="subject" 
                    class="w-full rounded-md border bg-background px-3 py-2 focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" 
                    placeholder={_`contactSubjectPlaceholder`} 
                    value={formData.subject} 
                    onInput$={(e) => (formData.subject = (e.target as HTMLInputElement).value)} 
                      required 
                      disabled={loading.value}
                    />
                  </div>

                  <div>
                    <label for="message" class="block text-sm font-medium mb-2">{_`contactMessage`}</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      class="w-full rounded-md border bg-background px-3 py-2 focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none" 
                      placeholder={_`contactMessagePlaceholder`} 
                      value={formData.message} 
                      onInput$={(e) => (formData.message = (e.target as HTMLTextAreaElement).value)} 
                      required 
                      disabled={loading.value}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    class="w-full transition-all duration-200 transform hover:scale-[1.02]" 
                    disabled={loading.value}
                  >
                    {loading.value ? (
                      <>
                        <LuLoader2 class="h-4 w-4 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        {_`contactSend`}
                        <LuSend class="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  {/* Success Message */}
                  {isSubmitted.value && (
                    <div class="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <p class="text-green-700 dark:text-green-300 text-center font-medium">
                        ¡Mensaje enviado correctamente! Te responderé pronto.
                      </p>
                    </div>
                  )}

                  {/* Error Message */}
                  {error.value && (
                    <div class="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <p class="text-red-700 dark:text-red-300 text-center font-medium">
                        {error.value}
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }); 