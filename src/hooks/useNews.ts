import { useCallback } from "react";
import type { Article } from "../types/Types";
import { generateId } from "../utils";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

// const fetchNews = async (url: string): Promise<Article[]> => {
//     const res = await fetch(url);
//     if (!res.ok) {
//         throw new Error(`HTTP ${res.status}: ${res.statusText}`);
//     }
//     const data = await res.json();
//     return data.articles || [];
// };

const fetchAndEnrich = async (url: string): Promise<Article[]> => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    const rawArticles = data.articles || [];

    return rawArticles.map((article: any) => ({
        ...article,
        id: generateId(article.url), // Add unique ID here!
    }));
};

export const useNews = () => {
    const getTopHeadlines = useCallback(async () => {
        return fetchAndEnrich(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
    }, []);

    const getAllArticles = useCallback(async () => {
        return fetchAndEnrich(`${BASE_URL}/everything?q=latest&pageSize=20&sortBy=publishedAt&apiKey=${API_KEY}`);
    }, []);

    const getNewsByCategory = useCallback(async (category: string) => {
        return fetchAndEnrich(`${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);
    }, []);

    const searchNews = useCallback(async (query: string) => {
        return fetchAndEnrich(`${BASE_URL}/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&apiKey=${API_KEY}`);
    }, []);

    return {
        getTopHeadlines,
        getAllArticles,
        getNewsByCategory,
        searchNews,
    };
};