import {
  fadeIn,
  slideUp,
  zoomIn,
  slideRight,
} from "../animations/motion";
import { motion } from "framer-motion";

const SectionHeader = ({
  quest,
  title,
  desc,
  titleClassName,
  descClassName,
}) => {
  return (
    <motion.div
      className="grid grid-cols-1 xl:grid-cols-2 items-center mb-16 gap-6 relative"
    >
      <div className="text-center xl:text-right">
        <h4>
          <motion.span
            className="block text-sm text-teal-600 mb-2"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {quest}
          </motion.span>
          <motion.span
            className={`text-3xl font-semibold uppercase text-gray-700 ${titleClassName}`}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {title}
          </motion.span>
        </h4>
      </div>
      <motion.span
        className="hidden md:block absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-teal-600"
        variants={zoomIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      />

      {/* Horizontal line */}
      <motion.span
        className="hidden md:block absolute bottom-0 left-1/2 h-px w-10 -translate-x-1/2 bg-teal-600"
        variants={zoomIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      />
      <motion.div
        variants={slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <p className={`blackText__paragraph ${descClassName}`}>{desc}</p>
      </motion.div>
    </motion.div>
  );
};

export default SectionHeader;
