# T1Diario — Nuxt 3 + Content (Starter)

Starter minimal per un blog personale su GitHub Pages.
- Nuxt 3 + @nuxt/content
- TailwindCSS
- 2 post iniziali
- Deploy con GitHub Actions → Pages

## Requisiti
- Node 18+ (consigliato 20)
- Un repository GitHub
- GitHub Pages abilitato (via Actions)

## Sviluppo locale
```bash
npm install
npm run dev
```
Apri http://localhost:3000

## Struttura
- `content/blog/*.md` → i post
- `pages/` → home, blog, viewer dei post, chi-sono
- `components/` → UI riutilizzabile
- `public/favicon.svg` → icona
- `nuxt.config.ts` → configurazione app/SEO/SSG

## Deploy su GitHub Pages
1. Crea un repository, ad es. `t1diario` e pusha i file.
2. In **Settings → Pages**, scegli **Build and deployment → GitHub Actions**.
3. Modifica in `.github/workflows/deploy.yml` la variabile `NUXT_APP_BASE_URL`:
   - user/org page (`USERNAME.github.io`): `NUXT_APP_BASE_URL: '/'`
   - project page (`USERNAME.github.io/REPO_NAME/`): `NUXT_APP_BASE_URL: '/REPO_NAME/'`
4. Fai push su `main` → la Action pubblica il sito.

> Nota: la Action carica la cartella `.output/public` generata da `npm run generate`.

## Commenti con Giscus
1. Configura l'app su [giscus.app](https://giscus.app) scegliendo il repository GitHub e la categoria di discussioni dove salvare i commenti.
2. Copia i valori mostrati (repository, repo ID, category, category ID, ecc.).
3. Aggiungi un file `.env` locale (ignorato da git) con:
   ```
   NUXT_PUBLIC_GISCUS_REPO=owner/repo
   NUXT_PUBLIC_GISCUS_REPO_ID=...
   NUXT_PUBLIC_GISCUS_CATEGORY=Announcements
   NUXT_PUBLIC_GISCUS_CATEGORY_ID=...
   ```
   (opzionalmente imposta anche `NUXT_PUBLIC_GISCUS_THEME`, `..._LANG`, ecc.).
4. Nella GitHub Action imposta le stesse variabili come `env`/`secrets` per avere i commenti anche in produzione.

Le impostazioni caricate in `nuxt.config.ts` attivano automaticamente il componente `GiscusComments` in fondo ai post del blog.

## Scrittura di un nuovo post
Crea un file in `content/blog/slug-del-post.md` con frontmatter:
```md
---
title: Titolo del post
description: 1–2 frasi
date: YYYY-MM-DD
tags: [tag1, tag2]
---

Contenuto in Markdown...
```

## Disclaimer
Questo progetto è un template educativo. Nessun consiglio medico.
# t1diario
