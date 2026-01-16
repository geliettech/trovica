import { FaLaptop, FaUser, FaPencilAlt } from "react-icons/fa";
import SectionTitle from "../sectionTitle";
import { Link } from "react-router";
import AboutCard from "./aboutCard";

const AboutItems = [
  {
    text: "We specialize in designing and developing modern digital solutions that combine creativity, strategy, and technology.",
  },
  {
    text: "Our goal is to help brands communicate clearly, engage users, and create meaningful digital experiences.",
  },
  {
    text: "Every project is approached with attention to detail, performance, and usability across all platforms.",
  },
  {
    text: "From concept to launch, we focus on building solutions that support long-term growth and success.",
  },
];

const AboutRightItems = [
  {
    icon: <FaLaptop />,
    title: "Our Mission",
    desc: "To deliver user-focused digital solutions that blend design,technology, and strategy to help businesses grow online.",
  },
  {
    icon: <FaUser />,
    title: "Our Vision",
    desc: "To become a trusted digital agency known for creativity, innovation, and building strong digital identities.",
  },
  {
    icon: <FaPencilAlt />,
    title: "Our History",
    desc: "Trovica was founded with a passion for design and technology, evolving into a creative agency dedicated to helping brands adapt and thrive in an ever-changing digital world.",
  },
];

const About = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        {/* ======================= about Title ==================== */}
        <SectionTitle
          titleQuest="Who We Are?"
          title="About Us"
          desc="We are a creative digital agency focused on delivering impactful
              web, design, and branding solutions that help businesses grow and
              stand out."
        />
        {/* Content */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
          {/* Left Content */}
          <div className="xl:col-span-6">
            <h4 className="page-title">Welcome to Halim</h4>

            <div className="space-y-4 blackText__paragraph">
              {AboutItems.map((items, index) => (
                <p key={index} className="">
                  {items.text}
                </p>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 btn-primary rounded-md transformation"
            >
              Read More
            </Link>
          </div>

          {/* Right Content: Mission, Vission, History */}
          <div className="xl:col-span-5 xl:col-start-8 space-y-6">
            {AboutRightItems.map((item) => (
              <AboutCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
