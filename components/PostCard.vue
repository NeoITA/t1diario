<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  to: string
  date?: string
  tags?: string[]
}>()
</script>

<template>
  <article class="rounded-2xl border border-sabbia bg-crema/80 p-5 hover:shadow-md transition-shadow">
    <NuxtLink :to="to" class="block">
      <h3 class="text-xl font-semibold">{{ title }}</h3>
      <p v-if="description" class="mt-1 text-fumo">{{ description }}</p>
      <div class="mt-3 flex items-center gap-2 text-xs text-fumo/80">
        <time v-if="date">{{ new Date(date).toLocaleDateString() }}</time>
        <span v-if="tags?.length">•</span>
        <div class="flex flex-wrap gap-1">
          <TagPill v-for="t in tags" :key="t" :label="t" />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
