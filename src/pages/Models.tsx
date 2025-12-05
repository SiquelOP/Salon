import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categories } from "../data/categories";

const list = Object.values(categories);

const Models = () => {
  return (
    <div className="models-page">
      <motion.section
        // className="models-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container py-5">
          <Link to="/" className="btn btn-outline-light">
            ← Powrót do strony głównej
          </Link>
          <h1 className="display-3 fw-bold mb-3">Nasze Modele</h1>
          <p className="lead text-muted">
            Wybierz kategorię, aby odkryć naszą kolekcję pojazdów
          </p>
        </div>
      </motion.section>

      <section className="container py-5">
        <div className="row g-4">
          {list.map((category, index) => (
            <motion.div
              key={category.title}
              className="col-12 col-md-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              <Link to={category.path || "#"} className="text-decoration-none">
                <div className="category-card card bg-dark text-white h-100 card-hover-scale">
                  <div className="category-card-img-wrapper">
                    <img
                      src={category.categoryImage}
                      className="card-img-top"
                      alt={category.title}
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                    <div className="category-overlay">
                      <h2 className="display-4 fw-bold text-uppercase">
                        {category.title}
                      </h2>
                    </div>
                  </div>
                  <div className="card-body text-center">
                    <p className="lead mb-0">{category.description}</p>
                  </div>
                  <div className="card-footer bg-transparent border-0 text-center pb-4">
                    <span className="btn btn-gold">Przeglądaj →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Models;
