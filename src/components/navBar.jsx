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

  const getNavLinkClasses = ({ isActive }) =>
    `text-[16px] font-medium transition duration-200
     ${isActive
      ? "text-[#83cc61] border-b-2 border-[#83cc61] rounded-lg px-1"
      : "text-gray-700 hover:text-[#83cc61]"
    }`;

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={getNavLinkClasses}
            end={item.href === "/"}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-700 text-2xl focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isOpen ? <MdClose /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ${isOpen ? "block" : "hidden"
          }`}
      >
        <div className="flex flex-col items-center gap-6 py-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={getNavLinkClasses}
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
