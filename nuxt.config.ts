// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxt/image"],
  runtimeConfig: {
    public: {
      CLOUDFLARE_R2_URL: process.env.CLOUDFLARE_R2_URL,
    },
  },
});
