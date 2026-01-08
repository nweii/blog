// ABOUTME: Utility function to convert strings to URL-safe slugs.
// ABOUTME: Supports path segments (e.g., "Topics/Note Title" → "topics/note-title").

/**
 * Convert a string to a URL-safe slug.
 * Handles path segments by slugifying each part separately.
 *
 * @example
 * slugify("Notes on Design") // → "notes-on-design"
 * slugify("Topics/Notes on Design") // → "topics/notes-on-design"
 */
export function slugify(text: string): string {
  return text
    .split("/")
    .map((segment) =>
      segment
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "") // Remove non-word chars except spaces and hyphens
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/-+/g, "-") // Collapse multiple hyphens
        .replace(/^-+|-+$/g, "") // Trim hyphens from start/end
    )
    .join("/");
}
