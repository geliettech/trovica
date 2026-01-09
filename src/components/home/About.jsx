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
            <p className="blackText__paragraph font-normal mb-3 pr-52">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              quaerat culpa. Veritatis, iste? Mollitia nobis obcaecati sed
              culpa.
            </p>
            <p className="blackText__paragraph font-normal mb-3 pr-52">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              quaerat culpa. Veritatis, iste? Mollitia nobis obcaecati sed
              culpa.
            </p>
            <p className="blackText__paragraph font-normal mb-3 pr-52">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              quaerat culpa. Veritatis, iste? Mollitia nobis obcaecati sed
              culpa.
            </p>
            <p className="blackText__paragraph font-normal mb-3 pr-52">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              quaerat culpa. Veritatis, iste? Mollitia nobis obcaecati sed
              culpa.
            </p>
            <p className="blackText__paragraph font-normal mb-3 pr-52">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              quaerat culpa. Veritatis, iste? Mollitia nobis obcaecati sed
              culpa.
            </p>
            <Link to="/about" className="btn-primary transformation">
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Adipisci in repellat nam ipsam quo unde recusandae libero
                  nostrum, ipsa expedita.
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Adipisci in repellat nam ipsam quo unde recusandae libero
                  nostrum, ipsa expedita.
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Adipisci in repellat nam ipsam quo unde recusandae libero
                  nostrum, ipsa expedita.
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
