<script setup lang="ts">
import { computed, reactive } from 'vue'

const runtimeConfig = useRuntimeConfig()
const contactEmail = runtimeConfig.public.contactEmail || 'ciao@t1diario.it'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const mailtoHref = computed(() => {
  const friendlyName = form.name.trim() || 'lettrice/lettore di T1Diario'
  const subject = `Nuovo messaggio da ${friendlyName}`
  const bodyLines = [
    `Nome: ${form.name || 'Anonimo'}`,
    `Email: ${form.email || 'non fornita'}`,
    '',
    form.message
  ]
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`
})

const handleSubmit = () => {
  if (!form.message.trim()) {
    return
  }
  if (!import.meta.client) {
    return
  }
  window.location.href = mailtoHref.value
}
</script>

<template>
  <section class="mt-4 space-y-8">
    <div>
      <h1 class="text-3xl font-bold tracking-tight">Contatti</h1>
      <p class="mt-2 text-fumo">
        Domande, storie da condividere o suggerimenti per nuovi articoli? Scrivimi qui sotto e riceverai una risposta appena possibile.
      </p>
    </div>

    <div class="rounded-3xl border border-sabbia bg-crema/80 p-6 shadow-sm">
      <form class="space-y-5" @submit.prevent="handleSubmit">
        <div>
          <label for="contact-name" class="text-sm font-medium text-moka">Nome</label>
          <input
            id="contact-name"
            v-model="form.name"
            type="text"
            placeholder="Il tuo nome"
            class="mt-1 w-full rounded-2xl border border-sabbia bg-white px-4 py-2.5 text-sm focus:border-salvia focus:outline-none"
          />
        </div>

        <div>
          <label for="contact-email" class="text-sm font-medium text-moka">Email</label>
          <input
            id="contact-email"
            v-model="form.email"
            type="email"
            required
            placeholder="tu@esempio.it"
            class="mt-1 w-full rounded-2xl border border-sabbia bg-white px-4 py-2.5 text-sm focus:border-salvia focus:outline-none"
          />
        </div>

        <div>
          <label for="contact-message" class="text-sm font-medium text-moka">Messaggio</label>
          <textarea
            id="contact-message"
            v-model="form.message"
            required
            rows="6"
            placeholder="Scrivi liberamente quello che vuoi condividere…"
            class="mt-1 w-full rounded-2xl border border-sabbia bg-white px-4 py-3 text-sm focus:border-salvia focus:outline-none"
          />
        </div>

        <button
          type="submit"
          class="w-full rounded-2xl bg-ambra px-4 py-3 text-sm font-semibold text-crema transition hover:bg-ambra/90 disabled:cursor-not-allowed disabled:bg-sabbia"
          :disabled="!form.message.trim()"
        >
          Invia email
        </button>
      </form>

      <p class="mt-6 text-sm text-fumo">
        Preferisci usare il tuo client di posta? Apri
        <a :href="`mailto:${contactEmail}`" class="font-medium text-salvia hover:underline">{{ contactEmail }}</a>
        e scrivi liberamente.
      </p>
    </div>
  </section>
</template>
