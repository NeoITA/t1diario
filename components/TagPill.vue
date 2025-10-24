<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="inline-flex items-center rounded-full border border-graywarm px-2 py-0.5 text-gray-700">{{ label }}</span>
</template>
