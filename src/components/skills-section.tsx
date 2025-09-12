import { component$ } from "@builder.io/qwik";
import Html5 from "~/media/skills/html5.svg?jsx";
import Css3 from "~/media/skills/css3.svg?jsx";
import Javascript from "~/media/skills/javascript.svg?jsx";
import Typescript from "~/media/skills/typescript.svg?jsx";
import QwikLogo from "~/media/skills/qwik.svg?jsx";
import ReactLogo from "~/media/skills/react.svg?jsx";
import NextjsLogo from "~/media/skills/nextjs.svg?jsx";
import ReduxLogo from "~/media/skills/redux.svg?jsx";
import VueLogo from "~/media/skills/vue.svg?jsx";
import NuxtLogo from "~/media/skills/nuxt.svg?jsx";
import WebpackLogo from "~/media/skills/webpack.svg?jsx";
import SassLogo from "~/media/skills/sass.svg?jsx";
import StylusLogo from "~/media/skills/stylus.svg?jsx";
import VitejsLogo from "~/media/skills/vitejs.svg?jsx";
import TailwindcssLogo from "~/media/skills/tailwindcss.svg?jsx";
import NodejsLogo from "~/media/skills/nodejs.svg?jsx";
import ExpressLogo from "~/media/skills/express.svg?jsx";
import NestjsLogo from "~/media/skills/nestjs.svg?jsx";
import PythonLogo from "~/media/skills/python.svg?jsx";
import FastapiLogo from "~/media/skills/fastapi.svg?jsx";
import RedisLogo from "~/media/skills/redis.svg?jsx";
import PostgresqlLogo from "~/media/skills/postgresql.svg?jsx";
import MongodbLogo from "~/media/skills/mongodb.svg?jsx";
import PrismaLogo from "~/media/skills/prisma.svg?jsx";
import JestLogo from "~/media/skills/jest.svg?jsx";
import VitestLogo from "~/media/skills/vitest.svg?jsx";
import CypressLogo from "~/media/skills/cypress.svg?jsx";
import PostmanLogo from "~/media/skills/postman.svg?jsx";
import InsomniaLogo from "~/media/skills/insomnia.svg?jsx";
import DockerLogo from "~/media/skills/docker.svg?jsx";
import KubernetesLogo from "~/media/skills/kubernetes.svg?jsx";
import AwsLogo from "~/media/skills/aws.svg?jsx";
import GooglecloudLogo from "~/media/skills/googlecloud.svg?jsx";
import NetlifyLogo from "~/media/skills/netlify.svg?jsx";
import { _ } from "compiled-i18n";

export const SkillsSection = component$(() => {
  return (
    <section id="skills" class="py-20 dark:bg-slate-700">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12 space-y-2">
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow">
            {_`skillsTitle`}
          </h2>
          <p class="max-w-3xl mx-auto text-slate-600 dark:text-slate-200">{_`skillsSubtitle`}</p>
        </div>

        {/* Backdrop that changes only around the cards in dark mode */}
        <div class="rounded-3xl p-4 md:p-8 bg-transparent dark:bg-slate-800 dark:border dark:border-slate-700/80">
        <div class="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
          
          {/* Frontend */}
          <div class="rounded-2xl border border-slate-200 dark:border-slate-300/70 shadow-sm p-6 text-center bg-white/95 dark:bg-slate-100/95 text-slate-900" key="Frontend">
            <h3 class="text-xl font-semibold mb-3 text-slate-900">Frontend</h3>
            <div class="flex flex-wrap gap-2 justify-center">
              {/* HTML5 */}
              <div title="HTML 5">
                <Html5 height={60} width={60} />
              </div>
          
              {/* CSS3 */}
              <div title="CSS 3">
                <Css3 height={60} width={60} />
              </div>
          
              {/* JavaScript */}
              <div title="JavaScript">
                <Javascript height={60} width={60} />
              </div>

              {/* TypeScript */}
              <div title="TypeScript">
                <Typescript height={60} width={60} />
              </div>
          
              {/* Qwik */}
              <div title="Qwik">
                <QwikLogo height={60} width={60} />
              </div>

              {/* React */}
              <div title="React">
                <ReactLogo height={60} width={60} />
              </div>

              {/* Next.js */}
              <div title="Next.js">
                <NextjsLogo height={60} width={60} />
              </div>

              {/* Redux */}
              <div title="Redux">
                <ReduxLogo height={60} width={60} />
              </div>
          
              {/* Vue */}
              <div title="Vue">
                <VueLogo height={60} width={60} />
              </div>

              {/* Nuxt */}
              <div title="Nuxt">
                <NuxtLogo height={60} width={60} />
              </div>

              {/* Webpack */}
              <div title="Webpack">
                <WebpackLogo height={60} width={60} />
              </div>

              {/* Vitejs */}
              <div title="Vitejs">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" height={60} width={60} />
              </div>

              {/* Sass */}
              <div title="Sass">
                <SassLogo height={60} width={60} />
              </div>

              {/* Tailwindcss */}
              <div title="Tailwindcss">
                <TailwindcssLogo height={60} width={60} />
              </div>
          
            </div>
          </div>

          {/* Backend */}
          <div class="rounded-2xl border border-slate-200 dark:border-slate-300/70 shadow-sm p-6 text-center bg-white/95 dark:bg-slate-100/95 text-slate-900" key="Frontend">
            <h3 class="text-xl font-semibold mb-3 text-slate-900">Backend</h3>
            <div class="flex flex-wrap gap-2 justify-center">
              {/* Nodejs */}
              <div title="Nodejs">
                <NodejsLogo height={60} width={60} />
              </div>
          
              {/* Express */}
              <div title="Express">
                <ExpressLogo height={60} width={60} />
              </div>

              {/* Nestjs */}
              <div title="Nestjs">
                <NestjsLogo height={60} width={60} />
              </div>
          
              {/* Python */}
              <div title="Python">
                <PythonLogo height={60} width={60} />
              </div>

              {/* FastAPI */}
              <div title="FastAPI">
                <FastapiLogo height={60} width={60} />
              </div>

              {/* Redis */}
              <div title="Redis">
                <RedisLogo height={60} width={60} />
              </div>
          
              {/* Postgresql */}
              <div title="Postgresql">
                <PostgresqlLogo height={60} width={60} />
              </div>

              {/* MySQL */}
              <div title="MySQL">
                <svg viewBox="0 0 128 128" height={60} width={60}>
                  <path fill="#00618A" d="M117.688 98.242c-6.973-.191-12.297.461-16.852 2.379-1.293.547-3.355.559-3.566 2.18.711.746.82 1.859 1.387 2.777 1.086 1.754 2.922 4.113 4.559 5.352 1.789 1.348 3.633 2.793 5.551 3.961 3.414 2.082 7.223 3.27 10.504 5.352 1.938 1.23 3.859 2.777 5.75 4.164.934.684 1.563 1.75 2.773 2.18v-.195c-.637-.812-.801-1.93-1.387-2.777l-2.578-2.578c-2.52-3.344-5.719-6.281-9.117-8.719-2.711-1.949-8.781-4.578-9.91-7.73l-.199-.199c1.922-.219 4.172-.914 5.949-1.391 2.98-.797 5.645-.59 8.719-1.387l4.164-1.187v-.793c-1.555-1.594-2.664-3.707-4.359-5.152-4.441-3.781-9.285-7.555-14.273-10.703-2.766-1.746-6.184-2.883-9.117-4.363-.988-.496-2.719-.758-3.371-1.586-1.539-1.961-2.379-4.449-3.566-6.738-2.488-4.793-4.93-10.023-7.137-15.066-1.504-3.437-2.484-6.828-4.359-9.91-9-14.797-18.687-23.73-33.695-32.508-3.195-1.867-7.039-2.605-11.102-3.57l-6.543-.395c-1.332-.555-2.715-2.184-3.965-2.977C16.977 3.52 4.223-3.312.539 5.672-1.785 11.34 4.016 16.871 6.09 19.746c1.457 2.012 3.32 4.273 4.359 6.539.688 1.492.805 2.984 1.391 4.559 1.438 3.883 2.695 8.109 4.559 11.695.941 1.816 1.98 3.727 3.172 5.352.727.996 1.98 1.438 2.18 2.973-1.227 1.715-1.297 4.375-1.984 6.543-3.098 9.77-1.926 21.91 2.578 29.137 1.383 2.223 4.641 6.98 9.117 5.156 3.918-1.598 3.043-6.539 4.164-10.902.254-.988.098-1.715.594-2.379v.199l3.57 7.133c2.641 4.254 7.324 8.699 11.297 11.699 2.059 1.555 3.68 4.242 6.344 5.152v-.199h-.199c-.516-.805-1.324-1.137-1.98-1.781-1.551-1.523-3.277-3.414-4.559-5.156-3.613-4.902-6.805-10.27-9.711-15.855-1.391-2.668-2.598-5.609-3.77-8.324-.453-1.047-.445-2.633-1.387-3.172-1.281 1.988-3.172 3.598-4.164 5.945-1.582 3.754-1.789 8.336-2.375 13.082-.348.125-.195.039-.398.199-2.762-.668-3.73-3.508-4.758-5.949-2.594-6.164-3.078-16.09-.793-23.191.59-1.836 3.262-7.617 2.18-9.316-.516-1.691-2.219-2.672-3.172-3.965-1.18-1.598-2.355-3.703-3.172-5.551-2.125-4.805-3.113-10.203-5.352-15.062-1.07-2.324-2.875-4.676-4.359-6.738-1.645-2.289-3.484-3.977-4.758-6.742-.453-.984-1.066-2.559-.398-3.566.215-.684.516-.969 1.191-1.191 1.148-.887 4.352.297 5.547.793 3.18 1.32 5.832 2.578 8.527 4.363 1.289.855 2.598 2.512 4.16 2.973h1.785c2.789.641 5.914.195 8.523.988 4.609 1.402 8.738 3.582 12.488 5.949 11.422 7.215 20.766 17.48 27.156 29.734 1.027 1.973 1.473 3.852 2.379 5.945 1.824 4.219 4.125 8.559 5.941 12.688 1.816 4.113 3.582 8.27 6.148 11.695 1.348 1.801 6.551 2.766 8.918 3.766 1.66.699 4.379 1.43 5.949 2.379 3 1.809 5.906 3.965 8.723 5.945 1.402.992 5.73 3.168 5.945 4.957zm-88.605-75.52c-1.453-.027-2.48.156-3.566.395v.199h.195c.695 1.422 1.918 2.34 2.777 3.566l1.98 4.164.199-.195c1.227-.867 1.789-2.25 1.781-4.363-.492-.52-.562-1.164-.992-1.785-.562-.824-1.66-1.289-2.375-1.98zm0 0"></path>
                </svg>
              </div>
          
              {/* MongoDB */}
              <div title="MongoDB">
                <MongodbLogo height={60} width={60} />
              </div>

              {/* Prisma */}
              <div title="Prisma">
                <PrismaLogo height={60} width={60} />
              </div>

            </div>
          </div>

          {/* Testing & QA */}
          <div class="rounded-2xl border border-slate-200 dark:border-slate-300/70 shadow-sm p-6 text-center bg-white/95 dark:bg-slate-100/95 text-slate-900" key="Frontend">
            <h3 class="text-xl font-semibold mb-3 text-slate-900">Testing & QA</h3>
            <div class="flex flex-wrap gap-2 justify-center">
              {/* Jest */}
              <div title="Jest">
                <JestLogo height={60} width={60} />
              </div>
          
              {/* Vitest */}
              <div title="Vitest">
                <VitestLogo height={60} width={60} />
              </div>
          
              {/* Cypress */}
              <div title="Cypress">
                <CypressLogo height={60} width={60} />
              </div>

              {/* Postman */}
              <div title="Postman">
                <PostmanLogo height={60} width={60} />
              </div>

              {/* Insomnia */}
              <div title="Insomnia">
                <InsomniaLogo height={60} width={60} />
              </div>
            </div>
          </div>

          {/* DevOps & Cloud */}
          <div class="rounded-2xl border border-slate-200 dark:border-slate-300/70 shadow-sm p-6 text-center bg-white/95 dark:bg-slate-100/95 text-slate-900" key="Frontend">
            <h3 class="text-xl font-semibold mb-3 text-slate-900">DevOps & Cloud</h3>
            <div class="flex flex-wrap gap-2 justify-center">
              {/* Docker */}
              <div title="Docker">
                <DockerLogo height={60} width={60} />
              </div>
          
              {/* Kubernetes */}
              <div title="Kubernetes">
                <KubernetesLogo height={60} width={60} />
              </div>
          
              {/* AWS */}
              <div title="AWS">
                <AwsLogo height={60} width={60} />
              </div>

              {/* Google Cloud */}
              <div title="Google Cloud">
                <GooglecloudLogo height={60} width={60} />
              </div>

              {/* Netlify */}
              <div title="Netlify">
                <NetlifyLogo height={60} width={60} />
              </div>
            </div>
          </div>
        </div>
        </div>
                
          
          
          {/* {categories.map((category) => (
            <div class="rounded-2xl border bg-card text-card-foreground shadow-sm p-6" key={category.title}>
              <h3 class="text-xl font-semibold mb-3">{category.title}</h3>
              <div class="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} class="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-background">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div> */}

      </div>

    </section>
  );
}); 