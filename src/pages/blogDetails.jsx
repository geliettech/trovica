// import React from "react";
// import { useParams, Link } from "react-router";
// import Blogs from "../data/blog";
// import { Helmet } from "react-helmet-async";

// // Sidebar component
// const Sidebar = ({ title, items }) => {
//   return (
//     <aside className="mb-8 bg-white p-6 rounded shadow">
//       <h4 className="text-xl font-semibold mb-4 text-gray-700">{title}</h4>
//       <ul className="space-y-4">
//         {items.map((item, idx) => (
//           <li key={idx} className="flex flex-col">
//             <a href={item.link} className="hover:text-teal-600 text-gray-700">
//               {item.icon && <i className={item.icon}></i>}
//               {item.label}
//             </a>
//             {item.date && (
//               <span className="text-gray-400 text-sm">{item.date}</span>
//             )}
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// const BlogDetails = () => {
//   const { id } = useParams();
//   const blog = Blogs.find((blog) => blog.id === Number(id));

//   if (!blog) return <p>Blog not found</p>;

//   const Blog = Blogs.slice(0, 2);

//   const latestPosts = [
//     {
//       label: "Responsive Web Design Tips",
//       link: "#",
//       date: "22 July 2025",
//       icon: "fa-solid fa-angles-right",
//     },
//     {
//       label: "Creative Logo Design Ideas",
//       link: "#",
//       date: "15 July 2025",
//       icon: "fa-solid fa-angles-right",
//     },
//     {
//       label: "Effective UX Strategies",
//       link: "#",
//       date: "10 July 2025",
//       icon: "fa-solid fa-angles-right",
//     },
//     {
//       label: "Branding Your Startup",
//       link: "#",
//       date: "5 July 2025",
//       icon: "fa-solid fa-angles-right",
//     },
//     {
//       label: "Graphic Design Inspiration",
//       link: "#",
//       date: "1 July 2025",
//       icon: "fa-solid fa-angles-right",
//     },
//   ];

//   const categories = [
//     { label: "Web Design", link: "#" },
//     { label: "Web Development", link: "#" },
//     { label: "Software Development", link: "#" },
//     { label: "Digital Marketing", link: "#" },
//     { label: "Graphics Design", link: "#" },
//   ];

//   return (
//     <>
//       <Helmet>
//         <title>{blog.title} | Trovica Agency</title>
//         <meta name="description" content={blog.description} />
//       </Helmet>
//       <section className="py-24 bg-gray-50">
//         <div className="container">
//           <Link
//             to="/blog"
//             className="inline-block mb-6 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
//           >
//             Back to Blogs
//           </Link>
//           <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
//             {/* Main content */}
//             <div className="md:col-span-8">
//               <div className="single-blog move-left">
//                 <img
//                   src={blog.img}
//                   alt={blog.title}
//                   loading="lazy"
//                   className="w-full rounded mb-4"
//                 />
//                 <h1 className="text-gray-700 text-xl font-medium uppercase">
//                   {blog.title}
//                 </h1>
//                 <span className="text-gray-400 text-sm leading-12">
//                   {blog.date} {blog.year}
//                 </span>
//                 {blog.content.map((text, index) => (
//                   <p key={index} className="blackText__paragraph">
//                     {text}
//                   </p>
//                 ))}
//               </div>

//               {/* Related posts */}
//               <div className="mt-16 mb-8">
//                 <h3 className="text-gray-700 text-xl font-semibold mb-6 uppercase">
//                   Related Posts
//                 </h3>
//                 <div className="grid md:grid-cols-2 gap-8">
//                   {Blog.map((blog) => (
//                     <div
//                       key={blog.id}
//                       className="bg-white shadow rounded-lg overflow-hidden"
//                     >
//                       <img src={blog.img} alt={blog.title} className="w-full" />
//                       <div className="p-4">
//                         <h4 className="text-xl font-semibold mb-2">
//                           <Link
//                             to={`/blog/${blog.id}`}
//                             className="hover:text-teal-500 text-gray-700"
//                           >
//                             {blog.title}
//                           </Link>
//                         </h4>
//                         <div className="flex gap-2 text-gray-500 text-sm mb-2">
//                           <span>{blog.date}</span>
//                           <span>{blog.year}</span>
//                         </div>
//                         <p className="blackText__paragraph">
//                           {blog.description}
//                         </p>
//                         <Link
//                           to={`/blog/${blog.id}`}
//                           className="mt-4 btn-primary rounded-md transformation"
//                         >
//                           Read More
//                         </Link>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               {/* Comment form */}
//               <div>
//                 <h3 className="text-xl font-semibold mb-4 text-gray-700">
//                   Leave a Reply
//                 </h3>
//                 <form className="flex flex-col gap-3">
//                   <input
//                     type="text"
//                     placeholder="Name"
//                     className="p-3 border border-gray-300 rounded"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     className="p-3 border border-gray-300 rounded"
//                   />
//                   <textarea
//                     rows="6"
//                     placeholder="Message"
//                     className="p-3 border border-gray-300 rounded"
//                   ></textarea>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
//                   >
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </div>

//             {/* Sidebar */}
//             <div className="md:col-span-4">
//               <Sidebar title="Latest Posts" items={latestPosts} />
//               <Sidebar title="Categories" items={categories} />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default BlogDetails;
import { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router"; // fixed import
import Blogs from "../data/blog";
import { Helmet } from "react-helmet-async";
import { FaAnglesRight, FaArrowLeft } from "react-icons/fa6";

// Sidebar component
const Sidebar = ({ title, items }) => (
  <aside className="mb-8 bg-white p-6 rounded shadow">
    <h4 className="text-xl font-semibold mb-4 text-gray-700">{title}</h4>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex flex-col">
          <Link
            to={item.link}
            className="hover:text-teal-600 text-gray-700 flex items-center gap-2"
          >
            {item.icon && <span className="text-teal-600">{item.icon}</span>}
            {item.label}
          </Link>
          {item.date && (
            <span className="text-gray-400 text-sm">{item.date}</span>
          )}
        </li>
      ))}
    </ul>
  </aside>
);

const BlogDetails = () => {
  const { id } = useParams();

  const blog = useMemo(
    () => Blogs.find((blog) => blog.id === Number(id)),
    [id]
  );

  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(`comments-${id}`)) || [];
    setComments(savedComments);
  }, [id]);

  if (!blog) return <p className="text-center py-24 text-gray-500">Blog not found</p>;

  // Latest Posts
  const latestPosts = useMemo(
    () =>
      [...Blogs]
        .slice(-5)
        .reverse()
        .map((post) => ({
          label: post.title,
          link: `/blog/${post.id}`,
          date: `${post.date} ${post.year}`,
          icon: <FaAnglesRight />,
        })),
    []
  );

  // Categories
  const categories = useMemo(
    () =>
      [...new Set(Blogs.map((b) => b.category))].map((category) => ({
        label: category,
        link: `/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`,
        icon: <FaAnglesRight />,
      })),
    []
  );

  // Related Posts
  const relatedPosts = useMemo(
    () =>
      Blogs.filter(
        (item) => item.category === blog.category && item.id !== blog.id
      ).slice(0, 2),
    [blog]
  );

  // Filtered Search Results
  const searchResults = useMemo(
    () =>
      search
        ? Blogs.filter((post) =>
            post.title.toLowerCase().includes(search.toLowerCase())
          ).slice(0, 5)
        : [],
    [search]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      name,
      email,
      message,
      date: new Date().toLocaleDateString(),
    };

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Helmet>
        <title>{blog.title} | Trovica Agency</title>
        <meta name="description" content={blog.description} />
      </Helmet>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center mb-6 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
          >
            <FaArrowLeft className="mr-2" /> Back to Blogs
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* MAIN CONTENT */}
            <div className="md:col-span-8">
              <article className="single-blog move-left bg-white p-6 rounded shadow">
                <img
                  src={blog.img}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full rounded mb-4"
                />
                <h1 className="text-gray-700 text-2xl font-bold mb-2 uppercase">
                  {blog.title}
                </h1>
                <span className="text-gray-400 text-sm mb-4 inline-block">
                  {blog.date} {blog.year}
                </span>

                {blog.content.map((text, index) => (
                  <p key={index} className="text-gray-700 mt-4 leading-relaxed">
                    {text}
                  </p>
                ))}
              </article>

              {/* RELATED POSTS */}
              {relatedPosts.length > 0 && (
                <div className="mt-16 mb-8">
                  <h3 className="text-gray-700 text-xl font-semibold mb-6 uppercase">
                    Related Posts
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {relatedPosts.map((post) => (
                      <div
                        key={post.id}
                        className="bg-white shadow rounded-lg overflow-hidden"
                      >
                        <img src={post.img} alt={post.title} className="w-full" />
                        <div className="p-4">
                          <h4 className="text-xl font-semibold mb-2">
                            <Link
                              to={`/blog/${post.id}`}
                              className="hover:text-teal-500 text-gray-700"
                            >
                              {post.title}
                            </Link>
                          </h4>
                          <div className="flex gap-2 text-gray-500 text-sm mb-2">
                            <span>{post.date}</span>
                            <span>{post.year}</span>
                          </div>
                          <p className="text-gray-600">{post.description}</p>
                          <Link
                            to={`/blog/${post.id}`}
                            className="mt-4 inline-block px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* COMMENTS */}
              <div className="my-10">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  Comments ({comments.length})
                </h3>
                {comments.length === 0 && (
                  <p className="text-gray-500">No comments yet.</p>
                )}
                <div className="space-y-4">
                  {comments.map((comment, idx) => (
                    <div key={idx} className="border p-4 rounded bg-gray-50">
                      <div className="flex justify-between mb-2">
                        <strong className="text-gray-700">{comment.name}</strong>
                        <span className="text-gray-400 text-sm">{comment.date}</span>
                      </div>
                      <p className="text-gray-600">{comment.message}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* COMMENT FORM */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  Leave a Reply
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                  <textarea
                    rows="6"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="md:col-span-4">
              {/* SEARCH */}
              <aside className="mb-8 bg-white p-6 rounded shadow">
                <h4 className="text-xl font-semibold mb-4 text-gray-700">
                  Search
                </h4>
                <input
                  type="text"
                  placeholder="Search blog..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                  aria-label="Search blogs"
                />
                {searchResults.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {searchResults.map((post) => (
                      <li key={post.id}>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-gray-700 hover:text-teal-600"
                        >
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </aside>

              {/* LATEST POSTS */}
              <Sidebar title="Latest Posts" items={latestPosts} />

              {/* CATEGORIES */}
              <Sidebar title="Categories" items={categories} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;