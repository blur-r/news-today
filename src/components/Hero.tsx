const Hero = () => {
    return (
        <div className="bg-amber-700 mx-auto mt-6 p-3 md:rounded-lg md:w-[60%] flex flex-col gap-4 "
            style={{ backgroundImage: "url('')" }}>
            <h1 className="font-bold text-3xl md:text-4xl pt-20 md:pt-35">
                Breaking: Major Political Event Unfolds
            </h1>
            <p>
                A significant political event has just occurred, impacting global relations and sparking
                widespread discussion. Our team provides in-depth analysis and live updates as the
                situation develops.
            </p>
            <button className="bg-blue-600 p-2 rounded-md text-white w-[100px]">
                Read More
            </button>
        </div>
    )
}

export default Hero;