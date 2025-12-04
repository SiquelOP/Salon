import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { cars } from "../data/cars";

const featuredCars = [cars[0], cars[5], cars[8]];

const Hero = () => {
  return (
    <Carousel controls={false} indicators={true} interval={5000}>
      {featuredCars.map((car, index) => (
        <Carousel.Item key={car.id}>
          <motion.img
            className="d-block w-100 hero-image"
            src={car.image}
            alt={car.name}
            style={{ height: "100vh", objectFit: "cover" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: index === 0 ? 0.2 : 0 }}
          />
          <Carousel.Caption style={{ bottom: "20%" }}>
            <motion.h1
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                mixBlendMode: "difference",
                color: "white",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index === 0 ? 1.5 : 0.3 }}
            >
              {car.name}
            </motion.h1>
            <motion.p
              style={{ fontSize: "1.25rem", marginTop: "12px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index === 0 ? 1.8 : 0.5 }}
            >
              {car.subtitle}
            </motion.p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Hero;
