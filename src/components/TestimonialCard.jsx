import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slides from "../data/testimonials";
import SectionHeader from "./SectionHeader";

const TestimonialsCard = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  /* Auto slide */
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const visibleSlides = [
    slides[(current - 1 + slides.length) % slides.length],
    slides[current],
    slides[(current + 1) % slides.length],
  ];

  /* Swipe logic */
  const swipeConfidenceThreshold = 100;
  const swipePower = (offset, velocity) =>
    Math.abs(offset) * velocity;

  return (
    <section
      className="py-20 lg:py-24 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/img/testimonials/testi_back.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/70" />

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
        <div className="relative mt-14 flex justify-center items-center min-h-80">

          {/* ================= MOBILE + TABLET ================= */}
          <div className="lg:hidden w-full max-w-md">

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}

                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) nextSlide();
                  else if (swipe > swipeConfidenceThreshold) prevSlide();
                }}

                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5 }}

                className="bg-teal-600 text-white p-6 rounded-xl text-center shadow-xl"
              >
                <img
                  src={slides[current].image}
                  alt={slides[current].name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white/30"
                />

                <p className="mb-4">{slides[current].text}</p>

                <h4 className="font-semibold text-lg">
                  {slides[current].name}
                  <span className="block text-sm mt-3 text-white/80">
                    {slides[current].role}
                  </span>
                </h4>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ================= DESKTOP ================= */}
          <div className="hidden lg:flex justify-center items-center relative w-full">

            {visibleSlides.map((slide, index) => {
              const isActive = index === 1;
              const isLeft = index === 0;
              const isRight = index === 2;

              return (
                <motion.div
                  key={index}
                  animate={{
                    x: isLeft ? "-60%" : isRight ? "60%" : "0%",
                    scale: isActive ? 1 : 0.9,
                    opacity: isActive ? 1 : 0.6,
                    rotateY: isLeft ? 15 : isRight ? -15 : 0,
                  }}

                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}

                  className={`absolute p-8 rounded-xl text-center max-w-md
                  ${isActive
                      ? "z-20 bg-teal-600 text-white shadow-2xl"
                      : "z-10 bg-white/10 backdrop-blur text-gray-100"
                    }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white/30"
                  />

                  <p className="mb-4">{slide.text}</p>

                  <h4 className="text-lg font-semibold">
                    {slide.name}
                    <span
                      className={`block text-sm mt-3 ${isActive
                          ? "text-white/80"
                          : "text-gray-300"
                        }`}
                    >
                      {slide.role}
                    </span>
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-16">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrent(index)}
              animate={{ scale: current === index ? 1.3 : 1 }}
              className={`w-3 h-3 rounded-full
              ${current === index
                  ? "bg-teal-500"
                  : "bg-white/40 hover:bg-white"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCard;