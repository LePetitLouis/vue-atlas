// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    public: {
      githubApiUrl: 'https://api.github.com/repos',
      npmApiUrl: 'https://registry.npmjs.org',
    },
  },
})