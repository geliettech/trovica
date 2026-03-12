import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import PortfolioPage from "./pages/Portfolio";
import BrandIdentity from "./pages/Gallery/brand-identity";
import BusinessCorporate from "./pages/Gallery/business-corporate";
import MarketingCampaigns from "./pages/Gallery/marketing-campaigns";
import CreativeConcepts from "./pages/Gallery/creative-concepts";
import BlogPage from "./pages/blog";
import BlogDetails from "./pages/blogDetails";
import BlogCategory from "./pages/BlogCategory";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/gallery-brand-identity" element={<BrandIdentity />} />
          <Route
            path="/gallery-business-corporate"
            element={<BusinessCorporate />}
          />
          <Route
            path="/gallery-marketing-campaigns"
            element={<MarketingCampaigns />}
          />
          <Route
            path="/gallery-creative-concepts"
            element={<CreativeConcepts />}
          />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/blog/category/:category" element={<BlogCategory />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
