import React from "react";

const ContactPage = () => {
  return (
    <div>
      {/* Breadcrumb Area */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h4 className="text-2xl font-semibold uppercase mb-2">
              Contact Us
            </h4>
            <ul className="flex justify-center items-center gap-2 text-sm text-gray-600">
              <li>
                <a href="/" className="hover:text-black transition">
                  Home
                </a>
              </li>
              <li>/</li>
              <li className="text-gray-800">Contact Us</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Area */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="flex flex-col items-center gap-3">
                  <i className="fa-solid fa-location-dot text-3xl  text-white bg-teal-500 p-4 rounded-full">k</i>
                  <h4 className="font-semibold uppercase">
                    Address
                    <span className="block text-sm font-normal text-gray-600 mt-1">
                      245 Street, Sydney, Australia
                    </span>
                  </h4>
                </div>
              </div>

              <div className="text-center">
                <div className="flex flex-col items-center gap-3">
                  <i className="fa-solid fa-phone text-3xl text-white bg-teal-500 p-4 rounded-full">k</i>
                  <h4 className="font-semibold uppercase">
                    Phone
                    <span className="block text-sm font-normal text-gray-600 mt-1">
                      +23 0034 5567 341
                    </span>
                  </h4>
                </div>
              </div>

              <div className="text-center">
                <div className="flex flex-col items-center gap-3">
                  <i className="fa-regular fa-envelope text-3xl  text-white bg-teal-500 p-4 rounded-full">k</i>
                  <h4 className="font-semibold uppercase">
                    Email
                    <span className="block text-sm font-normal text-gray-600 mt-1">
                      info@trovicagency.com
                    </span>
                  </h4>
                </div>
              </div>
            </div>

            {/* Form & Map */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Contact Form */}
              <div className="lg:col-span-7">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-teal-500 text-white px-8 py-3 uppercase text-sm tracking-wide hover:bg-gray-800 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Map */}
              <div className="lg:col-span-5">
                <div className="w-full h-[350px] rounded overflow-hidden">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.7078406794!2d150.60231041745502!3d-33.84723482046918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sng!4v1765986337197!5m2!1sen!2sng"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
