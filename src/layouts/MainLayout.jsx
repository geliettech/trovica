import { Outlet, useLocation, Link } from "react-router";
import { motion } from "framer-motion";
import TopBar from "../components/topBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useScrollToTop from "../hooks/useScrollToTop";
import Button from "../components/Button";

const MainLayout = () => {
  const { pathname } = useLocation();

  // Custom hook
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />

      {/* Page Content */}
      <main>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="min-h-[60vh]"
        >
          <Outlet />
        </motion.div>
      </main>

      {/* CTA Section */}
      <section className="bg-teal-50 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
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
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
