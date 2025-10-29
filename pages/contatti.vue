<script setup lang="ts">
import { reactive, ref } from 'vue'

const runtimeConfig = useRuntimeConfig()
const contactEmail = runtimeConfig.public.contactEmail || 'ciao.t1diario@gmail.com'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')
const errorMessage = ref('')

const handleSubmit = async () => {
  if (!form.message.trim() || !form.email.trim()) {
    return
  }

  isSubmitting.value = true
  submitStatus.value = 'idle'
  errorMessage.value = ''

  try {
    const friendlyName = form.name.trim() || 'Lettore/Lettrice di T1Diario'
    const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.name || 'Anonimo',
        email: form.email,
        message: form.message,
        _subject: `Nuovo messaggio da ${friendlyName}`,
        _template: 'table'
      })
    })

    const data = await response.json()

    if (response.ok && data.success) {
      submitStatus.value = 'success'
      // Reset form
      form.name = ''
      form.email = ''
      form.message = ''
    } else {
      throw new Error(data.message || 'Errore durante l\'invio del messaggio')
    }
  } catch (error) {
    submitStatus.value = 'error'
    errorMessage.value = error instanceof Error ? error.message : 'Si è verificato un errore. Riprova più tardi.'
  } finally {
    isSubmitting.value = false
  }
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
      <!-- Success Message -->
      <div
        v-if="submitStatus === 'success'"
        class="mb-5 rounded-2xl bg-salvia/10 border border-salvia/20 p-4"
      >
        <p class="text-sm font-medium text-salvia">
          ✓ Messaggio inviato con successo! Riceverai una risposta al più presto.
        </p>
      </div>

      <!-- Error Message -->
      <div
        v-if="submitStatus === 'error'"
        class="mb-5 rounded-2xl bg-red-50 border border-red-200 p-4"
      >
        <p class="text-sm font-medium text-red-700">
          {{ errorMessage }}
        </p>
      </div>

      <form class="space-y-5" @submit.prevent="handleSubmit">
        <div>
          <label for="contact-name" class="text-sm font-medium text-moka">Nome</label>
          <input
            id="contact-name"
            v-model="form.name"
            type="text"
            placeholder="Il tuo nome"
            :disabled="isSubmitting"
            class="mt-1 w-full rounded-2xl border border-sabbia bg-white px-4 py-2.5 text-sm focus:border-salvia focus:outline-none disabled:bg-sabbia/20 disabled:cursor-not-allowed"
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
            :disabled="isSubmitting"
            class="mt-1 w-full rounded-2xl border border-sabbia bg-white px-4 py-2.5 text-sm focus:border-salvia focus:outline-none disabled:bg-sabbia/20 disabled:cursor-not-allowed"
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
            :disabled="isSubmitting"
            class="mt-1 w-full rounded-2xl border border-sabbia bg-white px-4 py-3 text-sm focus:border-salvia focus:outline-none disabled:bg-sabbia/20 disabled:cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          class="w-full rounded-2xl bg-ambra px-4 py-3 text-sm font-semibold text-crema transition hover:bg-ambra/90 disabled:cursor-not-allowed disabled:bg-sabbia"
          :disabled="!form.message.trim() || !form.email.trim() || isSubmitting"
        >
          <span v-if="isSubmitting">Invio in corso...</span>
          <span v-else>Invia email</span>
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
