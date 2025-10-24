<script setup lang="ts">
const { data: posts } = await useAsyncData('home-posts', () =>
  queryContent('/blog').sort({ date: -1 }).limit(8).find()
)
</script>

<template>
  <section class="mt-6">
    <h1 class="text-4xl font-bold tracking-tight">T1Diario</h1>
    <p class="mt-2 text-lg text-gray-600">Diari di vita con il diabete di tipo 1</p>

    <div class="mt-6 flex gap-3">
      <a href="#newsletter" class="rounded-2xl px-4 py-2 bg-aqua text-ink font-medium">Iscriviti</a>
      <NuxtLink to="/blog" class="rounded-2xl px-4 py-2 border border-graywarm">Ultimi post</NuxtLink>
    </div>

    <div class="mt-10 grid gap-4">
      <PostCard
        v-for="p in posts"
        :key="p._path"
        :title="p.title"
        :description="p.description"
        :to="p._path"
        :date="p.date"
        :tags="p.tags"
      />
    </div>

    <NewsletterCta />
  </section>
</template>
