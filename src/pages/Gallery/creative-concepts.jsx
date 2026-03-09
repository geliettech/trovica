import GalleryPage from "../../components/gallery";
import { Helmet } from "react-helmet-async";


const CreativeConcepts = () => {
  return (
    <>
      <Helmet>
        <title>Creative Concepts | Trovica Agency</title>
        <meta
          name="description"
          content="Explore our creative concepts that showcase innovative ideas and artistic vision."
        />
      </Helmet>
      <GalleryPage title="Creative Concepts" />
    </>
  );
};
export default CreativeConcepts;