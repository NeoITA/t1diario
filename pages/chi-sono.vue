<script setup lang="ts">
const profile = await queryContent()
  .where({ _path: '/chi-sono' })
  .findOne()
</script>

<template>
  <section class="mt-4">
    <article
      v-if="profile"
      class="prose prose-zinc max-w-none rounded-3xl border border-sabbia bg-crema/80 p-6"
    >
      <ContentRenderer :value="profile" />
    </article>
    <p v-else class="text-fumo">Contenuto non disponibile al momento.</p>
  </section>
</template>
