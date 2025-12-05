import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { FaAward, FaCar, FaUsers, FaHandshake } from "react-icons/fa";
import { useEffect, useRef } from "react";

const AnimatedNumber = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return (
    <h3 ref={ref} className="display-5 fw-bold text-gold mb-2">
      0{suffix}
    </h3>
  );
};

const About = () => {
  const stats = [
    { icon: <FaCar />, value: 500, suffix: "+", label: "Sprzedanych aut" },
    {
      icon: <FaUsers />,
      value: 1000,
      suffix: "+",
      label: "Zadowolonych klientów",
    },
    { icon: <FaAward />, value: 15, suffix: "+", label: "Lat doświadczenia" },
    { icon: <FaHandshake />, value: 100, suffix: "%", label: "Satysfakcji" },
  ];

  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3">O nas</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
            Jesteśmy ekspertami w dziedzinie samochodów luksusowych, sportowych
            i miejskich. Od 15 lat pomagamy klientom znaleźć ich wymarzony
            pojazd.
          </p>
        </motion.div>

        <div className="row g-4 mb-5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="col-6 col-md-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="about-stat-card text-center p-4">
                <div className="stat-icon mb-3">{stat.icon}</div>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <p className="text-muted mb-0">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="row g-5 align-items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1562911791-c7a97b729ec5?q=80&w=1600&auto=format&fit=crop"
              alt="Showroom"
              className="img-fluid rounded shadow-lg"
            />
          </div>
          <div className="col-lg-6">
            <h3 className="h2 mb-4">Dlaczego my?</h3>
            <div className="about-features">
              <div className="feature-item mb-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="feature-icon">
                    <FaAward />
                  </div>
                  <div>
                    <h4 className="h5 mb-2">Najwyższa jakość</h4>
                    <p className="text-muted mb-0">
                      Każdy samochód przechodzi szczegółową kontrolę i jest
                      certyfikowany przez naszych ekspertów.
                    </p>
                  </div>
                </div>
              </div>
              <div className="feature-item mb-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="feature-icon">
                    <FaHandshake />
                  </div>
                  <div>
                    <h4 className="h5 mb-2">Indywidualne podejście</h4>
                    <p className="text-muted mb-0">
                      Oferujemy spersonalizowane doradztwo i pomoc w wyborze
                      idealnego pojazdu dla Twoich potrzeb.
                    </p>
                  </div>
                </div>
              </div>
              <div className="feature-item mb-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="feature-icon">
                    <FaCar />
                  </div>
                  <div>
                    <h4 className="h5 mb-2">Szeroki wybór</h4>
                    <p className="text-muted mb-0">
                      Nasza kolekcja obejmuje pojazdy luksusowe, sportowe i
                      miejskie od najlepszych producentów.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
