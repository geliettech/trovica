import { useState, useEffect } from "react";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Logo from "./logo";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  {
    name: "Gallery",
    dropdown: [
      { name: "Gallery 1", href: "#" },
      { name: "Gallery 2", href: "#" },
      { name: "Gallery 3", href: "#" },
      { name: "Gallery 4", href: "#" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    setActivePath(window.location.pathname); // Set current active path on load
  }, []);

  const isActive = (href) => href === activePath;

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="lg:hidden text-xl text-gray-700 transformation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <MdClose /> : <FaBars />}
      </button>

      {/* Menu */}
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row lg:items-center gap-6 absolute lg:static top-full right-0 w-1/2 lg:w-auto bg-white lg:bg-transparent shadow lg:shadow-none z-1000`}
      >
        {navItems.map((item, idx) =>
          item.dropdown ? (
            <li key={idx} className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1 w-full lg:w-auto px-4 py-2 lg:px-0 lg:py-0 ${
                  isActive(item.href)
                    ? "text-teal-600 font-semibold"
                    : "nav__link transformation"
                }`}
              >
                {item.name} <FaChevronDown className="text-xs" />
              </button>

              {dropdownOpen && (
                <ul className="absolute left-0 lg:mt-2 mt-0 lg:top-full bg-white shadow rounded-md w-40 text-sm z-1000">
                  {item.dropdown.map((drop, i) => (
                    <li key={i}>
                      <a
                        href={drop.href}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {drop.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li key={idx}>
              <a
                href={item.href}
                className={`block px-4 py-2 lg:px-0 lg:py-0  ${
                  isActive(item.href)
                    ? "text-teal-600 font-semibold"
                    : "nav__link transformation"
                }`}
              >
                {item.name}
              </a>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default NavBar;
