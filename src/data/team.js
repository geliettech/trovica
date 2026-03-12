import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "John Doe",
    role: "Web Developer",
    image: "img/team/team-1.jpg",
    socials: [
      { icon: FaFacebookF, link: "/" },
      { icon: FaTwitter, link: "/" },
      { icon: FaLinkedinIn, link: "/" },
      { icon: FaInstagram, link: "/" },
    ],
  },
  {
    name: "Jack Smith",
    role: "UI/UX Designer",
    image: "img/team/team-2.jpg",
    socials: [
      { icon: FaFacebookF, link: "/" },
      { icon: FaTwitter, link: "/" },
      { icon: FaLinkedinIn, link: "/" },
      { icon: FaInstagram, link: "/" },
    ],
  },
  {
    name: "Michael Lee",
    role: "Creative Director",
    image: "img/team/team-3.jpg",
    socials: [
      { icon: FaFacebookF, link: "/" },
      { icon: FaTwitter, link: "/" },
      { icon: FaLinkedinIn, link: "/" },
      { icon: FaInstagram, link: "/" },
    ],
  },
];

export default teamMembers;
