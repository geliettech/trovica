import SectionHeader from "../components/SectionHeader";
import { AboutItems, AboutRightItems } from "../data/about";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <>
    <Helmet>
      <title>About | Trovica Agency</title>
      <meta
        name="description"
        content="Professional web development and design services."
      />
    </Helmet>
      <section className="py-24 bg-gray-50">
        <div className="container">
          {/* SectionHeader */}
          <SectionHeader
            quest="Who We Are?"
            title="About Us"
            desc="We are a creative digital agency focused on delivering impactful
              web, design, and branding solutions that help businesses grow and
              stand out."
          />
          {/* Content */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="xl:col-span-6">
              <h4 className="page-title">Welcome to Halim</h4>

              <div className="space-y-4 blackText__paragraph">
                {AboutItems.map((items, index) => (
                  <p key={index} className="">
                    {items.text}
                  </p>
                ))}
              </div>

              <Link
                href="/about"
                className="mt-8 btn-primary rounded-md transformation"
              >
                Read More
              </Link>
            </div>

            {/* Right Content: Mission, Vission, History */}
            <div className="xl:col-span-5 xl:col-start-8 space-y-6">
              {AboutRightItems.map((item) => (
                <div className="flex items-center gap-4" key={item.title}>
                  <div className="text-3xl text-teal-600 border border-teal-600 rounded-full p-2">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="page-title mb-4">{item.title}</h4>
                    <p className="blackText__paragraph">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default AboutPage