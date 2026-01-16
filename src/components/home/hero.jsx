import { useEffect, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";


const slides = [
  {
    text: "We Are Trovica",
    heading: "Creative Digital Agency",
    paragraph:
      "We design and build powerful digital experiences that help brands connect, grow, and stand out online through strategy, creativity, and technology.",
    buttonText: "Get Started",
    image: "img/slider/slide-1.jpg",
    to: "/contact",
  },
  {
    text: "Design. Develop. Brand.",
    heading: "Web & Brand Solutions",
    paragraph:
      "From web design and development to branding and creative design, we craft visually compelling and responsive solutions tailored to your business goals.",
    buttonText: "View Our Work",
    image: "img/slider/slide-2.jpg",
    to: "/services",
  },
  {
    text: "Your Digital Partner",
    heading: "Building Brands Online",
    paragraph:
      "We help businesses create strong digital identities through clean design, scalable development, and strategic branding that drives real results.",
    buttonText: "Contact Us",
    image: "img/slider/slide-3.jpg",
    to: "/contact",
  },
];

const HeroSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[slideIndex];

  return (
    <section
      className="relative min-h-[90vh] bg-cover"
      style={{
        backgroundImage: `url(${currentSlide.image})`,
      }}
      role="region"
      aria-label="Hero section"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/80" aria-hidden="true" />

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slideIndex}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 min-h-[90vh] flex flex-col justify-center items-center text-center gap-6 text-white px-4"
        >
          <h4 className="text-white text-sm md:text-[1.5rem] uppercase tracking-wide font-medium dashed__teal">
            {currentSlide.text}
          </h4>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {currentSlide.heading}
          </h1>

          <p className="whiteText__paragraph max-w-2xl">
            {currentSlide.paragraph}
          </p>
          <Link
            to={currentSlide.to}
            className="inline-flex items-center justify-center uppercase btn-primary rounded transformation"
          >
            {currentSlide.buttonText}
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div
        className="hidden sm:flex flex-col gap-4 absolute right-6 top-1/2 -translate-y-1/2 z-20"
        aria-label="Hero slide navigation"
      >
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setSlideIndex(index)}
            className={`w-4 h-4 cursor-pointer transition ${
              index === slideIndex
                ? "bg-teal-600"
                : "bg-gray-400 hover:bg-white"
            }`}
            role="tab"
            aria-selected={index === slideIndex}
            aria-label={`Go to slide ${index + 1}`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;