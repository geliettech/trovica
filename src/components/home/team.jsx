import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import SectionTitle from "../sectionTitle";

const teamMembers = [
  {
    name: "John Doe",
    role: "Web Developer",
    image: "img/team/team-1.jpg",
    socials: [
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaLinkedinIn />, link: "#" },
      { icon: <FaInstagram />, link: "#" },
    ],
  },
  {
    name: "Jack Smith",
    role: "UI/UX Designer",
    image: "img/team/team-2.jpg",
    socials: [
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaLinkedinIn />, link: "#" },
      { icon: <FaInstagram />, link: "#" },
    ],
  },
  {
    name: "Michael Lee",
    role: "Creative Director",
    image: "img/team/team-3.jpg",
    socials: [
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaLinkedinIn />, link: "#" },
      { icon: <FaInstagram />, link: "#" },
    ],
  },
];

const Team = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        {/* ======================= Team Title ==================== */}
        <SectionTitle
          titleQuest="Who We Are?"
          title="Our team"
          desc="We are a creative agency specializing in web design, web development,
              responsive design, graphics design, creative design, and branding."
        />
        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              {/* Team Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-120 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                <h4 className="text-white text-xl font-bold">{member.name}</h4>
                <span className="text-teal-400 block mb-4">{member.role}</span>
                <div className="flex gap-4 text-white text-lg">
                  {member.socials.map((social, sidx) => (
                    <a
                      key={sidx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-teal-500 transition-colors duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
