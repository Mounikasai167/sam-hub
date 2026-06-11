import { useState } from "react";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import "./App.css";

const services = [
  {
    title: "Warehouse Storage",
    description:
      "Climate-controlled facilities for safe, organized inventory management.",
    icon: () => <span>📦</span>,
  },
  {
    title: "City Logistics",
    description: "Fast and reliable pickup and delivery within city limits.",
    icon: () => <span>🚚</span>,
  },
  {
    title: "Interstate Shipping",
    description: "Cross-country freight movement with real-time tracking.",
    icon: () => <span>🛣️</span>,
  },
  {
    title: "Distribution",
    description: "Efficient distribution networks for bulk order fulfillment.",
    icon: () => <span>🎁</span>,
  },
];

const careerOpenings = [
  "Logistics Coordinator",
  "Warehouse Manager",
  "Driver (LCV/HCV)",
  "Operations Analyst",
  "Customer Support Executive",
];

function HomePage() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">Global Logistics Solutions</p>
        <h1>Delivering Excellence Worldwide</h1>
        <p>
          Your trusted partner in global logistics — connecting businesses
          across continents with speed, reliability, and care.
        </p>
        <div className="hero-actions">
          <Link className="primary-button" to="/services">
            Our Services <ArrowRight size={18} />
          </Link>
          <Link className="secondary-button" to="/contact">
            Get a Quote
          </Link>
        </div>
      </div>

      <div className="hero-panel" aria-label="Delivery statistics">
        <div>
          <strong>24/7</strong>
          <span>Dispatch Support</span>
        </div>
        <div>
          <strong>98%</strong>
          <span>On-time Delivery</span>
        </div>
        <div>
          <strong>120+</strong>
          <span>Business Routes</span>
        </div>
      </div>
    </section>
  );
}


function AboutPage() {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading">
        <p className="eyebrow">About Us</p>
        <h2>Trusted since 2010 for global logistics.</h2>
      </div>
      <p className="about-text">
        SAM'S Hub is a logistics partner for companies that need practical
        transport, organized warehousing, and responsive communication. Our
        team keeps every shipment visible from pickup to delivery.
      </p>
    </section>
  );
}

function ServicesPage() {
  return (
    <section className="section services-section" id="services">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h2>What we offer</h2>
      </div>
      <div className="card-grid">
        {services.map((service) => (
          <Card
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

function CareerPage() {
  return (
    <section className="section career-section" id="career">
      <div className="section-heading">
        <p className="eyebrow">Career</p>
        <h2>Join a team that keeps business moving.</h2>
      </div>
      <div className="career-list">
        {careerOpenings.map((role) => (
          <div className="career-item" key={role}>
            <BriefcaseBusiness size={22} />
            <span>{role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactPage({ formData, handleChange, handleSubmit, submittedMessage }) {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Tell us what you need to move.</h2>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Phone
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
            />
          </label>
          <label>
            Interest
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
            >
              <option>Shipping enquiry</option>
              <option>Warehouse support</option>
              <option>Career application</option>
              <option>Business partnership</option>
            </select>
          </label>
        </div>
        <label>
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Share pickup city, delivery city, package details, or career note."
            rows="5"
            required
          />
        </label>
        <button className="primary-button form-button" type="submit">
          Submit Request <ArrowRight size={18} />
        </button>
        {submittedMessage && (
          <p className="success-message">{submittedMessage}</p>
        )}
      </form>
    </section>
  );
}

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Shipping enquiry",
    message: "",
  });

  const [submittedMessage, setSubmittedMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedMessage(
      `Thank you, ${formData.name || "friend"}! SAM'S Hub received your ${formData.interest.toLowerCase()}.`
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "Shipping enquiry",
      message: "",
    });
  }

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route
            path="/contact"
            element={
              <ContactPage
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                submittedMessage={submittedMessage}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
