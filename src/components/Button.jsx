import { Link } from "react-router";

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

  const finalClass = `${baseClass} transformation ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={finalClass} {...props}>
        {text}
      </Link>
    );
  }

  return (
    <button className={finalClass} {...props}>
      {text}
    </button>
  );
};

export default Button;