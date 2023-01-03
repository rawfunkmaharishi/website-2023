import { defineConfig } from "astro/config";
import htmlBeautifier from "astro-html-beautifier";

// https://astro.build/config
export default defineConfig({
  site: "https://rawfunkmaharishi.uk",
  integrations: [
    htmlBeautifier({
      indent_size: 2,
      wrap_line_length: 88,
      jslint_happy: true,
      preserve_newlines: false,
    }),
  ],
});
