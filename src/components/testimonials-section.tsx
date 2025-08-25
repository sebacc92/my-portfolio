import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";

export const TestimonialsSection = component$(() => {
  const testimonials = [
    {
      name: "María González",
      position: "CEO, InnovaTech",
      content:
        "Alex transformó completamente nuestra presencia digital. Su atención al detalle y conocimiento técnico son excepcionales. Recomiendo su trabajo sin dudarlo.",
      rating: 5,
      avatar: "/professional-woman-ceo.png",
    },
    {
      name: "Carlos Ruiz",
      position: "CTO, StartupFlow",
      content:
        "Trabajar con Alex fue una experiencia increíble. Entregó el proyecto antes de tiempo y superó todas nuestras expectativas. Un verdadero profesional.",
      rating: 5,
      avatar: "/professional-man-cto.png",
    },
    {
      name: "Ana Martín",
      position: "Product Manager, TechSolutions",
      content:
        "La calidad del código y la interfaz que desarrolló Alex es impresionante. Nuestros usuarios han notado una mejora significativa en la experiencia.",
      rating: 5,
      avatar: "/professional-woman-product-manager.png",
    },
  ];

  return (
    <section id="testimonials" class="py-20 bg-muted/30">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12 space-y-2">
          <h2 class="text-3xl md:text-4xl font-bold">{_`testimonialsTitle`}</h2>
          <p class="text-muted-foreground max-w-3xl mx-auto">{_`testimonialsSubtitle`}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} class="rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div class="p-6">
                <div class="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} class="i-lucide-star h-4 w-4 text-yellow-400"></span>
                  ))}
                </div>
                <p class="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div class="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    class="w-12 h-12 rounded-full object-cover"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h4 class="font-semibold">{testimonial.name}</h4>
                    <p class="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}); 