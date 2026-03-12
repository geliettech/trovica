import { Link } from "react-router";
import SectionHeader from "../components/SectionHeader";
import Blogs from "../data/blog";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { fadeIn } from "../animations/motion";
import ReactPaginate from 'react-paginate';
import { useState } from "react";

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(Blogs.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const visibleBlogs = Blogs.slice(startIndex, endIndex);

  // handler used by react-paginate (zero-indexed)
  const handlePageClick = ({ selected }) => {
    const page = selected + 1;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <>
      <Helmet>
        <title>Blog | Trovica Agency</title>
        <meta
          name="description"
          content="Read our latest blog posts on web design, development, and digital marketing strategies to stay updated with the latest trends and insights."
        />
      </Helmet>
      <section className="py-24 bg-gray-50">
        <div className="container">
          {/* Section Header */}
          <SectionHeader
            quest="Who We Are?"
            title="Latest Blog"
            desc="We are a full-service creative agency offering web design, web development, responsive design, graphics, and branding solutions to elevate your business online."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="bg-white shadow rounded-lg overflow-hidden"
              >
                <img src={blog.img} alt={blog.title} className="w-full" />
                <div className="p-4">
                  <h4 className="text-xl font-semibold mb-2">
                    <Link
                      to={`/blog/${blog.id}`}
                      className="hover:text-teal-500"
                    >
                      {blog.title}
                    </Link>
                  </h4>
                  <div className="flex gap-2 text-gray-500 text-sm mb-2">
                    <span>{blog.date}</span>
                    <span>{blog.year}</span>
                  </div>
                  <p className="blackText__paragraph">{blog.description}</p>
                  <Button text="Read More" to={`/blog/${blog.id}`} className="mt-8" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <ReactPaginate
              pageCount={totalPages}
              pageRangeDisplayed={2}
              marginPagesDisplayed={1}
              onPageChange={handlePageClick}
              forcePage={currentPage - 1}
              containerClassName="inline-flex items-center space-x-1 flex-wrap"
              pageClassName=""
              pageLinkClassName="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 transition"
              activeLinkClassName="bg-teal-500 text-white"
              previousLabel="<<"
              nextLabel=">>"
              previousClassName="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
              nextClassName="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
              disabledClassName="opacity-50"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
