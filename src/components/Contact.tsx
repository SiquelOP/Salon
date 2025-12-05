import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Adres",
      content: "Zespół Szkół Elektrycznych i Ogólnokształcących w Krośnie",
      subtitle: "38-400 Krosno, Poland",
    },
    {
      icon: <FaPhone />,
      title: "Telefon",
      content: "+48 123 456 789",
      subtitle: "Pon-Pt: 9:00 - 18:00",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "kontakt@majstermotors.pl",
      subtitle: "Odpowiadamy w 24h",
    },
    {
      icon: <FaClock />,
      title: "Godziny otwarcia",
      content: "Pon-Pt: 9:00 - 18:00",
      subtitle: "Sob: 10:00 - 15:00",
    },
  ];

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3">Kontakt</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
            Skontaktuj się z nami, aby umówić się na jazdę próbną lub uzyskać
            więcej informacji o naszych pojazdach.
          </p>
        </motion.div>

        <div className="row g-4 mb-5">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="col-6 col-lg-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="contact-info-card text-center p-4 h-100">
                <div className="contact-icon mb-3">{info.icon}</div>
                <h5 className="mb-2">{info.title}</h5>
                <p className="text-gold mb-1 fw-semibold">{info.content}</p>
                <p className="text-muted small mb-0">{info.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="row g-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="col-lg-6">
            <div className="contact-form-wrapper p-4">
              <h3 className="h4 mb-4">Wyślij wiadomość</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="jan@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="+48 123 456 789"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Wiadomość
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={5}
                    placeholder="Jak możemy Ci pomóc?"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-gold w-100">
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1540.0153556329128!2d21.717246877796494!3d49.71893971547851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c4ec102854e01%3A0x5c5d27c9bc31e06!2zWmVzcMOzxYIgU3prw7PFgiBFbGVrdHJ5Y3pueWNoIGkgT2fDs2xub2tzenRhxYJjxIVjeWNoIHcgS3JvxZtuaWU!5e1!3m2!1spl!2spl!4v1764947496521!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "12px", minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
