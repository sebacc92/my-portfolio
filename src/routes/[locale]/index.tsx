import { component$ } from "@builder.io/qwik";
import { routeAction$, type DocumentHead } from "@builder.io/qwik-city";
import { HeroSection } from "~/components/hero-section";
import { SkillsSection } from "~/components/skills-section";
import { ProjectsSection } from "~/components/projects-section";
// import { TestimonialsSection } from "~/components/testimonials-section";
import { ContactSection } from "~/components/contact-section";

export const useContact = routeAction$(async (data, requestEvent) => {
  const token = (data as any)['cf-turnstile-response'] as string | undefined;
  if (!token) {
    return { success: false, message: 'Falta la verificación anti-bots. Por favor, intenta nuevamente.' };
  }

  const SECRET_KEY = requestEvent.env.get('CLOUDFLARE_TURNSTILE_SECRET_KEY');
  if (!SECRET_KEY) {
    console.error('Falta TURNSTILE_SECRET_KEY en el servidor');
    return { success: false, message: 'Error de configuración del servidor (captcha).' };
  }

  const remoteip =
    requestEvent.request.headers.get('cf-connecting-ip') ||
    requestEvent.request.headers.get('x-forwarded-for')?.split(',')[0] ||
    undefined;

  let result: any;
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: SECRET_KEY, response: token, remoteip }),
    });
    result = await response.json();
  } catch (error) {
    console.error('Turnstile validation error:', error);
    return { success: false, message: 'Error validando el captcha.' };
  }

  if (result?.action && result.action !== 'contact') {
    console.warn('Acción inesperada en Turnstile:', result.action);
    return { success: false, message: 'Validación de seguridad no válida (action mismatch).' };
  }

  if (!result?.success) {
    console.warn('Turnstile inválido:', result);
    const code = result['error-codes']?.join(', ') ?? 'desconocido';
    return { success: false, message: `La validación falló (${code}). Por favor, intenta nuevamente.` };
  }

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_CONTACT_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const PRIVATE_KEY = requestEvent.env.get('EMAILJS_PRIVATE_KEY');

  if (!SERVICE_ID || !TEMPLATE_CONTACT_ID || !PUBLIC_KEY || !PRIVATE_KEY) {
    console.error('Faltan credenciales de EmailJS');
    return { success: false, message: 'Faltan credenciales de EmailJS en el servidor.' };
  }

  const payload = {
    from_name: (data as any).nombre,
    from_email: (data as any).email,
    telefono: (data as any).telefono,
    proyecto: (data as any).proyecto,
  };

  
  try {
    await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_CONTACT_ID,
        user_id: PUBLIC_KEY,
        template_params: payload,
        accessToken: PRIVATE_KEY,
      }),
    });
    return { success: true, message: '¡Mensaje enviado correctamente! Te responderemos pronto.' };
  } catch (err: any) {
    console.error('EmailJS error', err);
    return { success: false, message: 'Error al enviar el mensaje. Intenta nuevamente.' };
  }
});

export default component$(() => {
  return (
    <main class="min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </main>
  )
});

export const head: DocumentHead = ({ url, params }) => {
  // Extract locale from URL pathname (e.g., /en/ or /es/)
  const locale = params.locale || 'en';
  const baseUrl = url.origin;
  
  return {
    title: "Sebastian Cardoso - Frontend Developer | Portfolio",
    meta: [
      {
        name: "description",
        content: locale === 'es' 
          ? "Desarrollador Frontend especializado en Qwik, React, TypeScript y Tailwind CSS. Creo experiencias web modernas con enfoque en rendimiento, accesibilidad y diseño atractivo."
          : "Frontend Developer specialized in Qwik, React, TypeScript and Tailwind CSS. Building modern web experiences with focus on performance, accessibility and attractive design.",
      },
      {
        name: "keywords",
        content: locale === 'es'
          ? "desarrollador frontend, Qwik, React, TypeScript, Tailwind CSS, desarrollo web, portfolio, programador"
          : "frontend developer, Qwik, React, TypeScript, Tailwind CSS, web development, portfolio, programmer",
      },
      {
        name: "author",
        content: "Sebastian Cardoso",
      },
      {
        property: "og:title",
        content: "Sebastian Cardoso - Frontend Developer",
      },
      {
        property: "og:description",
        content: locale === 'es'
          ? "Desarrollador Frontend especializado en Qwik, React, TypeScript y Tailwind CSS."
          : "Frontend Developer specialized in Qwik, React, TypeScript and Tailwind CSS.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: url.href,
      },
      {
        property: "og:image",
        content: `${baseUrl}/hero-dark.webp`,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Sebastian Cardoso - Frontend Developer",
      },
      {
        name: "twitter:description",
        content: locale === 'es'
          ? "Desarrollador Frontend especializado en Qwik, React, TypeScript y Tailwind CSS."
          : "Frontend Developer specialized in Qwik, React, TypeScript and Tailwind CSS.",
      },
      {
        name: "twitter:image",
        content: `${baseUrl}/hero-dark.webp`,
      },
      {
        name: "theme-color",
        content: "#0ea5e9",
      },
      {
        name: "color-scheme",
        content: "dark light",
      },
    ],
    links: [
      {
        rel: "alternate",
        hreflang: "en",
        href: `${baseUrl}/en${url.pathname.replace(/^\/[a-z]{2}/, '')}`,
      },
      {
        rel: "alternate",
        hreflang: "es",
        href: `${baseUrl}/es${url.pathname.replace(/^\/[a-z]{2}/, '')}`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${baseUrl}/en${url.pathname.replace(/^\/[a-z]{2}/, '')}`,
      },
    ],
  };
};