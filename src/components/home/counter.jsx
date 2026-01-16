import { FaUser, FaCode, FaFileAlt, FaMugHot } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const counters = [
  { icon: <FaUser />, number: 547, label: "Customers" },
  { icon: <FaCode />, number: 50000, label: "Lines of Code" },
  { icon: <FaFileAlt />, number: 45, label: "Projects Completed" },
  { icon: <FaMugHot />, number: 2000, label: "Cups of Coffee" },
];

const Counter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3,    // 30% of element visible
  });

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {counters.map((counter, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 gap-4"
            >
              <div className="text-4xl text-teal-600">{counter.icon}</div>
              <div className="text-center">
                <h4 className="text-2xl font-bold">
                  {inView ? (
                    <CountUp
                      end={counter.number}
                      duration={2}
                      separator=","
                    />
                  ) : (
                    0
                  )}
                </h4>
                <p className="text-gray-600 uppercase tracking-widest text-sm">
                  {counter.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
