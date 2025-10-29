<script setup lang="ts">
const props = defineProps<{
  title: string
  description?: string
  to: string
  date?: string
  tags?: string[]
  doc?: any
}>()

const formatDate = (value?: string) => {
  if (!value) return ''
  return new Date(value).toLocaleDateString('it-IT', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}
</script>

<template>
  <article class="rounded-2xl border border-sabbia bg-crema/80 p-5 hover:shadow-md transition-shadow">
    <NuxtLink :to="to" class="block text-espresso hover:text-salvia transition">
      <h3 class="text-2xl font-semibold">{{ title }}</h3>
      <p v-if="description" class="mt-1 text-fumo">{{ description }}</p>
      <div class="mt-3 flex items-center gap-2 text-xs text-fumo/80">
        <time v-if="date" class="uppercase tracking-widest">{{ formatDate(date) }}</time>
        <span v-if="tags?.length">&bull;</span>
        <div class="flex flex-wrap gap-1">
          <TagPill v-for="t in tags" :key="t" :label="t" />
        </div>
      </div>

      <!-- Anteprima HTML completa (via @nuxt/content) -->
      <div class="mt-5 prose prose-neutral max-w-none">
        <ContentRenderer v-if="doc" :value="doc" excerpt />
        <div v-else class="text-fumo/70 italic text-sm">Contenuto non disponibile</div>
      </div>

    </NuxtLink>
  </article>
</template>








