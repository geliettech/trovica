import GalleryPage from "../../components/gallery";
import { Helmet } from "react-helmet-async";


const BusinessCorporate = () => {
  return (
    <>
      <Helmet>
        <title>Business & Corporate | Trovica Agency</title>
        <meta
          name="description"
          content="Explore our business and corporate projects that demonstrate our expertise in creating impactful visual solutions."
        />
      </Helmet>
      <GalleryPage title="Business & Corporate" />
    </>
  );
};
export default BusinessCorporate;