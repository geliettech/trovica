import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import PortfolioPage from "./pages/portfolio";
import GalleryOne from "./pages/GalleryOne";
import GalleryTwo from "./pages/GalleryTwo";
import GalleryThree from "./pages/GalleryThree";
import GalleryFour from "./pages/GalleryFour";
import Blog from "./pages/blog";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SingleBlogPage from "./pages/blogDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/gallery-brand-identity" element={<GalleryOne />} />
          <Route path="/gallery-business" element={<GalleryTwo />} />
          <Route path="/gallery-marketing" element={<GalleryThree />} />
          <Route path="/gallery-creative" element={<GalleryFour />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
