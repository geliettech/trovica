import { useState, useEffect } from "react";
import slides from "../data/testimonials";
import SectionHeader from "./SectionHeader";

const TestimonialsCard = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const visibleSlides = [
    slides[(current - 1 + slides.length) % slides.length], // Left (exit)
    slides[current], // Active
    slides[(current + 1) % slides.length], // Right (next)
  ];

  return (
    <section
      className="py-24 bg-cover bg-center relative"
      style={{ backgroundImage: "url('img/testimonials/testi_back.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/60" aria-hidden="true" />

      <div className="container relative z-10">
        {/* Section Header */}
        <SectionHeader
          quest="Who We Are?"
          title="What clients say"
          desc="Trovica Agency specializes in web design, development, responsive layouts, creative design, graphics, and branding."
          titleClassName="text-white"
          descClassName="text-white"
        />

        {/* Slider */}
        <div className="relative h-84 mt-12 flex justify-center">
          {visibleSlides.map((slide, index) => {
            const isActive = index === 1; // Middle slide
            const isLeft = index === 0;
            const isRight = index === 2;

            return (
              <div
                key={index}
                className={`absolute transition-all duration-500 p-6 sm:p-8 rounded-lg text-center
                  w-full max-w-md
                  ${
                    isActive
                      ? "z-20 scale-100 opacity-100 bg-teal-600 text-white shadow-xl"
                      : "z-10 scale-95 opacity-60 bg-white/10 backdrop-blur-sm text-gray-100"
                  }
                  ${
                    isLeft
                      ? "translate-x-[-50%] sm:translate-x-[-50%]"
                      : isRight
                        ? "translate-x-[50%] sm:translate-x-[50%]"
                        : ""
                  }
                `}
              >
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white/30"
                />

                <p className="mb-4 whiteText__paragraph">{slide.text}</p>

                <h4 className="text-lg font-semibold">
                  {slide.name}
                  <span
                    className={`block text-sm font-normal mt-4 ${
                      isActive ? "text-white/70" : "text-gray-300"
                    }`}
                  >
                    {slide.role}
                  </span>
                </h4>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-18">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300
                ${
                  current === index
                    ? "bg-teal-500 scale-125"
                    : "bg-white/40 hover:bg-white"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCard;
