import CategoryPanel from "./CategoryPanel";
import { cars } from "../data/cars";

const categories = [
  {
    title: "Luksus",
    description:
      "Ręcznie wykonany komfort, materiały premium i spokojne wyrafinowanie. Odkryj nasze flagowe luksusowe pojazdy zaprojektowane dla bezwysiłkowych podróży.",
    cars: cars.slice(0, 2),
    stats: { luksus: 95, moc: 75, ekonomia: 45 },
  },
  {
    title: "Sport",
    description:
      "Precyzyjne inżynieria i dynamiczne osiągi. Odkryj samochody stworzone do prędkości, zwinności i angażujących wrażeń z jazdy.",
    cars: cars.slice(2, 4),
    stats: { luksus: 70, moc: 95, ekonomia: 30 },
  },
  {
    title: "Miasto",
    description:
      "Kompaktowa praktyczność i wyjątkowa wydajność. Idealni towarzysze życia miejskiego z inteligentną przestrzenią i łatwą manewrowością.",
    cars: cars.slice(4, 6),
    stats: { luksus: 50, moc: 45, ekonomia: 90 },
  },
];

const FeaturedCategories = () => {
  return (
    <div className="categories" id="featured">
      {categories.map((item, idx) => (
        <CategoryPanel
          key={item.title}
          title={item.title}
          description={item.description}
          cars={item.cars}
          stats={item.stats}
          reverse={idx % 2 === 1}
        />
      ))}
    </div>
  );
};

export default FeaturedCategories;
