import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import Models from "./pages/Models";
import CategoryPage from "./pages/CategoryPage";
import CarDetailPage from "./pages/CarDetailPage";
// import AdminPage from "./pages/AdminPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <div className="app d-flex flex-column min-vh-100 bg-dark text-light">
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/models" element={<Models />} />
          <Route path="/models/:category" element={<CategoryPage />} />
          <Route path="/car/:carId" element={<CarDetailPage />} />
          {/* <Route path="/admin" element={<AdminPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
