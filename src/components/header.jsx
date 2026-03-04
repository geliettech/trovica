import Logo from "./Logo";
import NavBar from "./NavBar";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "../animations/motion";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50" role="banner">
      <motion.div
        className="container mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.nav
          className="flex items-center justify-between relative"
          variants={zoomIn}
          initial="initial"
          animate="animate"
        >
          {/* Logo */}
          <Logo />
          {/* Navigation bar */}
          <NavBar />
        </motion.nav>
      </motion.div>
    </header>
  );
};

export default Header;
