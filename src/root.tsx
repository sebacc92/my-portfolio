import { component$, isDev, useStyles$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import globalCss from './global.css?inline';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  useStyles$(globalCss);
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {/* Theme initialization script - prevents flash of unstyled content */}
        <script
          dangerouslySetInnerHTML={`
            (function() {
              try {
                var storedTheme = localStorage.getItem('theme');
                if (!storedTheme) {
                  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  storedTheme = prefersDark ? 'dark' : 'light';
                  localStorage.setItem('theme', storedTheme);
                }
                document.documentElement.className = storedTheme;
              } catch (e) {}
            })();
          `}
        />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
