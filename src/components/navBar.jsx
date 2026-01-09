import { useState } from "react";
import { NavLink } from "react-router";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const NavBar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const getNavLinkClasses = ({ isActive, name }) => {
    // Contact button styles
    if (name === "Contact") {
      return `py-2 px-4 text-base
      ${
        isActive
          ? "font-medium bg-teal-600/80 text-white rounded-lg transformation"
          : "btn-primary transformation"
      }`;
    }

    // Default nav styles
    return `text-base
    ${
      isActive
        ? "font-medium text-teal-700 border-b-2 border-teal-700 rounded-lg transform transition-transform duration-300 scale-105 cursor-pointer px-1"
        : "nav__link transformation"
    }`;
  };

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              getNavLinkClasses({ isActive, name: item.name })
            }
            end={item.href === "/"}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-700 text-2xl focus:outline-none transformation"
        aria-label="Toggle Menu"
      >
        {isOpen ? <MdClose /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full right-0 w-1/2 bg-white shadow-md ${
          isOpen ? "block" : "hidden"
        }`} aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className="flex flex-col items-center gap-6 py-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                getNavLinkClasses({ isActive, name: item.name })
              }
              end={item.href === "/"}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;