import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Button from "../components/Button";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found | Trovica Agency</title>
        <meta
          name="description"
          content="The page you are looking for does not exist. Explore our services and portfolio to discover how we can help your business thrive."
        />
      </Helmet>
      <div className="flex items-center justify-center min-h-[70vh] bg-gray-50 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h1 className="text-7xl font-extrabold text-teal-500 mb-4">404</h1>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Page Not Found
          </h2>

          <p className="text-gray-600 mb-6">
            Sorry, the page you are looking for does not exist or has been
            moved.
          </p>
          <Button text="Go Back Home" to="/" className="mt-8" />
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
