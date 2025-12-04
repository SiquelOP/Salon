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
    drivetrain: "RWD",
    category: 1
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
    drivetrain: "AWD",
    category: 1
  },
  {
    id: "mercedes-s-class",
    name: "Mercedes-Benz S-Class",
    subtitle: "Technologiczne arcydzieło",
    description:
      "S-Klasa łączy najnowsze technologie z legendarnym komfortem i prestiżem marki Mercedes-Benz.",
    image: "https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 115000,
    engine: "3.0L Inline-6 Turbo + EQ Boost",
    power: 429,
    torque: 520,
    acceleration: 4.9,
    topSpeed: 250,
    transmission: "9-speed automatic",
    drivetrain: "AWD",
    category: 1
  },
  {
    id: "audi-a8",
    name: "Audi A8 L",
    subtitle: "Innowacja i elegancja",
    description:
      "A8 L oferuje przestronną kabinę z najnowocześniejszymi systemami i wyrafinowanym komfortem.",
    image: "https://emea-dam.audi.com/adobe/assets/urn:aaid:aem:c677386e-9edf-4f9a-bcc3-dbb47633cbe2/as/A8_2021_3275_V1_withoutCast-xl.jpg?width=1920",
    price: 87000,
    engine: "3.0L V6 TFSI",
    power: 335,
    torque: 500,
    acceleration: 5.6,
    topSpeed: 250,
    transmission: "8-speed automatic",
    drivetrain: "AWD",
    category: 1
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
    drivetrain: "AWD",
    category: 2
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
    drivetrain: "RWD",
    category: 2
  },
  {
    id: "lamborghini-huracan",
    name: "Lamborghini Huracán EVO",
    subtitle: "Emocje w czystej formie",
    description:
      "Huracán EVO dostarcza ekstremalne wrażenia z jazdy z charakterystycznym stylem i dźwiękiem Lamborghini.",
    image: "https://images.unsplash.com/photo-1707399720697-b1d1502fac58?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 260000,
    engine: "5.2L V10",
    power: 631,
    torque: 600,
    acceleration: 2.9,
    topSpeed: 325,
    transmission: "7-speed dual-clutch",
    drivetrain: "AWD",
    category: 2
  },
  {
    id: "mclaren-720s",
    name: "McLaren 720S",
    subtitle: "Brytyjska doskonałość",
    description:
      "720S łączy technologię Formuły 1 z oszałamiającymi osiągami i ultranowoczesnym designem.",
    image: "https://images.unsplash.com/photo-1728522298299-bf2476f378f1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 300000,
    engine: "4.0L Twin-Turbo V8",
    power: 710,
    torque: 770,
    acceleration: 2.8,
    topSpeed: 341,
    transmission: "7-speed dual-clutch",
    drivetrain: "RWD",
    category: 2
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
    drivetrain: "FWD",
    category: 3
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
    drivetrain: "FWD",
    category: 3
  },
  {
    id: "volkswagen-golf",
    name: "Volkswagen Golf GTI",
    subtitle: "Legenda hot hatchy",
    description:
      "Golf GTI łączy sportowe osiągi z praktycznością miejskiego samochodu i klasycznym designem.",
    image: "https://images.unsplash.com/photo-1655285816184-dbaaa6dfb5e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 35000,
    engine: "2.0L Turbo I4",
    power: 241,
    torque: 370,
    acceleration: 6.2,
    topSpeed: 250,
    transmission: "6-speed manual",
    drivetrain: "FWD",
    category: 3
  },
  {
    id: "mini-cooper",
    name: "MINI Cooper S",
    subtitle: "Styl i zwinność",
    description:
      "Cooper S oferuje iknoniczny design MINI z dynamicznymi osiągami i najnowszą technologią.",
    image: "https://images.unsplash.com/photo-1720343012322-40620ced673f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 32000,
    engine: "2.0L Turbo I4",
    power: 189,
    torque: 280,
    acceleration: 6.8,
    topSpeed: 235,
    transmission: "7-speed dual-clutch",
    drivetrain: "FWD",
    category: 3
  }
];