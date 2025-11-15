import { useState } from "react";

const Categories: React.FC = () => {
    const categories = [
        "All",
        "Top Stories",
        "World",
        "Politics",
        "Business",
        "Tech",
    ];
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <div className="flex items-center mt-4 mx-auto w-[90%] md:w-[60%]">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-2 rounded-full text-sm whitespace-nowrap transition cursor-pointer md:px-4
        ${selectedCategory === cat
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>

    )
}

export default Categories
