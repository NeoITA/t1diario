<template>
  <div v-if="article" class="mt-4 space-y-8">
    <!-- Header dell'articolo -->
    <header class="rounded-3xl border border-sabbia bg-crema/80 p-8 shadow-sm">
      <div class="mb-4">
        <p class="text-xs uppercase tracking-widest text-fumo/80">{{ formatDate(article.date) }}</p>
        <h1 class="mt-2 text-4xl font-semibold text-espresso">{{ article.title }}</h1>
        <p class="mt-3 text-lg text-fumo">{{ article.description }}</p>
      </div>
      
      <!-- Tags -->
      <div v-if="article.tags?.length" class="flex flex-wrap gap-2">
        <span 
          v-for="tag in article.tags" 
          :key="tag"
          class="rounded-full bg-salvia/10 px-3 py-1 text-sm font-medium text-salvia"
        >
          {{ tag }}
        </span>
      </div>
    </header>

    <!-- Contenuto dell'articolo -->
    <article class="prose prose-lg prose-zinc max-w-none rounded-3xl border border-sabbia bg-crema/80 p-8 shadow-sm">
      <!-- Formattazione speciale per l'articolo diagnosi-10-righe -->
      <div v-if="article._path === '/blog/diagnosi-10-righe'" class="space-y-8">
        <!-- Le 10 righe principali -->
        <div class="space-y-4">
          <div class="grid gap-4">
            <div v-for="(line, index) in articleLines" :key="index" 
                 class="rounded-2xl border border-sabbia/50 bg-white/50 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-salvia text-white flex items-center justify-center text-sm font-semibold">
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <p class="text-gray-800 leading-relaxed" v-html="line"></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Riga "più una" -->
        <div class="rounded-2xl border-l-4 border-ambra bg-ambra/10 p-6">
          <div class="flex items-start gap-3">
            <div class="text-2xl">✨</div>
            <div>
              <h3 class="font-semibold text-espresso mb-2">Più una</h3>
              <p class="text-gray-700 leading-relaxed" v-html="articlePlusOne"></p>
            </div>
          </div>
        </div>

        <!-- Takeaway pratici -->
        <div class="rounded-2xl bg-gradient-to-r from-salvia/10 to-ambra/10 p-6">
          <h3 class="text-xl font-semibold text-espresso mb-4 flex items-center gap-2">
            <span>💡</span>
            Takeaway pratici
          </h3>
          <div class="grid gap-3">
            <div v-for="(takeaway, index) in takeawayList" :key="index" 
                 class="flex items-start gap-3">
              <span class="text-salvia text-lg">•</span>
              <p class="text-gray-700 leading-relaxed" v-html="takeaway"></p>
            </div>
          </div>
        </div>

        <!-- Disclaimer -->
        <div class="rounded-2xl border-l-4 border-salvia bg-salvia/5 p-6">
          <div class="flex items-start gap-3">
            <div class="text-2xl">⚠️</div>
            <div>
              <h4 class="font-semibold text-espresso mb-2">Nota importante</h4>
              <p class="text-gray-700 leading-relaxed">
                Questo post racconta la mia esperienza. Non sostituisce un consulto medico.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Formattazione speciale per l'articolo benvenuto-su-t1diario -->
      <div v-else-if="article._path === '/blog/benvenuto-su-t1diario'" class="space-y-8">
        <!-- Introduzione -->
        <div class="rounded-2xl bg-gradient-to-r from-salvia/10 to-ambra/10 p-8 text-center">
          <div class="text-6xl mb-4">🫶</div>
          <h2 class="text-2xl font-semibold text-espresso mb-4">Benvenutə su T1Diario</h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            Qui troverai <strong>il mio diario di vita quotidiana</strong> tra lavoro, impegni, sport, amici — e 
            <strong>la convivenza giorno per giorno con il diabete di tipo 1</strong> (T1D), con tutto quello che comporta davvero.
          </p>
          <p class="mt-4 text-gray-600 italic">
            Niente eroismi, niente ricette magiche: <strong>prove, errori, piccoli aggiustamenti</strong>, idee pratiche e un pizzico di ironia.
          </p>
        </div>

        <!-- Cosa troverai -->
        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-2xl bg-salvia/10 p-6">
            <h3 class="text-xl font-semibold text-espresso mb-4 flex items-center gap-2">
              <span>✨</span>
              Cosa troverai
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <span class="text-salvia text-lg">•</span>
                <span class="text-gray-700">Appunti brevi e concreti dalla vita reale</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-salvia text-lg">•</span>
                <span class="text-gray-700">Routine, check-list e micro-strategie "a misura di giornata"</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-salvia text-lg">•</span>
                <span class="text-gray-700">Pensieri su tecnologia, cibo "vero", movimento e socialità</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-salvia text-lg">•</span>
                <span class="text-gray-700">Tono <strong>leggero e gentile</strong>, zero fuffa</span>
              </li>
            </ul>
          </div>

          <div class="rounded-2xl bg-ambra/10 p-6">
            <h3 class="text-xl font-semibold text-espresso mb-4 flex items-center gap-2">
              <span>🤝</span>
              Come partecipare
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <span class="text-ambra text-lg">•</span>
                <span class="text-gray-700">Lascia un commento (gentilezza obbligatoria 😉)</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-ambra text-lg">•</span>
                <span class="text-gray-700">Suggerisci un tema dalla pagina <strong>Contatti</strong></span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-ambra text-lg">•</span>
                <span class="text-gray-700">Iscriviti alla newsletter per non perdere i post più utili</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Disclaimer -->
        <div class="rounded-2xl border-l-4 border-salvia bg-salvia/5 p-6">
          <div class="flex items-start gap-3">
            <div class="text-2xl">⚠️</div>
            <div>
              <h4 class="font-semibold text-espresso mb-2">Disclaimer</h4>
              <p class="text-gray-700 leading-relaxed">
                Questo blog racconta la mia esperienza personale. <strong>Non è un consulto medico</strong>: per decisioni sulla terapia, confrontati sempre con il tuo team sanitario.
              </p>
            </div>
          </div>
        </div>

        <!-- Chiusura -->
        <div class="rounded-2xl bg-gradient-to-r from-espresso/5 to-moka/5 p-6 text-center">
          <p class="text-lg text-gray-700">
            A presto e… <strong class="text-espresso">basale calma</strong> 🫶
          </p>
        </div>
      </div>
      
      <!-- Fallback per altri articoli -->
      <div v-else v-html="article.content"></div>
    </article>

    <!-- Commenti -->
    <GiscusComments v-if="giscusEnabled" />
  </div>
  
  <div v-else class="mt-4 text-center">
    <h1 class="text-2xl font-semibold text-espresso">Articolo non trovato</h1>
    <p class="mt-2 text-fumo">L'articolo che stai cercando non esiste.</p>
    <NuxtLink to="/blog" class="mt-4 inline-block text-salvia hover:underline">
      ← Torna al blog
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useRuntimeConfig, useRoute } from 'nuxt/app'
import { computed } from 'vue'

// Dati statici degli articoli
const articles = {
  'diagnosi-10-righe': {
    _path: '/blog/diagnosi-10-righe',
    title: 'La diagnosi in 10 righe (più una)',
    description: 'Cronaca sintetica, cosa avrei voluto sapere, takeaway pratici.',
    date: '2024-10-25',
    tags: ['diagnosi', 'diario'],
    content: `**1.** Sete strana, bagno spesso, stanchezza. Ho pensato "stress".  
**2.** Esami rapidi, glicemia alle stelle. I numeri fanno rumore.  
**3.** In reparto mi spiegano tutto in mezz'ora. Io capisco il **5%**.  
**4.** Prime iniezioni: scopro che fa più paura l'idea dell'ago che l'ago.  
**5.** Un dietista gentile mi dice: *non devi diventare perfetto, solo più curioso*.  
**6.** Capisco che i carboidrati non sono cattivi: sono **dati da leggere**.  
**7.** Pre-bolo? Dieci minuti *prima* è già magia. A volte quindici. A volte no.  
**8.** Gli allarmi del sensore sono utili finché non diventano **rumore di fondo**.  
**9.** La notte è un altro sport: routine > eroismi.  
**10.** Non sei solo. La community T1D è un faro se scegli bene le voci.

**Più una.** Da allora tengo appunti: cosa ha funzionato, cosa no, cosa riprovare. *T1Diario* nasce per questo: condividere ciò che imparo.

## Takeaway pratici
- Chiedi al team sanitario di fissare **1–2 obiettivi** semplici per volta.
- Prepara un **kit tascabile** (zuccheri veloci, snack, micro-cerotti, penna di scorta).
- Imposta **pochi allarmi** ben scelti sul CGM, rivedili ogni mese.
- Concediti **giorni normali**: il TIR è un percorso, non un voto.

> *Nota*: questo post racconta la mia esperienza. Non sostituisce un consulto medico.`
  },
  'benvenuto-su-t1diario': {
    _path: '/blog/benvenuto-su-t1diario',
    title: 'Benvenutə su T1Diario',
    description: 'Cosa aspettarti: diario di vita tra lavoro, impegni, sport, amici e la convivenza quotidiana con il diabete di tipo 1.',
    date: '2025-10-23',
    tags: ['manifesto', 'benvenuto', 'mindset'],
    content: `Ciao! 🫶  
Benvenutə su **T1Diario**: qui troverai **il mio diario di vita quotidiana** tra lavoro, impegni, sport, amici — e **la convivenza giorno per giorno con il diabete di tipo 1** (T1D), con tutto quello che comporta davvero.

Niente eroismi, niente ricette magiche: **prove, errori, piccoli aggiustamenti**, idee pratiche e un pizzico di ironia.

## Cosa troverai
- Appunti brevi e concreti dalla vita reale  
- Routine, check-list e micro-strategie "a misura di giornata"  
- Pensieri su tecnologia, cibo "vero", movimento e socialità  
- Tono **leggero e gentile**, zero fuffa

## Come partecipare
- Lascia un commento (gentilezza obbligatoria 😉)  
- Suggerisci un tema dalla pagina **/chi-sono**  
- Iscriviti alla newsletter per non perdere i post più utili

> *Disclaimer*: questo blog racconta la mia esperienza personale. **Non è un consulto medico**: per decisioni sulla terapia, confrontati sempre con il tuo team sanitario.

A presto e… **basale calma**.`
  }
}

// Ottieni il parametro slug dalla route
const route = useRoute()
const slug = route.params.slug as string

// Trova l'articolo corrispondente
const article = computed(() => {
  if (Array.isArray(slug)) {
    return articles[slug.join('/')] || null
  }
  return articles[slug] || null
})

// Parsing del contenuto per l'articolo diagnosi-10-righe
const articleLines = computed(() => {
  if (!article.value || article.value._path !== '/blog/diagnosi-10-righe') return []
  
  const content = article.value.content
  const lines = content.split('\n').filter(line => line.trim().startsWith('**') && line.includes('.**'))
  return lines.map(line => line.replace(/^\*\*(\d+)\.\*\*\s*/, '').trim())
})

const articlePlusOne = computed(() => {
  if (!article.value || article.value._path !== '/blog/diagnosi-10-righe') return ''
  
  const content = article.value.content
  const plusOneMatch = content.match(/\*\*Più una\.\*\*\s*(.+?)(?=\n\n##|$)/s)
  return plusOneMatch ? plusOneMatch[1].trim() : ''
})

const takeawayList = computed(() => {
  if (!article.value || article.value._path !== '/blog/diagnosi-10-righe') return []
  
  const content = article.value.content
  const takeawayMatch = content.match(/## Takeaway pratici\n((?:- .+\n?)+)/)
  if (!takeawayMatch) return []
  
  return takeawayMatch[1]
    .split('\n')
    .filter(line => line.trim().startsWith('-'))
    .map(line => line.replace(/^-\s*/, '').trim())
})

const formatDate = (value?: string) => {
  if (!value) {
    return ''
  }
  return new Date(value).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' })
}

const giscusEnabled = computed(() => {
  const giscus = useRuntimeConfig().public?.giscus as any || {}
  return Boolean(giscus.repo && giscus.repoId && giscus.category && giscus.categoryId)
})
</script>
