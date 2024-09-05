import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleDetail from "./components/ArticleDetail";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
