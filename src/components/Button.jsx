import { Link } from "react-router";
import { motion } from "framer-motion";
import { bounceIn } from "../animations/motion";

const Button = ({
  text,
  to,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClass =
    variant === "primary"
      ? "btn-primary"
      : "border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white";

  const finalClass = `${baseClass} transition-all ${className}`.trim();

  const Component = to ? motion.create(Link) : motion.create("button");

  return (
    <Component
      to={to}
      className={finalClass}
      variants={bounceIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      {...props}
    >
      {text}
    </Component>
  );
};

export default Button;
