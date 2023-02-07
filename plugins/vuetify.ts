import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify, ThemeDefinition } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const dark: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#1B1917",
    "background-50": "#292524",
    surface: "#FFFFFF",
    primary: "#6200EE",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: "dark",
      themes: {
        dark: {
          colors: {
            background: "#1B1917",
            "background-50": "#292524",
            surface: "#fafaf9",
            primary: "#eab308",
            "primary-darken-1": "#3700B3",
            secondary: "#03DAC6",
            "secondary-darken-1": "#018786",
            error: "#B00020",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FB8C00",
          },
        },
        light: {
          colors: {
            background: "#eaeaea",

            surface: "#fafaf9",
            primary: "#6200EE",
            "primary-darken-1": "#3700B3",
            secondary: "#03DAC6",
            "secondary-darken-1": "#018786",
            error: "#B00020",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FB8C00",
          },
        },
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
