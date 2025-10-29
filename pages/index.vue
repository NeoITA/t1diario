<script setup lang="ts">
import { useAsyncData } from 'nuxt/app'
import { computed } from 'vue'
import { queryCollection } from '#imports'

const { data: rawPosts } = await useAsyncData<any[]>('home-posts', () =>
  queryCollection('content')
    .where('path', 'LIKE', '/blog/%')
    .order('date', 'DESC')
    .limit(3)
    .all()
)

const normalizeDoc = (doc: any) => {
  const path = typeof doc.path === 'string' ? doc.path : (doc._path ?? '')
  let body = doc.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch (err) {
      body = undefined
    }
  }

  return {
    _path: path,
    title: typeof doc.title === 'string' ? doc.title : 'Articolo senza titolo',
    description: typeof doc.description === 'string' ? doc.description : undefined,
    date: typeof doc.date === 'string' ? doc.date : undefined,
    tags: Array.isArray(doc.tags) ? doc.tags : undefined,
    doc: {
      ...doc,
      _path: path,
      body
    }
  }
}

const highlightedPosts = computed(() =>
  (rawPosts.value ?? []).map(normalizeDoc)
)

const formatDate = (value?: string) => {
  if (!value) return ''
  return new Date(value).toLocaleDateString('it-IT', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

// Estrae il testo plain dal body e limita a circa 150 caratteri
const getExcerpt = (doc: any): string => {
  if (!doc || !doc.body) return ''

  // Lista di tag HTML da ignorare completamente
  const htmlTags = new Set([
    'p', 'div', 'span', 'a', 'strong', 'em', 'b', 'i', 'u',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li',
    'br', 'hr', 'blockquote', 'pre', 'code', 'img', 'table',
    'tr', 'td', 'th', 'thead', 'tbody', '\n'
  ])

  const extractText = (node: any): string => {
    // Caso base: stringa
    if (typeof node === 'string') {
      // Se è un tag HTML, ignoralo
      if (htmlTags.has(node.trim().toLowerCase())) return ''
      return node
    }

    // Null o undefined
    if (!node) return ''

    // Array: processa ricorsivamente
    if (Array.isArray(node)) {
      return node.map(extractText).filter(t => t && t.length > 0).join(' ')
    }

    // Oggetto
    if (typeof node === 'object') {
      // Se è una struttura minimark, processa il value array
      if (node.type === 'minimark' && Array.isArray(node.value)) {
        return extractText(node.value)
      }

      // Ignora nodi che sono tag HTML
      if (node.type && htmlTags.has(node.type)) {
        // Processa solo i children, non il tag stesso
        if (Array.isArray(node.children)) {
          return extractText(node.children)
        }
        if (Array.isArray(node.value)) {
          return extractText(node.value)
        }
        return ''
      }

      let result: string[] = []

      // Estrai il valore diretto se è una stringa e non è un tag
      if (typeof node.value === 'string' && node.value.trim()) {
        const val = node.value.trim()
        if (!htmlTags.has(val.toLowerCase())) {
          result.push(val)
        }
      }

      // Processa i children se esistono
      if (Array.isArray(node.children)) {
        const childText = extractText(node.children)
        if (childText) result.push(childText)
      }

      // Se il nodo è un array nel value, processalo
      if (Array.isArray(node.value)) {
        const valueText = extractText(node.value)
        if (valueText) result.push(valueText)
      }

      return result.join(' ')
    }

    return ''
  }

  let text = extractText(doc.body)

  // Pulisci il testo
  text = text
    .replace(/\s+/g, ' ')  // Normalizza spazi
    .replace(/\n/g, ' ')   // Rimuovi newline
    .trim()

  if (!text) return ''
  if (text.length <= 150) return text

  // Tronca a 150 caratteri cercando di non spezzare parole
  const truncated = text.substring(0, 150)
  const lastSpace = truncated.lastIndexOf(' ')

  if (lastSpace > 100) {
    return truncated.substring(0, lastSpace) + '...'
  }

  return truncated + '...'
}
</script>

<template>
  <section class="mt-4 space-y-12">
    <header class="relative overflow-hidden rounded-3xl border border-sabbia bg-espresso text-crema shadow-sm">
      <img
        src="/hero_blog.png"
        alt="Taccuino aperto con penna, glucometro e una tazza di te"
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
          <p class="text-sm text-fumo">Li trovi qui sotto, pronti da leggere senza aprire altre pagine.</p>
        </div>
        <NuxtLink to="/blog" class="text-sm font-medium text-salvia hover:underline">Vai al blog &rarr;</NuxtLink>
      </div>

      <div v-if="highlightedPosts.length" class="mt-8 space-y-6">
        <NuxtLink
          v-for="p in highlightedPosts"
          :key="p._path"
          :to="p._path"
          class="group block"
        >
          <article class="overflow-hidden rounded-3xl border border-sabbia/80 bg-gradient-to-br from-crema via-crema/90 to-sabbia/30 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-salvia/50">
            <div class="flex items-start justify-between gap-4 mb-4">
              <h2 class="text-2xl font-bold text-espresso transition-colors group-hover:text-salvia flex-1">
                {{ p.title }}
              </h2>
              <time v-if="p.date" class="text-xs uppercase tracking-widest text-fumo/60 whitespace-nowrap mt-1">
                {{ formatDate(p.date) }}
              </time>
            </div>

            <p class="text-fumo/90 leading-relaxed">
              {{ getExcerpt(p.doc) }}
            </p>

            <div class="mt-5 flex items-center justify-between">
              <div v-if="p.tags?.length" class="flex flex-wrap gap-1.5">
                <span
                  v-for="tag in p.tags.slice(0, 3)"
                  :key="tag"
                  class="rounded-full bg-salvia/15 px-2.5 py-1 text-xs font-medium text-salvia/90"
                >
                  {{ tag }}
                </span>
              </div>
              <span class="text-sm font-medium text-salvia transition-transform group-hover:translate-x-1">
                Leggi &rarr;
              </span>
            </div>
          </article>
        </NuxtLink>
      </div>

      <p v-else class="mt-10 text-center text-fumo">Nessun articolo pubblicato al momento.</p>
    </div>
  </section>
</template>
