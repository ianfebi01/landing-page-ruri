// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Ruri Hilman",
      // titleTemplate: '%s | Vuetify Nuxt',
    },
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "@/assets/scss/main.scss",
  ],
  build: {
    transpile: ["vuetify"],
  },
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
});
