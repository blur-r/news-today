import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import DetailedNews from "./pages/DetailedNews";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailedNews />} />
      </Routes>
    </>
  )
}

export default App