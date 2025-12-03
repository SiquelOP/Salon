import { motion } from "framer-motion";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import type { Car } from "../types/car";

type Props = {
  title: string;
  description: string;
  cars: Car[];
  stats?: { luksus: number; moc: number; ekonomia: number };
  reverse?: boolean;
};

const CategoryPanel = ({
  title,
  description,
  cars,
  stats,
  reverse = false,
}: Props) => {
  const [, setActive] = useState(0);
  return (
    <section className={`category-section ${reverse ? "reverse" : ""}`}>
      <div className="container d-grid category-grid">
        <div className="category-media order-1 order-lg-0">
          <motion.div
            initial={{ opacity: 0, x: reverse ? 64 : -64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-100"
          >
            <Carousel
              className="category-carousel"
              interval={4000}
              indicators={false}
              controls={false}
              onSelect={(i) => setActive(i)}
            >
              {cars.map((c) => (
                <Carousel.Item key={c.id}>
                  <img
                    className="category-image rounded shadow"
                    src={c.image}
                    alt={c.name}
                  />
                  <Carousel.Caption className="d-none d-md-block">
                    <div className="badge bg-dark bg-opacity-50 fw-semibold">
                      {c.name}
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </motion.div>
        </div>
        <div className="category-content">
          <h2 className="display-4 fw-bold mb-3 text-uppercase">{title}</h2>
          <p className="lead mb-4">{description}</p>
          {stats && (
            <div className="category-stats mt-3">
              <StatBar label="Luksus" value={stats.luksus} />
              <StatBar label="Moc" value={stats.moc} />
              <StatBar label="Ekonomia" value={stats.ekonomia} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const StatBar = ({ label, value }: { label: string; value: number }) => {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className="stat-row mb-2">
      <div className="d-flex justify-content-between align-items-end mb-1">
        <span className="stat-label">{label}</span>
        <span className="stat-value">{clamped}%</span>
      </div>
      <div className="stat-track">
        <motion.div
          className="stat-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${clamped}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default CategoryPanel;
