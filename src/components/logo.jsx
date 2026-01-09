import { Link } from "react-router";

const Logo = () => {
  return (
     <Link className="nav__link text-2xl md:text-3xl font-semibold uppercase" to="/">Trovica</Link>
  );
};

export default Logo;