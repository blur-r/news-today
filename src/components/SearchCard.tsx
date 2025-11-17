import type { Article } from "../types/Types";
import { formatDate } from "../utils";
import { Link } from "react-router-dom";
type SearchProp = {
    article: Article
}
const SearchResultCard = ({ article }: SearchProp) => {
    const { title, urlToImage, author, publishedAt } = article;

    return (
        <Link to={`/detail/${article.id}`}>
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 w-[300px] max-w-2xl">
                <div className="shrink-0">
                    <img
                        src={urlToImage}
                        alt=""
                        className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-md"
                        loading="lazy"
                    />
                </div>

                <div className="">
                    <h3 className="font-bold text-lg text-gray-900 line-clamp-3 leading-tight">
                        {title}
                    </h3>

                    <div className="flex flex-col gap-3 mt-3 text-xs text-gray-500">
                        <span className="font-medium text-gray-700">
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