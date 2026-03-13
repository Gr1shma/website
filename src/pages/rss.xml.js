import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getSlugFromFilePath } from "../utils/slug";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

export async function GET(context) {
    const posts = await getCollection("posts");
    return rss({
        title: "Grishma Dhakal",
        description: "Thoughts and notes on the things I learned",
        site: context.site,
        items: posts.map((post) => {
            const htmlContent = sanitizeHtml(parser.render(post.body || ""), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'pre', 'code', 'span']),
                allowedAttributes: {
                    ...sanitizeHtml.defaults.allowedAttributes,
                    img: ['src', 'alt', 'title'],
                    code: ['class'],
                    span: ['class', 'style'],
                }
            });
            return {
                title: post.data.title,
                pubDate: post.data.date,
                description: htmlContent,
                link: `/blog/${getSlugFromFilePath(post.filePath || "")}/`,
                content: htmlContent,
            };
        }),
        customData: `<language>en-us</language>`,
    });
}
