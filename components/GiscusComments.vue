<template>
  <section
    v-if="isConfigured"
    class="mt-12 space-y-6"
    aria-labelledby="comments-title"
  >
    <!-- Header sezione commenti -->
    <div class="flex items-center gap-3">
      <div class="h-px flex-1 bg-sabbia"></div>
      <h2 id="comments-title" class="text-2xl font-bold text-espresso">
        Commenti
      </h2>
      <div class="h-px flex-1 bg-sabbia"></div>
    </div>

    <!-- Container Giscus -->
    <div class="rounded-3xl border border-sabbia bg-crema/80 p-6 shadow-sm">
      <ClientOnly>
        <div ref="container" />
      </ClientOnly>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const container = ref<HTMLElement | null>(null)
const giscusConfig = computed(() => useRuntimeConfig().public?.giscus || {})
const isConfigured = computed(() =>
  Boolean(
    giscusConfig.value.repo &&
      giscusConfig.value.repoId &&
      giscusConfig.value.category &&
      giscusConfig.value.categoryId
  )
)

const injectGiscus = () => {
  if (!container.value) {
    console.warn('[GiscusComments] Container not available')
    return
  }

  if (!isConfigured.value) {
    console.warn('[GiscusComments] Giscus not configured')
    return
  }

  console.log('[GiscusComments] Injecting Giscus script with config:', {
    repo: giscusConfig.value.repo,
    repoId: giscusConfig.value.repoId,
    category: giscusConfig.value.category,
    categoryId: giscusConfig.value.categoryId
  })

  container.value.innerHTML = ''

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', giscusConfig.value.repo)
  script.setAttribute('data-repo-id', giscusConfig.value.repoId)
  script.setAttribute('data-category', giscusConfig.value.category)
  script.setAttribute('data-category-id', giscusConfig.value.categoryId)
  script.setAttribute('data-mapping', giscusConfig.value.mapping || 'pathname')
  script.setAttribute('data-strict', giscusConfig.value.strict || '0')
  script.setAttribute('data-reactions-enabled', giscusConfig.value.reactions || '1')
  script.setAttribute('data-emit-metadata', giscusConfig.value.emitMetadata || '0')
  script.setAttribute('data-input-position', giscusConfig.value.inputPosition || 'top')
  script.setAttribute('data-theme', giscusConfig.value.theme || 'light')
  script.setAttribute('data-lang', giscusConfig.value.lang || 'it')
  script.setAttribute('data-loading', giscusConfig.value.loading || 'eager')
  script.crossOrigin = 'anonymous'
  script.async = true

  script.onload = () => {
    console.log('[GiscusComments] ✅ Script loaded successfully')
  }

  script.onerror = (error) => {
    console.error('[GiscusComments] ❌ Error loading script:', error)
  }

  container.value.appendChild(script)
}

onMounted(() => {
  console.log('[GiscusComments] Component mounted, isConfigured:', isConfigured.value)

  // Small delay to ensure DOM is ready
  setTimeout(() => {
    if (isConfigured.value) {
      injectGiscus()
    }
  }, 100)
})
</script>
