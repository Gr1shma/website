export const projects = [
    {
        title: "rawhttp",
        description:
            "A lightweight HTTP parser and server built in Rust. It follows RFC-9112 to understand TCP networking and protocol parsing.",
        role: "creator",
        period: "2025 Nov",
        achievements: [
            "Mastered HTTP/1.1 syntax and semantics by strictly implementing RFC 9112 specifications.",
            "Gained deep understanding of TCP connection lifecycles and raw byte stream manipulation.",
            "Learned thread-safe state management patterns using Rust's ownership model and Arc primitives.",
            "Explored robust error handling and type-driven development with Result/Option types.",
        ],
        technologies: [
            "rust",
            "tcp networking",
            "http protocol",
            "anyhow",
            "thiserror",
            "std::net",
        ],
        href: "https://github.com/Gr1shma/rawhttp",
    },
    {
        title: "notgit",
        description:
            "A minimal reimplementation of Git in Go. Built to understand how version control systems work under the hood.",
        role: "creator",
        period: "2025 Jul - Oct",
        achievements: [
            "Understood storage mechanisms, what git uses to store data.",
            "Learned the internal structure of Git objects (blobs, trees, commits) and D.",
            "Explored binary data serialization and low-level file system interactions in Go.",
            "Mastered CLI application architecture and command-line parsing logic.",
        ],
        technologies: ["go", "cobra", "testify", "sha1", "file i/o"],
        href: "https://github.com/Gr1shma/notgit",
    },
    {
        title: "go-rssag",
        description:
            "A lightweight RSS aggregator with full API and scraping support, built in Go.",
        role: "creator",
        period: "2025 Jun",
        achievements: [
            "Mastered Go concurrency patterns using Goroutines and Channels for parallel data scraping.",
            "Learned type-safe SQL interaction and code generation workflows with SQLC.",
            "Explored RESTful API design principles and middleware implementation in Go.",
            "Learned basic containerization concepts for isolating the application.",
        ],
        technologies: ["go", "chi", "sqlc", "goose", "postgresql", "docker"],
        href: "https://github.com/Gr1shma/go-rssag",
    },
    {
        title: "g7-chat",
        description:
            "A fast, minimalist AI chat interface built with full-stack Next.js.",
        role: "creator",
        period: "2025 Feb - May",
        achievements: [
            "Built thread management with branching and CRUD capabilities.",
            "Implemented AI integration allowing users to bring their own API keys.",
            "Designed a polished UI for user and also AI customization.",
            "Used tRPC to ensure end-to-end type safety across the stack.",
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
            "A backend system built in Express.js, combining features of YouTube and Twitter.",
        role: "creator",
        period: "2024 Nov",
        achievements: [
            "Built a REST API using JWT middleware for stateless authentication.",
            "Designed a modular architecture separating routes, controllers, and services for maintainability.",
            "Implemented MongoDB aggregation pipelines for efficient pagination and relational data fetching.",
            "Mastered API error handling patterns and input validation pipelines.",
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
];
