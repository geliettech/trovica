import { Link } from "react-router";
import { motion } from "framer-motion";
import { zoomIn } from "../animations/motion";

const Logo = () => {
  return (
    <motion.div
      className="flex items-center justify-between relative"
      variants={zoomIn}
      initial="hidden"
      animate="visible"
    >
      <Link className="text-gray-700 text-2xl font-bold uppercase" to="/">
        Trovica
      </Link>
    </motion.div>
  );
};

export default Logo;
