// ============================
// src/components/GalleryPage.jsx
// ============================
import { useState } from "react";

const galleryImages = [
  "/img/portfolio/01.jpg",
  "/img/portfolio/02.jpg",
  "/img/portfolio/03.jpg",
  "/img/portfolio/04.jpg",
  "/img/portfolio/05.jpg",
  "/img/portfolio/06.jpg",
];

const GalleryPage = ({ title }) => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl text-teal-500 font-semibold text-center mb-12">{title}</h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden cursor-pointer group"
              onClick={() => setActiveImage(img)}
            >
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
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
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setActiveImage(null)}
          >
            <img
              src={activeImage}
              alt="active"
              className="max-w-4xl max-h-[85vh] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryPage;
