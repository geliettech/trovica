import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { bounceIn } from "../animations/motion";
import { FaSearch } from "react-icons/fa";
import { filters, portfolioItems } from "../data/portfolio";
import Button from "../components/Button";
import { IoCloseSharp } from "react-icons/io5";

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null); // For modal

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category.includes(activeFilter));

  return (
    <>
      <Helmet>
        <title>Portfolio | Trovica Agency</title>
        <meta
          name="description"
          content="Explore our diverse portfolio showcasing innovative projects and creative solutions across various industries."
        />
      </Helmet>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          {/* Filter Menu */}
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 sm:mb-12">
            {filters.map((filter) => (
              <li
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`cursor-pointer capitalize font-medium transition-all border border-teal-500 text-teal-500 px-4 py-2 rounded ${activeFilter === filter
                  ? "text-white bg-teal-500"
                  : "hover:bg-teal-500/10 hover:text-teal-500"
                  }`}
              >
                {filter}
              </li>
            ))}
          </ul>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-lg"
                variants={bounceIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.brand}`}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <Button onClick={() => setSelectedItem(item)}
                    className="p-4 border border-white"
                    text={
                      <>
                        <FaSearch />
                      </>
                    } aria-label={`View ${item.title}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 sm:p-6"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            className="bg-white rounded-lg p-6 sm:p-8 max-w-lg w-full relative max-h-[90vh]" variants={bounceIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
          >
            <button
              className="absolute top-3 right-3 text-gray-700 text-2xl hover:text-gray-900 transition-colors"
              onClick={() => setSelectedItem(null)}
              aria-label="Close modal"
            >
              <IoCloseSharp />
            </button>
            <img
              src={selectedItem.image}
              alt={`${selectedItem.title} - ${selectedItem.brand}`}
              className="w-full mb-4 rounded"
            />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              {selectedItem.title}
            </h3>
            <p className="text-gray-500 text-sm sm:text-base">
              {selectedItem.brand}
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PortfolioPage;