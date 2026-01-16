// import Logo from './logo'
// import NavBar from './navBar'

// const Header = () => {
//     return (
//         <header className="bg-white shadow-md sticky top-0 z-50" role="banner">
//             <div className="container flex justify-between items-center relative">
//                 <Logo />
//                 <NavBar />
//             </div>
//         </header>
//     )
// }

// export default Header;
import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold uppercase">
            halim
          </a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Menu */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } lg:block absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center gap-6 p-6 lg:p-0 text-sm font-medium">
              <li>
                <a href="/" className="hover:text-teal-600">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-teal-600">
                  About
                </a>
              </li>

              <li>
                <a href="/services" className="hover:text-teal-600">
                  Services
                </a>
              </li>

              <li>
                <a href="/portfolio" className="hover:text-teal-600">
                  Portfolio
                </a>
              </li>

              {/* Dropdown */}
              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 hover:text-teal-600"
                >
                  Gallery <FaChevronDown className="text-xs" />
                </button>

                {dropdownOpen && (
                  <ul className="absolute lg:left-0 top-4 mt-3 bg-white shadow rounded-md w-40 text-sm z-1000">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Gallery 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Gallery 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Gallery 3
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Gallery 4
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <a href="/blog" className="hover:text-teal-600">
                  Blog
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-teal-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
