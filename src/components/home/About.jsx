// import React from "react";
// import { FaLaptop, FaUser } from "react-icons/fa";
// import { FaPencil } from "react-icons/fa6";
// import { Link } from "react-router";
// import AboutCard from "./aboutCard";
// import SectionTitle from "../sectionTitle";

// const AboutItems = [
//   {
//     text: "Trovica is a creative digital agency specializing in web design, web development, branding, and creative solutions that help businesses establish a strong and memorable online presence.",
//   },
//   {
//     text: "We combine creativity, strategy, and modern technology to build responsive, visually engaging, and user-friendly digital products that communicate brand value clearly.",
//   },
//   {
//     text: "Our approach is centered on understanding each client’s goals, transforming ideas into functional designs, and delivering solutions that support long-term growth.",
//   },
//   {
//     text: "From concept and design to development and launch, we focus on usability, performance, and consistency across all digital touchpoints.",
//   },
//   {
//     text: "Whether launching a new brand or refining an existing one, we deliver thoughtful, creative, and scalable digital experiences built to make impact.",
//   },
// ];

// const AboutRightItems = [
//   {
//     icon: <FaLaptop className="i" />,
//     title: "Our Mission",
//     desc: "To deliver creative, responsive, and user-focused digital solutions that combine design, development, and branding to help businesses grow and succeed online.",
//   },
//   {
//     icon: <FaUser className="i" />,
//     title: "Our Vision",
//     desc: "To become a trusted creative digital agency recognized for innovation, quality design, and building strong brand identities in the digital space.",
//   },
//   {
//     icon: <FaPencil className="i" />,
//     title: "Our History",
//     desc: "Trovica was founded with a passion for design and technology, evolving into a creative agency dedicated to helping brands adapt and thrive in an ever-changing digital world.",
//   },
// ];

// const About = () => {
//   return (
//     <section className="py-24">
//       <div className="container">
//         {/* ======================= about Title ==================== */}
//         <SectionTitle
//           titleQuest="Who We Are?"
//           title="About Us"
//           desc="Trovica is a modern digital agency focused on building meaningful and
//           user-centered digital experiences."
//         />
//         {/* ==================== About Content =================== */}
//         <div className="flex flex-col lg:flex-row justify-between">
//           {/*  Left Content  */}
//           <div className="w-full max-w-lg">
//             <h4 className="page-title">welcome to Trovica</h4>
//             {AboutItems.map((items, index) => (
//               <p key={index} className="blackText__paragraph font-normal mb-4">
//                 {items.text}
//               </p>
//             ))}

//             <Link
//               to="/about"
//               className="inline-flex items-center justify-center uppercase btn-primary rounded transformation"
//             >
//               read more
//             </Link>
//           </div>

//           {/*  Right Content */}
//           <div className="w-full max-w-lg mt-18 lg:mt-0">
//             {AboutRightItems.map((item) => (
//               <AboutCard
//                 key={item.title}
//                 icon={item.icon}
//                 title={item.title}
//                 desc={item.desc}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import { FaLaptop, FaUser, FaPencilAlt } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center mb-16 gap-6">
          <div className="xl:text-right">
            <h4 className="text-3xl font-semibold uppercase">
              <span className="block text-sm text-teal-600 mb-2">
                Who we are?
              </span>
              About Us
            </h4>
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed">
              We are a creative digital agency focused on delivering impactful
              web, design, and branding solutions that help businesses grow and
              stand out.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
          {/* Left Content */}
          <div className="xl:col-span-6">
            <h4 className="text-xl font-semibold mb-4 uppercase">
              Welcome to Halim
            </h4>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We specialize in designing and developing modern digital
                solutions that combine creativity, strategy, and technology.
              </p>
              <p>
                Our goal is to help brands communicate clearly, engage users,
                and create meaningful digital experiences.
              </p>
              <p>
                Every project is approached with attention to detail,
                performance, and usability across all platforms.
              </p>
              <p>
                From concept to launch, we focus on building solutions that
                support long-term growth and success.
              </p>
            </div>

            <a
              href="/about"
              className="inline-block mt-8 px-8 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition text-sm font-medium"
            >
              Read More
            </a>
          </div>

          {/* Right Content */}
          <div className="xl:col-span-5 xl:col-start-8 space-y-6">
            {/* Mission */}
            <div className="flex items-start gap-4">
              <div className="text-3xl text-teal-600">
                <FaLaptop />
              </div>
              <div>
                <h4 className="font-semibold uppercase mb-1">
                  Our Mission
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To deliver user-focused digital solutions that blend design,
                  technology, and strategy to help businesses grow online.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex items-start gap-4">
              <div className="text-3xl text-teal-600">
                <FaUser />
              </div>
              <div>
                <h4 className="font-semibold uppercase mb-1">
                  Our Vision
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To become a trusted digital agency known for creativity,
                  innovation, and building strong digital identities.
                </p>
              </div>
            </div>

            {/* History */}
            <div className="flex items-start gap-4">
              <div className="text-3xl text-teal-600">
                <FaPencilAlt />
              </div>
              <div>
                <h4 className="font-semibold uppercase mb-1">
                  Our History
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Founded with a passion for design and technology, Halim has
                  grown into a creative agency focused on delivering meaningful
                  digital solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
