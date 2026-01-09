// import { Link } from "react-router";
// import {
//   FaEnvelope,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaInstagram,
// } from "react-icons/fa";
// import { FaPhone, FaXTwitter } from "react-icons/fa6";

// const TopBar = () => {
//   return (
//     <section
//       className="bg-teal-700 text-white text-sm"
//       role="banner"
//       aria-label="Top contact bar"
//     >
//       <div className="container flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">

//         {/* Contact Info */}
//         <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 text-center sm:text-left">
//           <a
//             href="mailto:info@trovica.com"
//             className="flex items-center gap-2 justify-center sm:justify-start transformation
//                        focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
//             aria-label="Send email to info@trovica.com"
//           >
//             <FaEnvelope aria-hidden="true" />
//             <span>info@trovica.com</span>
//           </a>

//           <a
//             href="tel:+2300345567341"
//             className="flex items-center gap-2 justify-center sm:justify-start transformation
//                        focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
//             aria-label="Call +23 0034 5567 341"
//           >
//             <FaPhone aria-hidden="true" />
//             <span>+23 0034 5567 341</span>
//           </a>
//         </div>

//         {/* Social Links */}
//         <nav
//           className="flex justify-center gap-5"
//           aria-label="Social media links"
//         >
//           {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram].map(
//             (Icon, i) => (
//               <Link
//                 key={i}
//                 to="/"
//                 className="transformation focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
//                 aria-label="Social media link"
//               >
//                 <Icon aria-hidden="true" />
//               </Link>
//             )
//           )}
//         </nav>
//       </div>
//     </section>
//   );
// };

// export default TopBar;

import { Link } from "react-router";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaPhone, FaXTwitter } from "react-icons/fa6";

const TopBar = () => {
  return (
    <section className="z-50 bg-teal-600">
      <div
        className="container mx-auto px-4 md:px-6 lg:px-16 py-3 flex flex-col gap-3
        sm:flex-row sm:justify-between sm:items-center text-white text-sm font-medium"
      >
        {/* Contact info */}
        <div
          className="
          flex flex-col gap-2 text-center
          sm:flex-row sm:gap-8 sm:text-left
        "
        >
          <Link
            to="mailto:info@trovica.com"
            className="flex items-center justify-center sm:justify-start gap-1 transformation"
          >
            <FaEnvelope />
            info@trovica.com
          </Link>

          <Link
            to="tel:+2300345567341"
            className="flex items-center justify-center sm:justify-start gap-2 transformation"
          >
            <FaPhone />
            +23 0034 5567 341
          </Link>
        </div>

        {/* Social icons */}
        <div
          className="
          flex justify-center gap-5
          sm:gap-6
        "
        >
          <Link className="transformation" to="/">
            <FaFacebookF />
          </Link>
          <Link className="transformation" to="/">
            <FaXTwitter />
          </Link>
          <Link className="transformation" to="/">
            <FaLinkedinIn />
          </Link>
          <Link className="transformation" to="/">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
