// import { useCallback } from "react";
// import type { Article } from "../types/Types";
// import { generateId } from "../utils";

// const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
// const BASE_URL = "https://newsapi.org/v2";


// const fetchAndEnrich = async (url: string): Promise<Article[]> => {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error(`HTTP ${res.status}`);

//     const data = await res.json();
//     const rawArticles = data.articles || [];

//     return rawArticles.map((article: any) => ({
//         ...article,
//         id: generateId(article.url),
//     }));
// };

// export const useNews = () => {
//     const getTopHeadlines = useCallback(async () => {
//         return fetchAndEnrich(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
//     }, []);

//     const getAllArticles = useCallback(async () => {
//         return fetchAndEnrich(`${BASE_URL}/everything?q=latest&pageSize=20&sortBy=publishedAt&apiKey=${API_KEY}`);
//     }, []);

//     const getNewsByCategory = useCallback(async (category: string) => {
//         return fetchAndEnrich(`${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);
//     }, []);

//     const searchNews = useCallback(async (query: string) => {
//         return fetchAndEnrich(`${BASE_URL}/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&apiKey=${API_KEY}`);
//     }, []);

//     return {
//         getTopHeadlines,
//         getAllArticles,
//         getNewsByCategory,
//         searchNews,
//     };
// };

// hooks/useNews.ts
import { useCallback } from "react";
import type { Article } from "../types/Types";
import { generateId } from "../utils";

// Use relative URL so Vite proxy handles TLS
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "/v2";

const fetchAndEnrich = async (url: string): Promise<Article[]> => {
    const res = await fetch(url);

    if (!res.ok) {
        if (res.status === 426) {
            throw new Error("Network requires TLS upgrade. Using proxy to fix...");
        }
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    const rawArticles = data.articles || [];

    return rawArticles.map((article: any) => ({
        ...article,
        id: generateId(article.url),
        source: {
            id: article.source?.id || null,
            name: article.source?.name || "Unknown Source"
        }
    }));
};

export const useNews = () => {
    const getTopHeadlines = useCallback(async () => {
        return fetchAndEnrich(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
    }, []);

    const getAllArticles = useCallback(async () => {
        return fetchAndEnrich(`${BASE_URL}/everything?q=latest&pageSize=20&sortBy=publishedAt&apiKey=${API_KEY}`
        );
    }, []);

    const getNewsByCategory = useCallback(async (category: string) => {
        return fetchAndEnrich(
            `${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
        );
    }, []);

    const searchNews = useCallback(async (query: string) => {
        if (!query.trim()) return [];
        return fetchAndEnrich(
            `${BASE_URL}/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&apiKey=${API_KEY}`
        );
    }, []);

    return {
        getTopHeadlines,
        getAllArticles,
        getNewsByCategory,
        searchNews,
    };
};