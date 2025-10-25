<template>
  <section class="mt-4 space-y-8">
    <!-- Header con immagine -->
    <header class="relative overflow-hidden rounded-3xl border border-sabbia bg-espresso text-crema shadow-sm">
      <img
        src="/hero_blog.png"
        alt="Taccuino aperto con penna, glucometro e una tazza di tè"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-espresso/95 via-espresso/85 to-moka/50" />
      <div class="relative p-8">
        <p class="text-sm uppercase tracking-[0.3em] text-sabbia">T1Diario</p>
        <h1 class="mt-3 text-4xl font-semibold tracking-tight">Chi sono</h1>
        <p class="mt-3 max-w-2xl text-crema/90">
          Perché scrivo T1Diario e cosa troverai qui.
        </p>
      </div>
    </header>

    <!-- Contenuto principale -->
    <article class="prose prose-lg prose-zinc max-w-none rounded-3xl border border-sabbia bg-crema/80 p-8 shadow-sm">
      <div class="space-y-6">
        <p class="text-lg leading-relaxed text-gray-700">
          Ciao! Sono <strong class="text-espresso">Stefano</strong> e convivo con il diabete di tipo 1 dal 2019. 
          Qui racconto quello che imparo ogni giorno: errori, soluzioni provvisorie, piccoli trucchi. 
          Non troverai ricette miracolose: solo esperimenti reali.
        </p>

        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-2xl bg-salvia/10 p-6">
            <h3 class="mb-3 text-lg font-semibold text-espresso">✨ Cosa troverai</h3>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-salvia">•</span>
                <span>Post brevi e concreti su mindset</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-salvia">•</span>
                <span>Tecnologia e strumenti quotidiani</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-salvia">•</span>
                <span>Cibo reale e sport blando</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-salvia">•</span>
                <span>Vita sociale & lavoro</span>
              </li>
            </ul>
          </div>

          <div class="rounded-2xl bg-ambra/10 p-6">
            <h3 class="mb-3 text-lg font-semibold text-espresso">🚫 Cosa non troverai</h3>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-ambra">•</span>
                <span>Consigli medici personalizzati</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-ambra">•</span>
                <span>Promesse facili o soluzioni miracolose</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-ambra">•</span>
                <span>Retorica o toni drammatici</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="rounded-2xl border-l-4 border-salvia bg-salvia/5 p-6">
          <div class="flex items-start gap-3">
            <div class="text-2xl">⚠️</div>
            <div>
              <h4 class="font-semibold text-espresso mb-2">Disclaimer</h4>
              <p class="text-gray-700 leading-relaxed">
                Questo blog racconta la mia esperienza personale e non offre diagnosi o consigli medici. 
                Per decisioni sulla terapia confrontati sempre con il tuo team sanitario.
              </p>
            </div>
          </div>
        </div>

        <div class="rounded-2xl bg-gradient-to-r from-espresso/5 to-moka/5 p-6 text-center">
          <p class="text-lg text-gray-700">
            Se quello che leggi ti è utile, fammelo sapere: 
            <span class="font-semibold text-espresso">i commenti gentili sono sempre benvenuti</span> 💬
          </p>
        </div>
      </div>
    </article>
  </section>
</template>
