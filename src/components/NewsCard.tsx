const NewsCard = () => {
    return (
        <div className=" w-[90%] md:w-[280px] flex flex-col gap-3">
            <img src="/images/box shadow.png" alt="" className="h-[200px] md:h-[150px] rounded-md" />
            <h1 className="font-bold text-xl">Tech Giants Unveils New Inovation</h1>
            <p className="text-[14px] text-gray-600"> A significant political event has just occurred, impacting global relations and sparking
                widespread discussion.</p>
            <span className="text-[13px] text-gray-600">Oct 25, 2023</span>
        </div>
    )
}

export default NewsCard;