<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="inline-flex items-center rounded-full border border-sabbia bg-white/50 px-2 py-0.5 text-moka">{{ label }}</span>
</template>
