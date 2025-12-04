import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { categories as categoryInfo } from "../data/categories";
import { cars } from "../data/cars";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const info = categoryInfo[category as keyof typeof categoryInfo];

  if (!info) {
    return (
      <div className="container py-5 text-center">
        <h1>Kategoria nie znaleziona</h1>
        <Link to="/models" className="btn btn-gold mt-3">
          Powrót do kategorii
        </Link>
      </div>
    );
  }

  return (
    <div className="category-page">
      <motion.section
        className="category-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container py-5">
          <Link to="/models" className="btn btn-outline-light mb-4">
            ← Powrót do kategorii
          </Link>
          <h1 className="display-3 fw-bold mb-3">{info.title}</h1>
          <p className="lead text-body">{info.description}</p>
        </div>
      </motion.section>

      <section className="container py-5">
        <div className="row g-4">
          {cars
            .filter((car) => car.category === info.id)
            .map((car, index) => (
              <motion.div
                key={car.id}
                className="col-12 col-md-6 col-lg-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              >
                <div className="card car-card bg-dark text-white h-100 d-flex flex-column border-0 shadow">
                  <div className="car-card-img-wrapper">
                    <img
                      src={car.image}
                      className="card-img-top"
                      alt={car.name}
                    />
                  </div>
                  <div className="card-body d-flex flex-column flex-grow-1 p-3">
                    <h5 className="card-title text-gold mb-1">{car.name}</h5>
                    <p className="text-body small mb-2">{car.subtitle}</p>
                    <p
                      className="card-text small mb-3"
                      style={{ minHeight: "3rem" }}
                    >
                      {car.description}
                    </p>

                    <div className="specs-section mt-auto">
                      <h6
                        className="mb-2 text-uppercase"
                        style={{ fontSize: "0.75rem", letterSpacing: "1px" }}
                      >
                        Specyfikacja
                      </h6>
                      <div className="row g-2">
                        <div className="col-6">
                          <div className="spec-item">
                            <span
                              className="text-body"
                              style={{ fontSize: "0.7rem" }}
                            >
                              Silnik
                            </span>
                            <p className="mb-0 small">{car.engine}</p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="spec-item">
                            <span
                              className="text-body"
                              style={{ fontSize: "0.7rem" }}
                            >
                              Moc
                            </span>
                            <p className="mb-0 small">{car.power} KM</p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="spec-item">
                            <span
                              className="text-body"
                              style={{ fontSize: "0.7rem" }}
                            >
                              Moment
                            </span>
                            <p className="mb-0 small">{car.torque} Nm</p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="spec-item">
                            <span
                              className="text-body"
                              style={{ fontSize: "0.7rem" }}
                            >
                              0-100 km/h
                            </span>
                            <p className="mb-0 small">{car.acceleration}s</p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="spec-item">
                            <span
                              className="text-body"
                              style={{ fontSize: "0.7rem" }}
                            >
                              V-max
                            </span>
                            <p className="mb-0 small">{car.topSpeed} km/h</p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="spec-item">
                            <span
                              className="text-body"
                              style={{ fontSize: "0.7rem" }}
                            >
                              Napęd
                            </span>
                            <p className="mb-0 small">{car.drivetrain}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-dark border-top border-secondary py-2 px-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span
                          className="text-body d-block"
                          style={{ fontSize: "0.7rem" }}
                        >
                          Cena od
                        </span>
                        <span className="h5 mb-0 text-gold">
                          ${car.price.toLocaleString()}
                        </span>
                      </div>
                      <button className="btn btn-gold btn-sm">Zapytaj</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
