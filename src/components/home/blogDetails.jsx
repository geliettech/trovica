import React from "react";
import { useParams, Link } from "react-router";
import Blogs from "./blogData";

// Related blog card component
const RelatedBlogCard = ({ imgSrc, title, date, year, description, link }) => (
  <div className="grid md:grid-cols-3 gap-8">
    {Blogs.map((blog) => (
      <div key={blog.id} className="bg-white shadow rounded-lg overflow-hidden">
        <img src={blog.img} alt={blog.title} className="w-full" />
        <div className="p-4">
          <h4 className="text-xl font-semibold mb-2">
            <Link to={`/blog/${blog.id}`} className="hover:text-teal-500">
              {blog.title}
            </Link>
          </h4>
          <div className="flex gap-2 text-gray-500 text-sm mb-2">
            <span>{blog.date}</span>
            <span>{blog.year}</span>
          </div>
          <p className="blackText__paragraph">{blog.description}</p>
          <Link
            to={`/blog/${blog.id}`}
            className="mt-4 btn-primary rounded-md transformation"
          >
            Read More
          </Link>
        </div>
      </div>
    ))}
  </div>
);

// Sidebar component
const Sidebar = ({ title, items }) => {
  return (
    <aside className="mb-8 bg-white p-6 rounded shadow">
      <h4 className="text-xl font-semibold mb-4">{title}</h4>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex flex-col">
            <a href={item.link} className="hover:text-teal-600">
              {item.icon && <i className={item.icon}></i>}
              {item.label}
            </a>
            {item.date && (
              <span className="text-gray-500 text-sm">{item.date}</span>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

const SingleBlogPage = () => {
  const { id } = useParams();
  const blog = Blogs.find((blog) => blog.id === Number(id));

  if (!blog) return <p>Blog not found</p>;


  const latestPosts = [
    {
      label: "Responsive Web Design Tips",
      link: "#",
      date: "22 July 2025",
      icon: "fa-solid fa-angles-right",
    },
    {
      label: "Creative Logo Design Ideas",
      link: "#",
      date: "15 July 2025",
      icon: "fa-solid fa-angles-right",
    },
    {
      label: "Effective UX Strategies",
      link: "#",
      date: "10 July 2025",
      icon: "fa-solid fa-angles-right",
    },
    {
      label: "Branding Your Startup",
      link: "#",
      date: "5 July 2025",
      icon: "fa-solid fa-angles-right",
    },
    {
      label: "Graphic Design Inspiration",
      link: "#",
      date: "1 July 2025",
      icon: "fa-solid fa-angles-right",
    },
  ];

  const categories = [
    { label: "Web Design", link: "#" },
    { label: "Web Development", link: "#" },
    { label: "Software Development", link: "#" },
    { label: "Digital Marketing", link: "#" },
    { label: "Graphics Design", link: "#" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <Link
          to="/blog"
          className="inline-block mb-6 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
        >
          Back to Blogs
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
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
            {/* Related posts */}
            <div className="mt-16 mb-8">
              <h3 className="text-xl font-semibold mb-6">Related Posts</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <RelatedBlogCard />
              </div>
            </div>
            {/* Comment form */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Leave a Reply</h3>
              <form className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-3 border border-gray-300 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 border border-gray-300 rounded"
                />
                <textarea
                  rows="6"
                  placeholder="Message"
                  className="p-3 border border-gray-300 rounded"
                ></textarea>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4">
            <Sidebar title="Latest Posts" items={latestPosts} />
            <Sidebar title="Categories" items={categories} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPage;
