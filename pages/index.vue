<script setup lang="ts">
import { computed } from 'vue'

const FEATURED_POST_PATH = '/blog/diagnosi-10-righe'

const { data: posts } = await useAsyncData('home-posts', async () => {
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

const formatDate = (value?: string) => {
  if (!value) {
    return ''
  }
  return new Date(value).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' })
}

const highlightedPosts = computed(() => posts.value?.slice(0, 3) || [])
</script>

<template>
  <section class="mt-4 space-y-12">
    <header class="relative overflow-hidden rounded-3xl border border-sabbia bg-espresso text-crema shadow-sm">
      <img
        src="/hero_blog.png"
        alt="Taccuino aperto con penna, glucometro e una tazza di tè"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-espresso/95 via-espresso/85 to-moka/50" />
      <div class="relative p-8">
        <p class="text-sm uppercase tracking-[0.3em] text-sabbia">T1Diario</p>
        <h1 class="mt-3 text-4xl font-semibold tracking-tight">Diari di vita con il diabete di tipo 1</h1>
        <p class="mt-3 max-w-2xl text-crema/90">
          Storie concrete, strumenti quotidiani e micro-vittorie per convivere con il T1D senza retorica. Qui trovi subito gli ultimi articoli completi.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <NuxtLink to="/blog" class="rounded-2xl bg-ambra px-5 py-2.5 text-sm font-semibold text-espresso transition hover:bg-ambra/90">
            Vai al blog
          </NuxtLink>
          <NuxtLink to="/contatti" class="rounded-2xl border border-sabbia px-5 py-2.5 text-sm font-semibold text-crema/90 hover:text-salvia transition">
            Scrivimi
          </NuxtLink>
        </div>
      </div>
    </header>

    <div>
      <div class="flex items-end justify-between border-b border-sabbia/70 pb-4">
        <div>
          <h2 class="text-2xl font-semibold tracking-tight">Ultimi 3 articoli</h2>
          <p class="text-sm text-fumo">Li trovi già qui sotto, pronti da leggere senza aprire altre pagine.</p>
        </div>
        <NuxtLink to="/blog" class="text-sm font-medium text-salvia hover:underline">Vai al blog →</NuxtLink>
      </div>

      <div v-if="highlightedPosts.length" class="mt-8 space-y-12">
        <article
          v-for="p in highlightedPosts"
          :key="p._path"
          class="rounded-3xl border border-sabbia/80 p-6 shadow-sm bg-crema/70"
        >
          <header class="flex flex-col gap-2">
            <p class="text-xs uppercase tracking-widest text-fumo/80">{{ formatDate(p.date) }}</p>
            <NuxtLink :to="p._path" class="text-2xl font-semibold text-espresso hover:text-salvia transition">
              {{ p.title }}
            </NuxtLink>
            <p class="text-fumo" v-if="p.description">{{ p.description }}</p>
          </header>

          <div class="prose prose-neutral mt-6 max-w-none">
            <ContentRenderer :value="p" />
          </div>

          <div class="mt-6">
            <NuxtLink :to="p._path" class="text-sm font-medium text-salvia hover:underline">Apri l'articolo completo →</NuxtLink>
          </div>
        </article>
      </div>

      <p v-else class="mt-10 text-center text-fumo">Nessun articolo pubblicato al momento.</p>
    </div>
  </section>
</template>
