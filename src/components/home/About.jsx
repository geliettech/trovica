import React from "react";
import { FaLaptop, FaUser } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router";
import HeadingSection from "./heading";

const About = () => {
  return (
    <section className="">
      <div className="container py-12">
        {/* ======================= about heading ==================== */}
        <HeadingSection />
        {/* ==================== About Content =================== */}
        <div className="flex justify-between">
          {/*  Left Content  */}
          <div className="flex-2">
            <h4 className="page-title">welcome to Trovica</h4>
            <p className="blackText__paragraph font-normal mb-4 pr-46">
              Trovica is a creative digital agency dedicated to designing and
              developing modern web solutions that help businesses communicate
              clearly, engage users, and build strong digital identities across
              platforms.
            </p>
            <p className="blackText__paragraph font-normal mb-4 pr-46">
              Our team blends strategic thinking with clean design and scalable
              technology to create digital products that are intuitive, visually
              appealing, and built to support long-term business growth.
            </p>
            <p className="blackText__paragraph font-normal mb-4 pr-46">
              We work closely with brands to understand their goals, transform
              ideas into practical solutions, and deliver digital experiences
              that are both functional and impactful in competitive markets.
            </p>
            <p className="blackText__paragraph font-normal mb-4 pr-46">
              From concept to launch, Trovica focuses on clarity, performance,
              and usability while ensuring every project aligns with the brand’s
              vision and objectives.
            </p>
            <p className="blackText__paragraph font-normal mb-4 pr-46">
              Whether you are starting fresh or refining an existing presence,
              we provide thoughtful digital solutions designed to create lasting
              value and results.
            </p>
            <Link to="/about" className="inline-flex items-center justify-center uppercase btn-primary rounded transformation">
              read more
            </Link>
          </div>

          {/*  Right Content */}
          <div className="flex-1">
            <div className="flex items-center mb-3">
              <div className="about-icon mr-3">
                <FaLaptop className="i" />
              </div>
              <div className="single-about-content">
                <h4 className="page-title">our mission</h4>
                <p className="blackText__paragraph font-normal">
                  Our mission is to deliver user-focused digital solutions that
                  combine design, technology, and strategy to help businesses
                  grow, connect, and succeed in the digital space.
                </p>
              </div>
            </div>
            <div class="single-about flex items-center mb-3">
              <div class="about-icon mr-3">
                <FaUser className="i" />
              </div>
              <div className="single-about-content">
                <h4 className="page-title">our Vission</h4>
                <p className="blackText__paragraph font-normal">
                  Our vision is to become a trusted digital partner known for
                  creativity, innovation, and building impactful digital
                  experiences that drive long-term success.
                </p>
              </div>
            </div>
            <div className="single-about flex items-center mb-3">
              <div className="about-icon mr-3">
                <FaPencil className="i" />
              </div>
              <div className="single-about-content">
                <h4 className="page-title">our History</h4>
                <p className="blackText__paragraph font-normal">
                  Trovica began with a passion for technology and design,
                  growing into a digital agency focused on helping brands adapt,
                  evolve, and thrive in the modern digital world.
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
