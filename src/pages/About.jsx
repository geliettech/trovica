import SectionHeader from "../components/SectionHeader";
import { AboutItems, AboutRightItems } from "../data/about";
  import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { slideLeft, slideRight, scaleIn } from "../animations/motion";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About | Trovica Agency</title>
        <meta
          name="description"
          content="We are a creative digital agency focused on delivering impactful web, design, and branding solutions that help businesses grow and stand out."
        />
      </Helmet>
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
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="xl:col-span-6">
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
            <div className="xl:col-span-5 xl:col-start-8 space-y-6">
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
    </>
  );
};

export default AboutPage;
