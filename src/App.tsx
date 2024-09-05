import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleDetail from "./components/ArticleDetail";
import Home from "./components/Home";
import Footer from "./components/Footer";
import MyNav from "./components/MyNav";

function App() {
  return (
    <BrowserRouter>
    <header>
      <MyNav/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
      </Routes>
      </main>
      <footer className="mt-3">
      <Footer/>
     
      </footer>
     
    </BrowserRouter>
  );
}

export default App;
