import { Link } from "react-router";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaPhone, FaXTwitter } from "react-icons/fa6";

const TopBar = () => {
  return (
    <section className="z-50 bg-teal-500">
      <div
        className="container py-2 flex flex-col gap-3
        sm:flex-row sm:justify-between sm:items-center text-white text-sm font-medium"
      >
        {/* Contact info */}
        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-8 text-center sm:text-left"
        >
          <Link to="mailto:info@trovica.com"
            className="flex items-center justify-center sm:justify-start gap-1 transformation">
            <FaEnvelope />
            info@trovica.com
          </Link>

          <Link
            to="tel:+2300345567341"
            className="flex items-center justify-center sm:justify-start gap-2 transformation"
          >
            <FaPhone />
            +23 0034 5567 341
          </Link>
        </div>

        {/* Social icons */}
        <div
          className="
          flex justify-center gap-5"
        >
          {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram].map(
            (Icon, i) => (
              <Link
                key={i}
                to="/" className="transformation" aria-label="Social media link">
            <Icon aria-hidden="true" />
          </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TopBar;
