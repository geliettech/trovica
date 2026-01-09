// import { useEffect, useState } from "react";
// import { Link } from "react-router";
// import { AnimatePresence, motion } from "framer-motion";

// const slides = [
//   {
//     text: "We are Trovica",
//     heading: "Building Digital Experiences",
//     paragraph:
//       "We craft modern, user-focused digital solutions that help brands stand out. From concept to launch, we turn ideas into impactful products.",
//     buttonText: "Get Started",
//     image: "img/slider/slide-1.jpg",
//   },
//   {
//     text: "Creative & Strategic",
//     heading: "Designing Brands Solutions",
//     paragraph:
//       "Our team blends creativity with strategy to design websites and applications that engage users, boost visibility, and drive business growth.",
//     buttonText: "View Our Work",
//     image: "img/slider/slide-2.jpg",
//   },
//   {
//     text: "Your Digital Partner",
//     heading: "Innovative Web Solutions",
//     paragraph:
//       "We help businesses transform their online presence through clean design, scalable technology, and results-driven digital strategies.",
//     buttonText: "Contact Us",
//     image: "img/slider/slide-3.jpg",
//   },
// ];

// const Hero = () => {
//   const [slideIndex, setSlideIndex] = useState(0);

//   // Auto slide (WCAG-safe with user control)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSlideIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const currentSlide = slides[slideIndex];

//   return (
//     <section
//       className="relative min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url(${slides.image})` }}
//       role="region"
//       aria-label="Hero section"
//     >
//       {/* Overlay for contrast */}
//       <div className="absolute inset-0 bg-gray-950/75" aria-hidden="true" />

//       {/* Content */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={slideIndex}
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -40 }}
//           transition={{ duration: 0.6 }}
//           className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center gap-6 text-white px-4"
//         >
//           <h2 className="text-sm md:text-lg uppercase tracking-wide font-medium dashed__teal">
//             {currentSlide.text}
//           </h2>

//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
//             {currentSlide.heading}
//           </h1>

//           <p className="max-w-2xl whiteText__paragraph">
//             {currentSlide.paragraph}
//           </p>

//           <Link
//             to="/contact"
//             className="inline-flex items-center justify-center uppercase btn-primary rounded transformation"
//             aria-label={currentSlide.buttonText}
//           >
//             {currentSlide.buttonText}
//           </Link>
//         </motion.div>
//       </AnimatePresence>

//       {/* Dots Navigation */}
//       <div
//         className="hidden sm:flex flex-col gap-4 absolute right-6 top-1/2 -translate-y-1/2 z-20"
//         role="tablist"
//         aria-label="Hero slide navigation"
//       >
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setSlideIndex(index)}
//             className={`w-4 h-4 rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
//               index === slideIndex
//                 ? "bg-teal-600"
//                 : "bg-gray-400 hover:bg-white"
//             }`}
//             role="tab"
//             aria-selected={index === slideIndex}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    text: "We are Trovica",
    heading: "Building Digital Experiences",
    paragraph:
      "We craft modern, user-focused digital solutions that help brands stand out. From concept to launch, we turn ideas into impactful products.",
    buttonText: "Get Started",
    image: "img/slider/slide-1.jpg",
  },
  {
    text: "Creative & Strategic",
    heading: "Designing Brands Solutions",
    paragraph:
      "Our team blends creativity with strategy to design websites and applications that engage users, boost visibility, and drive business growth.",
    buttonText: "View Our Work",
    image: "img/slider/slide-2.jpg",
  },
  {
    text: "Your Digital Partner",
    heading: "Innovative Web Solutions",
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
      className="min-h-screen bg-no-repeat bg-cover relative"
      style={{
        backgroundImage: `url(${currentSlide.image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-950/70" />

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slideIndex}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          className="relative text-white max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-screen gap-8"
        >
          <h4 className="text-white text-sm md:text-[1.5rem] uppercase tracking-wide font-medium after:content-[''] after:block after:w-12 after:h-1 after:bg-teal-600 after:mx-auto after:mt-2">
            {currentSlide.text}
          </h4>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {currentSlide.heading}
          </h1>

          <p className="">{currentSlide.paragraph}</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center uppercase btn-primary transformation"
          >
            {currentSlide.buttonText}
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="flex flex-col gap-6 absolute right-10 top-1/2 transform -translate-y-1/2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setSlideIndex(index)}
            className={`w-4 h-4 cursor-pointer transition ${
              index === slideIndex
                ? "bg-teal-600"
                : "bg-gray-400 hover:bg-white"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
