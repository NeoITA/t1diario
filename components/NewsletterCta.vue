<template>
  <section id="newsletter" class="mt-10 rounded-2xl border border-graywarm bg-white p-5">
    <h3 class="text-lg font-semibold">Newsletter quindicinale</h3>
    <p class="mt-1 text-gray-600">Zero spam, un riassunto e un’idea in più sulla gestione quotidiana.</p>
    <form class="mt-4 flex gap-2" @submit.prevent="">
      <input type="email" required placeholder="la-tua@email"
             class="w-full rounded-xl border border-graywarm px-3 py-2 outline-none focus:ring-2 focus:ring-aqua/60">
      <button type="submit" class="rounded-xl bg-aqua px-4 py-2 font-medium text-ink">Iscriviti</button>
    </form>
    <p class="mt-2 text-xs text-gray-500">Suggerimento: integra un provider come Buttondown, Substack o Brevo.</p>
  </section>
</template>
