# Configurazione GitHub Secrets per T1Diario

Per far funzionare i commenti (Giscus) e il form contatti (FormSubmit) su GitHub Pages, devi configurare i seguenti **Repository Secrets**.

## Come aggiungere i Secrets

1. Vai su: **https://github.com/NeoITA/t1diario/settings/secrets/actions**
2. Clicca **"New repository secret"** per ogni variabile qui sotto
3. Inserisci **Name** (nome) e **Secret** (valore) come indicato

---

## Secrets da configurare

### 1. Email di contatto

| Name | Secret |
|------|--------|
| `NUXT_PUBLIC_CONTACT_EMAIL` | `ciao.t1diario@gmail.com` |

---

### 2. Configurazione Giscus (Commenti)

| Name | Secret |
|------|--------|
| `NUXT_PUBLIC_GISCUS_REPO` | `NeoITA/t1diario` |
| `NUXT_PUBLIC_GISCUS_REPO_ID` | `R_kgDOQIm_vQ` |
| `NUXT_PUBLIC_GISCUS_CATEGORY` | `General` |
| `NUXT_PUBLIC_GISCUS_CATEGORY_ID` | `DIC_kwDOQIm_vc4CxO9i` |

---

### 3. Configurazioni opzionali Giscus

Queste sono **opzionali** (hanno valori di default nel codice), ma ti consiglio di aggiungerle per essere esplicito:

| Name | Secret |
|------|--------|
| `NUXT_PUBLIC_GISCUS_MAPPING` | `pathname` |
| `NUXT_PUBLIC_GISCUS_STRICT` | `0` |
| `NUXT_PUBLIC_GISCUS_REACTIONS` | `1` |
| `NUXT_PUBLIC_GISCUS_EMIT_METADATA` | `0` |
| `NUXT_PUBLIC_GISCUS_INPUT_POSITION` | `top` |
| `NUXT_PUBLIC_GISCUS_THEME` | `light` |
| `NUXT_PUBLIC_GISCUS_LANG` | `it` |
| `NUXT_PUBLIC_GISCUS_LOADING` | `eager` |

---

## Dopo aver configurato i Secrets

1. **Committa e pusha** il file `.github/workflows/deploy.yml` aggiornato
2. Il deploy su GitHub Pages ripartirà automaticamente
3. I commenti Giscus saranno visibili sugli articoli

---

## FormSubmit - Primo invio (email di conferma)

**IMPORTANTE**: La prima volta che qualcuno usa il form contatti su GitHub Pages, FormSubmit invierà un'email di conferma a `ciao.t1diario@gmail.com`.

### Passaggi per attivare FormSubmit:

1. Visita il sito pubblicato su GitHub Pages
2. Vai alla pagina **Contatti**
3. Compila e invia il form con dati di test
4. **Controlla l'inbox di `ciao.t1diario@gmail.com`**
5. Troverai un'email da **FormSubmit** con oggetto tipo "Activate your FormSubmit email address"
6. **Clicca sul link di conferma** nell'email
7. ✅ Fatto! Da quel momento in poi tutte le email dal form arriveranno automaticamente

**Nota**: Questo passaggio va fatto **una sola volta** per ogni indirizzo email.

---

## Verifica

Dopo aver configurato tutto:

- ✅ I commenti Giscus sono visibili sotto gli articoli
- ✅ Il form contatti invia email (dopo conferma FormSubmit)
- ✅ Il deploy automatico funziona quando modifichi i contenuti

---

## Supporto

Se hai problemi:
1. Controlla i log del GitHub Action: https://github.com/NeoITA/t1diario/actions
2. Verifica che tutti i secrets siano configurati correttamente
3. Assicurati che il repository sia **pubblico**
4. Verifica che le **Discussions** siano abilitate
