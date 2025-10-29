<script setup lang="ts">
import { computed, ref } from 'vue'

// Dati statici degli articoli per ora (ordinati per data decrescente)
const posts = ref([
  {
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
  {
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
])

// Funzione per estrarre le prime 2-3 righe del contenuto
const getPreview = (content: string, maxLines: number = 3) => {
  if (!content) return ''
  const lines = content.split('\n').filter(line => line.trim())
  return lines.slice(0, maxLines).join('\n')
}

// Funzione per estrarre le righe numerate dell'articolo diagnosi-10-righe
const getArticleLines = (content: string, maxLines: number = 3) => {
  if (!content) return []
  const lines = content.split('\n').filter(line => line.trim().startsWith('**') && line.includes('.**'))
  return lines.slice(0, maxLines).map(line => line.replace(/^\*\*(\d+)\.\*\*\s*/, '').trim())
}

// Funzione per rilevare automaticamente il tipo di articolo e applicare la formattazione
const getArticleType = (article: any) => {
  if (!article || !article._path) return 'standard'
  
  // Articoli con formattazione speciale
  if (article._path === '/blog/diagnosi-10-righe') return 'diagnosi'
  if (article._path === '/blog/benvenuto-su-t1diario') return 'benvenuto'
  
  // Rilevamento automatico per nuovi articoli
  if (article.content) {
    // Rileva articoli con righe numerate (formato: **1.**, **2.**, etc.)
    if (article.content.includes('**1.**') && article.content.includes('**2.**')) {
      return 'numbered-list'
    }
    
    // Rileva articoli con sezioni "Cosa troverai" e "Come partecipare"
    if (article.content.includes('## Cosa troverai') && article.content.includes('## Come partecipare')) {
      return 'welcome-style'
    }
    
    // Rileva articoli con takeaway pratici
    if (article.content.includes('## Takeaway pratici')) {
      return 'takeaway-style'
    }
  }
  
  return 'standard'
}

const formatDate = (value?: string) => {
  if (!value) {
    return ''
  }
  return new Date(value).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' })
}
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
          <header class="flex flex-col gap-3">
            <div class="flex items-center justify-between">
              <p class="text-xs uppercase tracking-widest text-fumo/80">{{ formatDate(p.date) }}</p>
              <div v-if="p.tags?.length" class="flex flex-wrap gap-1">
                <span 
                  v-for="tag in p.tags.slice(0, 2)" 
                  :key="tag"
                  class="rounded-full bg-salvia/10 px-2 py-1 text-xs font-medium text-salvia"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            <NuxtLink :to="p._path" class="text-2xl font-semibold text-espresso hover:text-salvia transition">
              {{ p.title }}
            </NuxtLink>
            <p class="text-fumo" v-if="p.description">{{ p.description }}</p>
          </header>

          <div class="mt-6">
            <!-- Formattazione per articoli con righe numerate (diagnosi-10-righe e simili) -->
            <div v-if="getArticleType(p) === 'diagnosi' || getArticleType(p) === 'numbered-list'" class="space-y-4">
              <div class="grid gap-3">
                <div v-for="(line, index) in getArticleLines(p.content, 2)" :key="index" 
                     class="rounded-xl border border-sabbia/30 bg-white/40 p-4 shadow-sm">
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-salvia text-white flex items-center justify-center text-xs font-semibold">
                      {{ index + 1 }}
                    </div>
                    <div class="flex-1">
                      <p class="text-gray-800 text-sm leading-relaxed">{{ line }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4 text-sm text-fumo/70 italic text-center">
                ...continua a leggere per vedere le altre righe e i takeaway pratici
              </div>
            </div>
            
            <!-- Formattazione per articoli di benvenuto (benvenuto-su-t1diario e simili) -->
            <div v-else-if="getArticleType(p) === 'benvenuto' || getArticleType(p) === 'welcome-style'" class="space-y-4">
              <!-- Introduzione compatta -->
              <div class="rounded-xl bg-gradient-to-r from-salvia/10 to-ambra/10 p-4 text-center">
                <div class="text-3xl mb-2">🫶</div>
                <p class="text-sm text-gray-700 leading-relaxed">
                  Qui troverai <strong>il mio diario di vita quotidiana</strong> tra lavoro, impegni, sport, amici — e 
                  <strong>la convivenza giorno per giorno con il diabete di tipo 1</strong> (T1D).
                </p>
                <p class="mt-2 text-xs text-gray-600 italic">
                  Niente eroismi, niente ricette magiche: <strong>prove, errori, piccoli aggiustamenti</strong>.
                </p>
              </div>
              
              <div class="mt-4 text-sm text-fumo/70 italic text-center">
                ...continua a leggere per vedere cosa troverai e come partecipare
              </div>
            </div>
            
            <!-- Formattazione per articoli con takeaway pratici -->
            <div v-else-if="getArticleType(p) === 'takeaway-style'" class="space-y-4">
              <div class="rounded-xl bg-gradient-to-r from-ambra/10 to-salvia/10 p-4">
                <h4 class="text-sm font-semibold text-espresso mb-2 flex items-center gap-1">
                  <span>💡</span>
                  Takeaway pratici
                </h4>
                <div class="text-xs text-gray-700" v-html="getPreview(p.content, 2)"></div>
              </div>
              <div class="mt-4 text-sm text-fumo/70 italic text-center">
                ...continua a leggere per vedere tutti i consigli pratici
              </div>
            </div>
            
            <!-- Formattazione standard per altri articoli -->
            <div v-else-if="p && p.content" class="prose prose-neutral max-w-none">
              <div v-html="getPreview(p.content, 2)"></div>
              <div class="mt-4 text-sm text-fumo/70 italic">
                ...continua a leggere
              </div>
            </div>
            
            <!-- Fallback se non c'è contenuto -->
            <div v-else class="text-fumo/70 italic">
              Contenuto non disponibile
            </div>
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
