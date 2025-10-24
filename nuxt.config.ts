// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  css: ['@/assets/css/tailwind.css'],
  app: {
    // IMPORTANT: if you deploy to a project page like https://USERNAME.github.io/REPO_NAME/,
    // set NUXT_APP_BASE_URL to '/REPO_NAME/' in your GitHub Action (below).
    // If you deploy to a user/org page like https://USERNAME.github.io/ set it to '/'.
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'T1Diario — Diari di vita con il diabete di tipo 1',
      meta: [
        { name: 'description', content: 'Storie, strumenti e pensieri reali sulla vita con il diabete di tipo 1. Niente eroismi: esperimenti quotidiani e idee pratiche.' },
        { property: 'og:title', content: 'T1Diario' },
        { property: 'og:description', content: 'Diari di vita con il diabete di tipo 1' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'T1Diario' },
        { name: 'twitter:card', content: 'summary' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  content: {
    documentDriven: false,
    highlight: {
      theme: 'github-light'
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/blog'],
      failOnError: false
    }
  },
  routeRules: {
    '/**': { prerender: true }
  },
  compatibilityDate: '2024-11-01'
})
