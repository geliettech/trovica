import { Link } from "react-router";
import SectionHeader from "../components/SectionHeader";
import Blogs from "../data/blog";
import { Helmet } from "react-helmet-async";

const BlogPage = () => {
  return (
    // <div className='container mx-auto px-4 md:px-6 lg:px-16 py-5'>
    //   <BlogSection />
    //   previous 1 2 3 Next
    // </div>
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
          <div className="grid md:grid-cols-3 gap-8">
            {Blogs.map((blog) => (
              <div
                key={blog.id}
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
        </div>
      </section>
    </>
  );
};

export default BlogPage;
