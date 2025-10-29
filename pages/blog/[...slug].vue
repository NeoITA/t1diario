<script setup lang="ts">
import { computed } from 'vue'
import { useAsyncData, useRoute, useRuntimeConfig } from 'nuxt/app'
import { queryCollection } from '#imports'

const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug
const path = `/blog/${slug}`

const { data: doc } = await useAsyncData(`post-${slug}`, () =>
  queryCollection('content')
    .path(path)
    .first()
)

const formatDate = (value?: string) => {
  if (!value) return ''
  return new Date(value).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' })
}

const giscusEnabled = computed(() => {
  const c = useRuntimeConfig().public.giscus
  return Boolean(c?.repo && c?.repoId)
})
</script>

<template>
  <div class="mt-4 space-y-8" v-if="doc">
    <!-- Header articolo -->
    <header class="rounded-3xl border border-sabbia bg-crema/80 p-8 shadow-sm">
      <div class="mb-4">
        <p class="text-xs uppercase tracking-widest text-fumo/80">{{ formatDate(doc.date) }}</p>
        <h1 class="mt-2 text-4xl font-semibold text-espresso">{{ doc.title }}</h1>
        <p v-if="doc.description" class="mt-3 text-lg text-fumo">{{ doc.description }}</p>
      </div>
      <div v-if="doc.tags?.length" class="flex flex-wrap gap-2">
        <span v-for="tag in doc.tags" :key="tag"
          class="rounded-full bg-salvia/10 px-3 py-1 text-sm font-medium text-salvia">
          {{ tag }}
        </span>
      </div>
    </header>

    <!-- Contenuto markdown -->
    <article class="prose prose-lg prose-zinc max-w-none rounded-3xl border border-sabbia bg-crema/80 p-8 shadow-sm">
      <ContentRenderer :value="doc" />
    </article>

    <GiscusComments v-if="giscusEnabled" />
  </div>

  <div v-else class="mt-4 text-center">
    <h1 class="text-2xl font-semibold text-espresso">Articolo non trovato</h1>
    <NuxtLink to="/blog" class="mt-4 inline-block text-salvia hover:underline">Torna al blog</NuxtLink>
  </div>
</template>

