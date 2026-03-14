import { Helmet } from "react-helmet-async";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { COMPANY_INFO } from "../utils/constants";
import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { fadeIn, bounceIn } from "../animations/motion";

const ContactPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to API)
    console.log(formData);

    setShowAlert(true);
    setFormData({ name: "", email: "", message: "" });

    // hide alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>Contact | Trovica Agency</title>
        <meta
          name="description"
          content="Get in touch with Trovica Agency for inquiries, project discussions, or to learn more about our services. We are here to help your business thrive."
        />
      </Helmet>
      <section className="py-24 bg-gray-50">
        <div className="container">
          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <FaLocationDot className="text-4xl text-white bg-teal-500 p-2 rounded-full" />,
                title: "Address",
                value: COMPANY_INFO.address,
              },
              {
                icon: <FaPhone className="text-4xl text-white bg-teal-500 p-2 rounded-full" />,
                title: "Phone",
                value: COMPANY_INFO.phone,
              },
              {
                icon: <FaEnvelope className="text-4xl text-white bg-teal-500 p-2 rounded-full" />,
                title: "Email",
                value: COMPANY_INFO.email,
              },
            ].map((info, idx) => (
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }} key={idx} className="text-center">
                <div className="flex flex-col items-center gap-3">
                  {info.icon}
                  <h4 className="font-semibold uppercase">
                    {info.title}
                    <span className="block text-sm font-normal text-gray-600 mt-1">
                      {info.value}
                    </span>
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  aria-label="Name"
                  required
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  aria-label="Email"
                  required
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Message"
                  aria-label="Message"
                  required
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                ></textarea>
                <Button text="Send Message" type="submit" className="mt-8" />
              </form>
            </div>

            {/* Map */}
            <div className="lg:col-span-5">
              <motion.div variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }} className="w-full h-87.5 rounded overflow-hidden shadow-lg">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.7078406794!2d150.60231041745502!3d-33.84723482046918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sng!4v1765986337197!5m2!1sen!2sng"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
        {/* successfully Message */}
        {showAlert && (
          <motion.div variants={bounceIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} className="fixed top-12 right-6 bg-teal-400 text-white p-4 rounded-lg shadow-lg z-50 flex gap-2">
            <FaCircleCheck /> Message sent successfully!
          </motion.div>
        )}
      </section>
    </>
  );
};

export default ContactPage;