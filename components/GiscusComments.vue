<template>
  <ClientOnly>
    <section
      v-if="isConfigured"
      class="mt-16 border-t border-zinc-200 pt-10"
      aria-labelledby="comments-title"
    >
      <h2 id="comments-title" class="text-2xl font-semibold text-zinc-900 mb-6">
        Commenti
      </h2>
      <div ref="container" />
    </section>
  </ClientOnly>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

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
    return
  }

  container.value.innerHTML = ''

  const script = document.createElement('script')
  script.setAttribute('src', 'https://giscus.app/client.js')
  script.setAttribute('data-repo', giscusConfig.value.repo)
  script.setAttribute('data-repo-id', giscusConfig.value.repoId)
  script.setAttribute('data-category', giscusConfig.value.category)
  script.setAttribute('data-category-id', giscusConfig.value.categoryId)
  script.setAttribute('data-mapping', giscusConfig.value.mapping || 'pathname')
  script.setAttribute('data-strict', giscusConfig.value.strict || '0')
  script.setAttribute('data-reactions-enabled', giscusConfig.value.reactions || '1')
  script.setAttribute('data-emit-metadata', giscusConfig.value.emitMetadata || '0')
  script.setAttribute('data-input-position', giscusConfig.value.inputPosition || 'bottom')
  script.setAttribute('data-theme', giscusConfig.value.theme || 'light')
  script.setAttribute('data-lang', giscusConfig.value.lang || 'it')
  script.setAttribute('data-loading', giscusConfig.value.loading || 'lazy')
  script.setAttribute('crossorigin', 'anonymous')
  script.setAttribute('async', 'true')

  container.value.appendChild(script)
}

onMounted(() => {
  if (isConfigured.value) {
    injectGiscus()
  }
})

watch(isConfigured, (enabled) => {
  if (enabled) {
    injectGiscus()
  }
})
</script>
