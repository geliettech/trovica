import { useParams, Link, useNavigate  } from "react-router";
import Blogs from "../data/blog";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { fadeIn } from "../animations/motion";
import { FaArrowLeftLong } from "react-icons/fa6";



const BlogCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const formattedCategory = category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const filteredBlogs = Blogs.filter(
    (blog) =>
      blog.category.toLowerCase().replace(/\s+/g, "-") === category
  );

  return (
    <>
      <Helmet>
        <title>{formattedCategory} Blogs | Trovica Agency</title>
        <meta name="description" content={formattedCategory} />
      </Helmet>
      <section className="py-24 bg-gray-50">
        <div className="container">
          <Button onClick={() => navigate(-1)}
            className="mb-6 inline-flex"
            text={
              <>
                <FaArrowLeftLong className="mr-2" />
                Back
              </>
            }
          />
          <h1 className="text-3xl font-bold mb-10 text-gray-700">
            {formattedCategory} Blogs
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
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
        </div>
      </section>
    </>
  );
};

export default BlogCategory;