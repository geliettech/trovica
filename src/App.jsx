import { BrowserRouter, Routes, Route } from "react-router";
import TopBar from "./components/topBar";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/portfolio";
import GalleryOne from "./pages/GalleryOne";
import GalleryTwo from "./pages/GalleryTwo";
import GalleryThree from "./pages/GalleryThree";
import GalleryFour from "./pages/GalleryFour";
import Blog from "./pages/blog";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import CTAAndFooter from "./components/footer";
import SingleBlogPage from "./components/blogDetails";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Header />
      <Routes>
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CTAAndFooter />
    </BrowserRouter>
  );
}

export default App;
