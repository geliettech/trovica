import { useState } from "react";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router";
import { NAV_LINKS } from "../utils/constants";
import { motion } from "framer-motion";
import { navItem, dropdown, mobileMenu } from "../animations/motion";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden text-xl text-gray-700 transformation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <MdClose /> : <FaBars />}
      </button>

      {/* Navigation Menu */}
      <motion.ul
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row lg:items-center gap-6 absolute lg:static top-full right-0 w-1/2 lg:w-auto bg-white lg:bg-transparent shadow lg:shadow-none z-50`}
        variants={mobileMenu}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {NAV_LINKS.map((link, idx) =>
          link.dropdown ? (
            <li key={idx} className="relative">
              {/* Dropdown Button */}
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === idx ? null : idx)
                }
                className="flex items-center gap-1 w-full lg:w-auto px-4 py-2 lg:px-0 lg:py-0 nav__link transformation"
              >
                {link.label}
                <FaChevronDown className="text-xs" />
              </button>

              {/* Dropdown Menu */}
              {openDropdown === idx && (
                <motion.ul
                  className="absolute left-0 lg:mt-2 mt-0 lg:top-full bg-white shadow rounded-md w-48 text-sm z-50"
                  variants={dropdown}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
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
                </motion.ul>
              )}
            </li>
          ) : (
            <motion.li
              key={idx}
              variants={navItem}
              initial="hidden"
              animate="visible"
            >
              <NavLink
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 lg:px-0 lg:py-0 ${
                    isActive
                      ? "text-teal-600 font-semibold"
                      : "nav__link transformation"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </motion.li>
          ),
        )}
      </motion.ul>
    </div>
  );
};

export default NavBar;
