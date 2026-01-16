// TestimonialsSlider.tsx
import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "img/testimonials/01.png",
    name: "John Doe",
    role: "CEO, TechSolutions",
    text: "Halim Agency transformed our website into a modern, responsive platform. Their attention to detail in web design and development exceeded our expectations.",
  },
  {
    image: "img/testimonials/02.png",
    name: "Jane Smith",
    role: "Marketing Head, CreativeHub",
    text: "The team at Halim Agency delivered outstanding branding and graphics design. Our visual identity now truly reflects our company values.",
  },
  {
    image: "img/testimonials/03.png",
    name: "Alice Johnson",
    role: "Founder, StartUpX",
    text: "Working with Halim Agency was seamless. Their creative design solutions helped our business stand out in a competitive market.",
  },
  {
    image: "img/testimonials/04.png",
    name: "Bob Brown",
    role: "Product Manager, NextGen Apps",
    text: "From web development to responsive design, Halim Agency provided top-notch services that improved our user experience and engagement.",
  },
];

const TestimonialsSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="pt-24 pb-24 bg-cover bg-center"
      style={{ backgroundImage: "url('img/testimonials/testi_back.jpg')" }}
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex flex-col xl:flex-row items-center mb-12">
          <div className="xl:w-1/2 text-right xl:pr-8 mb-4 xl:mb-0">
            <h4 className="text-2xl font-semibold">
              <span className="text-pink-500">Who we are?</span> What clients say
            </h4>
          </div>
          <div className="xl:w-1/2 xl:pl-8">
            <p className="text-gray-700">
              Halim Agency specializes in web design, development, responsive layouts, creative design, graphics, and branding. Here's what our clients have to say about their experience working with us.
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="flex flex-col items-center text-center p-8">
          <img
            src={slides[current].image}
            alt={slides[current].name}
            className="w-24 h-24 rounded-full mb-4 object-cover"
          />
          <p className="text-gray-600 mb-4">{slides[current].text}</p>
          <h4 className="text-lg font-semibold">
            {slides[current].name}{" "}
            <span className="block text-sm text-gray-500">{slides[current].role}</span>
          </h4>

          {/* Dots */}
          <div className="flex mt-6 space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  idx === current ? "bg-pink-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
