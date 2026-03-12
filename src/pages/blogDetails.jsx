import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import Blogs from "../data/blog";
import { Helmet } from "react-helmet-async";
import { FaAnglesRight, FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { fadeIn } from "../animations/motion";

// Sidebar component
const Sidebar = ({ title, items }) => {
  return (
    <motion.aside
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} className="mb-8 bg-white p-6 rounded shadow">
      <h4 className="text-xl font-semibold mb-4 text-gray-700">{title}</h4>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex flex-col">
            <Link to={item.link} className="flex items-center gap-2 hover:text-teal-600 text-gray-700">
              {item.icon && <span className="text-teal-600">{item.icon}</span>}
              {item.label}
            </Link>
            {item.date && (
              <span className="text-gray-400 text-sm">{item.date}</span>
            )}
          </li>
        ))}
      </ul>
    </motion.aside>
  );
};

const BlogDetails = () => {
  const { id } = useParams();
  const blog = Blogs.find((blog) => blog.id === Number(id));

  if (!blog) return <p className="text-center py-24 text-gray-500">Blog not found</p>;

  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(`comments-${id}`)) || [];
    setComments(savedComments);
  }, [id]);

  // Latest Posts
  const latestPosts = [...Blogs]
    .slice(-5)
    .reverse()
    .map((post) => ({
      label: post.title,
      link: `/blog/${post.id}`,
      date: `${post.date} ${post.year}`,
      icon: <FaAnglesRight />,
    }));

  // Categories
  const categories = [...new Set(Blogs.map((b) => b.category))].map((category) => ({
    label: category,
    link: `/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`,
    icon: <FaAnglesRight />,
  }));

  // Related Posts
  const relatedPosts = Blogs.filter(
    (item) => item.category === blog.category && item.id !== blog.id
  ).slice(0, 2);


  // Filtered Search Results
  const searchResults = search
    ? Blogs.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 5)
    : [];



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
        <div className="container">
          <Button
            to="/blog"
            className="mb-6 inline-flex"
            text={
              <>
                <FaArrowLeftLong className="mr-2" />
                Back to Blogs
              </>
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* MAIN CONTENT */}
            <div className="md:col-span-8">
              <motion.article variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}>
                <img
                  src={blog.img}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full rounded mb-4"
                />
                <h1 className="text-gray-700 text-2xl font-medium uppercase">
                  {blog.title}
                </h1>
                <span className="text-gray-400 text-sm leading-12">
                  {blog.date} {blog.year}
                </span>
                {blog.content.map((text, index) => (
                  <p key={index} className="blackText__paragraph">
                    {text}
                  </p>
                ))}
              </motion.article>

              {/* RELATED POSTS */}
              {relatedPosts.length > 0 && (
                <div className="my-16">
                  <h3 className="text-gray-700 text-xl font-semibold mb-6 uppercase">
                    Related Posts
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {relatedPosts.map((post) => (
                      <motion.div
                        key={post.id}
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        className="bg-white shadow rounded-lg overflow-hidden"
                      >
                        <img src={post.img} alt={post.title} className="w-full" />
                        <div className="p-4">
                          <h4 className="text-xl font-semibold mb-2">
                            <Link
                              to={`/blog/${post.id}`}
                              className="hover:text-teal-500"
                            >
                              {post.title}
                            </Link>
                          </h4>
                          <div className="flex gap-2 text-gray-500 text-sm mb-2">
                            <span>{post.date}</span>
                            <span>{post.year}</span>
                          </div>
                          <p className="blackText__paragraph">{post.description}</p>
                          <Button text="Read More" to={`/blog/${post.id}`} className="mt-8" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
              {/* COMMENTS */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  Comments ({comments.length})
                </h3>
                {comments.length === 0 && (
                  <p className="text-gray-500">No comments yet.</p>
                )}
                <div className="space-y-4">
                  {comments.map((comment, idx) => (
                    <div key={idx} className="border border-teal-300 p-4 rounded bg-gray-50">
                      <div className="flex justify-between mb-2">
                        <strong className="text-gray-700">{comment.name}</strong>
                        <span className="text-gray-400 text-sm">{comment.date}</span>
                      </div>
                      <p className="blackText__paragraph">{comment.message}</p>
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
                  />
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
              <motion.aside
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }} className="mb-8 bg-white p-6 rounded shadow">
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
              </motion.aside>
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
