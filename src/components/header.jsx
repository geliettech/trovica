import Logo from "./logo";
import NavBar from "./navBar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-gray-50 shadow-md sticky top-0 z-50" role="banner">
      <div className="container">
        <motion.nav
          className="flex items-center justify-between relative"
        >
          {/* Logo */}
          <Logo />
          {/* Navigation bar */}
          <NavBar />
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
