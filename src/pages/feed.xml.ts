import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { metadata as siteMetadata } from "../data/metadata";

export async function GET() {
  const posts = await getCollection("posts", ({ data }) => {
    return data.published === true;
  });

  const sortedPosts = posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: siteMetadata.title,
    description: siteMetadata.description,
    site: siteMetadata.url,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description || "",
      link: `/posts/${post.data.slug || post.slug}`,
    })),
    customData: `<language>${siteMetadata.language}</language>`,
  });
}
