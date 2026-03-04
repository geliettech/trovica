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

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <footer className="bg-gray-900 text-gray-200 pt-16">
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Logo & About */}
        <div className="md:col-span-3 text-center md:text-left">
          <h4 className="text-2xl font-bold mb-2 text-white uppercase">
            {COMPANY_INFO.shortName}
          </h4>
          <p className="text-gray-400">{COMPANY_INFO.description}</p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((link, idx) =>
              link.dropdown ? (
                <li key={idx} className="relative">
                  {/* Dropdown Button */}
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === idx ? null : idx)
                    }
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transformation"
                  >
                    {link.label}
                    <FaChevronDown className="text-xs" />
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdown === idx && (
                    <ul className="absolute left-0 lg:mt-2 mt-0 lg:top-full bg-gray-400 text-gray-900 shadow rounded-md w-48 text-sm z-50">
                      {link.dropdown.map((drop, i) => (
                        <li key={i}>
                          <NavLink
                            to={drop.path}
                            onClick={() => {
                              setMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                            className={({ isActive }) =>
                              `block px-4 py-2 hover:bg-gray-100 ${
                                isActive ? "text-teal-600 font-semibold" : ""
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
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2 lg:px-0 lg:py-0 ${
                        isActive
                          ? "text-teal-600 font-semibold"
                          : "text-gray-400 hover:text-gray-300 transformation"
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
          <h4 className="text-xl font-semibold mb-4">Latest Posts</h4>
          <ul className="space-y-2">
            {LATEST_POSTS.map((post, idx) => (
              <li key={idx}>
                <a
                  href={post.path}
                  className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition"
                >
                  <i className="fa-solid fa-angles-right"></i>
                  {post.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-3">
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-teal-500"></i>
              {COMPANY_INFO.address}
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-phone text-teal-500"></i>
              {COMPANY_INFO.phone}
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-mobile-button text-teal-500"></i>
              {COMPANY_INFO.mobile}
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-envelope text-teal-500"></i>
              {COMPANY_INFO.email}
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-earth-europe text-teal-500"></i>
              {COMPANY_INFO.website}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-6 mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm">
          &copy; 2025 - {new Date().getFullYear()} {COMPANY_INFO.name}. All
          rights reserved.
        </p>

        <div className="flex gap-4 mt-4 md:mt-0">
          {SOCIAL_LINKS.map((social, idx) => {
            const Icon = social.icon;
            return (
              <Link
                key={idx}
                to={social.url}
                className="hover:text-teal-500 transformation"
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
