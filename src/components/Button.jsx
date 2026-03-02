import { Link } from "react-router";
import { motion } from "framer-motion";
import { buttonHover } from "../animations/motion";

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

  const Component = to ? motion(Link) : motion.button;

  return (
    <Component to={to} className={finalClass} {...buttonHover} {...props}>
      {text}
    </Component>
  );
};

export default Button;
