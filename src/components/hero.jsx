import { useEffect, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    text: "We are Trovica",
    heading: "Building Digital Experiences That Matter",
    paragraph:
      "We craft modern, user-focused digital solutions that help brands stand out. From concept to launch, we turn ideas into impactful products.",
    buttonText: "Get Started",
    image: "img/slider/slide-1.jpg",
  },
  {
    text: "Creative & Strategic",
    heading: "Designing Solutions for Growing Brands",
    paragraph:
      "Our team blends creativity with strategy to design websites and applications that engage users, boost visibility, and drive business growth.",
    buttonText: "View Our Work",
    image: "img/slider/slide-2.jpg",
  },
  {
    text: "Your Digital Partner",
    heading: "Innovative Web & Brand Solutions",
    paragraph:
      "We help businesses transform their online presence through clean design, scalable technology, and results-driven digital strategies.",
    buttonText: "Contact Us",
    image: "img/slider/slide-3.jpg",
  },
];

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // ✅ Auto slide (safe + clean)
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval); //cleanup  when the component unmounts
  }, []);

  const currentSlide = slides[slideIndex];

  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center px-6 md:px-10 lg:px-25"
      style={{
        backgroundImage: `url(${currentSlide.image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-950/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="grid gap-12 py-4"
          >
            <h4 className="text-teal-600 text-sm md:text-[1.5rem] uppercase tracking-wide">
              {currentSlide.text}
            </h4>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {currentSlide.heading}
            </h1>

            <p className="text-sm md:text-base text-gray-200">
              {currentSlide.paragraph}
            </p>

            <div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center uppercase bg-teal-600 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
              >
                {currentSlide.buttonText}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots Navigation */}
        <div className="mt-12 mb-4 flex gap-4">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setSlideIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                index === slideIndex
                  ? "bg-teal-600"
                  : "bg-gray-400 hover:bg-white"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
