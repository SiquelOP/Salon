import type { Car } from "../types/car";
export const cars: Car[] = [
  // Luksusowe
  {
    id: "rr-phantom",
    name: "Rolls-Royce Phantom",
    subtitle: "Szczyt luksusu",
    description:
      "Phandom redefiniuje luksus w motoryzacji, oferując niezrównaną wygodę i elegancję.",
    image: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=1600&auto=format&fit=crop",
    price: 450000,
    engine: "6.75L Twin-Turbo V12",
    power: 563,
    torque: 900,
    acceleration: 5.3,
    topSpeed: 250,
    transmission: "8-speed automatic",
    drivetrain: "RWD"
  },
  {
    id: "bentley-continental",
    name: "Bentley Continental GT",
    subtitle: "Perfekcja grand touring",
    description:
      "Arcydzieło brytyjskiej inżynierii łączące oszałamiające osiągi z najwyższym komfortem.",
    image: "https://images.unsplash.com/photo-1471289549423-04adaecfa1f1?q=80&w=1705&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 230000,
    engine: "6.0L Twin-Turbo W12",
    power: 626,
    torque: 900,
    acceleration: 3.7,
    topSpeed: 333,
    transmission: "8-speed dual-clutch",
    drivetrain: "AWD"
  },
  // Sportowe
  {
    id: "porsche-911-turbo",
    name: "Porsche 911 Turbo S",
    subtitle: "Ikona wydajności",
    description:
      "911 Turbo S oferuje ekscytujące osiągi z legendarną precyzją Porsche i codzienną użytecznością.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
    price: 210000,
    engine: "3.8L Twin-Turbo Flat-6",
    power: 640,
    torque: 800,
    acceleration: 2.6,
    topSpeed: 330,
    transmission: "8-speed PDK",
    drivetrain: "AWD"
  },
  {
    id: "ferrari-f8",
    name: "Ferrari F8 Tributo",
    subtitle: "Włoska pasja",
    description:
      "F8 Tributo ucieleśnia wyścigowe dziedzictwo Ferrari, oferując oszałamiające osiągi i zachwycający design.",
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1600&auto=format&fit=crop",
    price: 280000,
    engine: "3.9L Twin-Turbo V8",
    power: 710,
    torque: 770,
    acceleration: 2.9,
    topSpeed: 340,
    transmission: "7-speed dual-clutch",
    drivetrain: "RWD"
  },
  // Miejskie
  {
    id: "toyota-yaris",
    name: "Toyota Yaris",
    subtitle: "Zwinność miejska",
    description:
      "Yaris oferuje wyjątkową oszczędność paliwa i zwrotność, idealną do jazdy po mieście.",
    image: "https://scene7.toyota.eu/is/image/toyotaeurope/YAR0003_24_WEB:Large-Landscape?ts=1722500144555&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=png-alpha",
    price: 22000,
    engine: "1.5L Hybrid I4",
    power: 116,
    torque: 120,
    acceleration: 9.7,
    topSpeed: 175,
    transmission: "CVT",
    drivetrain: "FWD"
  },
  {
    id: "honda-fit",
    name: "Honda Fit",
    subtitle: "Wszechstronny i wydajny",
    description:
      "Fit łączy praktyczność z renomowaną niezawodnością Hondy, idealny do warunków miejskich.",
    image: "https://images.unsplash.com/photo-1609676671207-d021525a635d?q=80&w=1092&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 19000,
    engine: "1.5L I4",
    power: 130,
    torque: 155,
    acceleration: 8.6,
    topSpeed: 190,
    transmission: "CVT",
    drivetrain: "FWD"
  }
];