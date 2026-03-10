import { useEffect, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import slides from "../data/hero";
import SectionHeader from "../components/SectionHeader";
import { AboutItems, AboutRightItems } from "../data/about";
import { faqs, skills } from "../data/features";
import ServicesCard from "../components/ServiceCard";
import counters from "../data/counter";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import teamMembers from "../data/team";
import TestimonialsCard from "../components/TestimonialCard";
import Blogs from "../data/blog";
import Button from "../components/Button";
import { Helmet } from "react-helmet-async";
import {
  pageVariants,
  pageTransition,
  slideLeft,
  slideRight,
  scaleIn,
  bounceIn, fadeIn,
} from "../animations/motion";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3, // 30% of element visible
  });

  // Auto Hero Section slide
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[slideIndex];
  const Blog = Blogs.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Trovica Agency</title>
        <meta
          name="description"
          content="Professional web development and design services."
        />
        <meta
          name="keywords"
          content="web design, web development, responsive layouts, creative design, graphics, branding"
        />
      </Helmet>
      <div className="">
        {/* ==============  Hero Section  =========== */}
        <AnimatePresence mode="wait">
          <section
            className="relative min-h-[90vh] bg-cover"
            style={{
              backgroundImage: `url(${currentSlide.image})`,
            }}
            role="region"
            aria-label="Hero section"
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-gray-900/80"
              aria-hidden="true"
            />

            {/* Content */}

            <motion.div
              key={slideIndex}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
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
              <Button text={currentSlide.buttonText} to={currentSlide.to} />
            </motion.div>

            {/* Dots Navigation */}
            <div
              className="hidden sm:flex flex-col gap-4 absolute right-6 top-1/2 -translate-y-1/2 z-20"
              aria-label="Hero slide navigation"
            >
              {slides.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setSlideIndex(index)}
                  className={`w-4 h-4 cursor-pointer transition ${index === slideIndex
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
        </AnimatePresence>
        {/* ==============  About  =========== */}
        <section className="py-24 bg-gray-50">
          <div className="container">
            {/* SectionHeader */}
            <SectionHeader
              quest="Who We Are?"
              title="About Us"
              desc="We are a creative digital agency focused on delivering impactful
              web, design, and branding solutions that help businesses grow and
              stand out."
            />
            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="">
                <motion.h4
                  className="page-title"
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  Welcome to Halim
                </motion.h4>

                <motion.div
                  className="space-y-4 blackText__paragraph"
                  variants={slideLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  {AboutItems.map((items, index) => (
                    <p key={index} className="">
                      {items.text}
                    </p>
                  ))}
                </motion.div>
                <Button text="Read More" to="/about" className="mt-8" />
              </div>

              {/* Right Content: Mission, Vission, History */}
              <div className="space-y-6">
                {AboutRightItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div className="flex items-center gap-4" key={item.title}>
                      <motion.div
                        className="text-3xl text-teal-600 border border-teal-600 rounded-full p-2"
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                      >
                        <Icon />
                      </motion.div>
                      <motion.div
                        variants={slideRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                      >
                        <h4 className="page-title mb-4">{item.title}</h4>
                        <p className="blackText__paragraph">{item.desc}</p>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* ==============  Features  =========== */}
        <section
          className="py-24 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/features/bg-skill.jpg')" }}
        >
          <div className="container">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
              {/* FAQ SECTION */}
              <div>
                <motion.h4
                  className="page-title text-white"
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  FAQ
                </motion.h4>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      className="border border-teal-200 rounded-lg overflow-hidden bg-teal-600"
                      variants={slideLeft}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.2 }}
                    >
                      <button
                        onClick={() =>
                          setActiveIndex(activeIndex === index ? null : index)
                        }
                        className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-white"
                      >
                        {faq.title}
                        <span className="text-xl">
                          {activeIndex === index ? <FaMinus /> : <FaPlus />}
                        </span>
                      </button>

                      {activeIndex === index && (
                        <div className="px-6 pb-4 text-gray-700 text-sm leading-relaxed bg-white">
                          {faq.content}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* SKILLS SECTION */}
              <div>
                <motion.h4
                  className="page-title text-white"
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  Our Skills
                </motion.h4>
                <div>
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="space-y-5"
                      variants={slideRight}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.2 }}
                    >
                      <h5 className="font-medium capitalize text-white mb-1">
                        {skill.name}
                      </h5>

                      <div className="relative w-full h-6 bg-white rounded overflow-hidden">
                        <div
                          className="h-full bg-teal-600 transition-all duration-700"
                          style={{ width: `${skill.value}%` }}
                        />
                        <span className="absolute right-1/2 top-1/2 -translate-y-1/2 text-xs text-white font-semibold">
                          {skill.value}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==============  Services Section  =========== */}
        <ServicesCard />
        {/* ==============  counters Section  =========== */}
        <section className="bg-teal-600 py-16">
          <div className="container">
            <div
              ref={ref}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8"
            >
              {counters.map((counter, idx) => {
                const Icon = counter.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 gap-4"
                  >
                    <div className="text-4xl text-teal-600">
                      <Icon />
                    </div>
                    <div className="">
                      <h4 className="text-2xl font-bold text-gray-700">
                        {inView ? (
                          <CountUp
                            end={counter.number}
                            duration={2}
                            separator=","
                          />
                        ) : (
                          0
                        )}
                      </h4>
                      <p className="blackText__paragraph">{counter.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* ==============  Team Section  =========== */}
        <section className="py-24 bg-gray-50">
          <div className="container">
            {/*  Team header */}
            <SectionHeader
              quest="Who We Are?"
              title="Our team"
              desc="We are a creative agency specializing in web design, web development,
              responsive design, graphics design, creative design, and branding."
            />
            {/* Team Members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {teamMembers.map((member, idx) => (
                <motion.div
                  variants={bounceIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  key={idx}
                  className="relative group overflow-hidden rounded-lg shadow-lg"
                >
                  {/* Team Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                    <h4 className="text-white text-xl font-bold">
                      {member.name}
                    </h4>
                    <span className="text-teal-400 block mb-4">
                      {member.role}
                    </span>
                    <div className="flex gap-4 text-white text-lg">
                      {member.socials.map((social, sidx) => {
                        const SocialIcon = social.icon;
                        return (
                          <a
                            key={sidx}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-teal-500 transition-colors duration-300"
                          >
                            <SocialIcon />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* ==============  Testimonials Section  =========== */}
        <TestimonialsCard />
        {/* ==============  Blogs Section  =========== */}
        <section className="py-24 bg-gray-50">
          <div className="container">
            {/* Section Header */}
            <SectionHeader
              quest="Who We Are?"
              title="Latest Blog"
              desc="We are a full-service creative agency offering web design, web development, responsive design, graphics, and branding solutions to elevate your business online."
            />
            <div className="grid lg:grid-cols-3 gap-8">
              {Blog.map((blog) => (
                <motion.div
                  key={blog.id}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  className="bg-white shadow rounded-lg overflow-hidden"
                >
                  <img src={blog.img} alt={blog.title} className="w-full" />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold mb-2">
                      <Link
                        to={`/blog/${blog.id}`}
                        className="hover:text-teal-500"
                      >
                        {blog.title}
                      </Link>
                    </h4>
                    <div className="flex gap-2 text-gray-500 text-sm mb-2">
                      <span>{blog.date}</span>
                      <span>{blog.year}</span>
                    </div>
                    <p className="blackText__paragraph">{blog.description}</p>
                    <Button text="Read More" to={`/blog/${blog.id}`} className="mt-8" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
