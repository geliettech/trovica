import {
  staggerContainer,
  fadeIn,
  slideUp,
  zoomIn,
  slideRight,
} from "../animations/motion";
import { motion } from "framer-motion";

const SectionHeader = ({ quest, title, desc }) => {
  return (
    <motion.div
      className="grid grid-cols-1 xl:grid-cols-2 items-center mb-16 gap-6 relative"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center xl:text-right">
        <h4>
          <motion.span
            className="block text-sm text-teal-600 mb-2"
            variants={slideUp}
            initial="hidden"
            animate="visible"
          >
            {quest}
          </motion.span>
          <motion.span
            className="text-3xl font-semibold uppercase text-gray-700"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            {title}
          </motion.span>
        </h4>
      </div>
      {/* Vertical line */}
      <motion.span
        className="hidden lg:block absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-teal-600"
        variants={zoomIn}
        initial="hidden"
        animate="visible"
      />

      {/* Horizontal line */}
      <motion.span
        className="hidden lg:block absolute bottom-0 left-1/2 h-px w-10 -translate-x-1/2 bg-teal-600"
        variants={zoomIn}
        initial="hidden"
        animate="visible"
      />
      <motion.div variants={slideRight} initial="hidden" animate="visible">
        <p className="blackText__paragraph">{desc}</p>
      </motion.div>
    </motion.div>
  );
};

export default SectionHeader;
