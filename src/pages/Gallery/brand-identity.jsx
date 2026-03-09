import GalleryPage from "../../components/gallery";
import { Helmet } from "react-helmet-async";


const BrandIdentity = () => {
  return (
    <>
      <Helmet>
        <title>Brand Identity | Trovica Agency</title>
        <meta
          name="description"
          content="Discover our brand identity projects that showcase unique visual concepts and strategic branding solutions."
        />
      </Helmet>
      <GalleryPage title="Brand Identity" />
    </>
  );
};
export default BrandIdentity;