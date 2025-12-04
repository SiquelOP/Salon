import CategoryPanel from "./CategoryPanel";
import { categories } from "../data/categories";

const FeaturedCategories = () => {
  const list = Object.values(categories);
  return (
    <div className="categories" id="featured">
      {list.map((item, idx) => (
        <CategoryPanel
          key={item.title}
          id={item.id}
          title={item.title}
          description={item.description}
          featuredCars={item.featuredCars}
          stats={item.stats}
          categoryImage={item.categoryImage}
          path={item.path}
          adj={item.adj}
          reverse={idx % 2 === 1}
        />
      ))}
    </div>
  );
};

export default FeaturedCategories;
