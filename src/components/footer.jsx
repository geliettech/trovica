// import React from "react";

// // Footer Section
// const Footer = () => {
//   const quickLinks = [
//     { label: "Home", link: "#" },
//     { label: "About", link: "#" },
//     { label: "Services", link: "#" },
//     { label: "Portfolio", link: "#" },
//     { label: "Gallery", link: "#" },
//     { label: "Contact Us", link: "#" },
//   ];

//   const latestPosts = [
//     { label: "Responsive Web Design Tips", link: "#" },
//     { label: "Creative Branding Ideas", link: "#" },
//     { label: "UX/UI Best Practices", link: "#" },
//     { label: "Modern Web Development", link: "#" },
//     { label: "Graphics Design Inspiration", link: "#" },
//   ];

//   const contactInfo = [
//     { icon: "fa-solid fa-location-dot", text: "245 Street, Sydney, Australia" },
//     { icon: "fa-solid fa-phone", text: "+23 0034 5567 341" },
//     { icon: "fa-solid fa-mobile-button", text: "+23 0044 6755 411" },
//     { icon: "fa-solid fa-envelope", text: "info@trovicagency.com" },
//     { icon: "fa-solid fa-earth-europe", text: "www.trovicagency.com" },
//   ];

//   return (
//     <footer className="bg-gray-900 text-gray-200 pt-16">
//       <div className="container grid grid-cols-1 md:grid-cols-12 gap-8">
//         {/* Logo & About */}
//         <div className="md:col-span-3 text-center md:text-left">
//           <h4 className="text-2xl font-bold mb-2 text-white uppercase">
//             Trovica
//           </h4>
//           <p className="text-gray-400">
//             We are a creative agency specializing in web design, web
//             development, responsive design, branding, and graphics. We craft
//             digital experiences that elevate your brand.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div className="md:col-span-2">
//           <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
//           <ul className="space-y-2">
//             {quickLinks.map((link, idx) => (
//               <li key={idx}>
//                 <a
//                   href={link.link}
//                   className="flex items-center gap-2 hover:text-teal-400"
//                 >
//                   <i className="fa-solid fa-angles-right"></i> {link.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Latest Posts */}
//         <div className="md:col-span-4">
//           <h4 className="text-xl font-semibold mb-4">Latest Posts</h4>
//           <ul className="space-y-2">
//             {latestPosts.map((post, idx) => (
//               <li key={idx}>
//                 <a
//                   href={post.link}
//                   className="flex items-center gap-2 hover:text-teal-400"
//                 >
//                   <i className="fa-solid fa-angles-right"></i> {post.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div className="md:col-span-3">
//           <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
//           <ul className="space-y-2">
//             {contactInfo.map((info, idx) => (
//               <li key={idx} className="flex items-center gap-2">
//                 <i className={`${info.icon} text-teal-500`}></i>
//                 {info.text}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Copyright & Social */}
//       <div className="container mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
//         <p className="text-gray-500">
//           &copy; 2026 Trovica Agency. All rights reserved.
//         </p>
//         <div className="flex gap-4 mt-4 md:mt-0">
//           <a href="#" className="hover:text-teal-500">
//             <i className="fa-brands fa-facebook-f">c</i>k
//           </a>
//           <a href="#" className="hover:text-teal-500">
//             <i className="fa-brands fa-twitter"></i>k
//           </a>
//           <a href="#" className="hover:text-teal-500">
//             <i className="fa-brands fa-linkedin-in"></i>k
//           </a>
//           <a href="#" className="hover:text-teal-500">
//             <i className="fa-brands fa-instagram"></i>k
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// src/components/Footer.jsx
import React from "react";
import {
  COMPANY_INFO,
  NAV_LINKS,
  LATEST_POSTS,
  SOCIAL_LINKS,
} from "../utils/constants";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16">
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Logo & About */}
        <div className="md:col-span-3 text-center md:text-left">
          <h4 className="text-2xl font-bold mb-2 text-white uppercase">
            {COMPANY_INFO.shortName}
          </h4>
          <p className="text-gray-400">{COMPANY_INFO.description}</p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="flex items-center gap-2 hover:text-teal-400 transition"
                >
                  <i className="fa-solid fa-angles-right"></i>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Latest Posts */}
        <div className="md:col-span-4">
          <h4 className="text-xl font-semibold mb-4">Latest Posts</h4>
          <ul className="space-y-2">
            {LATEST_POSTS.map((post, idx) => (
              <li key={idx}>
                <a
                  href={post.path}
                  className="flex items-center gap-2 hover:text-teal-400 transition"
                >
                  <i className="fa-solid fa-angles-right"></i>
                  {post.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-3">
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-teal-500"></i>
              {COMPANY_INFO.address}
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-phone text-teal-500"></i>
              {COMPANY_INFO.phone}
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-mobile-button text-teal-500"></i>
              {COMPANY_INFO.mobile}
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-envelope text-teal-500"></i>
              {COMPANY_INFO.email}
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-earth-europe text-teal-500"></i>
              {COMPANY_INFO.website}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-6 mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm">
          &copy; 2025 - {new Date().getFullYear()} {COMPANY_INFO.name}. All rights
          reserved.
        </p>

        <div className="flex gap-4 mt-4 md:mt-0">
          {SOCIAL_LINKS.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-500 transition"
            >
              <i className={`fa-brands ${social.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
