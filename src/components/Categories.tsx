import type { Category } from "../context/AppContext";
import { useNewsContext } from "../context/AppContext";

const categoryList: { value: Category; label: string }[] = [
    { value: "all", label: "All" },
    { value: "top", label: "Top stories" },
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "general", label: "General" },
    { value: "health", label: "Health" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
];

const Categories: React.FC = () => {
    const { category, setCategory, darkMode } = useNewsContext();

    return (
        <div className="flex flex-wrap items-center justify-center gap-1 md:gap-3 mt-6 mx-auto w-[95%] md:w-[70%]">
            {categoryList.map(({ value, label }) => (
                <button
                    key={value}
                    onClick={() => setCategory(value)}
                    className={`px-2 py-0.5 md:px-4 md:py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap
            ${category === value
                            ? darkMode ? "bg-[#111C38] text-white shadow-lg scale-105" : "bg-blue-600 text-white shadow-lg scale-105"
                            : darkMode ? "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105" : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                        }`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};

export default Categories;