import type { Article } from "../types/Types";
import { formatDate } from "../utils";
import { Link } from "react-router-dom";
import { useNewsContext } from "../context/AppContext";
type SearchProp = {
    article: Article
}
const SearchResultCard = ({ article }: SearchProp) => {
    const { title, urlToImage, author, publishedAt } = article;
    const { darkMode } = useNewsContext();

    return (
        <Link to={`/detail/${article.id}`}>
            <div className={`flex items-center gap-4 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border w-[300px] max-w-2xl ${darkMode ? "bg-[#1F2937] border-gray-700" : "bg-white border-gray-100"}`}>
                <div className="shrink-0">
                    <img
                        src={urlToImage}
                        alt=""
                        className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-md"
                        loading="lazy"
                    />
                </div>

                <div className="">
                    <h3 className={`font-bold text-lg line-clamp-3 leading-tight ${darkMode ? "text-gray-300" : "text-gray-900"}`}>
                        {title}
                    </h3>

                    <div className="flex flex-col gap-3 mt-3 text-xs text-gray-500">
                        <span className={`font-medium ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
                            {author}
                        </span>
                        <span>
                            {formatDate(publishedAt)}
                        </span>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default SearchResultCard;