import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";

function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero></Hero>
      </section>
      <FeaturedCategories />
    </>
  );
}

export default HomePage;
