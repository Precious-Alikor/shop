// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: [
    "@/assets/css/main.css",
    "primevue/resources/themes/lara-light-indigo/theme.css",
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
  ],
  build: {
    transpile: ["primevue"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
      "Playfair Display": [300, 400, 500, 600, 700],
    },
  },
});
