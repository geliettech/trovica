import { Link } from "react-router";
import { motion } from "framer-motion";
import { bounceIn } from "../animations/motion";
/* eslint-disable react/prop-types */

const Button = ({
  text,
  to,
  variant = "primary",
  className = "",
  ...props
}) => {
  // eslint-disable-next-line react/prop-types
  const baseClass =
    variant === "primary"
      ? "btn-primary rounded-md transformation text-xs md:text-sm"
      : "border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white text-xs md:text-sm";

  const finalClass = `${baseClass} transition-all ${className}`.trim();

  return (
    <motion.div
      variants={bounceIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {to ? (
        <Link
          to={to}
          className={finalClass}
          {...props}
        >
          {text}
        </Link>
      ) : (
        <button
          className={finalClass}
          {...props}
        >
          {text}
        </button>
      )}
    </motion.div>
  );
};

export default Button;
