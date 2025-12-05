import { motion } from "framer-motion";
import { useEffect } from "react";
import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";
import About from "../components/About";
import Contact from "../components/Contact";

function HomePage() {
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    // Re-enable scrolling after animation completes (2.8s)
    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <section id="hero">
        <Hero></Hero>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <FeaturedCategories />
        <About />
        <Contact />
      </motion.div>
    </>
  );
}

export default HomePage;
