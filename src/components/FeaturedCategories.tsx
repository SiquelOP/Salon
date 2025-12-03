import CategoryPanel from "./CategoryPanel";
import { cars } from "../data/cars";

const categories = [
  {
    title: "Luksus",
    description:
      "Ręcznie wykonany komfort, materiały premium i spokojne wyrafinowanie. Odkryj nasze flagowe luksusowe pojazdy zaprojektowane dla bezwysiłkowych podróży.",
    cars: cars.slice(0, 2),
  },
  {
    title: "Sport",
    description:
      "Precyzyjne inżynieria i dynamiczne osiągi. Odkryj samochody stworzone do prędkości, zwinności i angażujących wrażeń z jazdy.",
    cars: cars.slice(2, 4),
  },
  {
    title: "Miasto",
    description:
      "Kompaktowa praktyczność i wyjątkowa wydajność. Idealni towarzysze życia miejskiego z inteligentną przestrzenią i łatwą manewrowością.",
    cars: cars.slice(4, 6),
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
          reverse={idx % 2 === 1}
        />
      ))}
    </div>
  );
};

export default FeaturedCategories;
