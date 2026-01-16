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
//     <section className="z-50 bg-teal-500">
//       <div
//         className="container py-2 flex flex-col gap-3
//         sm:flex-row sm:justify-between sm:items-center text-white text-sm font-medium"
//       >
//         {/* Contact info */}
//         <div
//           className="flex flex-col sm:flex-row gap-3 sm:gap-8 text-center sm:text-left"
//         >
//           <Link to="mailto:info@trovica.com"
//             className="flex items-center justify-center sm:justify-start gap-1 transformation">
//             <FaEnvelope />
//             info@trovica.com
//           </Link>

//           <Link
//             to="tel:+2300345567341"
//             className="flex items-center justify-center sm:justify-start gap-2 transformation"
//           >
//             <FaPhone />
//             +23 0034 5567 341
//           </Link>
//         </div>

//         {/* Social icons */}
//         <div
//           className="
//           flex justify-center gap-5"
//         >
//           {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram].map(
//             (Icon, i) => (
//               <Link
//                 key={i}
//                 to="/" className="transformation" aria-label="Social media link">
//             <Icon aria-hidden="true" />
//           </Link>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopBar;
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <section className="bg-gray-900 text-gray-100 text-sm">
      <div className="container py-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3 gap-3">
          {/* Left: Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:info@halim.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-teal-400 transition"
            >
              <FaEnvelope />
              info@trovica.com
            </a>

            <a
              href="tel:+123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-teal-400 transition"
            >
              <FaPhoneAlt />
              +23 0034 5567 341
            </a>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-4 md:justify-end">
            <a href="#" className="hover:text-teal-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-teal-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-teal-400 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-teal-400 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
