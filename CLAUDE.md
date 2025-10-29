# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

T1Diario is a personal blog about living with Type 1 Diabetes, built as a static site with Nuxt 3 and deployed to GitHub Pages. The blog features Italian content and uses a custom color palette inspired by warm, natural tones (espresso, crema, sabbia, salvia, etc.).

## Development Commands

### Local Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:3000
```

### Build & Deploy
```bash
npm run generate     # Generate static site for production (outputs to .output/public)
npm run preview      # Preview the generated static site locally
```

Note: The project uses `npm ci` in CI/CD for reproducible builds.

## Architecture

### Content Management (@nuxt/content v3)
- **Blog posts**: Located in `content/blog/*.md` with frontmatter (title, description, date, tags, draft, cover)
- **Pages**: Static content pages like `content/chi-sono.md`
- Posts are queried using `queryCollection('content')` API with SQLite-backed storage
- **Important**: Use `.all()` method to fetch results (NOT `.find()`)
- **Schema definition**: Collection schema is defined in `content.config.ts` at project root
- Date format: YYYY-MM-DD in frontmatter, displayed as Italian localized dates (dd MMM yyyy)

#### Query API
```typescript
// Correct v3 API
queryCollection('content')
  .where('path', 'LIKE', '/blog/%')
  .order('date', 'DESC')
  .all()  // NOT .find()

// For single items
queryCollection('content').path('/blog/slug').first()  // NOT .findOne()
```

### Routing Structure
- `/` - Home page (pages/index.vue)
- `/blog` - Blog listing page (pages/blog/index.vue)
- `/blog/[...slug]` - Individual blog post viewer (pages/blog/[...slug].vue)
- `/chi-sono` - About page
- `/contatti` - Contact page

All routes are pre-rendered at build time (`routeRules: { '/**': { prerender: true } }`).

### Layout System
- Single `layouts/default.vue` with HeaderNav, main content slot, and footer
- Fixed max-width of 3xl (48rem) for content
- Consistent padding and spacing throughout

### Components
- **PostCard.vue**: Reusable blog post card for listing pages
- **GiscusComments.vue**: Client-side Giscus comments integration (conditionally rendered when configured)
- **HeaderNav.vue**: Site navigation header
- **TagPill.vue**: Tag display component
- **NewsletterCta.vue**: Newsletter signup call-to-action

### Styling
- **TailwindCSS** with custom color palette defined in `tailwind.config.ts`
- Custom colors: espresso (dark brown), crema (cream bg), sabbia (sand), salvia (sage green), ambra (amber), moka, teak, fumo
- Main background: `bg-crema`, main text: `text-espresso`
- Rounded cards with `rounded-3xl` and subtle borders/shadows
- Prose styling for markdown content via `prose prose-lg prose-zinc`

### Base URL Configuration
The app supports deployment to both user/org pages and project pages via `NUXT_APP_BASE_URL`:
- User/org page (username.github.io): Set to `'/'`
- Project page (username.github.io/repo-name): Set to `'/repo-name/'`

The GitHub Action automatically sets this to `/${repository-name}/` via `${{ format('/{0}/', github.event.repository.name) }}`.

### Giscus Comments Integration
Comments are enabled via runtime config when the following env vars are set:
- `NUXT_PUBLIC_GISCUS_REPO`, `NUXT_PUBLIC_GISCUS_REPO_ID`
- `NUXT_PUBLIC_GISCUS_CATEGORY`, `NUXT_PUBLIC_GISCUS_CATEGORY_ID`
- Optional: mapping, theme, lang, etc.

The GiscusComments component is conditionally rendered at the bottom of blog posts when `giscus.repo` and `giscus.repoId` are present.

### Static Site Generation (SSG)
- Preset: `github_pages`
- Prerendered routes: `['/',''/blog', '/contatti', '/chi-sono']`
- Link crawling enabled for automatic route discovery
- Output directory: `.output/public`

## GitHub Actions Deployment

The deploy workflow (`.github/workflows/deploy.yml`) triggers on:
- Push to `main` branch with changes to: content/, pages/, components/, app.vue, nuxt.config.ts, package files
- Manual workflow dispatch

Auto-deploys to GitHub Pages using the generated `.output/public` folder.

## Content Guidelines

When creating new blog posts in `content/blog/*.md`:
```yaml
---
title: Post Title
description: 1-2 sentence summary
date: YYYY-MM-DD
tags: [tag1, tag2]
cover: /images/cover-name.jpg  # optional
draft: false  # optional, set to true to hide
---
```

Content is written in Italian, with a warm, practical, non-heroic tone focused on real daily life with Type 1 Diabetes.

## Important Notes

- This is a static site - no server-side rendering at runtime
- Content database uses better-sqlite3 during build
- **`content.config.ts` is required** - defines collection schemas for proper SQLite column creation
- All pages must be pre-rendered or crawlable for SSG
- Images should be placed in `public/` directory and referenced with absolute paths
- The `.nuxt/` and `.output/` directories are gitignored build artifacts

## Common Issues

### Content not showing / "No such column" error
If blog posts don't appear or you see SQL column errors:
1. Ensure `content.config.ts` exists with the correct schema
2. Verify you're using `.all()` instead of `.find()` in queries
3. Restart the dev server to rebuild the content database