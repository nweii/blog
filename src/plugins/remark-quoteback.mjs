// ABOUTME: Remark plugin that transforms :::quote directives into quoteback HTML.
// ABOUTME: Enables simpler mobile-friendly authoring while outputting the same HTML as manual quotes.

import { visit } from "unist-util-visit";

/**
 * Transforms markdown quote directives into quoteback blockquotes.
 *
 * Syntax:
 *   :::quote{url="..." author="..." title="..."}
 *   Quote text goes here.
 *   :::
 *
 * Outputs:
 *   <blockquote class="quoteback" data-author="..." data-title="..." cite="...">
 *     <p>Quote text goes here.</p>
 *   </blockquote>
 */
export default function remarkQuoteback() {
  return (tree) => {
    visit(tree, "containerDirective", (node) => {
      if (node.name !== "quote") return;

      const { url, author, title } = node.attributes || {};

      // Build the blockquote HTML structure
      const data = node.data || (node.data = {});
      data.hName = "blockquote";
      data.hProperties = {
        class: "quoteback",
        darkmode: "",
        "data-title": title || "",
        "data-author": author || "",
        cite: url || "",
      };
    });
  };
}
