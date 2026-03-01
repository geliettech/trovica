// src/utils/constants.js

export const COMPANY_INFO = {
  name: "Trovica Agency",
  shortName: "Trovica",
  email: "info@trovicagency.com",
  phone: "+23 0034 5567 341",
  mobile: "+23 0044 6755 411",
  website: "www.trovicagency.com",
  address: "245 Street, Sydney, Australia",
  description:
    "We are a creative agency specializing in web design, development, branding, and graphics. We craft digital experiences that elevate your brand.",
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact Us", path: "/contact" },
];

export const LATEST_POSTS = [
  { label: "Responsive Web Design Tips", path: "#" },
  { label: "Creative Branding Ideas", path: "#" },
  { label: "UX/UI Best Practices", path: "#" },
  { label: "Modern Web Development", path: "#" },
  { label: "Graphics Design Inspiration", path: "#" },
];

export const SOCIAL_LINKS = [
  { icon: "fa-facebook-f", url: "#" },
  { icon: "fa-twitter", url: "#" },
  { icon: "fa-linkedin-in", url: "#" },
  { icon: "fa-instagram", url: "#" },
];

export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
};