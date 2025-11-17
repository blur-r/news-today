import type { Article } from "../types/Types";
import { formatDate } from "../utils";
import { Link } from "react-router-dom";
type ArticleProp = {
    article: Article
}
const NewsCard = ({ article }: ArticleProp) => {
    const { title, description, publishedAt, urlToImage } = article
    return (
        <Link to={`/detail/${article.id}`}>
            <div className=" w-[90%] md:w-[280px] flex flex-col gap-3 mx-auto">
                <img
                    src={urlToImage || "/images/box shadow.png"}
                    alt={title}
                    className="h-[200px] md:h-[150px] rounded-md object-cover"
                />
                <h1 className="font-bold text-xl">{title}</h1>
                <p className="text-[14px] text-gray-600 line-clamp-3">
                    {description || "No description available."}
                </p>
                <span className="text-[13px] text-gray-600">
                    {formatDate(publishedAt)}
                </span>
            </div>
        </Link>

    )
}

export default NewsCard;