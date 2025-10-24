<template>
  <div class="min-h-screen bg-panna text-ink antialiased">
    <HeaderNav />
    <main class="mx-auto max-w-3xl px-6 py-10">
      <slot />
    </main>
    <footer class="mt-16 border-t border-graywarm/70">
      <div class="mx-auto max-w-3xl px-6 py-10 text-sm text-gray-600">
        <p class="mb-2 font-medium">T1Diario — Diari di vita con il diabete di tipo 1</p>
        <p>Questo blog racconta esperienze personali, non offre consigli medici.</p>
      </div>
    </footer>
  </div>
</template>
