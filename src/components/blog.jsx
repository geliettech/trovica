import { Link } from "react-router";
import SectionTitle from "./sectionTitle";
import Blogs from "./blogData"



const BlogSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        {/* ======================= Blog Title ==================== */}
        <SectionTitle
          titleQuest="Who We Are?"
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
      </div>
    </section>
  );
};

export default BlogSection;
