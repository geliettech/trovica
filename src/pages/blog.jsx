import { Link } from "react-router";
import SectionHeader from "../components/SectionHeader";
import Blogs from "../data/blog";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { fadeIn } from "../animations/motion";

const BlogPage = () => {
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
          <div className="grid lg:grid-cols-3 gap-8">
            {Blogs.map((blog) => (
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

          <div className='container'>
            previous 1 2 3 Next
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
