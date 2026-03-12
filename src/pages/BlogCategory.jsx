import { useParams, Link } from "react-router";
import Blogs from "../data/blog";

const BlogCategory = () => {
  const { category } = useParams();

  const formattedCategory = category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const filteredBlogs = Blogs.filter(
    (blog) =>
      blog.category.toLowerCase().replace(/\s+/g, "-") === category
  );

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">

        <h1 className="text-3xl font-bold mb-10 text-gray-700">
          {formattedCategory} Blogs
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <img src={blog.img} alt={blog.title} />

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  <Link
                    to={`/blog/${blog.id}`}
                    className="hover:text-teal-600"
                  >
                    {blog.title}
                  </Link>
                </h3>

                <p className="text-gray-500 text-sm mb-2">
                  {blog.date} {blog.year}
                </p>

                <p>{blog.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogCategory;