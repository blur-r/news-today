import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import RecentArticles from "../components/RecentArticles";

const Home = () => {
    return (
        <div className="">
            <Header />
            <SearchBar />
            <Categories />
            <Hero />
            <RecentArticles />
        </div>

    );
}

export default Home;