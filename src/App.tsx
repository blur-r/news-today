import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import DetailedNews from "./pages/DetailedNews";
import { NewsProvider } from "./context/AppContext";

const App: React.FC = () => {
  return (
    <NewsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailedNews />} />
      </Routes>
    </NewsProvider>
  )
}

export default App