// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    experimental: {
        fonts: [
            {
                provider: fontProviders.google(),
                name: "Geist Mono",
                cssVariable: "--font-geist-mono",
            },
        ],
    },

    markdown: {
        rehypePlugins: [
            rehypeSlug,
            [
                rehypeAutolinkHeadings,
                {
                    behavior: "wrap",
                    properties: {
                        className: ["anchor"],
                    },
                },
            ],
            [
                rehypeExternalLinks,
                { target: "_blank", rel: ["noopener", "noreferrer"] },
            ],
        ],
        syntaxHighlight: "shiki",
        shikiConfig: { theme: "catppuccin-mocha" },
    },

    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [mdx()],
});

