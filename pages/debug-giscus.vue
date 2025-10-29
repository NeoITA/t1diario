<script setup lang="ts">
import { ref, onMounted } from 'vue'

const config = useRuntimeConfig()
const containerRef = ref<HTMLElement | null>(null)
const scriptLoaded = ref(false)

const giscusConfig = {
  repo: config.public.giscus?.repo,
  repoId: config.public.giscus?.repoId,
  category: config.public.giscus?.category,
  categoryId: config.public.giscus?.categoryId,
}

onMounted(() => {
  if (containerRef.value) {
    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', giscusConfig.repo || '')
    script.setAttribute('data-repo-id', giscusConfig.repoId || '')
    script.setAttribute('data-category', giscusConfig.category || '')
    script.setAttribute('data-category-id', giscusConfig.categoryId || '')
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-theme', 'light')
    script.setAttribute('data-lang', 'it')
    script.setAttribute('data-loading', 'eager')
    script.crossOrigin = 'anonymous'
    script.async = true

    script.onload = () => {
      scriptLoaded.value = true
      console.log('✅ Giscus script loaded successfully')
    }

    script.onerror = (error) => {
      console.error('❌ Error loading Giscus script:', error)
    }

    containerRef.value.appendChild(script)
    console.log('🔄 Giscus script injected with config:', giscusConfig)
  }
})
</script>

<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">Debug Giscus Configuration</h1>

    <div class="space-y-2 mb-8 bg-white p-4 rounded border">
      <p><strong>Repo:</strong> {{ giscusConfig.repo || '❌ NON CONFIGURATO' }}</p>
      <p><strong>Repo ID:</strong> {{ giscusConfig.repoId || '❌ NON CONFIGURATO' }}</p>
      <p><strong>Category:</strong> {{ giscusConfig.category || '❌ NON CONFIGURATO' }}</p>
      <p><strong>Category ID:</strong> {{ giscusConfig.categoryId || '❌ NON CONFIGURATO' }}</p>
      <p><strong>Script Loaded:</strong> {{ scriptLoaded ? '✅ SI' : '⏳ In attesa...' }}</p>
    </div>

    <div class="mb-4">
      <h2 class="text-xl font-bold mb-2">Verifica Manuale</h2>
      <p class="text-sm mb-2">Controlla che il repository abbia:</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li>✓ Visibility: Public</li>
        <li>✓ Features > Discussions: Enabled</li>
        <li>✓ Almeno una discussion nella categoria "General"</li>
      </ul>
      <a
        :href="`https://github.com/${giscusConfig.repo}/discussions`"
        target="_blank"
        class="text-blue-600 hover:underline text-sm mt-2 inline-block"
      >
        → Apri GitHub Discussions
      </a>
    </div>

    <div class="mb-4">
      <h2 class="text-xl font-bold mb-2">Test Giscus Widget</h2>
      <p class="text-sm mb-4">Widget Giscus diretto (controlla la console per log):</p>
    </div>

    <div ref="containerRef" class="border border-gray-300 rounded p-4 min-h-[200px] bg-gray-50"></div>
  </div>
</template>
