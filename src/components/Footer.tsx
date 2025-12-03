function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer mt-auto py-4 bg-black-opaque border-top border-secondary">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div className="text-muted small">
          © {year} Majster Luxury Motors. Wszystkie prawa zastrzeżone.
        </div>
        <div className="text-gold small">Stworzone z myślą o doskonałości.</div>
      </div>
    </footer>
  );
}

export default Footer;
