import { useNewsContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Hero = () => {
    const { articles, loading, error } = useNewsContext();
    const article = articles[8] || null;

    // Loading state
    if (loading) {
        return (
            <div className="bg-amber-700 mx-auto mt-6 p-3 md:rounded-lg md:w-[60%] flex flex-col gap-4 h-64 animate-pulse">
                <div className="h-8 bg-amber-600 rounded w-3/4"></div>
                <div className="h-4 bg-amber-600 rounded w-full"></div>
                <div className="h-4 bg-amber-600 rounded w-5/6"></div>
            </div>
        );
    }
    if (error) {
        return (
            <div className="bg-red-600 text-white mx-auto mt-6 p-3 md:rounded-lg md:w-[60%] text-center">
                {error}
            </div>
        );
    }
    if (!article) {
        return (
            <div className="bg-gray-200 mx-auto mt-6 p-3 md:rounded-lg md:w-[60%] text-center text-gray-700">
                No headline available
            </div>
        );
    }
    return (
        <div
            className="mx-auto mt-6 p-3 md:rounded-lg md:w-[60%] flex flex-col gap-4 text-white relative overflow-hidden"
            style={{
                backgroundImage: article.urlToImage
                    ? `url(${article.urlToImage})`
                    : "linear-gradient(to right, #b45309, #92400e)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 flex flex-col gap-4 pt-20 md:pt-35">
                <h1 className="font-bold text-3xl md:text-4xl drop-shadow-lg">
                    {article.title}
                </h1>

                <p className="drop-shadow">
                    {article.description ||
                        "A significant event is unfolding. Stay informed with live updates."}
                </p>
                <Link
                    to={`/detail/${article.id}`}
                >
                    <button className="bg-blue-600 p-2 rounded-md text-white w-[100px] hover:bg-blue-700 transition">
                        Read More
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Hero;
