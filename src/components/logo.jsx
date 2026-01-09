// import { Link } from "react-router";

// const Logo = () => {
//   return (
//     <Link
//       to="/"
//       aria-label="Trovica home"
//       className="text-2xl md:text-3xl font-semibold uppercase transformation
//                  focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded"
//     >
//       Trovica
//     </Link>
//   );
// };

// export default Logo;
import { Link } from "react-router";

const Logo = () => {
  return (
     <Link className="nav__link text-2xl md:text-3xl font-semibold uppercase" to="/">Trovica</Link>
  );
};

export default Logo;