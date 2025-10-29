<script setup lang="ts">
import { reactive, ref, computed } from 'vue'

const props = defineProps<{
  articleTitle: string
  articleSlug: string
}>()

const runtimeConfig = useRuntimeConfig()
const contactEmail = runtimeConfig.public.contactEmail || 'ciao.t1diario@gmail.com'

const form = reactive({
  name: '',
  email: '',
  comment: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')
const errorMessage = ref('')

const isFormValid = computed(() => {
  return form.name.trim() && form.email.trim() && form.comment.trim()
})

const handleSubmit = async () => {
  if (!isFormValid.value) {
    return
  }

  isSubmitting.value = true
  submitStatus.value = 'idle'
  errorMessage.value = ''

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.comment,
        _subject: `💬 Nuovo commento su "${props.articleTitle}"`,
        _template: 'table',
        'Articolo': props.articleTitle,
        'URL': props.articleSlug
      })
    })

    const data = await response.json()

    if (response.ok && data.success) {
      submitStatus.value = 'success'
      // Reset form
      form.name = ''
      form.email = ''
      form.comment = ''
    } else {
      throw new Error(data.message || 'Errore durante l\'invio del commento')
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
  <section class="mt-12 space-y-6">
    <!-- Header sezione commenti -->
    <div class="flex items-center gap-3">
      <div class="h-px flex-1 bg-sabbia"></div>
      <h2 class="text-2xl font-bold text-espresso">Lascia un commento</h2>
      <div class="h-px flex-1 bg-sabbia"></div>
    </div>

    <div class="rounded-3xl border border-sabbia bg-crema/80 p-6 shadow-sm">
      <p class="mb-6 text-sm text-fumo">
        Hai domande, riflessioni o esperienze da condividere su questo articolo?
        Scrivimi qui sotto e ti risponderò al più presto.
      </p>

      <!-- Success Message -->
      <div
        v-if="submitStatus === 'success'"
        class="mb-5 rounded-2xl bg-salvia/10 border border-salvia/20 p-4"
      >
        <p class="text-sm font-medium text-salvia">
          ✓ Grazie per il tuo commento! Lo riceverò a breve e ti risponderò via email.
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

      <form class="space-y-4" @submit.prevent="handleSubmit">
        <div class="grid gap-4 sm:grid-cols-2">
          <!-- Nome -->
          <div>
            <label for="comment-name" class="text-sm font-medium text-moka">
              Nome <span class="text-red-500">*</span>
            </label>
            <input
              id="comment-name"
              v-model="form.name"
              type="text"
              required
              placeholder="Il tuo nome"
              :disabled="isSubmitting"
              class="mt-1 w-full rounded-2xl border border-sabbia bg-white px-4 py-2.5 text-sm focus:border-salvia focus:outline-none disabled:bg-sabbia/20 disabled:cursor-not-allowed"
            />
          </div>

          <!-- Email -->
          <div>
            <label for="comment-email" class="text-sm font-medium text-moka">
              Email <span class="text-red-500">*</span>
            </label>
            <input
              id="comment-email"
              v-model="form.email"
              type="email"
              required
              placeholder="tu@esempio.it"
              :disabled="isSubmitting"
              class="mt-1 w-full rounded-2xl border border-sabbia bg-white px-4 py-2.5 text-sm focus:border-salvia focus:outline-none disabled:bg-sabbia/20 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        <!-- Commento -->
        <div>
          <label for="comment-text" class="text-sm font-medium text-moka">
            Commento <span class="text-red-500">*</span>
          </label>
          <textarea
            id="comment-text"
            v-model="form.comment"
            required
            rows="5"
            placeholder="Scrivi qui il tuo commento..."
            :disabled="isSubmitting"
            class="mt-1 w-full rounded-2xl border border-sabbia bg-white px-4 py-3 text-sm focus:border-salvia focus:outline-none disabled:bg-sabbia/20 disabled:cursor-not-allowed"
          />
        </div>

        <!-- Privacy note -->
        <p class="text-xs text-fumo/80">
          La tua email sarà usata solo per rispondere al commento e non sarà pubblicata o condivisa.
        </p>

        <!-- Submit button -->
        <button
          type="submit"
          class="w-full rounded-2xl bg-salvia px-4 py-3 text-sm font-semibold text-white transition hover:bg-salvia/90 disabled:cursor-not-allowed disabled:bg-sabbia"
          :disabled="!isFormValid || isSubmitting"
        >
          <span v-if="isSubmitting">Invio in corso...</span>
          <span v-else>Invia commento</span>
        </button>
      </form>
    </div>
  </section>
</template>
