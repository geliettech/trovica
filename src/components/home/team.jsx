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
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaLinkedinIn />, link: "#" },
      { icon: <FaInstagram />, link: "#" },
    ],
  },
  {
    name: "Jane Smith",
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
    <section className="pt-24 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col xl:flex-row items-center mb-12">
          <div className="xl:w-1/2 text-right xl:pr-6 mb-4 xl:mb-0">
            <h4 className="text-3xl font-semibold">
              <span className="text-teal-600">who we are?</span> our team
            </h4>
          </div>
          <div className="xl:w-1/2 xl:pl-6">
            <p className="text-gray-600">
              We are a creative agency specializing in web design, web development,
              responsive design, graphics design, creative design, and branding.
            </p>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-lg shadow-lg">
              {/* Team Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[480px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                <h4 className="text-white text-xl font-bold">
                  {member.name}
                </h4>
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
