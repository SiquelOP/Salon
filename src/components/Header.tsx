import { Link } from "react-router-dom";

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Header = () => {
  return (
    <header className="header fixed-top bg-black-opaque backdrop-blur">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <Link to="/" className="navbar-brand fw-bold text-gold">
          Majster Luxury Motors
        </Link>
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
            <li className="nav-item">
              <a
                href="#hero"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("hero");
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#featured"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("featured");
                }}
              >
                Featured
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("about");
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
