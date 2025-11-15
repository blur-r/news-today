import NewsCard from "./NewsCard";

const RecentArticles = () => {
    return (
        <div className="mt-10 md:w-[60%] mx-auto">
            <h1 className="font-bold text-2xl pl-2.5">Recent Articles</h1>
            <div className="mt-4 flex flex-wrap gap-6 justify-center md:justify-start">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    )
}

export default RecentArticles;  