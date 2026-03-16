import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getSlugFromFilePath } from "../utils/slug";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_AUTHOR } from "../consts";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

function stripMdx(body) {
    return body
        .replace(/^import\s+.*$/gm, "")
        .replace(/^export\s+.*$/gm, "")
        .replace(/<[A-Z][A-Za-z]*\s*[^>]*\/>/g, "")
        .replace(/<[A-Z][A-Za-z]*[^>]*>[\s\S]*?<\/[A-Z][A-Za-z]*>/g, "")
        .trim();
}

function getExcerpt(body, maxLength = 160) {
    const plain = stripMdx(body)
        .replace(/^#{1,6}\s+.*$/gm, "")
        .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
        .replace(/[*_~`>#\-|]/g, "")
        .replace(/\n+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    if (plain.length <= maxLength) return plain;
    return plain.slice(0, maxLength).replace(/\s\S*$/, "") + "…";
}

const sanitizeOptions = {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        "img",
        "pre",
        "code",
        "span",
    ]),
    allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        img: ["src", "alt", "title"],
        code: ["class"],
        span: ["class", "style"],
    },
};

export async function GET(context) {
    const posts = await getCollection("posts");

    const sortedPosts = posts.sort(
        (a, b) =>
            new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
    );

    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        stylesheet: "/rss-styles.xsl",
        items: sortedPosts.map((post) => {
            const cleanBody = stripMdx(post.body || "");
            const htmlContent = sanitizeHtml(
                parser.render(cleanBody),
                sanitizeOptions,
            );
            const description =
                post.data.description || getExcerpt(post.body || "");

            return {
                title: post.data.title,
                pubDate: post.data.date,
                description,
                link: `/blog/${getSlugFromFilePath(post.filePath || "")}/`,
                content: htmlContent,
                author: SITE_AUTHOR,
            };
        }),
        customData: `<language>en-us</language>`,
    });
}
