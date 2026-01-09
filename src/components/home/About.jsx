import React from "react";
import { FaLaptop, FaUser } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router";

const About = () => {
  return (
    <section className="">
      <div className="container pt-30 pb-30">
        {/* ======================= about heading ==================== */}
        <div className="section-title">
          <h4>
            <span>who we are?</span>about us
          </h4>
          <p className="blackText__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis fugit quae dignissimos sapiente omnis adipisci!
          </p>
        </div>
       
       {/* ==================== About Content =================== */}
        <div className="flex justify-between">
           {/*  Left Content  */}
          <div className="">
            <h4 className="page-title">welcome to Trovica</h4>
            <p className="blackText__paragraph max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              quaerat culpa. Veritatis, iste? Mollitia nobis obcaecati sed
              culpa.
            </p>
            <p className="blackText__paragraph ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              quaerat culpa. Veritatis, iste? Mollitia nobis obcaecati sed
              culpa.
            </p>
            <p className="blackText__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              quaerat culpa. Veritatis, iste? Mollitia nobis obcaecati sed
              culpa.
            </p>
            <p className="blackText__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              quaerat culpa. Veritatis, iste? Mollitia nobis obcaecati sed
              culpa.
            </p>
            <p className="blackText__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              quaerat culpa. Veritatis, iste? Mollitia nobis obcaecati sed
              culpa.
            </p>
            <Link to="/about" className="btn-primary transformation mt-6">
              read more
            </Link>
          </div>

           {/*  Right Content */}
          <div className="">
            <div className="flex items-center mb-3">
              <div className="about-icon me-3">
                <FaLaptop className="i" />
              </div>
              <div className="single-about-content">
                <h4 className="page-title">our mission</h4>
                <p className="blackText__paragraph">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Adipisci in repellat nam ipsam quo unde recusandae libero
                  nostrum, ipsa expedita.
                </p>
              </div>
            </div>
            <div class="single-about flex items-center mb-3">
              <div class="about-icon me-3">
                <FaUser className="i" />
              </div>
              <div className="single-about-content">
                <h4 className="page-title">our Vission</h4>
                <p className="blackText__paragraph">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Adipisci in repellat nam ipsam quo unde recusandae libero
                  nostrum, ipsa expedita.
                </p>
              </div>
            </div>
            <div className="single-about flex items-center mb-3">
              <div className="about-icon me-3">
                <FaPencil className="i" />
              </div>
              <div className="single-about-content">
                <h4 className="page-title">our History</h4>
                <p className="blackText__paragraph">
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
