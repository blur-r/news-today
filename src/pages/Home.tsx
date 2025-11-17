import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import RecentArticles from "../components/RecentArticles";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="">
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