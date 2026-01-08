# Nathan Cheng's Blog

A personal blog and link-log built with [Astro](https://astro.build/) and [Tailwind CSS v4](https://tailwindcss.com/).

## 🚀 Features

- **Content Collections**: Fully typed content schema for blog posts with support for custom slugs and publication status.
- **RSS Feed**: Automatically generated feed at `/feed.xml`.
- **Archives & Tags**: Built-in archival browsing and tag-based filtering.
- **Tailwind CSS v4**: Modern styling with the latest Tailwind features.

## 📁 Project Structure

```text
/
├── src/
│   ├── components/     # Astro UI components
│   ├── content/        # Markdown posts and collection config
│   ├── data/           # Site-wide metadata and constants
│   ├── layouts/        # Page templates
│   ├── pages/          # Routing and page logic
│   └── styles/         # Global CSS
├── public/             # Static assets (favicons, etc.)
└── astro.config.mjs    # Astro configuration
```

## 🛠️ Development

This project uses `bun` for package management.

### Commands


| Command       | Action                                      |
| ------------- | ------------------------------------------- |
| `bun dev`     | Starts local dev server at `localhost:4321` |
| `bun build`   | Build the production site to `./dist/`      |
| `bun preview` | Preview the build locally                   |


## 📝 Writing Posts

Posts are located in `src/content/posts/`. Each post is a Markdown file with the following frontmatter:

```markdown
---
title: "Post Title"
aliases: ["Old Post Title", "Alternate Name"]  # Optional redirects (auto-slugified)
slug: "custom-url-slug"                  # Optional URL override
description: "Optional short summary"
date: 2024-01-15T12:00
published: true
modified: 2024-02-20T09:30               # Optional last-modified date
tags: ["design", "film"]
---
```

## 📋 Changelog

Technical updates to this blog are documented in [CHANGELOG.md](./CHANGELOG.md).
