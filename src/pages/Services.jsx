import ServicesCard from "../components/ServiceCard";
import { Helmet } from "react-helmet-async";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services | Trovica Agency</title>
        <meta
          name="description"
          content="Explore our comprehensive range of services, including web design, development, responsive layouts, creative design, graphics, and branding solutions tailored to elevate your business."
        />
      </Helmet>
      <ServicesCard />
    </>
  );
};

export default ServicesPage;
