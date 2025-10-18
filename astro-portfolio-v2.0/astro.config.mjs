// @ts-check
import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [storyblok()],
});
