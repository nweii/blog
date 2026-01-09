# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with Astro 5 and Tailwind CSS v4. Posts are written in Markdown and managed through Astro's Content Collections API with full type safety.

## Development Commands

This project uses **bun** as the package manager (**not npm or yarn**):

- `bun dev` - Start development server at localhost:4321
- `bun build` - Build for production to `./dist/`
- `bun preview` - Preview production build locally
- `bun add` - Add dependencies
- `bun remove` - Remove dependencies
- `bun run` - Run scripts defined in `package.json`

## Architecture

### Content Management

Posts live in `src/content/posts/` as Markdown files. The content schema is defined in `src/content/config.ts` with these fields:
- `title` (required)
- `aliases` (array of strings, defaults to []) - alternative URLs that redirect to the canonical post
- `slug` (optional override for URL)
- `description` (optional)
- `date` (required, coerced to Date, supports `YYYY-MM-DDTHH:mm` format)
- `published` (boolean, defaults to true)
- `modified` (optional, coerced to Date)
- `tags` (array of strings, defaults to [])

**Private Posts**: Posts in `src/content/posts/private/` are automatically excluded from builds, RSS feeds, and tag pages via a `!filePath?.includes('/private/')` filter applied consistently across:
- `src/pages/posts/[...slug].astro` (getStaticPaths)
- `src/pages/feed.xml.ts` (RSS generation)
- `src/pages/tags/[tag].astro` (tag filtering)
- All other public post queries

- All other public post queries

### Markdown & Serialization

The blog uses several Remark plugins to enhance the authoring experience:
- `remark-directive`: Enables the `:::directive` syntax.
- `remark-quoteback`: (Custom) Transforms `:::quote{url="..." author="..." title="..."}` blocks into standard Quoteback-styled `<blockquote>` elements during build. This maintains graceful degradation while providing a mobile-friendly authoring experience.

### Routing & Pages

Dynamic routes use Astro's `getStaticPaths()`:
- `/posts/[...slug]` - Individual post pages, uses custom slug or falls back to filename
- `/tags/[tag]` - Tag archive pages, excludes 'posts' tag from display
- `/feed.xml` - RSS feed generated via `@astrojs/rss`

### Layouts

Two-tier layout system:
- `BaseLayout.astro` - Base HTML structure with metadata and global styles
- `MainLayout.astro` - Adds sidebar navigation and footer, used for all content pages

### Site Metadata

Global site information lives in `src/data/metadata.ts` including site name, URLs, social links, and RSS feed configuration.

### Styling

Uses Tailwind CSS v4 with:
- Custom fonts (Nimbus Sans Extended, Funnel Sans) loaded via `src/styles/global.css`
- Typography plugin for post content styling
- Tailwind loaded as Vite plugin in `astro.config.mjs`

### URL Redirects

Legacy blog post redirects are configured in `astro.config.mjs` under the `redirects` object to maintain old URLs from previous blog iterations.
