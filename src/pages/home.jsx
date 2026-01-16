import HeroSlider from "../components/home/hero";
import About from "../components/home/About";
import Features from "../components/home/features";
import Services from "../components/home/services";
import Counter from "../components/home/counter";
import Team from "../components/home/team";
import TestimonialsSlider from "../components/home/testimonials";
import BlogSection from "../components/home/blog";

const Home = () => {
  return (
    <div className="">
      <HeroSlider />
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
