<template>
  <article class="prose prose-zinc max-w-none prose-headings:scroll-mt-24">
    <ContentDoc />
    <GiscusComments v-if="giscusEnabled" />
  </article>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from 'nuxt/app'
import { computed } from 'vue'

const giscusEnabled = computed(() => {
  const giscus = useRuntimeConfig().public?.giscus || {}
  return Boolean(giscus.repo && giscus.repoId && giscus.category && giscus.categoryId)
})
</script>
