export const projects = [
    {
        title: "g7-chat",
        description:
            "fast, minimalist ai chat interface built for power users who value ownership, efficiency, and full control over their conversations.",
        role: "creator",
        period: "2025 feb - may",
        achievements: [
            "built a distraction-free interface to interact with ai assistants with full thread visibility and management",
            "optimized thread management using smart local state and react query for snappy, lightweight performance",
            "designed for privacy, performance, and developer experience with custom distraction-free styling",
            "integrated seamless ai model streaming using vercel ai sdk",
        ],
        technologies: [
            "typescript",
            "next.js",
            "trpc",
            "vercel ai sdk",
            "zod",
            "auth.js",
            "tailwind css",
            "shadcn/ui",
            "drizzle orm",
            "postgresql",
        ],
        href: "https://github.com/Gr1shma/g7-chat",
    },
    {
        title: "tube-and-fuss",
        description:
            "a backend system combining features of youtube and twitter to support video uploads, tweets with social interaction functionalities.",
        role: "creator",
        period: "2024 nov",
        achievements: [
            "built secure jwt auth with bcrypt for password encryption",
            "designed scalable mongodb schema for videos, tweets, users, and interactions",
            "implemented api routes for full crud and social features (likes, comments, subscriptions)",
            "handled file uploads and processing for images and videos",
            "wrote robust validation and error handling for all endpoints",
        ],
        technologies: [
            "javascript",
            "node.js",
            "express",
            "mongodb",
            "jwt",
            "bcrypt",
        ],
        href: "https://github.com/Gr1shma/tube-and-fuss",
    },
    {
        title: "go-rrsag",
        description:
            "a lightweight rss aggregator with full api and scraping support, built in go.",
        role: "creator",
        period: "2025 Jun",
        achievements: [
            "built a clean, modular rest api using chi router and jwt-based auth",
            "implemented background scraping with goroutines to keep feeds fresh",
            "used sqlc to generate type-safe go code from raw sql queries",
            "managed schema and migrations using goose",
            "dockerized the stack with postgres and environment config for local dev",
        ],
        technologies: ["go", "chi", "sqlc", "goose", "postgresql", "docker"],
        href: "https://github.com/Gr1shma/go-rrsag",
    },
];
