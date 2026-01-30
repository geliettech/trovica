import React from "react";

// CTA Section
const CTASection = () => {
  return (
    <section className="bg-teal-50 py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="md:w-1/2">
          <h4 className="text-2xl font-bold mb-2">Best Solution for Your Business</h4>
          <p className="text-gray-700">
            Our solutions cater to both large-scale enterprise projects and small business needs, ensuring growth and efficiency at every stage.
          </p>
        </div>
        <div className="md:w-1/2 text-center">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

// Footer Section
const Footer = () => {
  const quickLinks = [
    { label: "Home", link: "#" },
    { label: "About", link: "#" },
    { label: "Services", link: "#" },
    { label: "Portfolio", link: "#" },
    { label: "Gallery", link: "#" },
    { label: "Contact Us", link: "#" },
  ];

  const latestPosts = [
    { label: "Responsive Web Design Tips", link: "#" },
    { label: "Creative Branding Ideas", link: "#" },
    { label: "UX/UI Best Practices", link: "#" },
    { label: "Modern Web Development", link: "#" },
    { label: "Graphics Design Inspiration", link: "#" },
  ];

  const contactInfo = [
    { icon: "fa-solid fa-location-dot", text: "245 Street, Sydney, Australia" },
    { icon: "fa-solid fa-phone", text: "+23 0034 5567 341" },
    { icon: "fa-solid fa-mobile-button", text: "+23 0044 6755 411" },
    { icon: "fa-solid fa-envelope", text: "info@trovicagency.com" },
    { icon: "fa-solid fa-earth-europe", text: "www.trovicagency.com" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-200 pt-16">
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Logo & About */}
        <div className="md:col-span-3 text-center md:text-left">
          <h4 className="text-2xl font-bold mb-2 text-white uppercase">Trovica</h4>
          <p className="text-gray-400">
            We are a creative agency specializing in web design, web development, responsive design, branding, and graphics. We craft digital experiences that elevate your brand.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.link} className="flex items-center gap-2 hover:text-teal-400">
                  <i className="fa-solid fa-angles-right"></i> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Latest Posts */}
        <div className="md:col-span-4">
          <h4 className="text-xl font-semibold mb-4">Latest Posts</h4>
          <ul className="space-y-2">
            {latestPosts.map((post, idx) => (
              <li key={idx}>
                <a href={post.link} className="flex items-center gap-2 hover:text-teal-400">
                  <i className="fa-solid fa-angles-right"></i> {post.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-3">
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2">
            {contactInfo.map((info, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <i className={`${info.icon} text-teal-500`}></i>
                {info.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright & Social */}
      <div className="container mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500">&copy; 2026 Trovica Agency. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-teal-500"><i className="fa-brands fa-facebook-f">c</i>k</a>
          <a href="#" className="hover:text-teal-500"><i className="fa-brands fa-twitter"></i>k</a>
          <a href="#" className="hover:text-teal-500"><i className="fa-brands fa-linkedin-in"></i>k</a>
          <a href="#" className="hover:text-teal-500"><i className="fa-brands fa-instagram"></i>k</a>
        </div>
      </div>
    </footer>
  );
};

// Export combined component
const CTAAndFooter = () => {
  return (
    <>
      <CTASection />
      <Footer />
    </>
  );
};

export default CTAAndFooter;
