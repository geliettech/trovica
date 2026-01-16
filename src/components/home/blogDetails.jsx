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

const blogs = [
  {
    id: "1",
    title: "The Future of Responsive Design",
    date: "20 June",
    year: "2025",
    img: "img/blog/blog1.jpg",
    content: [
      "In today’s digital world, responsive design is essential to reach audiences on all devices.",
      "Our team creates websites that adjust seamlessly from desktops to mobile devices.",
      "Using modern frameworks and best practices, we develop visually appealing websites optimized for performance and SEO.",
      "Our approach focuses on clean code, fast loading times, and intuitive navigation.",
      "We combine creative design with technical expertise to deliver websites that reflect your brand."
    ],
  },
  {
    id: "2",
    title: "Creative Branding Tips",
    date: "15 July",
    year: "2025",
    img: "img/blog/blog2.jpg",
    content: [
      "Branding is more than a logo—it’s the identity of your business.",
      "We help businesses develop memorable visual identities.",
      "From logos to color schemes, we create cohesive branding that resonates with your audience.",
      "Our strategies ensure your brand stands out in a competitive market.",
      "Strong branding improves recognition and customer trust."
    ],
  },
  {
    id: "3",
    title: "Modern Web Development Trends",
    date: "10 August",
    year: "2025",
    img: "img/blog/blog3.jpg",
    content: [
      "Web development is constantly evolving.",
      "We stay updated with the latest trends to build interactive, user-friendly websites.",
      "From progressive web apps to responsive frameworks, we implement modern solutions.",
      "Optimized performance and UX are our top priorities.",
      "Our websites are designed to convert visitors into loyal customers."
    ],
  },
];

const SingleBlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <p className="text-center py-24 text-red-500">Blog not found!</p>;
  }

  return (
    <section className="pt-24 pb-24 bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Main content */}
        <div className="md:col-span-8">
          <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
          <img src={blog.img} alt={blog.title} className="w-full rounded mb-4" />
          {blog.content.map((para, idx) => (
            <p key={idx} className="mb-4 text-gray-700">{para}</p>
          ))}

          <Link
            to="/"
            className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Back to Blogs
          </Link>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-4">
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-blue-500">Web Design</Link></li>
              <li><Link to="#" className="hover:text-blue-500">Web Development</Link></li>
              <li><Link to="#" className="hover:text-blue-500">Software Development</Link></li>
              <li><Link to="#" className="hover:text-blue-500">Digital Marketing</Link></li>
              <li><Link to="#" className="hover:text-blue-500">Graphics Design</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPage;
