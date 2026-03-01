import React, { useState, useEffect } from "react";
import slides from "../data/testimonials";

const TestimonialsCard = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const visibleSlides = [
    slides[(current - 1 + slides.length) % slides.length],
    slides[current],
    slides[(current + 1) % slides.length],
  ];

  return (
    <section
      className="py-24 bg-cover bg-center relative"
      style={{ backgroundImage: "url('img/testimonials/testi_back.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/60" aria-hidden="true" />

      <div className="container relative z-10">
        {/* ======================= testimonials Title ==================== */}
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center mb-16 gap-6 relative">
          <div className="xl:text-right">
            <h4 className="text-3xl font-semibold uppercase text-white">
              <span className="block text-sm text-teal-600 mb-2">
                Who We Are?
              </span>
              What clients say
            </h4>
          </div>
          {/* Vertical line */}
          <span className="hidden lg:block absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-teal-600" />

          {/* Horizontal line */}
          <span className="hidden lg:block absolute bottom-0 left-1/2 h-px w-10 -translate-x-1/2 bg-teal-600" />
          <div>
            <p className="whiteText__paragraph">
              Trovica Agency specializes in web design, development, responsive
              layouts, creative design, graphics, and branding. Here's what our
              clients have to say about their experience working with us.
            </p>
          </div>
        </div>
        {/* Slider */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {visibleSlides.map((slide, index) => {
            const isActive = index === 1; // middle card

            return (
              <div
                key={index}
                className={`p-8 rounded-lg text-center transition-all duration-500
          ${
            isActive
              ? "bg-teal-600 text-white scale-105 shadow-xl"
              : "bg-white/10 backdrop-blur-sm text-gray-100"
          }
        `}
              >
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white/30"
                />

                <p className="mb-4 text-sm leading-relaxed">{slide.text}</p>

                <h4 className="text-lg font-semibold">
                  {slide.name}
                  <span
                    className={`block text-sm ${
                      isActive ? "text-white/90" : "text-gray-300"
                    }`}
                  >
                    {slide.role}
                  </span>
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCard;
