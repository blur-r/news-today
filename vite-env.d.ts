/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly NEWS_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare const __DEBUG_VITE_ENV__: unique symbol;