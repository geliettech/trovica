import {
  COMPANY_INFO,
  NAV_LINKS,
  LATEST_POSTS,
  SOCIAL_LINKS,
} from "../utils/constants";
import { Link } from "react-router";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router";
import { FaAnglesRight, FaLocationDot, FaPhone, FaMobileButton, FaEnvelope, FaEarthEurope } from "react-icons/fa6";



const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <footer className="bg-gray-900 text-gray-200 pt-8 md:pt-12 lg:pt-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-6">
        {/* Logo & About */}
        <div className="sm:col-span-2 md:col-span-3 text-center">
          <h4 className="text-xl sm:text-2xl font-bold mb-2 text-white uppercase">
            {COMPANY_INFO.shortName}
          </h4>
          <p className="text-sm sm:text-base text-gray-400">{COMPANY_INFO.description}</p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2">
          <h4 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((link, idx) =>
              link.dropdown ? (
                <li key={idx} className="relative">
                  {/* Dropdown Button */}
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === idx ? null : idx)
                    }
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition w-full sm:w-auto"
                  >
                    {link.label}
                    <FaChevronDown className={`text-xs transition-transform ${openDropdown === idx ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdown === idx && (
                    <ul className="relative sm:absolute left-0 mt-2 sm:top-full bg-gray-800 sm:bg-gray-400 text-gray-100 sm:text-gray-900 shadow rounded-md w-full sm:w-48 text-sm z-50">
                      {link.dropdown.map((drop, i) => (
                        <li key={i}>
                          <NavLink
                            to={drop.path}
                            onClick={() => {
                              setOpenDropdown(null);
                            }}
                            className={({ isActive }) =>
                              `block px-4 py-2 transition hover:bg-gray-700 sm:hover:bg-gray-100 ${isActive ? "text-teal-400 sm:text-teal-600 font-semibold" : ""
                              }`
                            }
                          >
                            {drop.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={idx}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-0 py-1 text-sm sm:text-base transition ${isActive
                        ? "text-teal-400 font-semibold"
                        : "text-gray-400 hover:text-gray-300"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Latest Posts */}
        <div className="md:col-span-4">
          <h4 className="text-lg sm:text-xl font-semibold mb-4">Latest Posts</h4>
          <ul className="space-y-2">
            {LATEST_POSTS.map((post, idx) => (
              <li key={idx}>
                <a
                  href={post.path}
                  className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition text-sm sm:text-base"
                >
                  <FaAnglesRight />
                  <span className="truncate">{post.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-3">
          <h4 className="text-lg sm:text-xl font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
            <li className="flex items-start sm:items-center gap-2">
              <FaLocationDot className="text-teal-500 mt-1 sm:mt-0" />
              <span>{COMPANY_INFO.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-teal-500" />
              <Link to={`tel:${COMPANY_INFO.phone}`} className="hover:text-teal-400 transition">{COMPANY_INFO.phone}</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaMobileButton className="text-teal-500" />
              <Link to={`tel:${COMPANY_INFO.mobile}`} className="hover:text-teal-400 transition">{COMPANY_INFO.mobile}</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-teal-500" />
              <Link to={`mailto:${COMPANY_INFO.email}`} className="hover:text-teal-400 transition break-all">
                {COMPANY_INFO.email}
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaEarthEurope className="text-teal-500" />
              <Link to={COMPANY_INFO.website} className="hover:text-teal-400 transition">{COMPANY_INFO.website}</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-0 mt-8 md:mt-12 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
          &copy; 2025 - {new Date().getFullYear()} {COMPANY_INFO.name}. All
          rights reserved.
        </p>

        <div className="flex items-center gap-4 pb-6">
          {SOCIAL_LINKS.map((social, idx) => {
            const Icon = social.icon;
            return (
              <Link
                key={idx}
                to={social.url}
                className="text-gray-400 hover:text-teal-500 transition text-lg"
                aria-label={`Link to ${social.label}`}
              >
                <Icon />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
