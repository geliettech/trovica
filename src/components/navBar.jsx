// import { useState } from "react";
// import { NavLink } from "react-router";
// import { FaBars } from "react-icons/fa";
// import { MdClose } from "react-icons/md";

// const NavBar = () => {
//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "Portfolio", href: "/portfolio" },
//     { name: "Gallery", href: "/gallery" },
//     { name: "Blog", href: "/blog" },
//     { name: "Contact", href: "/contact" },
//   ];

//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav aria-label="Primary navigation">
//       {/* Desktop Menu */}
//       <div className="hidden md:flex items-center gap-8">
//         {navItems.map((item) => (
//           <NavLink
//             key={item.name}
//             to={item.href}
//             end={item.href === "/"}
//             className={({ isActive }) =>
//               isActive
//                 ? "text-teal-700 font-medium border-b-2 border-teal-700"
//                 : "nav__link transformation"
//             }
//           >
//             {item.name}
//           </NavLink>
//         ))}
//       </div>

//       {/* Mobile Toggle */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="md:hidden text-2xl transformation
//                    focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded"
//         aria-label="Toggle menu"
//         aria-expanded={isOpen}
//       >
//         {isOpen ? <MdClose /> : <FaBars />}
//       </button>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
//           <ul className="flex flex-col items-center gap-6 py-6">
//             {navItems.map((item) => (
//               <li key={item.name}>
//                 <NavLink
//                   to={item.href}
//                   end={item.href === "/"}
//                   onClick={() => setIsOpen(false)}
//                   className="nav__link transformation"
//                 >
//                   {item.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;
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
        ? "font-medium text-teal-600 border-b-2 border-teal-600 rounded-lg transformation"
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
        className="md:hidden text-gray-700 text-2xl focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isOpen ? <MdClose /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transformation ${
          isOpen ? "block" : "hidden"
        }`}
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