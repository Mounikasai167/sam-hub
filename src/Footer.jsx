import { Clock3, MapPin, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>SAM'S Hub</h2>
        <p>Reliable logistics for road freight, warehousing, and delivery.</p>
      </div>

      <div className="footer-info">
        <span>
          <MapPin size={18} /> Chennai, India
        </span>
        <span>
          <Phone size={18} /> +91 90000 12345
        </span>
        <span>
          <Clock3 size={18} /> Mon-Sat, 8 AM-8 PM
        </span>
      </div>
    </footer>
  );
}

export default Footer;