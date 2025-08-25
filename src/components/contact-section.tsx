import { component$, useStore, $ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";
import { Button } from "~/components/ui/button/button";

export const ContactSection = component$(() => {
  const formData = useStore({ name: "", email: "", subject: "", message: "" });

  const handleSubmit$ = $(async () => {
    console.log("Form submitted:", { ...formData });
  });

  return (
    <section id="contact" class="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
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
                  <span class="i-lucide-mail h-5 w-5 text-primary"></span>
                </div>
                <div>
                  <h4 class="font-semibold">{_`contactEmail`}</h4>
                  <p class="text-muted-foreground">alex@miportafolio.com</p>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span class="i-lucide-phone h-5 w-5 text-primary"></span>
                </div>
                <div>
                  <h4 class="font-semibold">{_`contactPhone`}</h4>
                  <p class="text-muted-foreground">+34 123 456 789</p>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span class="i-lucide-map-pin h-5 w-5 text-primary"></span>
                </div>
                <div>
                  <h4 class="font-semibold">{_`contactLocation`}</h4>
                  <p class="text-muted-foreground">Madrid, España</p>
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
                    <input id="name" name="name" class="w-full rounded-md border bg-background px-3 py-2" placeholder={_`contactNamePlaceholder`} value={formData.name} onInput$={(e) => (formData.name = (e.target as HTMLInputElement).value)} required />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium mb-2">{_`contactEmail`}</label>
                    <input id="email" name="email" type="email" class="w-full rounded-md border bg-background px-3 py-2" placeholder="tu@email.com" value={formData.email} onInput$={(e) => (formData.email = (e.target as HTMLInputElement).value)} required />
                  </div>
                </div>

                <div>
                  <label for="subject" class="block text-sm font-medium mb-2">{_`contactSubject`}</label>
                  <input id="subject" name="subject" class="w-full rounded-md border bg-background px-3 py-2" placeholder={_`contactSubjectPlaceholder`} value={formData.subject} onInput$={(e) => (formData.subject = (e.target as HTMLInputElement).value)} required />
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium mb-2">{_`contactMessage`}</label>
                  <textarea id="message" name="message" rows={5} class="w-full rounded-md border bg-background px-3 py-2" placeholder={_`contactMessagePlaceholder`} value={formData.message} onInput$={(e) => (formData.message = (e.target as HTMLTextAreaElement).value)} required />
                </div>

                <Button type="submit" size="lg" class="w-full">
                  {_`contactSend`}
                  <span class="i-lucide-send ml-2 h-4 w-4"></span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}); 