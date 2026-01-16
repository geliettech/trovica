// import React from "react";

// // Sidebar component
// const Sidebar = ({ title, items }) => {
//   return (
//     <aside className="mb-8">
//       <h4 className="text-xl font-semibold mb-4">{title}</h4>
//       <ul className="space-y-3">
//         {items.map((item, idx) => (
//           <li key={idx} className="flex justify-between items-start">
//             <a href={item.link} className="flex items-center gap-2 hover:text-blue-500">
//               {item.icon && <i className={item.icon}></i>}
//               {item.label}
//             </a>
//             {item.date && <span className="text-gray-500 text-sm">{item.date}</span>}
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// // Related blog card component
// const RelatedBlogCard = ({ imgSrc, title, date, year, description, link }) => (
//   <div className="bg-white shadow rounded-lg overflow-hidden mb-6 md:mb-0">
//     <img src={imgSrc} alt={title} className="w-full" />
//     <div className="p-4">
//       <h4 className="text-lg font-semibold mb-2">
//         <a href={link} className="hover:text-blue-500">{title}</a>
//       </h4>
//       <div className="flex gap-2 text-gray-500 text-sm mb-2">
//         <span>{date}</span>
//         <span>{year}</span>
//       </div>
//       <p className="text-gray-700 text-sm">{description}</p>
//       <a
//         href={link}
//         className="inline-block mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//       >
//         Read me
//       </a>
//     </div>
//   </div>
// );

// // Single blog page component
// const SingleBlogPage = () => {
//   const relatedPosts = [
//     {
//       imgSrc: "/assets/img/blog/blog2.jpg",
//       title: "Creative Branding Tips",
//       date: "20 June",
//       year: "2025",
//       description:
//         "Explore how our branding solutions can make your business unforgettable.",
//       link: "#",
//     },
//     {
//       imgSrc: "/assets/img/blog/blog3.jpg",
//       title: "Modern Web Development Trends",
//       date: "15 July",
//       year: "2025",
//       description:
//         "Stay updated with the latest in web development to elevate your online presence.",
//       link: "#",
//     },
//   ];

//   const latestPosts = [
//     { label: "Responsive Web Design Tips", link: "#", date: "22 July 2025", icon: "fa-solid fa-angles-right" },
//     { label: "Creative Logo Design Ideas", link: "#", date: "15 July 2025", icon: "fa-solid fa-angles-right" },
//     { label: "Effective UX Strategies", link: "#", date: "10 July 2025", icon: "fa-solid fa-angles-right" },
//     { label: "Branding Your Startup", link: "#", date: "5 July 2025", icon: "fa-solid fa-angles-right" },
//     { label: "Graphic Design Inspiration", link: "#", date: "1 July 2025", icon: "fa-solid fa-angles-right" },
//   ];

//   const categories = [
//     { label: "Web Design", link: "#" },
//     { label: "Web Development", link: "#" },
//     { label: "Software Development", link: "#" },
//     { label: "Digital Marketing", link: "#" },
//     { label: "Graphics Design", link: "#" },
//   ];

//   return (
//     <section className="pt-24 pb-24 bg-gray-50">
//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8">
//         {/* Main content */}
//         <div className="md:col-span-8">
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold mb-4">The Future of Responsive Design</h2>
//             <img src="/assets/img/blog/blog1.jpg" alt="Blog" className="w-full rounded mb-4" />
//             <p className="mb-4 text-gray-700">
//               In today’s digital world, responsive design is essential to reach audiences on all devices. Our team creates websites that adjust seamlessly from desktops to mobile devices, ensuring the best user experience.
//             </p>
//             <p className="mb-4 text-gray-700">
//               Using modern frameworks and best practices, we develop websites that are not only visually appealing but also optimized for performance and SEO.
//             </p>
//             <p className="mb-4 text-gray-700">
//               Our web development approach focuses on clean code, fast loading times, and intuitive navigation to keep users engaged and satisfied.
//             </p>
//             <p className="mb-4 text-gray-700">
//               By combining creative design with technical expertise, we deliver websites that represent your brand identity and values effectively.
//             </p>
//             <p className="mb-4 text-gray-700">
//               Let us help you transform your digital presence with innovative solutions that capture attention and drive results.
//             </p>
//           </div>

//           {/* Related posts */}
//           <div className="mb-8">
//             <h3 className="text-xl font-semibold mb-6">Related Posts</h3>
//             <div className="grid md:grid-cols-2 gap-6">
//               {relatedPosts.map((post, idx) => (
//                 <RelatedBlogCard key={idx} {...post} />
//               ))}
//             </div>
//           </div>

//           {/* Comment form */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Leave a Reply</h3>
//             <form className="flex flex-col gap-3">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="p-3 border border-gray-300 rounded"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="p-3 border border-gray-300 rounded"
//               />
//               <textarea
//                 rows="6"
//                 placeholder="Message"
//                 className="p-3 border border-gray-300 rounded"
//               ></textarea>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Sidebar */}
//         <div className="md:col-span-4">
//           <Sidebar title="Latest Posts" items={latestPosts} />
//           <Sidebar title="Categories" items={categories} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SingleBlogPage;
import React from "react";
import { useParams, Link } from "react-router";
import Blogs from "./blogData";

const SingleBlogPage = () => {
  const { id } = useParams();
  const blog = Blogs.find((blog) => blog.id === Number(id));

  if (!blog) return <p>Blog not found</p>;

  return (
    <section className="py-24 bg-gray-50">
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Main content */}
        <div className="md:col-span-8">
          <div className="single-blog move-left">
            <img
              src={blog.img}
              alt={blog.title}
              loading="lazy"
              className="w-full rounded mb-4"
            />
            <h1>{blog.title}</h1>
            <span>
              {blog.date} {blog.year}
            </span>
            {blog.content.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          <Link
            to="/blog"
            className="inline-block mt-6 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
          >
            Back to Blogs
          </Link>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-4">
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-teal-600">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-teal-600">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-teal-600">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-teal-600">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-teal-600">
                  Graphics Design
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPage;
