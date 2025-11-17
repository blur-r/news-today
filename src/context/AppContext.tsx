import { createContext, useContext, useState, useEffect } from "react";
import { useNews } from "../hooks/useNews";
import type { Article } from "../types/Types";

export type Category =
    | "top"
    | "all"
    | "business"
    | "entertainment"
    | "general"
    | "health"
    | "science"
    | "sports"
    | "technology";

interface NewsContextType {
    category: Category;
    setCategory: (c: Category) => void;
    articles: Article[];
    loading: boolean;
    error: string | null;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider = ({ children }: { children: React.ReactNode }) => {
    const { getNewsByCategory, getAllArticles, getTopHeadlines } = useNews();

    const [category, setCategory] = useState<Category>("all");
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadNews = async () => {
        try {
            setLoading(true);
            setError(null);

            let data: Article[];

            if (category === "all") {
                data = await getAllArticles();
            } else if (category === "top") {
                data = await getTopHeadlines();
            } else {
                data = await getNewsByCategory(category);
            }
            setArticles(data);
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Failed to load news";
            setError(message);
            setArticles([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadNews();
    }, [category]);

    return (
        <NewsContext.Provider
            value={{ category, setCategory, articles, loading, error }}
        >
            {children}
        </NewsContext.Provider>
    );
};

export const useNewsContext = () => {
    const ctx = useContext(NewsContext);
    if (!ctx) throw new Error("useNewsContext must be used within NewsProvider");
    return ctx;
};
