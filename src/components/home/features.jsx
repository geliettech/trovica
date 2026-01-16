import { useState } from "react";


const faqs = [
  {
    title: "What services do you offer?",
    content:
      "We offer web design, web development, responsive design, graphics design, creative design, and branding services tailored to help businesses build strong digital identities.",
  },
  {
    title: "Do you design and develop responsive websites?",
    content:
      "Yes. All our websites are fully responsive and optimized for mobile, tablet, and desktop devices to ensure a seamless user experience across all screen sizes.",
  },
  {
    title: "Can you help with branding and visual identity?",
    content:
      "Absolutely. We help businesses define their brand identity through logo design, visual systems, creative assets, and consistent digital branding.",
  },
  {
    title: "Do you work on existing websites or redesign projects?",
    content:
      "Yes. We can redesign, improve, or expand existing websites to enhance performance, usability, design consistency, and overall brand impact.",
  },
];

const skills = [
  { name: "HTML", value: 78 },
  { name: "CSS", value: 97 },
  { name: "JavaScript", value: 87 },
  { name: "React", value: 77 },
  { name: "GitHub", value: 92 },
  { name: "WordPress", value: 91 },
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/img/features/bg-skill.jpg')" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {/* FAQ SECTION */}
          <div>
            <h4 className="page-title text-white">
              FAQ
            </h4>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                >
                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800"
                  >
                    {faq.title}
                    <span className="text-xl">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {activeIndex === index && (
                    <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                      {faq.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SKILLS SECTION */}
          <div>
            <h4 className="page-title text-white">
              Our Skills
            </h4>

            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <h5 className="font-medium capitalize text-gray-800">
                      {skill.name}
                    </h5>
                    <span className="text-sm text-gray-600">
                      {skill.value}%
                    </span>
                  </div>

                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 transition-all duration-700"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
