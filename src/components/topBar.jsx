import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { slideUp } from "../animations/motion";
import {
  COMPANY_INFO, SOCIAL_LINKS,
} from "../utils/constants";

const TopBar = () => {
  return (
    <section className="bg-teal-500">
      <motion.div
        className="container py-3"
      >
        <motion.div
          className="flex flex-col md:flex-row items-center md:justify-between gap-3 text-gray-100 text-sm"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Left: discounts */}
          <span>🚀 Special Offer: Get 20% Off Your First Project</span>
          {/* Center: Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="mailto:info@trovicagency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transformation"
            >
              <FaEnvelope />
              {COMPANY_INFO.email}
            </Link>

            <Link
              to="tel:+2300345567341"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transformation"
            >
              <FaPhoneAlt />
              {COMPANY_INFO.phone}
            </Link>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={index}
                  to={item.url}
                  className="transformation"
                  aria-label="Social media link"
                >
                  <Icon aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TopBar;
