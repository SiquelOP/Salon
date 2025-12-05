import { cars } from "../data/cars";
import type { Props } from "../types/carProps";

export const categories: {luxury: Props, sport: Props, city: Props} = {
  luxury: {
    id: 1,
    title: "Luksus",
    adj: "luksusowe",
    description:
      "Ręcznie wykonany komfort, materiały premium i spokojne wyrafinowanie. Odkryj nasze flagowe luksusowe pojazdy.",
    featuredCars: cars.filter((car) => car.category === 1).slice(0, 2),
    stats: { luksus: 95, moc: 75, ekonomia: 45 },
    categoryImage:
      "https://images.unsplash.com/photo-1760552973934-8f749999a906?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    path: "/models/luxury",
  },
  sport: {
    id: 2,
    title: "Sport",
    adj: "sportowe",
    description:
      "Precyzyjne inżynieria i dynamiczne osiągi. Odkryj samochody stworzone do prędkości, zwinności i angażujących wrażeń z jazdy.",
    featuredCars: cars.filter((car) => car.category === 2).slice(0, 2),
    stats: { luksus: 70, moc: 95, ekonomia: 30 },
    categoryImage:
      "https://images.unsplash.com/photo-1611760357505-922600d8ffa6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    path: "/models/sport",
  },
  city: {
    id: 3,
    title: "Miasto",
    adj: "miejskie",
    description:
      "Kompaktowa praktyczność i wyjątkowa wydajność. Idealni towarzysze życia miejskiego z inteligentną przestrzenią i łatwą manewrowością.",
    featuredCars: cars.filter((car) => car.category === 3).slice(0, 2),
    stats: { luksus: 50, moc: 45, ekonomia: 90 },
    categoryImage:
      "https://images.unsplash.com/photo-1579000458819-8858aaadf830?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    path: "/models/city",
  },
};