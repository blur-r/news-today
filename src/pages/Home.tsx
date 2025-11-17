import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import RecentArticles from "../components/RecentArticles";
import Footer from "../components/Footer";
import { useNewsContext } from "../context/AppContext";

const Home = () => {
    const { darkMode } = useNewsContext();
    return (
        <div className={`${darkMode ? "bg-[#1F2937] text-white" : "bg-[#f2f2f2]"}`}>
            <Header />
            <SearchBar />
            <Categories />
            <Hero />
            <RecentArticles />
            <Footer />
        </div>

    );
}

export default Home;