import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = [
    { id: "hero", label: "Home", path: "/" },
    { id: "featured", label: "Featured", path: "/#featured" },
    { id: "models", label: "Models", path: "/models" },
    { id: "about", label: "About", path: "/#about" },
    { id: "contact", label: "Contact", path: "/#contact" },
  ];

  const handleClick = (e: React.MouseEvent, item: (typeof navItems)[0]) => {
    if (item.path === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (item.path.startsWith("/#")) {
      e.preventDefault();
      const id = item.path.substring(2);

      // If not on home page, navigate to home first
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for hero animation to complete (2.8s) + small buffer, then scroll
        setTimeout(() => {
          scrollToId(id);
        }, 2900);
      } else {
        scrollToId(id);
      }
    }
  };

  return (
    <motion.header
      className="header fixed-top bg-black-opaque backdrop-blur"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.0 }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 2.2,
            type: "spring",
            stiffness: 100,
          }}
        >
          <Link to="/" className="navbar-brand fw-bold text-gold">
            Majster Luxury Motors
          </Link>
        </motion.div>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div id="mainNav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                className="nav-item"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 2.4 + index * 0.1,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                {item.path === "/" ? (
                  <Link
                    to={item.path}
                    className="nav-link"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    {item.label}
                  </Link>
                ) : item.path.startsWith("/") && !item.path.includes("#") ? (
                  <Link to={item.path} className="nav-link">
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.path}
                    className="nav-link"
                    onClick={(e) => handleClick(e, item)}
                  >
                    {item.label}
                  </a>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
