import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <script
          data-goatcounter="https://napsryu.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en" class="bg-black text-white p-8">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
