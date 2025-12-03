import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { cars } from "../data/cars";

const featuredCars = [cars[0], cars[2], cars[4]];

const Hero = () => {
  return (
    <Carousel controls={false} indicators={true} interval={5000}>
      {featuredCars.map((car) => (
        <Carousel.Item key={car.id}>
          <img
            className="d-block w-100"
            src={car.image}
            alt={car.name}
            style={{ height: "100vh", objectFit: "cover" }}
          />
          <Carousel.Caption style={{ bottom: "20%" }}>
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                mixBlendMode: "difference",
                color: "white",
              }}
            >
              {car.name}
            </h1>
            <p style={{ fontSize: "1.25rem", marginTop: "12px" }}>
              {car.subtitle}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Hero;
