import { defineConfig } from "vite"
import webExtension, { readJsonFile } from "vite-plugin-web-extension"

const generateManifest = () => {
    const manifest = readJsonFile("src/manifest.json")
    const pkg = readJsonFile("package.json")
    return {
        name: pkg.name,
        description: pkg.description,
        version: pkg.version,
        ...manifest,
    }
}

export default defineConfig({
    plugins: [
        webExtension({
            manifest: generateManifest,
            watchFilePaths: ["package.json", "manifest.json"],
        }),
    ],
})
