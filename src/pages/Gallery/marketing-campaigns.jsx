import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { galleryCategories } from "../../data/gallery";


const MarketingCampaigns = () => {
  const [activeImage, setActiveImage] = useState(null);
  const gallery = galleryCategories.find(cat => cat.id === "marketing-campaigns");

  return (
    <>
      <Helmet>
        <title>Marketing Campaigns | Trovica Agency</title>
        <meta
          name="description"
          content="Explore our marketing campaigns that demonstrate our expertise in creating impactful and results-driven promotional strategies."
        />
      </Helmet>
      <section className="py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl text-teal-500 font-semibold text-center mb-12">{gallery.title}</h2>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.images.map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden cursor-pointer group"
                onClick={() => setActiveImage(img)}
              >
                <img
                  src={img}
                  alt={`gallery-${index}`}
                  className="w-full h-48 sm:h-64 lg:h-72 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white text-lg font-medium">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {activeImage && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setActiveImage(null)}
            >
              <img
                src={activeImage}
                alt="active"
                className="max-w-full max-h-[85vh] object-contain"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default MarketingCampaigns;