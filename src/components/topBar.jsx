import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router";

const TopBar = () => {
  return (
    <section className="bg-teal-500 text-gray-100 text-sm">
      <div className="container py-3">
        <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-3">
          {/* Left: Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="mailto:info@trovicagency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transformation"
            >
              <FaEnvelope />
             info@trovicagency.com
            </Link>

            <Link
              to="tel:+2300345567341"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transformation"
            >
              <FaPhoneAlt />
              +23 0034 5567 341
            </Link>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-4">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
              (Icon, i) => (
                <Link
                  key={i}
                  to="/"
                  className="transformation"
                  aria-label="Social media link"
                >
                  <Icon aria-hidden="true" />
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
