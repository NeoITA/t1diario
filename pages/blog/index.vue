<script setup lang="ts">
const route = useRoute()
const { data: posts } = await useAsyncData('blog-list', () =>
  queryContent('/blog')
    .sort({ date: -1 })
    .find()
)
</script>

<template>
  <section class="mt-4">
    <h1 class="text-3xl font-bold">Blog</h1>
    <p class="mt-1 text-gray-600">Pensieri pratici e ironici sulla vita con il T1D.</p>

    <div class="mt-6 grid gap-4">
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
  </section>
</template>
