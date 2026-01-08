# Changelog

All notable technical changes to this blog will be documented here. Content updates (new posts, edits) are not tracked in this changelog.

The format is based on [Keep a Changelog](https://keepachangelog.com), and this project adheres to [Semantic Versioning](https://semver.org).

## [2.0.0] - 2026-01-08

Complete rebuild of the blog, migrating from an Eleventy-based site to Astro.

### Changed

- **Framework**: Migrated from Eleventy to Astro v5.2+ with Bun
- **Styling**: Upgraded from Tailwind CSS v3 to v4
- **Typography**: Switched to Nimbus Sans Extended (headings) and Funnel Sans (body)
- **Content structure**: Flattened yearly post directories into `src/content/posts/`
- **URL structure**: Simplified post URLs from `/YYYY/MM/slug` to `/posts/slug`

### Added

- Astro Content Collections with typed frontmatter schema
- Custom slug support via frontmatter (optional override of filename)
- NC Monomark SVG favicon with automatic dark mode inversion
- Custom breakpoints: `md: 868px`, `ntiny: 416px`
- Legacy URL redirects for SEO continuity
- "Notes" navigation link to the digital garden

### Removed

- JavaScript-based Tailwind config (now CSS-first in `global.css`)
- PostCards and other legacy Eleventy components
