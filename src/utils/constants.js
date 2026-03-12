import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

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
  {
    label: "Gallery",
    dropdown: [
      { label: "Brand Identity", path: "/gallery-brand-identity" },
      { label: "Business & Corporate", path: "/gallery-business-corporate" },
      { label: "Marketing Campaigns", path: "/gallery-marketing-campaigns" },
      { label: "Creative Concepts", path: "/gallery-creative-concepts" },
    ],
  },
  { label: "Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact" },
];


export const SOCIAL_LINKS = [
  { icon: FaFacebookF, url: "/" },
  { icon: FaTwitter, url: "/" },
  { icon: FaLinkedinIn, url: "/" },
  { icon: FaInstagram, url: "/" },
];

export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
};
