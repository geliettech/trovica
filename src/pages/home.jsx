import HeroSection from "../components/home/hero";
import About from "../components/About";
import Features from "../components/home/features";
import Services from "../components/services";
import Counter from "../components/home/counter";
import Team from "../components/home/team";
import TestimonialsSlider from "../components/home/testimonials";
import BlogSection from "../components/blog";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <About />
      <Features />
      <Services />
      <Counter />
      <Team />
      <TestimonialsSlider />
      <BlogSection />
    </div>
  );
};

export default Home;
