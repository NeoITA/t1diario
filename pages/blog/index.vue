<script setup lang="ts">

const FEATURED_POST_PATH = '/blog/diagnosi-10-righe'

const { data: orderedPosts } = await useAsyncData('blog-list', async () => {
  const [featured, list] = await Promise.all([
    queryContent()
      .where({ _path: FEATURED_POST_PATH })
      .findOne(),
    queryContent('/blog')
      .sort({ date: -1 })
      .find()
  ])

  if (!featured) {
    return list
  }

  const others = list.filter((item) => item?._path !== featured._path)
  return [featured, ...others]
})
</script>

<template>
  <section class="mt-4 space-y-8">
    <header
      class="relative overflow-hidden rounded-3xl border border-sabbia bg-espresso text-crema shadow-sm"
    >
      <img
        src="/hero_blog.png"
        alt="Taccuino aperto su un tavolo con penna, glucometro e tazza di tè"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-espresso/95 via-espresso/85 to-moka/50" />
      <div class="relative p-8">
        <p class="text-sm uppercase tracking-[0.3em] text-sabbia">T1Diario</p>
        <h1 class="mt-3 text-4xl font-semibold leading-tight">Diario di vita reale con il diabete di tipo 1</h1>
        <p class="mt-3 max-w-2xl text-base text-crema/90">
          Articoli brevi, concreti e gentili: strumenti quotidiani, micro-vittorie e riflessioni su come convivere con il T1D senza retorica.
        </p>
      </div>
    </header>

    <div class="grid gap-4">
      <PostCard
        v-for="p in orderedPosts"
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
