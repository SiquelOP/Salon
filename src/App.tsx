import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import Models from "./pages/Models";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100 bg-dark text-light">
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/models" element={<Models />} />
          <Route path="/models/:category" element={<CategoryPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
