import {
  FaLaptop,
  FaCode,
  FaMobileAlt,
  FaPencilAlt,
  FaCreativeCommonsSa,
  FaFlag,
} from "react-icons/fa";
import SectionTitle from "../sectionTitle";

const services = [
  {
    icon: <FaLaptop className="text-5xl bg-teal-600 text-white rounded-full p-3" />,
    title: "Web Design",
    desc: "We design visually appealing and user-friendly websites that communicate your brand clearly and leave a lasting impression.",
  },
  {
    icon: <FaCode className="text-5xl bg-teal-600 text-white rounded-full p-3" />,
    title: "Web Development",
    desc: "We build fast, scalable, and secure websites using modern technologies tailored to meet your business needs.",
  },
  {
    icon: <FaMobileAlt className="text-5xl bg-teal-600 text-white rounded-full p-3" />,
    title: "Responsive Design",
    desc: "Our designs are fully responsive, ensuring seamless experiences across mobile, tablet, and desktop devices.",
  },
  {
    icon: <FaPencilAlt className="text-5xl bg-teal-600 text-white rounded-full p-3" />,
    title: "Graphics Design",
    desc: "We create engaging visual content that strengthens brand identity and enhances communication.",
  },
  {
    icon: <FaCreativeCommonsSa className="text-5xl bg-teal-600 text-white rounded-full p-3" />,
    title: "Creative Design",
    desc: "We combine creativity and strategy to craft designs that are unique, expressive, and aligned with your brand vision.",
  },
  {
    icon: <FaFlag className="text-5xl bg-teal-600 text-white rounded-full p-3" />,
    title: "Branding",
    desc: "We help businesses build strong, consistent brand identities that connect with their audience and stand out.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        {/* ======================= Services Title ==================== */}
        <SectionTitle
          titleQuest="Who We Are?"
          title="Our Services"
          desc=" We provide creative digital solutions designed to help businesses
              grow, engage users, and build strong online identities."
        />
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center bg-white p-8 rounded-2xl shadow-sm  hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center items-center mb-5">
                {service.icon}
              </div>
              <h4 className="text-2xl font-semibold mb-3 capitalize text-gray-700">
                {service.title}
              </h4>
              <p className="blackText__paragraph">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
