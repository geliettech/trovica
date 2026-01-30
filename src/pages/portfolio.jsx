import { useState } from "react";

const filters = ["all", "business", "finance", "marketing", "idea"];

const portfolioItems = [
  {
    id: 1,
    image: "/img/portfolio/01.jpg",
    category: ["idea", "finance"],
    title: "FinSpark",
    brand: "Startup Branding",
  },
  {
    id: 2,
    image: "/img/portfolio/02.jpg",
    category: ["business"],
    title: "CorpEdge",
    brand: "Business Identity",
  },
  {
    id: 3,
    image: "/img/portfolio/03.jpg",
    category: ["marketing", "finance"],
    title: "MarketFlow",
    brand: "Digital Marketing",
  },
  {
    id: 4,
    image: "/img/portfolio/04.jpg",
    category: ["idea", "business", "finance"],
    title: "VisionX",
    brand: "Product Strategy",
  },
  {
    id: 5,
    image: "/img/portfolio/05.jpg",
    category: ["business", "idea"],
    title: "BrandNest",
    brand: "Creative Branding",
  },
  {
    id: 6,
    image: "/img/portfolio/06.jpg",
    category: ["idea", "business", "marketing"],
    title: "LaunchPad",
    brand: "Marketing Concept",
  },
];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category.includes(activeFilter));

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-gray-100 py-12">
        <div className="container text-center">
          <h4 className="text-2xl font-semibold mb-2 text-teal-600">Portfolio</h4>
          <ul className="flex justify-center gap-2 text-sm text-teal-600">
            <li>
              <a href="/" className="hover:text-w">
                home
              </a>
            </li>
            <li>/</li>
            <li className="text-black">Portfolio</li>
          </ul>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24">
        <div className="container">
          {/* Filter Menu */}
          <ul className="flex flex-wrap justify-center gap-6 mb-12">
            {filters.map((filter) => (
              <li
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`cursor-pointer capitalize font-medium transition border border-teal-500 text-teal-500 p-2 ${
                  activeFilter === filter
                    ? "text-white bg-teal-500"
                    : "hover:text-teal-500/60"
                }`}
              >
                {filter}
              </li>
            ))}
          </ul>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden">
                <img
                  src={item.image}
                  alt="portfolio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="text-white text-3xl mb-3 border rounded-full p-4">+</span>
                  <h4 className="text-white text-lg font-semibold text-center">
                    {item.title}
                    <span className="block text-sm text-gray-300">
                      {item.brand}
                    </span>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
