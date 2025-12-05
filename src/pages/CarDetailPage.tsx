import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { cars } from "../data/cars";
import { GiGearStickPattern } from "react-icons/gi";
import { RiSpeedLine, RiSpeedUpLine } from "react-icons/ri";
import { IoFlashSharp } from "react-icons/io5";
import { TbEngine } from "react-icons/tb";
import { MdLoop, MdDriveEta } from "react-icons/md";
import { useState } from "react";

const CarDetailPage = () => {
  const { carId } = useParams<{ carId: string }>();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === carId);
  const [showTestDriveModal, setShowTestDriveModal] = useState(false);

  if (!car) {
    return (
      <div className="container py-5 text-center">
        <h1>Samochód nie znaleziony</h1>
        <button onClick={() => navigate(-1)} className="btn btn-gold mt-3">
          ← Powrót
        </button>
      </div>
    );
  }

  const getCategoryName = (categoryId: number) => {
    switch (categoryId) {
      case 1:
        return { name: "Luksus", path: "luxury" };
      case 2:
        return { name: "Sport", path: "sport" };
      case 3:
        return { name: "Miasto", path: "city" };
      default:
        return { name: "Nieznana", path: "" };
    }
  };

  const category = getCategoryName(car.category);

  return (
    <div className="car-detail-page">
      <motion.section
        className="car-detail-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(11,11,11,0.9)), url(${car.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
        }}
      >
        <div
          className="container py-5 d-flex flex-column justify-content-end"
          style={{ minHeight: "60vh" }}
        >
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline-light mb-4 align-self-start"
          >
            ← Powrót
          </button>
          <div className="mb-4">
            <Link
              to={`/models/${category.path}`}
              className="badge bg-gold text-dark text-decoration-none px-3 py-2"
            >
              {category.name}
            </Link>
          </div>
          <h1 className="display-2 fw-bold mb-2">{car.name}</h1>
          <p className="lead text-gold fs-4">{car.subtitle}</p>
        </div>
      </motion.section>

      <section className="container py-5">
        <div className="row g-5">
          {/* Main Content */}
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="h3 mb-4">O modelu</h2>
              <p className="lead mb-4">{car.description}</p>

              <div className="car-detail-specs-grid mt-5">
                <h3 className="h4 mb-4">Specyfikacja techniczna</h3>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="spec-detail-item">
                      <div className="spec-icon">
                        <TbEngine />
                      </div>
                      <div>
                        <h5 className="text-muted small mb-1">Silnik</h5>
                        <p className="mb-0 fw-semibold">{car.engine}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="spec-detail-item">
                      <div className="spec-icon">
                        <IoFlashSharp />
                      </div>
                      <div>
                        <h5 className="text-muted small mb-1">Moc</h5>
                        <p className="mb-0 fw-semibold">{car.power} KM</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="spec-detail-item">
                      <div className="spec-icon">
                        <MdLoop />
                      </div>
                      <div>
                        <h5 className="text-muted small mb-1">
                          Moment obrotowy
                        </h5>
                        <p className="mb-0 fw-semibold">{car.torque} Nm</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="spec-detail-item">
                      <div className="spec-icon">
                        <RiSpeedLine />
                      </div>
                      <div>
                        <h5 className="text-muted small mb-1">0-100 km/h</h5>
                        <p className="mb-0 fw-semibold">{car.acceleration}s</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="spec-detail-item">
                      <div className="spec-icon">
                        <RiSpeedUpLine />
                      </div>
                      <div>
                        <h5 className="text-muted small mb-1">
                          Prędkość maksymalna
                        </h5>
                        <p className="mb-0 fw-semibold">{car.topSpeed} km/h</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="spec-detail-item">
                      <div className="spec-icon">
                        <GiGearStickPattern />
                      </div>
                      <div>
                        <h5 className="text-muted small mb-1">
                          Skrzynia biegów
                        </h5>
                        <p className="mb-0 fw-semibold">{car.transmission}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="spec-detail-item">
                      <div className="spec-icon">
                        <MdDriveEta />
                      </div>
                      <div>
                        <h5 className="text-muted small mb-1">Napęd</h5>
                        <p className="mb-0 fw-semibold">{car.drivetrain}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="sticky-top"
              style={{ top: "100px" }}
            >
              <div className="card bg-dark border-secondary">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <p className="text-muted mb-2">Cena od</p>
                    <h3 className="display-5 text-gold mb-0">
                      ${car.price.toLocaleString()}
                    </h3>
                  </div>
                  <div className="d-grid gap-3">
                    <button className="btn btn-gold btn-lg">
                      Zapytaj o ofertę
                    </button>
                    <button
                      className="btn btn-outline-light"
                      onClick={() => setShowTestDriveModal(true)}
                    >
                      Umów jazdę próbną
                    </button>
                  </div>
                  <hr className="my-4 border-secondary" />
                  <div className="text-center">
                    <p className="small text-muted mb-2">
                      Potrzebujesz pomocy?
                    </p>
                    <a
                      href="tel:+48123456789"
                      className="text-gold text-decoration-none"
                    >
                      +48 123 456 789
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Test Drive Modal */}
      {showTestDriveModal && (
        <div
          className="modal show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setShowTestDriveModal(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className="modal-content bg-dark border-0 shadow-lg"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            >
              <div className="modal-header border-secondary">
                <div>
                  <h5 className="modal-title text-gold mb-1">
                    Umów jazdę próbną
                  </h5>
                  <p className="text-muted small mb-0">{car.name}</p>
                </div>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowTestDriveModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="testDriveName" className="form-label">
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="testDriveName"
                      placeholder="Jan Kowalski"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="testDriveEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="testDriveEmail"
                      placeholder="jan@example.com"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="testDrivePhone" className="form-label">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="testDrivePhone"
                      placeholder="+48 123 456 789"
                      required
                    />
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="testDriveDate" className="form-label">
                        Preferowana data
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="testDriveDate"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="testDriveTime" className="form-label">
                        Preferowana godzina
                      </label>
                      <select
                        className="form-select"
                        id="testDriveTime"
                        required
                      >
                        <option value="">Wybierz godzinę</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="testDriveMessage" className="form-label">
                      Dodatkowe uwagi (opcjonalnie)
                    </label>
                    <textarea
                      className="form-control"
                      id="testDriveMessage"
                      rows={3}
                      placeholder="Dodatkowe informacje..."
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer border-secondary">
                <button
                  type="button"
                  className="btn btn-outline-light"
                  onClick={() => setShowTestDriveModal(false)}
                >
                  Anuluj
                </button>
                <button type="button" className="btn btn-gold px-4">
                  Wyślij zgłoszenie
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetailPage;
