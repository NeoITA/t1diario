<script setup lang="ts">
import { ref } from 'vue'

// Dati statici degli articoli per ora (ordinati per data decrescente)
const orderedPosts = ref([
  {
    _path: '/blog/diagnosi-10-righe',
    title: 'La diagnosi in 10 righe (più una)',
    description: 'Cronaca sintetica, cosa avrei voluto sapere, takeaway pratici.',
    date: '2024-10-25',
    tags: ['diagnosi', 'diario']
  },
  {
    _path: '/blog/benvenuto-su-t1diario',
    title: 'Benvenutə su T1Diario',
    description: 'Cosa aspettarti: diario di vita tra lavoro, impegni, sport, amici e la convivenza quotidiana con il diabete di tipo 1.',
    date: '2025-10-23',
    tags: ['manifesto', 'benvenuto', 'mindset']
  }
])
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
