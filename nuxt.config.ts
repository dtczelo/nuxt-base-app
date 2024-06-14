// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@pinia/nuxt",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/color-mode",
        "nuxt-icon",
        "shadcn-nuxt",
        "@nuxt/image",
        "@nuxt/fonts"
    ],

    tailwindcss: {
        cssPath: "~/assets/css/tailwind.css",
        configPath: "tailwind.config.ts",
    },

    colorMode: {
        preference: "system", // default value of $colorMode.preference
        fallback: "light", // fallback value if not system preference found
        classSuffix: "",
    },

    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: "",
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: "./components/ui",
    },
});