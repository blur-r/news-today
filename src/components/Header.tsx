import { useState } from "react";
import { Menu, X, Search, Bell, Calendar, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useNewsContext } from "../context/AppContext";

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const { darkMode, setDarkMode } = useNewsContext();

    const navLinks = [
        "Top Stories",
        "World",
        "Business",
        "Technology",
        "Sports",
        "Arts",
    ];

    return (
        <header className={`sticky top-0 z-50 shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)] ${darkMode ? "bg-[#111C38] text-white" : "bg-[#f2f2f2]"}`}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                <Link to={'/'}>
                    <div className="flex items-center gap-2 font-semibold text-lg">
                        <div className="text-blue-600   "><Calendar /></div>
                        <span className="font-bold text-2xl">News Today</span>
                    </div>
                </Link>

                <nav className={`hidden md:flex items-center gap-6 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {navLinks.map((item) => (
                        <button key={item} className="hover:text-black cursor-pointer">
                            {item}
                        </button>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-5">
                    <span className={`flex gap-1.5 px-3 py-1 rounded-md items-center ${darkMode ? "bg-[#1F2937]" : "bg-[#fcfafa]"}`}>
                        <Search className="w-5 h-5 text-gray-500 hover:text-black" />
                        <input type="search" name="" id="" className="outline-none focus:outline-none" />
                    </span>
                    <button onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <Sun className="w-5 h-5 text-gray-500 hover:text-black" /> : <Moon className="w-5 h-5 text-gray-500 hover:text-black" />}
                    </button>
                    <Bell className="w-5 h-5 text-gray-500 hover:text-black" />
                </div>

                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-150" : "max-h-0"
                    }`}
            >
                <nav className="px-4 pb-4 flex flex-col gap-4 text-gray-700">
                    <div className="flex items-center gap-2 border rounded-md px-3 py-2 bg-gray-50">
                        <Search className="w-5 h-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search news..."
                            className="bg-transparent outline-none flex-1 text-sm"
                        />
                    </div>

                    {navLinks.map((item) => (
                        <button
                            key={item}
                            className="text-left py-2 border-b border-gray-100"
                        >
                            {item}
                        </button>
                    ))}

                    <div className="flex items-center gap-3 pt-2">
                        <Bell className="w-5 h-5 text-gray-500" />
                        <button onClick={() => setDarkMode(!darkMode)}>
                            {darkMode ? <Sun className="w-5 h-5 text-gray-500 hover:text-black" /> : <Moon className="w-5 h-5 text-gray-500 hover:text-black" />}
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
