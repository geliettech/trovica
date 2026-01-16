// import React from "react";

// // Single blog card component
// const BlogCard = ({ imgSrc, title, date, year, description, link }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden">
//       <img src={imgSrc} alt={title} className="w-full" />
//       <div className="p-6 blog-content">
//         <h4 className="text-xl font-semibold mb-2">
//           <a href={link} className="hover:text-blue-500">{title}</a>
//         </h4>
//         <div className="flex gap-2 text-gray-500 text-sm mb-4">
//           <a href="#">{date}</a>
//           <a href="#">{year}</a>
//         </div>
//         <p className="text-gray-700 mb-4">{description}</p>
//         <a 
//           href={link} 
//           className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//         >
//           Read me
//         </a>
//       </div>
//     </div>
//   );
// };

// // Blog section component
// const BlogSection = () => {
//   const blogs = [
//     {
//       imgSrc: "img/blog/blog1.jpg",
//       title: "The Power of Responsive Design",
//       date: "20 June",
//       year: "2025",
//       description:
//         "Learn how our responsive web design ensures seamless experiences across all devices, helping your brand engage customers effectively.",
//       link: "./single-blog.html",
//     },
//     {
//       imgSrc: "img/blog/blog2.jpg",
//       title: "Creative Branding Strategies",
//       date: "15 July",
//       year: "2025",
//       description:
//         "Discover the creative approaches we use in branding to make your business memorable and stand out in a competitive market.",
//       link: "./single-blog.html",
//     },
//     {
//       imgSrc: "img/blog/blog3.jpg",
//       title: "Web Development Trends 2025",
//       date: "10 August",
//       year: "2025",
//       description:
//         "Stay ahead with the latest web development trends. From interactive interfaces to optimized performance, we build websites that convert.",
//       link: "./single-blog.html",
//     },
//   ];

//   return (
//     <section className="py-24 bg-gray-50">
//       <div className="container mx-auto px-4">
//         {/* Section title */}
//         <div className="flex flex-col md:flex-row items-center mb-12">
//           <div className="md:w-1/2 text-right mb-4 md:mb-0">
//             <h4 className="text-2xl font-bold">
//               <span className="text-pink-500">Who we are?</span> Latest Blog
//             </h4>
//           </div>
//           <div className="md:w-1/2">
//             <p className="text-gray-600">
//               We are a full-service creative agency offering web design, web development, responsive design, graphics, and branding solutions to elevate your business online.
//             </p>
//           </div>
//         </div>

//         {/* Blog cards */}
//         <div className="grid gap-8 md:grid-cols-3">
//           {blogs.map((blog, index) => (
//             <BlogCard key={index} {...blog} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;
import React from "react";
import { Link } from "react-router";

const blogs = [
  {
    id: 1,
    title: "The Future of Responsive Design",
    date: "20 June",
    year: "2025",
    img: "img/blog/blog1.jpg",
  },
  {
    id: 2,
    title: "Creative Branding Tips",
    date: "15 July",
    year: "2025",
    img: "img/blog/blog2.jpg",
  },
  {
    id: 3,
    title: "Modern Web Development Trends",
    date: "10 August",
    year: "2025",
    img: "img/blog/blog3.jpg",
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={blog.img} alt={blog.title} className="w-full" />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">
                <Link to={`/blog/${blog.id}`} className="hover:text-blue-500">
                  {blog.title}
                </Link>
              </h4>
              <div className="flex gap-2 text-gray-500 text-sm mb-2">
                <span>{blog.date}</span>
                <span>{blog.year}</span>
              </div>
              <Link
                to={`/blog/${blog.id}`}
                className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
