import { joinURL } from 'ufo'

const appBaseURL = process.env.NUXT_APP_BASE_URL || '/'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      contactEmail: process.env.NUXT_PUBLIC_CONTACT_EMAIL || 'ciao.t1diario@gmail.com',
      giscus: {
        repo: process.env.NUXT_PUBLIC_GISCUS_REPO || '',
        repoId: process.env.NUXT_PUBLIC_GISCUS_REPO_ID || '',
        category: process.env.NUXT_PUBLIC_GISCUS_CATEGORY || '',
        categoryId: process.env.NUXT_PUBLIC_GISCUS_CATEGORY_ID || '',
        mapping: process.env.NUXT_PUBLIC_GISCUS_MAPPING || 'pathname',
        strict: process.env.NUXT_PUBLIC_GISCUS_STRICT || '0',
        reactions: process.env.NUXT_PUBLIC_GISCUS_REACTIONS || '1',
        emitMetadata: process.env.NUXT_PUBLIC_GISCUS_EMIT_METADATA || '0',
        inputPosition: process.env.NUXT_PUBLIC_GISCUS_INPUT_POSITION || 'bottom',
        theme: process.env.NUXT_PUBLIC_GISCUS_THEME || 'light',
        lang: process.env.NUXT_PUBLIC_GISCUS_LANG || 'it',
        loading: process.env.NUXT_PUBLIC_GISCUS_LOADING || 'lazy'
      }
    }
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  css: ['@/assets/css/tailwind.css'],
  app: {
    // IMPORTANT: if you deploy to a project page like https://USERNAME.github.io/REPO_NAME/,
    // set NUXT_APP_BASE_URL to '/REPO_NAME/' in your GitHub Action (below).
    // If you deploy to a user/org page like https://USERNAME.github.io/ set it to '/'.
    baseURL: appBaseURL,
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
        { rel: 'icon', type: 'image/png', href: joinURL(appBaseURL, 't1diario-favicon-512.png') }
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
    preset: 'github_pages',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/blog', '/contatti', '/chi-sono'],
      failOnError: false
    }
  },
  routeRules: {
    '/**': { prerender: true }
  },
  compatibilityDate: '2024-11-01'
})
