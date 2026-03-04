import { Outlet, useLocation } from "react-router";
import { motion } from "framer-motion";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useScrollToTop from "../hooks/useScrollToTop";
import Button from "../components/Button";
import { pageVariants, pageTransition } from "../animations/motion";


const MainLayout = () => {
  const { pathname } = useLocation();

  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />

      {/* Page Content with Animation */}
      <motion.main
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        className="min-h-[60vh]"
      >
        <Outlet />
      </motion.main>

      {/* CTA Section */}
      <section className="bg-teal-50 py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:w-1/2">
            <h4 className="text-2xl font-bold mb-2 text-gray-800">
              Best Solution for Your Business
            </h4>
            <p className="text-gray-600">
              Our solutions cater to both enterprise-level projects and small
              business needs, ensuring growth and efficiency at every stage.
            </p>
          </div>

          <div className="md:w-1/2 text-center md:text-right">
            <Button text="Contact Us" to="/contact" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MainLayout;