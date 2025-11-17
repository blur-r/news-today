import NewsCard from "./NewsCard";
import { useNewsContext } from "../context/AppContext";

const RecentArticles = () => {
    const { articles, loading, error } = useNewsContext();

    if (loading) {
        return (
            <div className="mt-10 md:w-[60%] mx-auto">
                <h1 className="font-bold text-2xl pl-2.5">Recent Articles</h1>
                <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600 text-lg fa-align-center">Loading Articles</p>
            </div>
        );
    }


    if (error || articles.length === 0) {
        return (
            <div className="mt-10 md:w-[60%] mx-auto">
                <h1 className="font-bold text-2xl pl-2.5">Recent Articles</h1>
                <div className="bg-red-600 text-white mx-auto mt-6 p-3 md:rounded-lg text-center">
                    {error || "No articles to display"}
                </div>
            </div>
        );
    }

    return (
        <div className="mt-10 md:w-[60%] mx-auto">
            <h1 className="font-bold text-2xl pl-2.5">Recent Articles</h1>
            <div className="mt-4 flex flex-wrap gap-6 justify-center items-start md:justify-start">
                {articles.map((article) => (
                    <NewsCard key={article.url || article.title} article={article} />
                ))}
            </div>
        </div>
    );
};

export default RecentArticles;