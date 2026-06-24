# Portfolio Astro

A personal portfolio website built with Astro and Tailwind CSS.

## Tech Stack

- Astro
- Tailwind CSS
- MDX
- Astro Content Collections
- Astro Assets
- Partytown
- Vercel Analytics

## Features

- Responsive portfolio landing page
- Project showcase powered by Astro content collections
- Experience timeline
- Certificate gallery
- Contact page
- Blog support through MDX
- Reusable SEO component
- Sitemap and robots.txt support

## Project Structure

- `src/components`: reusable Astro components
- `src/content/projects`: project content entries
- `src/content.config.ts`: content collection schemas
- `src/data/portfolio.ts`: reusable image and stack data
- `src/layouts`: page and section layouts
- `src/pages`: route-based pages
- `public/robots.txt`: crawler and sitemap config

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Adding a Project

Create a Markdown file inside `src/content/projects` with frontmatter similar to this:

```md
---
title: Project Name
description: Short project description.
category: personal
stack:
  - Astro
  - Tailwind CSS
imageKey: portfolio
alt: Project screenshot
url: https://example.com
order: 150
featured: true
---
```

If you add a new image, import it and add it to `projectImages` in `src/data/portfolio.ts`.
