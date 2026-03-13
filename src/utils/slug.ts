export function getSlugFromFilePath(filePath: string) {
    if (!filePath) return "";
    return filePath
        .split("/")
        .pop()!
        .replace(/\.mdx?$/, "");
}
