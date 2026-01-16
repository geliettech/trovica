import { BrowserRouter, Routes, Route } from "react-router";
import TopBar from "./components/topBar";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import Gallery from "./pages/gallery";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import NotFound from "./pages/NotFound";
import CTAAndFooter from "./components/footer";
import SingleBlogPage from "./components/home/blogDetails";


function App() {
  return (
    <BrowserRouter>
    <TopBar />
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CTAAndFooter />
    </BrowserRouter>
  )
}

export default App
