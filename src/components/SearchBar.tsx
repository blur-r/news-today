import { Search } from "lucide-react";
const SearchBar: React.FC = () => {
    return (
        <div className="flex items-center gap-3 p-2.5 rounded-md  mt-10 w-[90%] mx-auto bg-white md:w-[60%]">
            <Search className="w-5 h-5 text-gray-500" />
            <input type="text" placeholder="Search news..." className="search-input outline-none focus:outline-none" />
        </div>
    );
}

export default SearchBar;