import { Search } from "lucide-react";
import SearchCard from "./SearchCard";
import { useState, useEffect } from "react";
import { useNews } from "../hooks/useNews";
import type { Article } from "../types/Types";
const SearchBar: React.FC = () => {
    const [query, setQuery] = useState<string>("");
    const [results, setResults] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { searchNews } = useNews()

    useEffect(() => {
        const timer = setTimeout(async () => {
            if (!query.trim()) {
                setResults([]);
                return;
            }
            setLoading(true);
            setError(null);
            try {
                const data = await searchNews(query);
                setResults(data);
            } catch (err: unknown) {
                const message = err instanceof Error ? err.message : "Failed to load news";
                setError(message);
                setResults([]);
            } finally {
                setLoading(false);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [query, searchNews]);

    return (
        <div className="mx-auto w-[90%] md:w-[60%] relative">
            <div className="flex items-center gap-3 p-2.5 rounded-md mt-10 mx-auto bg-white shadow-md">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search news in Nigeria..."
                    className="flex-1 outline-none text-gray-800 placeholder-gray-400"
                />
            </div>

            {query && (

                <div className="bg-white w-full md:w-[670px] rounded-md mt-7 shadow-lg p-4 max-h-80 overflow-y-scroll">
                    <p>Showing {results.length} results for "{query}"</p>

                    {loading && (
                        <div className="w-full flex justify-center items-center py-12">
                            <div className="text-center">
                                <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
                                <p className="mt-4 text-gray-600 text-lg">Searching for "{query}"...</p>
                            </div>
                        </div>
                    )}

                    {error && !loading && (
                        <div className="w-full text-center py-12 text-red-600 text-lg">
                            {error}
                        </div>
                    )}

                    {!loading && !error && results.length === 0 && query && (
                        <div className="w-full text-center py-12 text-gray-500">
                            <p className="text-xl font-medium">No results found for "{query}"</p>
                        </div>
                    )}

                    {results.length > 0 && !loading && (
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            {results.map((article, index) => (
                                <div key={article.url || index} className="shrink-0 w-full sm:w-[300px]">
                                    <SearchCard article={article} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );

}

export default SearchBar;